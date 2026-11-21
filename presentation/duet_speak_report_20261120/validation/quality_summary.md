# Kiểm tra bản giao

Đã hoàn thành ngày 20/11/2026.

- Skill ppt-master: attribution guard đạt; Generate PPTX Default, quyết định cấu trúc/thiết kế được người dùng giao chủ động.
- 28 slide đúng roster: 24 trang chính và 4 phụ lục.
- Kiểm tra SVG: 0 lỗi chặn xuất; canvas, font và palette khớp lock; đã sửa khung chữ và rà soát toàn bộ trang.
- 4 biểu đồ đối chiếu giá trị nguồn và tính lại tọa độ bằng svg_position_calculator. Hai bảng giữ đầy đủ các hàng và giá trị.
- Render Chromium: 28/28 PNG, 0 lỗi, 0 trang trắng. Rà soát trực quan từng trang theo rubric; 28/28 trạng thái `ok`, không cần sửa SVG ở vòng trực quan.
- Xuất native DrawingML: 28 slide, 28 notes. Postflight `passed-with-warnings`, quality gate `passed`.
- PowerPoint thực tế mở tệp chỉ đọc thành công, xuất đủ 28 PNG kích thước 1600×900; đã xem các trang trong 7 contact sheets, không phát hiện clipping, chồng chữ, méo ảnh hoặc mất dấu tiếng Việt.
- Cấu trúc PPTX kiểm tra bằng python-pptx: 28 slide, 28 notes có nội dung, 544 shape có text frame, 180 group, 3 picture. Không raster hóa toàn slide. Các đoạn biểu đồ, bảng, sơ đồ và chữ là đối tượng có thể chỉnh sửa.
- ZIP CRC của PPTX đạt. Mã ứng dụng và báo cáo Word gốc không bị thay đổi. Không chạy lại test suite ứng dụng; số tests trong slide được gắn rõ là kết quả release đã lưu.

Tư vấn còn lại của checker: nhận diện hai dòng mô tả hai miền độc lập ở slide05 như một đoạn văn; và hướng dẫn đồng bộ định dạng số/viền ô cho tùy chọn `--native-charts-and-tables`. Nhánh tùy chọn này không được dùng. Bản giao dùng shape/text DrawingML để giữ nguyên định dạng số tiếng Việt đã render; các tư vấn này không làm mất khả năng chỉnh sửa và không phải lỗi mở tệp.

Các kết quả đồng thuận mới trên 68 bài vẫn đang chờ số liệu trong tài liệu; không đưa ra hệ số hoặc tỷ lệ tự tạo. Các mục tiêu MAE≤0,5 và ≥80% được ghi rõ là mục tiêu, không phải thành quả.
