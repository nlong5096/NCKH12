<!-- ppt-master-schema: design-spec/v1 -->
# DUET / SPEAK 15 phút - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | duet_speak_15min |
| Canvas Format | ppt169 — 1280 × 720 |
| Page Count | 12 |
| Primary Language | vi-VN |
| Target Audience | Hội đồng và người nghe không có nền tảng CNTT |
| Communication Intent | Giúp hiểu vấn đề, toàn bộ cách vận hành và ý nghĩa kết quả thực tế trong 15 phút; giữ các giới hạn khoa học. |
| Desired Audience Outcome | Trả lời được hệ thống giải quyết gì, nhận–xử lý–trả gì và bằng chứng hiện có nói lên điều gì. |
| Core Message / Ask / Action | DUET / SPEAK biến video luyện nói thành bằng chứng và gợi ý xem lại; nguyên mẫu đã hoạt động, điểm đánh giá còn cần kiểm định độc lập. |
| Delivery Context | Trình bày trực tiếp 15 phút: mở đầu 2, tổng quan 2, cách hoạt động 5, kết quả 4, kết luận 2 phút. |
| Artifact Afterlife | PPTX tiếp tục chỉnh sửa; notes cho mọi slide; bảng thời gian và bản tóm tắt thay đổi so với 28 slide gốc. |
| Reading Mode | presentation |
| Content Strategy | Rút và tái cấu trúc 28→12; giữ dữ kiện, số thực nghiệm, ảnh có giá trị; bỏ code, stack, ngưỡng và thuật ngữ chuyên sâu. Ví dụ thật D043 đi xuyên suốt; không bịa mốc thời gian hay lỗi của bài. |
| Design Style | custom — giữ nền sáng và nhận diện navy/teal từ PPT gốc, chữ lớn hơn, luồng nhân quả và ảnh thật làm trọng tâm. |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — yêu cầu rõ của người dùng; mỗi notes có thời lượng và mốc bắt đầu/kết thúc |
| Custom Animations | disabled — yêu cầu tránh hiệu ứng phức tạp/trang trí |
| Narration Audio | disabled — người dùng yêu cầu bài trình bày trực tiếp, không yêu cầu audio |
| Created Date | 2026-11-20 |

Revision contract: tiếp tục route Generate của bản đã giao, với phạm vi tái cấu trúc do người dùng yêu cầu; bản gốc giữ nguyên. Quyền chủ động về cấu trúc/bố cục của yêu cầu trước vẫn còn hiệu lực, nay được cụ thể hóa bằng 10–13 slide và năm khối thời gian. Free design, không template, không tạo UI receipts.

Three revised solution intents: (1) **Hành trình D043**: một bài thật xuyên suốt, bốn bước vận hành, sau đó minh chứng và giới hạn; hình ảnh cạnh sơ đồ và typography Arial đồng bộ. Chọn vì đáp ứng trực tiếp ưu tiên ví dụ thực tế và dễ hiểu. (2) **Máy và giáo viên phối hợp**: hai làn trách nhiệm, trình tự chia theo vai trò; ảnh màn hình ở cuối, tiêu đề Cambria/body Arial. (3) **Ba câu hỏi của người nghe**: ba chương vấn đề–cơ chế–bằng chứng, chữ lớn trên các trường tương phản, ảnh và số liệu được đặt thành điểm nhấn độc lập. Cả ba dùng mode=custom và visual_style=custom; không dùng catalog bases. Rendering candidates lần lượt: tư liệu giao diện với chú thích phẳng, sơ đồ hai làn không texture, minh họa các trường dữ liệu bằng đường rõ; vật liệu màn hình/giấy, không chiều sâu giả, tâm thế giải thích thận trọng. Không chọn AI images ở bất kỳ hướng nào. Hướng 1/3 dùng Arial concord, hướng 2 dùng Cambria/Arial contrast; các palette giữ đủ sáu vai trò từ nhận diện nguồn.

## II. Canvas Specification

| Property | Value |
| --- | --- |
| Format | PPT 16:9 |
| Dimensions | 1280 × 720 |
| viewBox | `0 0 1280 720` |
| Margins | 56 px; footer baseline 688 |
| Content Area | x56..1224, y180..644 |

## III. Visual Theme

### Theme Style

