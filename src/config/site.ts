/**
 * SITE SETTINGS
 *
 * Every detail the owner may need to change lives in this one file. Change a value here
 * and every page, button, form, footer and search engine tag follows.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder. It shows on the site with a yellow
 * highlight until it is replaced, so a quick scroll through the preview shows what is
 * still missing. README.md has the full list of owner decisions.
 */

export interface Testimonial {
  /** The words exactly as the person wrote them. Only add a quote with their written permission. */
  quote: string;
  /** How they want to be named, for example "Rahim A." or "Partner agency, Dhaka". */
  name: string;
  /** Optional short context, for example "Client, arrived September 2026". */
  context?: string;
}

export interface Payment {
  amount: number;
  /** When this payment is due. Shown on the pricing page, the homepage, the agency page and in the Terms. */
  when: string;
}

export const site = {
  name: 'Settle in Ireland',
  tagline: 'Your Local Team in Ireland.',
  /**
   * The intended domain. NOTE (checked 25 Oct 2026): settleinireland.com is not registered yet.
   * Until it is, the live site runs at https://mervinilyaz2001.github.io/settle-in-ireland/ and the
   * GitHub build sets the correct address automatically (README, "Custom domain").
   */
  domain: 'https://settleinireland.com',
  /** Default description used when a page does not set its own. */
  description:
    'One-to-one help for international students and education agencies: arrival, accommodation, IRP registration and renewal, and PPSN application assistance.',

  /**
   * SEARCH ENGINE SWITCH
   * false lets Google and other search engines list the site (launched 28 Oct 2026).
   * true adds a "noindex" tag to every page so search engines ignore it.
   */
  noindex: false,

  /** Where the team is based. Shown on the homepage, About page and in search results. */
  location: 'Dublin, Ireland',

  /* ---------- Contact ---------- */
  /** International format with no + sign and no spaces, for example 353871234567. */
  whatsappNumber: '353899741613',
  /** Shown on the site exactly as written here. Used for the "Call" links. */
  phone: '+353 89 974 1613',
  email: 'settleinirelandsupport@gmail.com',
  /** EMAIL SWITCH: false hides the email address everywhere on the site. */
  emailActive: true,
  /** Optional. Only shown if you set it, for example 'We usually reply within one working day.' Leave null to make no promise. */
  responseTime: null as string | null,

  /* ---------- Service details ---------- */
  /** How support is given. Shown on the agency, Moving on Your Own, About and FAQ pages. */
  supportMode:
    'Every client gets one-to-one support from our team, mainly by WhatsApp and phone. We meet in person only if it is needed.',
  /** How long WhatsApp support lasts. Reads as part of a sentence: "WhatsApp support during the first weeks after arrival." */
  supportPeriod: 'during the first weeks after arrival',

  /* ---------- Fee ---------- */
  fee: {
    title: 'Complete Arrival and Settling-In Support',
    amount: 350,
    currency: 'EUR',
    perUnit: 'per client',
    payments: [
      { amount: 150, when: 'At the start of the service.' },
      // To change when the second payment is due, edit only the "when" text below,
      // for example: 'On the client\'s arrival in Ireland.'
      { amount: 200, when: "Once the client's IRP registration appointment is confirmed." },
    ] as Payment[],
    milestoneNote: 'This is a service milestone only. We do not sell, reserve or guarantee government appointments.',
    exclusions: 'Government fees, accommodation costs, deposits and third-party charges are separate.',
    /** What happens if plans change. Shown on the Moving on Your Own page, in the FAQ and in the Terms. */
    cancellationPolicy:
      'If your plans change, for example a visa is refused or travel is postponed, let us know as soon as possible. Send us a text or WhatsApp message, call us, or talk to us in person, and we will agree together what happens next, including what can be refunded or moved to a later date. The second payment is only due once that milestone is reached.',
  },

  /* ---------- Education agencies ---------- */
  currentMarkets:
    'Already supporting students referred by partner agencies in South Asia, and open to partner agencies from any country.',

  /* ---------- Pre-filled WhatsApp messages ---------- */
  whatsappMessages: {
    general: 'Hi, I found Settle in Ireland online and would like more information.',
    partnerAgency:
      "Hi, I represent an education agency and I'm interested in becoming a partner agency with Settle in Ireland.",
    client: "Hi, I'm moving to Ireland soon and I'd like to know more about your arrival and settling-in support.",
    /** For clients arranging their own move, without an agency. */
    direct: "Hi, I'm moving to Ireland on my own, without an agency, and I'd like to know more about your support.",
    /** {service} is replaced with the service name on each service page. */
    service: "Hi, I'd like to know more about your {service} support.",
    irp: "Hi, I'd like help with my IRP registration or renewal.",
    ppsn: "Hi, I'd like help applying for my PPS Number.",
    /** {price} and {package} are filled in from the fee settings above. */
    fees: 'Hi, I have a question about the {price} {package} package.',
  },

  /* ---------- Enquiry forms ----------
   * The forms send enquiries to a form provider. Until one is connected, the forms open the
   * enquiry in WhatsApp instead, so no enquiry is ever lost. To connect one (README, "Enquiry form"):
   *   Formspree:  provider: 'formspree', formspreeId: 'abcdwxyz'   (from https://formspree.io/f/abcdwxyz)
   *   Web3Forms:  provider: 'web3forms', web3formsKey: 'your-access-key'
   * Both are free for small volumes and email each enquiry to you.
   */
  forms: {
    provider: null as null | 'formspree' | 'web3forms',
    formspreeId: null as string | null,
    web3formsKey: null as string | null,
  },

  /* ---------- Testimonials ----------
   * Hidden until there are real ones. To show them:
   * 1. Add each quote below, word for word, with the person's written permission.
   * 2. Set showTestimonials to true.
   */
  showTestimonials: false,
  testimonials: [] as Testimonial[],

  /* ---------- Map ----------
   * Off by default. Only turn on with a real business address, and note that Google Maps
   * embeds set cookies, which would then need consent.
   */
  showMap: false,
  mapEmbedUrl: null as string | null,

  /* ---------- Analytics and Search Console ----------
   * Everything is off by default: no tracking and no cookies.
   * GA4: set ga4MeasurementId (e.g. 'G-XXXXXXXXXX'). A cookie consent banner then appears
   *      automatically, and GA4 only loads after the visitor accepts.
   * Plausible or Umami (cookieless, no banner needed):
   *      provider: 'plausible', siteId: 'settleinireland.com'
   *      provider: 'umami', siteId: 'your-website-id', scriptUrl: 'https://cloud.umami.is/script.js'
   * Search Console: paste only the content value of the HTML-tag verification method.
   */
  analytics: {
    ga4MeasurementId: 'G-QW0B8T2C0G' as string | null,
    provider: null as null | 'plausible' | 'umami',
    siteId: null as string | null,
    scriptUrl: null as string | null,
    googleSiteVerification: 'ecnzRttq6wok_52kpq-Xd_KjqibTSX4prmouNIGZ83I' as string | null,
  },

  /* ---------- Social profiles ----------
   * Only profiles with a link are shown. Use the full address, for example 'https://www.facebook.com/settleinireland'.
   */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  /* ---------- Legal details (Privacy Policy and Terms) ----------
   * Both pages simply say "We are Settle in Ireland, based in Ireland", with no legal name or postal address.
   */
  legal: {
    /** Shown at the top of the Privacy Policy and the Terms. */
    lastUpdated: '27 October 2026',
  },
};

export type Site = typeof site;
