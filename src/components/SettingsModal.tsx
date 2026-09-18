import React, { useState } from 'react';
import { SchoolConfig, GradeLevel } from '../types';
import { Settings, X, Save, School, User, Calendar, Type, MapPin } from 'lucide-react';
import { TEACHERS_LIST, INITIAL_CLASSES, SAMPLE_SCHOOLS, SAMPLE_CAMPUSES } from '../data/sampleTimetables';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  onSave: (newConfig: SchoolConfig) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave
}) => {
  const [formData, setFormData] = useState<SchoolConfig>({ ...config });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 text-xs">
        <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-tight">Cấu Hình Thông Tin Trường, Phân Hiệu, Lớp & GV</h3>
              <p className="text-[10px] text-slate-400">Đồng bộ tự động vào TKB, Lịch Báo Giảng & Kế Hoạch Bài Dạy</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="space-y-2.5">
            {/* Tên Trường */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Tên Trường Tiểu Học:
              </label>
              <div className="relative">
                <School className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none font-semibold text-slate-900"
                  placeholder="Ví dụ: TRƯỜNG TIỂU HỌC TÂN THẠNH"
                  required
                />
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                <span className="text-[10px] text-slate-400">Chọn mẫu:</span>
                {SAMPLE_SCHOOLS.slice(0, 4).map((sch) => (
                  <button
                    key={sch}
                    type="button"
                    onClick={() => setFormData({ ...formData, schoolName: sch })}
                    className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 px-1.5 py-0.2 rounded transition-colors"
                  >
                    {sch.replace('TRƯỜNG TIỂU HỌC ', 'TH ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Phân hiệu & Năm học */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Phân Hiệu / Điểm Trường:
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    value={formData.campusName}
                    onChange={(e) => setFormData({ ...formData, campusName: e.target.value })}
                    className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    placeholder="Ví dụ: Phân hiệu 1"
                  />
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {SAMPLE_CAMPUSES.slice(0, 3).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setFormData({ ...formData, campusName: c })}
                      className="text-[9px] bg-slate-100 hover:bg-amber-100 text-slate-600 px-1 py-0.2 rounded"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Năm Học:
                </label>
                <input
                  type="text"
                  value={formData.schoolYear}
                  onChange={(e) => setFormData({ ...formData, schoolYear: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none font-medium"
                  placeholder="Ví dụ: 2026 - 2027"
                  required
                />
              </div>
            </div>

            {/* Khối & Lớp */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Khối Lớp:
                </label>
                <select
                  value={formData.selectedGrade}
                  onChange={(e) => {
                    const grade = parseInt(e.target.value, 10) as GradeLevel;
                    setFormData({
                      ...formData,
                      selectedGrade: grade,
                      selectedClass: `${grade}A`
                    });
                  }}
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none font-semibold bg-white cursor-pointer"
                >
                  <option value={1}>Khối 1</option>
                  <option value={2}>Khối 2</option>
                  <option value={3}>Khối 3</option>
                  <option value={4}>Khối 4</option>
                  <option value={5}>Khối 5</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Lớp Giảng Dạy:
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={formData.selectedClass}
                    onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none font-bold text-blue-700"
                    placeholder="Ví dụ: 5A"
                    required
                  />
                  <select
                    value={formData.selectedClass}
                    onChange={(e) => {
                      const c = e.target.value;
                      const g = parseInt(c.charAt(0), 10) as GradeLevel;
                      const update: Partial<SchoolConfig> = { selectedClass: c };
                      if (g >= 1 && g <= 5) update.selectedGrade = g;
                      const fTeacher = TEACHERS_LIST.find(t => t.mainClass === c);
                      if (fTeacher) update.selectedTeacher = fTeacher.name;
                      setFormData({ ...formData, ...update });
                    }}
                    className="text-xs bg-slate-100 border border-slate-300 rounded-lg px-1 text-slate-600 cursor-pointer"
                    title="Chọn nhanh lớp"
                  >
                    {INITIAL_CLASSES.map((cl) => (
                      <option key={cl} value={cl}>{cl}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Giáo viên */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Tên Giáo Viên Giảng Dạy:
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  value={formData.selectedTeacher}
                  onChange={(e) => setFormData({ ...formData, selectedTeacher: e.target.value })}
                  className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none font-medium"
                  placeholder="Ví dụ: Nguyễn Hoàng Tuấn"
                  required
                />
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                <span className="text-[10px] text-slate-400">Gợi ý GV:</span>
                {TEACHERS_LIST.slice(0, 6).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFormData({
                      ...formData,
                      selectedTeacher: t.name,
                      selectedClass: t.mainClass || formData.selectedClass,
                      selectedGrade: t.mainClass ? (parseInt(t.mainClass.charAt(0), 10) as GradeLevel) : formData.selectedGrade
                    })}
                    className="text-[10px] bg-slate-100 hover:bg-emerald-100 text-slate-700 px-1.5 py-0.2 rounded transition-colors"
                  >
                    {t.name} ({t.mainClass || t.role})
                  </button>
                ))}
              </div>
            </div>

            {/* Cỡ chữ Word */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center">
                <Type className="w-3 h-3 mr-1 text-blue-600" />
                Cỡ Chữ Xuất Word (Times New Roman):
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {([12, 13, 14] as const).map((fs) => (
                  <button
                    key={fs}
                    type="button"
                    onClick={() => setFormData({ ...formData, wordFontSize: fs })}
                    className={`py-1.5 rounded-lg text-xs font-bold font-mono border transition-all ${
                      formData.wordFontSize === fs
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Font {fs}pt
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2.5 border-t border-slate-200 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-lg"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95 flex items-center space-x-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu & Đồng Bộ Ngay</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
