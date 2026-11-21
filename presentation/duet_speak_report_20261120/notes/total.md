# 01_cover

Kính thưa hội đồng, dự án xuất phát từ nhu cầu hỗ trợ giáo viên xem và phản hồi các bài luyện nói bằng video Duet. Tên đầy đủ của đề tài là Phần mềm hỗ trợ đánh giá luyện nói tiếng Anh đa phương thức: khai thác video tham chiếu và đối sánh bằng chứng giọng nói. Sản phẩm trình diễn có tên DUET / SPEAK. Điểm nhóm muốn làm rõ là dùng video mẫu đã biết để tìm lời học sinh, sau đó lấy bằng chứng từ âm thanh gốc, có thể nghe và kiểm tra lại. Đây là nguyên mẫu nghiên cứu trên bài T001; phần trình bày sẽ tách rõ khả năng vận hành của sản phẩm với độ tin cậy khoa học của việc chấm điểm.

---

# 02_problem

Theo bối cảnh trong phần mở đầu của báo cáo, một giáo viên phụ trách khoảng năm lớp với hơn một trăm năm mươi học sinh có thể nhận khoảng một trăm năm mươi video nếu mỗi em nộp một bài trong tuần. Con số này mô tả khối lượng công việc, không phải cỡ mẫu nghiên cứu và cũng chưa phải kết quả đo thời gian tiết kiệm. Giáo viên phải mở video, tìm lời học sinh, đối chiếu bài đọc và nghe lại trước khi viết phản hồi. Nhóm muốn hỗ trợ những thao tác lặp lại này để giáo viên tập trung hơn vào nhận xét sư phạm. Vì Duet có thể lẫn giọng mẫu, xử lý đúng nguồn lời nói phải đi trước mọi điểm số.

---

# 03_questions

Ba câu hỏi nghiên cứu đi từ điều kiện kỹ thuật đến điều kiện sử dụng. Thứ nhất, hệ thống có căn chỉnh và tìm đúng vùng lời học sinh không? Thứ hai, sau khi có đầu vào phù hợp, điểm của từng tiêu chí lệch bao nhiêu so với người đánh giá? Thứ ba, những bằng chứng nào còn thiếu trước khi đưa kết quả vào hoạt động dạy học? Việc tách các câu hỏi giúp tránh dùng tỷ lệ xử lý video để trả lời thay cho độ chính xác chấm nói. Trong toàn bộ quy trình, giáo viên vẫn đặt chuẩn, nghe lại trường hợp bất định và quyết định phản hồi. Phần tiếp theo cho biết dữ liệu hiện có đủ trả lời câu hỏi nào.

---

# 04_data

Bộ dữ liệu gốc có sáu mươi tám video của hai lớp mười Toán và mười Lý, mỗi học sinh một video theo cùng bài đọc T001. Năm mươi video được dùng phát triển, còn mười tám video giữ riêng cho kiểm định cuối. Trong tập phát triển, mười hai bài có đánh giá theo tiêu chí, sáu bài có bản chép được con người xác nhận và ba bài khác dùng cho bước P2.5 sau khi khóa cấu hình. Các nhóm này phục vụ những phép thử khác nhau, không nên cộng các số thành những nhóm độc lập. Nhãn của mười hai bài đến từ một người nghe có AI hỗ trợ. Đến tài liệu hiện có, chưa có bảng kiểm định cuối trên mười tám bài giữ riêng; vì vậy chưa thể tuyên bố khái quát ngoài T001.

---

# 05_reference

Khác với việc chỉ có một bản ghi hỗn hợp, dự án biết trước video mẫu: biết hình ảnh, giọng đọc và nội dung. Điều này cho phép dùng hình ảnh để ước lượng tương quan thời gian, rồi dùng âm thanh để nhận ra phần giọng mẫu còn lẫn. Hướng tiếp cận vì vậy là đối sánh tham chiếu, thay vì yêu cầu mô hình tự phân biệt mọi người nói từ đầu. Đây là cơ sở của quyết định thiết kế và phù hợp với dữ liệu Duet hiện tại. Nhóm chưa có một thử nghiệm ablation hoặc đối chứng đầy đủ để kết luận phương pháp vượt tất cả hệ thống diarization. Đóng góp ở đây là tổ chức một quy trình cụ thể và kiểm soát các nguồn sai số của bài toán.