- **Mode**: custom
- **Mode Behavior**: Đặt nhu cầu phản hồi trước; giới thiệu trợ lý; theo D043 qua nhận bài, định vị, phân tích giọng gốc, gợi ý; cho xem sản phẩm và số liệu; kết luận giá trị kèm bước kiểm định.
- **Visual style**: custom
- **Visual Style Behavior**: Nền sáng và Arial lớn; trường mở, đường liên kết mảnh và nhãn rõ mang ý nghĩa; ảnh thật có chú thích; các bước được giải thích bằng ba nút nhận–làm–trả; số liệu có cỡ mẫu/đơn vị bên cạnh, cảnh báo vàng nâu; tránh hộp nhỏ chứa đoạn văn.
- **Theme**: Một bài nói đi qua bốn bước; nhãn D043 và bốn bước là motif điều hướng, chuyển trọng tâm theo đúng bước.
- **Tone**: Gần gũi, trực quan, chính xác; giới hạn được nói bằng ngôn ngữ phổ thông.

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | #FAFCFC | Nền |
| Secondary background | #EDF4F5 | Nhóm quy trình |
| Primary | #153448 | Tiêu đề và cấu trúc |
| Accent | #007F7A | Bước hiện tại và bằng chứng chính |
| Secondary accent | #446CA0 | Đối chiếu |
| Body text | #203746 | Chữ nội dung |
| Secondary text | #526875 | Giải thích |
| Divider | #C8D7DC | Đường kẻ |
| Warning | #946017 | Giới hạn |
| Negative | #A44242 | Dừng xử lý |
| Surface | #FFFFFF | Ảnh, vùng số liệu |
| Grid | #E1E9EC | Trục biểu đồ |

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | Sans đậm dễ chiếu | Arial | Arial | sans-serif |
| Body | Sans tiếng Việt, ngắn | Arial | Arial | sans-serif |

- **Title stack**: Arial
- **Body stack**: Arial

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 30 |
| Title | 44 |
| Subtitle | 36 |
| Lead | 32 |
| Annotation | 24 |
| Footnote | 16 |
| Display | 72 |
| Cover | 56 |
| Data | 44 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: Một luận điểm → hình/sơ đồ/số liệu → ý nghĩa → giới hạn.
- **Composition tendency**: Sơ đồ lớn theo trình tự; hình thật được đặt đủ lớn; so sánh chỉ khi cùng đơn vị.
- **Cross-page continuity**: D043 xuất hiện ở phần giải pháp, bước xử lý và ví dụ kết quả; bốn nhãn bước giữ tên nhất quán.
- **Spacing posture**: Thoáng cho trình chiếu; số liệu chỉ một biểu đồ chính mỗi trang.
- **Spacing anchors**: page margin 56; block gap 24; column gutter 36; corner radius 8; body leading 42.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VII. Visualization Reference List

| Page | Family | Template | Usage |
| --- | --- | --- | --- |
| P10 | chart | stacked_bar_chart | Khảo sát căn chỉnh 58+4+6 trên68, đơn vị video |
| P11 | chart | horizontal_bar_chart | Sai lệch điểm trên3bài P2.5, cùng thang0..1 |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| product-home.png | 1440 × 900 | 1.60 | Nhận diện sản phẩm có thật | Screenshot | Ảnh đầy đủ cạnh lời hứa giá trị trên bìa | no-crop | user | Existing | Ảnh có trong PPT gốc slide01; nguồn ui_evidence/final_release/01_HOME.png | none | local |
| product-assessment.png | 1440 × 900 | 1.60 | Người nghe biết nơi nhập bài | Screenshot | Hình đầy đủ chiếm vùng lớn, mô tả hai đầu vào cạnh ảnh | no-crop | user | Existing | Ảnh có trong PPT gốc slide13; ui_evidence/final_release/02_ASSESSMENT.png | none | local |
| product-results.png | 1440 × 4102 | 0.35 | Đầu ra thật của D043 | Screenshot | Giữ một bản toàn ảnh, cạnh một chi tiết phóng to từ cùng nguồn; chú thích native diễn giải | no-crop | user | Existing | ui_evidence/final_release/03_RESULTS_D043.png; mã D043, vùng người học được làm mờ; nguồn thật của cùng ví dụ chứ không dựng lại UI | none | local |

