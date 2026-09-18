import { TimetableSlot } from '../types';

export interface WeeklyGrade2Plan {
  week: number;
  tiengViet: { sub: string; name: string; ppct: number | string }[];
  toan: { name: string; ppct: number }[];
  tnxh: { name: string; ppct: number }[];
  daoDuc: { name: string; ppct: number };
  hdtn: { sub: string; name: string; ppct: number }[];
  gdtc: { name: string; ppct: number }[];
  tinHoc: { name: string; ppct: number };
  amNhac: { name: string; ppct: number };
  miThuat: { name: string; ppct: number }[];
  tuHoc: { name: string; ppct: number }[];
}

export const GRADE_2_KNTT_THEMES = [
  { startWeek: 1, endWeek: 4, theme: 'Chủ điểm 1: Em là học sinh' },
  { startWeek: 5, endWeek: 8, theme: 'Chủ điểm 2: Em đi học' },
  { startWeek: 9, endWeek: 12, theme: 'Chủ điểm 3: Niềm vui tuổi thơ' },
  { startWeek: 13, endWeek: 16, theme: 'Chủ điểm 4: Mái ấm gia đình' },
  { startWeek: 17, endWeek: 18, theme: 'Chủ điểm 5: Ôn tập & Đánh giá Cuối Học kì 1' },
  { startWeek: 19, endWeek: 23, theme: 'Chủ điểm 6: Bạn thân ở trường' },
  { startWeek: 24, endWeek: 27, theme: 'Chủ điểm 7: Khám phá thế giới quanh em' },
  { startWeek: 28, endWeek: 31, theme: 'Chủ điểm 8: Quê hương tươi đẹp' },
  { startWeek: 32, endWeek: 35, theme: 'Chủ điểm 9: Ước mơ tuổi thơ & Ôn tập cuối năm' }
];

