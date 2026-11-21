# 01_opening

Thời lượng dự kiến: 01:00. Mốc trình bày: 00:00–01:00.

Kính thưa hội đồng, sau khi quay một bài luyện nói tiếng Anh, học sinh cần biết điều gì để lần sau làm tốt hơn? Một con số điểm có thể cho biết kết quả chung, nhưng chưa chỉ ra nên nghe lại đoạn nào hoặc luyện lại câu nào. DUET / SPEAK được xây dựng từ nhu cầu đó: hỗ trợ giáo viên biến video luyện nói thành những bằng chứng có thể kiểm tra, rồi gợi ý việc luyện tiếp.

Đây là nguyên mẫu của đề tài Phần mềm hỗ trợ đánh giá luyện nói tiếng Anh đa phương thức, khai thác video tham chiếu và đối sánh bằng chứng giọng nói. Ảnh bên phải là giao diện sản phẩm thật. Trong mười lăm phút, tôi sẽ đi từ khó khăn thực tế đến cách hệ thống xử lý một bài cụ thể, rồi làm rõ các kết quả hiện có chứng minh được điều gì. Xin bắt đầu từ công việc mà giáo viên phải làm sau mỗi lần học sinh nộp bài.

Nhịp trình bày: dành khoảng 5 giây cho người nghe nhìn giao diện; không đọc toàn bộ tên đề tài trên slide. Nguồn: PPT gốc trang 01; báo cáo Word, tóm tắt dự án.

---

# 02_problem

Thời lượng dự kiến: 01:00. Mốc trình bày: 01:00–02:00.

Trong bối cảnh của báo cáo, một giáo viên phụ trách khoảng năm lớp với hơn một trăm năm mươi học sinh có thể nhận khoảng một trăm năm mươi video nếu mỗi em nộp một bài trong tuần. Với mỗi video, giáo viên phải mở bài, tìm đúng phần học sinh nói, nghe và đối chiếu văn bản mẫu, rồi viết nhận xét. Công việc không chỉ là bấm một nút để lấy điểm.

Khó khăn còn nằm ở đặc điểm Duet: bản nộp có thể có cả giọng mẫu và giọng học sinh. Nếu nhận nhầm lời mẫu là lời của người học, những phép đo phía sau cũng mất ý nghĩa. Vì vậy, mục tiêu là hỗ trợ các thao tác lặp lại và tổ chức thông tin để giáo viên xem xét, còn quyết định đánh giá vẫn thuộc về giáo viên. Con số một trăm năm mươi là ước tính khối lượng trong báo cáo; nhóm chưa có phép đo để khẳng định đã tiết kiệm bao nhiêu thời gian. Vậy trợ lý này hỗ trợ theo cách nào?

Nhịp trình bày: lần lượt chỉ bốn thao tác, không dừng lâu ở con số. Nguồn: PPT gốc trang 02; báo cáo Word, Mở đầu §1.

---

# 03_solution

Thời lượng dự kiến: 02:00. Mốc trình bày: 02:00–04:00.

Có thể hiểu hệ thống như một trợ lý chuẩn bị hồ sơ cho một bài nói. Học sinh vẫn quay video như bình thường. Sau khi nhận bài, phần mềm thực hiện bốn việc: nhận video, tìm phần lời học sinh, phân tích giọng nói gốc và đưa ra gợi ý để xem lại, luyện tiếp. Bốn bước này là bản đồ của toàn bộ phần trình bày tiếp theo.

Điểm quan trọng ở bước thứ hai là hệ thống đã biết video mẫu mà học sinh luyện theo. Có sẵn mẫu giúp đối chiếu xem hai video lệch nhau ở đâu và phần giọng mẫu nào còn xuất hiện trong bản nộp. Sau khi tìm được các đoạn lời học sinh, phần mềm mới lấy âm thanh gốc để chép lời và đo các dấu hiệu như nhịp nói hay khoảng dừng. Kết quả được trình bày cùng bằng chứng, giúp người dùng có cơ sở nghe lại thay vì chỉ tin vào một con số.

