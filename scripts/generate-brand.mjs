/**
 * Generates the logo files, favicons and the default social sharing image into /public.
 * Run with: npm run brand
 *
 * The wordmark text is converted to outlines with the Plus Jakarta Sans font files from
 * node_modules, so the files look the same everywhere, even where the font is not installed.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import opentype from 'opentype.js';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = (file) => path.join(root, 'public', file);
const fontFile = (weight) =>
  path.join(root, 'node_modules/@fontsource/plus-jakarta-sans/files', `plus-jakarta-sans-latin-${weight}-normal.woff`);

const C = {
  brand900: '#0F3D4C',
  brand950: '#092A35',
  brand600: '#2A7186',
  brand100: '#E2EEF0',
  accent600: '#1F8A70',
  accent700: '#14705A',
  accent300: '#8FD6C0',
  gold500: '#F2A541',
  white: '#FFFFFF',
};

async function loadFont(weight) {
  const buf = await readFile(fontFile(weight));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

/** Lays out text glyph by glyph with kerning and tracking, and returns SVG path data and the width. */
function textPath(font, text, x, y, size, tracking = -0.03) {
  // Plain character-to-glyph mapping. Skips OpenType substitutions, which this simple Latin text does not need.
  const glyphs = Array.from(text).map((ch) => font.charToGlyph(ch));
  const scale = size / font.unitsPerEm;
  let cx = x;
  let d = '';
  glyphs.forEach((g, i) => {
    d += g.getPath(cx, y, size).toPathData(2);
    let advance = g.advanceWidth * scale;
    if (i < glyphs.length - 1) {
      const kern = font.getKerningValue(g, glyphs[i + 1]);
      if (Number.isFinite(kern)) advance += kern * scale;
    }
    cx += advance + tracking * size;
  });
  return { d, width: cx - x };
}

/** The pin with a house, a leaf and an amber door, drawn in a 48 x 48 box. */
function mark({ pin, house, x = 0, y = 0, scale = 1 }) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
  <path fill="${pin}" d="M24 3.5c-9 0-16.5 7.2-16.5 16.2 0 11.3 12.9 22.8 15.4 24.9a1.7 1.7 0 0 0 2.2 0C27.6 42.5 40.5 31 40.5 19.7 40.5 10.7 33 3.5 24 3.5Z"/>
  <path fill="${C.accent600}" d="M33.6 9.6a14 14 0 0 1 3.6 7.1c-2.6-.4-5-1.8-6.3-4 .9-1.2 1.8-2.2 2.7-3.1Z"/>
  <path fill="${house}" d="M15.6 21.4 24 14.2l8.4 7.2v8.8c0 .7-.5 1.2-1.2 1.2H16.8c-.7 0-1.2-.5-1.2-1.2v-8.8Z"/>
  <path fill="${C.gold500}" d="M21.6 31.4v-4.9a2.4 2.4 0 0 1 4.8 0v4.9h-4.8Z"/>
</g>`;
}

/** Wordmark "Settle in Ireland" as outlines. Returns the SVG group and its width. */
function wordmark(bold, semi, { x, y, size, main, accent }) {
  const space = size * 0.24;
  const a = textPath(bold, 'Settle', x, y, size);
  const b = textPath(semi, 'in', x + a.width + space, y, size);
  const c = textPath(bold, 'Ireland', x + a.width + space + b.width + space, y, size);
  const width = a.width + space + b.width + space + c.width;
  return {
    svg: `<path fill="${main}" d="${a.d}"/><path fill="${accent}" d="${b.d}"/><path fill="${main}" d="${c.d}"/>`,
    width,
  };
}

const bold = await loadFont(800);
const semi = await loadFont(600);

/* ---------- Logo files ---------- */
for (const tone of ['light', 'dark']) {
  const light = tone === 'light';
  const w = wordmark(bold, semi, {
    x: 60,
    y: 34,
    size: 27,
    main: light ? C.brand900 : C.white,
    accent: light ? C.accent700 : C.accent300,
  });
  const width = Math.ceil(60 + w.width + 4);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 48" width="${width * 4}" height="192" role="img" aria-label="Settle in Ireland">
${mark({ pin: light ? C.brand900 : C.white, house: light ? C.white : C.brand900 })}
${w.svg}
</svg>`;
  await writeFile(pub(`logo-${tone}.svg`), svg);
  await sharp(Buffer.from(svg)).resize({ width: 1200 }).png().toFile(pub(`logo-${tone}.png`));
}

