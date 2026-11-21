<!-- ppt-master-schema: design-spec/v1 -->
# DUET / SPEAK - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | duet_speak_report |
| Canvas Format | ppt169 — 1280 × 720 |
| Page Count | 28 |
| Primary Language | vi-VN |
| Target Audience | Giảng viên, hội đồng đánh giá dự án phần mềm và nghiên cứu giáo dục |
| Communication Intent | Giải thích bài toán và cơ chế kỹ thuật, báo cáo kết quả có bằng chứng, bảo vệ quyết định thiết kế và xác định bước kiểm định tiếp theo. |
| Desired Audience Outcome | Phân biệt hệ thống đã triển khai với mức độ xác nhận khoa học; hiểu vì sao dùng video tham chiếu và âm thanh gốc; đánh giá đúng các kết quả trên T001. |
| Core Message / Ask / Action | Nguyên mẫu đã tạo được bằng chứng luyện nói có truy vết; độ tin cậy chấm điểm cần kiểm định độc lập trước khi dùng chính thức. |
| Delivery Context | Báo cáo trực tiếp trước hội đồng; dự kiến 18–22 phút cho 24 slide chính, 4 phụ lục dùng khi phản biện. |
| Artifact Afterlife | File PowerPoint có thể chỉnh sửa, ghi chú tiếng Việt và nguồn để kiểm tra, tái tạo. |
| Reading Mode | balanced |
| Content Strategy | Báo cáo Word là nguồn chính; đối chiếu mã nguồn và báo cáo thực nghiệm. Tái cấu trúc thành luận điểm; không đưa số liệu chưa xác minh. |
| Design Style | custom — nền sáng, chữ xanh đậm, bằng chứng xanh ngọc, nhãn cảnh báo vàng nâu; khoảng trắng và đường kẻ phân cấp. |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — explicit user instruction trong yêu cầu đính kèm |
| Custom Animations | disabled — chủ động chọn theo yêu cầu tránh hiệu ứng trang trí |
| Narration Audio | disabled — workflow default |
| Created Date | 2026-11-20 |

Delegated decisions: yêu cầu “Hãy chủ động ra quyết định về cấu trúc, bố cục và thiết kế” áp dụng cho hai giai đoạn kế hoạch. Free design; không dùng template có sẵn. Không tạo biên nhận UI thay người dùng.

Three solution intents, frozen before selection:
1. **Hồ sơ bằng chứng**: dẫn từ bài toán đến cơ chế, kiểm chứng và giới hạn; nền trắng, tiêu đề sans đồng bộ, sơ đồ có đường liên kết rõ. Đây là hướng chọn vì thuận tiện chiếu và kiểm tra học thuật.
2. **Phòng thí nghiệm tín hiệu**: chia theo ba tầng xử lý, nền xanh tối, chữ Arial và mã Consolas, các miền tín hiệu tổ chức bằng làn dọc. Thích hợp giải thích sâu kỹ thuật nhưng nặng cho người xem giáo dục.
3. **Hành trình một bài nộp**: theo một Duet từ tải lên đến phản hồi rồi mở rộng nghiên cứu; tiêu đề Cambria, nội dung Arial, screenshot chiếm phần lớn trang. Cụ thể về sản phẩm nhưng bằng chứng thực nghiệm ít tập trung hơn.
Each direction has mode=custom, visual_style=custom and rendering=custom. Rendering candidates respectively: sơ đồ phẳng bằng đường rõ trên nền sáng; lớp tín hiệu có chiều sâu mỏng trên nền tối; ảnh giao diện nguyên trạng như hồ sơ sử dụng. Line/texture/depth/material/mood respectively: sắc nét/không texture/phẳng/bề mặt giấy/nghiêm túc; mảnh/không texture/lớp nông/màn hình/phân tích; đường chú thích/không texture/phẳng/tư liệu/trực tiếp. No catalog bases used. No generated image selected. Palette candidates follow the same navy/teal semantic identity with light/dark polarity; directions 1/2 use Arial concord, direction 3 uses Cambria/Arial contrast.

## II. Canvas Specification

