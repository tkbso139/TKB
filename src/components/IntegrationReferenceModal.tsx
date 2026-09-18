import React, { useState } from 'react';
import { X, Search, Sparkles, BookOpen, ShieldCheck, HeartPulse, Scale, Cpu, Globe } from 'lucide-react';
import { OFFICIAL_AI_FRAMEWORK, OFFICIAL_NLS_FRAMEWORK } from '../data/curriculumData';

interface IntegrationReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegrationReferenceModal: React.FC<IntegrationReferenceModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'nls' | 'gddd' | 'qpan' | 'qcn' | 'tailieu'>('ai');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden border border-slate-200 text-xs">
        {/* Modal Header */}
        <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-indigo-600 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-tight">Tra Cứu Khung Tích Hợp Giáo Dục Tiểu Học</h3>
              <p className="text-[10px] text-slate-400">
                Khung AI, Năng Lực Số (CV 3456/BGDĐT), Dinh Dưỡng, QPAN (TT 08/2024), Quyền Con Người
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-1 overflow-x-auto flex-shrink-0 text-xs font-bold">
          <button
            onClick={() => setActiveTab('ai')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'ai'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>1. Trí Tuệ Nhân Tạo (AI)</span>
          </button>

          <button
            onClick={() => setActiveTab('nls')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'nls'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Globe className="w-3 h-3" />
            <span>2. Năng Lực Số (CV 3456)</span>
          </button>

          <button
            onClick={() => setActiveTab('gddd')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'gddd'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HeartPulse className="w-3 h-3 text-rose-500" />
            <span>3. Giáo Dục Dinh Dưỡng</span>
          </button>

          <button
            onClick={() => setActiveTab('qpan')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'qpan'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>4. Quốc Phòng & An Ninh</span>
          </button>

          <button
            onClick={() => setActiveTab('qcn')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'qcn'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Scale className="w-3 h-3 text-amber-600" />
            <span>5. Quyền Con Người</span>
          </button>

          <button
            onClick={() => setActiveTab('tailieu')}
            className={`pb-2 px-2.5 border-b-2 transition-all flex items-center space-x-1 whitespace-nowrap text-xs ${
              activeTab === 'tailieu'
                ? 'border-indigo-600 text-indigo-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-3 h-3 text-blue-600" />
            <span>6. tailieugiaoduc.edu.vn</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
          {/* TAB 1: AI */}
          {activeTab === 'ai' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 leading-relaxed text-[11px]">
                <strong>Khung Giáo dục Trí tuệ Nhân tạo (AI) Cấp Tiểu học:</strong> Quy định 4 mạch chủ đề cốt lõi xuyên suốt từ Lớp 1 đến Lớp 5 nhằm định hướng học sinh sử dụng AI an toàn, lấy con người làm trung tâm.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {OFFICIAL_AI_FRAMEWORK.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1.5">
                    <h4 className="font-bold text-indigo-900 text-xs flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-1.5"></span>
                      {item.topic}
                    </h4>

                    <div className="space-y-1 text-[11px] text-slate-700 pl-2">
                      <p><strong>Lớp 1:</strong> {item.grade1.join(' • ')}</p>
                      <p><strong>Lớp 2:</strong> {item.grade2.join(' • ')}</p>
                      <p><strong>Lớp 3:</strong> {item.grade3.join(' • ')}</p>
                      <p><strong>Lớp 4:</strong> {item.grade4.join(' • ')}</p>
                      <p><strong>Lớp 5:</strong> {item.grade5.join(' • ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: NLS */}
          {activeTab === 'nls' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 leading-relaxed text-[11px]">
                <strong>Khung Năng Lực Số cho Học sinh Phổ thông (Công văn số 3456/BGDĐT-GDPT & Thông tư 02/2025):</strong> Gồm 6 miền năng lực thành phần với các chỉ báo thành thạo theo lứa tuổi tiểu học.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {OFFICIAL_NLS_FRAMEWORK.map((nls) => (
                  <div key={nls.code} className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        {nls.code}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-800 text-xs">{nls.name}</h5>
                    <p className="text-[10px] text-slate-600 leading-relaxed">{nls.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GDDD */}
          {activeTab === 'gddd' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 leading-relaxed text-[11px]">
                <strong>Địa chỉ Tích hợp Giáo dục Dinh Dưỡng:</strong> Lồng ghép trong các môn Công nghệ, Đạo đức và Hoạt động trải nghiệm từ lớp 1 đến lớp 5 (Bộ sách Kết nối tri thức với cuộc sống).
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs">Môn Công nghệ Lớp 4 & 5:</h5>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    • <strong>Lớp 4 - Bài 1 & 2:</strong> Lợi ích cây hoa, cây cảnh; mở rộng cây trồng ăn được giàu vitamin C giúp tăng cường miễn dịch.<br />
                    • <strong>Lớp 4 - Bài 6:</strong> Chăm sóc hoa trong chậu, kiểm soát sâu bệnh tự nhiên giữ thực phẩm sạch.<br />
                    • <strong>Lớp 5 - Bài 6:</strong> Sử dụng tủ lạnh đúng cách, bảo quản thực phẩm an toàn, vệ sinh trước khi lưu trữ.
                  </p>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs">Môn Đạo đức Lớp 1, 4 & 5:</h5>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    • <strong>Lớp 1:</strong> Giữ sạch đôi tay, phòng tránh ngộ độc thực phẩm, thói quen ăn uống lành mạnh.<br />
                    • <strong>Lớp 4:</strong> Biết ơn người lao động (hiểu thịt, cá, gạo, rau cung cấp dinh dưỡng cho cơ thể).<br />
                    • <strong>Lớp 5 - Bài 6 & 8:</strong> Lập kế hoạch cá nhân khắc phục bệnh thừa cân béo phì; ăn đủ 3 bữa/ngày, đặc biệt là bữa sáng.
                  </p>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs">Môn Hoạt động trải nghiệm Lớp 1 - 5:</h5>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    • <strong>Lớp 3 - Bài 21 đến 24:</strong> Ăn uống an toàn hợp vệ sinh, tiêu chí đánh giá bếp nhà em, cẩm nang ăn uống ngoài hàng quán.<br />
                    • <strong>Lớp 5 - Bài 1, 13, 21:</strong> Tầm quan trọng của dinh dưỡng cuối tiểu học; Lập kế hoạch chi tiêu cho bữa ăn gia đình dinh dưỡng và tiết kiệm.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: QPAN */}
          {activeTab === 'qpan' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 leading-relaxed text-[11px]">
                <strong>Giáo dục Quốc phòng và An ninh trong Trường Tiểu học (Thông tư 08/2024/TT-BGDĐT):</strong> Quy định tích hợp nội dung lòng yêu nước, chủ quyền biển đảo (Hoàng Sa, Trường Sa), hình ảnh Bộ đội Cụ Hồ và Công an Nhân dân.
              </div>

              <div className="space-y-1.5 text-slate-700 text-[11px]">
                <p>• <strong>Lớp 1:</strong> Tình yêu quê hương, hòa bình, giới thiệu hình ảnh Quân đội và Công an Nhân dân.</p>
                <p>• <strong>Lớp 2:</strong> Tinh thần đoàn kết toàn dân tộc, sự hy sinh của các chiến sĩ cách mạng, giữ gìn trật tự an toàn xã hội.</p>
                <p>• <strong>Lớp 3:</strong> Truyền thống chống giặc ngoại xâm, tấm gương anh hùng thiếu niên nhi đồng, bảo vệ môi trường trường học.</p>
                <p>• <strong>Lớp 4:</strong> Giới thiệu bản đồ hành chính VN, khẳng định chủ quyền của VN đối với quần đảo Hoàng Sa, Trường Sa; ý thức chấp hành luật giao thông.</p>
                <p>• <strong>Lớp 5:</strong> Quyền chủ quyền biển đảo VN, khai thác thủy hải sản gắn với bảo đảm quốc phòng an ninh; tấm gương cứu hộ cứu nạn.</p>
              </div>
            </div>
          )}

          {/* TAB 5: QCN */}
          {activeTab === 'qcn' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-lg text-purple-900 leading-relaxed text-[11px]">
                <strong>Tích hợp Giáo dục Quyền con người & Quyền trẻ em:</strong> Lồng ghép trong các tiết học Đạo đức, Tiếng Việt, HĐTN giúp học sinh nhận thức quyền được bảo vệ, chăm sóc, học tập, vui chơi và bổn phận đối với gia đình, nhà trường, xã hội.
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-700">
                <p>• <strong>Quyền sống an toàn:</strong> Được bảo vệ thân thể, danh dự, phòng tránh xâm hại, bạo lực học đường và thương tích.</p>
                <p>• <strong>Quyền tự do biểu đạt:</strong> Được nói lên suy nghĩ, cảm xúc, đóng góp ý kiến xây dựng trường lớp hạnh phúc.</p>
                <p>• <strong>Quyền bình đẳng & tôn trọng:</strong> Tôn trọng sự khác biệt của bạn bè về ngoại hình, năng khiếu, tôn trọng học sinh khuyết tật.</p>
              </div>
            </div>
          )}

          {/* TAB 6: TAILIEUGIAODUC.EDU.VN */}
          {activeTab === 'tailieu' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 leading-relaxed text-[11px]">
                <strong>Nguồn tài liệu tham khảo giáo dục miễn phí (tailieugiaoduc.edu.vn):</strong>
                Kho học liệu điện tử cung cấp bài giảng, kế hoạch bài dạy mẫu chuẩn GDPT 2018 theo CV 2345/BGDĐT cho 5 khối lớp.
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <h5 className="font-bold text-slate-800 text-xs">Các tài liệu đã được đồng bộ trực tiếp vào ứng dụng:</h5>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-700">
                  <li>Toàn bộ Phân phối chương trình 35 tuần cho Khối 1, 2, 3, 4, 5.</li>
                  <li>Mẫu giáo án 2 cột (Hoạt động giáo viên - Hoạt động học sinh) đầy đủ 4 hoạt động: Khởi động, Khám phá, Luyện tập/Thực hành, Vận dụng.</li>
                  <li>Địa chỉ tích hợp Năng lực số (CV 3456) và Trí tuệ nhân tạo (AI) đã được biên soạn chi tiết theo từng tiết học cụ thể.</li>
                  <li>Chức năng xuất file Word nguyên tuần chuẩn font 12, 13, 14pt (Times New Roman).</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
          >
            Đóng Tra Cứu
          </button>
        </div>
      </div>
    </div>
  );
};