## IX. Content Outline

### Part 1: Mở đầu — 2 phút

#### Slide 01 - Luyện nói cần phản hồi để luyện tiếp
- **Audience move**: Từ xem tên đề tài → hiểu nhu cầu sau một bài luyện nói.
- **Relationships**: order nộp video → cần phản hồi → luyện lại.
- **Title**: Luyện nói cần phản hồi để luyện tiếp
- **Core message**: DUET / SPEAK hỗ trợ biến video thành bằng chứng và gợi ý xem lại.
- **Content**: Tên sản phẩm và tên đề tài đầy đủ giữ ở phụ đề; Trường THPT Chuyên Thăng Long; 11/2026; công cụ hỗ trợ giáo viên, nguyên mẫuT001.
- **Images**: product-home.png
- **Cover impact**: Hook “Một bài nói cần hơn một con số”; ảnh sản phẩm thật và tiêu đề native.
- **Duration**: 60 seconds; 00:00–01:00.

#### Slide 02 - 150 video, một điểm nghẽn phản hồi
- **Audience move**: Từ nhu cầu chung → nhận ra khối lượng thao tác giáo viên.
- **Relationships**: order mở bài → tìm lời → nghe/đối chiếu → nhận xét.
- **Title**: 150 video, một điểm nghẽn phản hồi
- **Core message**: Hỗ trợ thao tác lặp lại để giáo viên tập trung phản hồi.
- **Content**: Khoảng150video/tuần trong bối cảnh5lớp; ước tính báo cáo, chưa đo tiết kiệm thời gian; giọng mẫu có thể lẫn lời học sinh.
- **Duration**: 60 seconds; 01:00–02:00.

### Part 2: Tổng quan giải pháp — 2 phút

#### Slide 03 - Một trợ lý, bốn bước rõ ràng
- **Audience move**: Từ nghĩ máy thay người chấm → hiểu vai trò hỗ trợ và bản đồ cả hệ thống.
- **Relationships**: order nhận bài → tìm lời → phân tích → gợi ý; contrast máy đo và giáo viên quyết định.
- **Title**: Một trợ lý, bốn bước rõ ràng
- **Core message**: Hệ thống tổ chức bằng chứng, giáo viên giữ quyền đánh giá.
- **Content**: Học sinh nộp Duet đã quay; phần mềm tìm lời, đo/chép, trình bày gợi ý và cho xem lại; dành cho giáo viên/học sinh; chạy cục bộ; ví dụthật D043 xuyên suốt; chưa khẳng định cải thiện học tập.
- **Duration**: 120 seconds; 02:00–04:00.

### Part 3: Cách hoạt động — 5 phút

#### Slide 04 - Bắt đầu với một bài thật: D043
- **Audience move**: Từ luồng trừu tượng → biết đầu vào và thao tác cụ thể.
- **Relationships**: link video mẫuT001 và DuetD043 tới bài được nhập để xử lý.
- **Title**: Bắt đầu với một bài thật: D043
- **Core message**: Video mẫu đã biết và video người học tạo thành cặp để so sánh.
- **Content**: Nhận: videoDuetD043 + mẫuT001 có sẵn; Làm: chọn tệp/bài demo; Trả: bài sẵn sàng kiểm tra; chủ đềOne memorable event; ảnhgiao diện thật; không dùng tên/hình nhận diện học sinh.
- **Images**: product-assessment.png
- **Duration**: 60 seconds; 04:00–05:00.

#### Slide 05 - Tìm đúng phần học sinh nói
- **Audience move**: Từ tưởng toàn bộ âm thanh là học sinh → hiểu định vị và điều kiện dừng.
- **Relationships**: order hai video → so sánh vị trí/nội dung → mốc lời học sinh; contrast đủ, cần nghe, dừng.
- **Title**: Tìm đúng phần học sinh nói
- **Core message**: Biết video mẫu giúp hạn chế nhầm giọng mẫu với giọng học sinh.
- **Content**: Nhận: mẫu +Duet; Làm: đặt khớp thời gian, kiểm tra giọng mẫu và chất lượng; Trả: mốc đoạn có thể là lời học sinh; ảnh và âm cùng hỗ trợ, không thuật ngữ fingerprint/GCC; đủ→tiếp tục,cầnkiểmtra→giáoviên,thiếuaudio/khớpkém→dừng. Sơ đồ nguyên lý không bịa timestamps hay khẳng định trạng thái riêngD043.
- **Duration**: 90 seconds; 05:00–06:30.