Phân công giữa máy và người cần rõ ràng. Máy hỗ trợ việc tìm kiếm, đo đạc và tổng hợp những gì có thể lặp lại. Giáo viên đặt chuẩn, kiểm tra các trường hợp chưa chắc chắn và quyết định nhận xét phù hợp với học sinh. Người học có thể dùng gợi ý để luyện thêm, nhưng điều đó chưa đồng nghĩa nghiên cứu đã chứng minh phần mềm làm kỹ năng nói tiến bộ.

Luồng xử lý chính chạy cục bộ trên máy tính. Để người nghe dễ theo dõi, từ đây chúng ta cùng đi với một bài thật, mã D043, theo chủ đề “One memorable event”. Đây là mã bài nộp trong bộ phát triển, không phải tên của học sinh. Ở mỗi bước, tôi chỉ trả lời ba ý: nhận gì, làm gì và trả về gì.

Nhịp trình bày: dành khoảng 10–15 giây chỉ đường đi qua bốn bước; nhấn mạnh ranh giới máy hỗ trợ và giáo viên quyết định. Nguồn: PPT gốc trang 03, 05–06, 12–14; báo cáo Word §2.4 và §3.6.

---

# 04_input

Thời lượng dự kiến: 01:00. Mốc trình bày: 04:00–05:00.

Đây là điểm bắt đầu của D043. Phần mềm nhận video Duet đã quay của người học; đồng thời có sẵn video mẫu T001 và bài đọc tương ứng. Duet có thể hiểu đơn giản là video người học thực hiện cùng một video mẫu. T001 là mã bài đọc, còn D043 là mã một bài nộp theo bài đó.

Trên giao diện thật, người dùng chọn tệp video hoặc mở bài demo đã có. Việc hệ thống làm ở bước này là tiếp nhận bài để chuẩn bị kiểm tra; đầu ra chưa phải điểm số mà là một bài sẵn sàng đi qua quy trình xử lý. Cách giới thiệu bằng một bài thật giúp chúng ta phân biệt thao tác trên sản phẩm với phần diễn giải nguyên lý. Ví dụ này thuộc bộ phát triển, không phải bài thuộc tập kiểm định giữ riêng. Sau khi đã có bài, câu hỏi tiếp theo là: ở đâu trong video có lời học sinh?

Nhịp trình bày: chỉ vùng chọn tệp và khu vực demo khoảng 8 giây; dùng ảnh tĩnh, không phụ thuộc kết nối hay thao tác trực tiếp. Nguồn: PPT gốc trang 04, 13; ảnh phát hành 02_ASSESSMENT.png.

---

# 05_locate

Thời lượng dự kiến: 01:30. Mốc trình bày: 05:00–06:30.

Ở bước tìm lời, đầu vào là hai video: mẫu đã biết và bản Duet của người học. Hệ thống trước hết so sánh để đặt hai video vào đúng tương quan thời gian. Có thể hình dung giống việc đặt hai bản của cùng một câu chuyện cạnh nhau để biết đoạn nào tương ứng với đoạn nào. Hình ảnh hỗ trợ xác định vị trí, còn âm thanh giúp kiểm tra giọng mẫu còn xuất hiện trong bản nộp hay không.

Đầu ra của bước này là các mốc của những đoạn có thể là lời học sinh. Chúng ta chưa chấm chất lượng phát âm ngay tại đây. Sơ đồ chỉ minh họa nguyên lý; tôi không tự đặt một mốc giây cụ thể hay khẳng định D043 có một loại nhiễu nào khi chưa đưa bằng chứng của đoạn đó.

Một điểm cần chú ý là hệ thống có quyền chưa tiếp tục. Nếu dữ liệu đủ rõ, bài đi tới bước phân tích. Nếu có nghi ngờ, cần người nghe kiểm tra thêm. Nếu tệp không có âm thanh hoặc không thể đặt khớp đáng tin cậy, hệ thống phải dừng hoặc yêu cầu bài khác. Các trạng thái đó nói về điều kiện xử lý, không phải học sinh giỏi hay yếu. Giá trị của việc biết mẫu nằm ở hạn chế nguy cơ đem lời mẫu đi chấm như lời học sinh. Khi đã có vị trí, hệ thống dùng âm thanh nào để phân tích?

