import { TimetableSlot, GradeLevel } from '../types';
import { getGrade2TimetableSlotsForWeek } from './grade2KNTTCurriculum';
import { getGrade5TimetableSlotsForWeek } from './grade5KNTTCurriculum';

// Helper to generate full school timetable slots for all 5 classes and all teachers in any given week (Tuần 1 -> 35)
export function getAllSchoolTimetableSlotsForWeek(week: number): TimetableSlot[] {
  const w = week || 1;

  // 1. Slots for Grade 2 (Lớp 2A - Thầy Nguyễn Thanh Bình)
  const grade2Slots = getGrade2TimetableSlotsForWeek(w, '2A', 'Nguyễn Thanh Bình');

  // 2. Slots for Grade 1 (Lớp 1 - Cô Thanh)
  const grade1Slots: TimetableSlot[] = [
    // Thứ Hai
    { id: `1-mon-s1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 1, subject: 'Hoạt động trải nghiệm', subSubject: 'SHDC', ppct: (w - 1) * 3 + 1, lessonName: `SHDC: Chào cờ đầu tuần ${w}`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1, note: 'Chào cờ' },
    { id: `1-mon-s2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 1, lessonName: `Tiếng Việt: Bài học âm vần mới (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-mon-s3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 3, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 2, lessonName: `Tiếng Việt: Bài học âm vần mới (Tiết 2)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-mon-s4-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 4, subject: 'Toán', ppct: (w - 1) * 3 + 1, lessonName: `Toán: Các số và hình học cơ bản (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-mon-c1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 1, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 3, lessonName: `Tiếng Việt: Luyện viết chữ và từ ứng dụng (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-mon-c2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 4, lessonName: `Tiếng Việt: Luyện đọc câu ứng dụng (Tiết 2)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-mon-c3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 5 + 1, lessonName: `Tự học / Rèn chữ viết và giữ vở sạch đẹp`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },

    // Thứ Ba
    { id: `1-tue-s1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 1, subject: 'Đạo đức', ppct: w, lessonName: `Đạo đức: Bài ${w}. Hành vi đạo đức và kĩ năng sống`, teacherName: 'Thầy Nghiêm (GV ĐĐ/HĐTN)', className: '1', grade: 1 },
    { id: `1-tue-s2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 2, subject: 'Âm nhạc', ppct: w, lessonName: `Âm nhạc: Học hát và gõ đệm thanh phách (Tiết ${w})`, teacherName: 'Cô Nhung (GV Âm nhạc)', className: '1', grade: 1 },
    { id: `1-tue-s3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 3, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 1, lessonName: `GDTC: Đội hình đội ngũ và tư thế vận động cơ bản (Tiết 1)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '1', grade: 1 },
    { id: `1-tue-s4-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 4, subject: 'Hoạt động trải nghiệm', subSubject: 'HĐGDCĐ', ppct: (w - 1) * 3 + 2, lessonName: `HĐGDCĐ: Hoạt động giáo dục theo chủ đề tuần ${w}`, teacherName: 'Thầy Vinh (GV GDTC)', className: '1', grade: 1 },
    { id: `1-tue-c1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 1, subject: 'Toán', ppct: (w - 1) * 3 + 2, lessonName: `Toán: Luyện tập phép tính và so sánh số (Tiết 2)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-tue-c2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 5, lessonName: `Tiếng Việt: Ôn tập và đọc truyện tranh`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-tue-c3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 5 + 2, lessonName: `Tự học / Củng cố đọc hiểu và ghép vần`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },

    // Thứ Tư
    { id: `1-wed-s1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 1, subject: 'Mĩ thuật', ppct: w, lessonName: `Mĩ thuật: Sắc màu và đường nét sáng tạo (Tiết ${w})`, teacherName: 'Thầy Thạnh (GV Mĩ thuật)', className: '1', grade: 1 },
    { id: `1-wed-s2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 6, lessonName: `Tiếng Việt: Bài học vần mới (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-wed-s3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 3, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 7, lessonName: `Tiếng Việt: Bài học vần mới (Tiết 2)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-wed-s4-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 4, subject: 'Tự nhiên và Xã hội', ppct: (w - 1) * 2 + 1, lessonName: `TNXH: Gia đình và trường học thân yêu (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-wed-c1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 1, subject: 'Tin học', ppct: w, lessonName: `Tin học: Khám phá máy tính và trò chơi rèn chuột (Tiết ${w})`, teacherName: 'Thầy Hải (GV Tin học)', className: '1', grade: 1 },
    { id: `1-wed-c2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 2, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 2, lessonName: `GDTC: Bài tập rèn luyện tư thế và kỹ năng vận động (Tiết 2)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '1', grade: 1 },
    { id: `1-wed-c3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 5 + 3, lessonName: `Tự học / Rèn tư duy toán học và đếm hình`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },

    // Thứ Năm
    { id: `1-thu-s1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 3 + 3, lessonName: `Toán: Bài luyện tập chung (Tiết 3)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-thu-s2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 2, subject: 'Bồi dưỡng Mĩ thuật', subSubject: 'BDMT', ppct: w, lessonName: `BDMT: Khéo tay hay vẽ và xé dán sáng tạo (Tiết ${w})`, teacherName: 'Thầy Thạnh (GV Mĩ thuật)', className: '1', grade: 1 },
    { id: `1-thu-s3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 3, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 8, lessonName: `Tiếng Việt: Luyện viết và chính tả (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-thu-s4-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 4, subject: 'Tự học', ppct: (w - 1) * 5 + 4, lessonName: `Tự học / Luyện nghe và kể chuyện theo tranh`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-thu-c1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 1, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 9, lessonName: `Tiếng Việt: Luyện đọc mở rộng và đọc thơ`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-thu-c2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 10, lessonName: `Tiếng Việt: Luyện tập kỹ năng nói và nghe`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-thu-c3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 5 + 5, lessonName: `Tự học / Đọc sách báo và truyện tranh thiếu nhi`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },

    // Thứ Sáu
    { id: `1-fri-s1-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 1, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 11, lessonName: `Tiếng Việt: Luyện tập tổng hợp tuần ${w} (Tiết 1)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-fri-s2-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 2, subject: 'Tiếng Việt', ppct: (w - 1) * 12 + 12, lessonName: `Tiếng Việt: Đánh giá quá trình đọc viết tuần ${w}`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-fri-s3-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 3, subject: 'Tự nhiên và Xã hội', ppct: (w - 1) * 2 + 2, lessonName: `TNXH: Trải nghiệm và tìm hiểu thế giới xung quanh (Tiết 2)`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 },
    { id: `1-fri-s4-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 4, subject: 'Hoạt động trải nghiệm', subSubject: 'SHL', ppct: (w - 1) * 3 + 3, lessonName: `SHL: Sinh hoạt lớp tuần ${w} - Sơ kết và kế hoạch`, teacherName: 'Cô Thanh (GVCN)', className: '1', grade: 1 }
  ];

  // 3. Slots for Grade 3 (Lớp 3 - Cô Phượng)
  const grade3Slots: TimetableSlot[] = [
    // Thứ Hai
    { id: `3-mon-s1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 1, subject: 'Hoạt động trải nghiệm', subSubject: 'SHDC', ppct: (w - 1) * 3 + 1, lessonName: `SHDC: Chào cờ đầu tuần ${w}`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3, note: 'Chào cờ' },
    { id: `3-mon-s2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 2, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 1, lessonName: `GDTC: Đội hình đội ngũ và bài tập phát triển chung (Tiết 1)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '3', grade: 3 },
    { id: `3-mon-s3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Đọc', ppct: (w - 1) * 7 + 1, lessonName: `Đọc: Bài học tuần ${w} (Tiết 1)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-mon-s4-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 4, subject: 'Tiếng Việt', subSubject: 'Đọc', ppct: (w - 1) * 7 + 2, lessonName: `Đọc: Bài học tuần ${w} (Tiết 2)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-mon-c1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 1, lessonName: `Toán: Ôn tập và hình thành kiến thức mới (Tiết 1)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-mon-c2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 2, subject: 'Âm nhạc', ppct: w, lessonName: `Âm nhạc: Học hát và nhạc cụ gõ đệm (Tiết ${w})`, teacherName: 'Cô Nhung (GV Âm nhạc)', className: '3', grade: 3 },
    { id: `3-mon-c3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 3, subject: 'Tự nhiên và Xã hội', ppct: (w - 1) * 2 + 1, lessonName: `TNXH: Bài học khám phá tự nhiên và xã hội (Tiết 1)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },

    // Thứ Ba
    { id: `3-tue-s1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 2, lessonName: `Toán: Luyện tập phép tính và giải toán (Tiết 2)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-tue-s2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 2, subject: 'Hoạt động trải nghiệm', subSubject: 'HĐGDCĐ', ppct: (w - 1) * 3 + 2, lessonName: `HĐGDCĐ: Hoạt động giáo dục theo chủ đề tuần ${w}`, teacherName: 'Thầy Vinh (GV GDTC)', className: '3', grade: 3 },
    { id: `3-tue-s3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 3, subject: 'Bồi dưỡng Âm nhạc', subSubject: 'BDAN', ppct: w, lessonName: `BDAN: Luyện thanh và vận động cơ thể theo nhạc (Tiết ${w})`, teacherName: 'Cô Nhung (GV Âm nhạc)', className: '3', grade: 3 },
    { id: `3-tue-s4-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 4, subject: 'Tiếng Việt', subSubject: 'Viết', ppct: (w - 1) * 7 + 3, lessonName: `Viết: Viết chính tả và rèn chữ đẹp`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-tue-c1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 1, subject: 'Tiếng Việt', subSubject: 'Luyện từ và câu', ppct: (w - 1) * 7 + 4, lessonName: `LTVC: Mở rộng vốn từ và câu (Tiết 4)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-tue-c2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 2, subject: 'Đạo đức', ppct: w, lessonName: `Đạo đức: Bài ${w}. Chuẩn mực đạo đức và hành vi (Tiết 1)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-tue-c3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 2 + 1, lessonName: `Tự học / Củng cố Toán và Tiếng Việt`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },

    // Thứ Tư
    { id: `3-wed-s1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 3, lessonName: `Toán: Thực hành và trải nghiệm toán học (Tiết 3)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-wed-s2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 2, subject: 'Mĩ thuật', ppct: w, lessonName: `Mĩ thuật: Khám phá màu sắc và bố cục (Tiết ${w})`, teacherName: 'Thầy Thạnh (GV Mĩ thuật)', className: '3', grade: 3 },
    { id: `3-wed-s3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Đọc', ppct: (w - 1) * 7 + 5, lessonName: `Đọc: Bài đọc 2 tuần ${w}`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-wed-s4-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 4, subject: 'Tăng cường Tiếng Việt', subSubject: 'TCTV', ppct: w, lessonName: `TCTV: Rèn kỹ năng đọc hiểu và đặt câu`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-wed-c1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 1, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 1, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 1 (Vocabulary & Phonics)`, teacherName: 'Cô Trang (GV Tiếng Anh)', className: '3', grade: 3 },
    { id: `3-wed-c2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 2, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 2, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 2 (Sentence Patterns)`, teacherName: 'Cô Trang (GV Tiếng Anh)', className: '3', grade: 3 },
    { id: `3-wed-c3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 3, subject: 'Tin học', ppct: w, lessonName: `Tin học: Bài ${w}. Khám phá thông tin và máy tính`, teacherName: 'Thầy Hải (GV Tin học)', className: '3', grade: 3 },

    // Thứ Năm
    { id: `3-thu-s1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 1, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 2, lessonName: `GDTC: Động tác di chuyển và trò chơi vận động (Tiết 2)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '3', grade: 3 },
    { id: `3-thu-s2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 2, subject: 'Toán', ppct: (w - 1) * 5 + 4, lessonName: `Toán: Luyện tập hình học và đo lường (Tiết 4)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-thu-s3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Luyện viết đoạn', ppct: (w - 1) * 7 + 6, lessonName: `Viết: Luyện viết đoạn văn sáng tạo`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-thu-s4-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 4, subject: 'Tự nhiên và Xã hội', ppct: (w - 1) * 2 + 2, lessonName: `TNXH: Thực hành tìm hiểu môi trường sống (Tiết 2)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-thu-c1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 1, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 3, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 3 (Listening & Speaking)`, teacherName: 'Cô Trang (GV Tiếng Anh)', className: '3', grade: 3 },
    { id: `3-thu-c2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 2, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 4, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 4 (Reading & Writing)`, teacherName: 'Cô Trang (GV Tiếng Anh)', className: '3', grade: 3 },
    { id: `3-thu-c3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 3, subject: 'Bồi dưỡng Mĩ thuật', subSubject: 'BDMT', ppct: w, lessonName: `BDMT: Thực hành vẽ tranh và tạo dáng sản phẩm (Tiết ${w})`, teacherName: 'Thầy Thạnh (GV Mĩ thuật)', className: '3', grade: 3 },

    // Thứ Sáu
    { id: `3-fri-s1-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 5, lessonName: `Toán: Luyện tập chung tuần ${w} (Tiết 5)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-fri-s2-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 2, subject: 'Tiếng Việt', subSubject: 'Đọc mở rộng', ppct: (w - 1) * 7 + 7, lessonName: `Đọc mở rộng: Đọc sách báo theo chủ điểm tuần ${w}`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-fri-s3-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 3, subject: 'Công nghệ', ppct: w, lessonName: `Công nghệ: Bài ${w}. Tự nhiên và công nghệ (Tiết 1)`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 },
    { id: `3-fri-s4-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 4, subject: 'Hoạt động trải nghiệm', subSubject: 'SHL', ppct: (w - 1) * 3 + 3, lessonName: `SHL: Sinh hoạt lớp tuần ${w} - Nhận xét và kế hoạch`, teacherName: 'Cô Phượng (GVCN)', className: '3', grade: 3 }
  ];

  // 4. Slots for Grade 4 (Lớp 4 - Cô Khánh)
  const grade4Slots: TimetableSlot[] = [
    // Thứ Hai
    { id: `4-mon-s1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 1, subject: 'Hoạt động trải nghiệm', subSubject: 'SHDC', ppct: (w - 1) * 3 + 1, lessonName: `SHDC: Chào cờ đầu tuần ${w}`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4, note: 'Chào cờ' },
    { id: `4-mon-s2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 2, subject: 'Mĩ thuật', ppct: w, lessonName: `Mĩ thuật: Khám phá vẻ đẹp trong tranh (Tiết ${w})`, teacherName: 'Thầy Thạnh (GV Mĩ thuật)', className: '4', grade: 4 },
    { id: `4-mon-s3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Đọc', ppct: (w - 1) * 7 + 1, lessonName: `Đọc: Bài đọc chủ điểm tuần ${w} (Tiết 1)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-mon-s4-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng', period: 4, subject: 'Tiếng Việt', subSubject: 'Luyện từ và câu', ppct: (w - 1) * 7 + 2, lessonName: `LTVC: Luyện tập về từ và câu (Tiết 2)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-mon-c1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 1, subject: 'Âm nhạc', ppct: w, lessonName: `Âm nhạc: Học hát và tập đọc nhạc (Tiết ${w})`, teacherName: 'Cô Nhung (GV Âm nhạc)', className: '4', grade: 4 },
    { id: `4-mon-c2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 2, subject: 'Hoạt động trải nghiệm', subSubject: 'HĐGDCĐ', ppct: (w - 1) * 3 + 2, lessonName: `HĐGDCĐ: Giáo dục truyền thống và kỹ năng tuần ${w}`, teacherName: 'Thầy Nghiêm (GV ĐĐ/HĐTN)', className: '4', grade: 4 },
    { id: `4-mon-c3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều', period: 3, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 1, lessonName: `GDTC: Đội hình đội ngũ và rèn luyện thể lực (Tiết 1)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '4', grade: 4 },

    // Thứ Ba
    { id: `4-tue-s1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 1, lessonName: `Toán: Bài học số và phép tính (Tiết 1)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-tue-s2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 2, subject: 'Đạo đức', ppct: w, lessonName: `Đạo đức: Bài ${w}. Giữ gìn và phát huy truyền thống tốt đẹp`, teacherName: 'Thầy Nghiêm (GV ĐĐ/HĐTN)', className: '4', grade: 4 },
    { id: `4-tue-s3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 3, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 1, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 1 (New Language)`, teacherName: 'Cô Uyên (GV Tiếng Anh)', className: '4', grade: 4 },
    { id: `4-tue-s4-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng', period: 4, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 2, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 2 (Practice & Communication)`, teacherName: 'Cô Uyên (GV Tiếng Anh)', className: '4', grade: 4 },
    { id: `4-tue-c1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 1, subject: 'Tiếng Việt', subSubject: 'Viết', ppct: (w - 1) * 7 + 3, lessonName: `Viết: Viết bài văn miêu tả / kể chuyện (Tiết 3)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-tue-c2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 2, subject: 'Khoa học', ppct: (w - 1) * 2 + 1, lessonName: `Khoa học: Bài ${w}. Chất và sự biến đổi của chất (Tiết 1)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-tue-c3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều', period: 3, subject: 'Lịch sử và Địa lí', ppct: (w - 1) * 2 + 1, lessonName: `LS&ĐL: Thiên nhiên và con người Việt Nam (Tiết 1)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },

    // Thứ Tư
    { id: `4-wed-s1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 1, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 3, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 3 (Skills Development)`, teacherName: 'Cô Uyên (GV Tiếng Anh)', className: '4', grade: 4 },
    { id: `4-wed-s2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 2, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 4, lessonName: `Tiếng Anh: Unit ${Math.ceil(w/2)}. Lesson 4 (Project & Review)`, teacherName: 'Cô Uyên (GV Tiếng Anh)', className: '4', grade: 4 },
    { id: `4-wed-s3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 3, subject: 'Tin học', ppct: w, lessonName: `Tin học: Bài ${w}. Phần mềm và ứng dụng học tập`, teacherName: 'Thầy Hải (GV Tin học)', className: '4', grade: 4 },
    { id: `4-wed-s4-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng', period: 4, subject: 'Tăng cường Tin học', subSubject: 'TCTH', ppct: w, lessonName: `TCTH: Thực hành kĩ năng tin học và an toàn số (Tiết ${w})`, teacherName: 'Thầy Hải (GV Tin học)', className: '4', grade: 4 },
    { id: `4-wed-c1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 2, lessonName: `Toán: Phép cộng, trừ, nhân, chia số lớn (Tiết 2)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-wed-c2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 2, subject: 'Khoa học', ppct: (w - 1) * 2 + 2, lessonName: `Khoa học: Thực hành thí nghiệm khoa học (Tiết 2)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-wed-c3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều', period: 3, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 2, lessonName: `GDTC: Động tác nhảy, ném bóng và trò chơi tiếp sức (Tiết 2)`, teacherName: 'Thầy Vinh (GV GDTC)', className: '4', grade: 4 },

    // Thứ Năm
    { id: `4-thu-s1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 3, lessonName: `Toán: Giải toán có lời văn và đại lượng (Tiết 3)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-s2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 2, subject: 'Tiếng Việt', subSubject: 'Đọc', ppct: (w - 1) * 7 + 4, lessonName: `Đọc: Bài đọc 2 tuần ${w}`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-s3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Viết', ppct: (w - 1) * 7 + 5, lessonName: `Viết: Luyện viết đoạn văn miêu tả`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-s4-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng', period: 4, subject: 'Công nghệ', ppct: w, lessonName: `Công nghệ: Bài ${w}. Thiết kế và chế tạo sản phẩm thủ công`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-c1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 4, lessonName: `Toán: Luyện tập hình học và diện tích (Tiết 4)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-c2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 2, subject: 'Lịch sử và Địa lí', ppct: (w - 1) * 2 + 2, lessonName: `LS&ĐL: Di tích lịch sử và văn hóa địa phương (Tiết 2)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-thu-c3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Chiều', period: 3, subject: 'Tự học', ppct: (w - 1) * 2 + 1, lessonName: `Tự học / Rèn kĩ năng tự học và đọc sách`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },

    // Thứ Sáu
    { id: `4-fri-s1-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 1, subject: 'Toán', ppct: (w - 1) * 5 + 5, lessonName: `Toán: Luyện tập chung tuần ${w} (Tiết 5)`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-fri-s2-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 2, subject: 'Tiếng Việt', subSubject: 'Nói và nghe', ppct: (w - 1) * 7 + 6, lessonName: `Nói và nghe: Trao đổi về chủ đề bài học`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-fri-s3-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 3, subject: 'Tiếng Việt', subSubject: 'Đọc mở rộng', ppct: (w - 1) * 7 + 7, lessonName: `Đọc mở rộng: Đọc sách báo và ghi chép nhật ký đọc`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 },
    { id: `4-fri-s4-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng', period: 4, subject: 'Hoạt động trải nghiệm', subSubject: 'SHL', ppct: (w - 1) * 3 + 3, lessonName: `SHL: Sinh hoạt lớp tuần ${w} - Tổng kết thi đua`, teacherName: 'Cô Khánh (GVCN)', className: '4', grade: 4 }
  ];

  // 5. Slots for Grade 5 (Lớp 5 - Cô Liên)
  const g5CurriculumSlots = getGrade5TimetableSlotsForWeek(w, '5', 'Cô Liên (GVCN)');
  // Map teacher names to the real teachers of Nhơn Ninh for Grade 5
  const grade5Slots: TimetableSlot[] = g5CurriculumSlots.map((slot) => {
    let teacherName = 'Cô Liên (GVCN)';
    if (slot.subject === 'Giáo dục thể chất') {
      teacherName = 'Thầy Vinh (GV GDTC)';
    } else if (slot.subject === 'Hoạt động trải nghiệm' && slot.subSubject === 'HĐGDCĐ') {
      teacherName = 'Thầy Vinh (GV GDTC)';
    } else if (slot.subject === 'Đạo đức') {
      teacherName = 'Thầy Nghiêm (GV ĐĐ/HĐTN)';
    } else if (slot.subject === 'Công nghệ') {
      teacherName = 'Thầy Nghiêm (GV ĐĐ/HĐTN)';
    } else if (slot.subject === 'Âm nhạc') {
      teacherName = 'Cô Nhung (GV Âm nhạc)';
    } else if (slot.subject === 'Mĩ thuật') {
      teacherName = 'Thầy Thạnh (GV Mĩ thuật)';
    } else if (slot.subject === 'Tin học' || slot.subject === 'Tăng cường Tin học') {
      teacherName = 'Thầy Hải (GV Tin học)';
    } else if (slot.subject === 'Tiếng Anh') {
      teacherName = 'Cô Uyên (GV Tiếng Anh)';
    }
    return {
      ...slot,
      className: '5',
      teacherName
    };
  });

  return [...grade1Slots, ...grade2Slots, ...grade3Slots, ...grade4Slots, ...grade5Slots];
}
