# Kiểm tra bản thiết kế lại · 20/11/2026

## Phạm vi

18 slide chính và 8 phụ lục. Kiểm tra TypeScript, build production, tính toàn vẹn số liệu, điều hướng theo bước, URL, bàn phím, tổng quan, ghi chú, kết thúc phần chính, fullscreen và giảm chuyển động.

Ảnh kiểm tra nằm trong `screenshots/1920x1080/` và `screenshots/1366x768/`. `layout-issues.json` ghi các phần văn bản vượt vùng slide hoặc chồng chân nguồn; `console-errors.json` ở từng thư mục ghi lỗi trình duyệt. Có kiểm tra ảnh được tải và lấy mẫu các frame trong chuyển cảnh.

## Giới hạn

Kiểm thử dùng Chrome headless trên máy Windows hiện tại, chưa kiểm tra trực tiếp trên máy chiếu của hội đồng hoặc mọi trình duyệt. Bài trình chiếu phản ánh báo cáo tháng 11/2026; chưa có số liệu mới của kiểm định cuối để cập nhật. Ảnh giao diện nguyên bản dùng tiếng Anh, có phần dẫn và giải thích tiếng Việt.

## Kết quả cuối

- `npm run build`: TypeScript và Vite production build thành công.
- `npm test`: 10/10 kiểm thử qua (số liệu, mẫu số, URL, biên điều hướng và điểm dừng phần chính).
- `npm run test:e2e`: 6/6 kiểm thử Chrome qua; bao gồm fullscreen thật, focus tổng quan, giảm chuyển động, giữ trạng thái slide rời màn hình và lấy mẫu frame chuyển cảnh.
- `npm run capture`: 26 slide × 2 độ phân giải; `layout-issues.json` là `[]` và cả hai `console-errors.json` là `[]`.
- `npm run contact-sheet`: tạo hai ảnh tổng quan và lời dẫn cho đủ 26 slide từ metadata hiện tại.
- Đã xem ảnh tổng quan toàn bộ bài và xem riêng các trang mở đầu, quy trình, sản phẩm, kết quả và phụ lục để rà bố cục.
- Bản production được mở qua Vite preview: thử S01, S08, S12, S18, A02, xác nhận đủ 26 slide, không có lỗi runtime hoặc request thất bại, không có ảnh hỏng.

Đợt rà phát hiện giới hạn chiều rộng nội tại của cột ảnh góp ý; đã dùng `minmax(0, …)` và `min-width: 0`, chụp lại đủ hai bộ ảnh. Một lỗi khai báo kiểu trong kiểm thử ảnh đã được sửa trước build cuối. Các kết quả trên là kiểm thử phần mềm trình chiếu, không phải xác nhận chất lượng khoa học của hệ thống chấm nói.