/* ---------- Favicons ---------- */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<style>.pin{fill:${C.brand900}}.house{fill:${C.white}}@media (prefers-color-scheme:dark){.pin{fill:${C.white}}.house{fill:${C.brand900}}}</style>
<path class="pin" d="M24 3.5c-9 0-16.5 7.2-16.5 16.2 0 11.3 12.9 22.8 15.4 24.9a1.7 1.7 0 0 0 2.2 0C27.6 42.5 40.5 31 40.5 19.7 40.5 10.7 33 3.5 24 3.5Z"/>
<path fill="${C.accent600}" d="M33.6 9.6a14 14 0 0 1 3.6 7.1c-2.6-.4-5-1.8-6.3-4 .9-1.2 1.8-2.2 2.7-3.1Z"/>
<path class="house" d="M15.6 21.4 24 14.2l8.4 7.2v8.8c0 .7-.5 1.2-1.2 1.2H16.8c-.7 0-1.2-.5-1.2-1.2v-8.8Z"/>
<path fill="${C.gold500}" d="M21.6 31.4v-4.9a2.4 2.4 0 0 1 4.8 0v4.9h-4.8Z"/>
</svg>`;
await writeFile(pub('favicon.svg'), faviconSvg);

const flatMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">${mark({ pin: C.brand900, house: C.white })}</svg>`;
await sharp(Buffer.from(flatMark)).resize(32, 32).png().toFile(pub('favicon-32x32.png'));

// App icons: white pin on the brand colour, with padding so they also work as maskable icons
const appIcon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
<rect width="${size}" height="${size}" fill="${C.brand900}"/>
${mark({ pin: C.white, house: C.brand900, x: size * 0.2, y: size * 0.19, scale: (size * 0.6) / 48 })}
</svg>`;
await sharp(Buffer.from(appIcon(180))).png().toFile(pub('apple-touch-icon.png'));
await sharp(Buffer.from(appIcon(192))).png().toFile(pub('icon-192.png'));
await sharp(Buffer.from(appIcon(512))).png().toFile(pub('icon-512.png'));

/* ---------- Default social sharing image (1200 x 630) ---------- */
const og = (() => {
  const wm = wordmark(bold, semi, { x: 0, y: 0, size: 84, main: C.white, accent: C.accent300 });
  const tagline = textPath(semi, 'Your Local Contact in Ireland.', 0, 0, 44, -0.02);
  const sub = textPath(semi, 'Arrival and settling-in support for international clients', 0, 0, 28, -0.01);
  const sub2 = textPath(semi, 'and their partner agencies.', 0, 0, 28, -0.01);
  const domain = textPath(bold, 'settleinireland.com', 0, 0, 26, -0.01);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<defs>
  <radialGradient id="g1" cx="0.1" cy="0.05" r="0.7"><stop offset="0" stop-color="${C.accent600}" stop-opacity=".45"/><stop offset="1" stop-color="${C.accent600}" stop-opacity="0"/></radialGradient>
  <radialGradient id="g2" cx="0.95" cy="1" r="0.6"><stop offset="0" stop-color="${C.brand600}" stop-opacity=".7"/><stop offset="1" stop-color="${C.brand600}" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="${C.brand900}"/>
<rect width="1200" height="630" fill="url(#g1)"/>
<rect width="1200" height="630" fill="url(#g2)"/>
<path d="M620 640C760 560 820 420 960 400S1140 320 1180 120" stroke="${C.accent300}" stroke-opacity=".55" stroke-width="4" stroke-dasharray="3 18" stroke-linecap="round" fill="none"/>
<circle cx="1180" cy="120" r="12" fill="${C.gold500}"/>
<circle cx="1180" cy="120" r="30" fill="none" stroke="${C.gold500}" stroke-opacity=".35" stroke-width="3"/>
${mark({ pin: C.white, house: C.brand900, x: 80, y: 92, scale: 2.6 })}
<g transform="translate(80 330)">${wm.svg}</g>
<g transform="translate(82 410)"><path fill="${C.accent300}" d="${tagline.d}"/></g>
<g transform="translate(82 478)"><path fill="${C.brand100}" d="${sub.d}"/></g>
<g transform="translate(82 518)"><path fill="${C.brand100}" d="${sub2.d}"/></g>
<g transform="translate(${1120 - domain.width} 590)"><path fill="${C.white}" fill-opacity=".85" d="${domain.d}"/></g>
</svg>`;
})();
await writeFile(path.join(root, 'scripts', 'og-default.svg'), og);
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(pub('og-default.png'));

/* ---------- Web app manifest ---------- */
await writeFile(
  pub('site.webmanifest'),
  JSON.stringify(
    {
      name: 'Settle in Ireland',
      short_name: 'Settle in Ireland',
      description: 'Your Local Contact in Ireland.',
      start_url: './',
      display: 'browser',
      background_color: '#F8FAF9',
      theme_color: C.brand900,
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
    null,
    2,
  ) + '\n',
);

console.log('Brand files written to /public');
