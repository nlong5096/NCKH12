import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.PRESENTATION_URL ?? "http://127.0.0.1:4173";
const viewports = [
  [1920, 1080],
  [1366, 768],
];
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ??
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const metadataPage = await browser.newPage();
await metadataPage.goto(baseUrl);
const slides = await metadataPage
  .locator(".slide-slot")
  .evaluateAll((slots) =>
    slots.map((slot) => [
      slot.querySelector(".slide").getAttribute("data-slide-id"),
      Number(slot.getAttribute("data-max-fragment")),
    ]),
  );
await metadataPage.close();
const layoutIssues = [];

for (const [width, height] of viewports) {
  const outDir = path.resolve(`screenshots/${width}x${height}`);
  await fs.mkdir(outDir, { recursive: true });
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  for (const [id, fragment] of slides) {
    await page.goto(`${baseUrl}/#/${id}-f${fragment}`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    const issues = await page.locator(".is-active .slide").evaluate((slide) => {
      const boundary = slide.getBoundingClientRect();
      const sourceTop =
        slide.querySelector(".slide-source")?.getBoundingClientRect().top ??
        boundary.bottom - 45;
      return [...slide.querySelectorAll("h1,h2,h3,p,li,figcaption,td,th")]
        .filter((el) => !el.classList.contains("slide-source"))
        .flatMap((el) => {
          const rect = el.getBoundingClientRect();
          return rect.bottom > sourceTop - 4 ||
            rect.right > boundary.right ||
            rect.left < boundary.left
            ? [
                {
                  text: el.textContent.slice(0, 100),
                  bottom: rect.bottom,
                  sourceTop,
                  right: rect.right,
                  edge: boundary.right,
                },
              ]
            : [];
        });
    });
    if (issues.length)
      layoutIssues.push({ viewport: `${width}x${height}`, id, issues });
    await page.screenshot({
      path: path.join(outDir, `${id}.png`),
      fullPage: false,
    });
  }
  await fs.writeFile(
    path.join(outDir, "console-errors.json"),
    JSON.stringify(errors, null, 2),
  );
  await page.close();
}

await browser.close();
await fs.writeFile(
  "screenshots/layout-issues.json",
  JSON.stringify(layoutIssues, null, 2),
);
console.log(
  `Captured ${slides.length} slides at 1920x1080 and 1366x768. Layout issues: ${layoutIssues.length}.`,
);
