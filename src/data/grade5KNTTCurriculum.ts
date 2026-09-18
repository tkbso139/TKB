import { TimetableSlot } from '../types';

export interface WeeklyGrade5Plan {
  week: number;
  tiengViet: { sub: string; name: string; ppct: number | string }[];
  toan: { name: string; ppct: number }[];
  khoaHoc: { name: string; ppct: number }[];
  daoDuc: { name: string; ppct: number }[];
  lsDl: { name: string; ppct: number }[];
  congNghe: { name: string; ppct: number }[];
  hdtn: { sub: string; name: string; ppct: number }[];
  gdtc: { name: string; ppct: number }[];
  tinHoc: { name: string; ppct: number };
  amNhac: { name: string; ppct: number };
  miThuat: { name: string; ppct: number };
  tiengAnh: { name: string; ppct: number }[];
}

// 35 Tuần chuẩn Kế hoạch Dạy học Khối 5 - Bộ sách Kết nối tri thức với cuộc sống
export const GRADE_5_KNTT_FULL_35_WEEKS: WeeklyGrade5Plan[] = [
  {
    week: 1,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 1. Thanh âm của gió', ppct: 1 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Luyện tập về danh từ, động từ, tính từ', ppct: 2 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo', ppct: 3 },
      { sub: 'Đọc', name: 'Đọc: Bài 2. Cánh đồng hoa (Tiết 1)', ppct: 4 },
      { sub: 'Đọc', name: 'Đọc: Bài 2. Cánh đồng hoa (Tiết 2)', ppct: 5 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp theo)', ppct: 6 },
      { sub: 'Đọc mở rộng', name: 'Đọc mở rộng: Đọc sách báo về thế giới tuổi thơ', ppct: 7 }
    ],
    toan: [
      { name: 'Bài 1. Ôn tập số tự nhiên (Tiết 1)', ppct: 1 },
      { name: 'Bài 1. Ôn tập số tự nhiên (Tiết 2)', ppct: 2 },
      { name: 'Bài 2. Ôn tập các phép tính với số tự nhiên (Tiết 1)', ppct: 3 },
      { name: 'Bài 2. Ôn tập các phép tính với số tự nhiên (Tiết 2)', ppct: 4 },
      { name: 'Bài 3. Ôn tập phân số (Tiết 1)', ppct: 5 }
    ],
    khoaHoc: [
      { name: 'Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1)', ppct: 1 },
      { name: 'Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 2)', ppct: 2 }
    ],
    daoDuc: [
      { name: 'Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 1)', ppct: 1 }
    ],
    lsDl: [
      { name: 'Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1)', ppct: 1 },
      { name: 'Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 2)', ppct: 2 }
    ],
    congNghe: [
      { name: 'Bài 1. Vai trò của công nghệ (Tiết 1)', ppct: 1 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Chào năm học mới', ppct: 1 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Chúng mình đã lớn', ppct: 2 },
      { sub: 'SHL', name: 'SHL: Bậc thang trưởng thành', ppct: 3 }
    ],
    gdtc: [
      { name: 'Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 1)', ppct: 1 },
      { name: 'Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 2)', ppct: 2 }
    ],
    tinHoc: { name: 'Bài 1: Máy tính và em - Thông tin trong giải quyết vấn đề', ppct: 1 },
    amNhac: { name: 'Học hát: Bài hát Reo vang bình minh (Tiết 1)', ppct: 1 },
    miThuat: { name: 'Chủ đề 1: Thế giới tuổi thơ trong tranh (Tiết 1)', ppct: 1 },
    tiengAnh: [
      { name: 'Unit 1: All about me (Lesson 1)', ppct: 1 },
      { name: 'Unit 1: All about me (Lesson 2)', ppct: 2 },
      { name: 'Unit 1: All about me (Lesson 3)', ppct: 3 },
      { name: 'Unit 1: All about me (Lesson 4)', ppct: 4 }
    ]
  },
  {
    week: 2,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 3. Tuổi Ngựa', ppct: 8 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Đại từ', ppct: 9 },
      { sub: 'Viết', name: 'Viết: Lập dàn ý cho bài văn kể chuyện sáng tạo', ppct: 10 },
      { sub: 'Đọc', name: 'Đọc: Bài 4. Bến sông tuổi thơ (Tiết 1)', ppct: 11 },
      { sub: 'Đọc', name: 'Đọc: Bài 4. Bến sông tuổi thơ (Tiết 2)', ppct: 12 },
      { sub: 'Viết', name: 'Viết: Viết bài văn kể chuyện sáng tạo', ppct: 13 },
      { sub: 'Nói và nghe', name: 'Nói và nghe: Những câu chuyện thú vị', ppct: 14 }
    ],
    toan: [
      { name: 'Bài 3. Ôn tập phân số (Tiết 2)', ppct: 6 },
      { name: 'Bài 4. Phân số thập phân', ppct: 7 },
      { name: 'Bài 5. Ôn tập các phép tính với phân số (Tiết 1)', ppct: 8 },
      { name: 'Bài 5. Ôn tập các phép tính với phân số (Tiết 2)', ppct: 9 },
      { name: 'Bài 5. Ôn tập các phép tính với phân số (Tiết 3)', ppct: 10 }
    ],
    khoaHoc: [
      { name: 'Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 1)', ppct: 3 },
      { name: 'Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 2)', ppct: 4 }
    ],
    daoDuc: [
      { name: 'Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 2)', ppct: 2 }
    ],
    lsDl: [
      { name: 'Bài 2: Thiên nhiên Việt Nam (Tiết 1)', ppct: 3 },
      { name: 'Bài 2: Thiên nhiên Việt Nam (Tiết 2)', ppct: 4 }
    ],
    congNghe: [
      { name: 'Bài 1. Vai trò của công nghệ (Tiết 2)', ppct: 2 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Ngày hội câu lạc bộ', ppct: 4 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Từng bước trưởng thành', ppct: 5 },
      { sub: 'SHL', name: 'SHL: Tiến bộ trong việc nhà', ppct: 6 }
    ],
    gdtc: [
      { name: 'Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 3)', ppct: 3 },
      { name: 'Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 4)', ppct: 4 }
    ],
    tinHoc: { name: 'Bài 2: Khám phá thông tin số và ứng dụng máy tính', ppct: 2 },
    amNhac: { name: 'Ôn tập bài hát Reo vang bình minh - Gõ đệm thanh phách', ppct: 2 },
    miThuat: { name: 'Chủ đề 1: Thế giới tuổi thơ trong tranh (Tiết 2)', ppct: 2 },
    tiengAnh: [
      { name: 'Unit 1: All about me (Lesson 5)', ppct: 5 },
      { name: 'Unit 1: All about me (Lesson 6)', ppct: 6 },
      { name: 'Unit 2: Our school activities (Lesson 1)', ppct: 7 },
      { name: 'Unit 2: Our school activities (Lesson 2)', ppct: 8 }
    ]
  },
  {
    week: 3,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 5. Tiếng hạt nảy mầm', ppct: 15 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Luyện tập về đại từ', ppct: 16 },
      { sub: 'Viết', name: 'Viết: Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo', ppct: 17 },
      { sub: 'Đọc', name: 'Đọc: Bài 6. Ngôi sao sân cỏ (Tiết 1)', ppct: 18 },
      { sub: 'Đọc', name: 'Đọc: Bài 6. Ngôi sao sân cỏ (Tiết 2)', ppct: 19 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách viết báo cáo công việc', ppct: 20 },
      { sub: 'Đọc mở rộng', name: 'Đọc mở rộng: Đọc mở rộng chủ điểm thế giới tuổi thơ', ppct: 21 }
    ],
    toan: [
      { name: 'Bài 6. Cộng, trừ hai phân số khác mẫu số (Tiết 1)', ppct: 11 },
      { name: 'Bài 6. Cộng, trừ hai phân số khác mẫu số (Tiết 2)', ppct: 12 },
      { name: 'Bài 7: Hỗn số (Tiết 1)', ppct: 13 },
      { name: 'Bài 7: Hỗn số (Tiết 2)', ppct: 14 },
      { name: 'Bài 8: Ôn tập hình học và đo lường (Tiết 1)', ppct: 15 }
    ],
    khoaHoc: [
      { name: 'Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 3)', ppct: 5 },
      { name: 'Bài 3: Hỗn hợp và dung dịch (Tiết 1)', ppct: 6 }
    ],
    daoDuc: [
      { name: 'Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 3)', ppct: 3 }
    ],
    lsDl: [
      { name: 'Bài 2: Thiên nhiên Việt Nam (Tiết 3: Sông ngòi)', ppct: 5 },
      { name: 'Bài 2: Thiên nhiên Việt Nam (Tiết 4: Đất và rừng)', ppct: 6 }
    ],
    congNghe: [
      { name: 'Bài 2. Nhà sáng chế (Tiết 1)', ppct: 3 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Hoạt động vui Trung Thu', ppct: 7 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Niềm vui nhân đôi, nỗi buồn chia nửa', ppct: 8 },
      { sub: 'SHL', name: 'SHL: Cân bằng cảm xúc', ppct: 9 }
    ],
    gdtc: [
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 1)', ppct: 5 },
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 2)', ppct: 6 }
    ],
    tinHoc: { name: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề', ppct: 3 },
    amNhac: { name: 'Học hát bài Reo vang bình minh (Ôn tập & Đọc nhạc số 1)', ppct: 3 },
    miThuat: { name: 'Chủ đề 1: Thế giới tuổi thơ trong tranh (Tiết 3)', ppct: 3 },
    tiengAnh: [
      { name: 'Unit 1: Free time activities (Lesson 1)', ppct: 9 },
      { name: 'Unit 1: Free time activities (Lesson 2)', ppct: 10 },
      { name: 'Unit 1: Free time activities (Lesson 3)', ppct: 11 },
      { name: 'Unit 1: Free time activities (Lesson 4)', ppct: 12 }
    ]
  },
  {
    week: 4,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 7. Bộ sưu tập độc đáo', ppct: 22 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Luyện tập về đại từ (tiếp theo)', ppct: 23 },
      { sub: 'Viết', name: 'Viết: Viết báo cáo công việc', ppct: 24 },
      { sub: 'Đọc', name: 'Đọc: Bài 8. Hành tinh kì lạ (Tiết 1)', ppct: 25 },
      { sub: 'Đọc', name: 'Đọc: Bài 8. Hành tinh kì lạ (Tiết 2)', ppct: 26 },
      { sub: 'Viết', name: 'Viết: Đánh giá, chỉnh sửa báo cáo công việc', ppct: 27 },
      { sub: 'Nói và nghe', name: 'Nói và nghe: Những điểm vui chơi lí thú', ppct: 28 }
    ],
    toan: [
      { name: 'Bài 8: Ôn tập hình học và đo lường (Tiết 2)', ppct: 16 },
      { name: 'Bài 9. Luyện tập chung (Tiết 1)', ppct: 17 },
      { name: 'Bài 9. Luyện tập chung (Tiết 2)', ppct: 18 },
      { name: 'Bài 9. Luyện tập chung (Tiết 3)', ppct: 19 },
      { name: 'Bài 10. Khái niệm số thập phân (Tiết 1)', ppct: 20 }
    ],
    khoaHoc: [
      { name: 'Bài 3: Hỗn hợp và dung dịch (Tiết 2)', ppct: 7 },
      { name: 'Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái của chất (Tiết 1)', ppct: 8 }
    ],
    daoDuc: [
      { name: 'Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 4)', ppct: 4 }
    ],
    lsDl: [
      { name: 'Bài 3: Biển, đảo Việt Nam (Tiết 1)', ppct: 7 },
      { name: 'Bài 3: Biển, đảo Việt Nam (Tiết 2)', ppct: 8 }
    ],
    congNghe: [
      { name: 'Bài 2. Nhà sáng chế (Tiết 2)', ppct: 4 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Thực hành cân bằng cảm xúc', ppct: 10 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Sự trưởng thành của học sinh lớp 5', ppct: 11 },
      { sub: 'SHL', name: 'SHL: Thể hiện cảm xúc phù hợp', ppct: 12 }
    ],
    gdtc: [
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 3)', ppct: 7 },
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 4)', ppct: 8 }
    ],
    tinHoc: { name: 'Bài 4: Bản quyền thông tin và sử dụng thông tin an toàn', ppct: 4 },
    amNhac: { name: 'Đọc nhạc: Bài đọc nhạc số 1 - Nhạc cụ gõ', ppct: 4 },
    miThuat: { name: 'Chủ đề 1: Thế giới tuổi thơ trong tranh (Tiết 4 - Trưng bày)', ppct: 4 },
    tiengAnh: [
      { name: 'Unit 2: Our school activities (Lesson 3)', ppct: 13 },
      { name: 'Unit 2: Our school activities (Lesson 4)', ppct: 14 },
      { name: 'Unit 2: Our school activities (Lesson 5)', ppct: 15 },
      { name: 'Unit 2: Our school activities (Lesson 6)', ppct: 16 }
    ]
  },
  {
    week: 5,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 9. Trước cổng trời', ppct: 29 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Từ đồng nghĩa', ppct: 30 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách viết bài văn tả phong cảnh', ppct: 31 },
      { sub: 'Đọc', name: 'Đọc: Bài 10. Kì diệu rừng xanh (Tiết 1)', ppct: 32 },
      { sub: 'Đọc', name: 'Đọc: Bài 10. Kì diệu rừng xanh (Tiết 2)', ppct: 33 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách viết bài văn tả phong cảnh (tiếp theo)', ppct: 34 },
      { sub: 'Đọc mở rộng', name: 'Đọc mở rộng: Đọc sách báo về thiên nhiên kì thú', ppct: 35 }
    ],
    toan: [
      { name: 'Bài 10. Khái niệm số thập phân (Tiết 2)', ppct: 21 },
      { name: 'Bài 10. Khái niệm số thập phân (Tiết 3)', ppct: 22 },
      { name: 'Bài 11. So sánh các số thập phân (Tiết 1)', ppct: 23 },
      { name: 'Bài 11. So sánh các số thập phân (Tiết 2)', ppct: 24 },
      { name: 'Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 1)', ppct: 25 }
    ],
    khoaHoc: [
      { name: 'Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái của chất (Tiết 2)', ppct: 9 },
      { name: 'Bài 5: Sự biến đổi hoá học của chất (Tiết 1)', ppct: 10 }
    ],
    daoDuc: [
      { name: 'Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 1)', ppct: 5 }
    ],
    lsDl: [
      { name: 'Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 1)', ppct: 9 },
      { name: 'Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 2)', ppct: 10 }
    ],
    congNghe: [
      { name: 'Bài 2. Nhà sáng chế (Tiết 3)', ppct: 5 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Vui trung thu cùng bạn', ppct: 13 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Các vấn đề nảy sinh trong mối quan hệ bạn bè và cách giải quyết', ppct: 14 },
      { sub: 'SHL', name: 'SHL: Thực hành giải quyết vấn đề nảy sinh trong tình bạn', ppct: 15 }
    ],
    gdtc: [
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 5)', ppct: 9 },
      { name: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 6)', ppct: 10 }
    ],
    tinHoc: { name: 'Bài 5: Tìm kiếm nâng cao trên Internet', ppct: 5 },
    amNhac: { name: 'Học hát: Bài hát Ước mơ mùa thu (Tiết 1)', ppct: 5 },
    miThuat: { name: 'Chủ đề 2: Sắc màu thiên nhiên (Tiết 1)', ppct: 5 },
    tiengAnh: [
      { name: 'Unit 3: My foreign friends (Lesson 1)', ppct: 17 },
      { name: 'Unit 3: My foreign friends (Lesson 2)', ppct: 18 },
      { name: 'Unit 3: My foreign friends (Lesson 3)', ppct: 19 },
      { name: 'Unit 3: My foreign friends (Lesson 4)', ppct: 20 }
    ]
  },
  {
    week: 6,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 11. Hang Sơn Đoòng - Những điều kì thú', ppct: 36 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Luyện tập về từ đồng nghĩa', ppct: 37 },
      { sub: 'Viết', name: 'Viết: Viết mở bài và kết bài cho bài văn tả phong cảnh', ppct: 38 },
      { sub: 'Đọc', name: 'Đọc: Bài 12. Những hòn đảo trên vịnh Hạ Long (Tiết 1)', ppct: 39 },
      { sub: 'Đọc', name: 'Đọc: Bài 12. Những hòn đảo trên vịnh Hạ Long (Tiết 2)', ppct: 40 },
      { sub: 'Viết', name: 'Viết: Quan sát phong cảnh', ppct: 41 },
      { sub: 'Nói và nghe', name: 'Nói và nghe: Bảo tồn động vật hoang dã', ppct: 42 }
    ],
    toan: [
      { name: 'Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 2)', ppct: 26 },
      { name: 'Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 3)', ppct: 27 },
      { name: 'Bài 13. Làm tròn số thập phân (Tiết 1)', ppct: 28 },
      { name: 'Bài 13. Làm tròn số thập phân (Tiết 2)', ppct: 29 },
      { name: 'Bài 14. Luyện tập chung (Tiết 1)', ppct: 30 }
    ],
    khoaHoc: [
      { name: 'Bài 5: Sự biến đổi hoá học của chất (Tiết 2)', ppct: 11 },
      { name: 'Bài 6: Ôn tập chủ đề Chất', ppct: 12 }
    ],
    daoDuc: [
      { name: 'Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 2)', ppct: 6 }
    ],
    lsDl: [
      { name: 'Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 3)', ppct: 11 },
      { name: 'Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 4)', ppct: 12 }
    ],
    congNghe: [
      { name: 'Bài 2. Nhà sáng chế (Tiết 4)', ppct: 6 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Sách bút đồng hành cùng em', ppct: 16 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Những vấn đề nảy sinh giữa tình bạn trong học tập và rèn luyện', ppct: 17 },
      { sub: 'SHL', name: 'SHL: Hợp tác để thực hiện sản phẩm chung', ppct: 18 }
    ],
    gdtc: [
      { name: 'Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 1)', ppct: 11 },
      { name: 'Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 2)', ppct: 12 }
    ],
    tinHoc: { name: 'Bài 6: Thu thập và xử lý thông tin số', ppct: 6 },
    amNhac: { name: 'Ôn tập bài hát Ước mơ mùa thu - Nghe nhạc', ppct: 6 },
    miThuat: { name: 'Chủ đề 2: Sắc màu thiên nhiên (Tiết 2)', ppct: 6 },
    tiengAnh: [
      { name: 'Unit 3: My foreign friends (Lesson 5)', ppct: 21 },
      { name: 'Unit 3: My foreign friends (Lesson 6)', ppct: 22 },
      { name: 'Unit 4: Our favourite food (Lesson 1)', ppct: 23 },
      { name: 'Unit 4: Our favourite food (Lesson 2)', ppct: 24 }
    ]
  },
  {
    week: 7,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 13. Mầm non', ppct: 43 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Từ đa nghĩa', ppct: 44 },
      { sub: 'Viết', name: 'Viết: Lập dàn ý cho bài văn tả phong cảnh', ppct: 45 },
      { sub: 'Đọc', name: 'Đọc: Bài 14. Những ngọn núi nóng rẫy (Tiết 1)', ppct: 46 },
      { sub: 'Đọc', name: 'Đọc: Bài 14. Những ngọn núi nóng rẫy (Tiết 2)', ppct: 47 },
      { sub: 'Viết', name: 'Viết: Viết đoạn văn tả phong cảnh', ppct: 48 },
      { sub: 'Đọc mở rộng', name: 'Đọc mở rộng: Đọc mở rộng bài văn tả cảnh thiên nhiên', ppct: 49 }
    ],
    toan: [
      { name: 'Bài 14. Luyện tập chung (Tiết 2)', ppct: 31 },
      { name: 'Bài 15. Ki-lô-mét vuông. Héc-ta (Tiết 1)', ppct: 32 },
      { name: 'Bài 15. Ki-lô-mét vuông. Héc-ta (Tiết 2)', ppct: 33 },
      { name: 'Bài 16. Các đơn vị đo diện tích (Tiết 1)', ppct: 34 },
      { name: 'Bài 16. Các đơn vị đo diện tích (Tiết 2)', ppct: 35 }
    ],
    khoaHoc: [
      { name: 'Bài 7: Vai trò của năng lượng (Tiết 1)', ppct: 13 },
      { name: 'Bài 7: Vai trò của năng lượng (Tiết 2)', ppct: 14 }
    ],
    daoDuc: [
      { name: 'Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 3)', ppct: 7 }
    ],
    lsDl: [
      { name: 'Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 1)', ppct: 13 },
      { name: 'Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 2)', ppct: 14 }
    ],
    congNghe: [
      { name: 'Bài 3. Tìm hiểu thiết kế (Tiết 1)', ppct: 7 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Ngày hội trao đổi sách', ppct: 19 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Giữ gìn tình bạn', ppct: 20 },
      { sub: 'SHL', name: 'SHL: Nuôi dưỡng tình bạn', ppct: 21 }
    ],
    gdtc: [
      { name: 'Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 3)', ppct: 13 },
      { name: 'Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 4)', ppct: 14 }
    ],
    tinHoc: { name: 'Bài 7: Soạn thảo văn bản và định dạng nâng cao', ppct: 7 },
    amNhac: { name: 'Nhạc cụ: Luyện gõ phách đệm bài hát', ppct: 7 },
    miThuat: { name: 'Chủ đề 2: Sắc màu thiên nhiên (Tiết 3)', ppct: 7 },
    tiengAnh: [
      { name: 'Unit 4: Our favourite food (Lesson 3)', ppct: 25 },
      { name: 'Unit 4: Our favourite food (Lesson 4)', ppct: 26 },
      { name: 'Unit 4: Our favourite food (Lesson 5)', ppct: 27 },
      { name: 'Unit 4: Our favourite food (Lesson 6)', ppct: 28 }
    ]
  },
  {
    week: 8,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 15. Bài ca về mặt trời', ppct: 50 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Luyện tập về từ đa nghĩa', ppct: 51 },
      { sub: 'Viết', name: 'Viết: Viết bài văn tả phong cảnh', ppct: 52 },
      { sub: 'Đọc', name: 'Đọc: Bài 16. Xin chào, Xa-ha-ra (Tiết 1)', ppct: 53 },
      { sub: 'Đọc', name: 'Đọc: Bài 16. Xin chào, Xa-ha-ra (Tiết 2)', ppct: 54 },
      { sub: 'Viết', name: 'Viết: Đánh giá, chỉnh sửa bài văn tả phong cảnh', ppct: 55 },
      { sub: 'Nói và nghe', name: 'Nói và nghe: Cảnh đẹp thiên nhiên', ppct: 56 }
    ],
    toan: [
      { name: 'Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 1)', ppct: 36 },
      { name: 'Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 2)', ppct: 37 },
      { name: 'Bài 18. Luyện tập chung (Tiết 1)', ppct: 38 },
      { name: 'Bài 18. Luyện tập chung (Tiết 2)', ppct: 39 },
      { name: 'Bài 19: Phép cộng số thập phân (Tiết 1)', ppct: 40 }
    ],
    khoaHoc: [
      { name: 'Bài 8: Sử dụng năng lượng điện (Tiết 1)', ppct: 15 },
      { name: 'Bài 8: Sử dụng năng lượng điện (Tiết 2)', ppct: 16 }
    ],
    daoDuc: [
      { name: 'Bài 3. Vượt qua khó khăn (Tiết 1)', ppct: 8 }
    ],
    lsDl: [
      { name: 'Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 3)', ppct: 15 },
      { name: 'Bài 6: Vương quốc Phù Nam', ppct: 16 }
    ],
    congNghe: [
      { name: 'Bài 3. Tìm hiểu thiết kế (Tiết 2)', ppct: 8 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Trò chuyện về chủ đề "Khoa học sáng tạo"', ppct: 22 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Kế hoạch hoạt động "Cùng làm nên kỉ niệm"', ppct: 23 },
      { sub: 'SHL', name: 'SHL: Cùng làm nên kỉ niệm', ppct: 24 }
    ],
    gdtc: [
      { name: 'Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 1)', ppct: 15 },
      { name: 'Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 2)', ppct: 16 }
    ],
    tinHoc: { name: 'Bài 8: Chèn hình ảnh và biểu đồ vào văn bản', ppct: 8 },
    amNhac: { name: 'Đọc nhạc: Bài đọc nhạc số 2', ppct: 8 },
    miThuat: { name: 'Chủ đề 2: Sắc màu thiên nhiên (Tiết 4 - Trưng bày)', ppct: 8 },
    tiengAnh: [
      { name: 'Unit 5: In our free time (Lesson 1)', ppct: 29 },
      { name: 'Unit 5: In our free time (Lesson 2)', ppct: 30 },
      { name: 'Unit 5: In our free time (Lesson 3)', ppct: 31 },
      { name: 'Unit 5: In our free time (Lesson 4)', ppct: 32 }
    ]
  },
  {
    week: 9,
    tiengViet: [
      { sub: 'Ôn tập', name: 'Ôn tập và đánh giá giữa HKI (Tiết 1)', ppct: 57 },
      { sub: 'Ôn tập', name: 'Ôn tập và đánh giá giữa HKI (Tiết 2)', ppct: 58 },
      { sub: 'Ôn tập', name: 'Ôn tập và đánh giá giữa HKI (Tiết 3)', ppct: 59 },
      { sub: 'Ôn tập', name: 'Ôn tập và đánh giá giữa HKI (Tiết 4)', ppct: 60 },
      { sub: 'Ôn tập', name: 'Ôn tập và đánh giá giữa HKI (Tiết 5)', ppct: 61 },
      { sub: 'Kiểm tra', name: 'Kiểm tra Đọc giữa HKI (Tiết 6)', ppct: 62 },
      { sub: 'Kiểm tra', name: 'Kiểm tra Đọc hiểu – viết giữa HKI (Tiết 7)', ppct: 63 }
    ],
    toan: [
      { name: 'Bài 19: Phép cộng số thập phân (Tiết 2)', ppct: 41 },
      { name: 'Bài 20. Phép trừ số thập phân (Tiết 1)', ppct: 42 },
      { name: 'Bài 20. Phép trừ số thập phân (Tiết 2)', ppct: 43 },
      { name: 'Bài 21: Phép nhân số thập phân (Tiết 1)', ppct: 44 },
      { name: 'Bài 21: Phép nhân số thập phân (Tiết 2)', ppct: 45 }
    ],
    khoaHoc: [
      { name: 'Bài 9: Mạch điện đơn giản. Vật dẫn điện và vật cách điện (Tiết 1)', ppct: 17 },
      { name: 'Ôn tập giữa HK1', ppct: 18 }
    ],
    daoDuc: [
      { name: 'Ôn tập tổng hợp giữa học kì I', ppct: 9 }
    ],
    lsDl: [
      { name: 'Bài 7: Vương quốc Chăm-pa (Tiết 1)', ppct: 17 },
      { name: 'Bài 7: Vương quốc Chăm-pa (Tiết 2)', ppct: 18 }
    ],
    congNghe: [
      { name: 'Bài 4. Thiết kế sản phẩm (Tiết 1)', ppct: 9 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Phát động tổ chức sự kiện về truyền thống tôn sư trọng đạo', ppct: 25 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Sự kiện về truyền thống tôn sư trọng đạo', ppct: 26 },
      { sub: 'SHL', name: 'SHL: Giới thiệu về truyền thống nhà trường', ppct: 27 }
    ],
    gdtc: [
      { name: 'Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 1)', ppct: 17 },
      { name: 'Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 2)', ppct: 18 }
    ],
    tinHoc: { name: 'Ôn tập và kiểm tra giữa học kì 1', ppct: 9 },
    amNhac: { name: 'Ôn tập và kiểm tra định kì giữa HKI', ppct: 9 },
    miThuat: { name: 'Đánh giá sản phẩm mĩ thuật giữa học kì 1', ppct: 9 },
    tiengAnh: [
      { name: 'Review 1 (Lesson 1)', ppct: 33 },
      { name: 'Review 1 (Lesson 2)', ppct: 34 },
      { name: 'Mid-term Test 1 (Listening & Reading)', ppct: 35 },
      { name: 'Mid-term Test 1 (Speaking & Writing)', ppct: 36 }
    ]
  },
  {
    week: 10,
    tiengViet: [
      { sub: 'Đọc', name: 'Đọc: Bài 17. Thư gửi các học sinh', ppct: 64 },
      { sub: 'Luyện từ và câu', name: 'LTVC: Sử dụng từ điển', ppct: 65 },
      { sub: 'Viết', name: 'Viết: Tìm hiểu cách đoạn văn giới thiệu nhân vật trong một cuốn sách', ppct: 66 },
      { sub: 'Đọc', name: 'Đọc: Bài 18. Tấm gương tự học (Tiết 1)', ppct: 67 },
      { sub: 'Đọc', name: 'Đọc: Bài 18. Tấm gương tự học (Tiết 2)', ppct: 68 },
      { sub: 'Viết', name: 'Viết: Tìm ý cho đoạn văn giới thiệu nhân vật trong một cuốn sách', ppct: 69 },
      { sub: 'Đọc mở rộng', name: 'Đọc mở rộng: Đọc sách báo về những tấm gương học tập', ppct: 70 }
    ],
    toan: [
      { name: 'Bài 21: Phép nhân số thập phân (Tiết 3)', ppct: 46 },
      { name: 'Bài 22: Phép chia số thập phân (Tiết 1)', ppct: 47 },
      { name: 'Bài 22: Phép chia số thập phân (Tiết 2)', ppct: 48 },
      { name: 'Bài 22: Phép chia số thập phân (Tiết 3)', ppct: 49 },
      { name: 'Bài 22: Phép chia số thập phân (Tiết 4)', ppct: 50 }
    ],
    khoaHoc: [
      { name: 'Bài 9: Mạch điện đơn giản. Vật dẫn điện và vật cách điện (Tiết 2)', ppct: 19 },
      { name: 'Bài 10: Năng lượng chất đốt (Tiết 1)', ppct: 20 }
    ],
    daoDuc: [
      { name: 'Bài 3. Vượt qua khó khăn (Tiết 2)', ppct: 10 }
    ],
    lsDl: [
      { name: 'Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 1)', ppct: 19 },
      { name: 'Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 2)', ppct: 20 }
    ],
    congNghe: [
      { name: 'Bài 4. Thiết kế sản phẩm (Tiết 2)', ppct: 10 }
    ],
    hdtn: [
      { sub: 'SHDC', name: 'SHDC: Các truyền thống của nhà trường', ppct: 28 },
      { sub: 'HĐGDCĐ', name: 'HĐGDCĐ: Tâm sự thầy - trò', ppct: 29 },
      { sub: 'SHL', name: 'SHL: Giải quyết một số vấn đề nảy sinh trong mối quan hệ thầy trò', ppct: 30 }
    ],
    gdtc: [
      { name: 'Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 3)', ppct: 19 },
      { name: 'Bài 3: Động tác nhảy và động tác điều hòa với gậy (Tiết 1)', ppct: 20 }
    ],
    tinHoc: { name: 'Bài 9: Bài trình chiếu đa phương tiện (Tiết 1)', ppct: 10 },
    amNhac: { name: 'Học hát: Bài hát Con đường học trò (Tiết 1)', ppct: 10 },
    miThuat: { name: 'Chủ đề 3: Mái trường mến yêu (Tiết 1)', ppct: 10 },
    tiengAnh: [
      { name: 'Unit 6: Our holiday activities (Lesson 1)', ppct: 37 },
      { name: 'Unit 6: Our holiday activities (Lesson 2)', ppct: 38 },
      { name: 'Unit 6: Our holiday activities (Lesson 3)', ppct: 39 },
      { name: 'Unit 6: Our holiday activities (Lesson 4)', ppct: 40 }
    ]
  }
];

