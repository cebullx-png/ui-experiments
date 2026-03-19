import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const browser = await chromium.launch({ executablePath: `${process.env.HOME}/.cache/ms-playwright/chromium-1194/chrome-linux/chrome` });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });
await page.waitForTimeout(600); // let GIF load
await page.screenshot({ path: 'screenshot.png', fullPage: false });
await browser.close();
console.log('Screenshot saved to screenshot.png');