#### Slide 06 - Phân tích giọng thật, giữ bằng chứng
- **Audience move**: Từ “lọc rồi chấm” → hiểu quay về âm gốc và các quan sát dễ hiểu.
- **Relationships**: order mốc đoạn → lấy âm từDuetgốc → chép/đo/mô hình → bằngchứng; parent cácquan sátgồmchéplời,nhịpnói,phátâm/ngữđiệu.
- **Title**: Phân tích giọng thật, giữ bằng chứng
- **Core message**: Âm đã giảm giọng mẫu chỉ giúp tìm vị trí; đánh giá dùng âm gốc.
- **Content**: Nhận: mốcđoạn+Duetgốc; Làm: lấy đoạn gốc, chép lời và đo; Trả: bảnchép,khoảngdừng,các tiêu chí; không gọiASR/MLR; phát âm/ngữđiệu sơbộ; kháctừkhông tựthànhlỗiphátâm.
- **Duration**: 90 seconds; 06:30–08:00.

#### Slide 07 - Từ bằng chứng đến việc luyện lại
- **Audience move**: Từ nhận một điểm → hiểu việc cụ thể có thể làm tiếp.
- **Relationships**: order bằngchứngD043 → chọn điểmcầnxem → gợiýluyệntập và nghekiểmtra.
- **Title**: Từ bằng chứng đến việc luyện lại
- **Core message**: Gợi ý dựa trên dấu hiệu đo, không tự khẳng định lỗi chưa xác nhận.
- **Content**: Nhận:bằngchứng; Làm:chọnđiểmmạnh/ưutiên; Trả:gợiývànghelại; D043 thật có review prompts classmates,memorable,school; ví dụgợiý đọc lại câu cóclassmates chậm rồi tựnhiên; không khẳngđịnh3từsai; AI tùychọnchỉdiễnđạtlại,khôngđổiđiểm.
- **Duration**: 60 seconds; 08:00–09:00.

### Part 4: Kết quả — 4 phút

#### Slide 08 - Đầu ra thật, có thể mở lại
- **Audience move**: Từ sơ đồ → thấy sản phẩm và kết quả có thật.
- **Relationships**: link toànmànhìnhD043 tới chi tiết tiêu chí vàgợiý; order xem→nghe→luyệnlại.
- **Title**: Đầu ra thật, có thể mở lại
- **Core message**: Nguyên mẫu đã có kết quả, bằng chứng và gợi ý trên giao diện.
- **Content**: ẢnhthậtD043;bảnchép/tiêuchí/gợiý/nghelại/lịchsử; vùngngườihọcđãmờ; nếuxuấthiện4,3/5overall giải thíchđólàchỉsốmôtảchưakiểmđịnh; khôngnhúngvideoriêngtư hoặc tựchạylive.
- **Images**: product-results.png — một bảnđầykhung và chi tiếtphóngto cùngnguồn; giữ đúng đối chiếu.
- **Duration**: 80 seconds; 09:00–10:20.

#### Slide 09 - D043: xem từng mặt của bài nói
- **Audience move**: Từ điểm tổng → đọc riêng từng tiêu chí, biết giới hạn.
- **Relationships**: membership phátâm,trôichảy,ngữđiệu thuộccùngD043; contrast cácđiểmkhôngthayphánđoángiáoviên.
- **Title**: D043: xem từng mặt của bài nói
- **Core message**: Điểm sơ bộ là chỉ dẫn xem lại, không phải kết luận năng lực chung.
- **Content**: Máy P2.5D043phátâm3,7950→3,80; trôichảy4,6100→4,61; ngữđiệu3,9184→3,92; thang1–5, làmtròn2chữsố. Các số này có trongPPTgốcslide27. Giáoviênmứcthamchiếu4/5/4chỉgiảithíchtrongnotes; không tự gánlỗitừ. Intelligibility chưa cóđiểmmáyổnđịnh.
- **Duration**: 80 seconds; 10:20–11:40.

