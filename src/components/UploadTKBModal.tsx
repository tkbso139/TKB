import React, { useState } from 'react';
import { TimetableSlot, GradeLevel } from '../types';
import { Upload, FileText, CheckCircle2, AlertCircle, RefreshCw, X, Table as TableIcon } from 'lucide-react';
import { INITIAL_TIMETABLE_SLOTS } from '../data/sampleTimetables';

interface UploadTKBModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyTimetable: (slots: TimetableSlot[]) => void;
}

export const UploadTKBModal: React.FC<UploadTKBModalProps> = ({
  isOpen,
  onClose,
  onApplyTimetable
}) => {
  const [importMode, setImportMode] = useState<'preset' | 'text' | 'file'>('preset');
  const [pastedText, setPastedText] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<'nhonninh' | 'tanthanh' | 'chibi'>('nhonninh');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyPreset = () => {
    onApplyTimetable(INITIAL_TIMETABLE_SLOTS);
    setStatusMessage('Đã nạp thời khóa biểu Trường TH Nhơn Ninh (Phân hiệu 2) thành công cho tất cả GVCN & GV Chuyên!');
    setTimeout(() => {
      onClose();
      setStatusMessage(null);
    }, 800);
  };

  const handleApplyText = () => {
    try {
      // Try JSON parsing
      if (pastedText.trim().startsWith('[') || pastedText.trim().startsWith('{')) {
        const parsed = JSON.parse(pastedText);
        const slots: TimetableSlot[] = Array.isArray(parsed) ? parsed : [parsed];
        onApplyTimetable(slots);
        setStatusMessage(`Đã cập nhật ${slots.length} tiết học vào TKB!`);
        setTimeout(() => {
          onClose();
          setStatusMessage(null);
        }, 600);
        return;
      }

      // Simple CSV/TSV parser (Thứ, Buổi, Tiết, Môn, Tiết PPCT, Bài học, Lớp, GV)
      const lines = pastedText.trim().split('\n');
      const slots: TimetableSlot[] = [];
      
      lines.forEach((line, idx) => {
        const parts = line.split(/[\t,;|]/).map(p => p.trim());
        if (parts.length >= 4) {
          const day = parts[0].includes('Hai') ? 'Thứ Hai' :
                      parts[0].includes('Ba') ? 'Thứ Ba' :
                      parts[0].includes('Tư') ? 'Thứ Tư' :
                      parts[0].includes('Năm') ? 'Thứ Năm' : 'Thứ Sáu';
          const session = parts[1].toLowerCase().includes('chiều') ? 'Chiều' : 'Sáng';
          const period = parseInt(parts[2], 10) || 1;
          const subject = parts[3] || 'Tiếng Việt';
          const className = parts[6] || '5A';
          const grade = (parseInt(className.charAt(0), 10) || 5) as GradeLevel;

          slots.push({
            id: `custom-slot-${idx}-${Date.now()}`,
            dayOfWeek: day as any,
            session: session as any,
            period,
            subject,
            ppct: parts[4] || 1,
            lessonName: parts[5] || `${subject} Tiết ${parts[4] || 1}`,
            className,
            grade,
            teacherName: parts[7] || 'Giáo viên bộ môn'
          });
        }
      });

      if (slots.length > 0) {
        onApplyTimetable(slots);
        setStatusMessage(`Đã import thành công ${slots.length} tiết học từ văn bản!`);
        setTimeout(() => {
          onClose();
          setStatusMessage(null);
        }, 600);
      } else {
        setStatusMessage('Không nhận diện được định dạng TKB. Hãy kiểm tra lại định dạng dữ liệu.');
      }
    } catch (err) {
      setStatusMessage('Lỗi đọc dữ liệu TKB. Vui lòng kiểm tra định dạng!');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      setPastedText(content);
      setImportMode('text');
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 text-xs">
        {/* Modal Header */}
        <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <Upload className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-tight">Đưa Thời Khóa Biểu (TKB) Mới Lên Hệ Thống</h3>
              <p className="text-[10px] text-slate-400">Cập nhật nhanh TKB nhà trường khi có thay đổi liên tục</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-3">
          {/* Option Selector */}
          <div className="flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setImportMode('preset')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                importMode === 'preset'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chọn Mẫu TKB Có Sẵn
            </button>
            <button
              onClick={() => setImportMode('text')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                importMode === 'text'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nhập / Dán Dữ Liệu TKB
            </button>
            <button
              onClick={() => setImportMode('file')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                importMode === 'file'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tải Tệp Lên
            </button>
          </div>

          {statusMessage && (
            <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-[11px] flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {importMode === 'preset' && (
            <div className="space-y-2">
              <p className="text-[11px] text-slate-600 font-medium">
                Chọn một trong các mẫu Thời khóa biểu hoàn chỉnh đã được lập trình sẵn:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div
                  onClick={() => setSelectedPreset('nhonninh')}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                    selectedPreset === 'nhonninh'
                      ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-400'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-blue-900">TH Nhơn Ninh - Điểm Đường Cắt</span>
                    <span className="text-[9px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono font-medium">Chuẩn 2026-2027</span>
                  </div>
                  <p className="text-[10px] text-slate-600 mt-1">
                    Thầy Bình (GVCN 2A) + 7 GV chuyên (Thầy Vinh GDTC, Thầy Nghiêm ĐĐ, Cô Nhung ÂN, Thầy Thạnh MT, Thầy Hải TH, Cô Trang TA, Cô Uyên TA).
                  </p>
                </div>

                <div
                  onClick={() => setSelectedPreset('tanthanh')}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                    selectedPreset === 'tanthanh'
                      ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-400'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">Trường TH Tân Ninh</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-medium">Toàn trường</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Thời khóa biểu 2 buổi/ngày theo chuẩn chương trình GDPT 2018 Kết nối tri thức.
                  </p>
                </div>
              </div>
            </div>
          )}

          {importMode === 'text' && (
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-slate-700">
                Dán chuỗi JSON hoặc dòng bảng (Thứ, Buổi, Tiết, Môn, Tiết PPCT, Tên bài, Lớp, GV):
              </label>
              <textarea
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Ví dụ: Thứ Hai, Sáng, 1, HĐTN, 7, SHDC: Hoạt động vui Trung Thu, 5A, Nguyễn Hoàng Tuấn..."
                rows={6}
                className="w-full text-xs font-mono p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          )}

          {importMode === 'file' && (
            <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center bg-slate-50/50 transition-colors">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-1.5" />
              <p className="text-xs font-semibold text-slate-700">Kéo thả tệp TKB vào đây hoặc chọn tệp từ máy tính</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Hỗ trợ tệp định dạng .json, .csv, .txt, .tsv</p>
              <label className="mt-3 inline-block px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg cursor-pointer shadow-xs transition-all active:scale-95">
                Chọn Tệp Từ Máy Tính
                <input
                  type="file"
                  accept=".json,.csv,.txt,.tsv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Hủy Bỏ
          </button>

          {importMode === 'preset' ? (
            <button
              onClick={handleApplyPreset}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95 flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Nạp TKB Chuẩn Này</span>
            </button>
          ) : (
            <button
              onClick={handleApplyText}
              disabled={!pastedText.trim()}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95 flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span>Áp Dụng Dữ Liệu TKB</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
