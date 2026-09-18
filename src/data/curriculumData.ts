import { CurriculumLesson, GradeLevel, IntegrationItem } from '../types';

export const OFFICIAL_AI_FRAMEWORK = [
  {
    topic: 'A. Tư duy lấy con người làm trung tâm',
    grade1: ['Con người có cảm xúc, AI thì không', 'AI thể hiện cảm xúc do con người lập trình', 'Ý nghĩa cảm xúc mà AI thể hiện', 'Nhận diện AI trong cuộc sống'],
    grade2: ['Khi nào nên và không nên dùng AI', 'AI làm việc, con người kiểm soát', 'AI trong gia đình', 'AI hỗ trợ mọi người', 'Con người dạy AI qua tương tác'],
    grade3: ['Cách sử dụng AI trong học tập', 'Không phụ thuộc hoàn toàn vào AI', 'Suy nghĩ kĩ trước khi dùng AI', 'AI trong trường học', 'Kiểm tra và phản biện kết quả của AI'],
    grade4: ['AI trong công việc hằng ngày', 'AI hỗ trợ, con người suy nghĩ', 'AI vì cuộc sống tốt đẹp hơn', 'AI trong xã hội', 'Con người quyết định khi dùng AI'],
    grade5: ['Con người chịu trách nhiệm', 'AI không thay thế con người', 'AI phục vụ lợi ích chung', 'Con người trong kỉ nguyên AI']
  },
  {
    topic: 'B. Đạo đức AI',
    grade1: ['Việc làm tốt và việc làm xấu', 'Máy thông minh làm việc tốt'],
    grade2: ['Sự đối xử không công bằng', 'Của bạn và của tớ'],
    grade3: ['Phân biệt thật và giả', 'Cùng máy thông minh làm việc tốt'],
    grade4: ['Bảo vệ thông tin cá nhân'],
    grade5: ['Hệ thống AI công bằng', 'Giúp AI công bằng', 'Cần hiểu cách AI suy nghĩ']
  },
  {
    topic: 'C. Các kĩ thuật và ứng dụng AI',
    grade1: ['Nhận biết AI và ứng dụng AI', 'Chức năng và công cụ AI'],
    grade2: ['Cách AI học và học liệu của AI', 'Sơ lược cách AI phân loại đồ vật'],
    grade3: ['Dữ liệu học máy', 'Kĩ thuật AI dựa trên luật', 'Kĩ thuật học máy'],
    grade4: ['Một số ứng dụng AI quen thuộc', 'Làm quen với công cụ trải nghiệm học máy'],
    grade5: ['Thuật toán AI dựa trên luật', 'Làm quen với ứng dụng học máy trực quan']
  },
  {
    topic: 'D. Thiết kế hệ thống AI',
    grade1: ['Máy thông minh học từ ví dụ'],
    grade2: ['Máy thông minh giúp giải quyết vấn đề quanh em'],
    grade3: ['Quá trình huấn luyện máy thông minh', 'Dữ liệu tốt cho máy', 'Máy có thể học sai'],
    grade4: ['Từ vấn đề đến ý tưởng AI', 'Liên tục cải tiến AI', 'Cải tiến AI bằng dữ liệu'],
    grade5: ['Quy trình huấn luyện AI']
  }
];

