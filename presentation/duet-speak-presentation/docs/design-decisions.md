# Thiết kế và cơ chế trình chiếu

## Nội dung

18 slide chính đi theo nhu cầu thực tế → trải nghiệm sử dụng → nguyên lý → phương pháp kiểm chứng → kết quả → ứng dụng và giới hạn. 8 slide phụ lục giữ kiến trúc, ngưỡng xử lý, công thức, hiệu chỉnh, số liệu đầy đủ, bảo vệ dữ liệu và chỉ tiêu kiểm định. Mỗi slide có nguồn và lời dẫn riêng.

## Hình thức

Nền trắng xanh, chữ Newsreader có hỗ trợ tiếng Việt cho tiêu đề và Manrope cho nội dung. Xanh biểu thị bằng chứng, màu đất đỏ biểu thị giới hạn. Không có hình trang trí lấy từ mạng. Các sơ đồ và ma trận 68 điểm được dựng bằng CSS; ảnh màn hình thật lấy từ báo cáo. Bố cục đa dạng gồm đối chiếu phản hồi, quy trình, ảnh sản phẩm, bảng tiêu chí, phân chia dữ liệu, ma trận, biểu đồ và vai trò trong trường học.

Font, biểu tượng và ảnh tải cục bộ. Không gọi API chấm nói, không kết nối dữ liệu học sinh. Các screenshot có điểm số được ghi rõ là minh họa sản phẩm.

## Sửa nguyên nhân nhấp nháy

Bản cũ phụ thuộc `fragment` trong `useLayoutEffect` của GSAP. Mỗi lần bấm hiện thêm một bước, cleanup hoàn nguyên inline style rồi effect lại đưa toàn bộ `[data-enter]` về opacity 0. Cùng lúc, CSS ẩn visibility của slide cũ ngay khi đổi trang và reset fragment cũ về 0.

Bản mới có một nơi quản lý chuyển cảnh: CSS dissolve 280 ms kèm dịch dọc nhẹ. Các slide luôn được mount, visibility của lớp cũ chỉ ẩn sau khi fade kết thúc; lớp mới hiện ngay. `PersistentSlide` giữ bước cuối đã hiện của slide rời màn hình. Fragment chỉ chuyển opacity của chính khối đó; tiêu đề và nội dung khác không chạy lại. Slide không hoạt động có `inert` và `aria-hidden`.

Chế độ `prefers-reduced-motion` bỏ toàn bộ transition và transform. Không dùng filter, zoom, xoay, nền động hoặc tween cạnh tranh. Có kiểm tra theo frame để tránh khoảng trống trong một chuyển cảnh, và kiểm tra hồi quy tiêu đề đứng yên khi hiện thêm bước.

## Điều hướng và khả năng truy cập

URL lưu trang và bước. Cập nhật bàn phím dùng state updater để không mất lần bấm liên tiếp. Tổng quan có focus trap và trả focus khi đóng; phím mũi tên trong tổng quan không làm đổi slide phía sau. Space trên nút giữ thao tác gốc của nút. Fullscreen bắt lỗi trình duyệt và có thông báo dự phòng F11. Phần chính dừng ở kết luận, không tự đi vào phụ lục.

## Tổ chức mã

`src/data/researchData.ts` lưu số liệu; `src/data/slides.tsx` lưu mục lục, lời dẫn, giới hạn và thời lượng. `StorySlides.tsx` trình bày phần chính; `AppendixSlides.tsx` giữ phần sâu. Ngoại lệ trong `.gitignore` bảo đảm `src/data/` không bị quy tắc `data/` ở repo gốc bỏ qua nữa.
