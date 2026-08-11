const { resolve } = require("path");
const { writeFileSync, mkdirSync, existsSync } = require("fs");

// This script generates static HTML from Next.js server bundle
async function main() {
  const outDir = resolve(__dirname, "out");
  
  // Import the Next.js server
  const { default: next } = await import("next");
  const app = next({ dev: false, dir: __dirname });
  await app.prepare();
  
  const { renderToHTML } = await import("next/dist/server/render.js");
  
  const routes = [
    { path: "/", file: "index.html" },
    { path: "/about", file: "about.html" },
    { path: "/contact", file: "contact.html" },
    { path: "/privacy", file: "privacy.html" },
    { path: "/terms", file: "terms.html" },
    { path: "/tools/json-formatter", file: "tools/json-formatter.html" },
    { path: "/tools/csv-to-json", file: "tools/csv-to-json.html" },
    { path: "/tools/timestamp-converter", file: "tools/timestamp-converter.html" },
    { path: "/tools/base64-encode", file: "tools/base64-encode.html" },
    { path: "/tools/uuid-generator", file: "tools/uuid-generator.html" },
    { path: "/tools/url-encode", file: "tools/url-encode.html" },
    { path: "/tools/image-compressor", file: "tools/image-compressor.html" },
    { path: "/tools/qr-generator", file: "tools/qr-generator.html" },
    { path: "/tools/word-counter", file: "tools/word-counter.html" },
    { path: "/tools/md-preview", file: "tools/md-preview.html" },
    { path: "/tools/cron-generator", file: "tools/cron-generator.html" },
    { path: "/tools/jwt-decode", file: "tools/jwt-decode.html" },
  ];
  
  for (const route of routes) {
    const html = await renderToHTML(app, route.path, {});
    const filePath = resolve(outDir, route.file);
    const dir = resolve(filePath, "..");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(filePath, html);
    console.log("Generated:", route.file);
  }
  
  await app.close();
  console.log("Done!");
}

main().catch(console.error);
