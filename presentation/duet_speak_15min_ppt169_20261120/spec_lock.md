<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- format: ppt169
- viewBox: 0 0 1280 720

## communication
- primary_language: vi-VN
- audience: Người không chuyên về CNTT, giáo viên và hội đồng.
- objective: Trong 15 phút, người nghe hiểu vấn đề, theo D043 qua đầu vào–xử lý–đầu ra và diễn giải đúng bằng chứng thực tế cùng giới hạn.
- core_message: Phần mềm hỗ trợ biến video thành bằng chứng và gợi ý xem lại; nguyên mẫu hoạt động, độ tin cậy điểm còn cần kiểm định độc lập.
- consumption_mode: presentation

## mode
- mode: custom
- mode_behavior: Nhu cầu phản hồi → trợ lý bốn bước → hành trình D043 → sản phẩm và số liệu → giới hạn và bước kiểm định; mỗi bước nhận–làm–trả, tránh jargon.

## visual_style
- visual_style: custom
- visual_style_behavior: Giữ nền sáng navy/teal của bản gốc, Arial lớn, trường mở và đường liên kết rõ; ảnh thật được đọc cùng diễn giải native; số liệu gắn cỡ mẫu/đơn vị, cảnh báo bằng vàng nâu.

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
- surface: #FFFFFF
- grid: #E1E9EC

## typography
- font_family: Arial
- title_family: Arial
- body_family: Arial
- body: 30
- title: 44
- subtitle: 36
- lead: 32
- annotation: 24
- footnote: 16
- display: 72
- cover: 56
- data: 44

## icons
- library: none
- inventory: none

## images
- home: images/product-home.png | source=user | crop=no-crop
- assessment: images/product-assessment.png | source=user | crop=no-crop
- results: images/product-results.png | source=user | crop=no-crop

## page_visualizations
- P10: chart/stacked_bar_chart
- P11: chart/horizontal_bar_chart

## page_rhythm
- P01: anchor
- P02: breathing
- P03: dense
- P04: dense
- P05: dense
- P06: dense
- P07: breathing
- P08: dense
- P09: breathing
- P10: dense
- P11: dense
- P12: anchor

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Không tự tạo số liệu, chức năng, kết quả thử nghiệm hoặc tuyên bố vượt quá bằng chứng trong tài liệu gốc. (user)
- Không sử dụng hiệu ứng phức tạp hoặc yếu tố trang trí không phục vụ nội dung. (user)