#### Slide 10 - Đã xử lý được phần lớn video thử nghiệm
- **Audience move**: Từ “hoạt động” → hiểu bằng chứng đúng theo từng phép đo.
- **Relationships**: membership58hình+4âm+6chưađạttrong68; contrast khả năngcănchỉnhvàlỗichéplời làhaiphépđokhác.
- **Title**: Đã xử lý được phần lớn video thử nghiệm
- **Core message**: 62/68 chứng minh bước căn chỉnh khả thi trên bộ thử, không phải độ chính xác chấm nói.
- **Content**: 58+4=62/68(91,2%);6dừng/xemlại; WER5,02%trên6bảnchép thamchiếu,diễngiảikhoảng5lỗitrên100từthamchiếu; không94,98%phátâmđúng. N=68T001,N=6chéplời.
- **Visualization**: alignment-outcomes — stacked bar 58,4,6, domain0..68.
- **Native-ready**: alignment-outcomes=yes
- **Duration**: 80 seconds; 11:40–13:00.

### Part 5: Kết luận — 2 phút

#### Slide 11 - Điểm vẫn cần kiểm chứng thêm
- **Audience move**: Từ sốđẹp → hiểu giới hạn mẫu nhỏ và rủi ro từng tiêu chí.
- **Relationships**: contrast sai lệch3tiêuchí; link mẫuhẹp tớigiớihạnkháiquát.
- **Title**: Điểm vẫn cần kiểm chứng thêm
- **Core message**: Ngữ điệu còn lệch hơn, cỡ mẫu chưa cho phép dùng điểm chính thức.
- **Content**: P2.5N3MAEphátâm0,4360,trôichảy0,5133,ngữđiệu0,7027; hiểnthị0,44/0,51/0,70làmtròn,barfullprecision; đơnvịđiểmthang1–5; mộtngườichấm cóAIhỗtrợ; dữliệu1T001,18giữriêngchưakiểmđịnhcuối; chưachứngminhhiệuquảhọctập, khôngCEFR/IELTS. Notes nhắcD048lệch1,2644điểmngữđiệu từPPTgốc19.
- **Visualization**: mini-mae — horizontal bar domain0..1 điểm.
- **Native-ready**: mini-mae=yes
- **Duration**: 60 seconds; 13:00–14:00.

#### Slide 12 - Máy hỗ trợ đo, giáo viên quyết định
- **Audience move**: Từ chi tiết → nhớ3câutrảlời vàbước pháttriển.
- **Relationships**: order vấnđề→cáchlàm→giátrị; order chấmđộclập→18giữriêng→mởrộngvàđogiáodục.
- **Title**: Máy hỗ trợ đo, giáo viên quyết định
- **Core message**: Giá trị hiện có là tổ chức bằng chứng và hướng dẫn xem lại; bước tiếp là kiểm định độc lập.
- **Content**: Giảiquyếtthiếuphảnhồicụthể; dùngmẫutìmlời,rồiphântíchgiọnggốcvàgợiý; nguyêntẫuvậnhành,khôngthaygiáoviên; nextnhiềungườichấmđộclập+18holdout+rộngdữliệuđohiệuquảluyệntập; họcsinhconsent; Q&Angoàikhung15phút.
- **Closing impact**: “Xem lại bằng chứng. Luyện tiếp có định hướng.” là lời kết về hướng tiếp cận, không tuyên bố hiệu quả giáo dục đã đo; ba ý và bước kiểm định.
- **Duration**: 60 seconds; 14:00–15:00.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under notes/
- **Content**: Lời nói tiếng Việt phổ thông, ví dụD043 xuyên suốt, giải thíchýnghĩa thayvìđọclạichữ, chuyểnýtựnhiên. Người dùng yêu cầu thời lượng trong từng notes nên thêm một dòng thời lượng/mốcgiờ trước lời nói; đây là override rõ ràng của quy tắc prose-only/TTS, không tạo narrationaudio. Nguồn và lưuý thốngkê nằm ở cuối notes; không thêm số không có nguồn.
- **Total duration**: 900 seconds; 15:00; Q&A outside this timing.
- **Notes style**: Gợi ý nói trực tiếp, có nhịp chỉ hình/đối chiếu khoảng5–10giây; mốc giờ là kế hoạch diễn tập.
- **Presentation purpose**: Người không chuyên trả lời được vấn đề, hoạt động đầu–cuối và ý nghĩa kết quả.
