import { LessonPlan, GradeLevel, TeachingActivity, IntegrationItem } from '../types';

export const SAMPLE_LESSON_PLANS: LessonPlan[] = [
  // ==================== LỚP 5A - TUẦN 3 ====================
  // 1. HĐTN 5 - Tiết 7 (PPCT 7)
  {
    id: 'lp-5a-w3-hdtn-1',
    grade: 5,
    subject: 'Hoạt động trải nghiệm',
    subSubject: 'Sinh hoạt dưới cờ',
    lessonName: 'Sinh hoạt dưới cờ: HOẠT ĐỘNG VUI TRUNG THU',
    periodInWeek: 1,
    ppctNumber: 7,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Sáng',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Học sinh tích cực tham gia các hoạt động biểu diễn, trải nghiệm không khí ngày Tết Trung Thu truyền thống, thể hiện tinh thần tập thể, vui vẻ và tự tin.',
      general: 'Phát triển năng lực giao tiếp và hợp tác thông qua việc phối hợp tổ chức lễ hội; năng lực tự chủ khi chuẩn bị tiết mục.',
      qualities: 'Nhân ái, trách nhiệm, tôn trọng các nét đẹp văn hóa truyền thống của quê hương.'
    },
    integrations: [
      {
        id: 'int-1',
        type: 'QCN',
        title: 'Giáo dục Quyền con người',
        content: 'HS nhận biết quyền được vui chơi, tham gia các hoạt động văn hóa nghệ thuật của thiếu nhi.',
        activityLocation: 'Hoạt động 1 & 3'
      },
      {
        id: 'int-2',
        type: 'GDDD',
        title: 'Giáo dục Dinh dưỡng & An toàn thực phẩm',
        content: 'Tìm hiểu về nguồn gốc bánh Trung thu, bảo quản mâm cỗ đảm bảo vệ sinh an toàn thực phẩm.',
        activityLocation: 'Hoạt động 2 - Khám phá'
      }
    ],
    equipment: {
      teacher: 'Tivi, loa máy, lồng đèn mẫu, mâm cỗ Trung Thu mô hình.',
      student: 'Lồng đèn tự làm từ vật liệu tái chế, trang phục chỉnh tề.'
    },
    activities: [
      {
        id: 'act-1',
        phase: 'Khởi động',
        goal: 'Tạo không khí vui tươi, phấn khởi chào mừng lễ hội Trung Thu.',
        teacherActivity: '- Tổ chức cho toàn trường làm lễ Chào cờ nghiêm trang.\n- Sau đó điều hành văn nghệ khởi động bài hát "Chiếc đèn ông sao".',
        studentActivity: '- Học sinh thực hiện nghi thức chào cờ nghiêm túc.\n- Đồng thanh hát vang và vỗ tay theo nhịp bài hát.'
      },
      {
        id: 'act-2',
        phase: 'Khám phá',
        goal: 'Giúp học sinh hiểu được ý nghĩa của Tết Trung Thu và nét đẹp văn hóa truyền thống.',
        teacherActivity: '- Tổng phụ trách Đội giới thiệu ý nghĩa lịch sử ngày Tết Trung Thu, giới thiệu mâm cỗ và tục rước đèn phá cỗ.\n- Tích hợp GDDD: Nhắc nhở lưu ý an toàn vệ sinh khi thưởng thức bánh kẹo ngày Tết thiếu nhi.',
        studentActivity: '- Lắng nghe chăm chú, tham gia trả lời câu hỏi đố vui về chú Cuội, chị Hằng.\n- Nêu các cách chọn bánh kẹo có nguồn gốc rõ ràng.'
      },
      {
        id: 'act-3',
        phase: 'Thực hành',
        goal: 'Rèn luyện sự khéo léo và tinh thần làm việc nhóm.',
        teacherActivity: '- Tổ chức cuộc thi trưng bày lồng đèn giữa các lớp.\n- GVCN hướng dẫn các tổ học sinh lớp 5A tự sắp xếp sản phẩm của mình lên bàn trưng bày.',
        studentActivity: '- Các tổ phân công nhau đặt lồng đèn tự làm lên bàn, trang trí mâm ngũ quả nhỏ của tổ.'
      },
      {
        id: 'act-4',
        phase: 'Vận dụng',
        goal: 'Chia sẻ niềm vui Trung Thu đến gia đình.',
        teacherActivity: '- Nhận xét, tuyên dương các tổ hoạt động xuất sắc.\n- Dặn dò HS mang lồng đèn về rước đèn cùng người thân.',
        studentActivity: '- Chia sẻ cảm nghĩ về ngày hội. Ghi nhớ mang lồng đèn về nhà.'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  },

  // 2. Tiếng Việt 5 - Tiết 15 (Đọc: Tiếng hạt nảy mầm)
  {
    id: 'lp-5a-w3-tv-15',
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc',
    lessonName: 'Tiết 15: TIẾNG HẠT NẢY MẦM',
    periodInWeek: 2,
    ppctNumber: 15,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Sáng',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Đọc đúng, trôi chảy và bước đầu biết đọc diễn cảm bài thơ "Tiếng hạt nảy mầm". Hiểu nội dung, thông điệp ý nghĩa: Lắng nghe và thấu cảm với những điều kỳ diệu xung quanh và thế giới tinh tế của trẻ em.',
      general: 'Năng lực tự chủ và tự học thông qua luyện đọc cá nhân; năng lực giải quyết vấn đề qua trả lời câu hỏi đọc hiểu.',
      qualities: 'Nhân ái, biết trân trọng cuộc sống và thế giới thiên nhiên.'
    },
    integrations: [
      {
        id: 'int-tv5-1',
        type: 'BVMT',
        title: 'Bảo vệ môi trường sinh thái',
        content: 'Cảm nhận sự sống nảy nở từ hạt mầm, nuôi dưỡng tình yêu thiên nhiên và ý thức chăm sóc cây trồng.',
        activityLocation: 'Hoạt động 3 - Luyện tập'
      },
      {
        id: 'int-tv5-2',
        type: 'AI',
        code: '5.A1.2',
        title: 'Tích hợp Trí tuệ nhân tạo (AI)',
        content: 'HS nhận biết ứng dụng AI trong nông nghiệp công nghệ cao (theo dõi độ ẩm, nhận biết hạt nảy mầm qua camera), hiểu con người luôn là trung tâm chăm sóc sự sống.',
        activityLocation: 'Hoạt động 4 - Vận dụng'
      }
    ],
    equipment: {
      teacher: 'Sách giáo khoa, máy chiếu trình chiếu bài thơ, tranh ảnh minh họa hạt nảy mầm.',
      student: 'Sách giáo khoa, vở ghi chép, tranh vẽ mầm cây.'
    },
    activities: [
      {
        id: 'act-tv1',
        phase: 'Khởi động',
        goal: 'Kích thích trí tò mò, tạo tâm thế học tập hứng khởi.',
        teacherActivity: '- Cho học sinh quan sát hình ảnh một mầm cây đang nhú lên từ lòng đất.\n- Hỏi: "Em nghĩ hạt giống có phát ra tiếng động khi nảy mầm không?"\n- Dẫn dắt vào bài mới.',
        studentActivity: '- Quan sát tranh, suy nghĩ và đưa ra ý kiến cá nhân (Có/Không/Tiếng cựa mình nhẹ nhàng).'
      },
      {
        id: 'act-tv2',
        phase: 'Khám phá',
        goal: 'Đọc trôi chảy, đúng nhịp bài thơ.',
        teacherActivity: '- Đọc mẫu bài thơ với giọng nhẹ nhàng, truyền cảm.\n- Hướng dẫn ngắt nhịp thơ thích hợp. Chia bài thơ làm các khổ thơ để luyện đọc nối tiếp.',
        studentActivity: '- Theo dõi SGK, lắng nghe cách đọc mẫu.\n- 4 học sinh nối tiếp nhau đọc 4 khổ thơ trước lớp. Luyện đọc từ khó: "nảy mầm", "xôn xao", "lặng thầm".'
      },
      {
        id: 'act-tv3',
        phase: 'Luyện tập',
        goal: 'Hiểu nội dung và ý nghĩa sâu sắc của bài thơ.',
        teacherActivity: '- Yêu cầu HS đọc thầm, thảo luận nhóm trả lời các câu hỏi đọc hiểu trong SGK: Hạt mầm cần những gì để nảy mầm? Những âm thanh nào được miêu tả?\n- Tích hợp BVMT: Liên hệ trách nhiệm bảo vệ hạt giống, nguồn nước và đất lành.',
        studentActivity: '- Thảo luận nhóm đôi, trả lời câu hỏi: Hạt mầm cần nước, đất ấm và ánh sáng. Tiếng hạt nảy mầm là âm thanh của sự sống sinh sôi.'
      },
      {
        id: 'act-tv4',
        phase: 'Vận dụng',
        goal: 'Khắc sâu tình yêu thiên nhiên, kỹ năng tự học.',
        teacherActivity: '- Hướng dẫn học sinh chọn khổ thơ yêu thích để học thuộc lòng.\n- Giới thiệu clip ngắn về máy cảm biến AI đo nhịp phát triển của cây. Nhận xét tiết học.',
        studentActivity: '- Luyện đọc diễn cảm khổ thơ yêu thích và ghi nhớ việc quan sát cây cối quanh nhà.'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  },

  // 3. Tiếng Việt 5 - Tiết 16 (LTVC: Luyện tập về đại từ)
  {
    id: 'lp-5a-w3-tv-16',
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Luyện từ và câu',
    lessonName: 'Tiết 16: LUYỆN TẬP VỀ ĐẠI TỪ',
    periodInWeek: 3,
    ppctNumber: 16,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Sáng',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Học sinh củng cố kiến thức về đại từ xưng hô, đại từ chỉ định; biết cách tìm và sử dụng đại từ đúng ngữ cảnh trong văn bản đọc viết.',
      general: 'Năng lực giao tiếp ngôn ngữ mạch lạc; năng lực tự học và giải quyết bài tập cá nhân.',
      qualities: 'Chăm chỉ rèn luyện từ ngữ tiếng Việt; trung thực trong làm bài tập.'
    },
    integrations: [
      {
        id: 'int-tv16-1',
        type: 'NLS',
        code: '2.1.CB1a',
        title: 'Năng lực số: Giao tiếp chuẩn mực',
        content: 'HS sử dụng đại từ xưng hô lịch sự, tôn trọng người nhận khi giao tiếp qua tin nhắn hoặc diễn đàn trực tuyến.',
        activityLocation: 'Hoạt động 4 - Vận dụng'
      }
    ],
    equipment: {
      teacher: 'Phiếu bài tập nhóm, bảng phụ ghi các đoạn văn mẫu.',
      student: 'Vở bài tập Tiếng Việt, bút dạ viết bảng con.'
    },
    activities: [
      {
        id: 'act-ltvc1',
        phase: 'Khởi động',
        goal: 'Ôn lại lý thuyết về đại từ.',
        teacherActivity: '- Tổ chức trò chơi "Hộp quà bí mật" chứa các câu hỏi ngắn: "Thế nào là đại từ?", "Cho ví dụ về đại từ xưng hô".',
        studentActivity: '- Học sinh tham gia trả lời nhanh để mở quà, ôn lại kiến thức đại từ xưng hô (tôi, tớ, chúng ta).'
      },
      {
        id: 'act-ltvc2',
        phase: 'Khám phá',
        goal: 'Phát hiện đại từ trong ngữ liệu thực tế.',
        teacherActivity: '- Đưa đoạn văn mẫu lên bảng phụ. Yêu cầu học sinh đọc và gạch chân các từ dùng để thay thế hoặc xưng hô.',
        studentActivity: '- Đọc thầm đoạn văn, làm việc cá nhân gạch chân các từ: "anh", "tôi", "họ", "ấy".'
      },
      {
        id: 'act-ltvc3',
        phase: 'Luyện tập',
        goal: 'Vận dụng viết câu có sử dụng đại từ hợp lý.',
        teacherActivity: '- Giao nhiệm vụ trong Phiếu bài tập: Phân biệt đại từ xưng hô và đại từ chỉ định trong các câu cụ thể. Đặt 2 câu sử dụng đại từ.',
        studentActivity: '- Hoàn thành phiếu bài tập cá nhân. Trao đổi chéo vở để kiểm tra và nhận xét bài của bạn.'
      },
      {
        id: 'act-ltvc4',
        phase: 'Vận dụng',
        goal: 'Sử dụng đại từ lịch sự trong giao tiếp hàng ngày.',
        teacherActivity: '- Nhận xét kết quả bài làm. Khắc sâu nguyên tắc xưng hô lễ phép của học sinh tiểu học cả ngoài đời và trên mạng Internet.',
        studentActivity: '- Lắng nghe, tự rút kinh nghiệm về cách xưng hô với người lớn, thầy cô, bạn bè.'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  },

  // 4. Toán 5 - Tiết 11 (Cộng, trừ hai phân số khác mẫu số - Tiết 1)
  {
    id: 'lp-5a-w3-toan-11',
    grade: 5,
    subject: 'Toán',
    lessonName: 'Tiết 11: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)',
    periodInWeek: 4,
    ppctNumber: 11,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Sáng',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Học sinh hiểu và thực hiện được quy trình cộng, trừ hai phân số khác mẫu số bằng cách quy đồng mẫu số rồi thực hiện phép tính.',
      general: 'Phát triển năng lực tư duy toán học và năng lực giải quyết vấn đề toán học thực tiễn.',
      qualities: 'Cẩn thận, chính xác trong tính toán, chăm chỉ làm bài tập toán học.'
    },
    integrations: [
      {
        id: 'int-t11-1',
        type: 'AI',
        code: '5.C4.1',
        title: 'Tích hợp Trí tuệ nhân tạo (AI)',
        content: 'HS hiểu quy trình tuần tự của thuật toán quy đồng mẫu số (Tìm MSC -> Nhân thừa số phụ -> Cộng tử số).',
        activityLocation: 'Hoạt động 2 - Khám phá'
      },
      {
        id: 'int-t11-2',
        type: 'NLS',
        code: '5.2.CB1a',
        title: 'Năng lực số',
        content: 'HS sử dụng công cụ kiểm tra số học trên màn hình tương tác để kiểm tra lại bài làm.',
        activityLocation: 'Hoạt động 3 - Luyện tập'
      }
    ],
    equipment: {
      teacher: 'Bộ đồ dùng dạy học Toán 5, phiếu học tập nhóm, slide trực quan.',
      student: 'Bảng con, nháp, SGK và vở bài tập.'
    },
    activities: [
      {
        id: 'act-t1',
        phase: 'Khởi động',
        goal: 'Ôn tập cộng, trừ hai phân số cùng mẫu số.',
        teacherActivity: '- Yêu cầu 2 học sinh lên bảng làm phép tính: 3/7 + 2/7 và 5/9 - 1/9.',
        studentActivity: '- Thực hiện phép tính trên bảng lớp, cả lớp làm nháp. Nêu quy tắc: Cộng/trừ tử số và giữ nguyên mẫu số.'
      },
      {
        id: 'act-t2',
        phase: 'Khám phá',
        goal: 'Tìm ra cách cộng hai phân số khác mẫu số.',
        teacherActivity: '- Nêu bài toán thực tế: "Bạn Nam uống 1/2 cốc nước, bạn Mai uống 1/3 cốc nước. Hỏi cả hai uống bao nhiêu phần cốc nước?"\n- Đặt phép tính: 1/2 + 1/3. Hỏi cách làm?\n- Khái quát quy trình thuật toán quy đồng mẫu số.',
        studentActivity: '- Phát hiện mẫu số khác nhau nên không cộng trực tiếp được.\n- Đề xuất quy đồng mẫu số hai phân số về cùng mẫu số rồi cộng: 1/2 = 3/6, 1/3 = 2/6 => 3/6 + 2/6 = 5/6.'
      },
      {
        id: 'act-t3',
        phase: 'Luyện tập',
        goal: 'Thực hiện thành thạo phép tính cộng hai phân số khác mẫu số.',
        teacherActivity: '- Hướng dẫn HS làm Bài 1, Bài 2 trong SGK. Quan sát, uốn nắn những em tính toán chậm.',
        studentActivity: '- Làm bài cá nhân vào vở. Lên bảng trình bày các phép tính quy đồng và cộng: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.'
      },
      {
        id: 'act-t4',
        phase: 'Vận dụng',
        goal: 'Giải quyết bài toán thực tế đơn giản.',
        teacherActivity: '- Giao bài toán đố: Một mảnh vườn trồng hoa hết 1/3 diện tích, trồng rau hết 2/5 diện tích. Hỏi tổng diện tích trồng hoa và rau chiếm bao nhiêu phần?',
        studentActivity: '- Tính nhanh: 1/3 + 2/5 = 5/15 + 6/15 = 11/15 diện tích mảnh vườn.'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  },

  // 5. Khoa học 5 - Tiết 5 (Ô nhiễm, xói mòn đất và bảo vệ môi trường đất - Tiết 3)
  {
    id: 'lp-5a-w3-kh-5',
    grade: 5,
    subject: 'Khoa học',
    lessonName: 'Tiết 5: BÀI 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT (TIẾT 3)',
    periodInWeek: 1,
    ppctNumber: 5,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Chiều',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Học sinh trình bày được các biện pháp bảo vệ môi trường đất, chống xói mòn và ô nhiễm đất trong nông nghiệp và đời sống sinh hoạt.',
      general: 'Năng lực giải quyết vấn đề qua đề xuất các giải pháp bảo vệ đất đai địa phương.',
      qualities: 'Trách nhiệm bảo vệ môi trường xung quanh, có ý thức tiết kiệm tài nguyên.'
    },
    integrations: [
      {
        id: 'int-kh5-1',
        type: 'BVMT',
        title: 'Bảo vệ môi trường đất',
        content: 'Tuyên truyền sử dụng phân bón hữu cơ, không vứt rác thải nhựa khó phân hủy ra đất vườn.',
        activityLocation: 'Hoạt động 3 & 4'
      },
      {
        id: 'int-kh5-2',
        type: 'STEM',
        title: 'Mô hình bậc thang chống xói mòn',
        content: 'Vận dụng kiến thức khoa học làm mô hình đất dốc có cỏ để thấy rõ tác dụng giữ đất của rễ cây.',
        activityLocation: 'Hoạt động 2 - Khám phá'
      }
    ],
    equipment: {
      teacher: 'Hình ảnh xói mòn đất, ruộng bậc thang, video ngắn về xói mòn đất.',
      student: 'Giấy A3, bút lông màu, mẫu đất và cây nhỏ.'
    },
    activities: [
      {
        id: 'act-kh1',
        phase: 'Khởi động',
        goal: 'Ôn lại nguyên nhân gây ô nhiễm và xói mòn đất.',
        teacherActivity: '- Hỏi: "Những hoạt động nào của con người trực tiếp làm đất bị ô nhiễm?"',
        studentActivity: '- Trả lời: Sử dụng quá nhiều phân bón hóa học, phun thuốc trừ sâu bừa bãi, vứt rác thải nhựa.'
      },
      {
        id: 'act-kh2',
        phase: 'Khám phá',
        goal: 'Nhận diện các biện pháp chống xói mòn, bảo vệ đất.',
        teacherActivity: '- Chiếu hình ảnh ruộng bậc thang, trồng cây gây rừng, bón phân hữu cơ.\n- Đặt câu hỏi thảo luận: "Tại sao trồng rừng lại chống được xói mòn đất?"',
        studentActivity: '- Thảo luận nhóm 4. Trả lời: Rễ cây giữ đất bám chặt, lá cây cản bớt lực nước mưa rơi trực tiếp làm trôi đất mặt.'
      },
      {
        id: 'act-kh3',
        phase: 'Luyện tập',
        goal: 'Hệ thống hóa các biện pháp bảo vệ đất.',
        teacherActivity: '- Yêu cầu học sinh làm bảng hệ thống phân loại biện pháp: Biện pháp chống xói mòn và Biện pháp chống ô nhiễm đất.',
        studentActivity: '- Làm bài nhóm vào giấy A3: Chống xói mòn (trồng rừng, làm ruộng bậc thang); Chống ô nhiễm (sử dụng phân hữu cơ bón đất, phân loại rác thải tại nguồn).'
      },
      {
        id: 'act-kh4',
        phase: 'Vận dụng',
        goal: 'Vận động mọi người bảo vệ đất tại địa phương.',
        teacherActivity: '- Yêu cầu HS viết 1 thông điệp ngắn kêu gọi gia đình không vứt túi ni-lông ra vườn đất nhà mình.',
        studentActivity: '- Viết thông điệp: "Hãy bón phân xanh, giữ sạch đất lành!"'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  },

  // 6. Công nghệ 5 - Tiết 3 (Bài 2: Nhà sáng chế - Tiết 1)
  {
    id: 'lp-5a-w3-cn-3',
    grade: 5,
    subject: 'Công nghệ',
    lessonName: 'Tiết 3: BÀI 2: NHÀ SÁNG CHẾ (TIẾT 1)',
    periodInWeek: 2,
    ppctNumber: 3,
    week: 3,
    schoolName: 'TRƯỜNG TIỂU HỌC TÂN THẠNH',
    campusName: 'Phân hiệu 1',
    className: '5A',
    teacherName: 'Nguyễn Hoàng Tuấn',
    dayOfWeek: 'Thứ Hai',
    session: 'Chiều',
    dateStr: '21/09/2026',
    competencies: {
      specific: 'Học sinh bước đầu hiểu khái niệm nhà sáng chế, nhận biết được vai trò và một số đóng góp to lớn của các nhà sáng chế nổi tiếng trong lịch sử nhân loại.',
      general: 'Năng lực giải quyết vấn đề và sáng tạo; năng lực tự tìm hiểu thông tin qua bài đọc.',
      qualities: 'Chăm chỉ, đam mê khám phá khoa học kỹ thuật.'
    },
    integrations: [
      {
        id: 'int-cn5-1',
        type: 'AI',
        code: '5.C2.1',
        title: 'Tích hợp Trí tuệ nhân tạo (AI)',
        content: 'Nhận biết các nhà khoa học máy tính và kĩ sư AI đang sáng chế các hệ thống máy thông minh phục vụ con người.',
        activityLocation: 'Hoạt động 4 - Vận dụng'
      }
    ],
    equipment: {
      teacher: 'Hình ảnh Thomas Edison, hình ảnh chiếc bóng đèn sợi đốt, video tư liệu.',
      student: 'SGK Công nghệ 5, giấy nháp ý tưởng sáng tạo.'
    },
    activities: [
      {
        id: 'act-cn1',
        phase: 'Khởi động',
        goal: 'Kích thích tư duy sáng tạo của học sinh.',
        teacherActivity: '- Hỏi: "Khi tối trời, chúng ta bật đèn điện lên. Ai là người đã nghĩ ra chiếc bóng đèn điện đầu tiên?" Dẫn dắt vào bài mới.',
        studentActivity: '- Trả lời: Thomas Edison (Ê-đi-xơn).'
      },
      {
        id: 'act-cn2',
        phase: 'Khám phá',
        goal: 'Tìm hiểu về cuộc đời và sự nghiệp sáng chế của Thomas Edison.',
        teacherActivity: '- Tổ chức đọc câu chuyện về Thomas Edison trong SGK Công nghệ 5. Hướng dẫn thảo luận nhóm về đức tính kiên trì của ông.',
        studentActivity: '- Đọc câu chuyện nối tiếp. Thảo luận: Thomas Edison đã thất bại hàng nghìn lần trước khi tìm ra sợi dây tóc bóng đèn hoàn hảo.'
      },
      {
        id: 'act-cn3',
        phase: 'Luyện tập',
        goal: 'Xác định các đức tính của một nhà sáng chế.',
        teacherActivity: '- Hỏi: "Theo em, một nhà sáng chế cần có những đức tính gì?" Trình bày bảng phụ các đáp án lựa chọn.',
        studentActivity: '- Lựa chọn và ghi vào vở: Kiên trì, say mê quan sát, ham học hỏi, không sợ thất bại.'
      },
      {
        id: 'act-cn4',
        phase: 'Vận dụng',
        goal: 'Khơi gợi ý tưởng sáng tạo trong học sinh.',
        teacherActivity: '- Hỏi: "Nếu được sáng chế một đồ vật giúp việc học của em dễ dàng hơn, em sẽ sáng chế thứ gì?"',
        studentActivity: '- Phát biểu tự do: Hộp bút tự động dọn dẹp, bút thông minh viết không mỏi tay, thước kẻ phát sáng.'
      }
    ],
    adjustmentNote: '...........................................................................................................................................'
  }
];

// Helper to generate or fetch a full lesson plan for any grade, subject, week
export function generateFullLessonPlan(
  grade: GradeLevel,
  subject: string,
  lessonName: string,
  week: number,
  periodInWeek: number,
  ppctNumber: number | string,
  teacherName: string,
  className: string,
  schoolName: string,
  campusName: string,
  dayOfWeek: 'Thứ Hai' | 'Thứ Ba' | 'Thứ Tư' | 'Thứ Năm' | 'Thứ Sáu' = 'Thứ Hai',
  session: 'Sáng' | 'Chiều' = 'Sáng',
  dateStr?: string,
  selectedIntegrations: IntegrationItem[] = []
): LessonPlan {
  // Check if exists in sample
  const existing = SAMPLE_LESSON_PLANS.find(
    p => p.grade === grade && p.subject === subject && (p.lessonName.includes(lessonName) || lessonName.includes(p.lessonName))
  );

  if (existing) {
    return {
      ...existing,
      teacherName,
      className,
      schoolName,
      campusName,
      week,
      periodInWeek,
      ppctNumber,
      dayOfWeek,
      session,
      dateStr: dateStr || existing.dateStr,
      integrations: selectedIntegrations.length > 0 ? selectedIntegrations : existing.integrations
    };
  }

  // Dynamic Generator with subject-tailored rich pedagogy (Chuẩn Công văn 2345/BGDĐT & GDPT 2018)
  let specificCompetency = `Học sinh nắm vững kiến thức trọng tâm của bài "${lessonName}", phát triển kĩ năng thực hành, ghi nhớ và vận dụng thành thạo vào bài tập và thực tiễn đời sống theo chuẩn Chương trình GDPT 2018.`;
  let generalCompetency = `Phát triển năng lực tự chủ và tự học (tự chuẩn bị đồ dùng, hoàn thành nhiệm vụ), năng lực giao tiếp và hợp tác (thảo luận nhóm sôi nổi, tôn trọng bạn bè), năng lực giải quyết vấn đề và sáng tạo.`;
  let qualityCompetency = `Bồi dưỡng các phẩm chất chủ yếu: Yêu nước, nhân ái, chăm chỉ, trung thực và trách nhiệm trong học tập và rèn luyện.`;

  let teacherEquipment = 'Sách giáo khoa, giáo án điện tử trình chiếu, tivi/máy chiếu, đồ dùng dạy học trực quan môn học.';
  let studentEquipment = 'Sách giáo khoa, vở bài tập, bảng con, bút viết và đồ dùng học tập cá nhân.';

  let act1Teacher = `- Tổ chức trò chơi khởi động hoặc đố vui kết nối: "Ai nhanh hơn", "Ô cửa bí mật".\n- Nêu câu hỏi gợi mở liên hệ thực tế liên quan đến nội dung bài học.\n- Giáo viên nhận xét, khen ngợi và dẫn dắt giới thiệu bài mới: "${lessonName}".`;
  let act1Student = `- Toàn lớp hào hứng tham gia trò chơi, trả lời câu hỏi đố vui của giáo viên.\n- Quan sát hình ảnh/vật thật trên màn hình và chia sẻ cảm nghĩ ban đầu.\n- Mở SGK, ghi tên bài học vào vở nắn nót.`;

  let act2Teacher = `- Hướng dẫn học sinh quan sát ngữ liệu/mô hình/hình vẽ trong SGK hoặc slide trực quan.\n- Đặt hệ thống câu hỏi định hướng từ dễ đến nâng cao để học sinh phát hiện bản chất vấn đề.\n- Tổ chức cho học sinh làm việc nhóm đôi hoặc nhóm 4 thảo luận, ghi nhận kết quả ra bảng phụ/phiếu học tập.\n- Giáo viên nhận xét, chốt kiến thức chuẩn xác.`;
  let act2Student = `- Đọc thầm thông tin, quan sát trực quan và suy nghĩ độc lập.\n- Thảo luận sôi nổi trong nhóm, lắng nghe và tôn trọng ý kiến các bạn.\n- Đại diện nhóm tự tin trình bày kết quả khám phá trước lớp, các nhóm khác nhận xét, bổ sung.`;

  let act3Teacher = `- Giao nhiệm vụ thực hành: Hướng dẫn học sinh làm các bài tập trong SGK/VBT từ cơ bản đến nâng cao.\n- Quan sát, bao quát lớp học, kịp thời hỗ trợ và uốn nắn những học sinh còn gặp khó khăn.\n- Mời đại diện học sinh lên bảng trình bày hoặc chữa bài trên máy chiếu/bảng tương tác.\n- Hướng dẫn học sinh nhận xét, đánh giá chéo bài làm của bạn.`;
  let act3Student = `- Tự giác làm bài tập vào vở cá nhân một cách cẩn thận, chính xác.\n- Tích cực lên bảng trình bày hoặc đổi chéo vở để kiểm tra, góp ý chân thành cho bạn.\n- Lắng nghe cô giáo nhận xét, tự sửa các lỗi sai vào vở nếu có.`;

  let act4Teacher = `- Đưa ra tình huống thực tiễn gắn với đời sống gia đình, nhà trường và địa phương.\n- Đặt câu hỏi mở rộng: "Em rút ra bài học gì cho bản thân sau tiết học này?"\n- Tổng kết tiết học, tuyên dương tinh thần học tập của cả lớp, dặn dò chuẩn bị bài tiếp theo.`;
  let act4Student = `- Suy nghĩ, liên hệ bản thân và hào hứng phát biểu cách xử lý tình huống thực tế.\n- Ghi nhớ bài học và các việc làm tốt để thực hiện ở nhà và ở lớp.\n- Thu dọn sách vở, đồ dùng học tập gọn gàng, ngăn nắp.`;

  // Customizations for Specialist Subjects (GV Bộ môn / GV Chuyên)
  if (subject === 'Tiếng Anh') {
    specificCompetency = `Phát triển 4 kĩ năng Nghe - Nói - Đọc - Viết qua chủ đề bài học "${lessonName}". Học sinh nhận biết, phát âm chuẩn xác từ vựng trọng tâm, sử dụng đúng mẫu câu giao tiếp đơn giản và tự tin trong các tình huống thực tế.`;
    generalCompetency = `Năng lực giao tiếp tiếng Anh tự nhiên, hợp tác nhóm qua các trò chơi tương tác ngôn ngữ và đóng vai (role-play); tự chủ trong tự luyện nghe và phát âm.`;
    teacherEquipment = 'Tivi màn hình lớn, máy tính kết nối internet, file âm thanh mp3 giọng bản ngữ chuẩn, thẻ từ vựng (flashcards), tranh ảnh tình huống.';
    studentEquipment = 'Sách Tiếng Anh học sinh, sách bài tập, vở ghi, bút viết, thẻ flashcard tự làm.';
    act1Teacher = `- Bắt nhịp cho lớp hát hoặc nhảy theo bài hát khởi động (Warm-up Song/Chant): "Hello Song", "Action Song".\n- Sử dụng Flashcard chơi trò "Slap the board" hoặc "Pass the ball" để ôn từ vựng bài trước và dẫn dắt vào bài mới "${lessonName}".`;
    act1Student = `- Cả lớp hát múa sôi nổi theo nhạc điệu.\n- Tham gia hào hứng trò chơi tương tác, phản xạ nhanh với từ ngữ tiếng Anh.`;
    act2Teacher = `- Trình chiếu tranh/ngữ cảnh và bật file âm thanh phát âm mẫu 2-3 lần.\n- Hướng dẫn HS luyện phát âm từ vựng (Look, listen and repeat) từ đồng thanh đến cá nhân.\n- Giới thiệu mẫu câu trọng tâm (Sentence pattern) và làm mẫu hội thoại với một học sinh giỏi.`;
    act2Student = `- Chú ý quan sát khẩu hình và lắng nghe ngữ điệu chuẩn của giáo viên và audio.\n- Luyện đọc đồng thanh, theo dãy và cá nhân uốn nắn phát âm.\n- Lặp lại cấu trúc câu mẫu trong ngữ cảnh tương ứng.`;
    act3Teacher = `- Tổ chức luyện tập theo cặp (Pair work): Học sinh hỏi - đáp theo cấu trúc câu vừa học.\n- Đi từng bàn lắng nghe, sửa lỗi phát âm và ngữ điệu cho từng cặp học sinh.\n- Mời một số cặp lên bảng biểu diễn hội thoại trước lớp.`;
    act3Student = `- Tích cực luyện nói với bạn cùng bàn, tự tin đổi vai hỏi và trả lời.\n- Xung phong đóng vai đối thoại trước lớp với giọng điệu tự nhiên, biểu cảm.`;
    act4Teacher = `- Tổ chức trò chơi củng cố ngôn ngữ: "Lucky wheel", "Kahoot mini" hoặc "Find someone who...".\n- Nhận xét tinh thần học tập, giao nhiệm vụ thực hành nói ở nhà và chuẩn bị bài mới.`;
    act4Student = `- Hào hứng tham gia trò chơi, ghi nhớ cấu trúc câu.\n- Tự tin chào tạm biệt giáo viên bằng tiếng Anh: "Goodbye, teacher!".`;
  } else if (subject === 'Tin học') {
    specificCompetency = `Học sinh nắm được khái niệm, quy trình và thao tác máy tính cơ bản của bài "${lessonName}". Hình thành kĩ năng sử dụng phần mềm an toàn, thành thạo, phát triển tư duy logic và giải quyết vấn đề với sự trợ giúp của máy tính (Năng lực số NLS - CV 3456).`;
    teacherEquipment = 'Phòng máy vi tính có kết nối mạng LAN/Internet, máy tính GV kết nối máy chiếu hoặc màn hình tương tác, phần mềm quản lý lớp học NetOp School / Mythware.';
    studentEquipment = 'Sách giáo khoa Tin học, máy tính cá nhân/nhóm đôi tại phòng thực hành tin học, vở ghi.';
    act1Teacher = `- Đưa ra một thử thách/câu đố tương tác trực tiếp trên màn hình chiếu về công nghệ hoặc thao tác tin học.\n- Dẫn dắt gợi mở: "Làm thế nào để máy tính giúp chúng ta thực hiện việc này nhanh chóng?" -> Vào bài: "${lessonName}".`;
    act1Student = `- Quan sát màn hình, suy nghĩ và đưa ra dự đoán.\n- Khởi động máy tính cá nhân đúng quy trình an toàn điện.`;
    act2Teacher = `- Thao tác mẫu (Demo) từng bước trực tiếp trên phần mềm, phóng to các nút lệnh và công cụ quan trọng.\n- Nêu rõ các lưu ý an toàn dữ liệu và phím tắt tiện ích.\n- Đặt câu hỏi kiểm tra độ hiểu thao tác của học sinh.`;
    act2Student = `- Tập trung quan sát giáo viên thao tác mẫu trên máy chiếu.\n- Ghi chép ngắn gọn các bước thực hiện vào vở/phiếu hướng dẫn thực hành.`;
    act3Teacher = `- Giao bài tập thực hành trên máy cho từng học sinh hoặc nhóm đôi.\n- Bật chế độ giám sát phòng máy, trực tiếp đến hỗ trợ từng em còn lúng túng về chuột/bàn phím.\n- Trình chiếu sản phẩm thực hành xuất sắc của học sinh lên màn hình lớn để cả lớp cùng học hỏi.`;
    act3Student = `- Độc lập thao tác trên máy tính, thực hiện các bước theo yêu cầu bài tập.\n- Hỗ trợ bạn cùng bàn khi bạn gặp vướng mắc kỹ thuật.`;
    act4Teacher = `- Nhận xét kết quả thực hành, tuyên dương các bài làm sáng tạo và nhanh nhẹn.\n- Hướng dẫn học sinh lưu tệp đúng thư mục, thoát phần mềm và tắt máy (Shutdown) an toàn.`;
    act4Student = `- Lưu bài thực hành, tắt máy tính và xếp ghế gọn gàng trước khi rời phòng máy.`;
  } else if (subject === 'Âm nhạc') {
    specificCompetency = `Học sinh hát đúng cao độ, trường độ bài hát/tập đọc nhạc "${lessonName}". Biết biểu diễn kết hợp gõ đệm theo phách, nhịp hoặc vận động phụ họa nhịp nhàng. Cảm thụ được giai điệu vui tươi, tình cảm của tác phẩm.`;
    teacherEquipment = 'Đàn phím điện tử (Organ/Piano), thanh phách, song loan, trống nhỏ, loa máy nghe nhạc chất lượng cao, bài hát mẫu audio/video.';
    studentEquipment = 'SGK Âm nhạc, thanh phách gỗ hoặc nhạc cụ gõ tự làm (xúc xắc, vỏ sò...).';
    act1Teacher = `- Khởi động giọng theo thang âm đi lên và đi xuống (La - Li - Lo...). Khởi động cơ thể với động tác nhịp nhàng.`;
    act1Student = `- Đứng thẳng người, mở khẩu hình tròn và khởi động giọng hòa âm cùng tiếng đàn của giáo viên.`;
    act2Teacher = `- Giới thiệu tác giả, tác phẩm. Hát mẫu hoặc bật video mẫu cho học sinh cảm nhận giai điệu.\n- Dạy hát từng câu (truyền khẩu) kết hợp đệm đàn, uốn nắn những nốt cao, nốt luyến.`;
    act2Student = `- Lắng nghe chăm chú, hòa mình vào không gian âm nhạc.\n- Tập hát từng câu nối tiếp theo tiếng đàn và hướng dẫn của giáo viên.`;
    act3Teacher = `- Hướng dẫn học sinh hát kết hợp gõ đệm bằng thanh phách theo phách, theo nhịp và theo tiết tấu lời ca.\n- Chia tổ, nhóm hát đối đáp hoặc kết hợp múa phụ họa đơn giản.`;
    act3Student = `- Cầm nhạc cụ gõ đúng tư thế, gõ nhịp nhàng hòa quyện với tiếng hát.\n- Tự tin biểu diễn theo nhóm trước lớp.`;
    act4Teacher = `- Tổ chức trò chơi âm nhạc: "Nghe giai điệu đoán câu hát", "Ai là ca sĩ nhí". Tổng kết dặn dò.`;
    act4Student = `- Tham gia trò chơi hào hứng, giữ tinh thần vui tươi yêu đời.`;
  } else if (subject === 'Mĩ thuật') {
    specificCompetency = `Học sinh nhận biết được vẻ đẹp về đường nét, hình khối, màu sắc và bố cục trong chủ đề "${lessonName}". Thực hành vẽ, xé dán hoặc tạo hình 3D sáng tạo sản phẩm mĩ thuật độc đáo. Phát triển năng lực thẩm mĩ và biết chia sẻ cảm nhận về tác phẩm của mình và của bạn.`;
    teacherEquipment = 'Tranh ảnh mĩ thuật mẫu, video quy trình tạo hình sáng tạo, vật mẫu trực quan, giá trưng bày sản phẩm.';
    studentEquipment = 'Giấy vẽ A4/A3, màu sáp, màu nước, bút chì, tẩy, đất nặn, kéo thủ công, hồ dán, vật liệu tái chế.';
    act1Teacher = `- Cho học sinh xem video clip ngắn hoặc tranh ảnh trực quan khơi gợi cảm xúc về vẻ đẹp thiên nhiên/con người liên quan đến bài học.`;
    act1Student = `- Quan sát thích thú, cảm nhận và chia sẻ những chi tiết ấn tượng về màu sắc, hình khối.`;
    act2Teacher = `- Hướng dẫn các bước thực hiện tạo hình sản phẩm (Phác nét chính -> Vẽ chi tiết -> Tô màu đậm nhạt -> Hoàn thiện bố cục).\n- Cho học sinh quan sát một số bài vẽ của các bạn năm trước để tham khảo ý tưởng đa dạng.`;
    act2Student = `- Nắm rõ quy trình 4 bước thực hiện bài mĩ thuật.\n- Lên ý tưởng sáng tạo độc đáo cho tác phẩm cá nhân của mình.`;
    act3Teacher = `- Cho học sinh thực hành cá nhân hoặc theo nhóm nhỏ.\n- Đi vòng quanh lớp hướng dẫn kĩ thuật pha màu, gợi ý thêm chi tiết cho những em có năng khiếu, động viên các em còn e ngại.`;
    act3Student = `- Say sưa thực hành sáng tạo sản phẩm mĩ thuật theo cảm xúc và trí tưởng tượng của mình.`;
    act4Teacher = `- Tổ chức trưng bày "Triển lãm mĩ thuật mini" tại lớp. Hướng dẫn học sinh nhận xét, bình chọn sản phẩm ấn tượng nhất.`;
    act4Student = `- Đính tranh lên bảng trưng bày, tự tin thuyết trình về thông điệp bức tranh của mình và lắng nghe góp ý từ thầy cô, bạn bè.`;
  } else if (subject === 'Giáo dục thể chất') {
    specificCompetency = `Học sinh thực hiện được các động tác kĩ thuật cơ bản trong bài "${lessonName}". Biết tự bảo vệ bản thân khi tập luyện thể dục thể thao, nâng cao thể lực, sức bền, sự khéo léo và hình thành thói quen rèn luyện thân thể hằng ngày.`;
    teacherEquipment = 'Còi giáo viên, sân bãi sạch sẽ thoáng mát an toàn, bóng, cọc nấm định vị, đồng hồ bấm giờ, tranh ảnh kĩ thuật động tác.';
    studentEquipment = 'Trang phục thể thao gọn gàng đúng quy định, giày bata mềm chống trượt.';
    act1Teacher = `- Tập hợp lớp 4 hàng ngang, điểm số, phổ biến nội dung và yêu cầu giờ học.\n- Điều hành học sinh khởi động xoay các khớp cổ tay, cổ chân, vai, hông, gối; chạy nhẹ nhàng vòng tròn sân tập.`;
    act1Student = `- Tập hợp khẩn trương, hàng ngũ ngay ngắn, hô báo cáo rõ ràng.\n- Thực hiện các động tác xoay khớp nghiêm túc, tích cực làm nóng cơ thể.`;
    act2Teacher = `- Thị phạm động tác mẫu kết hợp giải thích chi tiết kĩ thuật động tác từ chậm đến chuẩn xác.\n- Cho lớp xem tranh phân tích kĩ thuật động tác.`;
    act2Student = `- Chú ý quan sát động tác mẫu của giáo viên để ghi nhớ tư thế chuẩn.`;
    act3Teacher = `- Tổ chức cho học sinh tập luyện: Tập đồng loạt theo hiệu lệnh còi -> Tập theo tổ do tổ trưởng điều khiển -> Tập theo cặp đôi sửa sai cho nhau.\n- Quan sát, nhắc nhở an toàn và trực tiếp sửa chữa những động tác sai lệch cho từng học sinh.`;
    act3Student = `- Tích cực tập luyện theo hiệu lệnh, nỗ lực thực hiện động tác chuẩn xác, đúng nhịp.`;
    act4Teacher = `- Tổ chức trò chơi vận động rèn luyện phản xạ và tinh thần đồng đội: "Chạy tiếp sức", "Mèo đuổi chuột".\n- Hướng dẫn thả lỏng hồi tĩnh cơ bắp. Nhận xét giờ học, giao bài tập rèn luyện thêm tại nhà.`;
    act4Student = `- Tham gia trò chơi hào hứng, đoàn kết.\n- Thực hiện các động tác thả lỏng, hít thở sâu, xếp hàng ngay ngắn trước khi về lớp.`;
  }

  const activities: TeachingActivity[] = [
    {
      id: `act-dyn-1-${Date.now()}`,
      phase: 'Khởi động',
      goal: `Tạo tâm thế hào hứng, kích thích sự tò mò và kết nối kiến thức cũ với bài học "${lessonName}".`,
      teacherActivity: act1Teacher,
      studentActivity: act1Student
    },
    {
      id: `act-dyn-2-${Date.now()}`,
      phase: 'Khám phá',
      goal: `Học sinh chủ động tìm tòi, tiếp nhận tri thức mới và hình thành kiến thức trọng tâm bài học.`,
      teacherActivity: act2Teacher,
      studentActivity: act2Student
    },
    {
      id: `act-dyn-3-${Date.now()}`,
      phase: 'Luyện tập',
      goal: `Củng cố kiến thức vừa học thông qua giải quyết các bài tập, tình huống thực hành cụ thể.`,
      teacherActivity: act3Teacher,
      studentActivity: act3Student
    },
    {
      id: `act-dyn-4-${Date.now()}`,
      phase: 'Vận dụng',
      goal: `Vận dụng kiến thức, kĩ năng đã học vào giải quyết tình huống thực tế và liên hệ bản thân.`,
      teacherActivity: act4Teacher,
      studentActivity: act4Student
    }
  ];

  return {
    id: `lp-${grade}-${week}-${Date.now()}`,
    grade,
    subject,
    lessonName,
    periodInWeek,
    ppctNumber,
    week,
    schoolName,
    campusName,
    className,
    teacherName,
    dayOfWeek,
    session,
    dateStr: dateStr || '21/09/2026',
    competencies: {
      specific: specificCompetency,
      general: generalCompetency,
      qualities: qualityCompetency
    },
    integrations: selectedIntegrations,
    equipment: {
      teacher: teacherEquipment,
      student: studentEquipment
    },
    activities,
    adjustmentNote: '...........................................................................................................................................'
  };
}
