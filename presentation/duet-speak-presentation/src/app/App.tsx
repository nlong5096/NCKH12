import { memo, useCallback, useEffect, useState } from "react";
import { slides, type SlideMeta } from "../data/slides";
import { mainSlideCount } from "../data/researchData";
import { DeckControls } from "../components/DeckControls";
import { Overview } from "../components/Overview";
import { PresenterNotes } from "../components/PresenterNotes";
import {
  locationHash,
  nextLocation,
  parseDeckLocation,
  previousLocation,
  type DeckLocation,
} from "./navigation";

const printMode = new URLSearchParams(window.location.search).has("print");

// Keep the departing slide's last revealed state during its fade-out.
const PersistentSlide = memo(function PersistentSlide({
  slide,
  active,
  fragment,
}: {
  slide: SlideMeta;
  active: boolean;
  fragment: number;
}) {
  const [retained, setRetained] = useState(fragment);
  if (active && retained !== fragment) setRetained(fragment);
  const Component = slide.component;
  return (
    <div
      className={`slide-slot ${active ? "is-active" : ""}`}
      data-max-fragment={slide.maxFragment}
      aria-hidden={!active}
      inert={!active}
    >
      <Component active={active} fragment={active ? fragment : retained} />
    </div>
  );
});

export function App() {
  const [location, setLocation] = useState<DeckLocation>(() =>
    parseDeckLocation(window.location.hash, slides),
  );
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [notice, setNotice] = useState("");

  const move = useCallback((next: DeckLocation) => {
    setLocation(next);
    window.history.replaceState(null, "", locationHash(slides, next));
  }, []);
  const next = useCallback(
    () => setLocation((current) => nextLocation(slides, current)),
    [],
  );
  const previous = useCallback(
    () => setLocation((current) => previousLocation(slides, current)),
    [],
  );
  const toggleFullscreen = useCallback(() => {
    const action = document.fullscreenElement
      ? document.exitFullscreen?.()
      : document.documentElement.requestFullscreen?.();
    if (action)
      void action.catch(() =>
        setNotice(
          "Trình duyệt chưa cho phép toàn màn hình. Có thể dùng phím F11.",
        ),
      );
    else
      setNotice(
        "Trình duyệt không hỗ trợ chế độ toàn màn hình. Có thể dùng phím F11.",
      );
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", locationHash(slides, location));
    setNotice("");
  }, [location]);

  useEffect(() => {
    const syncFromHash = () =>
      setLocation(parseDeckLocation(window.location.hash, slides));
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (printMode) return;
    const onKey = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest(
          'input, textarea, select, [contenteditable="true"]',
        )
      )
        return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key === "Escape") {
        setOverview(false);
        setNotes(false);
        return;
      }
      if (event.key.toLowerCase() === "o") {
        setOverview((value) => !value);
        return;
      }
      if (overview) return;
      if (
        (event.key === " " || event.key === "Enter") &&
        event.target instanceof HTMLButtonElement
      )
        return;
      if (
        event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "PageDown"
      ) {
        event.preventDefault();
        next();
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") {
        event.preventDefault();
        move({ slide: 0, fragment: 0 });
      }
      if (event.key === "End") {
        event.preventDefault();
        move({
          slide: mainSlideCount - 1,
          fragment: slides[mainSlideCount - 1].maxFragment,
        });
      }
      if (event.key.toLowerCase() === "n") setNotes((value) => !value);
      if (event.key.toLowerCase() === "m")
        setControlsVisible((value) => !value);
      if (event.key.toLowerCase() === "a")
        move({ slide: mainSlideCount, fragment: 0 });
      if (event.key.toLowerCase() === "b")
        move({ slide: mainSlideCount - 1, fragment: 0 });
      if (event.key.toLowerCase() === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, next, previous, toggleFullscreen, overview]);

  const current = slides[location.slide];
  const inAppendix = location.slide >= mainSlideCount;
  const progress =
    ((inAppendix ? location.slide - mainSlideCount + 1 : location.slide + 1) /
      (inAppendix ? slides.length - mainSlideCount : mainSlideCount)) *
    100;

  if (printMode) {
    return (
      <main className="print-deck">
        {slides.map((slide) => {
          const Component = slide.component;
          return (
            <Component
              key={slide.id}
              active
              fragment={slide.maxFragment}
              print
            />
          );
        })}
      </main>
    );
  }

  return (
    <main className="deck-shell">
      <div className="deck-stage">
        {slides.map((slide, index) => (
          <PersistentSlide
            key={slide.id}
            slide={slide}
            active={index === location.slide}
            fragment={index === location.slide ? location.fragment : 0}
          />
        ))}
      </div>
      {controlsVisible && (
        <DeckControls
          index={location.slide}
          total={slides.length}
          mainTotal={mainSlideCount}
          fragment={location.fragment}
          maxFragment={current.maxFragment}
          onPrevious={previous}
          onNext={next}
          onOverview={() => setOverview(true)}
          onFullscreen={toggleFullscreen}
          onNotes={() => setNotes((value) => !value)}
          onAppendix={() => move({ slide: mainSlideCount, fragment: 0 })}
          onReturn={() => move({ slide: mainSlideCount - 1, fragment: 0 })}
        />
      )}
      {overview && (
        <Overview
          slides={slides}
          onClose={() => setOverview(false)}
          onSelect={(slide) => {
            move({ slide, fragment: 0 });
            setOverview(false);
          }}
        />
      )}
      {notes && (
        <PresenterNotes slide={current} onClose={() => setNotes(false)} />
      )}
      <span className="deck-announcement" role="status">
        {current.title}. Bước {location.fragment + 1} trên{" "}
        {current.maxFragment + 1}.
      </span>
      {notice && (
        <button className="end-hint" onClick={() => setNotice("")}>
          {notice}
        </button>
      )}
      {!inAppendix && location.slide === mainSlideCount - 1 && (
        <button
          className="end-hint"
          onClick={() => move({ slide: mainSlideCount, fragment: 0 })}
        >
          Mở phụ lục khi trao đổi · A
        </button>
      )}
      <div
        className="progress-line"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </main>
  );
}
