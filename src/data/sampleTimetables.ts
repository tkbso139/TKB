import { TimetableSlot, TeacherInfo } from '../types';
import { getAllSchoolTimetableSlotsForWeek } from './schoolMasterSchedule';

export const SAMPLE_SCHOOLS = [
  'TRƯỜNG TIỂU HỌC NHƠN NINH',
  'TRƯỜNG TIỂU HỌC TÂN NINH',
  'TRƯỜNG TIỂU HỌC TÂN THẠNH',
  'TRƯỜNG TIỂU HỌC CHIBI',
  'TRƯỜNG TIỂU HỌC CHU VĂN AN',
  'TRƯỜNG TIỂU HỌC NGUYỄN HUỆ',
  'TRƯỜNG TIỂU HỌC LÊ QUÝ ĐÔN',
  'TRƯỜNG TIỂU HỌC KIM ĐỒNG',
  'TRƯỜNG TIỂU HỌC VÕ THỊ SÁU'
];

export const SAMPLE_CAMPUSES = [
  'Phân hiệu 2 (Điểm Đường Cắt)',
  'Điểm chính',
  'Phân hiệu 1',
  'Điểm Đường Cắt',
  'Xã Nhơn Ninh',
  'Xã Tân Ninh',
  'Điểm Tân Lập'
];

export const TEACHERS_LIST: TeacherInfo[] = [
  { id: 't2a', name: 'Nguyễn Thanh Bình', role: 'GVCN', mainClass: '2A', subjects: ['Tiếng Việt', 'Toán', 'Tự nhiên và Xã hội', 'Hoạt động trải nghiệm', 'Tự học'] },
  { id: 't1', name: 'Cô Thanh (GVCN)', role: 'GVCN', mainClass: '1', subjects: ['Tiếng Việt', 'Toán', 'Tự nhiên và Xã hội', 'Hoạt động trải nghiệm', 'Tự học'] },
  { id: 't3', name: 'Cô Phượng (GVCN)', role: 'GVCN', mainClass: '3', subjects: ['Tiếng Việt', 'Toán', 'Tự nhiên và Xã hội', 'Đạo đức', 'Hoạt động trải nghiệm', 'Công nghệ', 'TCTV', 'Tự học'] },
  { id: 't4', name: 'Cô Khánh (GVCN)', role: 'GVCN', mainClass: '4', subjects: ['Tiếng Việt', 'Toán', 'Khoa học', 'Lịch sử và Địa lí', 'Hoạt động trải nghiệm', 'Công nghệ', 'Tự học'] },
  { id: 't5', name: 'Cô Liên (GVCN)', role: 'GVCN', mainClass: '5', subjects: ['Tiếng Việt', 'Toán', 'Khoa học', 'Lịch sử và Địa lí', 'Hoạt động trải nghiệm', 'Tự học'] },
  { id: 't_vinh', name: 'Thầy Vinh (GV GDTC)', role: 'GVBM', subjects: ['Giáo dục thể chất', 'Hoạt động trải nghiệm'] },
  { id: 't_nghiem', name: 'Thầy Nghiêm (GV ĐĐ/HĐTN)', role: 'GVBM', subjects: ['Đạo đức', 'Hoạt động trải nghiệm', 'Công nghệ'] },
  { id: 't_nhung', name: 'Cô Nhung (GV Âm nhạc)', role: 'GVBM', subjects: ['Âm nhạc', 'BDAN'] },
  { id: 't_thanh', name: 'Thầy Thạnh (GV Mĩ thuật)', role: 'GVBM', subjects: ['Mĩ thuật', 'BDMT'] },
  { id: 't_hai', name: 'Thầy Hải (GV Tin học)', role: 'GVBM', subjects: ['Tin học', 'TCTH'] },
  { id: 't_trang', name: 'Cô Trang (GV Tiếng Anh)', role: 'GVBM', subjects: ['Tiếng Anh', 'TA (Trang)'] },
  { id: 't_uyen', name: 'Cô Uyên (GV Tiếng Anh)', role: 'GVBM', subjects: ['Tiếng Anh', 'TA (Uyên)'] },
];

export const SPECIALIST_TEACHERS = [
  { name: 'Thầy Vinh (GV GDTC)', subject: 'Giáo dục thể chất & HĐTN', icon: '🏃', label: 'GDTC & HĐTN (Thầy Vinh - 14 tiết)', grades: 'Khối 1, 2, 3, 4, 5' },
  { name: 'Thầy Nghiêm (GV ĐĐ/HĐTN)', subject: 'Đạo đức & HĐTN', icon: '📘', label: 'ĐĐ & HĐTN (Thầy Nghiêm - 6 tiết)', grades: 'Khối 1, 2, 4, 5' },
  { name: 'Cô Nhung (GV Âm nhạc)', subject: 'Âm nhạc', icon: '🎵', label: 'Âm nhạc & BDAN (Cô Nhung - 6 tiết)', grades: 'Khối 1, 2, 3, 4, 5' },
  { name: 'Thầy Thạnh (GV Mĩ thuật)', subject: 'Mĩ thuật', icon: '🎨', label: 'Mĩ thuật & BDMT (Thầy Thạnh - 8 tiết)', grades: 'Khối 1, 2, 3, 4, 5' },
  { name: 'Thầy Hải (GV Tin học)', subject: 'Tin học', icon: '💻', label: 'Tin học & TCTH (Thầy Hải - 7 tiết)', grades: 'Khối 1, 2, 3, 4, 5' },
  { name: 'Cô Trang (GV Tiếng Anh)', subject: 'Tiếng Anh', icon: '🇬🇧', label: 'Tiếng Anh K3 (Cô Trang - 4 tiết)', grades: 'Khối 3' },
  { name: 'Cô Uyên (GV Tiếng Anh)', subject: 'Tiếng Anh', icon: '🇬🇧', label: 'Tiếng Anh K4-5 (Cô Uyên - 8 tiết)', grades: 'Khối 4, 5' },
];

export const INITIAL_CLASSES = [
  '2A', '1', '3', '4', '5', '1A', '2B', '3A', '4A', '5A'
];

export const INITIAL_TIMETABLE_SLOTS: TimetableSlot[] = getAllSchoolTimetableSlotsForWeek(1);