---

# 06_pipeline

Luồng xử lý có sáu bước. Video được chuẩn hóa bằng FFmpeg, sau đó căn với video mẫu. Hệ thống kiểm tra chất lượng và dùng Silero VAD để tìm các vùng có thể là tiếng học sinh. Mốc thời gian được chuyển sang bước lấy âm thanh từ Duet gốc; bước này rất quan trọng vì âm đã lọc có thể làm thay đổi đặc trưng cần đánh giá. Tiếp theo, small.en tạo bản chép, các đặc trưng thời gian mô tả độ trôi chảy, còn MultiPA cung cấp các đầu ra phát âm và ngữ điệu có hiệu chỉnh. Cuối cùng, phần mềm tạo phản hồi từ bằng chứng và cho phép giáo viên xem lại. Các cổng kỹ thuật có thể dừng hoặc cảnh báo thay vì buộc mọi đầu vào có điểm.

---

# 07_alignment

Căn chỉnh ưu tiên fingerprint hình ảnh mức xám và gradient tại nhiều vị trí trên timeline. Theo báo cáo, điểm neo hợp lệ phải bao phủ tối thiểu bảy mươi phần trăm vùng tham chiếu được lấy mẫu. Đây là điều kiện của phép căn chỉnh, không phải bảy mươi phần trăm toàn bộ lời học sinh đã được xác minh. Khi hình ảnh không đủ tin cậy, waveform, GCC-PHAT và log-Mel hỗ trợ xác định tương quan thời gian. Mã smart_pipeline còn kiểm tra chéo khi giọng mẫu nghe được; khi giọng mẫu đã tắt, hệ thống không ép âm thanh phải khớp một tín hiệu không còn tồn tại. Quyết định này giúp giữ đúng ý nghĩa của từng miền tín hiệu, thay vì cộng cơ học các mô hình.

---

# 08_gates

Ba trạng thái này là phân luồng kỹ thuật của dữ liệu. GREEN cho phép tiếp tục theo chính sách xử lý, nhưng không chứng nhận điểm nói đã có giá trị. AMBER là dấu hiệu cần xem xét thêm, chẳng hạn căn hình và căn âm không thống nhất, giọng mẫu còn lẫn, nhiễu lớn hoặc giọng người học quá nhỏ. RED phản ánh những trường hợp phải dừng hoặc yêu cầu bản ghi khác, như không có âm thanh hay không căn chỉnh đáng tin cậy. Không được diễn giải các màu này thành giỏi, trung bình hay yếu của học sinh. Cách thiết kế có thể tăng số bài cần giáo viên nghe lại, đổi lại hạn chế việc tạo điểm khi đầu vào không đủ căn cứ.

---

# 09_raw_audio

Đây là bất biến quan trọng nhất của luồng âm thanh. Nếu cần giảm giọng mẫu, Linear Cancellation hoặc AEC3 tạo residual để Silero VAD tìm mốc thời gian. Từ miền phát hiện, hệ thống chỉ chuyển vị trí sang miền đánh giá. Âm thanh đưa vào ASR và scorer được lấy từ Duet gốc bằng các mốc hoặc mặt nạ tương ứng. Trong mã runner, nguồn là duet_path và được kiểm tra bằng require_raw_source trước khi chuẩn bị đầu vào. Các artefact lưu hash nguồn cùng phép biến đổi để truy vết. Nguyên tắc này không bảo đảm crop hoàn toàn sạch; nó bảo đảm âm thanh đã cancellation không bị dùng làm nguồn đo phát âm hoặc ngữ điệu mà không được khai báo.

---

# 10_fluency

Độ trôi chảy được mô tả bằng nhiều dấu hiệu thay vì chỉ tốc độ. Speech rate tính trên thời lượng lượt nói; articulation rate dùng thời lượng được phát hiện có tiếng. Phonation ratio, pause ratio, độ dài chuỗi từ và khoảng dừng dài nhất bổ sung thông tin về nhịp. Hàm measure_fluency lấy khoảng giữa các từ từ khoảng không phẩy hai mươi lăm giây để tính dừng và từ không phẩy bảy mươi giây để đánh dấu dừng dài. Chỉ khoảng trong lượt được tính; khoảng trống giữa hai nhiệm vụ không tự động trở thành lỗi ngập ngừng. Các timestamp do ASR tạo vẫn có sai số, nên những phép đo này là bằng chứng cần đặt cạnh việc nghe, chưa phải mô tả đầy đủ năng lực nói.