| Property | Value |
| --- | --- |
| Format | PPT 16:9 |
| Dimensions | 1280 × 720 |
| viewBox | `0 0 1280 720` |
| Margins | 56 px; footer baseline 688 |
| Content Area | x=56..1224, y=156..636 |

## III. Visual Theme

### Theme Style

- **Mode**: custom
- **Mode Behavior**: Bài toán → mục tiêu và dữ liệu → cơ chế → triển khai → kết quả có mẫu số → giới hạn → kiểm định tiếp theo; mỗi tiêu đề là luận điểm và mỗi con số có bối cảnh.
- **Visual style**: custom
- **Visual Style Behavior**: Tiêu đề Arial đậm, nền sáng và trường nội dung mở, đường kẻ mảnh cho phân cấp; vùng xanh nhạt nhóm các tầng pipeline, màu xanh ngọc đặt vào bằng chứng; nhãn vàng nâu báo giới hạn. Các trang kiến trúc dùng liên kết, trang kết quả dùng trục chung, trang sản phẩm dùng ảnh thật kèm chú thích native.
- **Theme**: Từ mốc thời gian đến bằng chứng; motif hai đường song song biểu đạt phát hiện và đánh giá, chỉ lặp khi giúp nhớ bất biến âm thanh gốc.
- **Tone**: Học thuật, chính xác, có thể phản biện.

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | #FAFCFC | Nền trình chiếu |
| Secondary background | #EDF4F5 | Nhóm thông tin |
| Primary | #153448 | Tiêu đề và kiến trúc |
| Accent | #007F7A | Bằng chứng và kết quả chính |
| Secondary accent | #446CA0 | Đối chiếu |
| Body text | #203746 | Nội dung |
| Secondary text | #526875 | Chú thích |
| Divider | #C8D7DC | Phân cấp |
| Warning | #946017 | Giới hạn |
| Negative | #A44242 | Bài không đủ điều kiện |
| Positive | #007F7A | Điều kiện cho phép |
| Surface | #FFFFFF | Bề mặt ảnh/bảng |
| Grid | #E1E9EC | Trục phụ |

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | Sans đậm, rõ khi chiếu | Arial | Arial | sans-serif |
| Body | Sans trung tính, tiếng Việt | Arial | Arial | sans-serif |
| Code | Mono cho source và API | Consolas | Consolas | monospace |

- **Title stack**: Arial
- **Body stack**: Arial
- **Code stack**: Consolas
- **Role rationale**: Code phân biệt mã nguồn/API với lời diễn giải.

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 26 |
| Title | 40 |
| Subtitle | 32 |
| Lead | 30 |
| Annotation | 22 |
| Footnote | 16 |
| Display | 72 |
| Cover | 56 |
| Code | 20 |
| Data | 28 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: Luận điểm → minh chứng lớn → cách hiểu/giới hạn → nguồn.
- **Composition tendency**: Bất đối xứng theo trọng lượng bằng chứng; đối chiếu chỉ dùng vùng cân bằng khi thực sự là hai phía.
- **Cross-page continuity**: Kicker chương và số trang giúp điều hướng; motif hai miền âm thanh tái xuất ở các trang nguyên lý.
- **Spacing posture**: Thay đổi theo page rhythm; phần phụ lục dày hơn.
- **Spacing anchors**: page margin 56; block gap 24; column gutter 36; corner radius 8; body leading 36.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VII. Visualization Reference List

