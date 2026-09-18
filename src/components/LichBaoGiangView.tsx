import React, { useState } from 'react';
import { TimetableSlot, SchoolConfig, GradeLevel } from '../types';
import {
  FileText,
  Download,
  Printer,
  Calendar,
  Edit2,
  Check,
  Sparkles,
  ChevronRight,
  BookOpen,
  User,
  Users,
  School,
  MapPin,
  GraduationCap,
  SlidersHorizontal
} from 'lucide-react';
import { exportLichBaoGiangDocx, getWeekDayDate } from '../utils/docxExport';
import { SUBJECT_COLOR_MAP } from '../data/curriculumData';
import { TEACHERS_LIST, INITIAL_CLASSES, SAMPLE_SCHOOLS, SAMPLE_CAMPUSES, SPECIALIST_TEACHERS } from '../data/sampleTimetables';

interface LichBaoGiangViewProps {
  slots: TimetableSlot[];
  config: SchoolConfig;
  onChangeConfig: (newConfig: Partial<SchoolConfig>) => void;
  onUpdateSlot: (slot: TimetableSlot) => void;
  onNavigateToKHBD: () => void;
}

export const LichBaoGiangView: React.FC<LichBaoGiangViewProps> = ({
  slots,
  config,
  onChangeConfig,
  onUpdateSlot,
  onNavigateToKHBD
}) => {
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{ lessonName: string; ppct: string; note: string }>({
    lessonName: '',
    ppct: '',
    note: ''
  });

  const isTeacherMode = config.filterMode === 'teacher';

  const activeSlots = slots.filter((s) =>
    isTeacherMode ? s.teacherName === config.selectedTeacher : s.className === config.selectedClass
  );

  // Group slots by Day and Session for proper cell merging (1 Thứ/Ngày & 1 Buổi)
  const DAYS_ORDER = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

  interface SessionGroup {
    session: 'Sáng' | 'Chiều';
    slots: TimetableSlot[];
  }

  interface DayGroup {
    dayOfWeek: string;
    dateStr: string;
    totalSlots: number;
    sessions: SessionGroup[];
  }

  const dayGroups: DayGroup[] = [];
  let totalVisibleSlots = 0;

  DAYS_ORDER.forEach((day) => {
    const daySlots = activeSlots.filter((s) => s.dayOfWeek === day);
    if (daySlots.length === 0) return;

    const morning = daySlots
      .filter((s) => s.session === 'Sáng')
      .sort((a, b) => a.period - b.period);
    const afternoon = daySlots
      .filter((s) => s.session === 'Chiều')
      .sort((a, b) => a.period - b.period);

    const sessions: SessionGroup[] = [];
    if (morning.length > 0) sessions.push({ session: 'Sáng', slots: morning });
    if (afternoon.length > 0) sessions.push({ session: 'Chiều', slots: afternoon });

    const totalSlots = morning.length + afternoon.length;
    totalVisibleSlots += totalSlots;
    const dateStr = getWeekDayDate(config.startDate, config.selectedWeek, day);

    dayGroups.push({
      dayOfWeek: day,
      dateStr,
      totalSlots,
      sessions
    });
  });

  const handleStartEdit = (slot: TimetableSlot) => {
    setEditingRowId(slot.id);
    setEditValues({
      lessonName: slot.lessonName || '',
      ppct: slot.ppct ? slot.ppct.toString() : '',
      note: slot.note || ''
    });
  };

  const handleSaveEdit = (slot: TimetableSlot) => {
    onUpdateSlot({
      ...slot,
      lessonName: editValues.lessonName,
      ppct: editValues.ppct,
      note: editValues.note
    });
    setEditingRowId(null);
  };

  const handleDownloadDocx = () => {
    exportLichBaoGiangDocx(activeSlots, config, config.wordFontSize);
  };

  return (
    <div className="space-y-4 text-xs">
      {/* Top Action Bar with Quick Selection */}
      <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center">
              <FileText className="w-4 h-4 text-blue-600 mr-1.5" />
              {isTeacherMode
                ? `Lịch Báo Giảng Tuần ${config.selectedWeek} - GV: ${config.selectedTeacher}`
                : `Lịch Báo Giảng Tuần ${config.selectedWeek} - Lớp ${config.selectedClass}`}
            </h2>
            <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200">
              {isTeacherMode ? 'Theo Giáo Viên' : `Khối ${config.selectedGrade}`}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Trường: <span className="font-semibold text-slate-700">{config.schoolName}</span> ({config.campusName || 'Điểm chính'}) • Năm học {config.schoolYear}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => onChangeConfig({ filterMode: 'class' })}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all ${
                !isTeacherMode
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Xem Theo Lớp ({config.selectedClass})</span>
            </button>
            <button
              onClick={() => onChangeConfig({ filterMode: 'teacher' })}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all ${
                isTeacherMode
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Xem Theo GV ({config.selectedTeacher.split(' ').slice(-1)[0]})</span>
            </button>
          </div>

          {/* Quick Specialist Teacher Pills when in Teacher Mode */}
          {isTeacherMode && (
            <div className="hidden xl:flex items-center space-x-1 bg-emerald-50/70 p-1 rounded-lg border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-900 px-1">GV Chuyên:</span>
              {SPECIALIST_TEACHERS.slice(0, 5).map((st) => (
                <button
                  key={st.name}
                  type="button"
                  onClick={() => onChangeConfig({ selectedTeacher: st.name })}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-all ${
                    config.selectedTeacher === st.name
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                      : 'bg-white text-slate-700 hover:bg-emerald-100 border-emerald-200'
                  }`}
                >
                  {st.icon} {st.name.split(' ').slice(-1)[0]} ({st.subject})
                </button>
              ))}
            </div>
          )}

          <button
            onClick={handleDownloadDocx}
            className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Lịch Báo Giảng Word ({config.wordFontSize}pt)</span>
          </button>

          <button
            onClick={onNavigateToKHBD}
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Xem KHBD Tương Ứng</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Official Printable Sheet Style View */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 max-w-5xl mx-auto font-serif text-xs">
        {/* Official Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-200 pb-3.5 mb-3.5 text-xs text-slate-800">
          <div className="text-center sm:text-left space-y-0.5 mb-2 sm:mb-0">
            <p className="font-bold uppercase tracking-wider text-slate-900 text-xs">{config.schoolName || 'TRƯỜNG TIỂU HỌC TÂN THẠNH'}</p>
            <p className="font-semibold text-slate-700 text-[11px]">
              {isTeacherMode ? `GIÁO VIÊN: ${config.selectedTeacher}` : `TỔ CHUYÊN MÔN KHỐI ${config.selectedGrade}`}
            </p>
            <p className="text-[11px] text-slate-600">
              Phân hiệu: <span className="font-bold text-slate-800">{config.campusName || 'Điểm chính'}</span>
              {!isTeacherMode && (
                <> | Lớp: <span className="font-bold text-blue-700">{config.selectedClass}</span></>
              )}
            </p>
            <p className="text-[11px] text-slate-600">
              Giáo viên giảng dạy: <span className="font-bold text-slate-800">{config.selectedTeacher}</span>
            </p>
          </div>

          <div className="text-center space-y-0.5 self-center sm:self-auto">
            <p className="font-bold text-slate-900 tracking-wider text-xs">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-semibold text-slate-700 text-[11px]">Độc lập - Tự do - Hạnh phúc</p>
            <p className="text-slate-400 text-[10px]">---------------------------</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center my-4">
          <h1 className="text-base sm:text-lg font-bold uppercase tracking-tight text-blue-950 font-sans">
            LỊCH BÁO GIẢNG TUẦN {config.selectedWeek}
          </h1>
          <p className="text-[11px] italic text-slate-600 mt-0.5">
            Năm học: {config.schoolYear} --- {isTeacherMode ? `Họ và tên giáo viên: ${config.selectedTeacher}` : `Áp dụng cho Khối lớp ${config.selectedGrade} (Lớp ${config.selectedClass})`}
          </p>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-300 font-sans text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold text-center text-[11px]">
                <th className="p-2 border-r border-slate-800 w-24">Thứ / Ngày</th>
                <th className="p-2 border-r border-slate-800 w-16">Buổi</th>
                <th className="p-2 border-r border-slate-800 w-12">Tiết</th>
                {isTeacherMode && (
                  <th className="p-2 border-r border-slate-800 w-16">Lớp</th>
                )}
                <th className="p-2 border-r border-slate-800 w-40">Môn học / Phân môn</th>
                <th className="p-2 border-r border-slate-800 w-16">PPCT</th>
                <th className="p-2 border-r border-slate-800">Tên bài dạy</th>
                <th className="p-2 border-r border-slate-800 w-24">Ghi chú</th>
                <th className="p-2 w-14 text-center">Sửa</th>
              </tr>
            </thead>
            <tbody>
              {dayGroups.map((dayGroup) => (
                <React.Fragment key={dayGroup.dayOfWeek}>
                  {dayGroup.sessions.map((sessionGroup, sessionIdx) => (
                    <React.Fragment key={`${dayGroup.dayOfWeek}-${sessionGroup.session}`}>
                      {sessionGroup.slots.map((slot, slotIdx) => {
                        const isFirstOfDay = sessionIdx === 0 && slotIdx === 0;
                        const isFirstOfSession = slotIdx === 0;
                        const isEditing = editingRowId === slot.id;
                        const color = SUBJECT_COLOR_MAP[slot.subject];

                        return (
                          <tr
                            key={slot.id}
                            className={`border-b border-slate-200 hover:bg-blue-50/50 transition-colors ${
                              sessionGroup.session === 'Sáng' ? 'bg-white' : 'bg-slate-50/60'
                            }`}
                          >
                            {/* 1. CỘT THỨ / NGÀY - 1 THỨ 1 NGÀY GỘP TOÀN BỘ 7 TIẾT TRONG NGÀY */}
                            {isFirstOfDay && (
                              <td
                                rowSpan={dayGroup.totalSlots}
                                className="p-2 border-r border-slate-300 text-center font-bold text-slate-900 bg-slate-100/90 align-middle text-xs"
                              >
                                <div className="text-slate-900 font-bold uppercase tracking-tight text-xs">
                                  {dayGroup.dayOfWeek}
                                </div>
                                <div className="text-[11px] text-blue-800 font-bold mt-1 bg-white px-1.5 py-0.5 rounded border border-slate-200 inline-block shadow-2xs">
                                  {dayGroup.dateStr}
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono mt-1">
                                  ({dayGroup.totalSlots} tiết)
                                </div>
                              </td>
                            )}

                            {/* 2. CỘT BUỔI - GỘP TOÀN BỘ CÁC TIẾT TRONG BUỔI (SÁNG / CHIỀU) */}
                            {isFirstOfSession && (
                              <td
                                rowSpan={sessionGroup.slots.length}
                                className={`p-2 border-r border-slate-300 text-center font-bold align-middle text-xs ${
                                  sessionGroup.session === 'Sáng'
                                    ? 'bg-blue-50/40 text-blue-900'
                                    : 'bg-amber-50/40 text-amber-900'
                                }`}
                              >
                                <div className="font-bold text-xs">{sessionGroup.session}</div>
                                <div className="text-[10px] text-slate-400 font-mono font-medium mt-0.5">
                                  ({sessionGroup.slots.length} tiết)
                                </div>
                              </td>
                            )}

                            {/* 3. CỘT TIẾT */}
                            <td className="p-1.5 text-center font-bold text-slate-900 border-r border-slate-200 font-mono text-xs">
                              {slot.period}
                            </td>

                            {/* 4. CỘT LỚP (NẾU XEM THEO GIÁO VIÊN) */}
                            {isTeacherMode && (
                              <td className="p-1.5 text-center font-bold text-blue-700 border-r border-slate-200 font-mono text-xs">
                                {slot.className}
                              </td>
                            )}

                            {/* 5. CỘT MÔN HỌC / PHÂN MÔN */}
                            <td className="p-1.5 border-r border-slate-200">
                              <span className={`font-bold text-xs ${color?.text || 'text-slate-800'}`}>
                                {slot.subject}
                              </span>
                              {slot.subSubject && (
                                <span className="text-[10px] text-slate-500 block font-normal">
                                  ({slot.subSubject})
                                </span>
                              )}
                            </td>

                            {/* 6. TIẾT PPCT */}
                            <td className="p-1.5 text-center font-mono font-bold text-slate-800 border-r border-slate-200 text-xs">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={editValues.ppct}
                                  onChange={(e) => setEditValues({ ...editValues, ppct: e.target.value })}
                                  className="w-12 text-center p-0.5 border border-slate-300 rounded font-mono text-xs"
                                />
                              ) : (
                                slot.ppct || '-'
                              )}
                            </td>

                            {/* 7. TÊN BÀI DẠY */}
                            <td className="p-1.5 border-r border-slate-200 font-medium text-slate-800 text-xs">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={editValues.lessonName}
                                  onChange={(e) => setEditValues({ ...editValues, lessonName: e.target.value })}
                                  className="w-full p-0.5 border border-slate-300 rounded text-xs"
                                />
                              ) : (
                                slot.lessonName || `${slot.subject} Tiết ${slot.ppct || slot.period}`
                              )}
                            </td>

                            {/* 8. GHI CHÚ (MẶC ĐỊNH ĐỂ TRỐNG THEO YÊU CẦU) */}
                            <td className="p-1.5 text-center text-slate-500 italic text-[10px] border-r border-slate-200">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={editValues.note}
                                  onChange={(e) => setEditValues({ ...editValues, note: e.target.value })}
                                  placeholder="Ghi chú..."
                                  className="w-full p-0.5 border border-slate-300 rounded text-xs"
                                />
                              ) : (
                                slot.note || ''
                              )}
                            </td>

                            {/* 9. THAO TÁC SỬA */}
                            <td className="p-1.5 text-center">
                              {isEditing ? (
                                <button
                                  onClick={() => handleSaveEdit(slot)}
                                  className="p-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow-xs"
                                  title="Lưu"
                                >
                                  <Check className="w-3 h-3" />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleStartEdit(slot)}
                                  className="p-1 text-slate-400 hover:text-blue-600 rounded hover:bg-blue-50"
                                  title="Chỉnh sửa"
                                >
                                  <Edit2 className="w-3 h-3" />
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}

              {dayGroups.length === 0 && (
                <tr>
                  <td colSpan={isTeacherMode ? 9 : 8} className="p-6 text-center text-slate-400 text-xs">
                    {isTeacherMode
                      ? `Chưa có tiết học nào cho Giáo viên ${config.selectedTeacher}. Vui lòng chuyển sang tab Thời Khóa Biểu để thêm tiết học.`
                      : `Chưa có tiết học nào cho Lớp ${config.selectedClass}. Vui lòng chuyển sang tab Thời Khóa Biểu để thêm tiết học.`}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Note indicating user requested no bottom signatures on Lịch Báo Giảng */}
        <div className="mt-4 pt-3 text-center text-slate-400 text-[11px] italic">
          (Lịch báo giảng tự động cập nhật theo Thời khóa biểu nhà trường - Không có ký duyệt cuối bảng theo quy định)
        </div>
      </div>
    </div>
  );
};
