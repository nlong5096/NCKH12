import {
  ArrowsOut,
  CaretLeft,
  CaretRight,
  GridFour,
  ListBullets,
  NotePencil,
} from "@phosphor-icons/react";

type ControlsProps = {
  index: number;
  total: number;
  mainTotal: number;
  fragment: number;
  maxFragment: number;
  onPrevious: () => void;
  onNext: () => void;
  onOverview: () => void;
  onFullscreen: () => void;
  onNotes: () => void;
  onAppendix: () => void;
  onReturn: () => void;
};

export function DeckControls(props: ControlsProps) {
  const appendix = props.index >= props.mainTotal;
  const atEnd =
    ((!appendix && props.index === props.mainTotal - 1) ||
      props.index === props.total - 1) &&
    props.fragment === props.maxFragment;
  return (
    <nav className="deck-controls" aria-label="Điều khiển trình chiếu">
      <button
        type="button"
        onClick={props.onPrevious}
        disabled={props.index === 0 && props.fragment === 0}
        aria-label="Trang trước"
        title="Trước · ←"
      >
        <CaretLeft weight="bold" />
      </button>
      <span
        className="deck-counter"
        title={`Bước ${props.fragment + 1}/${props.maxFragment + 1}`}
      >
        {appendix ? "PL " : ""}
        {String(
          appendix ? props.index - props.mainTotal + 1 : props.index + 1,
        ).padStart(2, "0")}{" "}
        /{" "}
        {String(
          appendix ? props.total - props.mainTotal : props.mainTotal,
        ).padStart(2, "0")}
      </span>
      <button
        type="button"
        onClick={props.onNext}
        disabled={atEnd}
        aria-label="Trang sau"
        title="Tiếp · → / Space"
      >
        <CaretRight weight="bold" />
      </button>
      <span className="control-rule" />
      <button
        type="button"
        onClick={props.onOverview}
        aria-label="Tổng quan"
        title="Tổng quan · O"
      >
        <GridFour />
      </button>
      <button
        type="button"
        onClick={props.onNotes}
        aria-label="Ghi chú người trình bày"
        title="Lời dẫn · N"
      >
        <NotePencil />
      </button>
      <button
        type="button"
        onClick={appendix ? props.onReturn : props.onAppendix}
        aria-label={appendix ? "Trở lại kết luận" : "Mở phụ lục"}
        title={appendix ? "Trở lại kết luận · B" : "Phụ lục · A"}
      >
        <ListBullets />
      </button>
      <button
        type="button"
        onClick={props.onFullscreen}
        aria-label="Toàn màn hình"
        title="Toàn màn hình · F"
      >
        <ArrowsOut />
      </button>
    </nav>
  );
}
