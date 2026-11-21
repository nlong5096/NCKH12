import { describe, expect, it } from "vitest";
import {
  locationHash,
  nextLocation,
  parseDeckLocation,
  previousLocation,
} from "../src/app/navigation";
import { slides } from "../src/data/slides";

describe("slide navigation", () => {
  it("parses direct slide and fragment navigation", () => {
    expect(parseDeckLocation("#/s04-f2", slides)).toEqual({
      slide: 3,
      fragment: 2,
    });
  });

  it("advances through fragments before the next slide", () => {
    expect(nextLocation(slides, { slide: 3, fragment: 1 })).toEqual({
      slide: 3,
      fragment: 2,
    });
    expect(nextLocation(slides, { slide: 3, fragment: 2 })).toEqual({
      slide: 4,
      fragment: 0,
    });
  });

  it("returns to the final fragment of the previous slide", () => {
    expect(previousLocation(slides, { slide: 4, fragment: 0 })).toEqual({
      slide: 3,
      fragment: 2,
    });
  });

  it("keeps a stable URL hash", () => {
    expect(locationHash(slides, { slide: 9, fragment: 3 })).toBe("#/s10-f3");
  });

  it("clamps invalid routes and stops at the main conclusion", () => {
    expect(parseDeckLocation("#/s06-f999", slides)).toEqual({
      slide: 5,
      fragment: 5,
    });
    expect(parseDeckLocation("#/s99-f8", slides)).toEqual({
      slide: 0,
      fragment: 0,
    });
    const end = slides.findIndex((s) => s.id === "s18");
    expect(nextLocation(slides, { slide: end, fragment: 0 })).toEqual({
      slide: end,
      fragment: 0,
    });
    expect(nextLocation(slides, { slide: end + 1, fragment: 0 })).toEqual({
      slide: end + 2,
      fragment: 0,
    });
  });
});
