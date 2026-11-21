# Kiểm tra nội dung, biểu đồ và bố cục

Đã đọc toàn bộ 28 slide PPTX gốc bằng python-pptx, đối chiếu báo cáo Word và P2.5. Rút thành 12 trang theo năm khối thời gian người dùng yêu cầu. Bản gốc giữ nguyên.

## Biểu đồ

- verify-charts: 10_results.svg | object=alignment-outcomes | type=stacked-bar | mode=decomposable-calc | scale=0–68 from payload (hidden axis) | calc=ran×3 for cumulative58,62,68 | cumulative widths696,744,816px | segment widths696,48,72px | svg unchanged
- verify-charts: 11_limits.svg | object=mini-mae | type=horizontal-bar | mode=direct-calc | scale=0–1 from ticks | calc=ran | bar lengths239.8,282.315,386.485px; y262,352,442; height44 | svg unchanged

Dữ liệu P2.5 giữ đầy đủ trong payload; nhãn hiển thị làm tròn 2 chữ số và có chú thích. Tỷ lệ căn chỉnh và lỗi chép lời được tách rõ hai mẫu số 68/6, không gộp thành “độ chính xác AI”.

## Carrier receipt

12 trang, 184 đối tượng text trong SVG, 4 lần đặt ảnh từ 3 nguồn, 2 biểu đồ, không raster hóa toàn slide. Mỗi bước có đầu vào–hành động–đầu ra. Các trang có quan hệ định lượng dùng chart; các sơ đồ chỉ mang thứ tự và không giả số giây thực của D043.

Chọn các vùng chữ nhật và đường thẳng vì đang mô tả video, kết quả và chuyển giao dữ liệu có điều kiện. Phương án chevron/khối mũi tên sẽ khiến quy trình giống một dây chuyền luôn hoàn thành, trong khi thực tế có thể dừng/xem lại; thin arrowed lines biểu đạt đúng liên kết. Trường chung và khoảng cách đã xác định ownership nên không thêm braces/frames gợi một taxonomy độc lập. Nhãn chú thích gắn trực tiếp số hoặc ảnh; không dùng wedge callout vì không có mốc tín hiệu cụ thể cần chỉ ra. Do đó không có helper preset bổ sung: các primitive hiện tại chính là dạng cần dùng, không phải thay thế bất đắc dĩ.

Không dùng gradient vì các trạng thái là phân loại rõ, không phải thang tin cậy liên tục; không dùng filter/shadow vì ảnh là bằng chứng tư liệu và vùng nhìn đã tách bằng khoảng trắng. Inline emphasis có 8 điểm; không có icon pool nên không thiếu icon so với kế hoạch.

Đã render Chromium 12/12, không lỗi/trắng; xem cả 12 trang trong 3 contact sheets và xem riêng slide 08. Không phát hiện mất nội dung, chữ chồng, sai tỷ lệ ảnh hoặc sơ đồ khó đọc. Trang 08 giữ toàn nguồn đồng thời phóng to vùng giữa cùng ảnh, đúng policy no-crop.

Notes có 12 phần và mỗi phần có thời lượng, mốc giờ, lời nói gợi ý, câu chuyển ý, nhịp chỉ hình và nguồn. Các duration 60,60,120,60,90,90,60,80,80,80,60,60 cộng đúng 900 giây; thời gian hỏi đáp không nằm trong 15 phút.

Tư vấn còn lại ở checker chỉ liên quan nhánh chuyển số thập phân tiếng Việt sang chart Excel native. Bản giao dùng các shape/text DrawingML chỉnh sửa được, giữ đúng dấu phẩy đã nhìn thấy trên bản render. Không bật --native-charts-and-tables.

## Kiểm tra bản giao trong PowerPoint

PowerPoint đã mở thành công PPTX cuối và xuất đủ 12 ảnh 1600 × 900. Đã xem toàn bộ 12 trang, không thấy chữ chồng, nội dung bị cắt, ảnh thiếu hoặc slide trắng. Kiểm tra cấu trúc xác nhận 12 notes, 900 giây, 184 đối tượng chữ chỉnh sửa được, 4 lần đặt ảnh; không tự chuyển trang. Hash bản PPTX gốc không đổi. Chi tiết: `quality_summary.json`.
