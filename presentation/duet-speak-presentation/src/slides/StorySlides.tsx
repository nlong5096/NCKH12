import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle,
  ChatText,
  FileVideo,
  Headphones,
  MagnifyingGlass,
  Microphone,
  ShieldCheck,
  ShieldWarning,
  User,
  Waveform,
} from "@phosphor-icons/react";
import { Fragment, SlideFrame } from "../components/SlideFrame";
import { decimal, researchData as d } from "../data/researchData";
import type { SlideProps } from "../data/slides";

export function Page({
  id,
  section,
  title,
  intro,
  source,
  children,
  className = "",
}: {
  id: string;
  section: string;
  title: string;
  intro?: string;
  source: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <SlideFrame
      id={id}
      section={section}
      title={title}
      source={source}
      className={className}
    >
      <header className="page-heading">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </header>
      <div className="page-content">{children}</div>
    </SlideFrame>
  );
}
export function Note({
  children,
  warn = false,
}: {
  children: ReactNode;
  warn?: boolean;
}) {
  return (
    <p className={`takeaway ${warn ? "warning" : ""}`}>
      {warn ? <ShieldWarning /> : <CheckCircle />}
      {children}
    </p>
  );
}
function Wave({ color = "blue" }: { color?: string }) {
  return (
    <div className={`wave-bars ${color}`} aria-hidden="true">
      {Array.from({ length: 45 }, (_, i) => (
        <i key={i} style={{ height: `${18 + ((i * 17 + i * i) % 70)}%` }} />
      ))}
    </div>
  );
}

