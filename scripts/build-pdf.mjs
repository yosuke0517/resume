import { chromium } from "playwright";
import { createServer } from "node:http";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "dist");
const outputPath = path.join(outputDir, "resume.pdf");
const port = 4174;

await mkdir(outputDir, { recursive: true });

const server = createServer(async (request, response) => {
  const url = request.url?.replace(/^\/resume\/?/, "/") || "/";
  const pathname = url === "/" ? "/index.html" : url;
  const filePath = path.join(outputDir, decodeURIComponent(pathname));
  const extension = path.extname(filePath);
  const contentType = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".pdf": "application/pdf"
  }[extension] || "application/octet-stream";

  try {
    const file = await readFile(filePath);
    response.writeHead(200, { "Content-Type": contentType });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

await new Promise((resolve) => {
  server.listen(port, "127.0.0.1", resolve);
});

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${port}/resume/`, {
  waitUntil: "networkidle"
});
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true
});
await browser.close();
server.close();

console.log(`Generated ${outputPath}`);
