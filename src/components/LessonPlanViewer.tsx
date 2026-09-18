import React, { useState } from 'react';
import { LessonPlan, SchoolConfig, IntegrationType, IntegrationItem, TeachingActivity } from '../types';
import {
  BookOpen,
  Download,
  Calendar,
  Sparkles,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Tag,
  Clock,
  Layers
} from 'lucide-react';
import { exportWeeklyLessonPlansDocx } from '../utils/docxExport';
import { SUBJECT_COLOR_MAP } from '../data/curriculumData';

interface LessonPlanViewerProps {
  lessonPlans: LessonPlan[];
  config: SchoolConfig;
  onChangeConfig: (newConfig: Partial<SchoolConfig>) => void;
  onUpdateLessonPlan: (plan: LessonPlan) => void;
  onOpenReferenceModal: () => void;
}

export const LessonPlanViewer: React.FC<LessonPlanViewerProps> = ({
  lessonPlans,
  config,
  onChangeConfig,
  onUpdateLessonPlan,
  onOpenReferenceModal
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);
  const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
  const [editedPlan, setEditedPlan] = useState<LessonPlan | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu'];

  // Distinct classes in current lesson plans (especially useful for specialist teachers teaching multiple classes)
  const uniqueClasses = React.useMemo(() => {
    const classSet = new Set<string>();
    lessonPlans.forEach((p) => {
      if (p.className) classSet.add(p.className);
    });
    return Array.from(classSet).sort();
  }, [lessonPlans]);

  const filteredPlans = lessonPlans.filter((plan) => {
    const matchesDay = selectedDay === 'all' || plan.dayOfWeek === selectedDay;
    const matchesClass = selectedClassFilter === 'all' || plan.className === selectedClassFilter;
    return matchesDay && matchesClass;
  });

  const handleStartEdit = (plan: LessonPlan) => {
    setEditingPlanId(plan.id);
    setEditedPlan(JSON.parse(JSON.stringify(plan)));
  };

  const handleSaveEdit = () => {
    if (editedPlan) {
      onUpdateLessonPlan(editedPlan);
      setEditingPlanId(null);
      setEditedPlan(null);
    }
  };

  const handleExportAllDocx = async () => {
    setIsExporting(true);
    try {
      await exportWeeklyLessonPlansDocx(lessonPlans, config, config.wordFontSize);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportSingleDocx = async (plan: LessonPlan) => {
    await exportWeeklyLessonPlansDocx([plan], config, config.wordFontSize);
  };

  const handleAddIntegration = (type: IntegrationType) => {
    if (!editedPlan) return;
    const newItem: IntegrationItem = {
      id: `int-${Date.now()}`,
      type,
      title: type === 'AI' ? 'Tích hợp Trí tuệ nhân tạo (AI)' :
             type === 'NLS' ? 'Tích hợp Năng lực số (CV 3456)' :
             type === 'GDDD' ? 'Giáo dục Dinh dưỡng' :
             type === 'QCN' ? 'Giáo dục Quyền con người' :
             type === 'QPAN' ? 'Giáo dục Quốc phòng - An ninh' :
             type === 'BVMT' ? 'Bảo vệ môi trường' : 'Bài học STEM',
      content: 'Nội dung tích hợp lồng ghép phù hợp với yêu cầu cần đạt của bài dạy.',
      activityLocation: 'Hoạt động 3 - Luyện tập'
    };

    setEditedPlan({
      ...editedPlan,
      integrations: [...editedPlan.integrations, newItem]
    });
  };

  const handleRemoveIntegration = (intId: string) => {
    if (!editedPlan) return;
    setEditedPlan({
      ...editedPlan,
      integrations: editedPlan.integrations.filter((i) => i.id !== intId)
    });
  };

  return (
    <div className="space-y-4 text-xs">
      {/* Top Action & Summary Bar */}
      <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center">
              <BookOpen className="w-4 h-4 text-blue-600 mr-1.5" />
              {config.filterMode === 'teacher'
                ? `Kế Hoạch Bài Dạy Tuần ${config.selectedWeek} - GV: ${config.selectedTeacher}`
                : `Kế Hoạch Bài Dạy Tuần ${config.selectedWeek} - Lớp ${config.selectedClass}`}
            </h2>
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-300 font-mono">
              CV 2345/BGDĐT
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {config.filterMode === 'teacher'
              ? `Tất cả bài dạy trong tuần của giáo viên ${config.selectedTeacher} (${lessonPlans.length} bài dạy)`
              : `Lập theo TKB lớp ${config.selectedClass} - GVCN: ${config.selectedTeacher} (${lessonPlans.length} bài dạy trong tuần)`}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Word Font Size Switcher */}
          <div className="flex items-center space-x-1 bg-slate-50 p-0.5 rounded-lg border border-slate-200 text-xs">
            <span className="text-slate-500 font-medium px-1 text-[11px]">Font:</span>
            {([12, 13, 14] as const).map((fs) => (
              <button
                key={fs}
                onClick={() => onChangeConfig({ wordFontSize: fs })}
                className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-bold transition-all ${
                  config.wordFontSize === fs
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fs}pt
              </button>
            ))}
          </div>

          <button
            onClick={onOpenReferenceModal}
            className="flex items-center space-x-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Tra Cứu Khung Tích Hợp</span>
          </button>

          {/* Master Full-Week Download Button */}
          <button
            onClick={handleExportAllDocx}
            disabled={isExporting}
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Đang tạo Word...' : `Tải Word Cả Tuần (Thứ 2 - 6)`}</span>
          </button>
        </div>
      </div>

      {/* Day and Class Filter Pills */}
      <div className="space-y-1.5">
        {/* Day Filter Pills */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
          <button
            onClick={() => setSelectedDay('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
              selectedDay === 'all'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất Cả Ngày ({lessonPlans.length} bài)
          </button>

          {days.map((day) => {
            const count = lessonPlans.filter((p) => p.dayOfWeek === day).length;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                  selectedDay === day
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {day} ({count})
              </button>
            );
          })}
        </div>

        {/* Class Filter Pills (Especially for Specialist Teachers) */}
        {uniqueClasses.length > 1 && (
          <div className="flex flex-wrap items-center gap-1 bg-blue-50/60 p-1 rounded-lg border border-blue-200 text-xs">
            <span className="text-[10px] font-bold text-blue-900 uppercase tracking-tight px-1.5">
              Lọc Theo Lớp:
            </span>
            <button
              onClick={() => setSelectedClassFilter('all')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                selectedClassFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-blue-800 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              Tất Cả Lớp ({uniqueClasses.join(', ')})
            </button>
            {uniqueClasses.map((cls) => {
              const count = lessonPlans.filter((p) => p.className === cls).length;
              return (
                <button
                  key={cls}
                  onClick={() => setSelectedClassFilter(cls)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                    selectedClassFilter === cls
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-blue-800 hover:bg-blue-100 border border-blue-200'
                  }`}
                >
                  Lớp {cls} ({count} bài)
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Lesson Plans List */}
      <div className="space-y-3">
        {filteredPlans.map((plan, index) => {
          const isEditing = editingPlanId === plan.id;
          const isExpanded = expandedPlanId === plan.id || filteredPlans.length <= 2;
          const activePlan = isEditing && editedPlan ? editedPlan : plan;
          const color = SUBJECT_COLOR_MAP[plan.subject] || {
            bg: 'bg-blue-50',
            text: 'text-blue-700',
            border: 'border-blue-200',
            badge: 'bg-blue-100 text-blue-800'
          };

          return (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden transition-all"
            >
              {/* Plan Header Card */}
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-start space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold font-mono text-[11px] flex items-center justify-center flex-shrink-0 shadow-xs">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 font-mono">
                        {plan.dayOfWeek} ({plan.session})
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${color.badge}`}>
                        Môn {plan.subject} {plan.subSubject ? `(${plan.subSubject})` : ''}
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                        Tiết PPCT: {plan.ppctNumber}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                      {plan.lessonName}
                    </h3>
                  </div>
                </div>

                {/* Card Control Buttons */}
                <div className="flex items-center space-x-1.5 self-end sm:self-center">
                  <button
                    onClick={() => handleExportSingleDocx(plan)}
                    className="px-2 py-1 text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md font-semibold flex items-center space-x-1"
                    title="Tải riêng bài dạy này sang Word"
                  >
                    <Download className="w-3 h-3" />
                    <span className="hidden sm:inline">Tải Bài Này (.docx)</span>
                  </button>

                  {isEditing ? (
                    <button
                      onClick={handleSaveEdit}
                      className="px-2.5 py-1 text-[11px] text-white bg-emerald-600 hover:bg-emerald-700 rounded-md font-bold flex items-center space-x-1 shadow-xs"
                    >
                      <Save className="w-3 h-3" />
                      <span>Lưu Lại</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStartEdit(plan)}
                      className="px-2 py-1 text-[11px] text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md font-semibold flex items-center space-x-1 border border-slate-200"
                      title="Chỉnh sửa nội dung giáo án"
                    >
                      <Edit className="w-3 h-3" />
                      <span>Sửa Bài</span>
                    </button>
                  )}

                  <button
                    onClick={() => setExpandedPlanId(isExpanded ? null : plan.id)}
                    className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200"
                  >
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Detailed Plan Body (CV 2345 2-Column Standard) */}
              {isExpanded && (
                <div className="p-4 space-y-4 font-sans text-xs">
                  {/* Metadata line */}
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap justify-between text-[11px] text-slate-600 font-medium">
                    <span>Trường: <strong className="text-slate-800">{plan.schoolName || config.schoolName}</strong></span>
                    <span>Phân hiệu: <strong className="text-slate-800">{plan.campusName || config.campusName || 'Điểm chính'}</strong></span>
                    <span>Khối: <strong className="text-slate-800">{plan.grade || config.selectedGrade}</strong> - Lớp: <strong className="text-blue-700">{plan.className || config.selectedClass}</strong></span>
                    <span>Giáo viên: <strong className="text-slate-800">{plan.teacherName || config.selectedTeacher}</strong></span>
                    <span>Quy chuẩn: <strong className="text-emerald-700">Công văn 2345/BGDĐT</strong></span>
                  </div>

                  {/* Section I: YÊU CẦU CẦN ĐẠT */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-blue-950 uppercase border-b border-slate-200 pb-1 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                      I. YÊU CẦU CẦN ĐẠT
                    </h4>

                    <div className="space-y-2 pl-2">
                      <div>
                        <strong className="text-slate-800 font-bold block mb-0.5 text-[11px]">1. Năng lực đặc thù:</strong>
                        {isEditing ? (
                          <textarea
                            value={activePlan.competencies.specific}
                            onChange={(e) =>
                              setEditedPlan({
                                ...activePlan,
                                competencies: { ...activePlan.competencies, specific: e.target.value }
                              })
                            }
                            rows={2}
                            className="w-full text-xs p-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          />
                        ) : (
                          <p className="text-slate-700 leading-relaxed text-[11px]">{activePlan.competencies.specific}</p>
                        )}
                      </div>

                      <div>
                        <strong className="text-slate-800 font-bold block mb-0.5 text-[11px]">2. Năng lực chung:</strong>
                        {isEditing ? (
                          <textarea
                            value={activePlan.competencies.general}
                            onChange={(e) =>
                              setEditedPlan({
                                ...activePlan,
                                competencies: { ...activePlan.competencies, general: e.target.value }
                              })
                            }
                            rows={2}
                            className="w-full text-xs p-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          />
                        ) : (
                          <p className="text-slate-700 leading-relaxed text-[11px]">{activePlan.competencies.general}</p>
                        )}
                      </div>

                      <div>
                        <strong className="text-slate-800 font-bold block mb-0.5 text-[11px]">3. Phẩm chất:</strong>
                        {isEditing ? (
                          <textarea
                            value={activePlan.competencies.qualities}
                            onChange={(e) =>
                              setEditedPlan({
                                ...activePlan,
                                competencies: { ...activePlan.competencies, qualities: e.target.value }
                              })
                            }
                            rows={2}
                            className="w-full text-xs p-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
                          />
                        ) : (
                          <p className="text-slate-700 leading-relaxed text-[11px]">{activePlan.competencies.qualities}</p>
                        )}
                      </div>

                      {/* Integrations Section */}
                      <div className="pt-1.5">
                        <div className="flex items-center justify-between mb-1.5">
                          <strong className="text-slate-800 font-bold flex items-center text-[11px]">
                            <Tag className="w-3 h-3 text-indigo-600 mr-1" />
                            4. Nội dung tích hợp & lồng ghép ({activePlan.integrations.length} nội dung):
                          </strong>

                          {isEditing && (
                            <div className="flex flex-wrap gap-1">
                              {(['AI', 'NLS', 'GDDD', 'QCN', 'QPAN', 'BVMT', 'STEM'] as const).map((type) => (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => handleAddIntegration(type)}
                                  className="text-[9px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200"
                                >
                                  + {type}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          {activePlan.integrations.map((intg) => (
                            <div
                              key={intg.id}
                              className="p-2 rounded-lg bg-indigo-50/40 border border-indigo-100 flex items-start justify-between gap-2"
                            >
                              <div className="space-y-0.5 flex-1">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-[9px] font-bold bg-indigo-600 text-white px-1.5 py-0.2 rounded font-mono">
                                    {intg.type} {intg.code ? `• ${intg.code}` : ''}
                                  </span>
                                  <span className="font-bold text-slate-800 text-xs">{intg.title}</span>
                                  {intg.activityLocation && (
                                    <span className="text-[9px] text-slate-500 italic bg-white px-1 py-0.2 rounded border border-slate-200">
                                      {intg.activityLocation}
                                    </span>
                                  )}
                                </div>

                                {isEditing ? (
                                  <textarea
                                    value={intg.content}
                                    onChange={(e) => {
                                      const updated = activePlan.integrations.map((item) =>
                                        item.id === intg.id ? { ...item, content: e.target.value } : item
                                      );
                                      setEditedPlan({ ...activePlan, integrations: updated });
                                    }}
                                    rows={2}
                                    className="w-full text-xs p-1 border border-slate-300 rounded bg-white mt-0.5"
                                  />
                                ) : (
                                  <p className="text-slate-700 text-[11px] leading-relaxed">{intg.content}</p>
                                )}
                              </div>

                              {isEditing && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveIntegration(intg.id)}
                                  className="text-rose-500 hover:text-rose-700 p-0.5"
                                  title="Xóa tích hợp"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ))}

                          {activePlan.integrations.length === 0 && (
                            <p className="text-slate-400 italic text-[11px]">Chưa có nội dung tích hợp nào cho tiết này.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section II: ĐỒ DÙNG DẠY HỌC */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-blue-950 uppercase border-b border-slate-200 pb-1 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                      II. ĐỒ DÙNG DẠY HỌC VÀ HỌC LIỆU
                    </h4>
                    <div className="space-y-1 pl-2 text-[11px]">
                      <p className="text-slate-700">
                        <strong className="font-bold text-slate-800">- Giáo viên: </strong>
                        {isEditing ? (
                          <input
                            type="text"
                            value={activePlan.equipment.teacher}
                            onChange={(e) =>
                              setEditedPlan({
                                ...activePlan,
                                equipment: { ...activePlan.equipment, teacher: e.target.value }
                              })
                            }
                            className="w-full text-xs p-1 border rounded mt-0.5"
                          />
                        ) : (
                          activePlan.equipment.teacher
                        )}
                      </p>
                      <p className="text-slate-700">
                        <strong className="font-bold text-slate-800">- Học sinh: </strong>
                        {isEditing ? (
                          <input
                            type="text"
                            value={activePlan.equipment.student}
                            onChange={(e) =>
                              setEditedPlan({
                                ...activePlan,
                                equipment: { ...activePlan.equipment, student: e.target.value }
                              })
                            }
                            className="w-full text-xs p-1 border rounded mt-0.5"
                          />
                        ) : (
                          activePlan.equipment.student
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Section III: CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (Bảng 2 Cột Chuẩn) */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-blue-950 uppercase border-b border-slate-200 pb-1 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                      III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU
                    </h4>

                    <div className="overflow-x-auto rounded-lg border border-slate-300">
                      <table className="w-full border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold text-center text-[11px]">
                            <th className="p-2 w-1/2 border-r border-slate-800">HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
                            <th className="p-2 w-1/2">HOẠT ĐỘNG CỦA HỌC SINH</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activePlan.activities.map((act, actIdx) => (
                            <React.Fragment key={act.id}>
                              {/* Phase Header Row */}
                              <tr className="bg-slate-100 border-t border-b border-slate-300">
                                <td colSpan={2} className="p-1.5 font-bold text-blue-950 text-xs">
                                  <span>{actIdx + 1}. Hoạt động: {act.phase.toUpperCase()}</span>
                                  <span className="text-slate-600 font-normal italic ml-1.5 text-[11px]">
                                    (Mục tiêu: {act.goal})
                                  </span>
                                </td>
                              </tr>

                              {/* Content Row: Teacher | Student */}
                              <tr className="border-b border-slate-200">
                                <td className="p-2 border-r border-slate-200 align-top bg-white leading-relaxed text-slate-700 text-[11px]">
                                  {isEditing ? (
                                    <textarea
                                      value={act.teacherActivity}
                                      onChange={(e) => {
                                        const updatedActivities = activePlan.activities.map((a) =>
                                          a.id === act.id ? { ...a, teacherActivity: e.target.value } : a
                                        );
                                        setEditedPlan({ ...activePlan, activities: updatedActivities });
                                      }}
                                      rows={4}
                                      className="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500"
                                    />
                                  ) : (
                                    <div className="whitespace-pre-line space-y-0.5">
                                      {act.teacherActivity}
                                    </div>
                                  )}
                                </td>

                                <td className="p-2 align-top bg-slate-50/50 leading-relaxed text-slate-700 text-[11px]">
                                  {isEditing ? (
                                    <textarea
                                      value={act.studentActivity}
                                      onChange={(e) => {
                                        const updatedActivities = activePlan.activities.map((a) =>
                                          a.id === act.id ? { ...a, studentActivity: e.target.value } : a
                                        );
                                        setEditedPlan({ ...activePlan, activities: updatedActivities });
                                      }}
                                      rows={4}
                                      className="w-full text-xs p-1.5 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500"
                                    />
                                  ) : (
                                    <div className="whitespace-pre-line space-y-0.5">
                                      {act.studentActivity}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section IV: ĐIỀU CHỈNH SAU BÀI DẠY */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-blue-950 uppercase border-b border-slate-200 pb-1 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                      IV. ĐIỀU CHỈNH SAU BÀI DẠY
                    </h4>
                    <p className="text-slate-400 italic pl-2 text-[11px]">
                      {activePlan.adjustmentNote || '...........................................................................................................................................'}
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-slate-200 text-center">
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-xs">Tổ Trưởng Chuyên Môn</p>
                      <p className="text-[10px] text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
                      <div className="h-10 flex items-end justify-center text-slate-400 text-[11px] italic">
                        ................................................
                      </div>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 uppercase text-xs">Giáo Viên Giảng Dạy</p>
                      <p className="text-[10px] text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
                      <div className="h-10 flex items-end justify-center font-bold text-slate-800 text-xs">
                        {config.selectedTeacher}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredPlans.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center border border-slate-200 space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-xs font-bold text-slate-700">Chưa có bài dạy nào trong ngày này</h3>
            <p className="text-[11px] text-slate-500 max-w-md mx-auto">
              Hãy chọn ngày khác hoặc chuyển sang tab Thời Khóa Biểu để xem lại lịch phân công giảng dạy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
