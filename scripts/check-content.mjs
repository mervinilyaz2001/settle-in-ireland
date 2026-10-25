/**
 * Pre-launch content checks. Run after a build with: npm run build && npm run check:content
 *
 * 1. Reports how often "student" is used (the agency copy uses it on purpose).
 * 2. No em dashes or en dashes anywhere in the source or the built site.
 * 3. Every page has one H1, a title under 60 characters and a description under 160.
 * 4. The footer disclaimer is on every page, and the full disclaimer is on the pages that need it.
 * 5. Every WhatsApp link uses the configured number and has a pre-filled message.
 * 6. The floating WhatsApp button is on every page.
 * 7. Every internal link and #anchor points to something that exists.
 * 8. No "null" or "undefined" text leaked into a page, and the email address stays hidden
 *    while emailActive is false. Redirect pages for old addresses are skipped.
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/config/site.ts';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const problems = [];
const notes = [];

async function walk(dir, exts) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.astro', '.git'].includes(entry.name)) continue;
      out.push(...(await walk(full, exts)));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}
const rel = (f) => path.relative(root, f).replaceAll('\\', '/');

/* ---------- 1 and 2: source and built text ---------- */
const textFiles = [
  ...(await walk(path.join(root, 'src'), ['.astro', '.ts', '.css', '.mjs', '.js', '.md'])),
  ...(await walk(path.join(root, 'scripts'), ['.mjs', '.svg'])),
  ...(await walk(path.join(root, 'public'), ['.svg', '.txt', '.webmanifest', '_headers'])),
  ...(await walk(dist, ['.html', '.xml', '.txt', '.js', '.css'])),
  path.join(root, 'README.md'),
  path.join(root, 'astro.config.mjs'),
];
const studentHits = new Map();
for (const file of textFiles) {
  let text;
  try {
    text = await readFile(file, 'utf8');
  } catch {
    continue;
  }
  if (/[\u2014\u2013]/.test(text)) problems.push(`Dash character (em or en dash) found in ${rel(file)}`);
  const hits = text.match(/\bstudents?\b/gi);
  if (hits && /[\\/]src[\\/]/.test(file)) studentHits.set(rel(file), hits.length);
}
notes.push(`"student" used in: ${[...studentHits].map(([f, n]) => `${f} (${n})`).join(', ') || 'none'}`);

/* ---------- 3 to 7: built pages ---------- */
const pages = (await walk(dist, ['.html'])).filter((f) => !f.includes('_astro'));
const routeOf = (file) => {
  const r = '/' + rel(file).replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\.html$/, '');
  return r;
};
const fullDisclaimerRoutes = ['/services/irp-guidance/', '/services/ppsn-assistance/', '/pricing/', '/faq/', '/terms/'];
const idsByRoute = new Map();
const htmlByRoute = new Map();
let redirects = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const route = routeOf(file);
  if (html.includes('http-equiv="refresh"')) {
    redirects++;
    const target = html.match(/http-equiv="refresh" content="0; url=([^"]+)"/)?.[1];
    if (!target) problems.push(`${route}: redirect page without a target`);
    continue;
  }
  htmlByRoute.set(route, html);
  idsByRoute.set(route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

for (const [route, html] of htmlByRoute) {
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) problems.push(`${route}: ${h1s.length} H1 headings (expected 1)`);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  if (!title) problems.push(`${route}: missing <title>`);
  else if (title.length >= 60) problems.push(`${route}: title is ${title.length} characters: "${title}"`);

  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!desc) problems.push(`${route}: missing meta description`);
  else if (desc.length >= 160) problems.push(`${route}: description is ${desc.length} characters`);

  if (!html.includes('not affiliated with, endorsed by or acting on behalf of any Irish government department or agency, including Immigration Service Delivery, the Department of Social Protection or Transport for Ireland')) {
    problems.push(`${route}: footer disclaimer missing`);
  }
  if (fullDisclaimerRoutes.includes(route) && !html.includes('Garda National Immigration Bureau')) {
    problems.push(`${route}: full government disclaimer missing`);
  }
  if (!html.includes('data-floating-wa')) problems.push(`${route}: floating WhatsApp button missing`);

  const body = html.slice(html.indexOf('<body'));
  const visible = body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  if (/>[^<]*(null|undefined)[^<]*</.test(visible)) problems.push(`${route}: "null" or "undefined" shown on the page`);
  if (!site.emailActive && visible.includes(site.email)) problems.push(`${route}: email address shown while emailActive is false`);

  for (const m of html.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)) {
    const url = decode(m[1]);
    if (!url.startsWith(`https://wa.me/${site.whatsappNumber}?text=`)) problems.push(`${route}: WhatsApp link without config number or message: ${url}`);
  }
  for (const m of html.matchAll(/<a\s[^>]*href="https:\/\/wa\.me[^>]*>/g)) {
    if (!/target="_blank"/.test(m[0]) || !/rel="noopener"/.test(m[0])) problems.push(`${route}: WhatsApp link missing target or rel`);
  }

  // Internal links and anchors
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = decode(m[1]);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id && id !== 'top' && !idsByRoute.get(route)?.has(id)) problems.push(`${route}: anchor ${href} has no target`);
      continue;
    }
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const [p, frag] = href.split('#');
    if (/\.(png|svg|webmanifest|xml|txt|woff2|css|js|ico|webp|jpg)$/.test(p)) continue;
    if (!htmlByRoute.has(p)) {
      problems.push(`${route}: internal link to missing page ${href}`);
      continue;
    }
    if (frag && !idsByRoute.get(p)?.has(frag)) problems.push(`${route}: link ${href} points to a missing anchor`);
  }
}

/* ---------- Fee consistency ---------- */
const price = `€${site.fee.amount}`;
for (const route of ['/', '/pricing/', '/agency-partnerships/', '/terms/']) {
  const html = htmlByRoute.get(route) ?? '';
  if (!html.includes(price)) problems.push(`${route}: ${price} not shown`);
  for (const p of site.fee.payments) {
    if (!html.includes(`€${p.amount}`)) problems.push(`${route}: payment €${p.amount} not shown`);
  }
}

notes.push(`Pages checked: ${htmlByRoute.size}, redirect pages: ${redirects}`);
console.log(notes.map((n) => `- ${n}`).join('\n'));
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n${problems.map((p) => `  x ${p}`).join('\n')}`);
  process.exit(1);
}
console.log('\nAll content checks passed.');
