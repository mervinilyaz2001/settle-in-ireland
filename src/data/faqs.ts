import { site } from '../config/site';
import { formatPrice, packagePrice } from '../lib/format';
import { adviceDisclaimerText, governmentDisclaimerText } from './disclaimers';
import { official } from './official';
import type { FAQ } from './types';

export interface FAQItem extends FAQ {
  id: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const paymentList = `<ul>${site.fee.payments
  .map((p) => `<li><strong>${formatPrice(p.amount)}:</strong> ${p.when}</li>`)
  .join('')}</ul>`;

// The answers are simple HTML. Internal links use the page address, for example /fees/.
export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'what-is',
        q: 'What is Settle in Ireland?',
        a: `<p>Settle in Ireland is an independent arrival and settling-in support service. I am a named local contact for international clients moving to Ireland, and I help with the practical steps after they land: airport pickup, accommodation, IRP guidance, the PPS Number, a bank account, transport and getting to know the local area.</p><p>Partner agencies abroad handle college admissions and visa applications. I take over once the client is on their way to Ireland.</p>`,
      },
      {
        id: 'who-for',
        q: 'Who is this service for?',
        a: '<p>It is for international clients arriving in Ireland from any country, mostly for study but not only, and for the partner agencies that refer them. Families back home also find it reassuring to know a real person is there to help.</p>',
      },
      {
        id: 'need-agency',
        q: 'Do I need to be referred by an agency?',
        a: '<p>No. Many clients are referred by a partner agency, but you are welcome to contact me directly. Send me a message on WhatsApp or use the <a href="/contact/">enquiry form</a>.</p>',
      },
      {
        id: 'countries',
        q: 'Which countries do your clients come from?',
        a: `<p>${site.currentMarkets} Clients from any country are welcome to contact me directly too.</p>`,
      },
      {
        id: 'government',
        q: 'Are you connected to the Irish government or my college?',
        a: `<p>No. ${governmentDisclaimerText}</p><p>${adviceDisclaimerText}</p>`,
      },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    items: [
      {
        id: 'visa-admissions',
        q: 'Do you help with visa applications or college admissions?',
        a: '<p>No. College admissions and visa applications are handled by the partner agency in the client\'s home country. I support the client with the practical steps once they are travelling to Ireland and after they arrive.</p>',
      },
      {
        id: 'legal-advice',
        q: 'Do you give legal or immigration advice?',
        a: '<p>No. I provide practical guidance and support only. I do not provide legal, immigration or visa advice. For that, please speak to a solicitor or another qualified adviser.</p>',
      },
      {
        id: 'airports',
        q: 'Which airports do you cover?',
        a: `<p>${site.airportsCovered} Please contact me before booking if the client is landing outside Dublin, so we can plan together. See <a href="/services/arrival-planning-airport-pickup/">Arrival Planning and Airport Pickup</a>.</p>`,
      },
      {
        id: 'accommodation',
        q: 'Can you guarantee accommodation?',
        a: '<p>No. Rental availability in Ireland can be very limited, so nobody can honestly promise a property. I help the client understand the market, check listings, avoid scams and, where possible, view properties locally by arrangement. See <a href="/services/accommodation-assistance/">Accommodation Assistance</a>.</p>',
      },
      {
        id: 'irp-appointment',
        q: 'Can you get me an IRP appointment?',
        a: '<p>No. I never sell, reserve or guarantee appointments. I explain the official process, help the client prepare their documents and explain what to expect. The client requests their own appointment through the official Immigration Service Delivery channels. See <a href="/services/irp-guidance/">IRP Guidance</a>.</p>',
      },
      {
        id: 'pps',
        q: 'Can you help with my PPS Number?',
        a: '<p>Yes. I explain the official process, which is usually online through MyWelfare.ie, help you prepare your documents and explain what to expect. You complete the application yourself, and the Department of Social Protection makes the decision. See <a href="/services/ppsn-assistance/">PPSN Assistance</a>.</p>',
      },
      {
        id: 'bank',
        q: 'Which bank should I choose?',
        a: `<p>I cannot recommend a specific bank or provider, and I am not a financial advisor. I explain what to compare, such as fees, branch access and app features, and which documents banks usually ask for. The <a href="${official.ccpcAccounts.url}" target="_blank" rel="noopener">CCPC</a> publishes neutral information on current accounts.</p>`,
      },
      {
        id: 'support-length',
        q: 'How long does support last after arrival?',
        a: `<p>I am available on WhatsApp ${site.supportPeriod} for practical questions. I confirm the exact support period with the client at the start of the service.</p>`,
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    items: [
      {
        id: 'cost',
        q: 'How much does it cost?',
        a: `<p>The ${site.fee.title} package is <strong>${packagePrice} ${site.fee.perUnit}</strong>. It includes all seven services. See the <a href="/fees/">Fees page</a> for everything that is included.</p>`,
      },
      {
        id: 'when-pay',
        q: 'When do I pay?',
        a: `<p>The fee is paid in two parts:</p>${paymentList}<p>${site.fee.milestoneNote}</p>`,
      },
      {
        id: 'not-included',
        q: `What is not included in the ${packagePrice}?`,
        a: `<p>${site.fee.exclusions} This includes, for example, the official IRP registration fee, rent, accommodation deposits and booking fees, transport fares, bank charges and phone costs. The client pays these directly.</p>`,
      },
      {
        id: 'how-pay',
        q: 'How can I pay?',
        a: `<p>${site.fee.paymentMethods}</p>`,
      },
      {
        id: 'plans-change',
        q: 'What happens if my plans change?',
        a: `<p>${site.fee.cancellationPolicy}</p><p>The full details are in the <a href="/terms/">Terms of Service</a>.</p>`,
      },
    ],
  },
  {
    id: 'partner-agencies',
    title: 'Partner agencies',
    items: [
      {
        id: 'become-partner',
        q: 'How do we become a partner agency?',
        a: '<p>Send me a message on WhatsApp or fill in the form on the <a href="/partner-agencies/">Partner Agencies page</a>. We then have a short introductory call or WhatsApp chat about your clients, your intakes and how referrals and payment will work.</p>',
      },
      {
        id: 'agency-updates',
        q: 'How will you keep our agency updated?',
        a: '<p>We agree the milestones together, for example when the client has arrived and when key steps such as IRP registration are under way. I send updates on WhatsApp or by email, whichever suits your team, with the client\'s consent.</p>',
      },
      {
        id: 'client-data',
        q: 'How do you handle client data?',
        a: '<p>I only use client details to provide the service, and only with the client\'s consent. I keep only what I need, for as long as I need it, in line with GDPR. The <a href="/privacy-policy/">Privacy Policy</a> explains this in full.</p>',
      },
      {
        id: 'outside-bangladesh',
        q: 'Can agencies from outside Bangladesh partner with you?',
        a: '<p>Yes. I already work with partner agencies in Bangladesh and I welcome partner agencies from any country.</p>',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    items: [
      {
        id: 'best-contact',
        q: 'What is the best way to contact you?',
        a: `<p>WhatsApp is the quickest way to reach me. You can also call or email. ${site.responseTime} See the <a href="/contact/">Contact page</a>.</p>`,
      },
      {
        id: 'languages',
        q: 'What languages do you speak?',
        a: `<p>I speak ${site.languages}.</p>`,
      },
    ],
  },
];

export const allFaqs: FAQItem[] = faqCategories.flatMap((c) => c.items);

/** The questions shown on the homepage, in this order. */
export const homeFaqIds = ['what-is', 'visa-admissions', 'irp-appointment', 'cost', 'become-partner'];

export function faqsById(ids: string[]): FAQItem[] {
  return ids.map((id) => {
    const item = allFaqs.find((f) => f.id === id);
    if (!item) throw new Error(`Unknown FAQ id: ${id}`);
    return item;
  });
}
