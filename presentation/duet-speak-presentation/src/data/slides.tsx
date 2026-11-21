import type { ComponentType } from "react";
import * as Main from "../slides/StorySlides";
import * as Appendix from "../slides/AppendixSlides";

export type SlideProps = { active: boolean; fragment: number; print?: boolean };
export type SlideMeta = {
  id: string;
  title: string;
  section: string;
  maxFragment: number;
  component: ComponentType<SlideProps>;
  message: string;
  duration: string;
  seconds: number;
  avoid: string;
  source: string;
  appendix?: boolean;
};
const mainRows = [
  [
    "Hiểu bài nói, chỉ rõ cách luyện tiếp",
    "Mở đầu",
    0,
    50,
    "Giới thiệu đề tài từ nhu cầu phản hồi bài luyện nói. Nhóm đã xây dựng nguyên mẫu hỗ trợ giáo viên, nghiên cứu trên bài T001.",
    "Không giới thiệu như công cụ chấm nói đã được kiểm định rộng rãi.",
    "Bìa; Tóm tắt",
  ],
  [
    "Điểm nghẽn 150 video mỗi tuần",
    "Vấn đề thực tế",
    2,
    60,
    "Phương pháp luyện nói bằng Duet đã được áp dụng. Khi số bài tăng, giáo viên phải mở, tìm đoạn, đối chiếu và viết phản hồi; phần lặp lại trở thành điểm nghẽn.",
    "Không quy đổi thành số giờ tiết kiệm vì báo cáo chưa đo thời gian.",
    "Phần mở đầu, mục 1",
  ],
  [
    "Phản hồi giúp học sinh luyện tiếp",
    "Mục tiêu",
    1,
    40,
    "Đọc hai ví dụ để thấy vì sao nhận xét cần chỉ ra hành động tiếp theo. Đây là ví dụ trong báo cáo, không phải kết quả của một học sinh cụ thể.",
    "Không coi ví dụ minh họa là minh chứng thực nghiệm.",
    "Chương 1.1; Mở đầu, mục 2",
  ],
  [
    "Tìm lời học sinh nhờ video mẫu",
    "Ý tưởng cốt lõi",
    2,
    60,
    "Giọng mẫu có thể còn trộn trong Duet. Lợi thế là đã biết video mẫu, nên có thể so khớp để tìm đúng vùng lời học sinh. Sau đó lấy âm thanh từ bản gốc để không làm biến dạng phát âm.",
    "Không tuyên bố tách giọng hoàn hảo. Sơ đồ thời gian là minh họa.",
    "Chương 1.2; 2.4–2.5.1",
  ],
  [
    "Ba thao tác sử dụng",
    "Trải nghiệm",
    2,
    45,
    "Học sinh quay Duet trước. Người dùng chọn tệp đã hoàn thành, chạy phân tích và xem kết quả; có thể mở lại bài gần đây. Đây là ảnh giao diện thật trong báo cáo.",
    "Không mô tả phần mềm như công cụ quay video Duet.",
    "Chương 3.6",
  ],
  [
    "Sáu bước từ video đến phản hồi",
    "Nguyên lý",
    5,
    60,
    "Dùng từng lần bấm để giải thích sáu bước. Kiểm tra chất lượng trước khi chấm. Bước tìm lời dùng bản đã giảm ảnh hưởng giọng mẫu, nhưng bước phân tích dùng âm thanh gốc.",
    "Không đọc tên thư viện trong phần chính.",
    "Chương 2.4; Hình 2",
  ],
  [
    "Chức năng và mức độ chứng cứ",
    "Đầu ra",
    0,
    50,
    "Giải thích từng tiêu chí bằng câu hỏi gần gũi. Trôi chảy có số đo bước đầu; phát âm và ngữ điệu còn sơ bộ; đọc đủ dựa vào bản chép; mức dễ hiểu chưa có điểm máy xác nhận.",
    "Không gộp tất cả chức năng thành các tiêu chí đã kiểm định.",
    "Chương 1.1; 3.5–3.6",
  ],
  [
    "Xem bằng chứng và luyện lại",
    "Sản phẩm",
    1,
    50,
    "Màn hình kết quả cho người học xem từng khía cạnh. Điểm trong ảnh chỉ minh họa giao diện. Gợi ý phải dựa trên dấu hiệu đo được; AI chỉ diễn đạt lại khi được cho phép.",
    "Không dùng điểm trong ảnh làm benchmark, không khẳng định từ gợi ý chắc chắn phát âm sai.",
    "Chương 3.6",
  ],
  [
    "68 video và tập giữ riêng",
    "Dữ liệu",
    1,
    45,
    "68 học sinh ở hai lớp, cùng bài T001. 50 video dùng phát triển và 18 video giữ riêng. 12 bài có điểm tham chiếu, 6 bản chép, 3 bài thử nhỏ phục vụ câu hỏi khác nhau. Báo cáo có tăng cường dữ liệu; biến thể không phải học sinh độc lập mới.",
    "Không cộng các nhóm bằng chứng; không gọi biến thể là dữ liệu độc lập.",
    "Chương 2.1–2.3",
  ],
  [
    "Kiểm tra từng khâu",
    "Triển khai nghiên cứu",
    3,
    50,
    "Đi qua bốn câu hỏi: ghép được không, chép lời sai bao nhiêu, điểm lệch bao nhiêu và cấu hình khóa hoạt động ra sao. Kiểm tra chéo mỗi lần để riêng một bài vẫn thuộc quá trình phát triển.",
    "Không coi kiểm tra chéo là kiểm định cuối trên tập giữ riêng.",
    "Chương 2.5–2.7; 3.1–3.4",
  ],
  [
    "62/68 video căn chỉnh được",
    "Kết quả đầu vào",
    1,
    45,
    "58 video khớp qua hình ảnh và 4 video được âm thanh hỗ trợ. Sáu bài chưa đủ điều kiện gồm năm bài không khớp tin cậy và một tệp không có âm thanh. Mỗi chấm trên hình ứng với một video.",
    "91,2% là tỷ lệ căn chỉnh, không phải tỷ lệ chấm phát âm đúng.",
    "Chương 3.1; Bảng 2",
  ],
  [
    "Tỷ lệ lỗi chép lời 5,02%",
    "Kết quả chép lời",
    2,
    45,
    "Trên sáu bản chép tham chiếu, small.en có tỷ lệ lỗi từ thấp nhất trong ba phương án. Khoảng năm lỗi trên 100 từ tham chiếu theo phép đo WER; lỗi máy chưa chắc là lỗi học sinh.",
    "Không lấy 100% trừ WER để suy ra phát âm đúng.",
    "Chương 3.2; Hình 3",
  ],
  [
    "Sai lệch điểm theo tiêu chí",
    "Kết quả điểm",
    2,
    60,
    "MAE là độ lệch tuyệt đối trung bình. Trình bày riêng hai nhóm thử. Hai tiêu chí đầu lệch quanh nửa điểm; ngữ điệu cao hơn. Điểm tham chiếu phát triển chỉ do một người nghe có AI hỗ trợ.",
    "Không suy ra tăng/giảm theo thời gian từ hai nhóm khác nhau.",
    "Chương 3.3–3.4; Bảng 3; Hình 4",
  ],
  [
    "Giới hạn của ba bài thử",
    "Diễn giải",
    1,
    50,
    "Giữ mẫu số ba bài: trôi chảy và phát âm có 2/3 cùng mức, 3/3 lệch không quá một mức. Ngữ điệu có một bài lệch hơn một mức. Phát âm dự đoán ít phân tán cần so với cách đoán đơn giản.",
    "Không chuyển mẫu nhỏ thành tỷ lệ chính xác trên học sinh nói chung.",
    "Chương 2.6; 3.4",
  ],
  [
    "Đang mở rộng đối chiếu",
    "Trạng thái nghiên cứu",
    0,
    35,
    "Báo cáo nói đã chấm thêm mười bài nhưng chưa công bố chỉ số. Đang chấm 68 video; giáo viên chấm trước không xem điểm máy. Kết quả 18 bài giữ riêng phải báo riêng.",
    "Không điền số Pearson, ICC, QWK hoặc MAE chưa công bố.",
    "Chương 3.7",
  ],
  [
    "Vai trò trong trường học",
    "Ứng dụng",
    1,
    45,
    "Phần mềm hỗ trợ đo đạc, học sinh luyện lại và giáo viên quyết định phản hồi. Chạy cục bộ giúp kiểm soát dữ liệu nhưng vẫn có chi phí. Thu thập cần sự đồng ý và quyền rút dữ liệu.",
    "Chưa sử dụng để chấm chính thức, xếp loại CEFR hoặc IELTS.",
    "Mở đầu, mục 1–2; 2.8; 4.6; Kiến nghị",
  ],
  [
    "Hạn chế và kế hoạch hoàn thiện",
    "Hướng phát triển",
    1,
    55,
    "Chưa đủ dữ liệu đa dạng, chưa có kiểm định cuối và chưa đo hiệu quả giáo dục. Ưu tiên kiểm định, nhiều giáo viên chấm độc lập, nhiều điều kiện ghi và nghiên cứu trước–sau.",
    "Các bước bên phải là kế hoạch, không phải việc đã hoàn tất.",
    "Chương 4.2–4.5; Bảng 5",
  ],
  [
    "Bằng chứng để phản hồi có căn cứ",
    "Kết luận",
    0,
    40,
    "Kết luận ở đúng mức: có nguyên mẫu hoạt động và cách đánh giá minh bạch. Bằng chứng bước đầu tạo cơ sở cho kiểm định độc lập; giáo viên vẫn là người đánh giá. Mời hội đồng trao đổi, mở phụ lục khi cần.",
    "Không tuyên bố đã chứng minh học sinh tiến bộ.",
    "Kết luận và kiến nghị; 4.1",
  ],
] as const;
export const slides: SlideMeta[] = mainRows.map(
  ([title, section, maxFragment, seconds, message, avoid, source], i) => ({
    id: `s${String(i + 1).padStart(2, "0")}`,
    title,
    section,
    maxFragment,
    seconds,
    duration: `${seconds} giây`,
    message,
    avoid,
    source,
    component: Main[
      `Slide${String(i + 1).padStart(2, "0")}` as keyof typeof Main
    ] as ComponentType<SlideProps>,
  }),
);
const appendixRows = [
  [
    "Kiến trúc hệ thống",
    "2.5.4",
    "Toàn bộ thuật toán chạy ở Python; giao diện chỉ đảm nhiệm hiển thị và tương tác.",
  ],
  [
    "Căn chỉnh và âm thanh gốc",
    "2.5.1",
    "Giải thích neo hình ảnh, âm thanh bổ sung, các ngưỡng và lý do quay lại âm thanh gốc.",
  ],
  [
    "Đặc trưng độ trôi chảy",
    "2.5.2",
    "Tốc độ, tỷ lệ phát tiếng, tỷ lệ dừng và độ dài chuỗi nói chỉ phản ánh từng mặt của nhịp nói.",
  ],
  [
    "Hiệu chỉnh MultiPA",
    "2.5.3; 3.4",
    "Không huấn luyện lại mô hình nền; quy đổi điểm trong miền điểm tham chiếu đã quan sát.",
  ],
  [
    "Bảng kết quả đầy đủ",
    "3.3–3.4",
    "Đọc đúng mẫu số và MAE của từng nhóm thử; không gộp thành độ chính xác chung.",
  ],
  [
    "Chất lượng và dữ liệu học sinh",
    "2.7–2.8; 3.1; 3.5–3.6",
    "Dừng khi thiếu bằng chứng, ghi phiên bản và bảo vệ dữ liệu. Điều chỉnh tên chủ đề chỉ ảnh hưởng ranh giới đọc đủ.",
  ],
  [
    "Kế hoạch kiểm định và chỉ tiêu",
    "3.7; 4.4–4.5",
    "Các hệ số và ngưỡng trên slide là kế hoạch hoặc mục tiêu tham khảo, chưa là kết quả đo.",
  ],
  [
    "Nguồn nội dung",
    "Tài liệu tham khảo",
    "Báo cáo là nguồn khoa học chính. Whisper và MultiPA là mô hình có sẵn.",
  ],
] as const;
appendixRows.forEach(([title, source, message], i) =>
  slides.push({
    id: `a${String(i + 1).padStart(2, "0")}`,
    title,
    section: "Phụ lục kỹ thuật",
    maxFragment: 0,
    seconds: 0,
    duration: "Theo câu hỏi",
    message,
    avoid: "Không suy rộng kết quả ngoài phạm vi báo cáo.",
    source: `Chương ${source}`,
    appendix: true,
    component:
      Appendix[
        `Appendix${String(i + 1).padStart(2, "0")}` as keyof typeof Appendix
      ],
  }),
);
