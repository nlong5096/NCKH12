# Outline — DUET / SPEAK

24 slide báo cáo chính; 4 phụ lục. Khổ 16:9, nội dung tiếng Việt, notes cho mọi trang.

Nguồn chính: báo cáo Word người dùng gửi; số liệu đối chiếu các artefact thực nghiệm.

## 01. Từ video Duet đến bằng chứng luyện nói

Hỗ trợ đánh giá có truy vết từ video tham chiếu và âm thanh gốc.

Nguồn: Nguồn chính: Báo cáo kết quả thực hiện dự án, tháng 11/2026

Nguồn thiết kế: `svg_output/01_cover.svg` · Notes: `notes/01_cover.md`

## 02. Khoảng 150 video mỗi tuần tạo điểm nghẽn phản hồi

Phép đo lặp lại chiếm thời gian dành cho phản hồi sư phạm.

Nguồn: Báo cáo Word, Mở đầu §1 · Chưa đo mức tiết kiệm thời gian.

Nguồn thiết kế: `svg_output/02_problem.svg` · Notes: `notes/02_problem.md`

## 03. Ba câu hỏi xác định ranh giới nghiên cứu

Đúng vùng lời nói đi trước đúng phép đo và đúng diễn giải.

Nguồn: Báo cáo Word, Mở đầu §2–3

Nguồn thiết kế: `svg_output/03_questions.svg` · Notes: `notes/03_questions.md`

## 04. 68 video cùng T001, giữ riêng 18 bài kiểm định

Các tập con trả lời các câu hỏi khác nhau và không cộng thành các nhóm độc lập.

Nguồn: Báo cáo Word §2.1–2.3; P2.4D/P2.5 · Sơ đồ phân nhóm, diện tích không biểu diễn số lượng.

Nguồn thiết kế: `svg_output/04_data.svg` · Notes: `notes/04_data.md`

## 05. Video mẫu đã biết là lợi thế của bài toán Duet

Tận dụng dữ liệu đã biết để hạn chế nhận nhầm giọng mẫu.

Nguồn: Báo cáo Word §1.2, §2.5.1; duet_segmenter/smart_pipeline.py

Nguồn thiết kế: `svg_output/05_reference.svg` · Notes: `notes/05_reference.md`

## 06. Pipeline tạo mốc thời gian trước khi tạo điểm

Các cổng kỹ thuật ngăn đầu vào không phù hợp đi thẳng tới scorer.

Nguồn: Báo cáo Word §2.4–2.5; smart_pipeline.py; runner.py; competition_demo.py

Nguồn thiết kế: `svg_output/06_pipeline.svg` · Notes: `notes/06_pipeline.md`

## 07. Hình ảnh dẫn đường, âm thanh bổ sung căn chỉnh

Hệ thống kết hợp hai miền tín hiệu với điều kiện tin cậy.

Nguồn: Báo cáo Word §2.5.1; duet_segmenter/visual.py, alignment.py, smart_pipeline.py

Nguồn thiết kế: `svg_output/07_alignment.svg` · Notes: `notes/07_alignment.md`

## 08. GREEN, AMBER, RED là cổng kỹ thuật

Màu phản ánh khả năng xử lý, không phản ánh năng lực học sinh.

Nguồn: Báo cáo Word §2.4, §3.1; duet_segmenter/scorability.py, smart_pipeline.py

Nguồn thiết kế: `svg_output/08_gates.svg` · Notes: `notes/08_gates.md`

## 09. Phát hiện trên residual, đánh giá từ âm thanh gốc

Cancellation chỉ định vị, không được làm nguồn chấm phát âm/ngữ điệu.

Nguồn: Báo cáo Word §1.2, §2.5.1; speaking_evidence/runner.py:65–149

Nguồn thiết kế: `svg_output/09_raw_audio.svg` · Notes: `notes/09_raw_audio.md`

## 10. Độ trôi chảy được mô tả bằng nhịp và khoảng dừng

Không dùng tốc độ nói đơn lẻ làm kết luận chất lượng.

