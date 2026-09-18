import React, { useState, useMemo, useEffect } from 'react';
import { SchoolConfig, TimetableSlot, LessonPlan, GradeLevel } from './types';
import { Header } from './components/Header';
import { QuickProfileBar } from './components/QuickProfileBar';
import { TimetableManager } from './components/TimetableManager';
import { LichBaoGiangView } from './components/LichBaoGiangView';
import { LessonPlanViewer } from './components/LessonPlanViewer';
import { UploadTKBModal } from './components/UploadTKBModal';
import { SettingsModal } from './components/SettingsModal';
import { IntegrationReferenceModal } from './components/IntegrationReferenceModal';
import { INITIAL_TIMETABLE_SLOTS, TEACHERS_LIST } from './data/sampleTimetables';
import { CURRICULUM_DATABASE } from './data/curriculumData';
import { SAMPLE_LESSON_PLANS, generateFullLessonPlan } from './data/lessonPlansDatabase';
import { getAllSchoolTimetableSlotsForWeek } from './data/schoolMasterSchedule';
import { exportWeeklyLessonPlansDocx } from './utils/docxExport';
import { Sparkles, Calendar, FileText, BookOpen, Download, HelpCircle, Layers } from 'lucide-react';

export default function App() {
  // Global school and class config
  const [config, setConfig] = useState<SchoolConfig>({
    schoolName: 'TRƯỜNG TIỂU HỌC NHƠN NINH',
    campusName: 'Phân hiệu 2 (Điểm Đường Cắt)',
    districtName: 'Xã Nhơn Ninh',
    provinceName: 'Tỉnh Long An',
    schoolYear: '2026 - 2027',
    selectedGrade: 2,
    selectedClass: '2A',
    selectedTeacher: 'Nguyễn Thanh Bình',
    selectedWeek: 1,
    wordFontSize: 13,
    startDate: '2026-09-07',
    filterMode: 'class'
  });

  // State for Timetable Slots
  const [timetableSlots, setTimetableSlots] = useState<TimetableSlot[]>(INITIAL_TIMETABLE_SLOTS);

  // Synchronize school-wide timetable slots automatically when week changes
  useEffect(() => {
    const slots = getAllSchoolTimetableSlotsForWeek(config.selectedWeek);
    setTimetableSlots(slots);
  }, [config.selectedWeek]);

  // Active view tab
  const [activeTab, setActiveTab] = useState<'tkb' | 'lichbaogiang' | 'khbd' | 'reference'>('khbd');

  // Modals
  const [isUploadTKBOpen, setIsUploadTKBOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

  // Custom user edited lesson plans map (planId -> LessonPlan)
  const [customPlansMap, setCustomPlansMap] = useState<Record<string, LessonPlan>>({});

  // Synchronize teacher name when class changes if teacher has a mainClass
  const handleConfigChange = (newConfig: Partial<SchoolConfig>) => {
    setConfig((prev) => {
      const updated = { ...prev, ...newConfig };
      if (newConfig.selectedGrade && !newConfig.selectedClass) {
        updated.selectedClass = `${newConfig.selectedGrade}A`;
      }
      // auto find teacher for class if needed
      if (newConfig.selectedClass && !newConfig.selectedTeacher) {
        const found = TEACHERS_LIST.find((t) => t.mainClass === newConfig.selectedClass);
        if (found) {
          updated.selectedTeacher = found.name;
        }
      }
      return updated;
    });
  };

  // Derive all Lesson Plans for the active Class/Teacher & Week from Timetable slots + Curriculum Database
  const weeklyLessonPlans = useMemo(() => {
    const isTeacherMode = config.filterMode === 'teacher';
    const targetSlots = isTeacherMode
      ? timetableSlots.filter((s) => s.teacherName === config.selectedTeacher)
      : timetableSlots.filter((s) => s.className === config.selectedClass);

    // Map each slot into a detailed LessonPlan
    const plans: LessonPlan[] = targetSlots.map((slot, index) => {
      const planGrade = slot.grade || config.selectedGrade;
      const planClass = slot.className || config.selectedClass;
      const planTeacher = slot.teacherName || config.selectedTeacher;
      const planKey = `${planGrade}-${config.selectedWeek}-${slot.dayOfWeek}-${slot.session}-${slot.period}-${planClass}`;
      
      // Check if user edited this plan before
      if (customPlansMap[planKey]) {
        return customPlansMap[planKey];
      }

      // Check sample plans database
      const existingSample = SAMPLE_LESSON_PLANS.find(
        (p) =>
          p.grade === planGrade &&
          p.subject === slot.subject &&
          (p.lessonName.includes(slot.lessonName || '') || (slot.lessonName && slot.lessonName.includes(p.lessonName)))
      );

      if (existingSample) {
        return {
          ...existingSample,
          id: planKey,
          grade: planGrade,
          week: config.selectedWeek,
          periodInWeek: slot.period,
          ppctNumber: slot.ppct || existingSample.ppctNumber,
          dayOfWeek: slot.dayOfWeek,
          session: slot.session,
          schoolName: config.schoolName,
          campusName: config.campusName,
          className: planClass,
          teacherName: planTeacher
        };
      }

      // Find suggested integrations from curriculum
      const curMatch = CURRICULUM_DATABASE.find(
        (c) => c.grade === planGrade && c.subject === slot.subject && c.week === config.selectedWeek
      );

      const integrations = curMatch?.suggestedIntegrations?.map((item, idx) => ({
        id: `int-cur-${idx}-${Date.now()}`,
        type: item.type,
        code: item.code,
        title: item.type === 'AI' ? 'Tích hợp Trí tuệ nhân tạo (AI)' :
               item.type === 'NLS' ? 'Tích hợp Năng lực số (CV 3456)' :
               item.type === 'GDDD' ? 'Giáo dục Dinh dưỡng' :
               item.type === 'QCN' ? 'Giáo dục Quyền con người' :
               item.type === 'QPAN' ? 'Giáo dục Quốc phòng - An ninh' :
               item.type === 'BVMT' ? 'Bảo vệ môi trường' : 'Bài học STEM',
        content: item.content,
        activityLocation: item.location || 'Hoạt động 2 - Khám phá'
      })) || [];

      return generateFullLessonPlan(
        planGrade,
        slot.subject,
        slot.lessonName || `${slot.subject} Tiết ${slot.ppct || slot.period}`,
        config.selectedWeek,
        slot.period,
        slot.ppct || slot.period,
        planTeacher,
        planClass,
        config.schoolName,
        config.campusName,
        slot.dayOfWeek,
        slot.session,
        undefined,
        integrations
      );
    });

    return plans;
  }, [timetableSlots, config, customPlansMap]);

  const handleUpdateSlot = (updatedSlot: TimetableSlot) => {
    setTimetableSlots((prev) =>
      prev.map((s) => (s.id === updatedSlot.id ? updatedSlot : s))
    );
  };

  const handleAddSlot = (newSlot: TimetableSlot) => {
    setTimetableSlots((prev) => [...prev, newSlot]);
  };

  const handleDeleteSlot = (slotId: string) => {
    setTimetableSlots((prev) => prev.filter((s) => s.id !== slotId));
  };

  const handleApplyNewTimetable = (newSlots: TimetableSlot[]) => {
    setTimetableSlots(newSlots);
  };

  const handleUpdateLessonPlan = (updatedPlan: LessonPlan) => {
    setCustomPlansMap((prev) => ({
      ...prev,
      [updatedPlan.id]: updatedPlan
    }));
  };

  const handleQuickExportWord = () => {
    exportWeeklyLessonPlansDocx(weeklyLessonPlans, config, config.wordFontSize);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans antialiased text-xs">
      {/* Global Header */}
      <Header
        config={config}
        onChangeConfig={handleConfigChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onQuickExportWord={handleQuickExportWord}
      />

      {/* Quick Profile Bar (Nút Lệnh Thay Đổi Nhanh: Tên GV, Trường, Phân Hiệu, Lớp) */}
      <QuickProfileBar
        config={config}
        onChangeConfig={handleConfigChange}
        onOpenFullSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-4 py-4">
        {activeTab === 'tkb' && (
          <TimetableManager
            slots={timetableSlots}
            config={config}
            onChangeConfig={handleConfigChange}
            onUpdateSlot={handleUpdateSlot}
            onAddSlot={handleAddSlot}
            onDeleteSlot={handleDeleteSlot}
            onOpenUploadModal={() => setIsUploadTKBOpen(true)}
            onNavigateToKHBD={() => setActiveTab('khbd')}
          />
        )}

        {activeTab === 'lichbaogiang' && (
          <LichBaoGiangView
            slots={timetableSlots}
            config={config}
            onChangeConfig={handleConfigChange}
            onUpdateSlot={handleUpdateSlot}
            onNavigateToKHBD={() => setActiveTab('khbd')}
          />
        )}

        {activeTab === 'khbd' && (
          <LessonPlanViewer
            lessonPlans={weeklyLessonPlans}
            config={config}
            onChangeConfig={handleConfigChange}
            onUpdateLessonPlan={handleUpdateLessonPlan}
            onOpenReferenceModal={() => setIsReferenceOpen(true)}
          />
        )}

        {activeTab === 'reference' && (
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                    Khung Tham Chiếu Tích Hợp Giáo Dục Tiểu Học Toàn Diện
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Dữ liệu chuẩn hóa từ Bộ Giáo dục & Đào tạo (CV 2345, CV 3456, TT 08/2024, TT 02/2025) & tailieugiaoduc.edu.vn
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsReferenceOpen(true)}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Mở Bảng Tra Cứu Toàn Bộ</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div
                onClick={() => setIsReferenceOpen(true)}
                className="p-3.5 rounded-lg border border-indigo-100 bg-indigo-50/30 hover:border-indigo-400 cursor-pointer transition-all hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-indigo-700 uppercase bg-indigo-100/70 px-1.5 py-0.5 rounded">Mục 1</span>
                  <span className="text-[10px] text-indigo-600 font-medium group-hover:underline">Chi tiết &rarr;</span>
                </div>
                <h3 className="font-bold text-xs text-slate-900 mb-1">Khung Trí Tuệ Nhân Tạo (AI)</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  4 mạch chủ đề: Tư duy lấy con người làm trung tâm, Đạo đức AI, Kĩ thuật & ứng dụng, Thiết kế hệ thống AI cho Lớp 1 - 5.
                </p>
              </div>

              <div
                onClick={() => setIsReferenceOpen(true)}
                className="p-3.5 rounded-lg border border-emerald-100 bg-emerald-50/30 hover:border-emerald-400 cursor-pointer transition-all hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100/70 px-1.5 py-0.5 rounded">Mục 2</span>
                  <span className="text-[10px] text-emerald-600 font-medium group-hover:underline">Chi tiết &rarr;</span>
                </div>
                <h3 className="font-bold text-xs text-slate-900 mb-1">Năng Lực Số (Công Văn 3456)</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  6 miền năng lực thành phần (1.1.CB1a, 1.2.CB1a, 2.1.CB1a, 4.1.CB1b, 5.2.CB1a...) ban hành kèm Thông tư số 02/2025.
                </p>
              </div>

              <div
                onClick={() => setIsReferenceOpen(true)}
                className="p-3.5 rounded-lg border border-rose-100 bg-rose-50/30 hover:border-rose-400 cursor-pointer transition-all hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-rose-700 uppercase bg-rose-100/70 px-1.5 py-0.5 rounded">Mục 3</span>
                  <span className="text-[10px] text-rose-600 font-medium group-hover:underline">Chi tiết &rarr;</span>
                </div>
                <h3 className="font-bold text-xs text-slate-900 mb-1">Dinh Dưỡng & Quốc Phòng An Ninh</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Địa chỉ lồng ghép cụ thể môn Công nghệ, Đạo đức, HĐTN và Thông tư 08/2024 về GD Quốc phòng - An ninh tiểu học.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <UploadTKBModal
        isOpen={isUploadTKBOpen}
        onClose={() => setIsUploadTKBOpen(false)}
        onApplyTimetable={handleApplyNewTimetable}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={(newCfg) => setConfig(newCfg)}
      />

      <IntegrationReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />
    </div>
  );
}
