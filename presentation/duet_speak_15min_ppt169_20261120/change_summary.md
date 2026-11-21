# Các thay đổi chính so với PPT gốc

Nguồn chỉnh sửa: `presentation/project_report.pptx`, 28 slide. Bản mới có 12 slide cho người không chuyên, 15 phút. Bản gốc được giữ nguyên.

| Nội dung | Bản gốc | Bản chỉnh sửa |
| --- | --- | --- |
| Mạch trình bày | Báo cáo nghiên cứu/kỹ thuật và 4 phụ lục | Vấn đề → trợ lý bốn bước → hành trình D043 → sản phẩm và bằng chứng → giới hạn/bước tiếp |
| Dung lượng | 28 slide, khoảng 18–22 phút phần chính | 12 slide, lịch trình 900 giây |
| Người nghe | Hội đồng chuyên môn, có chiều sâu kỹ thuật | Người không có nền tảng CNTT |
| Thuật ngữ | Alignment, residual, VAD, ASR, LOOCV, API, stack, code, ngưỡng | Đặt khớp video, tìm lời học sinh, chép lời, nhịp nói, bằng chứng có thể xem lại |
| Quy trình | Nhiều trang giải thích từng công nghệ | Bốn bước liên tiếp; mỗi bước Nhận gì → Làm gì → Trả về gì |
| Ví dụ | D043, D048 và nhiều tập dữ liệu rời nhau | D043 xuyên suốt; D048 chỉ là lưu ý ngắn trong notes về sai lệch |
| Hình ảnh | Ảnh giao diện chủ yếu hỗ trợ diễn giải | Giữ ảnh bìa và nhập bài, bổ sung màn hình kết quả thật D043 từ bộ minh chứng sẵn có; có bản toàn ảnh và vùng phóng to |
| Số liệu | Nhiều biểu đồ/bảng chi tiết, 4 chữ số | Giữ các bằng chứng quyết định, đơn vị và mẫu số; làm tròn điểm cho dễ chiếu, giữ giá trị đầy đủ trong nguồn/chú thích |
| Thiết kế | Body 26 px; một số trang dày | Body 30 px, title 44 px, sơ đồ/ảnh lớn; giữ Arial và nhận diện navy/teal |
| Speaker notes | Ghi chú cho bài học thuật dài | Viết lại toàn bộ 12 phần, có lời nói gợi ý, mốc giờ, nhịp chỉ hình, nguồn và câu chuyển ý |

## Đối chiếu slide cũ → mới

| Slide mới | Nguồn từ slide cũ | Thay đổi |
| ---: | --- | --- |
| 01 | 01 | Giữ tên đề tài, đổi hook sang nhu cầu phản hồi dễ hiểu. |
| 02 | 02, 05 | Giữ bối cảnh 150 video; rút gọn công việc giáo viên và nguy cơ nhầm giọng. |
| 03 | 03, 05–06, 12–14 | Gộp mục tiêu/kiến trúc thành bản đồ bốn bước và phân công máy–giáo viên. |
| 04 | 04, 13 | Dùng D043 để giải thích cặp đầu vào và thao tác chọn bài. |
| 05 | 05, 07–08 | Thay thuật toán/ngưỡng bằng đối chiếu mẫu và ba hướng tiếp tục/nghe lại/dừng. |
| 06 | 09–11, 20 | Giữ bất biến âm thanh gốc, giải thích ba nhóm bằng chứng bằng tiếng Việt. |
| 07 | 14 | Đưa gợi ý thật D043 vào slide; giữ rõ đây là lời nhắc xem lại, không khẳng định lỗi. |
| 08 | 13–14, 20 | Đầu tư vào ảnh kết quả thật D043 và các hành động xem/nghe/luyện. |
| 09 | 27 | Chọn đúng ba điểm của D043, làm tròn hai chữ số; bỏ bảng 9 bản ghi khỏi bài 15 phút. |
| 10 | 15–16 | Giữ 62/68 và WER 5,02% với đúng cỡ mẫu; giải thích ý nghĩa thay vì so nhiều model. |
| 11 | 18–19, 22 | Giữ sai lệch P2.5 N=3 và giới hạn khoa học; lưu trường hợp D048 trong notes. |
| 12 | 23–24 | Chốt ba câu trả lời và bước kiểm định độc lập tiếp theo. |

Các trang chuyên sâu về stack/API/code, bảng điểm đầy đủ, so sánh ASR/LOOCV chi tiết và danh mục tài liệu không chiếm thêm slide trong bài 15 phút; chúng vẫn còn trong bản gốc. Nguồn quan trọng được giữ ở chân trang và notes.

## Những điều giữ nguyên về khoa học

- 62/68 (91,2%) đo căn chỉnh đầu vào, không đo độ chính xác chấm nói.
- WER 5,02% đo lỗi chép lời trên 6 bản tham chiếu, không đo lỗi phát âm học sinh.
- D043 P2.5: máy 3,7950 / 4,6100 / 3,9184, hiển thị 3,80 / 4,61 / 3,92.
- P2.5 N=3: MAE 0,4360 / 0,5133 / 0,7027, nhãn hiển thị 0,44 / 0,51 / 0,70; thanh dùng số đầy đủ.
- Âm đã giảm giọng mẫu chỉ phục vụ tìm vị trí; đánh giá dùng âm thanh gốc.
- Một bài T001; mẫu điểm nhỏ; một người đánh giá có AI hỗ trợ; 18 bài giữ riêng chưa kiểm định cuối.
- Không bổ sung số về tiết kiệm thời gian, tiến bộ học tập hoặc độ đồng thuận 68 bài khi chưa có kết quả.
- Điểm tổng giao diện là chỉ số mô tả chưa kiểm định; không quy đổi CEFR/IELTS. Mức dễ hiểu chưa có điểm máy ổn định.

Ảnh bổ sung là ảnh thật đã có trong repository, không phải ảnh hoặc kết quả được tạo bằng AI; vùng nhận diện người học đã được làm mờ trong nguồn. Bản mới không nhúng video/giọng nói riêng tư.