| Page | Family | Template | Usage |
| --- | --- | --- | --- |
| P15 | chart | stacked_bar_chart | 58 hình ảnh + 4 âm thanh + 6 chưa đủ điều kiện trên tổng 68 |
| P16 | chart | horizontal_bar_chart | So sánh micro-WER ba backend |
| P17 | chart | horizontal_bar_chart | MAE ba tiêu chí LOOCV |
| P18 | chart | horizontal_bar_chart | MAE ba tiêu chí mini-validation |
| P20 | table | feature_matrix | Tiêu chí × phương pháp × mức chứng cứ |
| P27 | table | record_table | Từng cặp điểm giáo viên/máy P2.5 |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| product-home.png | 1440 × 900 | 1.60 | Giới thiệu nguyên mẫu thật | Screenshot | Ảnh đầy đủ như minh chứng sản phẩm cạnh tên dự án | no-crop | user | Existing | ui_evidence/final_release/01_HOME.png; ảnh đã bảo vệ danh tính | none | local |
| product-assessment.png | 1440 × 900 | 1.60 | Luồng nhập video và demo | Screenshot | Khung ảnh lớn cạnh ba bước thao tác | no-crop | user | Existing | ui_evidence/final_release/02_ASSESSMENT.png | none | local |
| product-evidence.png | 1440 × 1656 | 0.87 | Bằng chứng có thể kiểm tra | Screenshot | Toàn ảnh bên trái, diễn giải native bên phải | no-crop | user | Existing | ui_evidence/final_release/04_RESULTS_EVIDENCE.png; D043, vùng video mờ | none | local |

## IX. Content Outline

### Part 1: Bài toán và thiết kế nghiên cứu

#### Slide 01 - Từ video Duet đến bằng chứng luyện nói
- **Audience move**: Từ tên đề tài dài → hiểu ngay sản phẩm và đóng góp cốt lõi.
- **Relationships**: link giữa video tham chiếu, bằng chứng và phản hồi.
- **Title**: Từ video Duet đến bằng chứng luyện nói
- **Core message**: Hỗ trợ đánh giá có truy vết từ video tham chiếu và âm thanh gốc.
- **Content**: Tên đầy đủ từ báo cáo; Trường THPT Chuyên Thăng Long; tháng 11/2026; DUET / SPEAK; nguyên mẫu nghiên cứu T001.
- **Images**: product-home.png
- **Cover impact**: Hook “Từ video Duet đến bằng chứng luyện nói”; ảnh sản phẩm thật và tiêu đề native.

#### Slide 02 - Khoảng 150 video mỗi tuần tạo điểm nghẽn phản hồi
- **Audience move**: Từ thấy nhu cầu chung → thấy thao tác giáo viên cần được hỗ trợ.
- **Relationships**: order mở video → tìm lời học sinh → đối chiếu → phản hồi.
- **Title**: Khoảng 150 video mỗi tuần tạo điểm nghẽn phản hồi
- **Core message**: Phép đo lặp lại chiếm thời gian dành cho phản hồi sư phạm.
- **Content**: Khoảng 5 lớp, hơn 150 học sinh theo bối cảnh báo cáo; đây là ước tính khối lượng, chưa đo tiết kiệm thời gian; không đánh đồng với cỡ mẫu 68.

#### Slide 03 - Ba câu hỏi xác định ranh giới nghiên cứu
- **Audience move**: Từ mong đợi chấm nói toàn diện → nhận ra các câu hỏi có thể kiểm chứng.
- **Relationships**: order định vị lời → đối chiếu điểm → điều kiện sử dụng.
- **Title**: Ba câu hỏi xác định ranh giới nghiên cứu
- **Core message**: Đúng vùng lời nói đi trước đúng phép đo và đúng diễn giải.
- **Content**: RQ1 căn chỉnh/định vị; RQ2 sai lệch từng tiêu chí; RQ3 điều kiện cần kiểm chứng; giáo viên đặt chuẩn và quyết định phản hồi.

#### Slide 04 - 68 video cùng T001, giữ riêng 18 bài kiểm định
- **Audience move**: Từ một con số dữ liệu → hiểu vai trò riêng của từng tập.
- **Relationships**: parent 68 gồm 50 phát triển và 18 giữ riêng; membership 12 ratings, 6 transcript, 3 mini-validation trong phát triển.
- **Title**: 68 video cùng T001, giữ riêng 18 bài kiểm định
- **Core message**: Các tập con trả lời các câu hỏi khác nhau và không cộng thành các nhóm độc lập.
- **Content**: Hai lớp 10 Toán/10 Lý; một học sinh một video; T001 controlled reading; 50/18; 12 ratings một người nghe có AI hỗ trợ, 6 transcript xác nhận, 3 bài P2.5; chưa kiểm định cuối 18.

