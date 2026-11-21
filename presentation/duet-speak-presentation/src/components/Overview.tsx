import type { SlideMeta } from "../data/slides";
import { useEffect, useRef } from "react";

export function Overview({
  slides,
  onSelect,
  onClose,
}: {
  slides: SlideMeta[];
  onSelect: (index: number) => void;
  onClose: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    root.current?.querySelector("button")?.focus();
    return () => previous?.focus();
  }, []);
  return (
    <div
      ref={root}
      className="overview"
      role="dialog"
      aria-modal="true"
      aria-label="Tổng quan các slide"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const buttons = root.current?.querySelectorAll("button");
        if (!buttons?.length) return;
        if (event.shiftKey && document.activeElement === buttons[0]) {
          event.preventDefault();
          buttons[buttons.length - 1].focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === buttons[buttons.length - 1]
        ) {
          event.preventDefault();
          buttons[0].focus();
        }
      }}
    >
      <header>
        <div>
          <p>Tổng quan bài trình bày</p>
          <h2>Chọn một slide để tiếp tục</h2>
        </div>
        <button type="button" onClick={onClose}>
          Đóng
        </button>
      </header>
      <div className="overview-grid">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={
              "appendix" in slide && slide.appendix ? "appendix-card" : ""
            }
            onClick={() => onSelect(index)}
          >
            <span>{slide.id.toUpperCase()}</span>
            <strong>{slide.title}</strong>
            <small>{slide.section}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