Nhịp trình bày: đi theo hai mũi tên rồi dừng khoảng 8 giây ở ba nhánh tiếp tục–nghe lại–dừng. Nguồn: PPT gốc trang 05, 07–08; Word §2.4–2.5.1.

---

# 06_analyse

Thời lượng dự kiến: 01:30. Mốc trình bày: 06:30–08:00.

Đầu vào của bước này là các mốc đoạn vừa tìm được và video Duet gốc. Hệ thống lấy lại những đoạn tương ứng từ âm thanh gốc, rồi chép lời và đo các dấu hiệu của bài nói. Đây là nguyên tắc cần giữ: âm thanh đã giảm ảnh hưởng giọng mẫu chỉ giúp tìm vị trí; phần dùng để đánh giá được lấy từ bản gốc, nhằm tránh chấm trên giọng đã bị quá trình lọc làm thay đổi.

Đầu ra gồm ba nhóm dễ hiểu. Thứ nhất là bản chép để đối chiếu nội dung với bài mẫu. Thứ hai là nhịp nói: tốc độ, thời gian có tiếng và các khoảng dừng. Thứ ba là những ước lượng về cách đọc, gồm phát âm và ngữ điệu. Hai tiêu chí sau hiện vẫn ở mức sơ bộ. Cách chia này giúp giáo viên biết nhận định đang dựa trên loại bằng chứng nào, thay vì gộp mọi thứ vào một điểm không giải thích được.

Với D043, bản chép và các chỉ số sẽ được giữ để xem lại cùng kết quả. Nhưng nếu bản chép tự động khác một từ trong mẫu, chúng ta chưa được kết luận ngay rằng học sinh phát âm sai hoặc bỏ từ. Có thể máy nghe chưa đúng hoặc tín hiệu chưa rõ. Cần quay lại nghe bằng chứng. Như vậy, bước này tạo ra thông tin có thể đối chiếu; bước kế tiếp mới biến thông tin ấy thành việc người học có thể thực hiện.

Nhịp trình bày: dành khoảng 10 giây phân biệt ba nhóm đầu ra; nhấn hai lần “âm thanh gốc” nhưng không giải thích tên thuật toán. Nguồn: PPT gốc trang 09–11, 20; Word §2.5.

---

# 07_feedback

Thời lượng dự kiến: 01:00. Mốc trình bày: 08:00–09:00.

Bước cuối nhận bằng chứng của bài nói, chọn điểm mạnh hoặc chỗ cần xem lại và trả về gợi ý luyện tập. Với D043, kết quả thật có các từ được gợi ý xem lại là classmates, memorable và school. Cần gọi đúng đây là lời nhắc kiểm tra, chưa phải danh sách lỗi phát âm đã được xác nhận.

Một gợi ý cụ thể trong kết quả là đọc lại câu chứa classmates một lần chậm, sau đó đọc ở nhịp tự nhiên và so sánh. Cách góp ý này tạo ra một hành động tiếp theo, rõ hơn việc chỉ bảo người học “hãy cố gắng hơn”. Tuy vậy, nó vẫn cần đặt cạnh việc nghe lại và hướng dẫn của giáo viên.

Phần gợi ý cơ bản dựa trên bằng chứng sẵn có. Nếu bật AI để diễn đạt tự nhiên hơn, AI chỉ được viết lại lời góp ý, không đổi điểm hoặc tự thêm lỗi. Đến đây, chúng ta đã đi hết bốn bước. Sau đây là màn hình đầu ra của chính ví dụ đó.

Nhịp trình bày: chỉ ba từ rồi đọc gợi ý tiếng Việt; không yêu cầu phát âm trực tiếp trước hội đồng. Nguồn: PPT gốc trang 14; ảnh thật D043 03_RESULTS_D043.png, phần “Your next take”.

---

# 08_product

Thời lượng dự kiến: 01:20. Mốc trình bày: 09:00–10:20.