export const OFFICIAL_NLS_FRAMEWORK = [
  { code: '1.1.CB1a', name: 'Tìm kiếm dữ liệu số', desc: 'Xác định nhu cầu thông tin, tìm kiếm dữ liệu/thông tin đơn giản qua từ khóa an toàn.' },
  { code: '1.2.CB1a', name: 'Đánh giá dữ liệu số', desc: 'Phát hiện độ tin cậy, tính chính xác của thông tin trên môi trường số, không tin tin giả.' },
  { code: '1.3.CB1a', name: 'Quản lý dữ liệu số', desc: 'Biết nơi sắp xếp dữ liệu, thông tin trong môi trường có cấu trúc (thư mục, bảng số).' },
  { code: '2.1.CB1a', name: 'Tương tác công nghệ số', desc: 'Lựa chọn phương tiện giao tiếp số đơn giản, phù hợp với bối cảnh lớp học/gia đình.' },
  { code: '2.2.CB1a', name: 'Chia sẻ thông tin số', desc: 'Chia sẻ thông tin có trách nhiệm, biết phương pháp trích dẫn và ghi nguồn cơ bản.' },
  { code: '2.3.CB1a', name: 'Trách nhiệm công dân số', desc: 'Sử dụng dịch vụ số đơn giản (liên lạc khẩn cấp, tra cứu) lịch sự, đúng mực.' },
  { code: '2.5.CB1a', name: 'Quy tắc ứng xử mạng', desc: 'Nhận thức chuẩn mực hành vi, giao tiếp tôn trọng, không trêu chọc bắt nạt trên mạng.' },
  { code: '2.6.CB1a', name: 'Quản lý danh tính số', desc: 'Tạo ảnh đại diện, bảo vệ danh tiếng trực tuyến và bí mật thông tin riêng tư.' },
  { code: '3.1.CB1a', name: 'Phát triển nội dung số', desc: 'Tạo và chỉnh sửa nội dung số đơn giản (vẽ tranh, gõ văn bản, làm slide) thể hiện bản thân.' },
  { code: '3.2.CB1a', name: 'Tích hợp nội dung số', desc: 'Sửa đổi, tinh chỉnh, sắp xếp thông tin mới vào tài liệu số sẵn có.' },
  { code: '4.1.CB1b', name: 'Bảo vệ thiết bị số', desc: 'Phân biệt rủi ro mất an toàn (ổ cắm, link lạ, tin nhắn độc hại) và bảo vệ thiết bị.' },
  { code: '4.2.CB1a', name: 'Bảo vệ dữ liệu cá nhân', desc: 'Bảo vệ họ tên, địa chỉ, số điện thoại, mật khẩu, không cung cấp cho người lạ.' },
  { code: '4.3.CB1a', name: 'Bảo vệ sức khỏe số', desc: 'Tránh mỏi mắt, ngồi đúng tư thế, kiểm soát thời gian dùng màn hình hợp lý.' },
  { code: '4.4.CB1a', name: 'Bảo vệ môi trường số', desc: 'Thu gom pin, thiết bị điện tử cũ đúng nơi quy định, tiết kiệm năng lượng.' },
  { code: '5.1.CB1a', name: 'Giải quyết vấn đề kỹ thuật', desc: 'Xác định sự cố đơn giản và nhờ người lớn hỗ trợ an toàn.' },
  { code: '5.2.CB1a', name: 'Sử dụng công cụ số', desc: 'Sử dụng công cụ số (Quizizz, bảng tương tác, thước online) để giải quyết nhu cầu học tập.' },
  { code: '6.1.CB1a', name: 'Hiểu biết về AI', desc: 'Nhớ và nhận diện ứng dụng AI trong đời sống, hiểu AI là công cụ hỗ trợ con người.' },
  { code: '6.2.CB2a', name: 'Sử dụng AI có kiểm soát', desc: 'Dùng AI gợi ý ý tưởng nhưng tự suy nghĩ, kiểm chứng và chịu trách nhiệm nội dung.' }
];