// Helper to generate full timetable slot array for Grade 5 in any given week (Tuần 1 -> 35)
export function getGrade5TimetableSlotsForWeek(
  week: number,
  className: string = '5A',
  teacherName: string = 'Nguyễn Hoàng Tuấn'
): TimetableSlot[] {
  const w = Math.max(1, Math.min(35, week || 1));
  const weekData = GRADE_5_KNTT_FULL_35_WEEKS.find((item) => item.week === w);

  // Lesson names from database or dynamic curriculum fallback for higher weeks
  const tv0 = weekData?.tiengViet[0]?.name || `Đọc: Bài học chủ điểm tuần ${w} (Tiết 1)`;
  const tv0Sub = weekData?.tiengViet[0]?.sub || 'Đọc';
  const tv1 = weekData?.tiengViet[1]?.name || `LTVC: Luyện từ và câu tuần ${w}`;
  const tv1Sub = weekData?.tiengViet[1]?.sub || 'Luyện từ và câu';
  const tv2 = weekData?.tiengViet[2]?.name || `Viết: Luyện tập viết bài văn tuần ${w}`;
  const tv2Sub = weekData?.tiengViet[2]?.sub || 'Viết';
  const tv3 = weekData?.tiengViet[3]?.name || `Đọc: Bài đọc 2 tuần ${w} (Tiết 1)`;
  const tv3Sub = weekData?.tiengViet[3]?.sub || 'Đọc';
  const tv4 = weekData?.tiengViet[4]?.name || `Đọc: Bài đọc 2 tuần ${w} (Tiết 2)`;
  const tv4Sub = weekData?.tiengViet[4]?.sub || 'Đọc';
  const tv5 = weekData?.tiengViet[5]?.name || `Viết: Luyện tập viết sáng tạo tuần ${w}`;
  const tv5Sub = weekData?.tiengViet[5]?.sub || 'Viết';
  const tv6 = weekData?.tiengViet[6]?.name || `Đọc mở rộng: Đọc sách báo theo chủ điểm tuần ${w}`;
  const tv6Sub = weekData?.tiengViet[6]?.sub || 'Đọc mở rộng';

  const toan0 = weekData?.toan[0]?.name || `Toán: Bài học khám phá kiến thức tuần ${w} (Tiết 1)`;
  const toan1 = weekData?.toan[1]?.name || `Toán: Luyện tập thực hành phép tính tuần ${w} (Tiết 2)`;
  const toan2 = weekData?.toan[2]?.name || `Toán: Luyện tập giải toán có lời văn tuần ${w} (Tiết 3)`;
  const toan3 = weekData?.toan[3]?.name || `Toán: Luyện tập hình học và đo lường tuần ${w} (Tiết 4)`;
  const toan4 = weekData?.toan[4]?.name || `Toán: Luyện tập chung tuần ${w} (Tiết 5)`;

  const kh0 = weekData?.khoaHoc[0]?.name || `Khoa học: Bài học khám phá tự nhiên và năng lượng (Tiết 1 - Tuần ${w})`;
  const kh1 = weekData?.khoaHoc[1]?.name || `Khoa học: Thực hành thí nghiệm và trải nghiệm (Tiết 2 - Tuần ${w})`;

  const ddName = weekData?.daoDuc[0]?.name || `Đạo đức: Bài ${w}. Rèn luyện phẩm chất và kĩ năng sống`;
  const cnName = weekData?.congNghe[0]?.name || `Công nghệ: Bài ${w}. Thiết kế và công nghệ trong đời sống`;

  const lsdl0 = weekData?.lsDl[0]?.name || `Lịch sử và Địa lí: Bài học tìm hiểu lịch sử, địa lí Việt Nam (Tiết 1 - Tuần ${w})`;
  const lsdl1 = weekData?.lsDl[1]?.name || `Lịch sử và Địa lí: Khám phá thế giới và bảo vệ Tổ quốc (Tiết 2 - Tuần ${w})`;

  const hdtn0 = weekData?.hdtn[0]?.name || `SHDC: Chào cờ và phát động phong trào thi đua tuần ${w}`;
  const hdtn1 = weekData?.hdtn[1]?.name || `HĐGDCĐ: Hoạt động giáo dục theo chủ đề tuần ${w}`;
  const hdtn2 = weekData?.hdtn[2]?.name || `SHL: Sinh hoạt lớp tuần ${w} - Đánh giá tuần và phương hướng tuần tới`;

  const gdtc0 = weekData?.gdtc[0]?.name || `GDTC: Đội hình đội ngũ và tư thế vận động cơ bản (Tiết 1 - Tuần ${w})`;
  const gdtc1 = weekData?.gdtc[1]?.name || `GDTC: Bài tập thể lực và trò chơi vận động (Tiết 2 - Tuần ${w})`;

  const tinName = weekData?.tinHoc?.name || `Tin học: Bài ${w}. Ứng dụng công nghệ thông tin và chuyển đổi số`;
  const anName = weekData?.amNhac?.name || `Âm nhạc: Học hát và nhạc cụ gõ đệm (Tiết ${w})`;
  const mtName = weekData?.miThuat?.name || `Mĩ thuật: Sáng tạo mĩ thuật và triển lãm sản phẩm (Tiết ${w})`;

  const ta0 = weekData?.tiengAnh[0]?.name || `Tiếng Anh: Unit Lesson 1 (Tiết ${(w - 1) * 4 + 1})`;
  const ta1 = weekData?.tiengAnh[1]?.name || `Tiếng Anh: Unit Lesson 2 (Tiết ${(w - 1) * 4 + 2})`;
  const ta2 = weekData?.tiengAnh[2]?.name || `Tiếng Anh: Unit Lesson 3 (Tiết ${(w - 1) * 4 + 3})`;
  const ta3 = weekData?.tiengAnh[3]?.name || `Tiếng Anh: Unit Lesson 4 (Tiết ${(w - 1) * 4 + 4})`;

  return [
    // Thứ Hai
    { id: `5a-mon-s1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng' as const, period: 1, subject: 'Hoạt động trải nghiệm', subSubject: 'SHDC', ppct: (w - 1) * 3 + 1, lessonName: hdtn0, teacherName, className, grade: 5, note: 'Chào cờ' },
    { id: `5a-mon-s2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng' as const, period: 2, subject: 'Tiếng Việt', subSubject: tv0Sub, ppct: (w - 1) * 7 + 1, lessonName: tv0, teacherName, className, grade: 5 },
    { id: `5a-mon-s3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng' as const, period: 3, subject: 'Tiếng Việt', subSubject: tv1Sub, ppct: (w - 1) * 7 + 2, lessonName: tv1, teacherName, className, grade: 5 },
    { id: `5a-mon-s4-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Sáng' as const, period: 4, subject: 'Toán', ppct: (w - 1) * 5 + 1, lessonName: toan0, teacherName, className, grade: 5 },
    { id: `5a-mon-c1-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều' as const, period: 1, subject: 'Khoa học', ppct: (w - 1) * 2 + 1, lessonName: kh0, teacherName, className, grade: 5 },
    { id: `5a-mon-c2-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều' as const, period: 2, subject: 'Công nghệ', ppct: w, lessonName: cnName, teacherName, className, grade: 5 },
    { id: `5a-mon-c3-w${w}`, dayOfWeek: 'Thứ Hai', session: 'Chiều' as const, period: 3, subject: 'Tin học', ppct: w, lessonName: tinName, teacherName: 'Nguyễn Tiến Đạt', className, grade: 5 },

    // Thứ Ba
    { id: `5a-tue-s1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng' as const, period: 1, subject: 'Đạo đức', ppct: w, lessonName: ddName, teacherName, className, grade: 5 },
    { id: `5a-tue-s2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng' as const, period: 2, subject: 'Tiếng Việt', subSubject: tv2Sub, ppct: (w - 1) * 7 + 3, lessonName: tv2, teacherName, className, grade: 5 },
    { id: `5a-tue-s3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng' as const, period: 3, subject: 'Tiếng Việt', subSubject: tv3Sub, ppct: (w - 1) * 7 + 4, lessonName: tv3, teacherName, className, grade: 5 },
    { id: `5a-tue-s4-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Sáng' as const, period: 4, subject: 'Toán', ppct: (w - 1) * 5 + 2, lessonName: toan1, teacherName, className, grade: 5 },
    { id: `5a-tue-c1-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều' as const, period: 1, subject: 'Tiếng Việt', subSubject: tv4Sub, ppct: (w - 1) * 7 + 5, lessonName: tv4, teacherName, className, grade: 5 },
    { id: `5a-tue-c2-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều' as const, period: 2, subject: 'Tiếng Việt', subSubject: tv5Sub, ppct: (w - 1) * 7 + 6, lessonName: tv5, teacherName, className, grade: 5 },
    { id: `5a-tue-c3-w${w}`, dayOfWeek: 'Thứ Ba', session: 'Chiều' as const, period: 3, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 1, lessonName: gdtc0, teacherName: 'Cô Nhàn (GV GDTC)', className, grade: 5 },

    // Thứ Tư
    { id: `5a-wed-s1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng' as const, period: 1, subject: 'Hoạt động trải nghiệm', subSubject: 'HĐGDCĐ', ppct: (w - 1) * 3 + 2, lessonName: hdtn1, teacherName, className, grade: 5 },
    { id: `5a-wed-s2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng' as const, period: 2, subject: 'Âm nhạc', ppct: w, lessonName: anName, teacherName: 'Cô Tuệ (GV Âm nhạc)', className, grade: 5 },
    { id: `5a-wed-s3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng' as const, period: 3, subject: 'Toán', ppct: (w - 1) * 5 + 3, lessonName: toan2, teacherName, className, grade: 5 },
    { id: `5a-wed-s4-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Sáng' as const, period: 4, subject: 'Lịch sử và Địa lí', ppct: (w - 1) * 2 + 1, lessonName: lsdl0, teacherName, className, grade: 5 },
    { id: `5a-wed-c1-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều' as const, period: 1, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 1, lessonName: ta0, teacherName: 'Cô Nương (GV Tiếng Anh)', className, grade: 5 },
    { id: `5a-wed-c2-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều' as const, period: 2, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 2, lessonName: ta1, teacherName: 'Cô Nương (GV Tiếng Anh)', className, grade: 5 },
    { id: `5a-wed-c3-w${w}`, dayOfWeek: 'Thứ Tư', session: 'Chiều' as const, period: 3, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 3, lessonName: ta2, teacherName: 'Cô Nương (GV Tiếng Anh)', className, grade: 5 },

    // Thứ Năm
    { id: `5a-thu-s1-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng' as const, period: 1, subject: 'Tiếng Anh', ppct: (w - 1) * 4 + 4, lessonName: ta3, teacherName: 'Cô Nương (GV Tiếng Anh)', className, grade: 5 },
    { id: `5a-thu-s2-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng' as const, period: 2, subject: 'Mĩ thuật', ppct: w, lessonName: mtName, teacherName: 'Cô Thy (GV Mĩ thuật)', className, grade: 5 },
    { id: `5a-thu-s3-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng' as const, period: 3, subject: 'Toán', ppct: (w - 1) * 5 + 4, lessonName: toan3, teacherName, className, grade: 5 },
    { id: `5a-thu-s4-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng' as const, period: 4, subject: 'Khoa học', ppct: (w - 1) * 2 + 2, lessonName: kh1, teacherName, className, grade: 5 },
    { id: `5a-thu-s5-w${w}`, dayOfWeek: 'Thứ Năm', session: 'Sáng' as const, period: 5, subject: 'Lịch sử và Địa lí', ppct: (w - 1) * 2 + 2, lessonName: lsdl1, teacherName, className, grade: 5 },

    // Thứ Sáu
    { id: `5a-fri-s1-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng' as const, period: 1, subject: 'Giáo dục thể chất', ppct: (w - 1) * 2 + 2, lessonName: gdtc1, teacherName: 'Cô Nhàn (GV GDTC)', className, grade: 5 },
    { id: `5a-fri-s2-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng' as const, period: 2, subject: 'Tiếng Việt', subSubject: tv6Sub, ppct: (w - 1) * 7 + 7, lessonName: tv6, teacherName, className, grade: 5 },
    { id: `5a-fri-s3-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng' as const, period: 3, subject: 'Toán', ppct: (w - 1) * 5 + 5, lessonName: toan4, teacherName, className, grade: 5 },
    { id: `5a-fri-s4-w${w}`, dayOfWeek: 'Thứ Sáu', session: 'Sáng' as const, period: 4, subject: 'Hoạt động trải nghiệm', subSubject: 'SHL', ppct: (w - 1) * 3 + 3, lessonName: hdtn2, teacherName, className, grade: 5 }
  ];
}
