/**
 * SITE SETTINGS
 *
 * Every detail the owner may need to change lives in this one file. Change a value here
 * and every page, button, form, footer and search engine tag follows.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder. It shows on the site with a yellow
 * highlight until it is replaced, so a quick scroll through the preview shows what is
 * still missing. README.md has the full pre-launch checklist.
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
  /** When this payment is due. Shown on the Fees page, the homepage, the Partner Agencies page and in the Terms. */
  when: string;
}

export const site = {
  name: 'Settle in Ireland',
  tagline: 'Your Local Contact in Ireland.',
  domain: 'https://settleinireland.com',
  /** Default description used when a page does not set its own. */
  description:
    'Independent arrival and settling-in support in Ireland for international clients and their partner agencies. Airport pickup, accommodation help, IRP and PPSN guidance.',

  /**
   * PRE-LAUNCH SWITCH
   * true adds a "noindex" tag to every page so search engines ignore the site while the
   * placeholders are being filled in. Set it to false on launch day (README, launch step 1).
   */
  noindex: true,

  /* ---------- The owner (About page, Privacy Policy and Terms) ---------- */
  ownerName: 'Mizan Mohammed',
  /** Two or three sentences in the first person, for the About page. */
  ownerBio: '[SHORT FIRST-PERSON BIO]',
  /** Path to a photo in /public once there is one, for example '/images/owner.webp'. null shows initials instead. */
  ownerPhoto: null as string | null,
  /** Why you started Settle in Ireland, in your own words. Shown on the About page. */
  ownerStory: '[WHY I STARTED SETTLE IN IRELAND, IN TWO OR THREE SENTENCES]',
  languages: '[e.g. English and Bengali]',
  location: 'Dublin, Ireland',

  /* ---------- Contact ---------- */
  /** International format with no + sign and no spaces, for example 353871234567. */
  whatsappNumber: '353899741681',
  /** Shown on the site exactly as written here. Used for the "Call" links. */
  phone: '+353 89 974 1681',
  email: 'hello@settleinireland.com',
  responseTime: 'I usually reply within 24 hours.',

  /* ---------- Service details ---------- */
  airportsCovered: 'Dublin Airport. Other Irish airports by arrangement.',
  /** Shown on the Arrival Planning and Airport Pickup page and in the Fees exclusions. */
  pickupTransportNote:
    'Taxi or transport costs for the journey from the airport to the accommodation may be separate. I confirm this with the client before they travel.',
  /** How long WhatsApp support lasts. Reads as part of a sentence: "I support clients ... during the first weeks after arrival." */
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
    milestoneNote: 'This is a service milestone only. I do not sell, reserve or guarantee government appointments.',
    exclusions: 'Government fees, accommodation costs, deposits and third-party charges are separate.',
    paymentMethods: '[e.g. Bank transfer. Receipts are provided for every payment.]',
    /**
     * Cancellation and refund summary. Shown on the Fees page and in the Terms.
     * The text below is a fair starting point. Check it and change it before launch.
     */
    cancellationPolicy:
      '[OWNER TO CONFIRM] The first payment covers pre-arrival planning work, which starts as soon as it is paid. If plans change, for example a visa is refused or travel is postponed, contact me as soon as possible and I will explain what can be refunded or moved to a later date. The second payment is only due once that milestone is reached.',
  },

  /* ---------- Experience ---------- */
  currentMarkets:
    'Already supporting clients referred by partner agencies in Bangladesh, and open to partner agencies from any country.',

  /* ---------- Pre-filled WhatsApp messages ---------- */
  whatsappMessages: {
    general: 'Hi, I found Settle in Ireland online and would like more information.',
    partnerAgency:
      "Hi, I represent an education agency and I'm interested in becoming a partner agency with Settle in Ireland.",
    client: "Hi, I'm moving to Ireland soon and I'd like to know more about your arrival and settling-in support.",
    /** {service} is replaced with the service name on each service page. */
    service: "Hi, I'd like to know more about your {service} support.",
    /** {price} and {package} are filled in from the fee settings above. */
    fees: 'Hi, I have a question about the {price} {package} package.',
  },

  /* ---------- Testimonials ----------
   * Hidden until there are real ones. To show them:
   * 1. Add each quote below, word for word, with the person's written permission.
   * 2. Set showTestimonials to true.
   * Example (do not publish made-up quotes):
   *   testimonials: [
   *     { quote: 'Their exact words.', name: 'First name and initial', context: 'Client, arrived September 2026' },
   *   ],
   */
  showTestimonials: false,
  testimonials: [] as Testimonial[],

  /* ---------- Map ----------
   * Off by default. Only turn on with a real business address, and note that Google Maps
   * embeds set cookies, which would then need a consent banner.
   */
  showMap: false,
  mapEmbedUrl: null as string | null,

  /* ---------- Analytics ----------
   * Off by default, so no tracking and no cookies. Plausible and Umami are cookieless, so
   * turning one of them on does not need a cookie banner. Any analytics that sets cookies does.
   *   provider: 'plausible', siteId: 'settleinireland.com'
   *   provider: 'umami', siteId: 'your-website-id', scriptUrl: 'https://cloud.umami.is/script.js'
   */
  analytics: {
    enabled: false,
    provider: null as null | 'plausible' | 'umami',
    siteId: null as string | null,
    scriptUrl: null as string | null,
  },

  /* ---------- Social profiles ----------
   * Only profiles with a link are shown. Use the full address, for example 'https://www.facebook.com/settleinireland'.
   */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  /* ---------- Legal details (Privacy Policy and Terms) ---------- */
  legal: {
    ownerLegalName: '[OWNER FULL LEGAL NAME]',
    /** An address for formal notices. It is only shown on the Privacy Policy and Terms pages. */
    postalAddress: '[POSTAL ADDRESS FOR FORMAL NOTICES]',
    /** For example a registered business name number from the CRO, if the business name is registered. */
    businessRegistration: '[BUSINESS NAME REGISTRATION NUMBER, IF REGISTERED]',
    lastUpdated: '[DATE THESE POLICIES WERE LAST UPDATED]',
  },
};

export type Site = typeof site;
