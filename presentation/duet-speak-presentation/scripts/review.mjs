// Visual overview and speaker notes generated from the current deck, no Python.
import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";
const baseUrl = process.env.PRESENTATION_URL ?? "http://127.0.0.1:4173";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 2800 } });
await page.goto(baseUrl);
const metadata = await page.evaluate(async () => {
  const modulePath = "/src/data/slides.tsx";
  const { slides } = await import(modulePath);
  return slides.map(({ component, ...meta }) => meta);
});
const total = metadata
  .filter((s) => !s.appendix)
  .reduce((sum, s) => sum + s.seconds, 0);
await fs.writeFile(
  "docs/speaker-notes.md",
  `# Lời dẫn và thời lượng\n\n18 slide chính: ${Math.floor(total / 60)} phút ${total % 60} giây, chưa tính trao đổi. Phụ lục dùng theo câu hỏi. Nhấn N để đọc lời dẫn trên Web Slide.\n\n` +
    metadata
      .map(
        (s) =>
          `## ${s.id.toUpperCase()} · ${s.title}\n\n${s.message}\n\n- Thời lượng: ${s.duration}\n- Lưu ý: ${s.avoid}\n- Nguồn: ${s.source}\n`,
      )
      .join("\n"),
);
const origin = path.resolve("screenshots").replaceAll("\\", "/");
for (const size of ["1920x1080", "1366x768"]) {
  await page.setContent(
    `<html><head><style>*{box-sizing:border-box}body{margin:0;background:#dce4ee;font:16px system-ui}.grid{display:grid;grid-template-columns:repeat(3,480px)}figure{margin:0}img{width:480px;height:270px;display:block}figcaption{height:38px;background:#14273f;color:white;padding:8px 12px}</style></head><body><div class="grid">${metadata.map((s) => `<figure><img data-slide="${s.id}"><figcaption>${s.id.toUpperCase()} · ${s.section}</figcaption></figure>`).join("")}</div></body></html>`,
  );
  for (const s of metadata) {
    const data = await fs.readFile(`${origin}/${size}/${s.id}.png`);
    await page.locator(`img[data-slide="${s.id}"]`).evaluate((img, base64) => {
      img.src = `data:image/png;base64,${base64}`;
    }, data.toString("base64"));
  }
  await page
    .locator("img")
    .evaluateAll((images) => Promise.all(images.map((img) => img.decode())));
  await page.screenshot({
    path: `screenshots/contact-sheet-${size.split("x")[0]}.png`,
    fullPage: true,
  });
}
await browser.close();
console.log(
  `Wrote notes for ${metadata.length} slides and two contact sheets.`,
);
