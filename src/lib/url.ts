/**
 * Internal links. On GitHub Pages the site lives in a sub-folder
 * (mervinilyaz2001.github.io/settle-in-ireland/), on its own domain it lives at the root.
 * These helpers add the right folder, so links work in both places.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Adds the site's folder to an internal link, for example '/contact/' becomes '/settle-in-ireland/contact/' on GitHub Pages. */
export function url(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}${path}`;
}

/** The full address of a page or file, for search engines and link previews. */
export function absoluteUrl(path: string): string {
  return new URL(url(path), import.meta.env.SITE).href;
}

/** Adds the site's folder to internal links inside an HTML string, such as an FAQ answer. */
export function withBase(html: string): string {
  return html.replace(/href="(\/[^"]*)"/g, (_, path: string) => `href="${url(path)}"`);
}