---

# 11_multipa

Nhóm sử dụng mô hình MultiPA đã huấn luyện sẵn, không huấn luyện lại mô hình nền trên bộ dữ liệu nhỏ. Những đoạn dài được chia tại ranh giới từ, tối đa khoảng mười bốn phẩy năm giây, rồi lấy trung bình điểm thô không trọng số theo bài. Hiệu chỉnh và lựa chọn được thực hiện riêng cho từng tiêu chí. Nhãn phát âm chỉ có mức ba và bốn; độ trôi chảy chỉ có bốn và năm; ngữ điệu có mức hai đến năm. Dự đoán bị giới hạn trong miền đã có nhãn. Trong LOOCV, mỗi lượt dùng mười một bài để hiệu chỉnh và dự đoán bài còn lại, lặp mười hai lần. Độ trôi chảy giữ mô hình timing; mức dễ hiểu chưa có điểm máy ổn định. Đây là đóng góp tích hợp và kiểm soát phạm vi, không phải công bố mô hình nền mới.

---

# 12_architecture

Kiến trúc sản phẩm hiện tại dùng React mười chín, TypeScript và Vite cho tương tác; FastAPI làm giao diện upload, job và kết quả. API chạy trên địa chỉ cục bộ, chuyển công việc sang pipeline Python đã khóa. FFmpeg và OpenCV xử lý media, NumPy và SciPy xử lý tín hiệu, Silero tìm hoạt động lời nói, faster-whisper tạo bản chép; Praat và MultiPA tham gia các bằng chứng tiếng nói. Frontend không tự tính lại các điểm nghiên cứu. Streamlit vẫn phục vụ các luồng giáo viên và nghiên cứu với cùng logic nền. Artefact chủ yếu là media, tệp JSON và hash cục bộ; chưa có bằng chứng để vẽ một cơ sở dữ liệu quan hệ vào kiến trúc hiện tại. Phần sản phẩm vì vậy bao quanh, không thay thế, phương pháp đã khóa.

---

# 13_product

Ảnh này là giao diện thật trong bộ minh chứng final release, không phải giao diện minh họa được dựng cho bài báo cáo. Người dùng tải video hoặc mở một trong ba demo D043, D064 và D048, theo dõi quá trình phân tích, rồi xem kết quả hoặc mở lại bài gần đây. API có trạng thái công việc và sản phẩm có thể báo lỗi hay trả kết quả một phần, thay vì hiển thị đủ điểm giả định. Cần phân biệt luồng cohort theo lô trong công cụ nghiên cứu với luồng sản phẩm hiện thể hiện từng bài. Chức năng nhập TikTok có code, nhưng kiểm thử với URL thật vẫn được báo cáo là đang chờ. Tải tệp cục bộ là luồng minh chứng đáng tin cậy hơn trong tài liệu hiện có.

---

# 14_evidence

Ảnh D043 trong bộ minh chứng an toàn cho thấy cách sản phẩm đặt bản chép, đối chiếu bài đọc và các chỉ số nhịp nói cạnh kết quả. Người dùng có thể mở bằng chứng thay vì chỉ nhìn một con số. Lớp phản hồi cục bộ dựa trên các dấu hiệu đã đo và vẫn hoạt động khi không có mạng. Nếu được cho phép, AI chỉ nhận phần văn bản được cho phép và diễn đạt lại lời góp ý; kết quả phải qua kiểm tra hợp đồng dữ liệu. Nó không được đổi điểm hoặc tự thêm lỗi phát âm. Điểm tổng luyện tập là trung bình mô tả của bốn mục hiện có trên giao diện, chưa được kiểm định như một thang năng lực. Vì vậy, khả năng trình bày đẹp và tính hợp lệ khoa học cần được đánh giá riêng.

---

# 15_alignment_results