// Helper to generate full timetable slot array for Grade 2 (Lớp 2A - Thầy Nguyễn Thanh Bình)
// according to the official Timetable of Trường Tiểu Học Nhơn Ninh (Phân hiệu 2 - Điểm Đường Cắt)
export function getGrade2TimetableSlotsForWeek(
  week: number,
  className: string = '2A',
  teacherName: string = 'Nguyễn Thanh Bình'
): TimetableSlot[] {
  const w = Math.max(1, Math.min(35, week || 1));

  // Dynamic lesson titles for Grade 2 KNTT
  const tvLesson1 = w === 1 ? 'Đọc: Bài 1. Tôi là học sinh lớp 2 (Tiết 1)' :
                    w === 2 ? 'Đọc: Bài 3. Niềm vui của Bi và Bống (Tiết 1)' :
                    w === 3 ? 'Đọc: Bài 5. Em học vẽ (Tiết 1)' :
                    w === 4 ? 'Đọc: Bài 7. Cây xấu hổ (Tiết 1)' :
                    w === 5 ? 'Đọc: Bài 9. Cô giáo lớp em (Tiết 1)' :
                    w === 6 ? 'Đọc: Bài 11. Cái trống trường em (Tiết 1)' :
                    w === 7 ? 'Đọc: Bài 13. Yêu lắm trường ơi (Tiết 1)' :
                    w === 8 ? 'Đọc: Bài 15. Cuốn sách của em (Tiết 1)' :
                    w === 9 ? 'Đọc: Bài 17. Gọi bạn (Tiết 1)' :
                    w === 10 ? 'Đọc: Bài 19. Chữ A và những người bạn (Tiết 1)' :
                    w === 18 ? 'Đọc: Ôn tập học kì 1 (Tiết 1)' :
                    w === 35 ? 'Đọc: Ôn tập cuối năm học (Tiết 1)' :
                    `Đọc: Bài học chủ điểm tuần ${w} (Tiết 1)`;

  const tvLesson2 = w === 1 ? 'Đọc: Bài 1. Tôi là học sinh lớp 2 (Tiết 2)' :
                    w === 2 ? 'Đọc: Bài 3. Niềm vui của Bi và Bống (Tiết 2)' :
                    w === 3 ? 'Đọc: Bài 5. Em học vẽ (Tiết 2)' :
                    w === 4 ? 'Đọc: Bài 7. Cây xấu hổ (Tiết 2)' :
                    w === 5 ? 'Đọc: Bài 9. Cô giáo lớp em (Tiết 2)' :
                    w === 6 ? 'Đọc: Bài 11. Cái trống trường em (Tiết 2)' :
                    w === 7 ? 'Đọc: Bài 13. Yêu lắm trường ơi (Tiết 2)' :
                    w === 8 ? 'Đọc: Bài 15. Cuốn sách của em (Tiết 2)' :
                    w === 9 ? 'Đọc: Bài 17. Gọi bạn (Tiết 2)' :
                    w === 10 ? 'Đọc: Bài 19. Chữ A và những người bạn (Tiết 2)' :
                    w === 18 ? 'Đọc: Ôn tập học kì 1 (Tiết 2)' :
                    w === 35 ? 'Đọc: Ôn tập cuối năm học (Tiết 2)' :
                    `Đọc: Bài học chủ điểm tuần ${w} (Tiết 2)`;

  const tvLesson3 = w === 1 ? 'Viết: Chữ hoa A' :
                    w === 2 ? 'Viết: Chữ hoa B' :
                    w === 3 ? 'Viết: Chữ hoa C' :
                    w === 4 ? 'Viết: Chữ hoa D, Đ' :
                    w === 5 ? 'Viết: Chữ hoa E, Ê' :
                    w === 6 ? 'Viết: Chữ hoa G' :
                    w === 7 ? 'Viết: Chữ hoa H' :
                    w === 8 ? 'Viết: Chữ hoa I, K' :
                    w === 9 ? 'Viết: Chữ hoa L' :
                    w === 10 ? 'Viết: Chữ hoa M' :
                    `Viết: Rèn viết chữ hoa và câu ứng dụng tuần ${w}`;

  const tvLesson4 = w === 1 ? 'LTVC: Từ chỉ sự vật, hoạt động' :
                    w === 2 ? 'LTVC: Từ chỉ đặc điểm, câu nêu đặc điểm' :
                    w === 3 ? 'LTVC: Từ ngữ chỉ đồ vật, câu giới thiệu' :
                    w === 4 ? 'LTVC: Mở rộng vốn từ về bạn bè' :
                    w === 5 ? 'LTVC: Mở rộng vốn từ về trường học' :
                    w === 6 ? 'LTVC: Mở rộng vốn từ về thầy cô giáo' :
                    w === 7 ? 'LTVC: Luyện câu Ai làm gì? Ai thế nào?' :
                    `LTVC: Luyện tập về từ và câu tuần ${w}`;

  const tvLesson5 = w === 1 ? 'Đọc: Bài 2. Ngày hôm qua đâu rồi? (Tiết 1)' :
                    w === 2 ? 'Đọc: Bài 4. Làm việc thật là vui (Tiết 1)' :
                    w === 3 ? 'Đọc: Bài 6. Giờ ra chơi (Tiết 1)' :
                    w === 4 ? 'Đọc: Bài 8. Cầu thủ dự bị (Tiết 1)' :
                    w === 5 ? 'Đọc: Bài 10. Bọ rùa tìm mẹ (Tiết 1)' :
                    w === 6 ? 'Đọc: Bài 12. Danh sách tổ em (Tiết 1)' :
                    `Đọc: Bài đọc 2 tuần ${w} (Tiết 1)`;

  const tvLesson6 = w === 1 ? 'Đọc: Bài 2. Ngày hôm qua đâu rồi? (Tiết 2)' :
                    w === 2 ? 'Đọc: Bài 4. Làm việc thật là vui (Tiết 2)' :
                    w === 3 ? 'Đọc: Bài 6. Giờ ra chơi (Tiết 2)' :
                    w === 4 ? 'Đọc: Bài 8. Cầu thủ dự bị (Tiết 2)' :
                    w === 5 ? 'Đọc: Bài 10. Bọ rùa tìm mẹ (Tiết 2)' :
                    w === 6 ? 'Đọc: Bài 12. Danh sách tổ em (Tiết 2)' :
                    `Đọc: Bài đọc 2 tuần ${w} (Tiết 2)`;

  const tvLesson7 = w === 1 ? 'Viết: Nghe - viết Ngày hôm qua đâu rồi?' :
                    w === 2 ? 'Viết: Nghe - viết Làm việc thật là vui' :
                    w === 3 ? 'Viết: Nghe - viết Giờ ra chơi' :
                    w === 4 ? 'Viết: Nghe - viết Cầu thủ dự bị' :
                    `Viết: Nghe - viết chính tả tuần ${w}`;

  const tvLesson8 = w === 1 ? 'Nói và nghe: Kể chuyện Ngày hôm qua đâu rồi?' :
                    w === 2 ? 'Nói và nghe: Kể chuyện Làm việc thật là vui' :
                    w === 3 ? 'Nói và nghe: Kể chuyện Giờ ra chơi' :
                    `Nói và nghe: Kể chuyện theo tranh tuần ${w}`;

  const tvLesson9 = `Đọc mở rộng: Đọc sách báo theo chủ điểm tuần ${w}`;
  const tvLesson10 = `Luyện tập: Ôn tập kỹ năng đọc hiểu và viết câu tuần ${w}`;

  const toanLesson1 = w === 1 ? 'Bài 1: Ôn tập các số đến 100 (Tiết 1)' :
                      w === 2 ? 'Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 1)' :
                      w === 3 ? 'Bài 5: Bảng cộng (qua 10) (Tiết 1)' :
                      w === 4 ? 'Bài 7: Bảng trừ (qua 10) (Tiết 1)' :
                      w === 5 ? 'Bài 9: Bài toán về nhiều hơn, ít hơn một số đơn vị (Tiết 1)' :
                      w === 6 ? 'Bài 11: Luyện tập phép cộng, phép trừ có nhớ (Tiết 1)' :
                      w === 18 ? 'Bài 35: Ôn tập học kì 1 (Tiết 1)' :
                      w === 35 ? 'Bài 70: Ôn tập cuối năm học (Tiết 1)' :
                      `Toán: Bài học tuần ${w} (Tiết 1)`;

  const toanLesson2 = w === 1 ? 'Bài 1: Ôn tập các số đến 100 (Tiết 2)' :
                      w === 2 ? 'Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 2)' :
                      w === 3 ? 'Bài 5: Bảng cộng (qua 10) (Tiết 2)' :
                      w === 4 ? 'Bài 7: Bảng trừ (qua 10) (Tiết 2)' :
                      `Toán: Luyện tập phép tính và so sánh số (Tiết 2)`;

  const toanLesson3 = w === 1 ? 'Bài 1: Ôn tập các số đến 100 (Tiết 3)' :
                      w === 2 ? 'Bài 4: Hơn, kém nhau bao nhiêu (Tiết 1)' :
                      w === 3 ? 'Bài 6: Luyện tập bảng cộng (Tiết 1)' :
                      w === 4 ? 'Bài 8: Luyện tập bảng trừ (Tiết 1)' :
                      `Toán: Thực hành và giải toán có lời văn (Tiết 3)`;

  const toanLesson4 = w === 1 ? 'Bài 2: Tia số. Số liền trước, số liền sau (Tiết 1)' :
                      w === 2 ? 'Bài 4: Hơn, kém nhau bao nhiêu (Tiết 2)' :
                      w === 3 ? 'Bài 6: Luyện tập bảng cộng (Tiết 2)' :
                      `Toán: Luyện tập hình học và đại lượng (Tiết 4)`;

  const toanLesson5 = w === 1 ? 'Bài 2: Tia số. Số liền trước, số liền sau (Tiết 2)' :
                      w === 2 ? 'Bài 4: Luyện tập chung tuần 2' :
                      w === 3 ? 'Bài 6: Luyện tập chung tuần 3' :
                      `Toán: Luyện tập chung tuần ${w} (Tiết 5)`;

  const tnxhLesson1 = w === 1 ? 'Bài 1: Các thế hệ trong gia đình (Tiết 1)' :
                      w === 2 ? 'Bài 2: Nghề nghiệp của người lớn trong gia đình (Tiết 1)' :
                      w === 3 ? 'Bài 3: Phòng tránh ngộ độc khi ở nhà (Tiết 1)' :
                      w === 4 ? 'Bài 4: Giữ vệ sinh nhà ở (Tiết 1)' :
                      `Bài học khám phá tự nhiên và xã hội tuần ${w} (Tiết 1)`;

  const tnxhLesson2 = w === 1 ? 'Bài 1: Các thế hệ trong gia đình (Tiết 2)' :
                      w === 2 ? 'Bài 2: Nghề nghiệp của người lớn trong gia đình (Tiết 2)' :
                      w === 3 ? 'Bài 3: Phòng tránh ngộ độc khi ở nhà (Tiết 2)' :
                      w === 4 ? 'Bài 4: Giữ vệ sinh nhà ở (Tiết 2)' :
                      `Thực hành và trải nghiệm môi trường xung quanh tuần ${w} (Tiết 2)`;

  const ddLesson = w === 1 ? 'Bài 1: Vẻ đẹp quê hương em (Tiết 1)' :
                   w === 2 ? 'Bài 1: Vẻ đẹp quê hương em (Tiết 2)' :
                   w === 3 ? 'Bài 2: Em yêu quê hương (Tiết 1)' :
                   w === 4 ? 'Bài 2: Em yêu quê hương (Tiết 2)' :
                   `Đạo đức: Bài ${w}. Chuẩn mực hành vi đạo đức và kĩ năng sống`;

  const hdtn1 = w === 1 ? 'SHDC: Chào mừng năm học mới 2026 - 2027' :
                w === 2 ? 'SHDC: Phát động phong trào An toàn trường học' :
                w === 3 ? 'SHDC: Hoạt động vui Tết Trung thu' :
                `SHDC: Chào cờ và phát động thi đua tuần ${w}`;

  const hdtn2 = w === 1 ? 'HĐGDCĐ: Khám phá bản thân - Hình ảnh của em' :
                w === 2 ? 'HĐGDCĐ: Nụ cười thân thiện - Kết nối bạn bè' :
                w === 3 ? 'HĐGDCĐ: Giữ gìn vệ sinh lớp học xanh - sạch - đẹp' :
                `HĐGDCĐ: Hoạt động giáo dục theo chủ đề tuần ${w}`;

  const hdtn3 = `SHL: Sinh hoạt lớp tuần ${w} - Nhận xét đánh giá và kế hoạch tuần tới`;

  const gdtc1 = `GDTC: Đội hình đội ngũ và tư thế vận động cơ bản (Tiết 1 - Tuần ${w})`;
  const gdtc2 = `GDTC: Bài tập rèn luyện thể lực và trò chơi vận động (Tiết 2 - Tuần ${w})`;

  const tinLesson = `Tin học: Bài ${w}. Làm quen và rèn luyện kĩ năng sử dụng máy tính`;
  const anLesson = `Âm nhạc: Học hát và gõ đệm thanh phách (Tiết ${w})`;
  const mtLesson1 = `Mĩ thuật: Bài học sáng tạo đường nét và màu sắc (Tiết ${w})`;
  const mtLesson2 = `BDMT: Thực hành vẽ tranh và tạo hình sản phẩm (Tiết ${w})`;

  return [
    // ==================== THỨ HAI ====================
    // Sáng
    {
      id: `2a-mon-s1-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Sáng' as const,
      period: 1,
      subject: 'Hoạt động trải nghiệm',
      subSubject: 'SHDC',
      ppct: (w - 1) * 3 + 1,
      lessonName: hdtn1,
      teacherName,
      className,
      grade: 2,
      note: 'Chào cờ'
    },
    {
      id: `2a-mon-s2-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Sáng' as const,
      period: 2,
      subject: 'Toán',
      ppct: (w - 1) * 5 + 1,
      lessonName: toanLesson1,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-mon-s3-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Sáng' as const,
      period: 3,
      subject: 'Tiếng Việt',
      subSubject: 'Đọc',
      ppct: (w - 1) * 10 + 1,
      lessonName: tvLesson1,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-mon-s4-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Sáng' as const,
      period: 4,
      subject: 'Tiếng Việt',
      subSubject: 'Đọc',
      ppct: (w - 1) * 10 + 2,
      lessonName: tvLesson2,
      teacherName,
      className,
      grade: 2
    },
    // Chiều
    {
      id: `2a-mon-c1-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Chiều' as const,
      period: 1,
      subject: 'Giáo dục thể chất',
      ppct: (w - 1) * 2 + 1,
      lessonName: gdtc1,
      teacherName: 'Thầy Vinh (GV GDTC)',
      className,
      grade: 2
    },
    {
      id: `2a-mon-c2-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Chiều' as const,
      period: 2,
      subject: 'Hoạt động trải nghiệm',
      subSubject: 'HĐGDCĐ',
      ppct: (w - 1) * 3 + 2,
      lessonName: hdtn2,
      teacherName: 'Thầy Vinh (GV GDTC)',
      className,
      grade: 2
    },
    {
      id: `2a-mon-c3-w${w}`,
      dayOfWeek: 'Thứ Hai',
      session: 'Chiều' as const,
      period: 3,
      subject: 'Đạo đức',
      ppct: w,
      lessonName: ddLesson,
      teacherName: 'Thầy Nghiêm (GV ĐĐ/HĐTN)',
      className,
      grade: 2
    },

    // ==================== THỨ BA ====================
    // Sáng
    {
      id: `2a-tue-s1-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Sáng' as const,
      period: 1,
      subject: 'Toán',
      ppct: (w - 1) * 5 + 2,
      lessonName: toanLesson2,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-tue-s2-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Sáng' as const,
      period: 2,
      subject: 'Tiếng Việt',
      subSubject: 'Viết',
      ppct: (w - 1) * 10 + 3,
      lessonName: tvLesson3,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-tue-s3-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Sáng' as const,
      period: 3,
      subject: 'Tiếng Việt',
      subSubject: 'Luyện từ và câu',
      ppct: (w - 1) * 10 + 4,
      lessonName: tvLesson4,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-tue-s4-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Sáng' as const,
      period: 4,
      subject: 'Âm nhạc',
      ppct: w,
      lessonName: anLesson,
      teacherName: 'Cô Nhung (GV Âm nhạc)',
      className,
      grade: 2
    },
    // Chiều
    {
      id: `2a-tue-c1-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Chiều' as const,
      period: 1,
      subject: 'Tiếng Việt',
      subSubject: 'Đọc',
      ppct: (w - 1) * 10 + 5,
      lessonName: tvLesson5,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-tue-c2-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Chiều' as const,
      period: 2,
      subject: 'Tiếng Việt',
      subSubject: 'Đọc',
      ppct: (w - 1) * 10 + 6,
      lessonName: tvLesson6,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-tue-c3-w${w}`,
      dayOfWeek: 'Thứ Ba',
      session: 'Chiều' as const,
      period: 3,
      subject: 'Tự học',
      ppct: (w - 1) * 5 + 1,
      lessonName: `Tự học: Rèn kĩ năng tính toán và củng cố kiến thức tuần ${w}`,
      teacherName,
      className,
      grade: 2
    },

    // ==================== THỨ TƯ ====================
    // Sáng
    {
      id: `2a-wed-s1-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Sáng' as const,
      period: 1,
      subject: 'Toán',
      ppct: (w - 1) * 5 + 3,
      lessonName: toanLesson3,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-wed-s2-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Sáng' as const,
      period: 2,
      subject: 'Mĩ thuật',
      ppct: w,
      lessonName: mtLesson1,
      teacherName: 'Thầy Thạnh (GV Mĩ thuật)',
      className,
      grade: 2
    },
    {
      id: `2a-wed-s3-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Sáng' as const,
      period: 3,
      subject: 'Tiếng Việt',
      subSubject: 'Viết',
      ppct: (w - 1) * 10 + 7,
      lessonName: tvLesson7,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-wed-s4-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Sáng' as const,
      period: 4,
      subject: 'Tiếng Việt',
      subSubject: 'Nói và nghe',
      ppct: (w - 1) * 10 + 8,
      lessonName: tvLesson8,
      teacherName,
      className,
      grade: 2
    },
    // Chiều
    {
      id: `2a-wed-c1-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Chiều' as const,
      period: 1,
      subject: 'Tin học',
      ppct: w,
      lessonName: tinLesson,
      teacherName: 'Thầy Hải (GV Tin học)',
      className,
      grade: 2
    },
    {
      id: `2a-wed-c2-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Chiều' as const,
      period: 2,
      subject: 'Bồi dưỡng Mĩ thuật',
      subSubject: 'BDMT',
      ppct: w,
      lessonName: mtLesson2,
      teacherName: 'Thầy Thạnh (GV Mĩ thuật)',
      className,
      grade: 2
    },
    {
      id: `2a-wed-c3-w${w}`,
      dayOfWeek: 'Thứ Tư',
      session: 'Chiều' as const,
      period: 3,
      subject: 'Tự học',
      ppct: (w - 1) * 5 + 2,
      lessonName: `Tự học: Rèn chữ viết hoa và giữ gìn vở sạch đẹp`,
      teacherName,
      className,
      grade: 2
    },

    // ==================== THỨ NĂM ====================
    // Sáng
    {
      id: `2a-thu-s1-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Sáng' as const,
      period: 1,
      subject: 'Giáo dục thể chất',
      ppct: (w - 1) * 2 + 2,
      lessonName: gdtc2,
      teacherName: 'Thầy Vinh (GV GDTC)',
      className,
      grade: 2
    },
    {
      id: `2a-thu-s2-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Sáng' as const,
      period: 2,
      subject: 'Toán',
      ppct: (w - 1) * 5 + 4,
      lessonName: toanLesson4,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-thu-s3-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Sáng' as const,
      period: 3,
      subject: 'Tự nhiên và Xã hội',
      ppct: (w - 1) * 2 + 1,
      lessonName: tnxhLesson1,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-thu-s4-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Sáng' as const,
      period: 4,
      subject: 'Tiếng Việt',
      subSubject: 'Đọc mở rộng',
      ppct: (w - 1) * 10 + 9,
      lessonName: tvLesson9,
      teacherName,
      className,
      grade: 2
    },
    // Chiều
    {
      id: `2a-thu-c1-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Chiều' as const,
      period: 1,
      subject: 'Tiếng Việt',
      subSubject: 'Luyện tập',
      ppct: (w - 1) * 10 + 10,
      lessonName: tvLesson10,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-thu-c2-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Chiều' as const,
      period: 2,
      subject: 'Tự học',
      ppct: (w - 1) * 5 + 3,
      lessonName: `Tự học: Luyện tập phát triển ngôn ngữ và mở rộng câu`,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-thu-c3-w${w}`,
      dayOfWeek: 'Thứ Năm',
      session: 'Chiều' as const,
      period: 3,
      subject: 'Tự học',
      ppct: (w - 1) * 5 + 4,
      lessonName: `Tự học: Ôn luyện củng cố Toán và Tiếng Việt tuần ${w}`,
      teacherName,
      className,
      grade: 2
    },

    // ==================== THỨ SÁU ====================
    // Sáng
    {
      id: `2a-fri-s1-w${w}`,
      dayOfWeek: 'Thứ Sáu',
      session: 'Sáng' as const,
      period: 1,
      subject: 'Toán',
      ppct: (w - 1) * 5 + 5,
      lessonName: toanLesson5,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-fri-s2-w${w}`,
      dayOfWeek: 'Thứ Sáu',
      session: 'Sáng' as const,
      period: 2,
      subject: 'Tự nhiên và Xã hội',
      ppct: (w - 1) * 2 + 2,
      lessonName: tnxhLesson2,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-fri-s3-w${w}`,
      dayOfWeek: 'Thứ Sáu',
      session: 'Sáng' as const,
      period: 3,
      subject: 'Tự học',
      ppct: (w - 1) * 5 + 5,
      lessonName: `Tự học: Đọc sách báo thiếu nhi và rèn kĩ năng tự học`,
      teacherName,
      className,
      grade: 2
    },
    {
      id: `2a-fri-s4-w${w}`,
      dayOfWeek: 'Thứ Sáu',
      session: 'Sáng' as const,
      period: 4,
      subject: 'Hoạt động trải nghiệm',
      subSubject: 'SHL',
      ppct: (w - 1) * 3 + 3,
      lessonName: hdtn3,
      teacherName,
      className,
      grade: 2
    }
  ];
}