### Part 2: Phương pháp và triển khai

#### Slide 05 - Video mẫu đã biết là lợi thế của bài toán Duet
- **Audience move**: Từ nghĩ chỉ cần nhận dạng hai người nói → hiểu cách dùng thông tin tham chiếu.
- **Relationships**: contrast nhận dạng giọng chung với đối sánh mẫu đã biết; link hình ảnh và âm thanh tới timeline.
- **Title**: Video mẫu đã biết là lợi thế của bài toán Duet
- **Core message**: Tận dụng dữ liệu đã biết để hạn chế nhận nhầm giọng mẫu.
- **Content**: Hình ảnh hỗ trợ timeline; âm thanh kiểm tra giọng mẫu; đối sánh mẫu khác diarization tổng quát; chưa có ablation chứng minh hơn mọi phương pháp khác.

#### Slide 06 - Pipeline tạo mốc thời gian trước khi tạo điểm
- **Audience move**: Từ các mô hình rời rạc → hiểu luồng đầu vào đến phản hồi.
- **Relationships**: order chuẩn hóa → căn chỉnh → kiểm tra chất lượng/VAD → cắt gốc → ASR/scorer → phản hồi.
- **Title**: Pipeline tạo mốc thời gian trước khi tạo điểm
- **Core message**: Các cổng kỹ thuật ngăn đầu vào không phù hợp đi thẳng tới scorer.
- **Content**: FFmpeg; visual/audio alignment; Silero; raw learner crop; small.en + Fluency/MultiPA/Completeness; deterministic feedback; giáo viên xem lại.

#### Slide 07 - Hình ảnh dẫn đường, âm thanh bổ sung căn chỉnh
- **Audience move**: Từ một hộp alignment → hiểu tín hiệu và điều kiện chấp nhận.
- **Relationships**: order thử hình ảnh rồi fallback âm thanh; link kiểm tra chéo khi giọng mẫu còn nghe được.
- **Title**: Hình ảnh dẫn đường, âm thanh bổ sung căn chỉnh
- **Core message**: Hệ thống kết hợp hai miền tín hiệu với điều kiện tin cậy.
- **Content**: Fingerprint xám/gradient; điểm neo bao phủ tối thiểu 70% phần lấy mẫu; GCC-PHAT, waveform, log-Mel; CLEAN_MUTED không ép căn chỉnh âm thanh; tham chiếu code smart_pipeline.py.

#### Slide 08 - GREEN, AMBER, RED là cổng kỹ thuật
- **Audience move**: Từ màu kết quả → hiểu điều kiện xử lý và xem lại.
- **Relationships**: contrast đủ điều kiện, cần review, dừng; link điều kiện đầu vào tới hành động.
- **Title**: GREEN, AMBER, RED là cổng kỹ thuật
- **Core message**: Màu phản ánh khả năng xử lý, không phản ánh năng lực học sinh.
- **Content**: GREEN cho phép theo chính sách; AMBER cần xem xét; RED dừng khi thiếu/không đáng tin; căn chỉnh, leakage, nhiễu và giọng nhỏ; không tự chấm mọi đầu vào.

#### Slide 09 - Phát hiện trên residual, đánh giá từ âm thanh gốc
- **Audience move**: Từ nhầm “tách âm để chấm” → nhớ bất biến dữ liệu quan trọng nhất.
- **Relationships**: link residual tới timestamps rồi tới crop từ raw Duet; contrast detection và scoring.
- **Title**: Phát hiện trên residual, đánh giá từ âm thanh gốc
- **Core message**: Cancellation chỉ định vị, không được làm nguồn chấm phát âm/ngữ điệu.
- **Content**: Linear/AEC3 giảm tham chiếu khi cần; raw source SHA-256; timestamps/mask; RAW_CROPPED; code runner.py và audio.py.

