import React, { useState } from 'react';
import { TimetableSlot, SchoolConfig, GradeLevel } from '../types';
import {
  Upload,
  Download,
  Plus,
  Trash2,
  Edit3,
  Sparkles,
  User,
  Users,
  Grid,
  Calendar,
  Clock,
  LayoutGrid,
  Table as TableIcon,
  CheckCircle2,
  BookOpen,
  Info
} from 'lucide-react';
import { SUBJECT_COLOR_MAP } from '../data/curriculumData';
import { TEACHERS_LIST, INITIAL_CLASSES, SPECIALIST_TEACHERS } from '../data/sampleTimetables';
import { exportTimetableDocx, getWeekDayDate } from '../utils/docxExport';

interface TimetableManagerProps {
  slots: TimetableSlot[];
  config: SchoolConfig;
  onChangeConfig: (newConfig: Partial<SchoolConfig>) => void;
  onUpdateSlot: (updatedSlot: TimetableSlot) => void;
  onAddSlot: (newSlot: TimetableSlot) => void;
  onDeleteSlot: (slotId: string) => void;
  onOpenUploadModal: () => void;
  onNavigateToKHBD: () => void;
}

export const TimetableManager: React.FC<TimetableManagerProps> = ({
  slots,
  config,
  onChangeConfig,
  onUpdateSlot,
  onAddSlot,
  onDeleteSlot,
  onOpenUploadModal,
  onNavigateToKHBD
}) => {
  const [viewMode, setViewMode] = useState<'class' | 'master' | 'teacher'>('class');
  const [displayStyle, setDisplayStyle] = useState<'matrix' | 'cards'>('matrix');
  const [editingSlot, setEditingSlot] = useState<TimetableSlot | null>(null);

  // Strictly Thứ Hai (2) -> Thứ Sáu (6)
  const DAYS_ORDER: ('Thứ Hai' | 'Thứ Ba' | 'Thứ Tư' | 'Thứ Năm' | 'Thứ Sáu')[] = [
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu'
  ];

  // Standard Period Times for Primary School
  const PERIOD_TIMES: Record<string, { time: string; label: string }> = {
    'Sáng-1': { time: '07:15 - 07:50', label: 'Tiết 1' },
    'Sáng-2': { time: '07:55 - 08:30', label: 'Tiết 2' },
    'Sáng-3': { time: '08:55 - 09:30', label: 'Tiết 3' },
    'Sáng-4': { time: '09:35 - 10:10', label: 'Tiết 4' },
    'Sáng-5': { time: '10:15 - 10:50', label: 'Tiết 5' },
    'Chiều-1': { time: '13:45 - 14:20', label: 'Tiết 1' },
    'Chiều-2': { time: '14:25 - 15:00', label: 'Tiết 2' },
    'Chiều-3': { time: '15:05 - 15:40', label: 'Tiết 3' },
    'Chiều-4': { time: '15:45 - 16:20', label: 'Tiết 4' }
  };

  // Filter slots for current selected class
  const classSlots = slots.filter((s) => s.className === config.selectedClass && DAYS_ORDER.includes(s.dayOfWeek as any));

  // Filter slots for current selected teacher
  const teacherSlots = slots.filter((s) => s.teacherName === config.selectedTeacher && DAYS_ORDER.includes(s.dayOfWeek as any));

  // Check if class has 5th morning period or 4th afternoon period
  const hasMorningPeriod5 = classSlots.some((s) => s.session === 'Sáng' && s.period === 5);
  const morningPeriods = hasMorningPeriod5 ? [1, 2, 3, 4, 5] : [1, 2, 3, 4];

  const hasAfternoonPeriod4 = classSlots.some((s) => s.session === 'Chiều' && s.period === 4);
  const afternoonPeriods = hasAfternoonPeriod4 ? [1, 2, 3, 4] : [1, 2, 3];

  // Subject statistics for selected class
  const subjectStats = React.useMemo(() => {
    const counts: Record<string, number> = {};
    classSlots.forEach((s) => {
      counts[s.subject] = (counts[s.subject] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [classSlots]);

  const handleSlotClick = (day: typeof DAYS_ORDER[number], session: 'Sáng' | 'Chiều', period: number) => {
    const existing = classSlots.find(
      (s) => s.dayOfWeek === day && s.session === session && s.period === period
    );

    if (existing) {
      setEditingSlot({ ...existing });
    } else {
      setEditingSlot({
        id: `slot-${Date.now()}`,
        dayOfWeek: day,
        session,
        period,
        subject: 'Tiếng Việt',
        className: config.selectedClass,
        grade: config.selectedGrade,
        teacherName: config.selectedTeacher,
        lessonName: '',
        ppct: 1
      });
    }
  };

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlot) return;

    const existingIndex = slots.findIndex((s) => s.id === editingSlot.id);
    if (existingIndex >= 0) {
      onUpdateSlot(editingSlot);
    } else {
      onAddSlot(editingSlot);
    }
    setEditingSlot(null);
  };

  const handleExportWord = () => {
    if (viewMode === 'teacher') {
      exportTimetableDocx(teacherSlots, config, config.selectedTeacher, 'teacher', config.wordFontSize);
    } else {
      exportTimetableDocx(classSlots, config, config.selectedClass, 'class', config.wordFontSize);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Action Bar */}
      <div className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Left: View Switcher & Selector */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setViewMode('class')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'class'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>TKB Lớp {config.selectedClass}</span>
            </button>

            <button
              onClick={() => setViewMode('teacher')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'teacher'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>TKB Giáo Viên</span>
            </button>

            <button
              onClick={() => setViewMode('master')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'master'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>TKB Toàn Trường</span>
            </button>
          </div>

          {/* Quick Class Dropdown */}
          {viewMode === 'class' && (
            <div className="flex items-center space-x-1.5 bg-blue-50/70 border border-blue-200 px-2.5 py-1 rounded-lg">
              <span className="text-xs text-blue-900 font-bold">Lớp:</span>
              <select
                value={config.selectedClass}
                onChange={(e) => {
                  const val = e.target.value;
                  const grade = (parseInt(val.charAt(0), 10) || 5) as GradeLevel;
                  onChangeConfig({
                    selectedClass: val,
                    selectedGrade: grade
                  });
                }}
                className="bg-white text-xs font-bold text-blue-950 rounded px-2 py-0.5 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                {INITIAL_CLASSES.map((cls) => (
                  <option key={cls} value={cls}>
                    Lớp {cls}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quick Teacher Dropdown & Specialist Badges */}
          {viewMode === 'teacher' && (
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="flex items-center space-x-1.5 bg-indigo-50/70 border border-indigo-200 px-2.5 py-1 rounded-lg">
                <span className="text-xs text-indigo-900 font-bold">Giáo viên:</span>
                <select
                  value={config.selectedTeacher}
                  onChange={(e) => onChangeConfig({ selectedTeacher: e.target.value })}
                  className="bg-white text-xs font-bold text-indigo-950 rounded px-2 py-0.5 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
                >
                  <optgroup label="--- Giáo Viên Chuyên Biệt (GVBM) ---">
                    {TEACHERS_LIST.filter(t => !t.mainClass).map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.subjects.join(', ')})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="--- Giáo Viên Chủ Nhiệm (GVCN) ---">
                    {TEACHERS_LIST.filter(t => t.mainClass).map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} (Lớp {t.mainClass})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Quick Specialist Pills */}
              <div className="hidden lg:flex items-center space-x-1">
                {SPECIALIST_TEACHERS.slice(0, 5).map((st) => (
                  <button
                    key={st.name}
                    type="button"
                    onClick={() => onChangeConfig({ selectedTeacher: st.name })}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-all ${
                      config.selectedTeacher === st.name
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-emerald-50 border-slate-200'
                    }`}
                  >
                    {st.icon} {st.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Style toggle (Matrix vs 5-Day Cards) for Class view */}
          {viewMode === 'class' && (
            <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
              <button
                onClick={() => setDisplayStyle('matrix')}
                title="Dạng Bảng Ma Trận"
                className={`p-1.5 rounded flex items-center space-x-1 transition-all ${
                  displayStyle === 'matrix' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span className="text-[11px]">Bảng chuẩn</span>
              </button>
              <button
                onClick={() => setDisplayStyle('cards')}
                title="Dạng Thẻ 5 Cột Thứ 2 - Thứ 6"
                className={`p-1.5 rounded flex items-center space-x-1 transition-all ${
                  displayStyle === 'cards' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px]">Thẻ Thứ 2-6</span>
              </button>
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenUploadModal}
            className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 shadow-xs"
          >
            <Upload className="w-3.5 h-3.5 text-slate-600" />
            <span>Nạp TKB Mới</span>
          </button>

          <button
            onClick={handleExportWord}
            className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất TKB Word (.docx)</span>
          </button>

          <button
            onClick={onNavigateToKHBD}
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lập KHBD Tự Động</span>
          </button>
        </div>
      </div>

      {/* Class Timetable Summary & Stats Banner */}
      {viewMode === 'class' && (
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-3.5 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Calendar className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-sm font-black tracking-tight text-white uppercase">
                  Thời Khóa Biểu Lớp {config.selectedClass}
                </h1>
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Thứ 2 đến Thứ 6
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                {config.schoolName} ({config.campusName}) | Tuần {config.selectedWeek} • Năm học {config.schoolYear}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 text-center">
              <div className="text-[10px] text-slate-300 font-medium">Tổng số tiết</div>
              <div className="text-sm font-black font-mono text-amber-300">{classSlots.length} tiết/tuần</div>
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 text-center">
              <div className="text-[10px] text-slate-300 font-medium">Định mức ngày</div>
              <div className="text-sm font-black font-mono text-emerald-300">7 tiết / ngày</div>
            </div>
          </div>
        </div>
      )}

      {/* Subject Distribution Quick Pills (Phân phối môn học trong tuần) */}
      {viewMode === 'class' && subjectStats.length > 0 && (
        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-700 flex items-center">
              <BookOpen className="w-3.5 h-3.5 mr-1 text-blue-600" />
              Cơ cấu phân phối số tiết các môn trong tuần ({config.selectedClass}):
            </span>
            <span className="text-[10px] text-slate-400">
              Nhấp vào ô trong bảng để sửa bài dạy hoặc đổi môn
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {subjectStats.map(([subj, count]) => {
              const color = SUBJECT_COLOR_MAP[subj] || { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300' };
              return (
                <div
                  key={subj}
                  className={`flex items-center space-x-1.5 px-2 py-0.5 rounded-md border text-xs font-semibold ${color.bg} ${color.border}`}
                >
                  <span className={color.text}>{subj}:</span>
                  <span className="font-bold font-mono px-1 py-0.2 rounded bg-white text-slate-900 text-[10px] shadow-2xs border border-slate-200">
                    {count} tiết
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 1: MATRIX TABLE VIEW (CHẾ ĐỘ BẢNG MA TRẬN CHUẨN THỨ 2 ĐẾN THỨ 6) */}
      {viewMode === 'class' && displayStyle === 'matrix' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-center font-bold text-xs">
                  <th className="p-2.5 w-16 border-r border-slate-800">Buổi</th>
                  <th className="p-2.5 w-24 border-r border-slate-800">Tiết & Giờ</th>
                  {DAYS_ORDER.map((day) => {
                    const dateStr = getWeekDayDate(config.startDate, config.selectedWeek, day);
                    return (
                      <th key={day} className="p-2.5 border-r border-slate-800 min-w-[150px]">
                        <div className="font-bold text-white text-xs tracking-tight uppercase">{day}</div>
                        {dateStr && (
                          <div className="text-[10px] text-blue-300 font-medium font-mono mt-0.5">
                            ({dateStr})
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* 1. KHỐI BUỔI SÁNG (Tiết 1 -> 4 hoặc 5) */}
                {morningPeriods.map((period, idx) => {
                  const timeInfo = PERIOD_TIMES[`Sáng-${period}`] || { time: '', label: `Tiết ${period}` };

                  return (
                    <tr
                      key={`sang-${period}`}
                      className={`border-b border-slate-200 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                      } hover:bg-blue-50/40`}
                    >
                      {idx === 0 && (
                        <td
                          rowSpan={morningPeriods.length}
                          className="bg-amber-50/80 font-black text-amber-900 text-center uppercase tracking-wider border-r border-slate-300 p-2 align-middle text-xs"
                        >
                          <div className="text-amber-900 font-extrabold">SÁNG</div>
                          <div className="text-[10px] text-amber-700/80 font-medium font-mono mt-1">
                            ({morningPeriods.length} tiết)
                          </div>
                        </td>
                      )}

                      <td className="p-2 text-center bg-slate-50/80 border-r border-slate-200">
                        <div className="font-bold font-mono text-slate-800 text-xs">Tiết {period}</div>
                        <div className="text-[10px] text-slate-500 font-mono flex items-center justify-center mt-0.5">
                          <Clock className="w-2.5 h-2.5 mr-0.5 text-slate-400" />
                          {timeInfo.time}
                        </div>
                      </td>

                      {DAYS_ORDER.map((day) => {
                        const slot = classSlots.find(
                          (s) => s.dayOfWeek === day && s.session === 'Sáng' && s.period === period
                        );
                        const color = slot
                          ? SUBJECT_COLOR_MAP[slot.subject] || {
                              bg: 'bg-blue-50',
                              text: 'text-blue-900',
                              border: 'border-blue-200',
                              badge: 'bg-blue-600'
                            }
                          : null;

                        return (
                          <td
                            key={day}
                            onClick={() => handleSlotClick(day, 'Sáng', period)}
                            className="p-1.5 border-r border-slate-200 cursor-pointer align-top hover:bg-blue-50/70 transition-all group"
                          >
                            {slot ? (
                              <div
                                className={`p-2 rounded-lg border transition-all h-full flex flex-col justify-between shadow-2xs hover:shadow-xs ${
                                  color?.bg || 'bg-white'
                                } ${color?.border || 'border-slate-200'}`}
                              >
                                <div>
                                  <div className="flex items-start justify-between gap-1 mb-1">
                                    <span className={`font-bold text-xs leading-tight ${color?.text || 'text-slate-900'}`}>
                                      {slot.subject}
                                    </span>
                                    {slot.ppct && (
                                      <span className="text-[9px] bg-white/95 px-1.5 py-0.2 rounded-md font-mono text-slate-800 border border-slate-300 font-bold shadow-2xs shrink-0">
                                        T{slot.ppct}
                                      </span>
                                    )}
                                  </div>

                                  {slot.subSubject && (
                                    <span className="inline-block text-[10px] text-slate-600 font-semibold bg-white/80 px-1.5 py-0.2 rounded border border-slate-200/80 mb-1">
                                      {slot.subSubject}
                                    </span>
                                  )}

                                  {slot.lessonName && (
                                    <p className="text-[10.5px] text-slate-700 font-medium leading-snug line-clamp-2 mt-0.5">
                                      {slot.lessonName}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center justify-between pt-1.5 mt-1 border-t border-slate-200/60 text-[10px] text-slate-500">
                                  <span className="truncate max-w-[95px] font-medium text-slate-600">
                                    {slot.teacherName}
                                  </span>
                                  {slot.note && (
                                    <span className="text-[9px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded font-semibold shrink-0">
                                      {slot.note}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="h-16 flex flex-col items-center justify-center text-slate-300 group-hover:text-blue-600 border border-dashed border-slate-200 rounded-lg group-hover:border-blue-300 group-hover:bg-blue-50/30 transition-all">
                                <Plus className="w-4 h-4 opacity-60" />
                                <span className="text-[9px] opacity-60 mt-0.5">Thêm tiết</span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                {/* VẠCH PHÂN CÁCH NGHỈ TRƯA */}
                <tr className="bg-slate-100/80 border-y border-slate-300">
                  <td colSpan={7} className="py-1 text-center text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    — NGHỈ TRƯA & CHUYỂN TIẾP BUỔI CHIỀU —
                  </td>
                </tr>

                {/* 2. KHỐI BUỔI CHIỀU (Tiết 1 -> 3 hoặc 4) */}
                {afternoonPeriods.map((period, idx) => {
                  const timeInfo = PERIOD_TIMES[`Chiều-${period}`] || { time: '', label: `Tiết ${period}` };

                  return (
                    <tr
                      key={`chieu-${period}`}
                      className={`border-b border-slate-200 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                      } hover:bg-indigo-50/40`}
                    >
                      {idx === 0 && (
                        <td
                          rowSpan={afternoonPeriods.length}
                          className="bg-indigo-50/80 font-black text-indigo-900 text-center uppercase tracking-wider border-r border-slate-300 p-2 align-middle text-xs"
                        >
                          <div className="text-indigo-900 font-extrabold">CHIỀU</div>
                          <div className="text-[10px] text-indigo-700/80 font-medium font-mono mt-1">
                            ({afternoonPeriods.length} tiết)
                          </div>
                        </td>
                      )}

                      <td className="p-2 text-center bg-slate-50/80 border-r border-slate-200">
                        <div className="font-bold font-mono text-slate-800 text-xs">Tiết {period}</div>
                        <div className="text-[10px] text-slate-500 font-mono flex items-center justify-center mt-0.5">
                          <Clock className="w-2.5 h-2.5 mr-0.5 text-slate-400" />
                          {timeInfo.time}
                        </div>
                      </td>

                      {DAYS_ORDER.map((day) => {
                        const slot = classSlots.find(
                          (s) => s.dayOfWeek === day && s.session === 'Chiều' && s.period === period
                        );
                        const color = slot
                          ? SUBJECT_COLOR_MAP[slot.subject] || {
                              bg: 'bg-purple-50',
                              text: 'text-purple-900',
                              border: 'border-purple-200',
                              badge: 'bg-purple-600'
                            }
                          : null;

                        return (
                          <td
                            key={day}
                            onClick={() => handleSlotClick(day, 'Chiều', period)}
                            className="p-1.5 border-r border-slate-200 cursor-pointer align-top hover:bg-indigo-50/70 transition-all group"
                          >
                            {slot ? (
                              <div
                                className={`p-2 rounded-lg border transition-all h-full flex flex-col justify-between shadow-2xs hover:shadow-xs ${
                                  color?.bg || 'bg-white'
                                } ${color?.border || 'border-slate-200'}`}
                              >
                                <div>
                                  <div className="flex items-start justify-between gap-1 mb-1">
                                    <span className={`font-bold text-xs leading-tight ${color?.text || 'text-slate-900'}`}>
                                      {slot.subject}
                                    </span>
                                    {slot.ppct && (
                                      <span className="text-[9px] bg-white/95 px-1.5 py-0.2 rounded-md font-mono text-slate-800 border border-slate-300 font-bold shadow-2xs shrink-0">
                                        T{slot.ppct}
                                      </span>
                                    )}
                                  </div>

                                  {slot.subSubject && (
                                    <span className="inline-block text-[10px] text-slate-600 font-semibold bg-white/80 px-1.5 py-0.2 rounded border border-slate-200/80 mb-1">
                                      {slot.subSubject}
                                    </span>
                                  )}

                                  {slot.lessonName && (
                                    <p className="text-[10.5px] text-slate-700 font-medium leading-snug line-clamp-2 mt-0.5">
                                      {slot.lessonName}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center justify-between pt-1.5 mt-1 border-t border-slate-200/60 text-[10px] text-slate-500">
                                  <span className="truncate max-w-[95px] font-medium text-slate-600">
                                    {slot.teacherName}
                                  </span>
                                  {slot.note && (
                                    <span className="text-[9px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded font-semibold shrink-0">
                                      {slot.note}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="h-16 flex flex-col items-center justify-center text-slate-300 group-hover:text-indigo-600 border border-dashed border-slate-200 rounded-lg group-hover:border-indigo-300 group-hover:bg-indigo-50/30 transition-all">
                                <Plus className="w-4 h-4 opacity-60" />
                                <span className="text-[9px] opacity-60 mt-0.5">Thêm tiết</span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 2: 5-DAY CARDS TIMELINE VIEW (CHẾ ĐỘ 5 CỘT THẺ THỨ 2 ĐẾN THỨ 6) */}
      {viewMode === 'class' && displayStyle === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {DAYS_ORDER.map((day) => {
            const dateStr = getWeekDayDate(config.startDate, config.selectedWeek, day);
            const dayMorningSlots = classSlots
              .filter((s) => s.dayOfWeek === day && s.session === 'Sáng')
              .sort((a, b) => a.period - b.period);
            const dayAfternoonSlots = classSlots
              .filter((s) => s.dayOfWeek === day && s.session === 'Chiều')
              .sort((a, b) => a.period - b.period);
            const totalDaySlots = dayMorningSlots.length + dayAfternoonSlots.length;

            return (
              <div
                key={day}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col"
              >
                {/* Header Ngày */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-2.5 text-white text-center">
                  <div className="font-black text-xs uppercase tracking-tight">{day}</div>
                  <div className="text-[10px] text-blue-300 font-mono font-medium">
                    {dateStr ? dateStr : 'Tuần ' + config.selectedWeek} • ({totalDaySlots} tiết)
                  </div>
                </div>

                <div className="p-2.5 space-y-3 flex-1 bg-slate-50/40">
                  {/* Buổi Sáng */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-amber-200">
                      <span className="text-[11px] font-extrabold text-amber-900 uppercase flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5 inline-block"></span>
                        Sáng ({dayMorningSlots.length} tiết)
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {[1, 2, 3, 4].map((period) => {
                        const slot = dayMorningSlots.find((s) => s.period === period);
                        const color = slot ? SUBJECT_COLOR_MAP[slot.subject] : null;

                        return (
                          <div
                            key={`cards-s-${period}`}
                            onClick={() => handleSlotClick(day, 'Sáng', period)}
                            className={`p-2 rounded-lg border transition-all cursor-pointer ${
                              slot
                                ? `${color?.bg || 'bg-white'} ${color?.border || 'border-slate-200'} hover:shadow-xs`
                                : 'bg-white/60 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50/30'
                            }`}
                          >
                            {slot ? (
                              <div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-1">
                                    <span className="text-[9px] font-bold font-mono bg-slate-900 text-white px-1 rounded">
                                      T{period}
                                    </span>
                                    <span className={`font-bold text-xs ${color?.text || 'text-slate-900'}`}>
                                      {slot.subject}
                                    </span>
                                  </div>
                                  {slot.ppct && (
                                    <span className="text-[9px] bg-white px-1 py-0.2 rounded font-mono font-bold text-slate-700 border border-slate-200">
                                      PPCT: {slot.ppct}
                                    </span>
                                  )}
                                </div>
                                {slot.subSubject && (
                                  <span className="text-[9.5px] text-slate-500 font-medium block mt-0.5">
                                    Phân môn: {slot.subSubject}
                                  </span>
                                )}
                                {slot.lessonName && (
                                  <p className="text-[10px] text-slate-700 font-medium line-clamp-1 mt-0.5">
                                    {slot.lessonName}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                                <span>Tiết {period} (Sáng)</span>
                                <Plus className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buổi Chiều */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-indigo-200">
                      <span className="text-[11px] font-extrabold text-indigo-900 uppercase flex items-center">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 mr-1.5 inline-block"></span>
                        Chiều ({dayAfternoonSlots.length} tiết)
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {[1, 2, 3].map((period) => {
                        const slot = dayAfternoonSlots.find((s) => s.period === period);
                        const color = slot ? SUBJECT_COLOR_MAP[slot.subject] : null;

                        return (
                          <div
                            key={`cards-c-${period}`}
                            onClick={() => handleSlotClick(day, 'Chiều', period)}
                            className={`p-2 rounded-lg border transition-all cursor-pointer ${
                              slot
                                ? `${color?.bg || 'bg-white'} ${color?.border || 'border-slate-200'} hover:shadow-xs`
                                : 'bg-white/60 border-dashed border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30'
                            }`}
                          >
                            {slot ? (
                              <div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-1">
                                    <span className="text-[9px] font-bold font-mono bg-indigo-900 text-white px-1 rounded">
                                      T{period}
                                    </span>
                                    <span className={`font-bold text-xs ${color?.text || 'text-slate-900'}`}>
                                      {slot.subject}
                                    </span>
                                  </div>
                                  {slot.ppct && (
                                    <span className="text-[9px] bg-white px-1 py-0.2 rounded font-mono font-bold text-slate-700 border border-slate-200">
                                      PPCT: {slot.ppct}
                                    </span>
                                  )}
                                </div>
                                {slot.subSubject && (
                                  <span className="text-[9.5px] text-slate-500 font-medium block mt-0.5">
                                    Phân môn: {slot.subSubject}
                                  </span>
                                )}
                                {slot.lessonName && (
                                  <p className="text-[10px] text-slate-700 font-medium line-clamp-1 mt-0.5">
                                    {slot.lessonName}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                                <span>Tiết {period} (Chiều)</span>
                                <Plus className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 3: TEACHER TIMETABLE VIEW (THỜI KHÓA BIỂU GIÁO VIÊN TỪ THỨ 2 ĐẾN THỨ 6) */}
      {viewMode === 'teacher' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <div className="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Lịch Dạy Giáo Viên: {config.selectedTeacher} (Thứ 2 đến Thứ 6)
              </h2>
              <p className="text-[11px] text-slate-500">
                Tổng hợp phân công chuyên môn và lịch dạy trực tiếp tại các lớp
              </p>
            </div>
            <div className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200 font-mono">
              Tổng số: {teacherSlots.length} tiết / tuần
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-center font-bold text-xs">
                  <th className="p-2 w-16 border-r border-slate-800">Buổi</th>
                  <th className="p-2 w-12 border-r border-slate-800">Tiết</th>
                  {DAYS_ORDER.map((day) => (
                    <th key={day} className="p-2 border-r border-slate-800 min-w-[140px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Sáng */}
                {[1, 2, 3, 4].map((period, idx) => (
                  <tr key={`t-sang-${period}`} className="border-b border-slate-200 hover:bg-slate-50/50">
                    {idx === 0 && (
                      <td rowSpan={4} className="bg-amber-50/80 font-bold text-amber-900 text-center uppercase tracking-wider border-r border-slate-200 text-xs">
                        Sáng
                      </td>
                    )}
                    <td className="p-2 text-center font-mono font-bold text-slate-700 bg-slate-50 border-r border-slate-200">
                      {period}
                    </td>
                    {DAYS_ORDER.map((day) => {
                      const slot = teacherSlots.find((s) => s.dayOfWeek === day && s.session === 'Sáng' && s.period === period);
                      return (
                        <td key={day} className="p-2 border-r border-slate-200">
                          {slot ? (
                            <div className="p-2 bg-blue-50/90 border border-blue-200 rounded-lg space-y-0.5 shadow-2xs">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-blue-900 text-xs">{slot.subject}</span>
                                <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.2 rounded font-mono shadow-2xs">
                                  Lớp {slot.className}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-700 truncate font-medium">
                                {slot.lessonName || (slot.ppct ? `Tiết PPCT ${slot.ppct}` : '')}
                              </p>
                            </div>
                          ) : (
                            <span className="text-slate-300 text-center block text-xs">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Chiều */}
                {[1, 2, 3].map((period, idx) => (
                  <tr key={`t-chieu-${period}`} className="border-b border-slate-200 hover:bg-slate-50/50">
                    {idx === 0 && (
                      <td rowSpan={3} className="bg-indigo-50/80 font-bold text-indigo-900 text-center uppercase tracking-wider border-r border-slate-200 text-xs">
                        Chiều
                      </td>
                    )}
                    <td className="p-2 text-center font-mono font-bold text-slate-700 bg-slate-50 border-r border-slate-200">
                      {period}
                    </td>
                    {DAYS_ORDER.map((day) => {
                      const slot = teacherSlots.find((s) => s.dayOfWeek === day && s.session === 'Chiều' && s.period === period);
                      return (
                        <td key={day} className="p-2 border-r border-slate-200">
                          {slot ? (
                            <div className="p-2 bg-purple-50/90 border border-purple-200 rounded-lg space-y-0.5 shadow-2xs">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-purple-900 text-xs">{slot.subject}</span>
                                <span className="text-[10px] bg-purple-600 text-white font-bold px-1.5 py-0.2 rounded font-mono shadow-2xs">
                                  Lớp {slot.className}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-700 truncate font-medium">
                                {slot.lessonName || (slot.ppct ? `Tiết PPCT ${slot.ppct}` : '')}
                              </p>
                            </div>
                          ) : (
                            <span className="text-slate-300 text-center block text-xs">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 4: MASTER TIMETABLE VIEW (TỔNG THỂ TOÀN TRƯỜNG TỪ THỨ 2 ĐẾN THỨ 6) */}
      {viewMode === 'master' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <div className="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Thời Khóa Biểu Tổng Thể Toàn Trường (Thứ 2 đến Thứ 6)
              </h2>
              <p className="text-[11px] text-slate-500">
                Phân phối lịch dạy tất cả các lớp 1A - 5B
              </p>
            </div>
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded font-mono">
              Năm học {config.schoolYear}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-center font-bold text-[10px]">
                  <th className="p-2 border-r border-slate-800 w-20">Thứ</th>
                  <th className="p-2 border-r border-slate-800 w-10">Buổi</th>
                  <th className="p-2 border-r border-slate-800 w-10">Tiết</th>
                  {INITIAL_CLASSES.map((c) => (
                    <th key={c} className="p-2 border-r border-slate-800 min-w-[70px]">
                      Lớp {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DAYS_ORDER.map((day) => (
                  <React.Fragment key={day}>
                    {/* Sáng 1 -> 4 */}
                    {[1, 2, 3, 4].map((period, pIdx) => (
                      <tr key={`${day}-S-${period}`} className="border-b border-slate-200 hover:bg-slate-50">
                        {pIdx === 0 && (
                          <td rowSpan={7} className="p-2 font-bold text-center bg-slate-100 border-r border-slate-300 text-slate-900 text-xs align-middle">
                            {day}
                          </td>
                        )}
                        {pIdx === 0 && (
                          <td rowSpan={4} className="p-1 text-center font-bold text-amber-800 bg-amber-50/70 border-r border-slate-200 text-[10px] align-middle">
                            Sáng
                          </td>
                        )}
                        <td className="p-1.5 text-center font-mono font-bold text-slate-700 bg-slate-50 border-r border-slate-200 text-xs">
                          {period}
                        </td>
                        {INITIAL_CLASSES.map((cls) => {
                          const slot = slots.find(
                            (s) => s.dayOfWeek === day && s.session === 'Sáng' && s.period === period && s.className === cls
                          );
                          return (
                            <td key={cls} className="p-1 border-r border-slate-200 text-center truncate">
                              {slot ? (
                                <span className="font-semibold text-[10px] text-slate-800 block">
                                  {slot.subject.length > 10 ? slot.subject.substring(0, 10) + '..' : slot.subject}
                                </span>
                              ) : (
                                <span className="text-slate-300 text-[10px]">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}

                    {/* Chiều 1 -> 3 */}
                    {[1, 2, 3].map((period, pIdx) => (
                      <tr key={`${day}-C-${period}`} className="border-b border-slate-200 hover:bg-slate-50">
                        {pIdx === 0 && (
                          <td rowSpan={3} className="p-1 text-center font-bold text-indigo-800 bg-indigo-50/70 border-r border-slate-200 text-[10px] align-middle">
                            Chiều
                          </td>
                        )}
                        <td className="p-1.5 text-center font-mono font-bold text-slate-700 bg-slate-50 border-r border-slate-200 text-xs">
                          {period}
                        </td>
                        {INITIAL_CLASSES.map((cls) => {
                          const slot = slots.find(
                            (s) => s.dayOfWeek === day && s.session === 'Chiều' && s.period === period && s.className === cls
                          );
                          return (
                            <td key={cls} className="p-1 border-r border-slate-200 text-center truncate">
                              {slot ? (
                                <span className="font-semibold text-[10px] text-slate-800 block">
                                  {slot.subject.length > 10 ? slot.subject.substring(0, 10) + '..' : slot.subject}
                                </span>
                              ) : (
                                <span className="text-slate-300 text-[10px]">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Slot Modal */}
      {editingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 text-xs">
            <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
              <h3 className="text-xs font-bold flex items-center">
                <Edit3 className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                Chỉnh Sửa Tiết: {editingSlot.dayOfWeek} ({editingSlot.session} - Tiết {editingSlot.period})
              </h3>
              <button onClick={() => setEditingSlot(null)} className="text-slate-400 hover:text-white font-bold p-1">
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSlot} className="p-4 space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Môn học:</label>
                <select
                  value={editingSlot.subject}
                  onChange={(e) => setEditingSlot({ ...editingSlot, subject: e.target.value })}
                  className="w-full text-xs font-semibold p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white shadow-2xs"
                >
                  {Object.keys(SUBJECT_COLOR_MAP).map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Phân môn (nếu có):</label>
                  <input
                    type="text"
                    value={editingSlot.subSubject || ''}
                    onChange={(e) => setEditingSlot({ ...editingSlot, subSubject: e.target.value })}
                    placeholder="Đọc / LTVC / Viết / SHDC..."
                    className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Tiết PPCT:</label>
                  <input
                    type="number"
                    value={editingSlot.ppct || ''}
                    onChange={(e) => setEditingSlot({ ...editingSlot, ppct: parseInt(e.target.value, 10) || undefined })}
                    placeholder="15, 16..."
                    className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Tên bài dạy chi tiết:</label>
                <input
                  type="text"
                  value={editingSlot.lessonName || ''}
                  onChange={(e) => setEditingSlot({ ...editingSlot, lessonName: e.target.value })}
                  placeholder="Ví dụ: Đọc: Tiếng hạt nảy mầm / Bài 6. Cộng hai phân số..."
                  className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Giáo viên giảng dạy:</label>
                  <input
                    type="text"
                    value={editingSlot.teacherName}
                    onChange={(e) => setEditingSlot({ ...editingSlot, teacherName: e.target.value })}
                    className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Ghi chú:</label>
                  <input
                    type="text"
                    value={editingSlot.note || ''}
                    onChange={(e) => setEditingSlot({ ...editingSlot, note: e.target.value })}
                    placeholder="Chào cờ, Sinh hoạt, GV chuyên..."
                    className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    onDeleteSlot(editingSlot.id);
                    setEditingSlot(null);
                  }}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center space-x-1 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa tiết</span>
                </button>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingSlot(null)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all"
                  >
                    Lưu Tiết Học
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
