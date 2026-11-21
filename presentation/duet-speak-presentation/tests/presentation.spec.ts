import { expect, test } from "@playwright/test";

test("loads, navigates fragments, overview and direct routes", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/#/s04-f0");
  await expect(page.locator('[data-slide-id="s04"]')).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(/s04-f1/);
  await page.keyboard.press("o");
  await expect(
    page.getByRole("dialog", { name: "Tổng quan các slide" }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Tỷ lệ lỗi chép lời/ }).click();
  await expect(page.locator('.is-active [data-slide-id="s12"]')).toBeVisible();
  await page.reload();
  await expect(page.locator('.is-active [data-slide-id="s12"]')).toBeVisible();
  await page.keyboard.press("a");
  await expect(page.locator('[data-slide-id="a01"]')).toBeVisible();
  expect(errors).toEqual([]);
});

test("supports reverse, notes, hidden controls, appendix and rapid navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/#/s06-f0");
  await page.keyboard.press("PageDown");
  await expect(page).toHaveURL(/s06-f1/);
  await page.keyboard.press("PageUp");
  await expect(page).toHaveURL(/s06-f0/);
  await page.keyboard.press("n");
  await expect(page.locator(".presenter-notes")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.keyboard.press("m");
  await expect(page.locator(".deck-controls")).toHaveCount(0);
  await page.keyboard.press("m");
  await expect(page.locator(".deck-controls")).toBeVisible();
  await page.keyboard.press("a");
  await expect(page.locator('[data-slide-id="a01"]')).toBeVisible();
  for (let index = 0; index < 12; index += 1)
    await page.keyboard.press("ArrowRight");
  expect(errors).toEqual([]);
});

test("print mode renders all slides with no controls", async ({ page }) => {
  await page.goto("/?print=1");
  await expect(page.locator(".print-deck > .slide")).toHaveCount(26);
  await expect(page.locator(".deck-controls")).toHaveCount(0);
});

test("fragment reveals keep headings stable and departing content intact", async ({
  page,
}) => {
  await page.goto("/#/s06-f4");
  await page.waitForTimeout(350);
  const heading = page.locator(".is-active h2");
  const before = await heading.boundingBox();
  await page.keyboard.press("ArrowRight");
  expect(await heading.boundingBox()).toEqual(before);
  await expect(page.locator(".is-active .fragment.is-visible")).toHaveCount(6);
  expect(await heading.evaluate((el) => getComputedStyle(el).opacity)).toBe(
    "1",
  );
  await page.keyboard.press("ArrowRight");
  // Outgoing six-step content must not collapse back to step zero during fade.
  await expect(
    page.locator('[data-slide-id="s06"] .fragment.is-visible'),
  ).toHaveCount(6);
  await expect(page).toHaveURL(/s07-f0/);
});

test("crossfade never leaves a blank frame and local images load", async ({
  page,
}) => {
  await page.goto("/#/s05-f2");
  await page.waitForTimeout(350);
  await page.keyboard.press("ArrowRight");
  const frames = await page.evaluate(async () => {
    const results: number[] = [];
    const start = performance.now();
    while (performance.now() - start < 350) {
      results.push(
        [...document.querySelectorAll(".slide-slot")].reduce((sum, el) => {
          const css = getComputedStyle(el);
          return sum + (css.visibility === "visible" ? Number(css.opacity) : 0);
        }, 0),
      );
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => resolve()),
      );
    }
    return results;
  });
  expect(frames.length).toBeGreaterThan(2);
  expect(Math.min(...frames)).toBeGreaterThan(0.9);
  const images = await page
    .locator("img")
    .evaluateAll((images) =>
      images.map((img) => ({
        complete: img instanceof HTMLImageElement && img.complete,
        width: img instanceof HTMLImageElement ? img.naturalWidth : 0,
      })),
    );
  expect(images.every((img) => img.complete && img.width > 0)).toBe(true);
});

test("reduced motion, overview focus, main ending and fullscreen", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/s18-f0");
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(/s18-f0/);
  await page.keyboard.press("o");
  const previousUrl = page.url();
  await page.keyboard.press("ArrowRight");
  expect(page.url()).toBe(previousUrl);
  await expect(
    page.getByRole("button", { name: "Đóng", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("dialog").getByRole("button").last(),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await page.keyboard.press("a");
  await expect(page).toHaveURL(/a01-f0/);
  expect(
    await page
      .locator(".is-active")
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toBe("0s");
  await page.keyboard.press("b");
  await expect(page).toHaveURL(/s18-f0/);
  await page
    .getByRole("button", { name: "Toàn màn hình", exact: true })
    .click();
  await expect
    .poll(() => page.evaluate(() => !!document.fullscreenElement))
    .toBe(true);
  await page.keyboard.press("f");
  await expect
    .poll(() => page.evaluate(() => !!document.fullscreenElement))
    .toBe(false);
});