#### Slide 10 - Độ trôi chảy được mô tả bằng nhịp và khoảng dừng
- **Audience move**: Từ điểm trôi chảy khó giải thích → thấy bằng chứng thời gian cụ thể.
- **Relationships**: parent fluency gồm tốc độ, thời lượng có tiếng, khoảng dừng và độ dài chuỗi từ.
- **Title**: Độ trôi chảy được mô tả bằng nhịp và khoảng dừng
- **Core message**: Không dùng tốc độ nói đơn lẻ làm kết luận chất lượng.
- **Content**: Speech rate, articulation rate, phonation ratio, pause ratio, mean length of run; pause từ 0,25 s, long pause từ 0,70 s; chỉ tính trong lượt, không tính khoảng giữa nhiệm vụ; timestamp ASR vẫn có sai số.

#### Slide 11 - MultiPA được tích hợp, hiệu chỉnh trong miền quan sát
- **Audience move**: Từ nghĩ nhóm huấn luyện mô hình mới → hiểu đóng góp tích hợp và calibration.
- **Relationships**: order raw chunks → pretrained MultiPA → mean → frozen mapping; contrast miền đã quan sát và ngoại suy.
- **Title**: MultiPA được tích hợp, hiệu chỉnh trong miền quan sát
- **Core message**: Chọn phương pháp theo từng tiêu chí và không ngoại suy thang điểm chưa có nhãn.
- **Content**: Không fine-tune; chunks tối đa 14,5 s, trung bình không trọng số; Pronunciation support {3,4}; Fluency timing support {4,5}; Prosody support {2,3,4,5}; Intelligibility human only; LOOCV 11→1 trong 12 lượt.

#### Slide 12 - React và FastAPI bao quanh pipeline Python đã khóa
- **Audience move**: Từ stack công nghệ → hiểu ranh giới trách nhiệm triển khai thật.
- **Relationships**: order React → API/job → pipeline → JSON/files → kết quả; membership Streamlit thuộc nghiên cứu.
- **Title**: React và FastAPI bao quanh pipeline Python đã khóa
- **Core message**: Frontend hiển thị, backend tính; luồng nghiên cứu và sản phẩm dùng chung scorer.
- **Content**: React19/TypeScript/Vite; FastAPI local127.0.0.1; FFmpeg/OpenCV/NumPy/SciPy; Silero/faster-whisper/Praat/MultiPA; JSON/media local không có CSDL quan hệ được xác minh; Streamlit giáo viên/nghiên cứu.

#### Slide 13 - Nguyên mẫu có luồng nhập bài, phân tích và xem lại
- **Audience move**: Từ mô tả chức năng → nhận diện sản phẩm thật có thể trình diễn.
- **Relationships**: order chọn video → chờ phân tích → xem kết quả/lịch sử.
- **Title**: Nguyên mẫu có luồng nhập bài, phân tích và xem lại
- **Core message**: Luồng tải tệp cục bộ và demo đã có trong phiên bản final release.
- **Content**: Tải tệp; three frozen demos D043 D064 D048; recent library; lỗi/partial có trạng thái; TikTok real import còn pending; phát triển đánh giá theo lô có cohort workflow, sản phẩm hiển thị từng bài.
- **Images**: product-assessment.png

#### Slide 14 - Kết quả nối tiêu chí với bằng chứng và gợi ý
- **Audience move**: Từ chỉ nhìn điểm → biết cách mở bằng chứng và nghe kiểm tra.
- **Relationships**: link evidence → deterministic feedback → optional wording; contrast score và diễn đạt.
- **Title**: Kết quả nối tiêu chí với bằng chứng và gợi ý
- **Core message**: AI diễn đạt lại không được tạo điểm hay tự thêm lỗi.
- **Content**: Screenshot D043 thật và an toàn; transcript/reading comparison; fluency evidence; feedback local; optional text-only AI với kiểm tra schema; Overall mô tả chưa kiểm định.
- **Images**: product-evidence.png

### Part 3: Kết quả và mức độ chứng cứ

