# Settle in Ireland website

The marketing website for **Settle in Ireland** (settleinireland.com), an independent arrival and
settling-in support service. Built with [Astro](https://astro.build) and Tailwind CSS as a fully static
site: no server, no database, no cookies and no tracking.

---

## 1. Run it on your computer

You need **Node.js 22.23.4 or newer** (Node 24 LTS recommended, from nodejs.org).

```bash
npm install          # once, to download the building blocks
npm run dev          # live preview at http://localhost:4321 while you edit
npm run build        # builds the finished site into the dist/ folder
npm run preview      # shows the built site at http://localhost:4321
npm run check:content  # run after a build: checks wording, links, disclaimers and page titles
npm run brand        # only if you change the logo: regenerates logos, favicons and the social image
```

## 2. Publish it

**GitHub Pages (set up already).** Every push to the `main` branch builds the site and publishes it at
https://mervinilyaz2001.github.io/settle-in-ireland/ (see `.github/workflows/deploy.yml`). You can follow each
build under the repository's **Actions** tab. The only one-time setting is in the repository on GitHub:
Settings > Pages > Build and deployment > Source: **GitHub Actions**.

The site is a folder of static files (`dist/`), so any static host works. All three below have free plans.

| Host | What to do |
|---|---|
| **Netlify** | New site from Git (or drag the `dist` folder onto app.netlify.com/drop). Settings are already in `netlify.toml`. |
| **Vercel** | Import the project. It detects Astro. Settings are in `vercel.json`. |
| **Cloudflare Pages** | Create a project. Framework preset: Astro. Build command `npm run build`, output folder `dist`. Set the environment variable `NODE_VERSION` to `24`. |

Then point **settleinireland.com** at the host (each host has a "Custom domain" page that explains the DNS records)
and turn on HTTPS (automatic on all three).

## 3. Where to change things

Almost everything lives in **one file: `src/config/site.ts`**. Change a value there and every page, button,
form, footer and search engine tag updates.

| What | Setting in `src/config/site.ts` |
|---|---|
| WhatsApp number (international format, no + or spaces, e.g. `353871234567`) | `whatsappNumber` |
| Phone number shown for "Call" | `phone` |
| Email address | `email` |
| Your name, bio, story and photo (About page) | `ownerName`, `ownerBio`, `ownerStory`, `ownerPhoto` |
| Languages you speak (FAQ, About) | `languages` |
| Where you are based | `location` |
| Reply time | `responseTime` |
| Airports covered | `airportsCovered` |
| Taxi or transport cost note (airport pickup) | `pickupTransportNote` |
| How long WhatsApp support lasts | `supportPeriod` |
| The fee, package name and the two payments | `fee.amount`, `fee.title`, `fee.payments` |
| **When the second payment is due** (e.g. "On the client's arrival in Ireland.") | `fee.payments[1].when` |
| The note under the second payment | `fee.milestoneNote` |
| Payment methods and receipts | `fee.paymentMethods` |
| Cancellation and refund wording (Fees page and Terms) | `fee.cancellationPolicy` |
| "Already supporting clients..." line | `currentMarkets` |
| Pre-filled WhatsApp messages | `whatsappMessages` |
| Social media profiles (only shown when filled in) | `social` |
| Legal name, postal address, registration, policy date | `legal` |
| Testimonials | `showTestimonials`, `testimonials` (see section 5) |
| Map on the Contact page (off) | `showMap`, `mapEmbedUrl` |
| Analytics (off) | `analytics` (see section 7) |
| Keep the site out of Google until launch | `noindex` |

Anything still in **[SQUARE BRACKETS]** shows on the site with a **yellow highlight**, so a quick scroll
through the preview shows what is left to fill in.

Other content:

- **Services**: one file per service in `src/data/services/`. The menu, footer, services grid, service pages
  and "Other services" lists are all built from these files.
- **FAQs**: `src/data/faqs.ts` (the FAQ page, the homepage preview and the FAQ search engine data).
  Service-specific questions are inside each service file.
- **Official website links**: `src/data/official.ts` (checked on 25 October 2026).
- **Disclaimer wording**: `src/data/disclaimers.ts`.
- **Colours and fonts**: the `@theme` block at the top of `src/styles/global.css`.

## 4. Pre-launch checklist

Work through this before the site goes live.

**Must do**

- [ ] `whatsappNumber`: replace the placeholder `353000000000` with the real WhatsApp number.
- [ ] `phone`: replace `+353 00 000 0000`.
- [ ] `email`: confirm `hello@settleinireland.com` is set up and receiving mail.
- [ ] `ownerName`, `ownerBio`, `ownerStory`: write these in your own words (About page).
- [ ] `languages`: e.g. "English and Bengali".
- [ ] `fee.paymentMethods`: how clients pay, and that receipts are given.
- [ ] `fee.cancellationPolicy`: check the draft wording, remove `[OWNER TO CONFIRM]`, and make sure it matches the Terms.
- [ ] `fee.payments[1].when`: confirm when the second payment is due.
- [ ] `supportPeriod`, `airportsCovered`, `pickupTransportNote`, `location`, `responseTime`: confirm each one is true.
- [ ] `legal.ownerLegalName`, `legal.postalAddress`, `legal.businessRegistration`, `legal.lastUpdated`.
- [ ] Privacy Policy: replace the two `[12 months]` retention periods in `src/pages/privacy-policy.astro` with your real periods.
- [ ] **Have the Privacy Policy and Terms of Service reviewed** by a solicitor or adviser (both are templates, not legal advice).
- [ ] Send yourself a test enquiry from both forms (Contact page and Partner Agencies page), by WhatsApp and by email.
- [ ] Search the site for yellow highlights: there should be none left.

**Launch day**

- [ ] Set `noindex: false` in `src/config/site.ts`, so search engines can list the site.
- [ ] Build and publish, then open settleinireland.com on a phone and check the WhatsApp buttons open a chat with you.
- [ ] Add the site to Google Search Console and submit `https://settleinireland.com/sitemap-index.xml`.

**Nice to have**

- [ ] A friendly photo of you for the About page (section 6).
- [ ] Social profile links in `social`.
- [ ] Real testimonials, with permission (section 5).

## 5. Adding testimonials

The testimonials section is built but hidden. It only appears when **both** are true:
`showTestimonials: true` **and** there is at least one entry in `testimonials`.

```ts
showTestimonials: true,
testimonials: [
  { quote: 'Their exact words.', name: 'First name and initial', context: 'Client, arrived September 2026' },
  { quote: 'Their exact words.', name: 'Partner agency, Dhaka' },
],
```

Only publish real quotes, word for word, with the person's written permission. Never add sample or made-up
quotes, numbers of clients, reviews or partner logos.

## 6. Adding real photos

- **Your photo (About page)**: save it as `public/images/owner.webp` (about 800 x 1000 pixels, under 200 KB),
  then set `ownerPhoto: '/images/owner.webp'` in `src/config/site.ts`.
- The rest of the site uses drawn illustrations and icons, so it does not need photos. If you add any, use
  your own photos or free-licence ones (e.g. Unsplash or Pexels), keep them generic, never suggest a stock
  photo shows you or a real client, and note the credit in a comment next to where the photo is used.
  Save photos as WebP and add `loading="lazy"` to any image below the top of the page.

## 7. Analytics (optional)

Off by default, so the site sets no cookies and needs no cookie banner. To turn on a cookieless, privacy-friendly
tool, edit `analytics` in `src/config/site.ts`:

```ts
analytics: { enabled: true, provider: 'plausible', siteId: 'settleinireland.com', scriptUrl: null },
// or
analytics: { enabled: true, provider: 'umami', siteId: 'your-website-id', scriptUrl: 'https://cloud.umami.is/script.js' },
```

Plausible and Umami do not set cookies, so no banner is needed. If you ever use a tool that sets cookies
(for example Google Analytics), you must add a cookie consent banner first.

## 8. What is in the project

```
src/config/site.ts          All the settings above
src/data/services/*.ts      One file per service
src/data/faqs.ts            FAQs
src/data/official.ts        Official website links
src/data/disclaimers.ts     Independence and "no advice" wording
src/components/             Header, Footer, buttons, forms, FAQ accordion, price card and more
src/layouts/                BaseLayout (every page) and ServicePageLayout (the 7 service pages)
src/pages/                  One file per page; services/[slug].astro builds the service pages
src/styles/global.css       Colours, fonts and shared styles
public/                     Logos, favicons, social image, security headers
scripts/generate-brand.mjs  Makes the logo files, favicons and social image
scripts/check-content.mjs   Pre-launch content checks
```

**Brand files** in `public/`: `logo-light.svg/png` (for light backgrounds), `logo-dark.svg/png` (for dark
backgrounds), `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and
`og-default.png` (the 1200 x 630 image shown when the site is shared on WhatsApp, Facebook or LinkedIn).

## 9. How the enquiry forms work

The forms do not send anything to a server and do not store anything. When someone presses
**Send on WhatsApp**, their answers are turned into a tidy message and WhatsApp opens with it ready to send to
your number. **Send by email instead** opens their email app with the same message. A confirmation on the page
tells them to press send, with buttons to try again or copy the message if nothing opened.

## 10. Checking quality (Lighthouse)

1. `npm run build` then `npm run preview`.
2. Open the preview in Chrome, press F12, open the **Lighthouse** tab, choose **Mobile**, and run it.

Note: while `noindex` is `true`, Lighthouse's SEO score is lower on purpose ("Page is blocked from indexing").
It goes back up once you set `noindex: false` at launch.