Khảo sát P1.4 trên sáu mươi tám video ghi nhận năm mươi tám bài căn được bằng hình ảnh và bốn bài bổ sung nhờ âm thanh. Tổng cộng là sáu mươi hai trên sáu mươi tám, tương đương chín mươi mốt phẩy hai phần trăm khi làm tròn một chữ số. Sáu trường hợp còn lại gồm năm bài căn chỉnh không tin cậy và một tệp không có luồng âm thanh. Các đoạn của thanh có chiều dài theo đúng số lượng từng nhóm. Kết quả cho thấy khả năng chuẩn bị đầu vào trên dữ liệu thật, nhưng không phải độ chính xác chấm nói, cũng chưa phải đánh giá độc lập độ đúng của mọi đoạn học sinh trên toàn bộ sáu mươi tám bài. Kết quả nhận dạng lời nói được đánh giá bằng một phép thử khác.

---

# 16_asr

Ở P2.4, ba hệ thống được so trên cùng sáu bản chép tham chiếu con người xác nhận, với cùng âm thanh, CPU int8 và cấu hình giải mã. small.en có micro-WER năm phẩy không hai phần trăm, thấp hơn distil-large-v3 là tám phẩy sáu chín và large-v3-turbo là tám phẩy tám một phần trăm. Nhóm vì vậy giữ small.en theo phép thử này, thay vì giả định mô hình lớn luôn tốt hơn. Đây là số cập nhật P2.4 trong báo cáo Word, khác kết quả P2.2A cũ còn xuất hiện trong README. WER đo lỗi nhận dạng gồm thay, bỏ và thêm từ; không thể lấy một trăm trừ WER để kết luận học sinh phát âm đúng bao nhiêu phần trăm. Sáu bài cũng chưa đại diện nhiều giọng và điều kiện thu.

---

# 17_development

Biểu đồ dùng MAE, tức sai lệch tuyệt đối trung bình giữa điểm dự đoán và mức tham chiếu, trên thang một đến năm. Trong mười hai lượt LOOCV, độ trôi chảy có MAE không phẩy bốn hai không bốn, phát âm không phẩy bốn chín một hai và ngữ điệu không phẩy năm tám tám một. Ngữ điệu lệch nhiều hơn trong phép thử này. Các con số được lấy từ báo cáo thực nghiệm P2.4D và phần kết quả của Word, không suy ra từ giao diện demo. Dù bài dự đoán được để riêng ở từng lượt, đây vẫn là đánh giá trong dữ liệu phát triển đã tham gia lựa chọn phương pháp. Một người nghe có AI hỗ trợ và miền nhãn hẹp khiến kết quả chưa thể xem như kiểm định độc lập hoặc chứng nhận độ chính xác.

---

# 18_mini_validation

Ngày bảy tháng mười một, cấu hình đã khóa được kiểm tra trên ba bài D064, D043 và D048. Điểm được tạo trước khi đọc các nhãn tương ứng và ba bài không được dùng tái hiệu chỉnh. MAE phát âm là không phẩy bốn ba sáu không, trôi chảy không phẩy năm một ba ba, ngữ điệu không phẩy bảy không hai bảy. Số bài cùng mức lần lượt là hai trên ba, hai trên ba và một trên ba; lệch không quá một mức là ba trên ba, ba trên ba và hai trên ba. Việc giữ mẫu số cho thấy giới hạn rất nhỏ của phép thử. Không nên dùng thay đổi giữa biểu đồ này và LOOCV để nói hệ thống tốt lên hoặc kém đi theo thời gian vì mẫu và thiết kế đánh giá khác nhau.

---

# 19_failure_case

D048 là ví dụ cần được nói thẳng trong phần bảo vệ. Ở ngữ điệu, người đánh giá cho mức ba trong khi máy dự đoán bốn phẩy hai sáu bốn bốn, sai lệch tuyệt đối một phẩy hai sáu bốn bốn điểm. Ở phát âm, người đánh giá cũng cho ba nhưng máy dự đoán ba phẩy tám sáu bốn không. Cả ba điểm máy phát âm chỉ trải từ ba phẩy bảy sáu không chín đến ba phẩy tám sáu bốn không. Điều này nhắc rằng sai lệch trung bình có thể thấp khi nhãn ít đa dạng mà khả năng phân biệt vẫn chưa được chứng minh. Nhóm cần so với cách đoán đơn giản và đánh giá trên dữ liệu đa dạng hơn, không chỉ đưa số trung bình thuận lợi.