#### Slide 15 - 62/68 video căn chỉnh được trong khảo sát P1.4
- **Audience move**: Từ tỷ lệ 91,2% chung chung → hiểu nó chỉ đo xử lý đầu vào.
- **Relationships**: membership 58 hình ảnh, 4 bổ sung âm thanh, 6 chưa đạt trong 68.
- **Title**: 62/68 video căn chỉnh được trong khảo sát P1.4
- **Core message**: Tỷ lệ căn chỉnh không phải độ chính xác chấm nói.
- **Content**: 58 hình ảnh; 4 âm thanh; 5 căn chỉnh không tin cậy +1 thiếu audio; 91,2% tính 62/68; chưa có accuracy độc lập của learner segmentation trên toàn68.
- **Visualization**: alignment-outcomes — stacked bar, tổng68.
- **Native-ready**: alignment-outcomes=yes

#### Slide 16 - small.en có WER thấp nhất trên sáu bản tham chiếu
- **Audience move**: Từ chọn model theo kích thước → hiểu quyết định dựa trên cùng benchmark.
- **Relationships**: contrast ba ASR trên cùng6 bản.
- **Title**: small.en có WER thấp nhất trên sáu bản tham chiếu
- **Core message**: Lỗi chép lời 5,02% không phải tỷ lệ phát âm sai.
- **Content**: small.en5,02%; distil-large-v3 8,69%; large-v3-turbo8,81%; CPU int8 cùng audio/decode; P2.4 thay kết quả P2.2A cũ5,51%; không suy rộng.
- **Visualization**: asr-wer — horizontal bar domain0..10%.
- **Native-ready**: asr-wer=yes

#### Slide 17 - LOOCV trên 12 bài cho sai lệch quanh nửa điểm
- **Audience move**: Từ điểm đã calibration → hiểu mức sai lệch và thiên lệch nhãn.
- **Relationships**: contrast ba tiêu chí cùng thangMAE.
- **Title**: LOOCV trên 12 bài cho sai lệch quanh nửa điểm
- **Core message**: Đây là kết quả phát triển, chưa phải kiểm định độc lập.
- **Content**: Fluency0,4204; Pronunciation0,4912; Prosody0,5881; thang1–5; một người nghe có AI hỗ trợ; restricted range; đối chiếu fixed baseline còn cần trên tập lớn.
- **Visualization**: development-mae — horizontal bars0..1 điểm.
- **Native-ready**: development-mae=yes

#### Slide 18 - Ba bài P2.5 cho thấy ngữ điệu còn lệch nhiều
- **Audience move**: Từ nhìn MAE đẹp → xem cỡ mẫu và mức lệch.
- **Relationships**: contrast ba tiêu chí cùng thangMAE; order khóa scorer trước đọc ratings.
- **Title**: Ba bài P2.5 cho thấy ngữ điệu còn lệch nhiều
- **Core message**: N=3 chỉ cung cấp tín hiệu sơ bộ, không đủ chứng minh khái quát.
- **Content**: Pronunciation0,4360; Fluency0,5133; Prosody0,7027; cùng mức2/3,2/3,1/3 và within-one3/3,3/3,2/3 theo thứ tự; 07/11/2026; không tái hiệu chỉnh; không so sánh theo thời gian với LOOCV.
- **Visualization**: mini-mae — horizontal bars0..1 điểm.
- **Native-ready**: mini-mae=yes

#### Slide 19 - D048 bộc lộ giới hạn của một chỉ số trung bình
- **Audience move**: Từ chỉ nhìn aggregate → nhận ra một failure case có thật.
- **Relationships**: contrast điểm giáo viên và máy ở D048.
- **Title**: D048 bộc lộ giới hạn của một chỉ số trung bình
- **Core message**: Ngữ điệu có sai lệch1,2644 điểm ở một bài; cần xem từng trường hợp.
- **Content**: Giáo viên3, máy4,2644 Prosody; Pronunciation GV3/máy3,8640; dự đoán phát âm ba bài hẹp3,7609..3,8640; chưa đánh giá được phân biệt rộng.

