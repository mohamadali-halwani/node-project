/*
 Generates public/gallery/index.json listing image files so the Gallery page
 can load them automatically. Drop images into public/gallery and run
 `npm start` or `npm run build` – this script runs automatically.
*/

const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'gallery');
const indexFile = path.join(galleryDir, 'index.json');
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.bmp', '.svg']);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

function writeIfChanged(filePath, content) {
  const next = JSON.stringify(content, null, 2) + '\n';
  let prev = '';
  try { prev = fs.readFileSync(filePath, 'utf8'); } catch {}
  if (prev !== next) {
    fs.writeFileSync(filePath, next, 'utf8');
  }
}

function generate() {
  try {
    ensureDir(galleryDir);
    const images = readImages(galleryDir);
    writeIfChanged(indexFile, images);
    // eslint-disable-next-line no-console
    console.log(`[gallery] indexed ${images.length} file(s)`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[gallery] Failed to generate index.json:', err.message);
  }
}

generate();

if (process.argv.includes('--watch')) {
  // eslint-disable-next-line no-console
  console.log('[gallery] watching public/gallery for changes...');
  let timer = null;
  const trigger = () => {
    clearTimeout(timer);
    timer = setTimeout(generate, 150);
  };
  try {
    ensureDir(galleryDir);
    fs.watch(galleryDir, { persistent: true }, trigger);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[gallery] watch failed:', err.message);
  }
}


