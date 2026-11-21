<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- format: ppt169
- viewBox: 0 0 1280 720

## communication
- primary_language: vi-VN
- audience: Giảng viên và hội đồng đánh giá dự án phần mềm, giáo dục.
- objective: Giải thích cơ chế, báo cáo bằng chứng và giới hạn để hội đồng phân biệt nguyên mẫu đã triển khai với độ tin cậy còn cần kiểm định độc lập.
- core_message: Nguyên mẫu tạo bằng chứng luyện nói có truy vết; cần kiểm định độc lập trước khi dùng chấm điểm chính thức.
- consumption_mode: balanced

## mode
- mode: custom
- mode_behavior: Bài toán → dữ liệu → phương pháp → triển khai → kết quả có mẫu số → giới hạn → kiểm định; tiêu đề nêu luận điểm và số liệu giữ nguyên nguồn.

## visual_style
- visual_style: custom
- visual_style_behavior: Nền sáng, Arial đậm dẫn tiêu đề, trường mở và đường kẻ phân cấp; sơ đồ có liên kết rõ; kết quả dùng trục chung; ảnh sản phẩm thật được giữ toàn khung với diễn giải native.

## colors
- background: #FAFCFC
- secondary_bg: #EDF4F5
- primary: #153448
- accent: #007F7A
- secondary_accent: #446CA0
- body_text: #203746
- secondary_text: #526875
- divider: #C8D7DC
- warning: #946017
- negative: #A44242
- positive: #007F7A
- surface: #FFFFFF
- grid: #E1E9EC

## typography
- font_family: Arial
- title_family: Arial
- body_family: Arial
- code_family: Consolas
- body: 26
- title: 40
- subtitle: 32
- lead: 30
- annotation: 22
- footnote: 16
- display: 72
- cover: 56
- code: 20
- data: 28

## icons
- library: none
- inventory: none

## images
- home: images/product-home.png | source=user | crop=no-crop
- assessment: images/product-assessment.png | source=user | crop=no-crop
- evidence: images/product-evidence.png | source=user | crop=no-crop

## page_visualizations
- P15: chart/stacked_bar_chart
- P16: chart/horizontal_bar_chart
- P17: chart/horizontal_bar_chart
- P18: chart/horizontal_bar_chart
- P20: table/feature_matrix
- P27: table/record_table

## page_rhythm
- P01: anchor
- P02: breathing
- P03: dense
- P04: dense
- P05: breathing
- P06: dense
- P07: dense
- P08: dense
- P09: breathing
- P10: dense
- P11: dense
- P12: dense
- P13: dense
- P14: dense
- P15: breathing
- P16: dense
- P17: dense
- P18: dense
- P19: breathing
- P20: dense
- P21: dense
- P22: dense
- P23: dense
- P24: anchor
- P25: dense
- P26: dense
- P27: dense
- P28: dense

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Tuyệt đối không tự bịa số liệu, kết quả thực nghiệm, người dùng, hiệu suất, độ chính xác, tính năng hoặc những tuyên bố chưa được chứng minh. (user)