#### Slide 20 - Mỗi tiêu chí có một mức chứng cứ khác nhau
- **Audience move**: Từ xem mọi điểm ngang nhau → phân biệt dùng được, sơ bộ, chưa có.
- **Relationships**: contrast phương pháp và giới hạn theo tiêu chí.
- **Title**: Mỗi tiêu chí có một mức chứng cứ khác nhau
- **Core message**: Hiển thị bằng chứng và từ chối khi chưa đủ cơ sở là một chức năng cần thiết.
- **Content**: Fluency timing preliminary; Pronunciation MultiPA preliminary; Prosody MultiPA error higher; Completeness ASR-assisted139 từ; Intelligibility human only; Overall equal-weight product composite chưa validated.
- **Visualization**: criterion-status — bảng6 tiêu chí × phương pháp × giới hạn.
- **Native-ready**: criterion-status=yes

#### Slide 21 - Kiểm định 68 bài đang thực hiện, chưa có bảng chỉ số mới
- **Audience move**: Từ kỳ vọng kết quả đầy đủ → hiểu trạng thái đúng trong báo cáo mới nhất.
- **Relationships**: order khóa cấu hình → giáo viên chấm mù → so sánh riêng dev/holdout.
- **Title**: Kiểm định 68 bài đang thực hiện
- **Core message**: Chỉ công bố những kết quả đã có số liệu; kết quả đồng thuận68 còn chờ.
- **Content**: Word mục3.7 ghi đã chấm thêm10 nhưng chưa công bố metrics; không biến nhận xét tương đồng thành số; MAE, bias, exact/within-one, ICC(2,1), QWK dự kiến; Pearson bổ sung không thay đồng thuận; 18 giữ riêng là bằng chứng chính.

### Part 4: Bàn luận và kết luận

#### Slide 22 - Ba giới hạn quyết định cách sử dụng nguyên mẫu
- **Audience move**: Từ hạn chế liệt kê → hiểu giới hạn suy luận và ứng dụng.
- **Relationships**: link dữ liệuhẹp→giới hạnkháiquát, nhãnhẹp→giớihạnchấm, chưa thử sưphạm→chưa kết luận tácđộng.
- **Title**: Ba giới hạn quyết định cách sử dụng nguyên mẫu
- **Core message**: Đánh giá hoạt động phần mềm khác đánh giá độ tin cậy và hiệu quả học tập.
- **Content**: Một bàiT001; N12+3 một rater assisted và thiếu mức thấp; chưa final holdout; chưa before-after/control; không CEFR/IELTS; riêng tư cần consent và kiểm soát dữ liệu.

#### Slide 23 - Ưu tiên kiểm định trước khi mở rộng tính năng
- **Audience move**: Từ muốn thêm model → hiểu thứ tự thu bằng chứng hợp lý.
- **Relationships**: order freeze+18holdout → nhiềungườichấm → mởrộngdữliệu → thửnghiệmsưphạm.
- **Title**: Ưu tiên kiểm định trước khi mở rộng tính năng
- **Core message**: Mốc tiếp theo là độ tin cậy độc lập và giá trị phản hồi.
- **Content**: Chấm độc lập ít nhất2 giáo viên; nhiều bài/thiết bị; nhật ký luyện lại, pre-post; MAE≤0,5 và≥80% lệch≤1 là mục tiêu báo cáo chưa đạt xác nhận; consent/access/removal.

#### Slide 24 - Đã có nguyên mẫu; độ tin cậy cần kiểm định độc lập
- **Audience move**: Từ nhiều chi tiết → nhớ đóng góp và bước cần hỗ trợ.
- **Relationships**: contrast đã đạt và cần xác nhận; link giáo viên tới quyết định dùng.
- **Title**: Đã có nguyên mẫu; độ tin cậy cần kiểm định độc lập
- **Core message**: Phần mềm hỗ trợ đo đạc và xem lại; giáo viên giữ vai trò đánh giá.
- **Content**: Reference-aware; raw-source evidence; có demo và local scoring; kết quả62/68 và WER5,02% đúng phạm vi; đề nghị chấm độc lập, giữ18 cho kiểm định cuối; Q&A.
- **Closing impact**: Bằng chứng trước, kết luận sau. Takeaway native lớn và lời mời phản biện cụ thể.

### Part 5: Phụ lục phản biện

