# Settle in Ireland website

The website for **Settle in Ireland**, an independent team in Dublin that gives international students and
education agencies one-to-one help with arrival, IRP registration and renewal, and PPSN applications. The site
speaks as "we" (a team) and has no personal names, bios or photos, by the owner's choice.
Built with [Astro](https://astro.build) and Tailwind CSS as a fully static site.

- **Live:** https://settleinireland.com (the old https://mervinilyaz2001.github.io/settle-in-ireland/ address forwards there)
- **Repository:** https://github.com/mervinilyaz2001/settle-in-ireland
- **Domain:** settleinireland.com, registered at GoDaddy and connected on 27 Oct 2026 (section 4)

Almost everything you will want to change is in **one file: `src/config/site.ts`**. Anything still in
**[SQUARE BRACKETS]** shows on the site with a **yellow highlight** until you replace it.

---

## 1. Run it on your computer

You need **Node.js 22.23.4 or newer** (Node 24 LTS is installed on this PC). If a terminal says
`npm is not recognized`, close it and open a new one: terminals opened before Node was installed
cannot see it.

```bash
npm install            # once, to download the building blocks
npm run dev            # live preview at http://localhost:4321 while you edit
npm run build          # builds the finished site into the dist/ folder
npm run preview        # shows the built site at http://localhost:4321
npm run check:content  # run after a build: wording, links, titles, disclaimers, prices
npm run brand          # only if the logo changes: regenerates logos, favicons and the social image
```

## 2. How publishing works

Every push to the **`main`** branch publishes automatically. GitHub runs `.github/workflows/deploy.yml`,
which builds the site and puts it on GitHub Pages in about a minute. Follow each run under the
repository's **Actions** tab. A red cross means the build failed and the previous version stays live.

GitHub Pages is set to **Source: GitHub Actions** (Settings > Pages). Leave that as it is.

The site can also be hosted on Netlify (`netlify.toml`), Vercel (`vercel.json`) or Cloudflare Pages
(build command `npm run build`, output folder `dist`, environment variable `NODE_VERSION=24`).

## 3. Before launch: decisions and details still needed

Change these in `src/config/site.ts` unless another file is named. Each one is highlighted on the site
until it is done.

**The business**
- [x] `email`: settleinirelandsupport@gmail.com, shown on the Contact page, footer, Privacy Policy and Terms.
- [ ] `location`: confirm "Dublin, Ireland" is how you want it shown.

**Service and pricing**
- [ ] `supportMode`: how support is given. It currently says every client gets one-to-one support, mainly by
  WhatsApp and phone, and that you meet in person only if it is needed. There is no airport pickup.
- [ ] Prices: the package price shows **only** on the Moving on Your Own and Education Agencies pages (and in
  the Terms). IRP and PPSN assistance on their own say "contact us for a price".
- [ ] `supportPeriod`: confirm how long WhatsApp support lasts.
- [ ] `fee.payments[1].when`: confirm the second payment is due once the IRP appointment is confirmed.
- [ ] `fee.cancellationPolicy`: if plans change, clients text, call or talk to you in person and you agree what happens
  next. Have it checked with the Terms before launch.
- [ ] `responseTime`: optional. Leave as `null` unless you want to promise a reply time.

**Legal**
- The Privacy Policy and Terms both say "We are Settle in Ireland, based in Ireland", with no legal name or postal
  address, by the owner's choice.
- [ ] `legal.lastUpdated`: change the date whenever the Privacy Policy or Terms change (now 27 October 2026).
- Data retention (Privacy Policy section 8): personal data is kept for 2 months, then deleted. Payment records stay
  six years because Irish tax law requires it.
- [ ] **Have the Privacy Policy and Terms reviewed** by a solicitor or adviser against GDPR and Irish consumer law. They are templates, and having them does not by itself make the business compliant.

**Contact and launch**
- [ ] Register **settleinireland.com** (section 4). The site already uses settleinirelandsupport@gmail.com, so no
  mailbox is needed for the domain unless you want one.
- [ ] Connect the enquiry form (section 5) and send yourself a test enquiry from both forms.
- [x] Google Analytics 4 (G-QW0B8T2C0G, property "Settle in Ireland Website") and Google Search Console (verified with the
  HTML tag, sitemap submitted, homepage indexing requested), 28 Oct 2026. Section 6.
- [x] Launched 28 Oct 2026: `noindex: false`, so search engines can list the site.
- [ ] In GA4, once enquiries start arriving, mark `enquiry_submit` as a key event (Admin > Events).

## 4. Custom domain (settleinireland.com)

**Status (27 Oct 2026): connected.** settleinireland.com is registered at GoDaddy (renews 25 Oct 2027).
At GoDaddy the domain forward was removed, the four A records for `@` point to GitHub Pages and `www` is a
CNAME to `mervinilyaz2001.github.io`. In GitHub, Settings > Pages has `settleinireland.com` as the custom
domain. GoDaddy asks for an emailed code each time DNS records change. Email stays on Gmail
(settleinirelandsupport@gmail.com), so no MX records are needed.

**How it was connected (for reference, or if it ever needs redoing):**

1. Register `settleinireland.com` with any registrar (for example Blacknight, Namecheap or Cloudflare).
2. Recommended: verify the domain in GitHub first, which stops anyone else using it on GitHub Pages.
   GitHub > your profile picture > **Settings > Pages > Add a domain**, then add the TXT record GitHub shows you at your registrar.
3. At your registrar, add these DNS records:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `mervinilyaz2001.github.io` |

   Remove any other A, AAAA or CNAME records for `@` and `www` that the registrar added by default.
   Keep any MX records your email provider needs.
4. In the repository: **Settings > Pages > Custom domain**, enter `settleinireland.com` and save.
   Wait for the DNS check to pass (minutes to a few hours), then tick **Enforce HTTPS**.
5. Run the deploy again: **Actions > Deploy to GitHub Pages > Run workflow**. The build picks up the new
   address automatically, so links, canonical URLs, the sitemap and social previews switch to
   `https://settleinireland.com` with no code change. GitHub then redirects the old
   `github.io/settle-in-ireland/` address to the new domain, so there is no duplicate site for Google.
6. Open https://settleinireland.com and https://www.settleinireland.com to check both load over HTTPS.
7. Optional: if you later create an address on the domain, change `email` in `site.ts`.

Only consider the domain connected once step 6 works.

## 5. Enquiry form

**Current status: no form provider is connected.** The forms validate the answers, then open the
enquiry in WhatsApp, ready to send to you. They never show a fake "sent" message.

To have enquiries emailed to you instead, connect **one** free provider:

**Option A: Formspree** (https://formspree.io)
1. Create a free account and a new form. Set the email address enquiries should go to.
2. Copy the form ID from its endpoint, for example `https://formspree.io/f/abcdwxyz` → `abcdwxyz`.
3. In `src/config/site.ts`: `forms: { provider: 'formspree', formspreeId: 'abcdwxyz', web3formsKey: null }`.

**Option B: Web3Forms** (https://web3forms.com)
1. Enter your email address on the site to get an access key.
2. In `src/config/site.ts`: `forms: { provider: 'web3forms', formspreeId: null, web3formsKey: 'your-access-key' }`.
   This key is designed to be public, so it is safe in the website code.

Then push the change, open the live Contact page and the Agency Partnerships page, and send a test from each.
You should receive two emails. On Formspree, confirm your email address the first time.

**What you receive:** every field the person filled in, plus `form_type` (`individual` or `agency`), so you
can tell the two kinds of lead apart. The subject is "Enquiry from [name]" or "Agency partnership enquiry
from [agency]". Replies go straight to the sender's email address.

**Spam protection:** a hidden field that people never see but bots fill in, and a check that rejects forms
sent less than 2.5 seconds after the page loads. Both show "Thank you" to the bot and send nothing.
Formspree and Web3Forms add their own spam filtering.

**Privacy:** the Privacy Policy automatically names the provider once one is connected.

## 6. Analytics and Search Console

**Status (28 Oct 2026): both are set up** in the Google account that owns the site's Analytics (account 256658219).
Search Console uses the URL-prefix property `https://settleinireland.com/`. Keep the verification tag in `site.ts`.

Everything is off by default, so the site sets no cookies and shows no banner.

**Google Analytics 4**
1. Create a GA4 property at https://analytics.google.com and a **Web** data stream for the site's address.
2. Copy the Measurement ID (it looks like `G-XXXXXXXXXX`) into `analytics.ga4MeasurementId`.
3. Push. A cookie banner then appears. GA4 only loads after a visitor clicks **Accept**. "Reject" keeps it off,
   and "Cookie settings" in the footer lets visitors change their mind.
4. Check it works: accept cookies on the live site, then open GA4 > **Reports > Realtime** and click a WhatsApp button.

**Events sent** (never any names, emails, phone numbers or messages):

| Event | Details | Meaning |
|---|---|---|
| `whatsapp_click` | `location` (e.g. `hero_text`, `cta_band`, `floating_button`), `lead_type` (`individual` or `agency`) | Someone tapped a WhatsApp link |
| `enquiry_submit` | `form` (`individual` or `agency`), `method` (`form`, `whatsapp` or `email`) | An enquiry was sent, or handed to WhatsApp or email |
| `enquiry_error` | `form` | The form provider could not be reached |

In GA4, mark `enquiry_submit` as a **key event** (Admin > Events). To separate individual and agency leads,
register `form` and `lead_type` as custom dimensions (Admin > Custom definitions).

**Cookieless alternative:** Plausible or Umami need no banner. Set `analytics.provider` and `siteId`
(see the comments in `site.ts`). The same events are sent.

**Google Search Console**
1. Add the property at https://search.google.com/search-console (use the final domain once it is connected).
2. Choose the **HTML tag** method and paste only the `content="..."` value into `analytics.googleSiteVerification`.
3. Push, click **Verify**, then submit the sitemap: `sitemap-index.xml` on your site's address.

## 7. Where to change things

| What | Where |
|---|---|
| WhatsApp number, phone, email, reply time | `src/config/site.ts` |
| Price, payments, cancellation and delay wording | `fee` in `src/config/site.ts` |
| Pre-filled WhatsApp messages | `whatsappMessages` in `src/config/site.ts` |
| The four services on the homepage and About page | `src/components/OfferCards.astro` |
| Menu links | `links` in `src/components/Header.astro` |
| The seven package services (one file each; IRP and PPSN also have their own pages) | `src/data/services/` |
| FAQs | `src/data/faqs.ts` |
| Disclaimer wording | `src/data/disclaimers.ts` |
| Official website links | `src/data/official.ts` (checked 26 Oct 2026) |
| Colours, fonts, spacing | the `@theme` block in `src/styles/global.css` |

## 8. Photos and animation

- **No personal photos or bios.** The owner prefers the site to speak as a team, so there is no founder section.
- **No stock photos.** The site uses drawn elements instead (the settling-in plan card, dotted routes and
  icons), so nothing suggests a client or a meeting that did not happen.
- **Animation** lives in the MOTION section near the end of `src/styles/global.css`: the hero entrance, the
  scroll-in effect (`data-reveal`, with `left`, `right` and `zoom` variants), card hover lifts (`lift`) and
  button presses. Visitors whose device asks for reduced motion get simple fades with no movement.

## 9. Testimonials

Hidden until real ones exist. Add each quote word for word, with the person's written permission, to
`testimonials` in `site.ts`, then set `showTestimonials: true`. They then appear on the About Us page.
Never add made-up quotes, review scores or client numbers.

## 10. Old addresses

These older pages redirect to the new ones, so old links keep working:

| Old address | Now goes to |
|---|---|
| `/individual-support/`, `/services/` | `/moving-to-ireland-on-your-own/` |
| `/pricing/`, `/fees/` | `/moving-to-ireland-on-your-own/#package` |
| `/services/irp-guidance/` | `/irp-application-assistance/` |
| `/services/ppsn-assistance/` | `/ppsn-application-assistance/` |
| `/partner-agencies/` | `/agency-partnerships/` |
| `/services/arrival-planning-airport-pickup/` | `/services/arrival-planning/` |

## 11. Project structure

```
src/config/site.ts            All settings
src/data/                     Services, FAQs, official links, disclaimers
src/components/               Header, Footer, forms, price card, FAQ accordion, analytics and more
src/layouts/                  BaseLayout (every page), ServicePageLayout (7 service pages), Redirect
src/pages/                    One file per page; services/[slug].astro builds the service pages
src/scripts/analytics.ts      Event tracking
src/styles/global.css         Design tokens and shared styles
public/                       Logos, favicons, social image, security headers
scripts/                      Brand file generator and content checks
.github/workflows/deploy.yml  Builds and publishes to GitHub Pages
```

## 12. Search keywords (SEO)

Each main page is written around the searches its visitors make. The words below are in the page title, the
description Google shows, the main heading, the address and the text. Keep them when you edit.

| Page | Address | Searches it targets |
|---|---|---|
| Home | `/` | IRP and PPSN help, student arrival support in Ireland, settling in Ireland, one-to-one help in Dublin |
| Education Agencies | `/agency-partnerships/` | education agency partner Ireland, arrival support for agencies, student support for agencies sending students to Ireland |
| Moving on Your Own | `/moving-to-ireland-on-your-own/` | moving to Ireland as a student, moving to Ireland without an agency, international student arrival help |
| IRP | `/irp-application-assistance/` | IRP registration help, IRP renewal for students, IRP renewal online, Irish Residence Permit student, IRP application assistance |
| PPSN | `/ppsn-application-assistance/` | PPSN application assistance, PPS Number for students, how to get a PPS Number, PPSN proof of address |

Nobody can guarantee the first result on Google. What decides it, in order of impact:

1. **Let Google in.** Set `noindex: false` on launch day, connect the domain, verify Search Console and submit
   the sitemap (section 6). Until then the site cannot appear in search at all.
2. **Google Business Profile** for Settle in Ireland in Dublin (it can hide the address and show a service
   area). This is what shows in the map results for searches like "IRP help Dublin".
3. **Real reviews** on that profile from real clients. Never write or buy reviews.
4. **Links from other sites:** partner agencies, student groups and community pages linking to your site.
5. **Helpful guides** that answer common questions, for example "How to renew your IRP as a student",
   "How to get a PPS Number as a student" and "Your first week in Dublin". Each one can rank for its own search.
6. **Check Search Console monthly** to see which searches show the site, then strengthen those pages.