---

# 20_criterion_status

Sáu dòng trong bảng có mức chứng cứ khác nhau. Trôi chảy dùng timing đã hiệu chỉnh nhưng mới có dữ liệu hẹp; phát âm và ngữ điệu dùng MultiPA ở mức sơ bộ, trong đó ngữ điệu còn sai lệch lớn. Đọc đủ nội dung dùng bản chép tự động đối chiếu phần bài đọc một trăm ba mươi chín từ sau khi tách ba từ tiêu đề. MultiPA vẫn giữ target phiên bản một theo cấu hình đã khóa, nên không được trộn hai ranh giới này khi tái tạo thực nghiệm. Thiếu từ trong ASR chưa chắc là học sinh bỏ từ. Mức dễ hiểu chưa có điểm máy ổn định. Điểm tổng luyện tập chỉ là trung bình đều bốn mục, không có giá trị CEFR hay IELTS. Tính minh bạch về mức chứng cứ quan trọng hơn số lượng chỉ số trên màn hình.

---

# 21_pending_validation

Mục ba phẩy bảy trong báo cáo Word cập nhật việc đã chấm thêm mười bài sau P2.5 và đang tiến hành đánh giá toàn bộ sáu mươi tám video. Tuy nhiên, tài liệu chưa cung cấp bảng chỉ số mới, nên bài trình bày không biến nhận xét tương đồng khá tốt thành một tỷ lệ hoặc hệ số tự đặt. Kế hoạch là khóa cấu hình, giáo viên chấm trước khi nhìn điểm máy và tổng hợp riêng tập phát triển với mười tám bài giữ riêng. Các chỉ số dự kiến gồm bias, MAE, cùng mức, lệch không quá một mức, ICC đồng thuận tuyệt đối và Kappa có trọng số bậc hai. Pearson có thể bổ sung thông tin nhưng tương quan không tự đồng nghĩa với đồng thuận. Đây là trạng thái công việc còn chờ, chưa thay thế các kết quả đã công bố trước.

---

# 22_limits

Ba giới hạn quyết định cách dùng sản phẩm. Thứ nhất là dữ liệu chỉ có một bài T001, chưa đại diện nhiều chủ đề, trình độ hay điều kiện quay. Thứ hai là nhãn ít, hẹp và do một người nghe có AI hỗ trợ; mười tám bài giữ riêng chưa có kiểm định cuối. Thứ ba là nhóm chưa thực hiện thử nghiệm sư phạm để biết học sinh có tiến bộ vì phản hồi hay không. Kiểm thử phần mềm chỉ kiểm tra các hành vi đã thiết kế trong những trường hợp đã thử. Vì thế, cách dùng phù hợp hiện tại là hỗ trợ luyện tập có giáo viên theo dõi, chưa dùng chấm điểm chính thức hoặc quy đổi chứng chỉ. Việc lưu và sử dụng video học sinh cũng cần sự đồng ý và kiểm soát truy cập rõ ràng.

---

# 23_roadmap

Thứ tự ưu tiên tiếp theo là khóa toàn bộ phương pháp rồi kiểm định mười tám bài giữ riêng, bổ sung ít nhất hai giáo viên chấm độc lập, sau đó mở rộng bài đọc và điều kiện thu. Đánh giá phản hồi cần nhật ký luyện lại, kết quả trước–sau và thiết kế so sánh phù hợp. Báo cáo đặt mốc tham khảo MAE không quá không phẩy năm điểm và ít nhất tám mươi phần trăm bài lệch không quá một mức. Hai con số này là mục tiêu cho lần kiểm định tới, chưa phải kết quả đã đạt và không phải bảo đảm. Nếu không đạt, nhóm cần công bố nguyên nhân thay vì chọn lại mẫu sau khi đã xem tập kiểm định. Thu thập dữ liệu tiếp theo cần quy định sự đồng ý, quyền truy cập, thời hạn lưu và quyền rút hoặc xóa dữ liệu.

---

# 24_conclusion

