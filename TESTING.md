# Testing report: redesign (25 October 2026)

Tested on the production build (`npm run build`, served locally), then on the live GitHub Pages site after
publishing. "Not verified" means it could not be tested without an account or decision from the owner.

## Passed

| Area | What was checked |
|---|---|
| Build | `npm run build`: 22 pages (18 content pages, 4 redirects), no errors or warnings |
| Content checks | `npm run check:content`: no em or en dashes; one H1 per page; titles under 60 and descriptions under 160 characters; footer disclaimer on every page; full disclaimer on IRP, PPSN, Pricing, FAQ and Terms; every WhatsApp link uses +353 89 974 1681 with a pre-filled message and opens in a new tab; floating WhatsApp button on every page; €350, €150 and €200 consistent on Home, Pricing, Agency Partnerships and Terms; no "null" or "undefined" text; email hidden while `emailActive` is false; every internal link and anchor resolves |
| Spacing | No missing spaces before or after links on any page |
| Layout | No sideways scrolling on any of the 18 pages at 360, 390, 768, 1024 and 1440 px |
| Visual review | Home, Individual Support, Agency Partnerships, Pricing and Contact checked at phone and desktop widths |
| Navigation | Desktop menu from 1280 px, slide-in menu below it; menu opens, keeps focus inside, closes on Escape and returns focus; current page highlighted |
| Keyboard | Skip link, logical tab order, visible dark-green focus outline |
| Redirects | `/fees/`, `/partner-agencies/`, `/services/`, `/moving-to-ireland-on-your-own/` all forward to the new pages |
| Individual form | Required-field errors listed and focused; email, phone and website checks; sends all answers plus `form_type: individual` (tested against a local Formspree-style test server); success message, focus and reset; error message with WhatsApp fallback when the provider fails; WhatsApp hand-off when no provider is connected |
| Agency form | Required-field errors; sends `form_type: agency` and all answers; success message |
| Web3Forms option | Sends `access_key`, `subject`, `from_name`, `botcheck` and reads Web3Forms' success reply |
| Spam protection | Hidden field filled: "Thank you" shown, nothing sent. Sent within 2.5 seconds of loading: "Thank you" shown, nothing sent |
| Analytics events | All 8 WhatsApp links on the homepage send `whatsapp_click` with the right location and lead type; form events send `enquiry_submit` or `enquiry_error` with form type and method; no names, emails, numbers or messages in any event |
| Cookie consent (GA4) | With a temporary local-only test ID (never committed): banner shows on first visit; nothing loads before a choice; Reject keeps GA4 off and is remembered; "Cookie settings" reopens the banner; Accept loads GA4 and events reach it |
| Lighthouse (mobile) | Accessibility 100 and Best Practices 100 on all 10 pages tested. Performance: Home 92, Individual Support 96, IRP Guidance 91, Pricing 95, Agency Partnerships 93, How It Works 91, About 89, FAQ 89, Contact 98, Privacy 99. LCP 1.7 to 2.0 s, CLS 0. SEO 66 to 69 only because of the deliberate pre-launch `noindex`; it was 100 when `noindex` was switched off in an earlier test |
| External links | All official government and Citizens Information links return a page (checked 25 Oct 2026); Formspree and Web3Forms privacy pages exist |

## Not verified (needs the owner)

| Item | Why | How to finish |
|---|---|---|
| Real form delivery by email | No Formspree or Web3Forms account is connected | README section 5, then send a test from both forms |
| GA4 data in Google Analytics | No real Measurement ID | README section 6, then check Realtime |
| Custom domain | settleinireland.com is not registered | README section 4 |
| Email address | The domain does not exist yet, so the mailbox cannot work | Register the domain, set up email, set `emailActive: true` |
| SEO score with indexing on | `noindex` stays on until the placeholders are filled | Set `noindex: false` on launch day |
| Legal review | Privacy Policy and Terms are templates | Solicitor or adviser review |
