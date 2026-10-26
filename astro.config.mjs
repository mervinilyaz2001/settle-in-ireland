// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

// On GitHub Pages the build sets SITE_URL and BASE_PATH (see .github/workflows/deploy.yml),
// because the site is served from a sub-folder there. Elsewhere the defaults below are used.
export default defineConfig({
  site: process.env.SITE_URL || site.domain,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Keep the spaces between words and links that start on a new line in the source
  compressHTML: false,
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Leave out the 404 page and the old addresses that now redirect
      filter: (page) =>
        !/\/(404|fees|pricing|partner-agencies|individual-support|services|arrival-planning-airport-pickup|irp-guidance|ppsn-assistance)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Fonts are self-hosted from node_modules, preloaded, and given size-matched fallbacks
  // so text does not jump if a web font loads late.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      // "optional": if the body font is not ready in time on a slow first visit, the size-matched
      // fallback is used for that page instead of re-drawing all the text when the font arrives.
      display: 'optional',
      options: {
        variants: [
          {
            src: ['./node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