Đây là ảnh kết quả thật của D043. Bên trái giữ toàn bộ màn hình để thấy bối cảnh; vùng lớn ở giữa phóng to phần tiêu chí từ cùng ảnh, không phải một giao diện minh họa được vẽ thêm. Khu vực hình người học trong ảnh nguồn đã được làm mờ để tránh nhận diện.

Người dùng có thể xem từng tiêu chí, mở bằng chứng và nghe lại, rồi dùng gợi ý để luyện tiếp. Ví dụ, phần “đọc đủ nội dung” đang hiển thị khoảng chín mươi bảy phần trăm. Cần hiểu đây là mức đối chiếu bài đọc dựa trên bản chép tự động, không phải chín mươi bảy phần trăm năng lực nói hoặc phát âm đúng. Các sai khác vẫn có thể do công cụ chép lời.

Màn hình cũng có các điểm phát âm và ngữ điệu ở mức sơ bộ. Điểm tổng trên đầu trang chỉ là chỉ số mô tả của sản phẩm, chưa được kiểm định như một thang năng lực. Vì vậy, sản phẩm tạo ra một hồ sơ để xem xét, chứ không biến mọi kết quả thành kết luận chắc chắn. Để đọc rõ hơn ví dụ D043, trang tiếp theo tách ba điểm của bài này bằng nhãn tiếng Việt.

Nhịp trình bày: dành khoảng 10 giây đối chiếu ảnh toàn màn hình với vùng phóng to. Nguồn: bộ minh chứng phát hành, 03_RESULTS_D043.png; PPT gốc trang 13–14 và 20.

---

# 09_d043

Thời lượng dự kiến: 01:20. Mốc trình bày: 10:20–11:40.

Ba con số này đều là kết quả có thật của D043 trong phép kiểm tra nhỏ P2.5, được làm tròn hai chữ số để dễ nhìn. Điểm máy về phát âm là ba phẩy tám không; trôi chảy bốn phẩy sáu một; ngữ điệu ba phẩy chín hai, trên thang một đến năm. Giá trị chưa làm tròn được giữ ở nguồn và chú thích.

Điều đáng quan tâm không chỉ là con số lớn hay nhỏ, mà là nó thuộc mặt nào của bài nói. Nhịp nói dựa vào các dấu hiệu thời gian; phát âm và ngữ điệu là những ước lượng sơ bộ từ mô hình. Không nên lấy chênh lệch giữa ba tiêu chí để tuyên bố chắc chắn một mặt mạnh hơn bao nhiêu mặt khác, vì chúng có cách đo khác nhau. Mức dễ hiểu cũng chưa có điểm máy ổn định.

Trong bảng tham chiếu gốc, người đánh giá cho D043 các mức lần lượt bốn, năm và bốn. Điều đó cho phép đối chiếu một trường hợp cụ thể, nhưng một bài gần người chấm không chứng minh mọi bài đều sẽ gần như vậy. Cách dùng phù hợp là chọn nơi cần nghe và xem lại. Vậy khi nhìn rộng hơn một bài, nhóm đã thu được những bằng chứng nào?

Nhịp trình bày: chỉ ba tiêu chí khoảng 6 giây; không tập trung vào điểm tổng. Nguồn: PPT gốc trang 27; P25_FROZEN_MINI_VALIDATION_REPORT.md, bản ghi D043.

---

# 10_results

Thời lượng dự kiến: 01:20. Mốc trình bày: 11:40–13:00.

Có hai phép thử cần đọc riêng. Thứ nhất, khảo sát căn chỉnh trên sáu mươi tám video cùng bài T001 cho thấy năm mươi tám bài khớp qua hình ảnh, bốn bài bổ sung nhờ âm thanh, tổng cộng sáu mươi hai trên sáu mươi tám, tức chín mươi mốt phẩy hai phần trăm. Sáu bài còn lại chưa đủ điều kiện: năm bài khớp kém và một tệp thiếu âm thanh. Hệ thống không ép các bài đó thành kết quả chấm nói.

