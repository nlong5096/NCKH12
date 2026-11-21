import { ArrowDown, ShieldWarning } from "@phosphor-icons/react";
import { decimal, researchData as d } from "../data/researchData";
import { Page, Note } from "./StorySlides";

export function Appendix01() {
  const layers = [
    [
      "Giao diện",
      "React 19 · TypeScript · Vite",
      "Chọn video, hiển thị kết quả",
    ],
    ["Kết nối và điều phối", "FastAPI · Python", "Chạy quy trình ở phía xử lý"],
    [
      "Video và âm thanh",
      "FFmpeg · OpenCV · Silero VAD · AEC3",
      "Căn chỉnh, phát hiện vùng lời học sinh",
    ],
    [
      "Nhận dạng và đánh giá",
      "faster-whisper small.en · MultiPA",
      "Bản chép, đặc trưng, điểm và bằng chứng",
    ],
  ];
  return (
    <Page
      id="a01"
      section="Phụ lục · Kiến trúc hệ thống"
      title="Giao diện hiển thị, Python thực hiện phân tích"
      source="Chương 2.5.4."
    >
      <div className="architecture-stack">
        {layers.map(([name, tech, detail], i) => (
          <div key={name}>
            <span>{name}</span>
            <strong>{tech}</strong>
            <p>{detail}</p>
            {i < layers.length - 1 && <ArrowDown />}
          </div>
        ))}
      </div>
      <Note>
        Nhóm xây dựng quy trình, tích hợp, kiểm soát đầu vào, hiệu chỉnh và giao
        diện; sử dụng các mô hình đã có.
      </Note>
    </Page>
  );
}
export function Appendix02() {
  return (
    <Page
      id="a02"
      section="Phụ lục · Căn chỉnh và âm thanh gốc"
      title="Lọc để tìm vị trí, dùng bản gốc để đánh giá"
      source="Chương 2.5.1."
    >
      <div className="technical-columns">
        <div>
          <h3>Căn chỉnh hai video</h3>
          <p>
            Đối chiếu dấu vân tay hình ảnh xám/gradient tại nhiều vị trí. Điểm
            neo hợp lệ phải phủ ít nhất 70% phần mẫu được lấy mẫu.
          </p>
          <p>
            Khi hình ảnh chưa đủ: tương quan dạng sóng, GCC-PHAT và độ tương
            đồng log-Mel.
          </p>
          <div className="formula">y(t) = x(t) − g · r(t − τ)</div>
          <p className="small-copy">
            x: Duet · r: mẫu · τ: độ lệch · g: hệ số khuếch đại
          </p>
        </div>
        <div>
          <h3>Kiểm tra giọng mẫu còn sót</h3>
          <ul>
            <li>Tương quan dạng sóng ≥ 0,50</li>
            <li>Độ tương đồng log-Mel ≥ 0,60</li>
            <li>Suppression cục bộ ≤ 0 dB</li>
            <li>Tỷ lệ chồng lấp mẫu ≥ 0,30</li>
          </ul>
          <p>
            Thử trừ tham chiếu tuyến tính và WebRTC AEC3; Silero VAD xác định
            vùng có tiếng nói.
          </p>
        </div>
      </div>
      <Note>
        Âm thanh đã giảm giọng mẫu chỉ dùng để định vị. Mọi phép chấm quay lại
        đoạn thời gian tương ứng trong bản Duet gốc.
      </Note>
    </Page>
  );
}
export function Appendix03() {
  return (
    <Page
      id="a03"
      section="Phụ lục · Đặc trưng độ trôi chảy"
      title="Mô tả nhịp nói bằng các phép đo thời gian"
      intro="Nw: số từ · T: toàn lượt nói · Ts: thời gian có tiếng nói · Tp: thời gian dừng · Nruns: số chuỗi nói."
      source="Chương 2.5.2."
    >
      <div className="formula-grid">
        {[
          ["Speech Rate", "60 × Nw / T", "Số từ/phút trên toàn lượt nói"],
          ["Articulation Rate", "60 × Nw / Ts", "Số từ/phút khi đang nói"],
          ["Phonation Ratio", "Ts / T", "Tỷ lệ thời gian có tiếng nói"],
          ["Pause Ratio", "Tp / T", "Tỷ lệ thời gian dừng"],
          [
            "Mean Length of Run",
            "Nw / Nruns",
            "Số từ trung bình giữa hai khoảng dừng",
          ],
        ].map(([name, formula, detail]) => (
          <div key={name}>
            <span>{name}</span>
            <strong>{formula}</strong>
            <p>{detail}</p>
          </div>
        ))}
      </div>
      <Note>
        Khoảng dừng từ khoảng 0,25 giây; dừng dài từ khoảng 0,70 giây. Có ghi số
        khoảng dừng và khoảng dừng dài nhất.
      </Note>
    </Page>
  );
}
export function Appendix04() {
  return (
    <Page
      id="a04"
      section="Phụ lục · MultiPA và hiệu chỉnh"
      title="Quy đổi điểm trong miền đã có đánh giá tham chiếu"
      source="Chương 2.5.3; Chương 3.4."
    >
      <div className="technical-columns">
        <div>
          <h3>Mô hình có sẵn</h3>
          <p>
            MultiPA ước lượng phát âm và ngữ điệu. Nhóm không huấn luyện tinh
            chỉnh lại mô hình trên dữ liệu nhỏ của dự án.
          </p>
          <p>
            Chia đoạn dài thành các phần tối đa khoảng 14,5 giây; lấy trung bình
            điểm thô.
          </p>
          <div className="formula">Sraw = (1/m) × Σ Si</div>
        </div>
        <div>
          <h3>Hiệu chỉnh có giới hạn</h3>
          <p>
            Phát âm tham chiếu chỉ có mức 3 và 4, nên điểm dự đoán được giới hạn
            trong khoảng [3; 4].
          </p>
          <div className="formula">ŷ = 3 + P(y = 4 | x)</div>
          <p>
            Ngữ điệu: các mức {`{2, 3, 4, 5}`}. Mỗi lượt kiểm tra chéo dùng 11
            bài để dự đoán bài thứ 12.
          </p>
        </div>
      </div>
      <Note warn>
        Dữ liệu P2.5 không được dùng để chỉnh lại cách chấm. Điểm phát âm ít
        phân tán là hạn chế cần tiếp tục kiểm tra.
      </Note>
    </Page>
  );
}
export function Appendix05() {
  return (
    <Page
      id="a05"
      section="Phụ lục · Đối chiếu kết quả"
      title="Giữ nguyên số liệu và mẫu số của từng phép thử"
      source="Chương 3.3–3.4; Bảng 3."
    >
      <table className="exact-results">
        <thead>
          <tr>
            <th>Tiêu chí</th>
            <th>
              MAE · 12 bài
              <br />
              Kiểm tra chéo
            </th>
            <th>
              MAE · 3 bài
              <br />
              P2.5
            </th>
            <th>
              Cùng mức
              <br />
              P2.5
            </th>
            <th>
              Lệch ≤1 mức
              <br />
              P2.5
            </th>
          </tr>
        </thead>
        <tbody>
          {d.scoring.loocv.map((r, i) => (
            <tr key={r.criterion}>
              <th>{r.criterion}</th>
              <td>{decimal(r.mae, 4)}</td>
              <td>{decimal(d.scoring.p25[i].mae, 4)}</td>
              <td>{d.scoring.p25[i].sameBand}</td>
              <td>{d.scoring.p25[i].withinOne}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="definition-strip">
        <p>
          <b>MAE</b> là sai lệch tuyệt đối trung bình giữa máy và người đánh
          giá.
        </p>
        <p>
          <b>LOOCV</b> là kiểm tra chéo lần lượt để riêng từng bài; vẫn thuộc
          tập phát triển.
        </p>
      </div>
      <Note>
        Điểm tham chiếu của 12 bài đến từ một người nghe có AI hỗ trợ. Chưa có
        đo mức thống nhất giữa nhiều người chấm.
      </Note>
    </Page>
  );
}
export function Appendix06() {
  return (
    <Page
      id="a06"
      section="Phụ lục · An toàn và bảo vệ dữ liệu"
      title="Không ép đầu vào thiếu tin cậy thành điểm số"
      source="Chương 2.7–2.8; Chương 3.1, 3.5–3.6."
    >
      <div className="safety-flow">
        {[
          ["Không có âm thanh", "Dừng xử lý"],
          ["Căn chỉnh không chắc chắn", "Yêu cầu kiểm tra"],
          ["Giọng mẫu, nhạc lớn, tiếng nhỏ", "Chuyển người nghe xem lại"],
        ].map(([a, b]) => (
          <div key={a}>
            <ShieldWarning />
            <strong>{a}</strong>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div className="technical-columns privacy-copy">
        <p>
          Báo cáo dùng mã bài, không công khai gương mặt hoặc liên kết nhận
          diện. Cần đồng ý phù hợp, giới hạn truy cập, quy định lưu trữ và quyền
          rút dữ liệu.
        </p>
        <p>
          Dữ liệu người dùng mới tách khỏi dữ liệu nghiên cứu. AI chỉ viết lại
          góp ý khi được cho phép. Lưu phiên bản phương pháp, giá trị đo và cảnh
          báo để tái kiểm tra.
        </p>
      </div>
      <Note>
        Từ 11/11: bỏ ba từ tên chủ đề “One memorable event” khỏi văn bản chấm
        đọc đủ; không đổi điểm phát âm, ngữ điệu đã khóa.
      </Note>
    </Page>
  );
}
export function Appendix07() {
  return (
    <Page
      id="a07"
      section="Phụ lục · Kế hoạch kiểm định"
      title="Đo độ đồng thuận trên dữ liệu giữ riêng"
      source="Chương 3.7; Chương 4.4–4.5."
    >
      <div className="technical-columns">
        <div>
          <h3>Chỉ số dự kiến</h3>
          <ul>
            <li>Độ lệch trung bình: máy − giáo viên</li>
            <li>MAE; cùng mức; lệch không quá một mức</li>
            <li>Tương quan Pearson</li>
            <li>ICC(2,1): đồng thuận tuyệt đối</li>
            <li>QWK: Kappa có trọng số bậc hai</li>
          </ul>
          <p>
            Trình bày riêng tập phát triển và 18 bài giữ riêng; tập giữ riêng là
            bằng chứng chính.
          </p>
        </div>
        <div className="target-panel">
          <span>Mục tiêu tham khảo · chưa phải kết quả</span>
          <b>≤ 0,5 điểm</b>
          <p>Sai lệch trung bình ở tiêu chí được công bố</p>
          <b>≥ 80% bài</b>
          <p>Lệch không quá một mức so với người chấm độc lập</p>
        </div>
      </div>
      <Note warn>
        Nếu chưa đạt, công bố nguyên nhân và giới hạn. Không chọn lại cách chấm
        sau khi xem kết quả tập giữ riêng.
      </Note>
    </Page>
  );
}
export function Appendix08() {
  return (
    <Page
      id="a08"
      section="Phụ lục · Nguồn và cơ sở nghiên cứu"
      title="Báo cáo gốc là nguồn cho toàn bộ số liệu"
      source="Báo cáo kết quả thực hiện dự án, tháng 11/2026; danh mục tài liệu tham khảo."
    >
      <div className="reference-list">
        <div>
          <span>Nguồn chính</span>
          <strong>
            Phần mềm hỗ trợ đánh giá luyện nói tiếng Anh đa phương thức: khai
            thác video tham chiếu và đối sánh bằng chứng giọng nói
          </strong>
          <p>
            THPT Chuyên Thăng Long · Báo cáo kết quả thực hiện dự án · 11/2026
          </p>
        </div>
        <div>
          <span>Cơ sở phản hồi</span>
          <p>
            Black & Wiliam (1998), Assessment and Classroom Learning. DOI:
            10.1080/0969595980050102
          </p>
        </div>
        <div>
          <span>Mô hình sử dụng</span>
          <p>
            Chen, Yu & Hirschberg (2024), MultiPA. DOI:
            10.21437/Interspeech.2024-123
            <br />
            Radford và cộng sự (2023), Robust Speech Recognition via Large-Scale
            Weak Supervision.
          </p>
        </div>
        <div>
          <span>Đối chiếu chi tiết</span>
          <p>
            Các slide đều ghi chương/mục nguồn ở chân trang. Bảng truy vết và
            lời dẫn nằm trong tài liệu bàn giao của Web Slide.
          </p>
        </div>
      </div>
    </Page>
  );
}