#### Slide 25 - API, lưu trữ và kiểm thử có thể truy vết
- **Audience move**: Từ sơ đồ khái quát → kiểm tra implementation và độ tin cậy phần mềm.
- **Relationships**: order upload→job→result; contrast kiểm thử chức năng với validity giáo dục.
- **Title**: API, lưu trữ và kiểm thử có thể truy vết
- **Core message**: Có đường API thật, artifact local và kiểm thử được ghi nhận.
- **Content**: POST/api/media/upload, POST/api/media/{id}/assess, GET/api/jobs/{id}, GET/api/media/{id}/result; JSON/files hashes; new media research_membership=false; report13/11 ghi193passed2skipped +5frontend+8e2e, là kết quả lưu sẵn không chạy lại trong tác vụ tạo slide.

#### Slide 26 - Hai bất biến được thể hiện ngay trong mã nguồn
- **Audience move**: Từ cam kết trong báo cáo → thấy căn cứ ở hàm thật.
- **Relationships**: contrast source raw với residual; link output mapping tới miền nhãn.
- **Title**: Hai bất biến được thể hiện ngay trong mã nguồn
- **Core message**: Dữ liệu gốc và giới hạn score có thể kiểm tra bằng code.
- **Content**: runner.py source=Path(row["duet_path"]), require_raw_source(source), prepare_turn_audio(source,...); p24d_multipa.apply_fitted_mapping clips low/high; trích chọn lọc từ mã hiện tại, ellipsis là bỏ dòng.

#### Slide 27 - P2.5: điểm từng bài và sai lệch tuyệt đối
- **Audience move**: Từ aggregate → kiểm tra chín cặp điểm ban đầu.
- **Relationships**: membership3tiêu chí trong3bài.
- **Title**: P2.5: điểm từng bài và sai lệch tuyệt đối
- **Core message**: Công khai trường hợp lệch lớn, không che bằng trung bình.
- **Content**: D064(P4/3,7609/0,2391,F4/4,7100/0,7100,R3/3,7622/0,7622); D043(P4/3,7950/0,2050,F5/4,6100/0,3900,R4/3,9184/0,0816); D048(P3/3,8640/0,8640,F4/4,4400/0,4400,R3/4,2644/1,2644); column order GV/máy/|sai lệch|.
- **Visualization**: p25-records — bảng9bản ghi×5trường.
- **Native-ready**: p25-records=yes

#### Slide 28 - Nguồn ưu tiên và tài liệu kỹ thuật
- **Audience move**: Từ nghe tuyên bố → biết nơi kiểm tra nội dung và phương pháp.
- **Relationships**: parent nguồn gồm báo cáo chính, artifact repo, nghiên cứu mô hình.
- **Title**: Nguồn ưu tiên và tài liệu kỹ thuật
- **Core message**: Mọi con số dự án có nguồn nội bộ; nghiên cứu ngoài không được mượn làm kết quả của dự án.
- **Content**: Báo cáo Word11/2026; P2.4/P2.4D/P2.5 và final release13/11; Chen,Yu,Hirschberg2024MultiPA ISCA; Radfordetal2023Whisper PMLR; SileroVAD official; sửa đối chiếu tên tài liệu thay số[2]/[3] thiếu nhất quán trongWord; không đưa augmentation chưa có kiểm chứng.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under notes/
- **Content**: Tiếng Việt tự nhiên, giải thích cơ chế và giới hạn, nguồn chính xác theo mục Word hoặc đường dẫn repo, diễn giải ý nghĩa thay vì đọc lại chữ; chuyển tiếp; nhắc không dùng quan hệ nhân quả hoặc validity chưa đo. Mỗi slide khoảng80–160 từ, phụ lục ngắn hơn. Không đọc đường dẫn máy riêng hay dữ liệu học sinh.
- **Total duration**: 18–22 phút cho24slidechính; phụlục tùy hỏi.
- **Notes style**: Trang trọng nhưng dễ nói.
- **Presentation purpose**: Báo cáo dự án có bằng chứng và hỗ trợ phản biện kỹ thuật.