Thứ hai, công cụ chép lời có tỷ lệ lỗi từ năm phẩy không hai phần trăm trên sáu bản chép tham chiếu đã được con người xác nhận. Có thể hình dung là khoảng năm lỗi tính trên mỗi một trăm từ tham chiếu, theo cách đo của thử nghiệm. Đây không phải tỷ lệ học sinh phát âm sai.

Hai kết quả cho thấy các bước chuẩn bị đầu vào và chép lời có thể vận hành trên bộ thử hiện có. Nhưng tỷ lệ căn chỉnh không trả lời thay cho câu hỏi điểm phát âm đúng đến đâu; lỗi chép lời cũng không tự biến thành lỗi của người học. Để kết luận thuyết phục, cần xem tiếp chính sai lệch giữa điểm máy và người đánh giá.

Nhịp trình bày: đi từ ba phần của thanh sang ô chép lời, dành khoảng 8 giây cho hai mẫu số 68 và 6. Nguồn: PPT gốc trang 15–16; Word §3.1–3.2.

---

# 11_limits

Thời lượng dự kiến: 01:00. Mốc trình bày: 13:00–14:00.

Trên đúng ba bài kiểm tra nhỏ sau khi khóa cấu hình, sai lệch tuyệt đối trung bình là khoảng không phẩy bốn bốn điểm với phát âm, không phẩy năm một với trôi chảy và không phẩy bảy không với ngữ điệu, trên thang một đến năm. Ngữ điệu lệch nhiều hơn trong phép thử này. Bản gốc còn cho thấy D048 có sai lệch ngữ điệu hơn một điểm, nên không thể chỉ nhìn trung bình rồi bỏ qua trường hợp khó.

Ba bài là quá ít để kết luận khả năng áp dụng rộng. Dữ liệu hiện cùng một bài đọc, điểm tham chiếu đến từ một người nghe có AI hỗ trợ, và mười tám bài giữ riêng chưa có kiểm định cuối. Nhóm cũng chưa chứng minh học sinh tiến bộ nhờ phần mềm. Vì vậy, hiện nên dùng để hỗ trợ luyện tập có giáo viên theo dõi, chưa dùng chấm điểm chính thức hay quy đổi chứng chỉ. Những giới hạn này dẫn đến bước tiếp theo của dự án.

Nhịp trình bày: dành khoảng 5 giây nhìn sự khác nhau giữa ba thanh; không đọc số nhiều chữ số. Nguồn: PPT gốc trang 18–19, 22; P2.5 N=3.

---

# 12_conclusion

Thời lượng dự kiến: 01:00. Mốc trình bày: 14:00–15:00.

Để kết thúc, xin trở lại ba câu hỏi ban đầu. Hệ thống được xây dựng để hỗ trợ phản hồi cho nhiều bài luyện nói. Nó dùng video mẫu để tìm phần lời học sinh, quay lại âm thanh gốc để tạo bằng chứng, rồi trình bày kết quả và gợi ý xem lại. Kết quả hiện có chứng minh đã có nguyên mẫu vận hành được trong phạm vi thử nghiệm, còn độ tin cậy chấm điểm cần được kiểm định độc lập.

Giá trị trước mắt là thông tin được tổ chức rõ hơn để giáo viên và học sinh có thể đối chiếu, không phải thay thế người đánh giá. Ưu tiên tiếp theo là có nhiều người chấm độc lập và hoàn tất kiểm định mười tám bài giữ riêng; sau đó mở rộng dữ liệu và đo giá trị của việc luyện tập. Việc thu thập thêm cần có sự đồng ý phù hợp.

Thông điệp nhóm muốn giữ lại là: xem lại bằng chứng và luyện tiếp có định hướng. Đây là định hướng của giải pháp, chưa phải tuyên bố hiệu quả giáo dục đã được đo. Xin cảm ơn và kính mời hội đồng trao đổi.

Nhịp trình bày: kết thúc ở mốc 15:00; phần hỏi đáp nằm ngoài thời gian này. Nguồn: PPT gốc trang 23–24; Word, Kết luận và kiến nghị.
