export type GradeLevel = 1 | 2 | 3 | 4 | 5;

export type IntegrationType = 
  | 'AI' 
  | 'NLS' 
  | 'GDDD' 
  | 'QCN' 
  | 'QPAN' 
  | 'BVMT' 
  | 'STEM' 
  | 'TTDD_HCM' 
  | 'HTQC';

export interface IntegrationItem {
  id: string;
  type: IntegrationType;
  code?: string; // e.g. '1.A1.1', '5.2.CB1a'
  title: string;
  content: string;
  activityLocation?: string; // e.g. 'Hoạt động 2 - Khám phá', 'Phần Vận dụng'
  methodHint?: string;
}

export interface TeachingActivity {
  id: string;
  phase: 'Khởi động' | 'Khám phá' | 'Luyện tập' | 'Thực hành' | 'Vận dụng';
  goal: string;
  teacherActivity: string;
  studentActivity: string;
}

export interface LessonPlan {
  id: string;
  grade: GradeLevel;
  subject: string;
  subSubject?: string; // e.g. 'Đọc', 'Luyện từ và câu', 'Viết', 'Nói và nghe'
  lessonName: string;
  periodInWeek: number; // Tiết trong tuần (1, 2, 3...)
  ppctNumber: number | string; // Tiết theo PPCT (15, 16, 17+18...)
  week: number;
  schoolName: string;
  campusName: string; // Phân hiệu / Điểm trường
  className: string;
  teacherName: string;
  dayOfWeek: 'Thứ Hai' | 'Thứ Ba' | 'Thứ Tư' | 'Thứ Năm' | 'Thứ Sáu';
  session: 'Sáng' | 'Chiều';
  dateStr?: string;
  
  // Section I: Yêu cầu cần đạt
  competencies: {
    specific: string; // Năng lực đặc thù
    general: string;  // Năng lực chung
    qualities: string; // Phẩm chất
  };
  
  // Integrations
  integrations: IntegrationItem[];
  
  // Section II: Đồ dùng dạy học
  equipment: {
    teacher: string;
    student: string;
  };
  
  // Section III: Hoạt động dạy học 2 cột
  activities: TeachingActivity[];
  
  // Section IV: Điều chỉnh sau bài dạy
  adjustmentNote?: string;
}

export interface TimetableSlot {
  id: string;
  dayOfWeek: 'Thứ Hai' | 'Thứ Ba' | 'Thứ Tư' | 'Thứ Năm' | 'Thứ Sáu';
  session: 'Sáng' | 'Chiều';
  period: number; // 1 to 5
  subject: string;
  subSubject?: string;
  ppct?: number | string;
  lessonName?: string;
  teacherName: string;
  className: string;
  grade: GradeLevel;
  note?: string;
}

export interface TeacherInfo {
  id: string;
  name: string;
  role: 'GVCN' | 'GVBM' | 'TTCM' | 'TPT';
  mainClass?: string;
  subjects: string[];
  phone?: string;
}

export interface SchoolConfig {
  schoolName: string;
  campusName: string;
  districtName: string;
  provinceName: string;
  schoolYear: string;
  selectedGrade: GradeLevel;
  selectedClass: string;
  selectedTeacher: string;
  selectedWeek: number;
  wordFontSize: 12 | 13 | 14;
  startDate: string;
  filterMode?: 'class' | 'teacher'; // 'class' to view by class, 'teacher' to view by teacher
}

export interface CurriculumLesson {
  week: number;
  grade: GradeLevel;
  subject: string;
  subSubject?: string;
  lessonName: string;
  periodCount: number;
  ppctStart: number;
  ppctEnd: number;
  theme?: string;
  suggestedIntegrations?: {
    type: IntegrationType;
    code?: string;
    content: string;
    location?: string;
  }[];
}
