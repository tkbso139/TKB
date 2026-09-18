import React, { useState } from 'react';
import { SchoolConfig, GradeLevel } from '../types';
import {
  School,
  MapPin,
  User,
  Users,
  GraduationCap,
  Sparkles,
  Edit3,
  Check,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { TEACHERS_LIST, INITIAL_CLASSES, SAMPLE_SCHOOLS, SAMPLE_CAMPUSES, SPECIALIST_TEACHERS } from '../data/sampleTimetables';

interface QuickProfileBarProps {
  config: SchoolConfig;
  onChangeConfig: (newConfig: Partial<SchoolConfig>) => void;
  onOpenFullSettings: () => void;
}

export const QuickProfileBar: React.FC<QuickProfileBarProps> = ({
  config,
  onChangeConfig,
  onOpenFullSettings
}) => {
  const [isEditingInline, setIsEditingInline] = useState(false);
  const [quickForm, setQuickForm] = useState({
    schoolName: config.schoolName,
    campusName: config.campusName,
    selectedClass: config.selectedClass,
    selectedTeacher: config.selectedTeacher
  });

  const [activeQuickPopover, setActiveQuickPopover] = useState<'none' | 'school' | 'campus' | 'teacher' | 'class'>('none');

  const grades: GradeLevel[] = [1, 2, 3, 4, 5];

  // Get current teacher info
  const currentTeacherObj = TEACHERS_LIST.find((t) => t.name === config.selectedTeacher);

  const handleApplyTeacher = (teacherName: string) => {
    const found = TEACHERS_LIST.find((t) => t.name === teacherName);
    const newUpdates: Partial<SchoolConfig> = { selectedTeacher: teacherName };
    if (found && found.mainClass) {
      newUpdates.selectedClass = found.mainClass;
      const gradeNum = parseInt(found.mainClass.charAt(0), 10) as GradeLevel;
      if (gradeNum >= 1 && gradeNum <= 5) {
        newUpdates.selectedGrade = gradeNum;
      }
    }
    onChangeConfig(newUpdates);
    setActiveQuickPopover('none');
  };

  const handleApplyClass = (className: string) => {
    const gradeNum = parseInt(className.charAt(0), 10) as GradeLevel;
    const newUpdates: Partial<SchoolConfig> = { selectedClass: className };
    if (gradeNum >= 1 && gradeNum <= 5) {
      newUpdates.selectedGrade = gradeNum;
    }
    // Check if there is a main teacher for this class
    const foundTeacher = TEACHERS_LIST.find((t) => t.mainClass === className);
    if (foundTeacher) {
      newUpdates.selectedTeacher = foundTeacher.name;
    }
    onChangeConfig(newUpdates);
    setActiveQuickPopover('none');
  };

  const handleSaveInline = (e: React.FormEvent) => {
    e.preventDefault();
    const gradeNum = parseInt(quickForm.selectedClass.charAt(0), 10) as GradeLevel;
    onChangeConfig({
      schoolName: quickForm.schoolName.trim() || config.schoolName,
      campusName: quickForm.campusName.trim() || config.campusName,
      selectedClass: quickForm.selectedClass.trim().toUpperCase() || config.selectedClass,
      selectedTeacher: quickForm.selectedTeacher.trim() || config.selectedTeacher,
      selectedGrade: (gradeNum >= 1 && gradeNum <= 5) ? gradeNum : config.selectedGrade
    });
    setIsEditingInline(false);
  };

  return (
    <section className="bg-white border-b border-slate-200 shadow-2xs text-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
        {isEditingInline ? (
          /* Inline Quick Edit Form */
          <form onSubmit={handleSaveInline} className="bg-slate-50 p-2.5 rounded-lg border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-900 text-xs flex items-center">
                <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-blue-600" />
                Lệnh Thay Đổi Nhanh Hồ Sơ (Áp dụng lập tức vào TKB, Lịch Báo Giảng & KHBD)
              </span>
              <button
                type="button"
                onClick={() => setIsEditingInline(false)}
                className="text-[11px] text-slate-500 hover:text-slate-700"
              >
                Đóng
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {/* 1. Trường */}
              <div>
                <label className="block text-[10px] font-bold text-slate-700 mb-0.5">1. Tên Trường:</label>
                <input
                  type="text"
                  value={quickForm.schoolName}
                  onChange={(e) => setQuickForm({ ...quickForm, schoolName: e.target.value })}
                  placeholder="Ví dụ: Trường TH Tân Thạnh"
                  className="w-full px-2 py-1 text-xs border border-slate-300 rounded bg-white font-medium focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* 2. Phân hiệu */}
              <div>
                <label className="block text-[10px] font-bold text-slate-700 mb-0.5">2. Phân Hiệu / Điểm:</label>
                <input
                  type="text"
                  value={quickForm.campusName}
                  onChange={(e) => setQuickForm({ ...quickForm, campusName: e.target.value })}
                  placeholder="Ví dụ: Phân hiệu 1 / Điểm chính"
                  className="w-full px-2 py-1 text-xs border border-slate-300 rounded bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* 3. Lớp */}
              <div>
                <label className="block text-[10px] font-bold text-slate-700 mb-0.5">3. Lớp Giảng Dạy:</label>
                <input
                  type="text"
                  value={quickForm.selectedClass}
                  onChange={(e) => setQuickForm({ ...quickForm, selectedClass: e.target.value })}
                  placeholder="Ví dụ: 5A"
                  className="w-full px-2 py-1 text-xs border border-slate-300 rounded bg-white font-bold text-blue-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* 4. Tên GV */}
              <div>
                <label className="block text-[10px] font-bold text-slate-700 mb-0.5">4. Giáo Viên (GV):</label>
                <input
                  type="text"
                  value={quickForm.selectedTeacher}
                  onChange={(e) => setQuickForm({ ...quickForm, selectedTeacher: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Hoàng Tuấn"
                  className="w-full px-2 py-1 text-xs border border-slate-300 rounded bg-white font-medium focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-200">
              <div className="flex flex-wrap gap-1 text-[10px] text-slate-500 items-center">
                <span>Chọn nhanh GV mẫu:</span>
                {TEACHERS_LIST.slice(0, 4).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setQuickForm({
                      ...quickForm,
                      selectedTeacher: t.name,
                      selectedClass: t.mainClass || quickForm.selectedClass
                    })}
                    className="bg-white hover:bg-blue-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200"
                  >
                    {t.name} ({t.mainClass || t.role})
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={() => setIsEditingInline(false)}
                  className="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-800"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-xs flex items-center space-x-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Áp Dụng Thay Đổi</span>
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Main Quick Control Bar */
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            {/* Left: 4 Direct Command Buttons & Selectors */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center mr-0.5">
                <SlidersHorizontal className="w-3 h-3 mr-1 text-blue-600" />
                HỒ SƠ:
              </span>

              {/* 1. NÚT LỆNH: CHỌN / ĐỔI TRƯỜNG */}
              <div className="relative">
                <div className="flex items-center bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-0.5 transition-colors">
                  <div className="flex items-center px-1.5 py-1 text-slate-700 font-medium">
                    <School className="w-3.5 h-3.5 text-blue-600 mr-1 flex-shrink-0" />
                    <span className="max-w-[130px] sm:max-w-[160px] truncate font-bold text-slate-800 text-[11px]" title={config.schoolName}>
                      {config.schoolName}
                    </span>
                  </div>
                  <select
                    value={config.schoolName}
                    onChange={(e) => onChangeConfig({ schoolName: e.target.value })}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    title="Bấm để chọn hoặc đổi trường học"
                  >
                    {SAMPLE_SCHOOLS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 mr-1 pointer-events-none" />
                </div>
              </div>

              {/* 2. NÚT LỆNH: CHỌN / ĐỔI PHÂN HIỆU */}
              <div className="relative">
                <div className="flex items-center bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-0.5 transition-colors">
                  <div className="flex items-center px-1.5 py-1 text-slate-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 mr-1 flex-shrink-0" />
                    <span className="font-semibold text-slate-800 text-[11px]">
                      {config.campusName || 'Điểm chính'}
                    </span>
                  </div>
                  <select
                    value={config.campusName}
                    onChange={(e) => onChangeConfig({ campusName: e.target.value })}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    title="Bấm để chọn phân hiệu / điểm trường"
                  >
                    {SAMPLE_CAMPUSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 mr-1 pointer-events-none" />
                </div>
              </div>

              {/* 3. NÚT LỆNH: CHỌN / ĐỔI LỚP */}
              <div className="relative">
                <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg p-0.5">
                  <div className="flex items-center px-1.5 py-1 text-blue-900 font-bold">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-700 mr-1 flex-shrink-0" />
                    <span className="text-[11px]">Lớp {config.selectedClass}</span>
                  </div>
                  <select
                    value={config.selectedClass}
                    onChange={(e) => handleApplyClass(e.target.value)}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    title="Bấm để chuyển nhanh lớp học"
                  >
                    {INITIAL_CLASSES.map((c) => (
                      <option key={c} value={c}>Lớp {c} (Khối {c.charAt(0)})</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-blue-600 mr-1 pointer-events-none" />
                </div>
              </div>

              {/* 4. NÚT LỆNH: CHỌN / ĐỔI GIÁO VIÊN (GV) */}
              <div className="relative">
                <div className="flex items-center bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-lg p-0.5 transition-colors">
                  <div className="flex items-center px-1.5 py-1 text-emerald-900 font-medium">
                    <User className="w-3.5 h-3.5 text-emerald-700 mr-1 flex-shrink-0" />
                    <span className="font-bold text-[11px] max-w-[130px] sm:max-w-[170px] truncate" title={config.selectedTeacher}>
                      GV: {config.selectedTeacher}
                    </span>
                    {currentTeacherObj && (
                      <span className="ml-1 text-[9px] bg-emerald-200/80 text-emerald-900 px-1 py-0.2 rounded font-mono font-bold">
                        {currentTeacherObj.mainClass ? `CN ${currentTeacherObj.mainClass}` : currentTeacherObj.role}
                      </span>
                    )}
                  </div>
                  <select
                    value={config.selectedTeacher}
                    onChange={(e) => handleApplyTeacher(e.target.value)}
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    title="Bấm để chuyển nhanh hồ sơ Giáo viên giảng dạy"
                  >
                    <optgroup label="--- Giáo Viên Chủ Nhiệm (GVCN) ---">
                      {TEACHERS_LIST.filter(t => t.mainClass).map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name} (GVCN Lớp {t.mainClass})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="--- Giáo Viên Bộ Môn (GVBM) ---">
                      {TEACHERS_LIST.filter(t => !t.mainClass).map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name} ({t.subjects.join(', ')})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <ChevronDown className="w-3 h-3 text-emerald-700 mr-1 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons & Status Mode */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {/* Filter Mode Button: Xem theo Lớp vs Xem theo GV */}
              <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => onChangeConfig({ filterMode: 'class' })}
                  className={`px-2 py-0.5 rounded transition-all ${
                    config.filterMode !== 'teacher'
                      ? 'bg-white text-blue-700 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Hiển thị TKB, Lịch Báo Giảng và KHBD cho Lớp được chọn"
                >
                  Theo Lớp {config.selectedClass}
                </button>
                <button
                  type="button"
                  onClick={() => onChangeConfig({ filterMode: 'teacher' })}
                  className={`px-2 py-0.5 rounded transition-all ${
                    config.filterMode === 'teacher'
                      ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Hiển thị TKB, Lịch Báo Giảng và KHBD riêng cho Giáo viên này"
                >
                  Theo GV ({config.selectedTeacher.split(' ').slice(-1)[0]})
                </button>
              </div>

              {/* Edit Button */}
              <button
                type="button"
                onClick={() => {
                  setQuickForm({
                    schoolName: config.schoolName,
                    campusName: config.campusName,
                    selectedClass: config.selectedClass,
                    selectedTeacher: config.selectedTeacher
                  });
                  setIsEditingInline(true);
                }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md border border-slate-200 transition-colors flex items-center space-x-1"
                title="Nhập tùy chỉnh tên GV, Trường, Phân hiệu, Lớp"
              >
                <Edit3 className="w-3 h-3 text-slate-600" />
                <span className="hidden sm:inline">Nhập Tùy Chỉnh</span>
              </button>

              {/* Full Settings Dialog Button */}
              <button
                type="button"
                onClick={onOpenFullSettings}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-md shadow-2xs transition-all active:scale-95 flex items-center space-x-1"
                title="Mở bảng cấu hình toàn bộ chi tiết"
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Đổi Toàn Diện</span>
              </button>
            </div>
          </div>
        )}

        {/* SPECIALIST TEACHERS 1-CLICK SELECTOR BAR (DÀNH CHO GIÁO VIÊN BỘ MÔN / GV CHUYÊN) */}
        <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="font-bold text-slate-500 uppercase tracking-tight text-[10px] flex items-center mr-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1 inline-block"></span>
            GV Chuyên Biệt (Bộ môn):
          </span>

          {SPECIALIST_TEACHERS.map((st) => {
            const isSelected = config.filterMode === 'teacher' && config.selectedTeacher === st.name;
            return (
              <button
                key={st.name}
                type="button"
                onClick={() => {
                  onChangeConfig({
                    selectedTeacher: st.name,
                    filterMode: 'teacher'
                  });
                }}
                className={`inline-flex items-center px-2 py-0.5 rounded-md border font-medium transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs font-bold'
                    : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border-slate-200'
                }`}
                title={`Chuyển nhanh sang Lập KHBD, Lịch Báo Giảng & TKB cho ${st.name} (${st.grades})`}
              >
                <span className="mr-1 text-xs">{st.icon}</span>
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
