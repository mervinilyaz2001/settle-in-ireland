import { site } from '../config/site';
import { adviceDisclaimerText, governmentDisclaimerText } from './disclaimers';
import { official } from './official';
import { servicePath, services } from './services';
import type { FAQ } from './types';

export interface FAQItem extends FAQ {
  id: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

// The amounts are only shown on the Moving on Your Own and Education Agencies pages.
const paymentList = `<ul>${site.fee.payments
  .map((p, i) => `<li><strong>${i === 0 ? 'First payment' : 'Second payment'}:</strong> ${p.when}</li>`)
  .join('')}</ul>`;

const serviceList = `<ul>${services.map((s) => `<li><a href="${servicePath(s)}">${s.name}</a></li>`).join('')}</ul>`;

// Answers are simple HTML. Internal links use the page address, for example /contact/.
// Anything in [SQUARE BRACKETS] still needs the owner's confirmation and is highlighted on the site.
export const faqCategories: FAQCategory[] = [
  {
    id: 'service',
    title: 'The service',
    items: [
      {
        id: 'included',
        q: 'What is included in the Moving on Your Own package?',
        a: `<p>The ${site.fee.title} package includes all seven services:</p>${serviceList}<p>${site.fee.exclusions} The price and payment details are on the <a href="/moving-to-ireland-on-your-own/#package">Moving on Your Own</a> page.</p>`,
      },
      {
        id: 'single-service',
        q: 'Can I get help with just my IRP or PPS Number?',
        a: '<p>Yes. <a href="/irp-application-assistance/">IRP registration and renewal assistance</a> and <a href="/ppsn-application-assistance/">PPSN application assistance</a> are both available on their own, without the full package. Contact us for a price.</p>',
      },
      {
        id: 'eligible',
        q: 'Who is eligible?',
        a: '<p>Anyone moving to Ireland who wants practical help with arriving and settling in, whether you are arranging your move yourself or an education agency is helping you. Some steps, such as registering for an Irish Residence Permit (IRP), only apply to people from outside the European Economic Area (EEA).</p><p>[OWNER TO CONFIRM: any limits on who you can support, for example minimum age]</p>',
      },
      {
        id: 'areas',
        q: 'Which areas in Ireland are covered?',
        a: `<p>${site.supportMode} So the support works wherever you are moving to in Ireland.</p>`,
      },
      {
        id: 'pickup',
        q: 'Do you pick me up from the airport?',
        a: '<p>No. We do not provide airport pickups. We help you plan the journey from the airport to your accommodation before you fly, and we stay in touch on WhatsApp as you travel. After that, support is one-to-one, mainly by WhatsApp and phone, and we meet in person only if it is needed.</p>',
      },
      {
        id: 'where',
        q: 'Where do you provide support?',
        a: `<p>Before you travel and after you arrive, we support you by WhatsApp and phone, wherever you are in Ireland, and we meet in person only if it is needed. Our team is based in ${site.location}.</p>`,
      },
      {
        id: 'accommodation',
        q: 'Can you help me find accommodation?',
        a: '<p>Yes, we help you search safely: understanding the rental market, checking listings and landlords, spotting scams and preparing for live video viewings. We cannot guarantee that accommodation will be found, as availability in Ireland, especially Dublin, can be very limited. You always pay rent and deposits directly to the landlord or provider. See <a href="/services/accommodation-assistance/">Accommodation Assistance</a>.</p>',
      },
      {
        id: 'guarantee',
        q: 'Do you guarantee an IRP appointment or PPSN outcome?',
        a: `<p>No. We never sell, reserve or guarantee appointments, and official decisions always remain with the relevant authorities: Immigration Service Delivery for IRP registration and the Department of Social Protection for PPS Numbers. We explain the official process and help you prepare. See the <a href="${official.isd.url}" target="_blank" rel="noopener">Immigration Service Delivery website</a> and <a href="${official.govPps.url}" target="_blank" rel="noopener">gov.ie</a> for the current rules.</p>`,
      },
      {
        id: 'advice',
        q: 'Do you give legal or immigration advice?',
        a: `<p>No. ${adviceDisclaimerText} For legal or immigration advice, please speak to a solicitor or another qualified adviser.</p>`,
      },
      {
        id: 'government',
        q: 'Are you connected to the Irish government or a college?',
        a: `<p>No. ${governmentDisclaimerText}</p>`,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing and payment',
    items: [
      {
        id: 'official-fees',
        q: 'Are official application fees included?',
        a: `<p>No. Official fees, such as the IRP registration fee, are paid by you directly to the official body. They change from time to time, so please check the current amount on the <a href="${official.isd.url}" target="_blank" rel="noopener">official website</a>. Rent, deposits, transport fares and other third-party costs are also separate.</p>`,
      },
      {
        id: 'payment',
        q: 'How does payment work?',
        a: `<p>The Moving on Your Own package is paid in two parts:</p>${paymentList}<p>${site.fee.milestoneNote}</p>`,
      },
      {
        id: 'plans-change',
        q: 'What happens if my plans change?',
        a: `<p>${site.fee.cancellationPolicy}</p><p>The full details are in the <a href="/terms/">Terms of Service</a>.</p>`,
      },
    ],
  },
  {
    id: 'move',
    title: 'Your move',
    items: [
      {
        id: 'documents',
        q: 'What documents should I prepare?',
        a: '<p>It depends on your situation, and the official websites have the current lists. Most people need a valid passport, a letter from their college or course provider, proof of their accommodation address, and anything the immigration authorities ask for. Each service page has a "What you need to provide" section, for example <a href="/services/arrival-planning/">Arrival Planning</a> and <a href="/irp-application-assistance/">IRP Application Assistance</a>.</p><p>Please do not send copies of documents through the website form.</p>',
      },
      {
        id: 'contact-first',
        q: 'Can I contact you before booking?',
        a: '<p>Yes. Send us your questions on WhatsApp or through the <a href="/contact/">enquiry form</a>. You pay nothing until you decide to start the service.</p>',
      },
      {
        id: 'personal-info',
        q: 'What personal information do you need?',
        a: '<p>To reply to an enquiry, only your name and an email address or WhatsApp number. If you go ahead, we also need your arrival details, your accommodation address once you have one, and which services you need. We only ask to see documents when that is needed to help you prepare, and never through the website form. The <a href="/privacy-policy/">Privacy Policy</a> explains how this information is handled.</p>',
      },
    ],
  },
  {
    id: 'agencies',
    title: 'Education agencies',
    items: [
      {
        id: 'agencies',
        q: 'Do you work with education agencies?',
        a: `<p>Yes. Agencies can refer students who are moving to Ireland, so they have a local point of contact after they arrive. ${site.currentMarkets} See <a href="/agency-partnerships/">Education Agencies</a>.</p>`,
      },
      {
        id: 'agency-updates',
        q: 'How do you keep an agency updated?',
        a: `<p>We agree the milestones and the way of reporting during the introductory discussion, and we only share updates with the student's consent.</p>`,
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
        a: `<p>WhatsApp is the quickest way to reach us. You can also call or use the <a href="/contact/">enquiry form</a>.${site.responseTime ? ` ${site.responseTime}` : ''}</p>`,
      },
    ],
  },
];

export const allFaqs: FAQItem[] = faqCategories.flatMap((c) => c.items);

/** The questions shown on the homepage, in this order. */
export const homeFaqIds = ['single-service', 'eligible', 'accommodation', 'guarantee', 'plans-change', 'contact-first'];

export function faqsById(ids: string[]): FAQItem[] {
  return ids.map((id) => {
    const item = allFaqs.find((f) => f.id === id);
    if (!item) throw new Error(`Unknown FAQ id: ${id}`);
    return item;
  });
}