Nguồn: Báo cáo Word §2.5.2; speaking_evidence/fluency.py:10–85

Nguồn thiết kế: `svg_output/10_fluency.svg` · Notes: `notes/10_fluency.md`

## 11. MultiPA được tích hợp, hiệu chỉnh trong miền quan sát

Chọn phương pháp theo từng tiêu chí và không ngoại suy thang điểm chưa có nhãn.

Nguồn: Word §2.5.3, §2.6; MULTIPA_COMPETITION_SCORER_REPORT.md; p24d_multipa.py

Nguồn thiết kế: `svg_output/11_multipa.svg` · Notes: `notes/11_multipa.md`

## 12. React và FastAPI bao quanh pipeline Python đã khóa

Frontend hiển thị, backend tính; luồng nghiên cứu và sản phẩm dùng chung scorer.

Nguồn: Word §2.5.4; product_api.py; media_library.py; pyproject.toml; product_frontend/package.json

Nguồn thiết kế: `svg_output/12_architecture.svg` · Notes: `notes/12_architecture.md`

## 13. Nguyên mẫu có luồng nhập bài, phân tích và xem lại

Luồng tải tệp cục bộ và demo đã có trong phiên bản final release.

Nguồn: Word §3.6; FINAL_RELEASE_REPORT.md; ảnh 02_ASSESSMENT.png · Cohort theo lô ở luồng nghiên cứu.

Nguồn thiết kế: `svg_output/13_product.svg` · Notes: `notes/13_product.md`

## 14. Kết quả nối tiêu chí với bằng chứng và gợi ý

AI diễn đạt lại không được tạo điểm hay tự thêm lỗi.

Nguồn: Word §3.6; FINAL_RELEASE_REPORT.md; ảnh D043 04_RESULTS_EVIDENCE.png đã che danh tính.

Nguồn thiết kế: `svg_output/14_evidence.svg` · Notes: `notes/14_evidence.md`

## 15. 62/68 video căn chỉnh được trong khảo sát P1.4

Tỷ lệ căn chỉnh không phải độ chính xác chấm nói.

Nguồn: Báo cáo Word §3.1, Bảng 2 · Tổng mẫu N=68; chiều dài các đoạn tỷ lệ theo số bài.

Nguồn thiết kế: `svg_output/15_alignment_results.svg` · Notes: `notes/15_alignment_results.md`

## 16. small.en có WER thấp nhất trên sáu bản tham chiếu

Lỗi chép lời 5,02% không phải tỷ lệ phát âm sai.

Nguồn: Báo cáo Word §3.2; PRETRAINED_MODEL_TOURNAMENT_REPORT.md · Kết quả P2.4, không dùng số P2.2A cũ.

Nguồn thiết kế: `svg_output/16_asr.svg` · Notes: `notes/16_asr.md`

## 17. LOOCV trên 12 bài cho sai lệch quanh nửa điểm

Đây là kết quả phát triển, chưa phải kiểm định độc lập.

Nguồn: Báo cáo Word §3.3; MULTIPA_COMPETITION_SCORER_REPORT.md · 12 lượt: 11 bài hiệu chỉnh, 1 bài dự đoán.

Nguồn thiết kế: `svg_output/17_development.svg` · Notes: `notes/17_development.md`

## 18. Ba bài P2.5 cho thấy ngữ điệu còn lệch nhiều

N=3 chỉ cung cấp tín hiệu sơ bộ, không đủ chứng minh khái quát.

Nguồn: Word §3.4, Bảng 3; P25_FROZEN_MINI_VALIDATION_REPORT.md · Khác mẫu LOOCV, không suy xu hướng thời gian.

Nguồn thiết kế: `svg_output/18_mini_validation.svg` · Notes: `notes/18_mini_validation.md`

## 19. D048 bộc lộ giới hạn của một chỉ số trung bình

Ngữ điệu có sai lệch1,2644 điểm ở một bài; cần xem từng trường hợp.

Nguồn: Word §3.4; P25_FROZEN_MINI_VALIDATION_REPORT.md · Bảng từng bài ở phụ lục trang 27.

