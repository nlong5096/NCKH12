# DUET / SPEAK — Bản trình bày 15 phút

12 slide cho người không chuyên, lấy D043 làm ví dụ xuyên suốt. Bản 28 slide gốc giữ nguyên ở `presentation/project_report.pptx`.

- `project_report_15min.pptx`: bản giao, có đủ 12 speaker notes.
- `speaker_notes.md`: lời thuyết trình gợi ý, thời lượng/mốc giờ, nhịp trình bày và nguồn cho từng trang.
- `timing.md`: bảng thời gian 12 slide, tổng 15:00; đủ năm khối 2 + 2 + 5 + 4 + 2 phút.
- `change_summary.md`: tóm tắt thay đổi và ánh xạ 28 slide gốc → 12 slide mới.
- `svg_output/`: nguồn thiết kế trực tiếp, chữ/sơ đồ/biểu đồ xuất thành đối tượng có thể chỉnh sửa. `images/` là ảnh nguồn; chỉ product-home, product-assessment, product-results được sử dụng.
- `presentation_source.py`: chạy lại kiểm tra và xuất từ SVG/notes. `render_powerpoint.ps1`: mở bản PPTX chỉ đọc và xuất PNG bằng PowerPoint để kiểm tra.

Tái tạo bằng Python có phụ thuộc ppt-master:

```powershell
& 'C:\Users\Eden2Three\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' .\presentation_source.py --skill-dir 'C:\Users\Eden2Three\.codex\skills\ppt-master'
```

Chuyển trang tĩnh, không animation đối tượng, không tự chuyển theo thời gian. Thời lượng là kế hoạch nói có nhịp nhìn ảnh và chỉ sơ đồ; diễn tập theo mốc04:00/09:00/13:00. Không có audio narration; người dùng yêu cầu thời lượng trong notes nên metadata thời gian được giữ theo đúng yêu cầu.

Biểu đồ ở dạng shape/text có thể chỉnh sửa để giữ định dạng số tiếng Việt; không raster hóa cả slide. Ảnh giao diện là bitmap. Không thay số liệu, không bổ sung kết quả về tiết kiệm thời gian, hiệu quả học tập hay đồng thuận trên 68 bài. Những chỗ nhãn số được làm tròn đều có chú thích; dữ liệu gốc còn trong nguồn và metadata.

Chỉ chia sẻ các tệp bản giao hoặc gói nguồn đã chọn; `sources/` chứa bản sao tài liệu nội bộ để đối chiếu. Bài trình bày không nhúng video hoặc âm thanh học sinh.