export function Slide01() {
  return (
    <SlideFrame
      id="s01"
      section="Báo cáo kết quả nghiên cứu · 11/2026"
      className="cover"
      title="Hỗ trợ giáo viên phản hồi bài luyện nói tiếng Anh"
    >
      <div className="cover-copy">
        <p className="eyebrow">Từ video Duet đến phản hồi luyện tập</p>
        <h1>
          Hiểu bài nói.
          <br />
          <em>
            Chỉ rõ cách
            <br />
            luyện tiếp.
          </em>
        </h1>
        <p className="cover-description">
          Phần mềm hỗ trợ đánh giá luyện nói tiếng Anh đa phương thức: khai thác
          video tham chiếu và đối sánh bằng chứng giọng nói.
        </p>
        <p className="cover-scope">
          Nguyên mẫu nghiên cứu trên bài đọc mẫu T001
        </p>
      </div>
      <div className="cover-visual">
        <div className="cover-source">
          <FileVideo />
          <span>Video mẫu + bài Duet</span>
        </div>
        <Wave />
        <div className="cover-evidence">
          <Headphones />
          <div>
            <strong>Nghe lại đúng đoạn</strong>
            <span>Xem bằng chứng, rồi quyết định phản hồi</span>
          </div>
        </div>
        <Wave color="coral" />
        <div className="cover-teacher">
          <User />
          <span>Giáo viên giữ vai trò đánh giá</span>
        </div>
      </div>
      <footer className="cover-meta">
        <span>{d.project.school}</span>
        <span>
          {d.project.competition}
          <br />
          {d.project.year}
        </span>
      </footer>
    </SlideFrame>
  );
}
export function Slide02({ fragment }: SlideProps) {
  return (
    <Page
      id="s02"
      section="01 · Vấn đề thực tế"
      title="Bài nộp tăng lên, phản hồi khó theo kịp"
      source="Phần mở đầu, mục 1."
    >
      <div className="problem-layout">
        <div className="hero-stat">
          <span>~150</span>
          <strong>video mỗi tuần</strong>
          <p>Một giáo viên phụ trách khoảng 5 lớp với hơn 150 học sinh.</p>
        </div>
        <div>
          <p className="lead">
            Phần lớn thao tác lặp lại diễn ra trước khi giáo viên có thể đưa ra
            nhận xét.
          </p>
          <ol className="manual-list">
            {[
              "Mở từng video và tìm phần học sinh nói",
              "Nghe lại, đối chiếu với bài đọc mẫu",
              "Viết nhận xét cụ thể cho từng bài",
            ].map((t, i) => (
              <Fragment key={t} step={i} current={fragment}>
                <li>
                  <span>{i + 1}</span>
                  {t}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
      <Note>
        Mục tiêu: hỗ trợ xử lý nhiều bài theo lô, tổng hợp và đánh dấu bài cần
        giáo viên xem lại để tập trung phản hồi sư phạm.
      </Note>
    </Page>
  );
}
export function Slide03({ fragment }: SlideProps) {
  return (
    <Page
      id="s03"
      section="01 · Mục tiêu nghiên cứu"
      title="Phản hồi cần giúp học sinh biết phải sửa gì"
      intro="Không chỉ nhận một điểm số, người học cần biết đoạn nào nên nghe lại và luyện tiếp."
      source="Chương 1.1; Phần mở đầu, mục 2."
    >
      <div className="feedback-compare">
        <div className="feedback-vague">
          <ChatText />
          <span>Nhận xét chung</span>
          <blockquote>“Em nói chưa tốt.”</blockquote>
          <p>Học sinh chưa biết bắt đầu sửa từ đâu.</p>
        </div>
        <Fragment step={1} current={fragment} className="feedback-specific">
          <Headphones />
          <span>Phản hồi hướng đến hành động</span>
          <blockquote>
            “Ở giữa bài em có khoảng dừng khá dài; hãy nghe lại và đọc liền hai
            câu này.”
          </blockquote>
          <p>Chỉ ra hiện tượng và một cách luyện tiếp.</p>
        </Fragment>
      </div>
      <Note>
        Đây là ví dụ diễn giải trong báo cáo, không phải kết quả đo của một bài
        cụ thể.
      </Note>
    </Page>
  );
}
export function Slide04({ fragment }: SlideProps) {
  return (
    <Page
      id="s04"
      section="02 · Ý tưởng cốt lõi"
      title="Biết trước video mẫu để tìm đúng lời học sinh"
      intro="Trong Duet, giọng mẫu có thể còn trộn với giọng học sinh. Xác định đúng người nói phải đi trước việc đánh giá."
      source="Chương 1.2; Chương 2.4–2.5.1."
    >
      <div className="reference-diagram">
        <div className="track-row">
          <strong>Video mẫu</strong>
          <div className="sound-track reference">
            <span>Lời mẫu</span>
            <span>Lời mẫu</span>
            <span>Lời mẫu</span>
          </div>
        </div>
        <div className="track-row">
          <strong>Video Duet</strong>
          <div className="sound-track mixed">
            <span>Giọng mẫu</span>
            <span>Học sinh</span>
            <span>Giọng trộn</span>
            <span>Học sinh</span>
          </div>
        </div>
        <Fragment step={1} current={fragment} className="track-row">
          <strong>Vùng cần nghe</strong>
          <div className="sound-track learner">
            <span />
            <span>Lời học sinh</span>
            <span />
            <span>Lời học sinh</span>
          </div>
        </Fragment>
        <span className="diagram-caption">
          Sơ đồ nguyên lý · vị trí các đoạn chỉ để minh họa
        </span>
      </div>
      <Fragment step={2} current={fragment}>
        <Note>
          Sau khi tìm được mốc thời gian, hệ thống quay lại âm thanh gốc để phân
          tích.
        </Note>
      </Fragment>
    </Page>
  );
}
export function Slide05({ fragment }: SlideProps) {
  return (
    <Page
      id="s05"
      section="02 · Trải nghiệm sử dụng"
      title="Một bài nộp đi qua ba thao tác quen thuộc"
      source="Chương 3.6; ảnh giao diện sản phẩm trong báo cáo."
    >
      <div className="product-layout">
        <figure className="product-photo home">
          <img
            src="./images/product-home.png"
            alt="Trang chủ thật của DUET / SPEAK với nút chọn bài Duet"
          />
          <figcaption>Ảnh giao diện thật · màn hình bắt đầu</figcaption>
        </figure>
        <ol className="journey">
          {[
            "Chọn video Duet đã quay",
            "Chạy phân tích và kiểm tra chất lượng",
            "Xem tiêu chí, nghe bằng chứng, luyện lại",
          ].map((s, i) => (
            <Fragment step={i} current={fragment} key={s}>
              <li>
                <b>{i + 1}</b>
                <strong>{s}</strong>
              </li>
            </Fragment>
          ))}
          <p>Có thể mở lại những bài gần đây để xem kết quả.</p>
        </ol>
      </div>
      <Note>
        Học sinh quay Duet bằng nền tảng đang sử dụng, rồi chọn tệp đã hoàn
        thành.
      </Note>
    </Page>
  );
}
export function Slide06({ fragment }: SlideProps) {
  const steps = [
    ["Nhận bài", "Video Duet và video mẫu", FileVideo],
    ["So khớp", "Đặt hai video đúng thời gian", MagnifyingGlass],
    ["Tìm lời", "Xác định vùng học sinh nói", Microphone],
    ["Lấy bản gốc", "Giữ đặc điểm giọng nói", Waveform],
    ["Đo và đối chiếu", "Chép lời, nhịp nói, phát âm", Headphones],
    ["Trả phản hồi", "Bằng chứng và gợi ý luyện", ChatText],
  ] as const;
  return (
    <Page
      id="s06"
      section="02 · Nguyên lý hoạt động"
      title="Từ video đến phản hồi, qua sáu bước"
      source="Chương 2.4; Hình 2."
    >
      <div className="process-flow">
        {steps.map(([label, text, Icon], i) => (
          <Fragment
            step={i}
            current={fragment}
            className="process-node"
            key={label}
          >
            <Icon weight="duotone" />
            <strong>{label}</strong>
            <p>{text}</p>
            {i < 5 && <ArrowRight className="process-arrow" />}
          </Fragment>
        ))}
      </div>
      <div className="process-current" aria-live="polite">
        <span>Bước {fragment + 1}/6</span>
        <strong>{steps[fragment]?.[0]}</strong>
        <p>{steps[fragment]?.[1]}</p>
      </div>
      <Note warn>
        Video thiếu âm thanh hoặc không khớp đáng tin cậy sẽ được dừng hoặc yêu
        cầu kiểm tra.
      </Note>
    </Page>
  );
}
export function Slide07() {
  return (
    <Page
      id="s07"
      section="02 · Sản phẩm đầu ra"
      title="Mỗi tiêu chí có một mức độ chứng cứ riêng"
      source="Chương 1.1; Chương 3.5, Bảng 4; Chương 3.6."
    >
      <div
        className="criteria-table"
        role="table"
        aria-label="Chức năng và giới hạn chứng cứ"
      >
        {[
          [
            "Độ trôi chảy",
            "Nhịp nói và khoảng dừng",
            "Có số đo, quy đổi bước đầu",
          ],
          ["Phát âm", "Ước lượng cách đọc rõ và gần mẫu", "Dự đoán sơ bộ"],
          [
            "Ngữ điệu",
            "Nhịp, nhấn và lên xuống giọng",
            "Sai lệch còn tương đối lớn",
          ],
          [
            "Đọc đủ nội dung",
            "Đối chiếu bản chép với văn bản mẫu",
            "Dấu hiệu cần nghe kiểm tra",
          ],
          [
            "Mức dễ hiểu",
            "Người nghe có hiểu lời nói không?",
            "Chưa có điểm máy được xác nhận",
          ],
        ].map(([name, detail, status]) => (
          <div role="row" key={name}>
            <strong role="cell">{name}</strong>
            <span role="cell">{detail}</span>
            <b role="cell">{status}</b>
          </div>
        ))}
      </div>
      <Note warn>
        Điểm luyện tập tổng hợp trên giao diện chỉ là chỉ số mô tả, chưa được
        nghiên cứu xác nhận.
      </Note>
    </Page>
  );
}
export function Slide08({ fragment }: SlideProps) {
  return (
    <Page
      id="s08"
      section="02 · Xem kết quả và luyện lại"
      title="Bằng chứng giúp người học chọn việc luyện tiếp"
      source="Chương 3.6; ảnh giao diện kết quả và góp ý trong báo cáo."
    >
      <div className="evidence-layout">
        <figure className="product-photo result">
          <img
            src="./images/product-results.png"
            alt="Ảnh kết quả thật: độ trôi chảy, đọc đủ nội dung, phát âm và ngữ điệu"
          />
          <figcaption>
            Các điểm trong ảnh minh họa giao diện, không phải số liệu kiểm định.
          </figcaption>
        </figure>
        <div className="evidence-copy">
          <h3>Từ số đo đến hành động</h3>
          <p>
            Đối chiếu từng tiêu chí, xem đoạn cần kiểm tra rồi quyết định cách
            luyện lại.
          </p>
          <Fragment step={1} current={fragment}>
            <figure className="feedback-photo">
              <img
                src="./images/product-feedback.png"
                alt="Ảnh giao diện gợi ý luyện lại một câu và so sánh hai bản ghi"
              />
            </figure>
            <p className="small-copy">
              AI có thể diễn đạt lại góp ý khi người dùng cho phép; không thay
              điểm hay tự thêm lỗi thiếu bằng chứng.
            </p>
          </Fragment>
        </div>
      </div>
    </Page>
  );
}
export function Slide09({ fragment }: SlideProps) {
  return (
    <Page
      id="s09"
      section="03 · Dữ liệu và cách nghiên cứu"
      title="68 video, cùng một bài đọc mẫu"
      intro="Mỗi học sinh của hai lớp 10 Toán và 10 Lý nộp một video theo bài T001. Các biến thể tăng cường dữ liệu không phải học sinh mới."
      source="Chương 2.1–2.3; Hình 1."
    >
      <div className="data-split">
        <div className="split-development">
          <b>50</b>
          <strong>video phát triển và thử nghiệm</strong>
          <p>Dùng để lựa chọn cách xử lý</p>
        </div>
        <div className="split-holdout">
          <b>18</b>
          <strong>video giữ riêng</strong>
          <p>Để kiểm định cuối sau khi khóa phương pháp</p>
        </div>
      </div>
      <Fragment step={1} current={fragment} className="evidence-samples">
        <div>
          <b>12 bài</b>
          <span>có đánh giá theo tiêu chí</span>
        </div>
        <div>
          <b>6 bài</b>
          <span>có bản chép tham chiếu</span>
        </div>
        <div>
          <b>3 bài</b>
          <span>kiểm tra sau khi khóa cách chấm</span>
        </div>
      </Fragment>
      <Note>
        Các nhóm phục vụ những câu hỏi khác nhau; không cộng thành một tập kết
        quả chung.
      </Note>
    </Page>
  );
}
export function Slide10({ fragment }: SlideProps) {
  const checks = [
    ["Chuẩn bị đầu vào", "68 video", "Có căn chỉnh được với video mẫu không?"],
    [
      "Kiểm tra bản chép",
      "6 bài tham chiếu",
      "Máy chuyển lời nói thành chữ sai bao nhiêu?",
    ],
    [
      "Đối chiếu điểm",
      "12 bài phát triển",
      "Mỗi lượt để riêng 1 bài, xây cách quy đổi từ 11 bài còn lại",
    ],
    [
      "Thử cách chấm đã khóa",
      "3 bài khác",
      "Chấm trước, rồi so với điểm tham chiếu",
    ],
  ];
  return (
    <Page
      id="s10"
      section="03 · Các bước triển khai"
      title="Kiểm tra từng khâu trước khi tin vào kết quả"
      source="Chương 2.5–2.7; Chương 3.1–3.4."
    >
      <div className="research-path">
        {checks.map(([title, sample, question], i) => (
          <Fragment step={i} current={fragment} key={title}>
            <span className="path-dot" />
            <div>
              <p>{sample}</p>
              <h3>{title}</h3>
              <span>{question}</span>
            </div>
          </Fragment>
        ))}
      </div>
      <Note>
        Kiểm tra chéo 12 bài vẫn thuộc quá trình phát triển, chưa thay thế kiểm
        định trên 18 bài giữ riêng.
      </Note>
    </Page>
  );
}
export function Slide11({ fragment }: SlideProps) {
  return (
    <Page
      id="s11"
      section="04 · Kết quả căn chỉnh"
      title="62 trên 68 video căn chỉnh được"
      intro="Khảo sát kỹ thuật P1.4: đặt đúng tương quan thời gian giữa bản Duet và video mẫu."
      source="Chương 3.1; Bảng 2."
    >
      <div className="alignment-layout">
        <div className="hero-stat">
          <span>
            91,2<small>%</small>
          </span>
          <strong>đủ điều kiện ở bước căn chỉnh</strong>
        </div>
        <div>
          <div
            className="dot-grid"
            role="img"
            aria-label="68 video: 58 khớp bằng hình ảnh, 4 nhờ âm thanh, 6 chưa đủ điều kiện"
          >
            {Array.from({ length: 68 }, (_, i) => (
              <i
                key={i}
                className={
                  i < 58 ? "image-dot" : i < 62 ? "audio-dot" : "fail-dot"
                }
              />
            ))}
          </div>
          <div className="dot-legend">
            <span>
              <i className="image-dot" />
              58 qua hình ảnh
            </span>
            <span>
              <i className="audio-dot" />4 nhờ âm thanh
            </span>
            <span>
              <i className="fail-dot" />6 chưa đủ điều kiện
            </span>
          </div>
          <Fragment step={1} current={fragment}>
            <p className="alignment-detail">
              6 bài chưa đủ điều kiện gồm 5 bài căn chỉnh thiếu tin cậy và 1 tệp
              không có âm thanh.
            </p>
          </Fragment>
        </div>
      </div>
      <Note warn>
        91,2% mô tả bước chuẩn bị đầu vào, không phải độ chính xác chấm nói.
      </Note>
    </Page>
  );
}
export function Slide12({ fragment }: SlideProps) {
  return (
    <Page
      id="s12"
      section="04 · Kết quả chép lời"
      title="Công cụ được chọn có tỷ lệ lỗi từ 5,02%"
      intro="So sánh ba công cụ trên 6 bản chép được con người xác nhận; thanh ngắn hơn là tốt hơn."
      source="Chương 3.2; Hình 3, thử nghiệm P2.4."
    >
      <div
        className="wer-chart"
        role="img"
        aria-label="Tỷ lệ lỗi từ: small.en 5,02%, distil-large-v3 8,69%, large-v3-turbo 8,81%"
      >
        {d.asr.map((r, i) => (
          <Fragment
            step={i}
            current={fragment}
            key={r.model}
            className={`wer-row ${r.selected ? "chosen" : ""}`}
          >
            <strong>{r.model}</strong>
            <div className="bar-track">
              <i style={{ width: `${r.wer * 10}%` }} />
            </div>
            <b>{decimal(r.wer)}%</b>
          </Fragment>
        ))}
        <div className="wer-axis">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>6</span>
          <span>8</span>
          <span>10% lỗi từ</span>
        </div>
      </div>
      <Note>
        Khoảng 5 lỗi chép trên 100 từ tham chiếu theo phép đo WER. Lỗi máy chép
        chưa chắc là lỗi phát âm của học sinh.
      </Note>
    </Page>
  );
}
export function Slide13({ fragment }: SlideProps) {
  return (
    <Page
      id="s13"
      section="04 · Kết quả đối chiếu điểm"
      title="Điểm máy lệch khoảng nửa điểm ở hai tiêu chí đầu"
      intro="Sai lệch tuyệt đối trung bình (MAE), thang 5 mức. Ngữ điệu còn lệch nhiều hơn."
      source="Chương 3.3–3.4; Bảng 3; Hình 4."
    >
      <div className="score-table">
        <div className="score-head">
          <strong>Tiêu chí</strong>
          <span>
            12 bài phát triển
            <br />
            <b>Kiểm tra chéo</b>
          </span>
          <span>
            3 bài kiểm tra nhỏ
            <br />
            <b>Cách chấm đã khóa</b>
          </span>
        </div>
        {d.scoring.loocv.map((row, i) => (
          <Fragment
            step={i}
            current={fragment}
            className="score-row"
            key={row.criterion}
          >
            <strong>{row.criterion}</strong>
            {[row.mae, d.scoring.p25[i].mae].map((v, j) => (
              <div className={`score-number series-${j}`} key={j}>
                <i style={{ "--value": v / 0.8 } as CSSProperties} />
                <b>{decimal(v, 4)}</b>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <Note warn>
        Hai nhóm bài và cách đánh giá khác nhau. Các số này không thể hiện chất
        lượng tăng hay giảm theo thời gian.
      </Note>
    </Page>
  );
}
export function Slide14({ fragment }: SlideProps) {
  return (
    <Page
      id="s14"
      section="04 · Hiểu đúng kết quả nhỏ"
      title="Ba bài thử chưa đủ để khẳng định độ ổn định"
      intro="P2.5 ngày 07/11/2026: D064, D043, D048. Không dùng ba kết quả này để chỉnh lại cách chấm."
      source="Chương 2.6; Chương 3.4, Bảng 3."
    >
      <div className="mini-results">
        <div className="mini-table">
          <div>
            <strong>Tiêu chí</strong>
            <b>Cùng mức</b>
            <b>Lệch ≤1 mức</b>
          </div>
          {d.scoring.p25.map((r) => (
            <div key={r.criterion}>
              <strong>{r.criterion}</strong>
              <span>{r.sameBand} bài</span>
              <span>{r.withinOne} bài</span>
            </div>
          ))}
        </div>
        <Fragment step={1} current={fragment} className="mini-interpretation">
          <ShieldWarning />
          <h3>Ngữ điệu có một bài lệch hơn một mức</h3>
          <p>
            Điểm phát âm dự đoán còn sát nhau. Cần dữ liệu đa dạng và so sánh
            với cách đoán đơn giản để biết máy có phân biệt được chất lượng bài
            nói.
          </p>
        </Fragment>
      </div>
      <Note>
        Cùng mức được tính sau khi xếp về mức 1–5; luôn giữ mẫu số 3 bài khi
        diễn giải.
      </Note>
    </Page>
  );
}
export function Slide15() {
  return (
    <Page
      id="s15"
      section="04 · Trạng thái kiểm chứng tiếp theo"
      title="Đang mở rộng đối chiếu với giáo viên"
      source="Chương 3.7: Kiểm tra độ tin cậy của sản phẩm."
    >
      <div className="validation-status">
        <div>
          <span className="status-label">Đã thực hiện thêm</span>
          <b>10 bài</b>
          <p>
            Báo cáo ghi nhận mức tương đồng khá tốt, nhưng chưa công bố chỉ số
            cụ thể vì mẫu còn ít.
          </p>
        </div>
        <div>
          <span className="status-label pending">Đang thực hiện</span>
          <b>68 video</b>
          <p>
            Chấm để đối chiếu theo từng tiêu chí. Kết quả tập phát triển và 18
            bài giữ riêng sẽ được trình bày riêng.
          </p>
        </div>
      </div>
      <Note>
        Giáo viên chấm trước, không xem điểm máy. Máy dùng cấu hình đã khóa; kết
        quả đầy đủ chưa được bổ sung vào báo cáo.
      </Note>
    </Page>
  );
}
export function Slide16({ fragment }: SlideProps) {
  return (
    <Page
      id="s16"
      section="05 · Ý nghĩa ứng dụng"
      title="Một công cụ luyện tập có giáo viên theo dõi"
      source="Phần mở đầu, mục 1–2; Chương 2.8; Chương 4.6; Kiến nghị."
    >
      <div className="roles-layout">
        <div>
          <Microphone />
          <h3>Học sinh</h3>
          <p>Nộp bài, xem gợi ý và luyện lại ngoài giờ.</p>
        </div>
        <div>
          <Waveform />
          <h3>Phần mềm</h3>
          <p>Đo nhịp nói, đối chiếu nội dung, chỉ ra đoạn cần kiểm tra.</p>
        </div>
        <div>
          <User />
          <h3>Giáo viên</h3>
          <p>
            Đặt chuẩn, nghe lại trường hợp chưa chắc chắn và quyết định nhận
            xét.
          </p>
        </div>
      </div>
      <Fragment step={1} current={fragment} className="school-notes">
        <p>
          <ShieldCheck />
          Ưu tiên xử lý cục bộ để kiểm soát dữ liệu; vẫn có chi phí thiết bị,
          điện, lưu trữ và bảo trì.
        </p>
        <p>
          <ShieldCheck />
          Thu thập có sự đồng ý phù hợp, hạn chế truy cập và có cơ chế xóa hoặc
          rút dữ liệu.
        </p>
      </Fragment>
      <Note warn>
        Giai đoạn này chưa dùng kết quả để chấm điểm chính thức hoặc xếp loại
        năng lực ngoại ngữ.
      </Note>
    </Page>
  );
}
export function Slide17({ fragment }: SlideProps) {
  return (
    <Page
      id="s17"
      section="05 · Hạn chế và hướng hoàn thiện"
      title="Kiểm chứng vững hơn trước khi mở rộng"
      source="Chương 4.2–4.5; Bảng 5; Kết luận và kiến nghị."
    >
      <div className="limits-grid">
        <div>
          <p className="eyebrow">Giới hạn hiện tại</p>
          <ul>
            <li>Mới có một bài đọc T001; điểm tham chiếu ít đa dạng.</li>
            <li>12 bài phát triển do một người nghe có AI hỗ trợ đánh giá.</li>
            <li>Chưa có kiểm định cuối trên 18 bài giữ riêng.</li>
            <li>Chưa chứng minh học sinh tiến bộ nhờ sử dụng phần mềm.</li>
          </ul>
        </div>
        <Fragment step={1} current={fragment}>
          <p className="eyebrow">Kế hoạch tiếp theo</p>
          <ol>
            <li>Khóa phương pháp, kiểm định 18 bài giữ riêng.</li>
            <li>Bổ sung ít nhất hai giáo viên chấm độc lập.</li>
            <li>Thu thêm bài đọc, trình độ và điều kiện thu âm.</li>
            <li>Theo dõi luyện lại, khảo sát và đánh giá trước–sau.</li>
          </ol>
        </Fragment>
      </div>
      <Note>
        Những việc bên phải là kế hoạch nghiên cứu; chưa phải kết quả đã đạt.
      </Note>
    </Page>
  );
}
export function Slide18() {
  return (
    <SlideFrame
      id="s18"
      section="Kết luận · Trao đổi với hội đồng"
      source="Kết luận và kiến nghị; Chương 4.1."
      title="Bằng chứng rõ hơn để phản hồi có căn cứ"
      className="closing"
    >
      <p className="eyebrow">DUET / SPEAK</p>
      <h2>
        Bằng chứng rõ hơn.
        <br />
        <em>Phản hồi có căn cứ hơn.</em>
      </h2>
      <p className="closing-lead">
        Nhóm đã xây dựng được nguyên mẫu khai thác video mẫu để tìm lời học
        sinh, phân tích âm thanh gốc và trình bày kết quả có giới hạn rõ ràng.
      </p>
      <div className="closing-points">
        <span>
          <CheckCircle />
          Quy trình đã hoạt động trên bài T001
        </span>
        <span>
          <Headphones />
          Bằng chứng có thể nghe lại và kiểm tra
        </span>
        <span>
          <User />
          Giáo viên quyết định phản hồi
        </span>
      </div>
      <p className="closing-status">
        Bước tiếp theo: kiểm định độc lập và đánh giá hiệu quả giáo dục.
      </p>
    </SlideFrame>
  );
}