Nguồn thiết kế: `svg_output/19_failure_case.svg` · Notes: `notes/19_failure_case.md`

## 20. Mỗi tiêu chí có một mức chứng cứ khác nhau

Hiển thị bằng chứng và từ chối khi chưa đủ cơ sở là một chức năng cần thiết.

Nguồn: Word §3.5–3.6; COMPETITION_FINAL_BUILD_REPORT.md; product_api.py:153–190

Nguồn thiết kế: `svg_output/20_criterion_status.svg` · Notes: `notes/20_criterion_status.md`

## 21. Kiểm định 68 bài đang thực hiện, chưa có bảng chỉ số mới

Chỉ công bố những kết quả đã có số liệu; kết quả đồng thuận68 còn chờ.

Nguồn: Báo cáo Word §3.7 · Trạng thái đang thực hiện, chưa thay các kết quả P2.4D/P2.5 đã công bố.

Nguồn thiết kế: `svg_output/21_pending_validation.svg` · Notes: `notes/21_pending_validation.md`

## 22. Ba giới hạn quyết định cách sử dụng nguyên mẫu

Đánh giá hoạt động phần mềm khác đánh giá độ tin cậy và hiệu quả học tập.

Nguồn: Báo cáo Word §4.2–4.3, Kết luận và kiến nghị · Dữ liệu học sinh cần đồng ý và kiểm soát truy cập.

Nguồn thiết kế: `svg_output/22_limits.svg` · Notes: `notes/22_limits.md`

## 23. Ưu tiên kiểm định trước khi mở rộng tính năng

Mốc tiếp theo là độ tin cậy độc lập và giá trị phản hồi.

Nguồn: Báo cáo Word §4.4–4.6, Kiến nghị · Giữ nguyên cấu hình sau khi mở tập kiểm định.

Nguồn thiết kế: `svg_output/23_roadmap.svg` · Notes: `notes/23_roadmap.md`

## 24. Đã có nguyên mẫu; độ tin cậy cần kiểm định độc lập

Phần mềm hỗ trợ đo đạc và xem lại; giáo viên giữ vai trò đánh giá.

Nguồn: Kết luận theo Báo cáo Word · Kết quả căn chỉnh 62/68 và WER 5,02% chỉ có ý nghĩa trong các phép thử đã nêu.

Nguồn thiết kế: `svg_output/24_conclusion.svg` · Notes: `notes/24_conclusion.md`

## 25. API, lưu trữ và kiểm thử có thể truy vết

Có đường API thật, artifact local và kiểm thử được ghi nhận.

Nguồn: product_api.py:create_app; media_library.py; FINAL_RELEASE_REPORT.md, mục Verification

Nguồn thiết kế: `svg_output/25_api_testing.svg` · Notes: `notes/25_api_testing.md`

## 26. Hai bất biến được thể hiện ngay trong mã nguồn

Dữ liệu gốc và giới hạn score có thể kiểm tra bằng code.

Nguồn: speaking_evidence/runner.py:65–98; speaking_evidence/p24d_multipa.py:304–323

Nguồn thiết kế: `svg_output/26_code_invariants.svg` · Notes: `notes/26_code_invariants.md`

## 27. P2.5: điểm từng bài và sai lệch tuyệt đối

Công khai trường hợp lệch lớn, không che bằng trung bình.

Nguồn: P25_FROZEN_MINI_VALIDATION_REPORT.md, Per-item results · N=3, không công bố tương quan như bằng chứng khái quát.

Nguồn thiết kế: `svg_output/27_p25_records.svg` · Notes: `notes/27_p25_records.md`

## 28. Nguồn ưu tiên và tài liệu kỹ thuật

Mọi con số dự án có nguồn nội bộ; nghiên cứu ngoài không được mượn làm kết quả của dự án.

Nguồn: Nguồn ngoài mô tả phương pháp; mọi số liệu thực nghiệm trên slide là kết quả riêng của dự án.

Nguồn thiết kế: `svg_output/28_references.svg` · Notes: `notes/28_references.md`
