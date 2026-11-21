# Báo cáo dự án DUET / SPEAK

PowerPoint tiếng Việt, 28 trang: 24 slide chính và 4 phụ lục. Khổ 16:9; ghi chú thuyết trình cho toàn bộ slide. Nguồn chính là báo cáo Word người dùng cung cấp, đối chiếu mã nguồn và các báo cáo thực nghiệm trong repository.

## Tệp sử dụng

- `project_report.pptx`: bản giao chính sau khi xuất.
- `outline.md`: cấu trúc, luận điểm và căn cứ từng slide.
- `notes/total.md`: toàn bộ lời thuyết trình; các tệp cùng tên slide trong `notes/` được đưa vào PowerPoint.
- `svg_output/`: nguồn thiết kế do tác giả dựng trực tiếp; chữ, đường, biểu đồ, bảng và sơ đồ được xuất thành đối tượng DrawingML có thể chỉnh sửa. Ảnh giao diện là bitmap.
- `images/`: ảnh nguồn đã chuẩn bị; chỉ ba ảnh giao diện an toàn được đặt lên slide.
- `design_spec.md`, `spec_lock.md`: nội dung, thiết kế và ràng buộc xuất bản.
- `presentation_source.py`: tái kiểm tra và xuất từ nguồn SVG; không dựng slide bằng layout tự động.
- `validation/`: kết quả kiểm tra kỹ thuật và biểu đồ. `.review/`: kết quả rà soát trực quan. `.preview/`: PNG trình duyệt; `powerpoint_png/`: PNG từ chính tệp PPTX nếu PowerPoint xuất thành công.

## Tái tạo

Python cần `python-pptx`, `lxml`, Pillow và các phụ thuộc của ppt-master. Dùng Python thực trong môi trường, tránh alias WindowsApps không có interpreter.

```powershell
& 'C:\Users\Eden2Three\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' .\presentation_source.py --skill-dir 'C:\Users\Eden2Three\.codex\skills\ppt-master'
```

Script chạy lần lượt: validation → kiểm tra SVG cuối → tách notes → finalize SVG → xuất PPTX → sao chép bản mới nhất thành `project_report.pptx`. Sau thay đổi nội dung/thiết kế phải rà soát các PNG mới trước khi dùng trình chiếu. Công cụ nhận `--skill-dir` là đường dẫn tuyệt đối để tránh phụ thuộc working directory.

## Cách đọc kết quả

- 62/68 (91,2%) là căn chỉnh đầu vào ở khảo sát P1.4, không phải độ chính xác chấm phát âm.
- WER 5,02% là P2.4 trên 6 bản chép tham chiếu; không sử dụng kết quả P2.2A cũ trong README dự án.
- LOOCV: 12 bài phát triển. P2.5: 3 bài phát triển khác sau khi khóa scorer. Đều chưa thay kiểm định cuối 18 bài giữ riêng.
- Mục 3.7 trong Word cập nhật thêm 10 bài và đang chấm 68 bài nhưng chưa có bảng chỉ số mới. Không dựng biểu đồ hoặc đặt số cho phần này.
- Điểm tổng trên giao diện chỉ là composite sản phẩm, chưa được kiểm định. Intelligibility chưa có điểm máy ổn định.
- Số kiểm thử phần mềm trên slide 25 trích báo cáo phát hành 13/11, không được chạy lại khi soạn presentation.
- Tuyên bố tăng cường dữ liệu trong Word không được đưa lên slide vì chưa có artefact đủ xác minh trong phần khảo sát. Một số số thứ tự tài liệu tham khảo trong Word chưa khớp tên công trình; slide ghi tên tác giả/công trình đã đối chiếu.

## Giới hạn định dạng

Bản giao dùng biểu đồ và bảng dạng nhóm shape/text có thể chỉnh sửa, giữ định dạng số tiếng Việt và nét kẻ đã kiểm tra. Không bật `--native-charts-and-tables`: checker có tư vấn cho nhánh chuyển sang biểu đồ Excel/table native, nhất là định dạng dấu phẩy thập phân và viền ô. Các tư vấn đó không chặn nhánh DrawingML đang dùng. Không chuyển cả slide thành ảnh.

Các tệp nghiên cứu và source ứng dụng không bị chỉnh sửa. Tệp Word gốc được giữ nguyên. `sources/` là bản sao lưu nội bộ để đối chiếu; không cần gửi toàn thư mục này khi chỉ chia sẻ bài PowerPoint.