Kết luận của nhóm là đã có một nguyên mẫu hoạt động cùng quy trình có thể truy vết: dùng video tham chiếu, định vị lời học sinh, lấy bằng chứng từ âm thanh gốc và cho giáo viên xem lại. Kết quả căn chỉnh sáu mươi hai trên sáu mươi tám và WER năm phẩy không hai phần trăm có ý nghĩa trong đúng các phép thử đã trình bày; chúng không chứng nhận năng lực chấm nói tổng quát. Độ tin cậy điểm cần được kiểm định độc lập trước khi dùng chính thức. Nhóm đề nghị hỗ trợ việc chấm độc lập và hoàn tất kiểm định mười tám bài giữ riêng. Xin mời hội đồng phản biện về phương pháp, kết quả và điều kiện sử dụng; bốn trang phụ lục tiếp theo dùng để đối chiếu kỹ thuật khi cần.

---

# 25_api_testing

Phụ lục này minh họa các endpoint có thật trong create_app: tải media, tạo job đánh giá, hỏi trạng thái job và lấy kết quả của media. Kết quả được lưu cục bộ với hash để kiểm tra đúng nguồn; media mới không tự trở thành thành viên tập nghiên cứu. Báo cáo final release ngày mười ba tháng mười một ghi một trăm chín mươi ba kiểm thử Python đạt, hai bỏ qua có chủ đích, năm kiểm thử frontend và tám kiểm thử Playwright. Đây là kết quả lưu sẵn trong repository, không phải bộ kiểm thử đã chạy lại trong tác vụ soạn slide. Chúng hỗ trợ đánh giá hành vi phần mềm, chưa thay thế kiểm định độ tin cậy điểm hoặc hiệu quả giáo dục.

---

# 26_code_invariants

Ba dòng ở phần trên lấy từ run_pair trong runner: nguồn là duet_path, được require_raw_source kiểm tra, rồi prepare_turn_audio chuẩn bị từ chính nguồn đó. Dòng phía dưới lấy từ apply_fitted_mapping trong p24d_multipa, giới hạn kết quả giữa low và high trước khi làm tròn. Các trích đoạn thuộc hai hàm khác nhau, không phải một chương trình có thể chạy độc lập. Chúng cho phép hội đồng kiểm tra rằng hai nguyên tắc dữ liệu và miền điểm có hiện diện ở cấp triển khai, chứ không chỉ trong phần diễn giải báo cáo. Chúng cũng không thay cho đánh giá thực nghiệm rằng các mốc thời gian hoặc điểm dự đoán đã đúng.

---

# 27_p25_records

Bảng giữ chín cặp điểm theo từng bài và tiêu chí từ báo cáo P2.5. Có thể dùng nó để kiểm tra lại MAE của ba tiêu chí thay vì chỉ tin biểu đồ tổng hợp. Ví dụ, ba sai lệch phát âm là không phẩy hai ba chín một, không phẩy hai không năm không và không phẩy tám sáu bốn không; trung bình làm tròn thành không phẩy bốn ba sáu không. D048 ngữ điệu là trường hợp lệch lớn nhất trong bảng, một phẩy hai sáu bốn bốn điểm. Scorer được khóa trước khi đọc các nhãn này, và không được dùng chúng để tái hiệu chỉnh. Cỡ mẫu ba cùng nhãn một người nghe có AI hỗ trợ không đủ cho một kết luận thống kê ổn định về khả năng khái quát.

---

# 28_references

Nguồn ưu tiên là báo cáo Word tháng mười một năm hai nghìn không trăm hai mươi sáu, sau đó đối chiếu các báo cáo thực nghiệm P2.4, P2.4D, P2.5 và final release trong repository. Các số liệu dự án không lấy từ benchmark công bố của mô hình ngoài. Tài liệu nền đã kiểm tra gồm bài MultiPA của Chen, Yu và Hirschberg tại Interspeech hai nghìn không trăm hai mươi bốn, bài Whisper của Radford và cộng sự tại PMLR hai nghìn không trăm hai mươi ba, và kho chính thức Silero VAD. Trong báo cáo Word có chỗ ký hiệu số tài liệu chưa thống nhất; bài trình bày đối chiếu theo tên công trình để tránh gán nhầm. Những nội dung chưa có artefact đủ kiểm chứng, như kết quả đồng thuận mới trên sáu mươi tám bài, được giữ ở trạng thái đang thực hiện.
