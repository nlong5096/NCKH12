# Hướng dẫn trình chiếu

Chạy `START_PRESENTATION.bat`, hoặc `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort` sau khi cài thư viện. Mở `http://127.0.0.1:4173/#/s01-f0` bằng Chrome hoặc Edge. Trước buổi trình bày, chọn đúng màn hình máy chiếu và thử phím F bật/tắt toàn màn hình.

Phần chính có 18 slide, thời lượng lời dẫn gợi ý 14 phút 45 giây. →, Space và PageDown hiện thêm bước trước khi sang trang. ← và PageUp quay lại. Home về đầu, End tới kết luận. Nhấn M để giấu thanh điều khiển khi cần.

N mở lời dẫn ngay trên màn hình, vì vậy nên đóng trước khi chiếu cho hội đồng. Đây là bảng ghi chú cùng cửa sổ, không phải màn hình riêng dành cho người nói. O mở tổng quan có đủ slide chính và phụ lục; chọn tiêu đề để chuyển. Escape đóng tổng quan và ghi chú.

Slide kết luận là điểm dừng của phần chính. Nhấn A hoặc nút phụ lục để vào 8 trang trả lời câu hỏi. Nhấn B để trở lại kết luận. Bộ đếm phần chính và phụ lục tách riêng để người nghe không nghĩ phần phụ lục là nội dung bắt buộc.

Khi giải thích kết quả, luôn đọc kèm cỡ mẫu: 68 video căn chỉnh, 6 bản chép, 12 bài phát triển và 3 bài kiểm tra nhỏ. Mục chấm thêm 10 bài chưa có chỉ số; đợt 68 video đang thực hiện chưa có kết quả cuối. Điểm trong ảnh sản phẩm chỉ minh họa giao diện.

Nếu trình duyệt không cho phép fullscreen, dùng F11. Nếu cần giảm chuyển động, bật tùy chọn tương ứng trong hệ điều hành/trình duyệt; nội dung vẫn đi theo từng bước. Font và ảnh có sẵn trong gói build, không phụ thuộc CDN. Khi dùng bản production, chạy `npm run build`, rồi `npm run preview`; không mở HTML bằng file://.

Khi hoàn tất, đóng cửa sổ máy chủ hoặc bấm Ctrl+C trong terminal. `?print=1` là chế độ xem toàn bộ slide cho in ấn; `npm run export:pdf` là tiện ích tùy chọn, không phải đầu ra chính của lần thiết kế lại này.
