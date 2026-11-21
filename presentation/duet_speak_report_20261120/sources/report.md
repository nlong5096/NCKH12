__TRƯỜNG THPT CHUYÊN THĂNG LONG__

__CUỘC THI KHOA HỌC KỸ THUẬT CẤP CƠ SỞ__

__NĂM HỌC 2026 – 2027__

__BÁO CÁO KẾT QUẢ THỰC HIỆN DỰ ÁN__

__PHẦN MỀM HỖ TRỢ ĐÁNH GIÁ LUYỆN NÓI TIẾNG ANH ĐA PHƯƠNG THỨC: KHAI THÁC VIDEO THAM CHIẾU VÀ ĐỐI SÁNH BẰNG CHỨNG GIỌNG NÓI__

__Lĩnh vực: Phần mềm tin học và chuyển đổi số__

__Tháng 11 năm 2026__

MỤC LỤC

Contents

[PHẦN MỞ ĐẦU	1](\#\_Toc245477841)

[1. Lý do chọn đề tài	1](\#\_Toc245477842)

[2. Mục tiêu và câu hỏi nghiên cứu	1](\#\_Toc245477843)

[3. Phạm vi, giả thuyết và đóng góp dự kiến	2](\#\_Toc245477844)

[CHƯƠNG 1. TỔNG QUAN VÀ CƠ SỞ NGHIÊN CỨU	3](\#\_Toc245477845)

[1.1. Phản hồi trong luyện nói	3](\#\_Toc245477846)

[1.2. Đặc thù của video Duet	3](\#\_Toc245477847)

[1.3. Vai trò và giới hạn của AI	3](\#\_Toc245477848)

[CHƯƠNG 2. ĐỐI TƯỢNG VÀ PHƯƠNG PHÁP NGHIÊN CỨU	4](\#\_Toc245477849)

[2.1. Đối tượng, dữ liệu và cách tổ chức	4](\#\_Toc245477850)

[2.2. Tập kiểm định giữ riêng	4](\#\_Toc245477851)

[2.3. Giới hạn của bộ dữ liệu	4](\#\_Toc245477852)

[2.4. Quy trình xử lý một video Duet	4](\#\_Toc245477853)

[2.5. Phương pháp và cách thực hiện	5](\#\_Toc245477854)

[2.6. Thiết kế đánh giá	6](\#\_Toc245477855)

[2.7. Lưu vết thực nghiệm và khả năng tái kiểm tra	6](\#\_Toc245477856)

[2.8. Đạo đức nghiên cứu và bảo vệ dữ liệu học sinh	6](\#\_Toc245477857)

[CHƯƠNG 3. KẾT QUẢ NGHIÊN CỨU	7](\#\_Toc245477858)

[3.1. Kết quả căn chỉnh video đầu vào	7](\#\_Toc245477859)

[3.2. Độ chính xác của công cụ chép lời	8](\#\_Toc245477862)

[3.3. Sai lệch giữa điểm máy và người đánh giá trên dữ liệu phát triển	8](\#\_Toc245477863)

[3.4. Kiểm tra trên ba bài chưa dùng để lựa chọn cách chấm	8](\#\_Toc245477864)

[3.5. Các tiêu chí trong nguyên mẫu và mức độ chứng cứ	9](\#\_Toc245477865)

[3.6. Sản phẩm DUET / SPEAK	10](\#\_Toc245477866)

[CHƯƠNG 4. BÀN LUẬN VÀ HƯỚNG HOÀN THIỆN	11](\#\_Toc245477867)

[4.1. Những kết quả đã đạt được	11](\#\_Toc245477868)

[4.2. Hạn chế	11](\#\_Toc245477869)

[4.3. Lưu ý khi diễn giải các số liệu chính	11](\#\_Toc245477870)

[4.4. Kế hoạch hoàn thiện	12](\#\_Toc245477871)

[4.5. Chỉ tiêu cho lần kiểm định tiếp theo	12](\#\_Toc245477872)

[4.6. Tính khả thi trong trường học	12](\#\_Toc245477873)

[KẾT LUẬN VÀ KIẾN NGHỊ	13](\#\_Toc245477874)

[1. Kết luận	13](\#\_Toc245477875)

[2. Kiến nghị	13](\#\_Toc245477876)

[TÀI LIỆU THAM KHẢO	14](\#\_Toc245477877)

DANH MỤC CHỮ VIẾT TẮT VÀ KÝ HIỆU

__AI__	Trí tuệ nhân tạo

__ASR__	Nhận dạng tiếng nói tự động (chuyển lời nói thành chữ)

__WER__	Tỷ lệ lỗi từ (Word Error Rate)

__MAE__	Sai lệch tuyệt đối trung bình (Mean Absolute Error)

__LOOCV__	Kiểm tra chéo lần lượt để riêng từng bài (Leave\-One\-Out Cross\-Validation)

__MultiPA__	Mô hình đánh giá phát âm đa nhiệm đã huấn luyện sẵn \[2\]

__small.en__	Phiên bản tiếng Anh cỡ nhỏ của mô hình nhận dạng tiếng nói Whisper \[3\]

__T001__	Mã bài đọc mẫu dùng trong nghiên cứu (chủ đề “One memorable event”)

__P1.4__	Đợt khảo sát kỹ thuật căn chỉnh 68 video

__P2.4__	Thử nghiệm so sánh công cụ chép lời trên 6 bản chép tham chiếu

__P2.5__	Kiểm tra nhỏ trên 3 bài (D064, D043, D048) sau khi khóa cấu hình, ngày 07/11/2026

DANH MỤC BẢNG

Bảng 1. Các nội dung được xem xét	2

Bảng 2. Kết quả khảo sát căn chỉnh 68 video (P1.4)	6

Bảng 3. Kết quả kiểm tra P2.5 trên 3 bài (N = 3)	8

Bảng 4. Tính năng nguyên mẫu và mức độ chứng cứ	8

Bảng 5. Kế hoạch kiểm chứng dự kiến	11

DANH MỤC HÌNH

Hình 1. Phân chia 68 video của bài T001	3

Hình 2. Sáu bước từ video đã quay đến phản hồi luyện tập	3

Hình 3. Tỷ lệ lỗi từ của ba cách nhận dạng (P2.4)	7

Hình 4. Độ lệch trung bình ở hai bước kiểm tra	8

TÓM TẮT DỰ ÁN

Luyện nói tiếng Anh theo video mẫu bằng tính năng Duet trên TikTok đã được công nhận là sáng kiến có hiệu quả áp dụng, khả năng nhân rộng cấp tỉnh. Khi phương pháp được áp dụng cho nhiều lớp, mỗi tuần giáo viên có thể phải mở, nghe và phản hồi khoảng 150 video, phần lớn thời gian dành cho các thao tác lặp lại. Dự án xây dựng phần mềm hỗ trợ giáo viên đánh giá các video luyện nói này theo lô.

Điểm khác biệt của giải pháp là tận dụng chính video mẫu đã biết để xác định phần lời học sinh trong bản Duet, thay vì để phần mềm tự đoán tất cả các giọng nói từ đầu. Hệ thống kiểm tra chất lượng bản ghi, lấy âm thanh gốc để trích xuất bằng chứng có mốc thời gian, chỉ đưa ra điểm ở những tiêu chí đã có cơ sở thực nghiệm và đánh dấu các bài cần giáo viên xem lại. Phần mềm không thay giáo viên chấm bài; giáo viên vẫn là người đặt chuẩn đánh giá và quyết định phản hồi.

Tính đến tháng 11/2026, nhóm đã xây dựng nguyên mẫu có thể tiếp nhận video, phân tích một bài đọc theo mẫu và trình bày kết quả. Trong khảo sát kỹ thuật ban đầu, 62/68 video căn chỉnh được với video mẫu. Công cụ chuyển lời nói thành chữ đạt tỷ lệ lỗi từ 5,02% trên sáu bài tham chiếu. Sai lệch điểm so với người đánh giá đã được đo trên 12 bài phát triển và ba bài kiểm tra nhỏ; chấm tiếp thêm 10 bài cho thấy điểm máy và điểm giáo viên tương đồng khá tốt. Nhóm đang chấm toàn bộ 68 video để đánh giá mức độ đồng thuận giữa người và máy chấm; kết quả sẽ được bổ sung trong buổi báo cáo chính thức.

Các kết quả hiện có mang ý nghĩa bước đầu, chưa đủ để khẳng định độ chính xác với nhiều đối tượng học sinh hoặc nhiều dạng bài nói.

# <a id="_Toc245461537"></a><a id="_Toc245467116"></a><a id="_Toc245476939"></a><a id="_Toc245477841"></a>PHẦN MỞ ĐẦU

## <a id="_Toc245461538"></a><a id="_Toc245467117"></a><a id="_Toc245476940"></a><a id="_Toc245477842"></a>1. Lý do chọn đề tài

Sáng kiến “Sử dụng tính năng Duet trên nền tảng TikTok nhằm phát triển kỹ năng nói tiếng Anh cho học sinh lớp 10 Pháp Trường Trung học phổ thông Chuyên Thăng Long \- Đà Lạt” đã được Chủ tịch Ủy ban nhân dân tỉnh Lâm Đồng công nhận có hiệu quả áp dụng, khả năng nhân rộng, phạm vi ảnh hưởng cấp tỉnh đợt II năm 2025, theo Quyết định số 457/QĐ\-UBND ngày 03/02/2026 (Ủy ban nhân dân tỉnh Lâm Đồng, 2026). Vấn đề đặt ra là làm thế nào để duy trì và nhân rộng phương pháp khi số bài nộp tăng lên.

Điểm nghẽn của hình thức này nằm ở khâu đánh giá. Một giáo viên phụ trách khoảng 5 lớp với hơn 150 học sinh; chỉ một bài nộp mỗi tuần đã tạo ra khoảng 150 video cần mở, nghe, đối chiếu với văn bản mẫu và phản hồi. Phần lớn thời gian bị dành cho các thao tác lặp lại như tìm đoạn học sinh nói, nghe lại chỗ ngập ngừng hay kiểm tra bài có đọc đủ hay không, thay vì cho nhận xét sư phạm. Hệ quả là phản hồi dễ bị chậm, chung chung hoặc chỉ còn một con số điểm.

Tự động hóa khâu này không đơn giản. Một video Duet hoàn chỉnh có thể chứa đồng thời lời mẫu, lời học sinh, khoảng lặng, nhạc nền, tiếng ồn và đoạn chồng tiếng. Nếu đưa toàn bộ âm thanh vào một mô hình, phần mềm dễ nhận nhầm lời mẫu là lời học sinh, khiến mọi phép đo về số từ, tốc độ hay phát âm sai ngay từ đầu. Vì vậy, xác định “học sinh nói ở đâu” phải đi trước đánh giá “học sinh nói như thế nào”. Dự án có lợi thế là biết trước video mẫu, nên có thể dùng chính video này làm tham chiếu thay vì để máy tự đoán các giọng nói.

Bên cạnh đó, các dịch vụ chấm nói thương mại thường tính phí thuê bao hoặc theo thời lượng âm thanh, đồng thời yêu cầu gửi giọng nói và hình ảnh học sinh ra máy chủ bên ngoài. Điều này ảnh hưởng tới khả năng duy trì lâu dài ở trường phổ thông. Đề tài ưu tiên các thành phần mã nguồn mở, chạy cục bộ để kiểm soát dữ liệu và giảm phụ thuộc vào API. Cách triển khai này vẫn có chi phí máy tính, điện, lưu trữ và bảo trì, nên không đồng nghĩa với hoàn toàn miễn phí.

Từ những lý do trên, nhóm lựa chọn xây dựng một phần mềm hỗ trợ giáo viên đánh giá bài luyện nói từ video mẫu và video học sinh nộp. Phần mềm không thay giáo viên chấm bài, mà đảm nhận phần đo đạc lặp lại để giáo viên dành thời gian cho việc phán đoán và phản hồi sư phạm.

## <a id="_Toc245461539"></a><a id="_Toc245467118"></a><a id="_Toc245476941"></a><a id="_Toc245477843"></a>2. Mục tiêu và câu hỏi nghiên cứu

__Mục tiêu tổng quát. __Xây dựng và đánh giá bước đầu một phần mềm hỗ trợ giáo viên đánh giá bài luyện nói tiếng Anh dạng video Duet . Phần mềm khai thác video mẫu để xác định đúng lời học sinh, kiểm tra chất lượng bản ghi, trích xuất bằng chứng có thể truy vết từ âm thanh gốc và tổng hợp các bài cần giáo viên xem lại.

__Mục tiêu cụ thể.__

(1) Xác định lời học sinh: căn chỉnh video Duet với video mẫu, tìm các đoạn học sinh nói và hạn chế nhầm lẫn với giọng mẫu còn lẫn trong bản ghi.

(2) Kiểm tra chất lượng đầu vào: phát hiện video không có tiếng, bị cắt hoặc lệch thời gian, độ khớp thấp hoặc còn sót giọng mẫu; với những trường hợp này, hệ thống dừng hoặc cảnh báo thay vì vẫn đưa ra điểm.

(3) Trích xuất bằng chứng có thể truy vết: tạo bản chép lời có mốc thời gian, đo tốc độ nói, khoảng dừng, mức độ đọc đủ nội dung và một số dấu hiệu phát âm, ngữ điệu từ âm thanh gốc. Mỗi nhận định đều gắn với mốc thời gian để giáo viên có thể nghe lại và kiểm chứng.

(4) Xử lý theo lô và tổng hợp: tiếp nhận nhiều bài nộp cùng lúc, tổng hợp kết quả và đánh dấu những bài cần giáo viên ưu tiên xem lại.

(5) Đánh giá bước đầu: đo tỷ lệ căn chỉnh thành công, tỷ lệ lỗi từ của công cụ chép lời và sai lệch giữa kết quả của máy với người đánh giá; từ đó xác định những điều kiện cần kiểm chứng thêm.

__Phân công giữa máy và giáo viên. __Máy đảm nhiệm các phép đo có thể lặp lại như mốc thời gian, tốc độ nói, khoảng dừng và tín hiệu bất thường. Giáo viên đặt chuẩn đánh giá, hiệu chuẩn kết quả và quyết định phản hồi sư phạm. Hệ thống không ép mọi đầu vào thành một điểm số; điểm chỉ được đưa ra ở những tiêu chí đã có cơ sở thực nghiệm, các tiêu chí còn lại được trình bày dưới dạng bằng chứng kèm mức tin cậy. Các hướng kỹ thuật chính gồm xử lý tín hiệu số, xử lý âm thanh/video, nhận dạng tiếng nói và trí tuệ nhân tạo ứng dụng trong giáo dục.

__Câu hỏi nghiên cứu. __(1) Khi biết trước video mẫu, hệ thống căn chỉnh và xác định phần lời học sinh trong video Duet chính xác đến mức nào? (2) Các phép đo và điểm đã hiệu chuẩn của máy sai lệch bao nhiêu so với người đánh giá ở từng tiêu chí? (3) Cần kiểm chứng thêm những điều kiện gì trước khi giáo viên sử dụng kết quả này trong hoạt động dạy học?

## <a id="_Toc245461540"></a><a id="_Toc245467119"></a><a id="_Toc245476942"></a><a id="_Toc245477844"></a>3. Phạm vi, giả thuyết và đóng góp dự kiến

Ở giai đoạn hiện tại, dự án tập trung vào một bài đọc có văn bản mẫu T001, chưa đánh giá toàn diện năng lực giao tiếp tự do hoặc trình độ theo một chứng chỉ quốc tế. Nhóm dự kiến rằng cách so sánh với video gốc sẽ giúp giảm nhầm giọng mẫu với giọng học sinh; việc đo từng tiêu chí riêng sẽ tạo phản hồi hữu ích hơn một điểm tổng duy nhất. Những nhận định này cần được kiểm tra bằng dữ liệu độc lập, không được coi là kết luận cuối cùng chỉ vì nguyên mẫu đã hoạt động.

Đóng góp trước mắt của nhóm là thiết kế quy trình phù hợp với đặc điểm Duet, tổ chức dữ liệu nghiên cứu có tập kiểm định giữ riêng và xây dựng nguyên mẫu phản hồi có cảnh báo khi bằng chứng chưa chắc chắn. Các mô hình nhận dạng/chấm tiếng nói được sử dụng là công cụ đã có; nhóm không tự nhận đã tạo ra mô hình nền hoàn toàn mới.

<a id="_Toc245461541"></a>

# <a id="_Toc245467120"></a><a id="_Toc245476943"></a><a id="_Toc245477845"></a>CHƯƠNG 1. TỔNG QUAN VÀ CƠ SỞ NGHIÊN CỨU

## <a id="_Toc245461542"></a><a id="_Toc245467121"></a><a id="_Toc245476944"></a><a id="_Toc245477846"></a>1.1. Phản hồi trong luyện nói

Một nhận xét như “em nói chưa tốt” có thể đúng nhưng khó giúp học sinh sửa bài. Ngược lại, “ở giữa bài em có khoảng dừng khá dài; hãy nghe lại và đọc liền hai câu này” chỉ ra được hành động tiếp theo. Vì vậy, nhóm chọn cách mô tả bài nói qua từng khía cạnh dễ quan sát, thay vì chỉ công bố một con số tổng quát. Quan điểm về phản hồi hướng người học đến bước cải thiện tiếp theo cũng phù hợp với các nghiên cứu về đánh giá vì sự tiến bộ của người học \[1\].

Bảng 1. Các nội dung được xem xét

| Khía cạnh | Câu hỏi dễ hiểu đối với học sinh |
| --- | --- |
| Độ trôi chảy | Em có nói tương đối liên tục, hay dừng và ngập ngừng nhiều? |
| Phát âm | Các từ và âm em đọc có rõ và gần với cách đọc mong muốn không? |
| Ngữ điệu | Em có nhấn, ngắt và lên xuống giọng phù hợp với câu không? |
| Đọc đủ nội dung | Bài đọc có dấu hiệu bỏ sót phần nào của văn bản mẫu không? |
| Mức dễ hiểu | Người nghe có hiểu lời em nói khi không nhìn văn bản không? |

Ghi chú: “Đọc đủ nội dung” hiện được hỗ trợ bởi bản chép tự động; “mức dễ hiểu” chưa có điểm máy được xác nhận.

## <a id="_Toc245461543"></a><a id="_Toc245467122"></a><a id="_Toc245476945"></a><a id="_Toc245477847"></a>1.2. Đặc thù của video Duet

Ở một bản ghi âm thông thường, chương trình chỉ cần xác định khoảng có tiếng nói. Với Duet, một khó khăn khác xuất hiện: giọng trong video mẫu đôi lúc cũng được phát lại cùng bản quay của học sinh. Dự án có lợi thế là biết trước video mẫu. Hệ thống có thể so sánh hai video để tìm độ lệch thời gian và nhận ra phần giọng mẫu còn trộn trong bản Duet. Cách làm này có cơ sở rõ ràng hơn việc đoán “người nói A, người nói B” trong toàn bộ âm thanh mà không sử dụng thông tin đã biết.

Bước giảm ảnh hưởng của giọng mẫu chỉ dùng để phát hiện các khoảng thời gian có thể là lời học sinh. Sau khi tìm được vị trí đó, chương trình lấy âm thanh từ bản Duet gốc để đánh giá. Nguyên tắc này giúp tránh việc âm thanh bị lọc quá mạnh rồi làm sai đặc điểm phát âm hoặc ngữ điệu cần đo.

## <a id="_Toc245461544"></a><a id="_Toc245467123"></a><a id="_Toc245476946"></a><a id="_Toc245477848"></a>1.3. Vai trò và giới hạn của AI

Nhận dạng lời nói tự động \[3\] giúp tạo bản chép để đối chiếu với đoạn đọc mẫu; các mô hình đánh giá tiếng nói \[2\] có thể cung cấp một số dấu hiệu về cách đọc. Tuy nhiên, AI vẫn có thể nghe nhầm khi giọng nhỏ, nhạc lớn hoặc có hai người cùng nói. Một từ bị chép sai chưa chắc do học sinh phát âm sai. Vì vậy, nhóm coi kết quả AI là bằng chứng hỗ trợ, đặt cạnh việc nghe và đánh giá của con người, thay vì thay thế hoàn toàn người chấm.

<a id="_Toc245461545"></a><a id="_Toc245467124"></a><a id="_Toc245476947"></a><a id="_Toc245477849"></a>

# CHƯƠNG 2. ĐỐI TƯỢNG VÀ PHƯƠNG PHÁP NGHIÊN CỨU

## <a id="_Toc245461546"></a><a id="_Toc245467125"></a><a id="_Toc245476948"></a><a id="_Toc245477850"></a>2.1. Đối tượng, dữ liệu và cách tổ chức

Bộ dữ liệu gốc gồm 68 video Duet theo bài đọc tiếng Anh T001. Mỗi học sinh tham gia thuộc hai lớp 10 Toán và 10 Lý nộp một video. Nhóm gán mã cho từng video, dùng 50 video để phát triển và thử nghiệm, đồng thời giữ riêng 18 video cho đợt kiểm định cuối. Do số lượng video gốc còn hạn chế, nhóm áp dụng tăng cường dữ liệu (data augmentation) để tạo thêm các biến thể từ dữ liệu đã thu thập.

![](report\_files/image\_001.png)

Hình 1. Phân chia 68 video của bài T001. Nguồn: số liệu của nhóm nghiên cứu.

Trong nhóm phát triển, 12 bài có đánh giá theo tiêu chí do một người đánh giá nghe và xác nhận, với sự hỗ trợ của AI trong quá trình làm việc. Ba bài khác (D064, D043, D048) được dùng cho kiểm tra sơ bộ sau khi cấu hình đã được khóa. Bản chép lời của sáu bài được con người xác nhận để so sánh công cụ chuyển lời nói thành chữ. Đây là các tập bằng chứng phục vụ những câu hỏi khác nhau; 

## <a id="_Toc245461547"></a><a id="_Toc245467126"></a><a id="_Toc245476949"></a><a id="_Toc245477851"></a>2.2. Tập kiểm định giữ riêng

Nếu sử dụng cả 68 bài để chọn phương pháp, những kết quả sau đó trên chính 68 bài ấy có thể lạc quan hơn mức thực tế. Vì vậy, 18 bài được giữ riêng: nhóm chỉ nên mở chúng một lần để đánh giá cuối, sau khi đã quyết định xong quy trình và tiêu chí. 

## <a id="_Toc245461548"></a><a id="_Toc245467127"></a><a id="_Toc245476950"></a><a id="_Toc245477852"></a>2.3. Giới hạn của bộ dữ liệu

Cả 68 video hiện cùng sử dụng một bài đọc mẫu. Người học có thể tập trước và chọn bản quay phù hợp, khiến các bài được chấm có điểm tập trung ở mức khá hoặc cao. Vì vậy, bộ dữ liệu đủ để nghiên cứu một quy trình cụ thể, nhưng còn hạn chế khi suy rộng cho bài nói tự do, học sinh ở mức rất yếu, thiết bị khác nhau hoặc không gian thu âm nhiều tiếng ồn.

## <a id="_Toc245461549"></a><a id="_Toc245467128"></a><a id="_Toc245476951"></a><a id="_Toc245477853"></a>2.4. Quy trình xử lý một video Duet

![](report\_files/image\_002.png)

Hình 2. Sáu bước từ video đã quay đến phản hồi luyện tập. Nguồn: nhóm nghiên cứu sơ đồ hóa quy trình xử lý.

Trước hết, học sinh tự quay Duet bằng nền tảng đang sử dụng rồi chọn tệp đã hoàn thành. Phần mềm so sánh bản Duet với video mẫu để biết hai bản có khớp nhau không. Nếu bản quay bị cắt đầu, kéo dài hoặc lệch thời gian, hệ thống cố gắng căn lại trước khi xác định đoạn người học nói. Nếu video không có âm thanh hay độ khớp thiếu tin cậy, chương trình cần dừng, cảnh báo hoặc đề nghị kiểm tra bằng người nghe.

Sau khi xác định các đoạn có thể là tiếng học sinh, hệ thống lấy chính những đoạn thời gian tương ứng từ âm thanh gốc. Công cụ chuyển lời nói thành chữ được dùng để đối chiếu với bài đọc, trong khi độ trôi chảy được ước lượng từ nhịp nói và các khoảng dừng. Phát âm, ngữ điệu được ước lượng có giới hạn từ mô hình đánh giá tiếng nói đã huấn luyện sẵn MultiPA \[2\]. Hệ thống cuối cùng hiển thị tiêu chí, mức tin cậy/giới hạn và gợi ý luyện tiếp.

## <a id="_Toc245477854"></a>2.5. Phương pháp và cách thực hiện

2\.5.1. Căn chỉnh và tách lời người học

Hệ thống tiếp nhận video Duet và video mẫu, sau đó căn chỉnh hai video bằng fingerprint hình ảnh mức xám/gradient tại nhiều vị trí trên timeline. Phép căn chỉnh được chấp nhận khi các điểm neo hợp lệ bao phủ tối thiểu 70% phần video mẫu được lấy mẫu.

Khi thông tin hình ảnh chưa đủ, hệ thống bổ sung các đặc trưng âm thanh như tương quan dạng sóng, GCC\-PHAT và độ tương đồng log\-Mel để hỗ trợ xác định độ lệch thời gian.

Nếu giọng mẫu còn xuất hiện trong Duet, hệ thống thử Linear Reference Cancellation và WebRTC AEC3. Phép trừ tuyến tính có dạng:

y(t) = x(t) \- g.r(t \- τ)

Trong đó x(t) là âm thanh Duet, r(t) là âm thanh mẫu, τ là độ lệch thời gian và g là hệ số khuếch đại ước lượng.

Các đoạn nghi còn sót giọng mẫu được kiểm tra bằng các ngưỡng: tương quan dạng sóng ≥ 0,50; log\-Mel similarity ≥ 0,60; suppression cục bộ ≤ 0 dB và tỷ lệ chồng lấp template ≥ 0,30. Silero VAD sau đó được dùng để xác định vùng người học nói. Âm thanh sau cancellation chỉ phục vụ phát hiện; khi chấm điểm, hệ thống quay lại âm thanh gốc của Duet để tránh làm biến dạng đặc điểm phát âm.

2\.5.2. Đặc trưng đánh giá độ trôi chảy

Hệ thống sử dụng faster\-whisper small.en để tạo transcript và timestamp theo từ. Độ trôi chảy được mô tả bằng các đặc trưng thời gian chính.

Gọi Nw là số từ, T là tổng thời lượng lượt nói, Ts là thời lượng có tiếng nói và Tp là tổng thời gian dừng:

Speech Rate = 60 × Nw / T

Articulation Rate = 60 × Nw / Ts

Phonation Ratio = Ts / T

Pause Ratio = Tp / T

Mean Length of Run:

MLR = Nw / Nruns

Khoảng dừng được xét từ khoảng 0,25 giây; khoảng dừng dài từ khoảng 0,70 giây. Hệ thống đồng thời ghi nhận số khoảng dừng và khoảng dừng dài nhất.

2\.5.3. Đánh giá và hiệu chỉnh MultiPA

Mô hình pretrained MultiPA được sử dụng cho Pronunciation và Prosody; nhóm nghiên cứu không fine\-tune lại mô hình trên dữ liệu nhỏ của dự án. Các đoạn âm thanh dài được chia thành các phần không quá khoảng 14,5 giây và điểm raw được lấy trung bình:

S\_raw = (1/m) × ΣS\_i

Điểm MultiPA sau đó được hiệu chỉnh theo đánh giá giáo viên trên tập development bằng Leave\-One\-Out Cross\-Validation (LOOCV). Hệ thống sử dụng support\-constrained calibration, tức chỉ tạo điểm trong miền điểm giáo viên đã thực sự quan sát.

Với Pronunciation, dữ liệu giáo viên chỉ có mức \{3, 4\}, do đó:

ŷ = 3 \+ P(y = 4 | x)

và điểm hiệu chỉnh luôn nằm trong khoảng:

3 ≤ ŷ ≤ 4

Prosody được hiệu chỉnh tương tự trên các mức \{2, 3, 4, 5\}. Dữ liệu mini\-validation sau khi scorer đã được đóng băng không được sử dụng để hiệu chỉnh lại mô hình.

2\.5.4. Ngôn ngữ, thư viện và kiến trúc hệ thống

Backend được phát triển chủ yếu bằng Python với các công cụ chính: FFmpeg/FFprobe, NumPy, SciPy, OpenCV, Silero VAD, faster\-whisper, Praat/Parselmouth, WebRTC AEC3 và MultiPA.

Giao diện sản phẩm sử dụng React 19, TypeScript và Vite; FastAPI đóng vai trò kết nối frontend với pipeline Python.

Kiến trúc tổng quát:

React → FastAPI → căn chỉnh/VAD → ASR → Fluency \+ MultiPA → điểm số, bằng chứng và phản hồi.

Frontend chỉ đảm nhiệm hiển thị và tương tác; toàn bộ thuật toán chấm điểm được thực hiện ở backend.

## <a id="_Toc245461552"></a><a id="_Toc245467130"></a><a id="_Toc245476953"></a><a id="_Toc245477855"></a>2.6. Thiết kế đánh giá

Trong 12 bài phát triển, nhóm dùng cách kiểm tra chéo “mỗi lần để riêng một bài” (LOOCV). Ở mỗi lượt, cách quy đổi điểm được xây dựng từ 11 bài rồi dự đoán cho bài còn lại. Lặp lại 12 lượt giúp quan sát sai lệch ngay trong dữ liệu phát triển, thay vì chỉ chấm lại những bài đã dùng để hiệu chỉnh. Đây vẫn chưa phải kiểm định trên một tập độc lập, nhất là khi 12 bài chưa bao phủ nhiều mức trình độ.

Một bước tiếp theo là kiểm tra nhỏ P2.5 trên ba bài D064, D043 và D048. Cách chấm được chốt trước khi đọc điểm đánh giá tương ứng, giúp tránh việc sửa theo ba kết quả ấy. Dù vậy, chỉ ba bài là quá ít để kết luận hệ thống ổn định. Khi diễn giải tỷ lệ đúng mức điểm, cần luôn nêu rõ mẫu số 3/3 hay 2/3 thay vì sử dụng phần trăm gây cảm giác chắc chắn.

## <a id="_Toc245461553"></a><a id="_Toc245467131"></a><a id="_Toc245476954"></a><a id="_Toc245477856"></a>2.7. Lưu vết thực nghiệm và khả năng tái kiểm tra

Mỗi lần phân tích cần lưu phiên bản phương pháp, bộ dữ liệu được phép sử dụng, các giá trị đo được và cảnh báo. Kết quả mới không được xóa dấu vết kết quả cũ: khi có thay đổi văn bản mẫu, cách phát hiện lời nói hoặc cách quy đổi điểm, nhóm phải ghi rõ thay đổi nào tạo ra chênh lệch. Những dữ liệu gốc, file chấm và nhật ký thực hiện cần lưu theo Phụ lục V; việc hỗ trợ nghiên cứu và biên tập bằng AI cần được kê khai theo Phụ lục VI.

## <a id="_Toc245461554"></a><a id="_Toc245467132"></a><a id="_Toc245476955"></a><a id="_Toc245477857"></a>2.8. Đạo đức nghiên cứu và bảo vệ dữ liệu học sinh

Video, giọng nói và bản chép có thể chứa thông tin nhận diện. Việc thu thập và dùng dữ liệu phải dựa trên sự đồng ý phù hợp của người tham gia và người giám hộ khi cần thiết, có cơ chế hạn chế truy cập, xóa hoặc ngừng sử dụng theo quy định. Khi trình bày kết quả công khai, báo cáo chỉ sử dụng mã bài; hình minh họa không chứa gương mặt người và không gắn đường dẫn, mã QR ra bên ngoài.

Trong phiên bản sản phẩm mới, việc cho phép nhập video từ một địa chỉ công khai và dùng dịch vụ AI viết lại lời góp ý có cơ chế kiểm soát riêng. Đây là chức năng phần mềm, không đồng nghĩa mọi dữ liệu người dùng đã được phép dùng cho nghiên cứu. Những bài người dùng mới tải lên phải tách khỏi tập phát triển, kiểm định và các nhãn của giáo viên.

# <a id="_Toc245461555"></a><a id="_Toc245467133"></a><a id="_Toc245476956"></a><a id="_Toc245477858"></a>CHƯƠNG 3. KẾT QUẢ NGHIÊN CỨU

## <a id="_Toc245461556"></a><a id="_Toc245467134"></a><a id="_Toc245476957"></a><a id="_Toc245477859"></a>3.1. Kết quả căn chỉnh video đầu vào

Trong lần khảo sát kỹ thuật P1.4 trên 68 video cùng bài T001, có 58 bài căn chỉnh được trực tiếp bằng hình ảnh. Với bốn bài khác, thông tin âm thanh giúp tìm được độ khớp có thể sử dụng, nâng tổng số video căn chỉnh được lên 62/68 (91,2%). Sáu bài còn lại chưa đủ điều kiện: năm bài không căn chỉnh đáng tin cậy và một tệp thiếu luồng âm thanh. Tỷ lệ này mô tả bước chuẩn bị đầu vào, không phải tỷ lệ phần trăm hệ thống chấm phát âm đúng.

Bảng 2. Kết quả khảo sát căn chỉnh 68 video (P1.4)

| Kết quả khảo sát P1.4 | Số bài | Ý nghĩa |
| --- | --- | --- |
| Khớp trực tiếp qua hình ảnh | 58/68 | Hai video có thể đặt đúng tương quan thời gian. |
| Khớp thêm nhờ thông tin âm thanh | 4/68 | Có thêm căn cứ để tiếp tục xử lý. |
| Tổng số căn chỉnh sử dụng được | 62/68 (91,2%) | Chỉ phản ánh khả năng xử lý đầu vào. |
| Chưa đủ điều kiện ở bước căn chỉnh | 6/68 (8,8%) | Cần dừng hoặc kiểm tra lại. |

Kết quả khảo sát trên 68 video cho thấy bước căn chỉnh có khả năng xử lý đầu vào ở mức cao. Trong đó, 58/68 video (85,3%) được căn chỉnh trực tiếp bằng thông tin hình ảnh. Khi bổ sung cơ chế đối chiếu bằng tín hiệu âm thanh, hệ thống xử lý thêm 4 video, nâng tổng số trường hợp có thể tiếp tục đưa vào pipeline lên 62/68, tương đương 91,2%.

Sáu trường hợp còn lại không được hệ thống cố gắng ép xử lý mà được chủ động dừng hoặc yêu cầu kiểm tra bổ sung khi bằng chứng căn chỉnh chưa đủ tin cậy. Trong nhóm này có các trường hợp không tạo được căn chỉnh ổn định và một trường hợp gặp lỗi đầu vào do không có luồng âm thanh. Cách xử lý này phù hợp với mục tiêu của hệ thống là ưu tiên độ tin cậy của dữ liệu đầu vào trước khi thực hiện nhận dạng và đánh giá lời nói.

Kết quả trên vì vậy phản ánh khả năng chịu sai khác của pipeline trước các video có điều kiện đầu vào không đồng nhất. Trong quá trình thử nghiệm vận hành với video mới, hệ thống vẫn có thể thực hiện đầy đủ quy trình căn chỉnh, phát hiện lời nói, nhận dạng và tạo kết quả khi video đáp ứng các điều kiện kỹ thuật cần thiết. Tuy nhiên, các thử nghiệm vận hành này được xem là kiểm tra chức năng, không được sử dụng để thay thế số liệu đánh giá trên tập 68 <a id="_Toc245461558"></a><a id="_Toc245467135"></a>video.<a id="_Toc245476958"></a><a id="_Toc245477860"></a>

Trong quá trình phát triển, nhóm nhận thấy việc ghép video thành công không đồng nghĩa với việc chất lượng âm thanh đáp ứng yêu cầu chấm điểm. Một số bản ghi vẫn lẫn giọng đọc mẫu, có nhạc nền lớn hoặc âm lượng giọng học sinh quá nhỏ. Trên cơ sở đó, nhóm bổ sung chức năng cảnh báo chất lượng và chuyển các trường hợp chưa đủ rõ sang trạng thái cần nghe kiểm tra, thay vì yêu cầu hệ thống đưa ra điểm số. Cách xử lý này làm tăng số bài cần xem lại, đồng thời góp phần giảm nguy cơ công bố kết quả thiếu chính xác.

##      <a id="_Toc245476959"></a><a id="_Toc245477861"></a>Đối với bài đọc theo mẫu, bước căn chỉnh giúp chương trình tự động xác định vùng âm thanh cần xử lý trong đa số video thuộc đợt khảo sát ban đầu. Kết quả cho thấy hướng xử lý đầu vào có thể vận hành trên dữ liệu thực tế và hỗ trợ nhận diện những trường hợp cần thu âm lại. Tuy nhiên, hiệu quả của bước căn chỉnh cần được tiếp tục đánh giá khi thay đổi bài đọc, thiết bị ghi hình hoặc môi trường quay.

## <a id="_Toc245476960"></a><a id="_Toc245477862"></a>3.2. Độ chính xác của công cụ chép lời

Để kiểm tra việc chuyển âm thanh tiếng Anh thành văn bản, nhóm dùng sáu bài có bản chép đúng được người nghiên cứu xác nhận. Ở thử nghiệm P2.4, công cụ small.en (phiên bản tiếng Anh cỡ nhỏ của mô hình Whisper \[3\]) có tỷ lệ lỗi từ 5,02%. Hai phương án được đối chiếu trong cùng phép thử có tỷ lệ lỗi cao hơn. Nhóm chọn small.en vì có tỷ lệ lỗi thấp nhất trên bộ tham chiếu này.

![](report\_files/image\_003.png)

Hình 3. Tỷ lệ lỗi từ của ba cách nhận dạng trên 6 bản chép tham chiếu tại P2.4; thấp hơn là tốt hơn. Nguồn: số liệu thử nghiệm P2.4 của nhóm.

Có thể hiểu 5,02% là cứ 100 từ trong bản chép tham chiếu thì số lỗi chép tương ứng khoảng năm, tính theo phép đo WER. Điều đó không có nghĩa “học sinh phát âm đúng 94,98%”. Nếu máy bỏ sót một từ, nguyên nhân có thể là học sinh không đọc, đọc quá nhỏ, giọng mẫu che lấp hoặc công cụ nhận dạng sai. Trường hợp đáng ngờ phải được nghe kiểm tra trước khi biến thành nhận xét về người học.

## <a id="_Toc245461559"></a><a id="_Toc245467136"></a><a id="_Toc245476961"></a><a id="_Toc245477863"></a>3.3. Sai lệch giữa điểm máy và người đánh giá trên dữ liệu phát triển

Nhóm có 12 bài phát triển được đánh giá theo thang năm mức. Điểm phát âm và ngữ điệu ở giai đoạn này được hỗ trợ bởi MultiPA \[2\], một mô hình có sẵn được nhóm tích hợp và hiệu chỉnh; độ trôi chảy được ước lượng từ các dấu hiệu nhịp nói và khoảng dừng. Trong kiểm tra chéo 12 lượt, sai lệch điểm trung bình là 0,4204 với độ trôi chảy; 0,4912 với phát âm; và 0,5881 với ngữ điệu.

Có thể đọc các số này theo cách đơn giản: trong điều kiện thử hiện tại, điểm máy thường chênh quanh nửa điểm so với mức tham chiếu ở hai tiêu chí đầu, còn ngữ điệu lệch hơn. Tuy nhiên, đánh giá tham chiếu chỉ đến từ một người nghe có dùng AI hỗ trợ; điểm tập trung ở một số mức và chưa có kiểm tra mức thống nhất giữa nhiều giám khảo. Vì thế, các số liệu có ích cho việc lựa chọn cách làm, nhưng chưa là chứng nhận độ chính xác của công cụ chấm nói.

## <a id="_Toc245461560"></a><a id="_Toc245467137"></a><a id="_Toc245476962"></a><a id="_Toc245477864"></a>3.4. Kiểm tra trên ba bài chưa dùng để lựa chọn cách chấm

Ngày 07/11/2026, nhóm kiểm tra cấu hình đã khóa trên đúng ba bài D064, D043 và D048. Điểm máy được tạo trước khi so với đánh giá tham chiếu trong bước P2.5; không điều chỉnh lại mô hình theo kết quả của ba bài ấy. quả.

Bảng 3. Kết quả kiểm tra P2.5 trên 3 bài (N = 3)

| Tiêu chí | Sai lệch trung bình | Cùng mức / lệch ≤1 mức |
| --- | --- | --- |
| Phát âm | 0,4360 điểm | 2/3 bài; 3/3 bài |
| Độ trôi chảy | 0,5133 điểm | 2/3 bài; 3/3 bài |
| Ngữ điệu | 0,7027 điểm | 1/3 bài; 2/3 bài |

*Ghi chú:* “Cùng mức” là sau khi xếp về mức 1–5; không phải chứng nhận tỷ lệ đúng trên học sinh nói chung. Nguồn: số liệu của nhóm nghiên cứu.

![](report\_files/image\_004.png)

Hình 4. Độ lệch trung bình ở hai bước kiểm tra khác nhau; hai nhóm bài và cách đánh giá khác nhau nên không suy ra chất lượng đã tăng hay giảm theo thời gian. Nguồn: số liệu của nhóm nghiên cứu.

Trên ba bài thử, phát âm lệch trung bình khoảng 0,44 điểm, độ trôi chảy khoảng 0,51 điểm và ngữ điệu khoảng 0,70 điểm. Ngữ điệu còn có một bài lệch hơn một mức. Ngoài ra, điểm dự đoán phát âm tập trung khá sát nhau; một cách đoán gần như cố định đôi khi cũng cho sai lệch nhỏ nếu điểm tham chiếu ít đa dạng. Vì thế, để kết luận hệ thống thực sự biết phân biệt chất lượng bài nói, nhóm còn phải so sánh với những cách đoán đơn giản trên dữ liệu đa dạng hơn.

## <a id="_Toc245461561"></a><a id="_Toc245467138"></a><a id="_Toc245476963"></a><a id="_Toc245477865"></a>3.5. Các tiêu chí trong nguyên mẫu và mức độ chứng cứ

Ngoài phát âm, độ trôi chảy và ngữ điệu, hệ thống có chức năng đối chiếu nội dung đã đọc với văn bản mẫu. Chức năng này dựa một phần vào bản chép tự động, nên kết quả thiếu hoặc thừa từ chỉ là dấu hiệu cần kiểm tra, chưa phải bằng chứng chắc chắn học sinh đọc sai. Từ ngày 11/11, nhóm đã tách ba từ của tên chủ đề “One memorable event” khỏi phần văn bản thực sự được chấm đọc đủ; đây là điều chỉnh ranh giới nội dung, không phải thay đổi điểm phát âm hoặc ngữ điệu đã khóa.

Bảng 4. Tính năng nguyên mẫu và mức độ chứng cứ

| Nội dung hiển thị | Tình trạng có thể kết luận |
| --- | --- |
| Độ trôi chảy | Có số đo và cách quy đổi bước đầu; giới hạn do dữ liệu nhỏ. |
| Phát âm | Có mô hình dự đoán sơ bộ; cần nhiều bài và người chấm độc lập. |
| Ngữ điệu | Đã có thử nghiệm; sai lệch còn tương đối lớn. |
| Đọc đủ nội dung | Có chỉ số đối chiếu hỗ trợ; phải phân biệt lỗi nhận dạng và lỗi học sinh. |
| Mức dễ hiểu | Chưa có điểm tự động đủ ổn định; cần người nghe đánh giá. |
| Điểm luyện tập tổng hợp | Chỉ là chỉ số mô tả trên giao diện, chưa được nghiên cứu xác nhận. |

## <a id="_Toc245461562"></a><a id="_Toc245467139"></a><a id="_Toc245476964"></a><a id="_Toc245477866"></a>3.6. Sản phẩm

Phiên bản trình diễn đến ngày 12/11/2026 đã có luồng sử dụng rõ ràng: chọn bài Duet, chạy phân tích, xem các tiêu chí và nhận gợi ý luyện tập. Người dùng có thể mở lại bài gần đây. Giao diện mới được thiết kế theo hướng dễ nhìn, tránh hiển thị các bảng kỹ thuật và thông báo khó hiểu cho người học. Hệ thống cũng có cách xử lý khi ![](report\_files/image\_005.png)![](report\_files/image\_006.png)![](report\_files/image\_007.png)![](report\_files/image\_008.png)video không đủ điều kiện, thay vì cố đưa ra điểm bằng mọi giá. 

Các lời góp ý trước hết dựa trên dấu hiệu chương trình đã đo được. Khi người dùng cho phép, AI có thể diễn đạt lại lời góp ý thành ngôn ngữ tự nhiên nhưng không được thay đổi điểm hoặc tự thêm lỗi phát âm không có bằng chứng. Trong phiên bản hiện tại, giao diện còn có điểm luyện tập tổng hợp từ bốn mục đã hỗ trợ; nhóm ghi rõ đây là chỉ số mô tả của sản phẩm, chưa phải kết quả kiểm định khoa học và không đại diện cho một chứng chỉ ngoại ngữ.

## 3.7. Kiểm tra độ tin cậy của sản phẩm: Mức độ đồng thuận giữa giáo viên và máy chấm

Để đánh giá độ tin cậy của công cụ chấm, nhóm so sánh điểm do giáo viên chấm độc lập với điểm do máy chấm trên cùng một bài nói, theo từng tiêu chí. Giáo viên chấm trước và không xem điểm máy; máy chấm bằng cấu hình đã khóa và không được điều chỉnh sau khi biết điểm của giáo viên.

Sau ba bài kiểm tra ở mục 3.4, nhóm tiếp tục chấm thêm 10 bài. Kết quả bước đầu cho thấy điểm máy và điểm giáo viên tương đồng khá tốt. Do số bài còn ít, nhóm chưa công bố chỉ số cụ thể ở giai đoạn này để tránh diễn giải quá mức.

Hiện nhóm đang tiến hành chấm toàn bộ 68 video Duet của bài T001 để đánh giá mức độ đồng thuận giữa người chấm và máy chấm. Các chỉ số dự kiến gồm độ lệch trung bình (máy − giáo viên), sai lệch tuyệt đối trung bình (MAE), tỷ lệ cùng mức và lệch không quá một mức, hệ số tương quan Pearson, hệ số tương quan nội lớp ICC(2,1) theo đồng thuận tuyệt đối và hệ số Kappa có trọng số bậc hai (QWK). Kết quả được trình bày riêng cho tập phát triển và 18 bài giữ riêng, trong đó kết quả trên tập giữ riêng là bằng chứng chính về độ tin cậy. Kết quả đầy đủ sẽ được bổ sung trong buổi báo cáo chính thức.

# <a id="_Toc245461563"></a><a id="_Toc245467140"></a><a id="_Toc245476965"></a><a id="_Toc245477867"></a>CHƯƠNG 4. BÀN LUẬN VÀ HƯỚNG HOÀN THIỆN

## <a id="_Toc245461564"></a><a id="_Toc245467141"></a><a id="_Toc245476966"></a><a id="_Toc245477868"></a>4.1. Những kết quả đã đạt được

Trước hết, nghiên cứu cho thấy có thể tận dụng video mẫu để tổ chức một quy trình xử lý Duet có các bước kiểm tra cụ thể. Từ video hoàn thành, hệ thống đã thực hiện được việc căn thời gian, tìm phần lời nói của người học, lấy âm thanh gốc, chép lời, đo một số đặc điểm và hiển thị gợi ý. Kết quả trên 68 video cho thấy bước căn chỉnh có thể triển khai với dữ liệu thật; các phép thử trên 12 bài và ba bài giúp nhóm nhìn rõ giới hạn của từng tiêu chí.

Thứ hai, nghiên cứu có một số quyết định phù hợp về mặt khoa học: bảo vệ tập dữ liệu giữ riêng, không lấy âm thanh đã giảm giọng mẫu để chấm phát âm, không biến một từ ASR chép sai thành lỗi phát âm, không công bố điểm máy cho mức dễ hiểu khi mô hình chưa ổn định. Việc hiển thị cảnh báo chất lượng và từ chối chấm trong trường hợp không đủ điều kiện là một phần đóng góp thực tế, dù khó quy đổi thành một “tỷ lệ chính xác”.

## <a id="_Toc245461565"></a><a id="_Toc245467142"></a><a id="_Toc245476967"></a><a id="_Toc245477869"></a>4.2. Hạn chế

Nhóm mới tập trung vào một bài đọc T001. Các bài có điểm tham chiếu ít và thiên về mức khá, cao; việc đánh giá từ một người nghe có AI hỗ trợ chưa thay thế được bộ điểm độc lập của nhiều giáo viên. Ba bài P2.5 chưa đủ để đánh giá khả năng khái quát; tương quan giữa điểm máy và người đánh giá trên ba bài cũng không đáng dùng làm bằng chứng thống kê. Quan trọng nhất, 18 video giữ riêng chưa được dùng cho một lần kiểm định cuối sau khi khóa toàn bộ phương pháp.

Về sản phẩm, việc chạy qua các bài kiểm thử phần mềm chỉ chứng minh phần mềm hoạt động theo thiết kế trong các trường hợp đã thử. Nó không trả lời câu hỏi học sinh có luyện nói tiến bộ hơn hay không. Muốn đánh giá tác dụng giáo dục, nhóm cần theo dõi quá trình luyện tập, kiểm tra trước–sau, thu phản hồi của học sinh và giáo viên, đồng thời so sánh với cách học thông thường. Khả năng mở rộng sang bài nói tự do, nhiều chủ đề hoặc nhiều điều kiện âm thanh vẫn cần nghiên cứu tiếp.

## <a id="_Toc245461566"></a><a id="_Toc245467143"></a><a id="_Toc245476968"></a><a id="_Toc245477870"></a>4.3. Lưu ý khi diễn giải các số liệu chính

Con số 91,2% là tỷ lệ căn chỉnh video ở một đợt khảo sát, không phải “độ chính xác chấm nói”. Con số 5,02% là tỷ lệ lỗi của công cụ chép lời trên sáu bản tham chiếu, không phải tỷ lệ phát âm sai của học sinh. Những sai lệch 0,44–0,70 điểm ở P2.5 phản ánh đúng ba bài đã kiểm tra, không thể dùng để cam kết hệ thống sẽ đạt tương tự ở các trường học khác. Cuối cùng, điểm luyện tập tổng hợp trên giao diện chỉ giúp người học theo dõi một cách thuận tiện; chưa có giá trị thay điểm giáo viên hoặc quy đổi sang CEFR/IELTS.

## <a id="_Toc245461567"></a><a id="_Toc245467144"></a><a id="_Toc245476969"></a><a id="_Toc245477871"></a>4.4. Kế hoạch hoàn thiện

Để chuyển một nguyên mẫu có triển vọng thành một công cụ đáng tin cậy, nhóm không ưu tiên thêm tính năng mới trước khi xác nhận các phép đo chính. Những bước sau được xem là kế hoạch tiếp theo, chưa phải công việc đã hoàn thành.

Bảng 5. Kế hoạch kiểm chứng dự kiến

| Việc cần thực hiện | Bằng chứng cần thu | Mục đích |
| --- | --- | --- |
| 1. Khóa cấu hình, kiểm định 18 bài giữ riêng | Bảng kết quả từng bài, chỉ số lỗi, trường hợp bị từ chối | Biết hệ thống có giữ chất lượng trên bài chưa dùng để lựa chọn phương pháp. |
| 2. Bổ sung nhiều người chấm | Điểm độc lập, mức thống nhất và những trường hợp chấm khác nhau | Có điểm tham chiếu đáng tin cậy hơn. |
| 3. Mở rộng dữ liệu | Nhiều bài đọc, trình độ, thiết bị, tiếng ồn và tình huống giọng trộn | Kiểm tra khả năng áp dụng ngoài bài T001. |
| 4. Đánh giá phản hồi với học sinh | Nhật ký luyện lại, phỏng vấn, bài trước–sau | Xác định hệ thống có thực sự giúp luyện nói hay không. |

Ghi chú: các mục chưa có số liệu được giữ ở trạng thái cần thực hiện.

## <a id="_Toc245461568"></a><a id="_Toc245467145"></a><a id="_Toc245476970"></a><a id="_Toc245477872"></a>4.5. Chỉ tiêu cho lần kiểm định tiếp theo

Ở lần kiểm định tới, nhóm đặt mục tiêu tham khảo là sai lệch điểm trung bình không quá 0,5 điểm ở những tiêu chí được phép công bố, và ít nhất 80% bài kiểm tra có điểm dự đoán lệch không quá một mức so với người chấm độc lập. Đây là mục tiêu để đánh giá tiến độ, không phải số liệu đã đo hay lời bảo đảm sẽ đạt. Nếu kết quả không đáp ứng, nhóm sẽ công bố nguyên nhân và giới hạn, thay vì thay đổi mẫu hoặc lựa chọn lại cách chấm sau khi đã xem tập kiểm định.

Chỉ tiêu về khả năng xử lý video cũng cần gắn với mẫu số và điều kiện. Kết quả 62/68 hiện tại có thể dùng làm mốc so sánh; khi bổ sung các bài từ môi trường khó hơn, tỷ lệ có thể thấp đi mà không nhất thiết cho thấy dự án đi lùi. Một hệ thống biết nhận diện trường hợp không thể chấm có thể an toàn và hữu ích hơn hệ thống luôn trả ra điểm nhưng thiếu căn cứ.

## <a id="_Toc245461569"></a><a id="_Toc245467146"></a><a id="_Toc245476971"></a><a id="_Toc245477873"></a>4.6. Tính khả thi trong trường học

Trong sử dụng thực tế, giáo viên vẫn có vai trò giao bài, hướng dẫn học sinh đọc đúng văn bản, kiểm tra các trường hợp phần mềm báo không chắc chắn và đánh giá quá trình tiến bộ. Học sinh có thể xem phản hồi để luyện lại ngoài giờ, sau đó trao đổi với giáo viên về đoạn mình chưa hiểu. Cách dùng phù hợp nhất ở giai đoạn này là công cụ luyện tập hỗ trợ, chưa phải phần mềm chấm điểm chính thức hoặc xếp loại năng lực ngoại ngữ.

<a id="_Toc245461570"></a><a id="_Toc245467147"></a><a id="_Toc245476972"></a><a id="_Toc245477874"></a>

# KẾT LUẬN VÀ KIẾN NGHỊ

## <a id="_Toc245461571"></a><a id="_Toc245467148"></a><a id="_Toc245476973"></a><a id="_Toc245477875"></a>1. Kết luận

Dự án bắt đầu từ một nhu cầu học tập cụ thể: học sinh có thể quay video luyện nói nhiều lần nhưng thiếu phản hồi rõ ràng sau khi quay. Nhóm đã phát triển quy trình tận dụng video mẫu để định vị lời học sinh trong bản Duet, giữ âm thanh gốc phục vụ phân tích và trình bày các tiêu chí luyện nói trên giao diện dễ sử dụng. Kết quả kỹ thuật 62/68 video căn chỉnh được cùng các phép thử chuyển lời nói thành chữ, kiểm tra chéo 12 bài và kiểm tra nhỏ ba bài cho thấy hướng tiếp cận có cơ sở để tiếp tục nghiên cứu.

Tuy vậy, các kết quả hiện có mới ở mức bước đầu. Nguyên mẫu đã vận hành được trên một bài đọc mẫu (T001); các phép đo trên 12 bài phát triển và 3 bài kiểm tra nhỏ cho thấy điểm máy lệch khoảng 0,4–0,7 điểm (thang 5) so với người đánh giá. Những số liệu này chưa đủ căn cứ để khẳng định độ chính xác của việc chấm phát âm, ngữ điệu hay năng lực nói nói chung. Mức độ dễ hiểu, độ chính xác của ngữ điệu và độ đa dạng của dữ liệu tham chiếu là những nội dung cần tiếp tục hoàn thiện. Như vậy, dự án đã đạt mục tiêu của giai đoạn này: xây dựng được nguyên mẫu hoạt động và một quy trình đánh giá minh bạch, làm nền tảng cho bước kiểm định độc lập tiếp theo.

## <a id="_Toc245461572"></a><a id="_Toc245467149"></a><a id="_Toc245476974"></a><a id="_Toc245477876"></a>2. Kiến nghị

a) Đối với nhà trường và tổ Tiếng Anh: tạo điều kiện để ít nhất hai giáo viên tiếng Anh chấm độc lập một bộ bài tham chiếu, giúp dự án có điểm chuẩn đáng tin cậy và đo được mức thống nhất giữa người chấm.

b) Đối với việc thu thập dữ liệu: cho phép mở rộng thu thập video ở nhiều bài đọc, nhiều lớp và nhiều điều kiện thu âm, kèm phiếu đồng ý của học sinh và phụ huynh, quy định rõ thời hạn lưu trữ và quyền rút dữ liệu.

c) Đối với việc sử dụng: ở giai đoạn hiện tại, hệ thống chỉ nên được dùng như công cụ luyện tập ngoài giờ có giáo viên theo dõi, không dùng kết quả để chấm điểm hay xếp loại chính thức.

d) Đối với nhóm nghiên cứu: thực hiện kiểm định trên 18 video giữ riêng và một thử nghiệm sư phạm nhỏ (khảo sát người dùng, kiểm tra trước – sau) trước khi kết luận về hiệu quả giáo dục.

<a id="_Toc245461573"></a>

# <a id="_Toc245467150"></a><a id="_Toc245476975"></a><a id="_Toc245477877"></a>TÀI LIỆU THAM KHẢO

1. Almusharraf, A., Mahdi, H. S., Al\-Nofaie, H., & Aljasser, A. (2024). The effect of settings, educational level and tools on computer\-assisted pronunciation training: A meta\-analysis. *Journal of Computer Assisted Learning, 40*(4), 1605–1615. DOI: 10.1111/jcal.12974.
2. Amrate, M., & Tsai, P.\-H. (2025). Computer\-assisted pronunciation training: A systematic review. *ReCALL, 37*(1), 22–42. DOI: 10.1017/S0958344024000181.
3. Black, P., & Wiliam, D. (1998). Assessment and classroom learning. *Assessment in Education: Principles, Policy & Practice, 5*(1), 7–74. DOI: 10.1080/0969595980050102.
4. Chen, L., Zechner, K., Yoon, S.\-Y., Evanini, K., Wang, X., Loukina, A., Tao, J., Davis, L., Lee, C. M., Ma, M., Mundkowsky, R., Lu, C., Leong, C. W., & Gyawali, B. (2018). Automated scoring of nonnative speech using the SpeechRater v. 5.0 engine. *ETS Research Report Series*. DOI: 10.1002/ets2.12198.
5. Chen, Y.\-W., Yu, Z., & Hirschberg, J. (2024). MultiPA: A multi\-task speech pronunciation assessment model for open response scenarios. In *Proceedings of Interspeech 2024* (pp. 297–301). International Speech Communication Association. DOI: 10.21437/Interspeech.2024\-123.
6. Cucchiarini, C., Strik, H., & Boves, L. (2000). Different aspects of expert pronunciation quality ratings and their relation to scores produced by speech recognition algorithms. *Speech Communication, 30*(2–3), 109–119. DOI: 10.1016/S0167\-6393(99)00040\-0.
7. Derwing, T. M., & Munro, M. J. (2015). *Pronunciation fundamentals: Evidence\-based perspectives for L2 teaching and research*. John Benjamins Publishing Company. DOI: 10.1075/LLLT.42.
8. Evanini, K., & Zechner, K. (2020). Overview of automated speech scoring. In K. Zechner & K. Evanini (Eds.), *Automated speaking assessment: Using language technologies to score spontaneous speech* (pp. 3–20). Routledge. DOI: 10.4324/9781315165103\-1.
9. Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research, 77*(1), 81–112. DOI: 10.3102/003465430298487.
10. Hongsa, N., Wathawatthana, P., & Yonwilad, W. (2023). The effects of TikTok application on the improvement of EFL students’ English\-speaking skills. *World Journal of English Language, 13*(7), 77–88. DOI: 10.5430/wjel.v13n7p77.
11. Hsu, W.\-N., Bolte, B., Tsai, Y.\-H. H., Lakhotia, K., Salakhutdinov, R., & Mohamed, A. (2021). HuBERT: Self\-supervised speech representation learning by masked prediction of hidden units. *IEEE/ACM Transactions on Audio, Speech, and Language Processing, 29*, 3451–3460. DOI: 10.1109/TASLP.2021.3122291.
12. Isaacs, T., & Trofimovich, P. (2012). Deconstructing comprehensibility: Identifying the linguistic influences on listeners’ L2 comprehensibility ratings. *Studies in Second Language Acquisition, 34*(3), 475–505.
13. Kormos, J., & Dénes, M. (2004). Exploring measures and perceptions of fluency in the speech of second language learners. *System, 32*(2), 145–164. DOI: 10.1016/j.system.2004.01.001.
14. Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., & Sutskever, I. (2023). Robust speech recognition via large\-scale weak supervision. In *Proceedings of the 40th International Conference on Machine Learning* (Vol. 202, pp. 28492–28518). Proceedings of Machine Learning Research.
15. Shute, V. J. (2008). Focus on formative feedback. *Review of Educational Research, 78*(1), 153–189. DOI: 10.3102/0034654307313795.
16. Wang, Y., & Min, S. (2026). The human–machine correlation in automated speech evaluation: A three\-level meta\-analysis. *Language Testing, 43*(2). DOI: 10.1177/02655322251387816.
17. Witt, S. M., & Young, S. J. (2000). Phone\-level pronunciation scoring and assessment for interactive language learning. *Speech Communication, 30*(2–3), 95–108. DOI: 10.1016/S0167\-6393(99)00044\-8.
18. Zechner, K., & Evanini, K. (Eds.). (2020). *Automated speaking assessment: Using language technologies to score spontaneous speech*. Routledge. DOI: 10.4324/9781315165103.
19. SYSTRAN. (n.d.). *faster\-whisper: Faster Whisper transcription with CTranslate2* \[Computer software\]. GitHub.
20. Silero Team. (2021). *Silero VAD: Pre\-trained enterprise\-grade Voice Activity Detector* \[Computer software\]. GitHub.
21. TikTok. (n.d.). *Duets*. TikTok Help Center.
22. Duong, T. H., & Dang, N. (2026). Impacts of short\-form videos on Vietnamese high school students’ motivation in learning English vocabulary. *Tan Tao University Journal of Science, 1*(2). DOI: 10.53901/tjs.2026.v01.issue02.art07.
23. Ủy ban nhân dân tỉnh Lâm Đồng. (2026). Quyết định số 457/QĐ\-UBND ngày 03 tháng 02 năm 2026 về việc công nhận đề tài, sáng kiến có hiệu quả áp dụng, khả năng nhân rộng, phạm vi ảnh hưởng cấp tỉnh đợt II năm 2025 (danh sách kèm theo, số thứ tự 57).