export const CURRICULUM_DATABASE: CurriculumLesson[] = [
  // ==================== LỚP 5 ====================
  // Tuần 1 - Lớp 5
  {
    week: 1,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc',
    lessonName: 'Thanh âm của gió',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'QCN', content: 'HS nhận thức quyền được tự do biểu đạt cảm xúc và thưởng thức cái đẹp trong thiên nhiên.' },
      { type: 'BVMT', content: 'Giáo dục tình yêu thiên nhiên, ý thức bảo vệ cảnh quan làng quê xanh sạch đẹp.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Luyện từ và câu',
    lessonName: 'Luyện tập về danh từ, động từ, tính từ',
    periodCount: 1,
    ppctStart: 2,
    ppctEnd: 2,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'NLS', code: '5.2.CB1a', content: 'Sử dụng bảng tương tác hoặc ứng dụng số để phân loại danh từ, động từ, tính từ.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Viết',
    lessonName: 'Tìm hiểu cách viết bài văn kể chuyện sáng tạo',
    periodCount: 1,
    ppctStart: 3,
    ppctEnd: 3,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'AI', code: '5.A1.1', content: 'Nhận biết AI có thể gợi ý ý tưởng cốt truyện, HS tự chọn lọc và viết bằng cảm xúc thật của mình.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Toán',
    lessonName: 'Bài 1: Ôn tập số tự nhiên (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Ôn tập và bổ sung',
    suggestedIntegrations: [
      { type: 'NLS', code: '1.3.CB1a', content: 'Nhận diện bảng dữ liệu số trong môi trường có cấu trúc trên màn hình tương tác.' },
      { type: 'AI', code: '5.C1', content: 'Hiểu cách AI xử lý và phân loại các dãy số nhanh chóng.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Khoa học',
    lessonName: 'Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Chất',
    suggestedIntegrations: [
      { type: 'BVMT', content: 'Giáo dục ý thức giữ gìn đất trồng, không vứt rác thải nhựa làm thoái hóa đất.' },
      { type: 'STEM', content: 'Khám phá thành phần của đất qua thí nghiệm lắng đọng.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Lịch sử và Địa lí',
    lessonName: 'Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Đất nước và con người Việt Nam',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Giới thiệu bản đồ hành chính VN, khẳng định chủ quyền của VN đối với quần đảo Hoàng Sa và Trường Sa.' },
      { type: 'NLS', code: '1.1.CB1a', content: 'Khai thác bản đồ số Việt Nam trên màn hình trình chiếu.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ đề 1: Biết ơn người có công',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Bồi dưỡng lòng biết ơn các anh hùng liệt sĩ đã hy sinh vì nền độc lập của Tổ quốc.' },
      { type: 'TTDD_HCM', content: 'Học tập lòng yêu nước và tinh thần cống hiến theo tấm gương Bác Hồ.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Công nghệ',
    lessonName: 'Bài 1: Vai trò của công nghệ (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Phần một: Công nghệ và đời sống',
    suggestedIntegrations: [
      { type: 'AI', code: '5.A1.1', content: 'Nhận biết vai trò của AI và robot tự động trong sản xuất và đời sống hằng ngày.' },
      { type: 'NLS', code: '6.1.CB1a', content: 'Tìm hiểu ứng dụng công nghệ số làm thay đổi xã hội hiện đại.' }
    ]
  },
  {
    week: 1,
    grade: 5,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Chào năm học mới | HĐGDCĐ: Chúng mình đã lớn | SHL: Bậc thang trưởng thành',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Em lớn lên mỗi ngày',
    suggestedIntegrations: [
      { type: 'GDDD', content: 'Giáo dục ăn uống đủ chất và cân đối dinh dưỡng để phát triển thể chất giai đoạn cuối tiểu học.' },
      { type: 'QCN', content: 'Quyền được học tập, phát triển toàn diện và bày tỏ nguyện vọng trong năm học mới.' }
    ]
  },

  // Tuần 3 - Lớp 5 (Như trong bộ mẫu thực tế của thầy Nguyễn Hoàng Tuấn Lớp 5A)
  {
    week: 3,
    grade: 5,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Hoạt động vui Trung Thu (Tiết 1) | HĐGDCĐ: Niềm vui nhân đôi, nỗi buồn chia nửa (Tiết 2) | SHL: Cân bằng cảm xúc (Tiết 3)',
    periodCount: 3,
    ppctStart: 7,
    ppctEnd: 9,
    theme: 'Chủ đề 1: Em lớn lên mỗi ngày',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được vui chơi, chia sẻ cảm xúc và được bạn bè, thầy cô tôn trọng.' },
      { type: 'GDDD', content: 'Giữ gìn vệ sinh an toàn thực phẩm trong dịp Tết Trung thu.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc',
    lessonName: 'Tiếng hạt nảy mầm (Tiết 1) & Ngôi sao sân cỏ (Tiết 1, 2) & Đọc mở rộng',
    periodCount: 4,
    ppctStart: 15,
    ppctEnd: 21,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'BVMT', content: 'Cảm nhận sự sinh sôi kỳ diệu của mầm cây, hình thành tình yêu và ý thức chăm sóc cây xanh.' },
      { type: 'AI', code: '5.A1.2', content: 'Quan sát và nhận biết AI phân tích hình ảnh cây nảy mầm, con người giữ trách nhiệm bảo vệ môi trường.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Luyện từ và câu',
    lessonName: 'Luyện tập về đại từ',
    periodCount: 1,
    ppctStart: 16,
    ppctEnd: 16,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'NLS', code: '2.1.CB1a', content: 'Sử dụng đại từ lịch sự, chuẩn mực khi giao tiếp trực tiếp và trên các diễn đàn lớp học số.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Tiếng Việt',
    subSubject: 'Viết',
    lessonName: 'Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo & Tìm hiểu cách viết báo cáo công việc',
    periodCount: 2,
    ppctStart: 17,
    ppctEnd: 20,
    theme: 'Chủ điểm 1: Thế giới tuổi thơ',
    suggestedIntegrations: [
      { type: 'NLS', code: '3.1.CB1a', content: 'Biết cấu trúc và cách trình bày văn bản báo cáo công việc trên phương tiện số.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Toán',
    lessonName: 'Bài 6: Cộng, trừ hai phân số khác mẫu số (Tiết 1, 2) & Bài 7: Hỗn số (Tiết 1, 2) & Bài 8: Ôn tập hình học và đo lường (Tiết 1)',
    periodCount: 5,
    ppctStart: 11,
    ppctEnd: 15,
    theme: 'Chủ đề 1: Ôn tập và bổ sung',
    suggestedIntegrations: [
      { type: 'NLS', code: '5.2.CB1a', content: 'HS kiểm tra kết quả quy đồng và phép tính phân số qua ứng dụng số học trực quan.' },
      { type: 'AI', code: '5.C4.1', content: 'Làm quen với thuật toán tìm mẫu số chung nhỏ nhất của AI.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Khoa học',
    lessonName: 'Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 3) & Bài 3: Hỗn hợp và dung dịch (Tiết 1)',
    periodCount: 2,
    ppctStart: 5,
    ppctEnd: 6,
    theme: 'Chủ đề 1: Chất',
    suggestedIntegrations: [
      { type: 'BVMT', content: 'Biện pháp chống xói mòn và ô nhiễm đất, bón phân hữu cơ, bảo vệ đất nông nghiệp tại địa phương.' },
      { type: 'STEM', content: 'Thực hành tạo hỗn hợp đơn giản từ muối, tiêu, cát, nước.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Công nghệ',
    lessonName: 'Bài 2: Nhà sáng chế (Tiết 1)',
    periodCount: 1,
    ppctStart: 3,
    ppctEnd: 3,
    theme: 'Phần một: Công nghệ và đời sống',
    suggestedIntegrations: [
      { type: 'AI', code: '5.C2.1', content: 'Khám phá các phát minh vĩ đại của Thomas Edison và các nhà sáng chế AI tương lai.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 3)',
    periodCount: 1,
    ppctStart: 3,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Biết ơn người có công',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Nêu những tấm gương dũng cảm của tuổi trẻ Việt Nam trong xây dựng và bảo vệ Tổ quốc.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Lịch sử và Địa lí',
    lessonName: 'Bài 2: Thiên nhiên Việt Nam (Tiết 3: Sông ngòi)',
    periodCount: 1,
    ppctStart: 5,
    ppctEnd: 5,
    theme: 'Chủ đề 1: Đất nước và con người Việt Nam',
    suggestedIntegrations: [
      { type: 'BVMT', content: 'Ý thức bảo vệ nguồn nước ngọt, phòng chống bão lũ và phòng ngừa đuối nước.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Giáo dục thể chất',
    lessonName: 'Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 5,
    ppctEnd: 6,
    theme: 'Đội hình đội ngũ',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Rèn luyện tính kỉ luật, tác phong quân ngũ nhanh nhẹn, chính xác theo khẩu lệnh.' }
    ]
  },
  {
    week: 3,
    grade: 5,
    subject: 'Hoạt động tập thể',
    lessonName: 'Sinh hoạt tập thể tuần 3: An toàn giao thông đường bộ',
    periodCount: 1,
    ppctStart: 3,
    ppctEnd: 3,
    theme: 'An toàn giao thông',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Chấp hành nghiêm chỉnh Luật giao thông đường bộ, đội mũ bảo hiểm khi đi xe máy.' }
    ]
  },

  // ==================== LỚP 1 ====================
  {
    week: 1,
    grade: 1,
    subject: 'Tiếng Việt',
    subSubject: 'Làm quen',
    lessonName: 'Làm quen với trường lớp, bạn bè, đồ dùng học tập (Tiết 1 - 6)',
    periodCount: 6,
    ppctStart: 1,
    ppctEnd: 6,
    theme: 'Làm quen',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Giúp HS nhận biết quyền được học tập, vui chơi, kết bạn trong môi trường an toàn; biết tôn trọng thầy cô và bạn bè.' },
      { type: 'NLS', code: '2.1.CB1a', content: 'Làm quen với thiết bị học tập thông minh trong lớp học.' }
    ]
  },
  {
    week: 1,
    grade: 1,
    subject: 'Toán',
    lessonName: 'Tiết học đầu tiên & Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 1, 2)',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Các số từ 0 đến 10',
    suggestedIntegrations: [
      { type: 'AI', code: '1.A2.1', content: 'Nhận biết và kể tên được một số thiết bị có sử dụng AI (như robot). Nhận biết nhân vật Rô-bốt là đại diện AI hỗ trợ con người học tập.' }
    ]
  },
  {
    week: 1,
    grade: 1,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Em giữ sạch đôi tay (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ đề 1: Tự chăm sóc bản thân',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được chăm sóc sức khỏe: Học sinh có quyền sống trong môi trường sạch sẽ, bổn phận tự giác rửa tay giữ vệ sinh.' },
      { type: 'GDDD', content: 'Kể tên các bước vệ sinh cá nhân và ý nghĩa của việc vệ sinh đôi tay để đảm bảo an toàn trong ăn uống.' }
    ]
  },
  {
    week: 1,
    grade: 1,
    subject: 'Tự nhiên và Xã hội',
    lessonName: 'Bài 1: Kể về gia đình (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Gia đình',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được sum họp với gia đình; Quyền được lắng nghe ý kiến; Bổn phận chia sẻ, phụ giúp việc nhà, tôn trọng và yêu thương các thành viên.' }
    ]
  },
  {
    week: 1,
    grade: 1,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Lễ Khai giảng | HĐGDCĐ: Bài 1: Làm quen với bạn mới | SHL: Sơ kết tuần 1',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Chào năm học mới',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được tự do biểu đạt: Học sinh được nói lên suy nghĩ, cảm xúc của mình; tôn trọng bản thân và bạn bè trong giao tiếp.' },
      { type: 'NLS', code: '2.3.CB1a', content: 'Biết chào hỏi, giới thiệu bản thân và sử dụng lời nói lịch sự khi tham gia nhóm lớp trực tuyến.' }
    ]
  },

  // ==================== LỚP 2 ====================
  {
    week: 1,
    grade: 2,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc & Viết',
    lessonName: 'Bài 1: Tôi là học sinh lớp 2 (4 tiết) & Bài 2: Ngày hôm qua đâu rồi? (Tiết 1 - 3)',
    periodCount: 7,
    ppctStart: 1,
    ppctEnd: 7,
    theme: 'Em lớn lên từng ngày',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Giáo dục học sinh tình cảm quý mến bạn bè khi đến trường; biết chào hỏi, chúc bạn vui vẻ trong năm học mới.' },
      { type: 'BVMT', content: 'Qua câu ứng dụng “Ánh nắng tràn ngập sân trường”, HS biết giữ vệ sinh lớp học, bỏ rác đúng nơi quy định để sân trường sạch đẹp.' },
      { type: 'QPAN', content: 'Giáo dục kĩ năng phòng chống đuối nước khi vui chơi trong kì nghỉ hè.' }
    ]
  },
  {
    week: 1,
    grade: 2,
    subject: 'Toán',
    lessonName: 'Bài 1: Ôn tập về các số đến 100 (Tiết 1 - 3) & Bài 2: Tia số. Số liền trước, số liền sau (Tiết 1, 2)',
    periodCount: 5,
    ppctStart: 1,
    ppctEnd: 5,
    theme: 'Chủ đề 1: Ôn tập và bổ sung',
    suggestedIntegrations: [
      { type: 'NLS', code: '1.3.CB1a', content: 'Nhận biết được nơi để sắp xếp dữ liệu, thông tin một cách đơn giản trong môi trường có cấu trúc.' },
      { type: 'GDDD', content: 'HS biết ăn nhiều rau củ quả, đặc biệt là cà chua và rau xanh để bổ sung vitamin, giúp cơ thể khỏe mạnh.' },
      { type: 'AI', code: '2.A1.1', content: 'Nhận biết AI có thể hỗ trợ con người tìm kiếm và sắp xếp các dãy số nhanh chóng.' },
      { type: 'STEM', content: 'Bài học STEM: Tia số của em (tích hợp Mĩ thuật sáng tạo đồ dùng học tập).' }
    ]
  },
  {
    week: 1,
    grade: 2,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Vẻ đẹp quê hương em (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Quê hương em',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Cập nhật thêm hiểu biết thực tế về quê hương, giáo dục HS ý thức bảo vệ chủ quyền, toàn vẹn lãnh thổ, yêu quý biển đảo.' },
      { type: 'NLS', code: '1.1.CB1a', content: 'Biết sử dụng công cụ tìm kiếm dưới sự hướng dẫn để tìm hình ảnh vẻ đẹp quê hương trên Internet.' },
      { type: 'AI', code: '2.A1.1', content: 'Sử dụng tìm kiếm bằng giọng nói để tìm ảnh "Cảnh đẹp quê hương Việt Nam".' }
    ]
  },
  {
    week: 1,
    grade: 2,
    subject: 'Tự nhiên và Xã hội',
    lessonName: 'Bài 1: Các thế hệ trong gia đình (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Gia đình',
    suggestedIntegrations: [
      { type: 'QCN', content: 'HS nhận biết mỗi thành viên trong gia đình đều có quyền được yêu thương, lắng nghe và tôn trọng.' },
      { type: 'AI', code: '2.A2.1', content: 'Nhận biết một số thiết bị thông minh (robot hút bụi, loa thông minh) hỗ trợ các thế hệ trong nhà tiện nghi hơn.' }
    ]
  },
  {
    week: 1,
    grade: 2,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Tham gia lễ khai giảng | HĐGDCĐ: Hình ảnh của em | SHL: Sinh hoạt theo chủ đề',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Khám phá bản thân',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền và nghĩa vụ học tập: Em có quyền và nghĩa vụ tham gia các hoạt động học tập, rèn luyện do nhà trường tổ chức.' },
      { type: 'NLS', code: '2.6.CB1a', content: 'Xác định danh tính số: Bước đầu hiểu mỗi người có một hình ảnh trên môi trường số (Avatar, tên người dùng).' },
      { type: 'AI', code: '2.A1.2', content: 'Hiểu AI chỉ mô phỏng chứ không thể sở hữu cảm xúc thực như con người.' }
    ]
  },

  // ==================== LỚP 3 ====================
  {
    week: 1,
    grade: 3,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc & Viết',
    lessonName: 'Bài 1: Ngày gặp lại (Tiết 1 - 4) & Bài 2: Về thăm quê (Tiết 1 - 3)',
    periodCount: 7,
    ppctStart: 1,
    ppctEnd: 7,
    theme: 'Những búp măng non',
    suggestedIntegrations: [
      { type: 'QCN', content: 'HS hiểu quyền được giao lưu, kết bạn và chia sẻ niềm vui ngày tựu trường.' },
      { type: 'NLS', code: '1.1.CB1a', content: 'Tra cứu hình ảnh ngày hội khai trường trên thư viện số an toàn.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Toán',
    lessonName: 'Bài 1: Ôn tập các số đến 1000 (Tiết 1 - 3) & Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1000 (Tiết 1, 2)',
    periodCount: 5,
    ppctStart: 1,
    ppctEnd: 5,
    theme: 'Bảng nhân, bảng chia',
    suggestedIntegrations: [
      { type: 'NLS', code: '5.2.CB1a', content: 'Sử dụng bài tập tương tác trên Quizizz/Wordwall để ôn luyện số trong phạm vi 1000.' },
      { type: 'AI', code: '3.C1', content: 'Tìm hiểu cách máy tính học nhận diện các con số viết tay.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Chào cờ và hát Quốc ca (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Em yêu Tổ quốc Việt Nam',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Giáo dục ý thức tôn trọng Quốc kì, Quốc ca, bồi dưỡng lòng tự hào dân tộc và tình yêu đất nước.' },
      { type: 'NLS', code: '1.1.CB1a', content: 'Chụp ảnh – Lưu giữ và chia sẻ thông tin bằng hình ảnh hoạt động chào cờ đúng quy chuẩn.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Tự nhiên và Xã hội',
    lessonName: 'Bài 1: Họ hàng và những ngày kỉ niệm của gia đình (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Gia đình',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được yêu thương, chăm sóc trong gia đình; bổn phận gắn kết, kính trọng ông bà họ hàng.' },
      { type: 'NLS', code: '1.3.CB1a', content: 'Sắp xếp cây phả hệ hoặc danh sách họ hàng vào sơ đồ trực quan.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Tin học',
    lessonName: 'Bài 1: Thông tin và quyết định (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ đề A: Máy tính và em',
    suggestedIntegrations: [
      { type: 'AI', code: '3.A1.1', content: 'Nhận biết thông tin giúp con người và AI đưa ra các quyết định chính xác.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Công nghệ',
    lessonName: 'Bài 1: Tự nhiên và Công nghệ (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ đề 1: Công nghệ và đời sống',
    suggestedIntegrations: [
      { type: 'GDDD', content: 'Phân biệt sản phẩm tự nhiên (rau quả, lúa gạo giàu dinh dưỡng) và sản phẩm công nghệ.' }
    ]
  },
  {
    week: 1,
    grade: 3,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Chào năm học mới | HĐGDCĐ: Tự hào em là học sinh lớp 3 | SHL: Lập kế hoạch tuần',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Em và mái trường mến yêu',
    suggestedIntegrations: [
      { type: 'QCN', content: 'Quyền được học tập trong môi trường thân thiện, an toàn và bình đẳng.' }
    ]
  },

  // ==================== LỚP 4 ====================
  {
    week: 1,
    grade: 4,
    subject: 'Tiếng Việt',
    subSubject: 'Đọc & Viết',
    lessonName: 'Bài 1: Điều kì diệu (3 tiết) & Bài 2: Thi nhạc (4 tiết)',
    periodCount: 7,
    ppctStart: 1,
    ppctEnd: 7,
    theme: 'Chủ điểm 1: Mỗi người một vẻ',
    suggestedIntegrations: [
      { type: 'QCN', content: 'HS nhận biết mỗi người có đặc điểm, khả năng và giá trị riêng; biết tôn trọng sự khác biệt, không trêu chọc ngoại hình bạn.' },
      { type: 'NLS', code: '2.3.CB1a', content: 'HS biết trao đổi ý kiến lịch sự khi làm việc nhóm; không công khai thông tin riêng tư trên môi trường số.' },
      { type: 'AI', code: '4.A1.1', content: 'HS nhận biết AI có thể hỗ trợ nhận diện âm thanh hoặc gợi ý hình ảnh minh họa, nhưng cần con người kiểm tra.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Toán',
    lessonName: 'Bài 1: Ôn tập các số đến 100 000 (Tiết 1, 2) & Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 1 - 3)',
    periodCount: 5,
    ppctStart: 1,
    ppctEnd: 5,
    theme: 'Chủ đề 1: Ôn tập và bổ sung',
    suggestedIntegrations: [
      { type: 'AI', code: '4.A1.1', content: 'HS nhận biết AI hỗ trợ xử lý và sắp xếp lượng dữ liệu số khổng lồ nhanh hơn con người (100.000 số trong 1 giây).' },
      { type: 'AI', code: '4.A1.2', content: 'HS hiểu máy tính/AI tính rất nhanh nhưng con người vẫn chịu trách nhiệm kiểm tra kết quả.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Khoa học',
    lessonName: 'Bài 1: Tính chất của nước và nước với cuộc sống (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Chủ đề 1: Chất',
    suggestedIntegrations: [
      { type: 'BVMT', content: 'HS nhận biết vai trò của nước sạch; biết sử dụng nước hợp lí, khóa vòi nước sau khi dùng, bảo vệ nguồn nước.' },
      { type: 'AI', code: '4.A1.1', content: 'Nhận biết AI hỗ trợ giám sát và điều khiển nguồn nước thông qua vòi nước thông minh hoặc cảm biến tiêu thụ.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Lịch sử và Địa lí',
    lessonName: 'Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí (Tiết 1, 2)',
    periodCount: 2,
    ppctStart: 1,
    ppctEnd: 2,
    theme: 'Mở đầu',
    suggestedIntegrations: [
      { type: 'QPAN', content: 'Khai thác bản đồ Việt Nam để giáo dục lòng yêu nước, ý thức học đúng, nói đúng về chủ quyền toàn vẹn lãnh thổ; xác định vị trí Hoàng Sa, Trường Sa.' },
      { type: 'AI', code: '4.A1.2', content: 'Sử dụng Canva AI/ChatGPT để tạo khung sơ đồ tư duy, câu hỏi gợi ý đã kiểm duyệt.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Đạo đức',
    lessonName: 'Bài 1: Biết ơn người lao động (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Chủ đề 1: Biết ơn người lao động',
    suggestedIntegrations: [
      { type: 'AI', code: '4.A1.1', content: 'Nhận biết AI là công cụ hỗ trợ người lao động tăng năng suất (robot thu hoạch lúa, AI chẩn đoán bệnh).' },
      { type: 'GDDD', content: 'Biết cá, thịt gà, gạo, rau củ do người lao động làm ra cung cấp những chất dinh dưỡng quý giá cho cơ thể.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Công nghệ',
    lessonName: 'Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống (Tiết 1)',
    periodCount: 1,
    ppctStart: 1,
    ppctEnd: 1,
    theme: 'Hoa và cây cảnh trong đời sống',
    suggestedIntegrations: [
      { type: 'AI', code: '4.C2.1', content: 'HS nhận biết AI có thể hỗ trợ nhận diện, gọi tên và phân loại hoa, cây cảnh qua hình ảnh Google Lens.' },
      { type: 'GDDD', content: 'Mở rộng hiểu biết về cây trồng ăn được: cây ăn quả, rau củ vừa làm đẹp vừa cung cấp vitamin C và khoáng chất.' }
    ]
  },
  {
    week: 1,
    grade: 4,
    subject: 'Hoạt động trải nghiệm',
    lessonName: 'SHDC: Chào năm học mới | HĐGDCĐ: Em tự hào về bản thân | SHL: Tự hào thể hiện khả năng của bản thân',
    periodCount: 3,
    ppctStart: 1,
    ppctEnd: 3,
    theme: 'Chủ đề 1: Nhận diện bản thân',
    suggestedIntegrations: [
      { type: 'QCN', content: 'HS biết mỗi em có quyền được tôn trọng đặc điểm riêng, được bày tỏ cảm xúc và lắng nghe khi giới thiệu về bản thân.' },
      { type: 'AI', code: '4.A1.2', content: 'HS hiểu AI có thể hỗ trợ gợi ý cách trình bày hoặc minh họa ý tưởng, nhưng cảm xúc tự hào là của chính các em.' }
    ]
  }
];

export const SUBJECT_COLOR_MAP: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  'Tiếng Việt': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-800' },
  'Toán': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-800' },
  'Đạo đức': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800' },
  'Tự nhiên và Xã hội': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-800' },
  'Khoa học': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-800' },
  'Lịch sử và Địa lí': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-800' },
  'Công nghệ': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-800' },
  'Hoạt động trải nghiệm': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-800' },
  'Giáo dục thể chất': { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-200', badge: 'bg-lime-100 text-lime-800' },
  'Âm nhạc': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-800' },
  'Mĩ thuật': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-800' },
  'Tin học': { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-800' },
  'Tiếng Anh': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-800' },
  'Tăng cường Tiếng Việt': { bg: 'bg-rose-50/70', text: 'text-rose-800', border: 'border-rose-300', badge: 'bg-rose-200 text-rose-900' },
  'Tăng cường Toán': { bg: 'bg-blue-50/70', text: 'text-blue-800', border: 'border-blue-300', badge: 'bg-blue-200 text-blue-900' },
  'Hoạt động tập thể': { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300', badge: 'bg-slate-200 text-slate-900' },
};
