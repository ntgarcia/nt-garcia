// Lists every image under public/design, per folder, into
// app/data/image-manifest.json. Runs before `dev` and `build` so galleries
// don't need a serverless function that reads the disk (Vercel would bundle
// all of public/ into it and blow past the function size limit).
import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = "public";
const ROOT = "/design";
const OUTPUT = "app/data/image-manifest.json";
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

// Sort like Finder (case-insensitive, numbers by value) so filename
// prefixes like 01-, 02- control gallery order.
const byName = (a, b) =>
  a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });

const manifest = {};

function scan(folder) {
  const entries = readdirSync(join(PUBLIC_DIR, folder), { withFileTypes: true });
  const images = entries
    .filter((entry) => {
      const name = entry.name.toLowerCase();
      return entry.isFile() && IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
    })
    .map((entry) => entry.name)
    .sort(byName)
    .map((name) => `${folder}/${name}`);

  if (images.length > 0) manifest[folder] = images;

  entries
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => scan(`${folder}/${entry.name}`));
}

scan(ROOT);
writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Image manifest: ${Object.keys(manifest).length} folders → ${OUTPUT}`);
