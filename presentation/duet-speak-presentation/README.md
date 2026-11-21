# DUET / SPEAK · Web Slide nghiên cứu

18 slide chính, 8 slide phụ lục, khung trình chiếu 16:9. Nội dung dành cho hội đồng không chuyên công nghệ; thuật toán và kiến trúc nằm ở phụ lục. Phần chính có thời lượng gợi ý 14 phút 45 giây, chưa tính trao đổi.

## Mở bài trình chiếu

Trên Windows, nhấp đúp `START_PRESENTATION.bat`. Yêu cầu Node.js 20.19+ hoặc 22.12+. Lần đầu cần Internet để cài thư viện; font, biểu tượng và ảnh được đóng gói cục bộ, không dùng CDN trong lúc trình chiếu.

```powershell
npm install --no-package-lock
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

Mở [bài trình chiếu cục bộ](http://127.0.0.1:4173/#/s01-f0). Nếu cổng đã có bản trình chiếu đang chạy, dùng cửa sổ đó. Bản build nằm trong `dist/`; dùng `npm run preview` để xem qua HTTP. Không mở `dist/index.html` trực tiếp bằng giao thức file.

## Điều khiển

| Phím | Chức năng |
|---|---|
| →, Space, PageDown | Hiện bước tiếp theo hoặc sang slide sau |
| ←, PageUp | Quay lại bước trước; giữ trạng thái đã hiện của slide trước |
| Home / End | Đầu / kết luận phần chính |
| O | Tổng quan, chọn slide chính hoặc phụ lục |
| N | Lời dẫn, thời lượng, lưu ý và nguồn |
| M | Ẩn/hiện thanh điều khiển |
| A / B | Phụ lục / trở lại kết luận |
| F | Bật/tắt toàn màn hình |
| Escape | Đóng tổng quan và ghi chú |

Phần chính dừng ở slide kết luận; phụ lục chỉ mở khi chọn rõ ràng. URL lưu cả slide và bước, ví dụ `#/s06-f3`. Chế độ giảm chuyển động của hệ điều hành tắt hiệu ứng, vẫn giữ trình tự nội dung.

## Kiểm tra và ảnh tổng quan

```powershell
npm run build
npm test
npm run test:e2e
npm run capture
npm run contact-sheet
```

Kiểm thử trình duyệt và chụp ảnh mặc định dùng Google Chrome trên Windows. Có thể đặt `CHROME_PATH` cho công cụ capture. `contact-sheet` dùng máy chủ Vite đang chạy để tạo lời dẫn từ chính metadata của deck và hai ảnh tổng quan. Không cần Python.

- `screenshots/1920x1080/`, `screenshots/1366x768/`: ảnh toàn bộ 26 slide.
- `screenshots/contact-sheet-1920.png`, `screenshots/contact-sheet-1366.png`: ảnh tổng quan.
- `screenshots/layout-issues.json`: phát hiện nội dung vượt vùng trình chiếu.
- `docs/speaker-notes.md`: lời dẫn và thời lượng từng slide.
- `docs/content-audit.md`: đối chiếu báo cáo và các thay đổi biên tập.
- `docs/testing-report.md`: kết quả kiểm tra và giới hạn.

Nguồn khoa học chính là DOCX và bản trích `report.md` trong `../duet_speak_report_20261120/sources/`. Không bổ sung chỉ số chưa được báo cáo công bố. Ảnh sản phẩm minh họa chức năng, các điểm trong ảnh không phải số liệu kiểm định. Mọi sửa đổi ở đây chỉ thuộc bài trình chiếu.
