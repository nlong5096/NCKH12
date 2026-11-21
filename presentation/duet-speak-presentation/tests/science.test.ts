import { describe, expect, it } from "vitest";
import { mainSlideCount, researchData } from "../src/data/researchData";
import { slides } from "../src/data/slides";

describe("scientific data integrity", () => {
  it("preserves the reported dataset split", () => {
    expect(
      researchData.dataset.development + researchData.dataset.holdout,
    ).toBe(researchData.dataset.total);
    expect(researchData.dataset).toMatchObject({
      total: 68,
      development: 50,
      holdout: 18,
    });
  });

  it("preserves alignment arithmetic", () => {
    expect(
      researchData.alignment.image + researchData.alignment.audioAssisted,
    ).toBe(researchData.alignment.usable);
    expect(
      researchData.alignment.usable + researchData.alignment.notEligible,
    ).toBe(researchData.dataset.total);
  });

  it("selects the measured lowest WER backend", () => {
    const selected = researchData.asr.find((item) => item.selected);
    expect(selected?.model).toBe("small.en");
    expect(selected?.wer).toBe(
      Math.min(...researchData.asr.map((item) => item.wer)),
    );
  });

  it("keeps the main story separate from the technical appendix", () => {
    expect(
      slides.slice(0, mainSlideCount).every((slide) => !slide.appendix),
    ).toBe(true);
    expect(slides.slice(mainSlideCount).every((slide) => slide.appendix)).toBe(
      true,
    );
    expect(new Set(slides.map((slide) => slide.id)).size).toBe(slides.length);
  });

  it("preserves exact errors and denominators, including unpublished follow-up", () => {
    expect(researchData.scoring.loocv.map((r) => r.mae)).toEqual([
      0.4204, 0.4912, 0.5881,
    ]);
    expect(researchData.scoring.p25.map((r) => r.mae)).toEqual([
      0.5133, 0.436, 0.7027,
    ]);
    expect(researchData.scoring.p25.map((r) => r.withinOne)).toEqual([
      "3/3",
      "3/3",
      "2/3",
    ]);
    expect(researchData.followUp.additionalRated).toBe(10);
    expect(researchData.followUp).not.toHaveProperty("mae");
  });
});
