# Đối chiếu nội dung với báo cáo gốc

Nguồn chính: `presentation/duet_speak_report_20261120/sources/PHẦN MỀM HỖ TRỢ ĐÁNH GIÁ LUYỆN NÓI TIẾNG ANH ĐA PHƯƠNG THỨC.docx`. Đã đọc bản trích toàn văn `sources/report.md`, đối chiếu XML DOCX ở các kết quả và mục 3.7, xem biểu đồ gốc Hình 3 và ba ảnh giao diện đang dùng. Bản `presentation_intake/report.md` có cùng SHA-256 với bản trong sources: `0445B739AD6A46736038402868B70CB1F7B2B933341DBB6DD194908725A7C7E5`.

## Những vấn đề trong bản cũ

- Phần chính đi sớm vào kiến trúc, thuật ngữ tiếng Anh, VAD, ASR và pipeline, trong khi quá trình sử dụng và kết quả đầu ra chưa được giải thích đủ.
- Kết quả sản phẩm đặt sau phần kỹ thuật; mức độ chứng cứ của năm khía cạnh luyện nói chưa có một slide rõ ràng.
- Thiếu cập nhật mục 3.7: chấm thêm 10 bài, chưa công bố chỉ số; đang đối chiếu 68 video, tách riêng kết quả của 18 bài giữ riêng.
- Câu “không gửi media tới dịch vụ chấm bên ngoài” trong bản cũ rộng hơn thông tin cần thiết. Bản mới trình bày đúng ưu tiên xử lý cục bộ và việc AI chỉ viết lại góp ý khi được phép.
- Nguồn `BAO_CAO_NCKH12.docx` trong tài liệu bàn giao cũ không tồn tại ở checkout. Đã thay bằng đường dẫn có thật.
- `src/data/` không có trong checkout vì quy tắc ignore `data/` ở gốc. Đã phục hồi dữ liệu, metadata, lời dẫn và thêm ngoại lệ ignore để có thể lưu chúng vào Git.

## Mạch nội dung và truy vết

| Slide | Vai trò | Nguồn | Số liệu, giới hạn cần giữ |
|---|---|---|---|
| S01 | Giới thiệu đề tài và mục đích | Bìa, Tóm tắt | Nguyên mẫu hỗ trợ, bài T001 |
| S02 | Điểm nghẽn của giáo viên | Mở đầu 1 | Khoảng 150 video/tuần; chưa đo giờ tiết kiệm |
| S03 | Thế nào là phản hồi hữu ích | 1.1; Mở đầu 2 | Ví dụ nguyên lý, không phải kết quả đo |
| S04 | Giải thích lợi thế video mẫu | 1.2; 2.4–2.5.1 | Định vị trước; dùng âm thanh gốc để đánh giá |
| S05 | Luồng sử dụng sản phẩm | 3.6 | Chọn tệp đã quay → phân tích → xem kết quả; mở bài gần đây |
| S06 | Sáu bước hoạt động | 2.4; Hình 2 | Có cảnh báo, dừng hoặc kiểm tra người nghe |
| S07 | Các đầu ra và chứng cứ | 1.1; 3.5–3.6, Bảng 4 | Trôi chảy/phát âm/ngữ điệu còn giới hạn; mức dễ hiểu chưa có điểm xác nhận; tổng hợp chỉ mô tả |
| S08 | Minh họa kết quả và gợi ý | 3.6; ảnh sản phẩm | Điểm trong ảnh không dùng làm benchmark; AI không thay điểm hoặc thêm lỗi |
| S09 | Tổ chức dữ liệu | 2.1–2.3; Hình 1 | 68 = 50 phát triển + 18 giữ riêng; 12 điểm tham chiếu, 6 bản chép, 3 thử nhỏ; biến thể không là người mới |
| S10 | Cách nghiên cứu và kiểm tra | 2.5–2.7; 3.1–3.4 | Bốn câu hỏi khác nhau, không suy ra một độ chính xác AI chung |
| S11 | Kết quả căn chỉnh | 3.1; Bảng 2 | 58 + 4 = 62/68 (91,2%); 5 không khớp tin cậy, 1 không âm thanh |
| S12 | Kết quả chép lời | 3.2; Hình 3 | small.en 5,02%; distil-large-v3 8,69%; large-v3-turbo 8,81%; N=6 |
| S13 | Sai lệch theo tiêu chí | 3.3–3.4; Bảng 3; Hình 4 | Trôi chảy/phát âm/ngữ điệu: LOOCV 0,4204/0,4912/0,5881; P2.5 0,5133/0,4360/0,7027 |
| S14 | Ý nghĩa và giới hạn ba bài | 2.6; 3.4 | Cùng mức: 2/3, 2/3, 1/3; lệch ≤1: 3/3, 3/3, 2/3; mẫu ít đa dạng |
| S15 | Trạng thái mới nhất trong báo cáo | 3.7 | Chấm thêm 10: chưa có chỉ số; 68 đang làm; giữ riêng 18 chưa có kết quả cuối |
| S16 | Giá trị ứng dụng và vai trò | Mở đầu 1–2; 2.8; 4.6; Kiến nghị | Hỗ trợ luyện tập; có chi phí cục bộ; đồng ý và quyền rút dữ liệu |
| S17 | Giới hạn và kế hoạch | 4.2–4.5; Bảng 5 | Chưa chứng minh hiệu quả giáo dục; cần nhiều người chấm, dữ liệu và thử trước–sau |
| S18 | Kết luận đúng phạm vi | Kết luận; 4.1 | Nguyên mẫu hoạt động, kiểm chứng bước đầu; giáo viên giữ vai trò đánh giá |
| A01 | Kiến trúc | 2.5.4 | React → FastAPI → Python; mô hình có sẵn |
| A02 | Thuật toán căn chỉnh | 2.5.1 | Neo phủ ≥70%; các ngưỡng 0,50/0,60/0 dB/0,30; âm thanh gốc |
| A03 | Đo độ trôi chảy | 2.5.2 | 5 công thức; dừng 0,25 s; dừng dài 0,70 s |
| A04 | MultiPA và hiệu chỉnh | 2.5.3; 3.4 | Đoạn ≤14,5 s; không fine-tune; phát âm trong [3;4], ngữ điệu {2,3,4,5} |
| A05 | Bảng kết quả đầy đủ | 3.3–3.4 | Giữ 4 chữ số thập phân, mẫu số và định nghĩa MAE/LOOCV |
| A06 | Cổng chất lượng và dữ liệu | 2.7–2.8; 3.1; 3.5–3.6 | Mã bài, đồng ý, lưu vết; 11/11 bỏ tên chủ đề khỏi chấm đọc đủ |
| A07 | Thiết kế kiểm định tiếp theo | 3.7; 4.4–4.5 | Pearson/ICC/QWK chưa có kết quả; ≤0,5 điểm và ≥80% là mục tiêu |
| A08 | Nguồn nghiên cứu | Tài liệu tham khảo | Dẫn tên tác giả và tài liệu, tránh lặp các số chú thích chưa thống nhất trong báo cáo |

## Những điều không được suy ra

91,2% không phải độ chính xác chấm nói. 5,02% không phải tỷ lệ phát âm sai. Không gộp các tập thử, không tạo hệ số đồng thuận, không khẳng định đã cải thiện năng lực học sinh, không quy đổi điểm luyện tập sang CEFR/IELTS. Kết quả hiển thị trên ảnh sản phẩm là minh họa giao diện, không thay thế bảng số liệu thực nghiệm.
