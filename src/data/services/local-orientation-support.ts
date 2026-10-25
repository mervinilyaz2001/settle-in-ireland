import { site } from '../../config/site';
import { official } from '../official';
import { packagePrice } from '../../lib/format';
import type { Service } from '../types';

const service: Service = {
  slug: 'local-orientation-support',
  order: 7,
  name: 'Local Orientation and Practical Support',
  navName: 'Local Orientation and Support',
  icon: 'compass',
  summary:
    'I help the client find their way around, get a local SIM, register with a GP and settle into daily life, with ongoing WhatsApp support.',
  overview: `The first weeks in a new country raise lots of small questions. I help the client get to know their area, from shops and transport to doctors and community groups, and I am available on WhatsApp ${site.supportPeriod} for practical questions.`,
  feeLine: `Getting to know the local area, daily life tips and WhatsApp support ${site.supportPeriod}.`,
  costs: `Included in the ${packagePrice} package. Phone plans, GP visits, shopping and other personal costs are your own.`,
  metaTitle: 'Local Orientation for New Arrivals | Settle in Ireland',
  metaDescription:
    'Practical help settling into daily life in Ireland: SIM cards, grocery shops, GPs, emergencies, recycling, tenant rights and ongoing WhatsApp support.',
  intro: `Settling in is about more than paperwork. I help the client find their way around their local area, understand daily life in Ireland and feel at home sooner. I am also available on WhatsApp ${site.supportPeriod} for the practical questions that come up.`,
  covers: [
    'Getting a local SIM card or eSIM and choosing a plan.',
    'Finding affordable grocery shops, markets and pharmacies nearby.',
    'Understanding Irish weather and what to wear through the year.',
    'How to register with a GP (family doctor) and what to do when you feel unwell.',
    'What to do in an emergency: call 112 or 999.',
    'Finding places of worship and cultural or community groups, if the client wishes.',
    'Understanding rubbish, recycling and bin collection.',
    'Basic awareness of tenant rights, with links to official information.',
    'General cultural tips for daily life in Ireland.',
    `Ongoing WhatsApp support ${site.supportPeriod} for practical questions.`,
  ],
  steps: [
    {
      title: 'The essentials nearby',
      text: 'In the first days, I help the client find the shops, pharmacy and transport stops near their accommodation.',
    },
    {
      title: 'Daily life set-up',
      text: 'I help with a SIM card, shopping on a budget, and how bins and recycling work at their address.',
    },
    {
      title: 'Health and safety',
      text: 'I explain how to register with a GP and what to do in an emergency.',
    },
    {
      title: 'Community',
      text: 'If the client wishes, I share information about places of worship and community groups nearby.',
    },
    {
      title: 'Ongoing support',
      text: `I stay available on WhatsApp ${site.supportPeriod} for practical questions.`,
    },
  ],
  prepare: [
    'A phone that is unlocked for an Irish SIM card, or that supports eSIM.',
    'The full address of the accommodation, including the Eircode (the Irish postcode).',
    'A list of what the client would like nearby, such as a pharmacy or a particular food shop.',
    'Any medical information or prescriptions the client may need to discuss with a GP.',
  ],
  goodToKnow: [
    {
      title: 'Emergency numbers',
      text: 'In an emergency, call 112 or 999 for the Gardaí (police), ambulance, fire service or coast guard. These calls are free.',
    },
    {
      title: 'Find a GP early',
      text: 'GPs are family doctors. Find one near you soon after you arrive, before you need one. Some practices are full, so you may need to contact a few. GP visits usually have a fee, so ask when you book.',
    },
    {
      title: 'Dress in layers',
      text: 'Irish weather changes quickly. Layers and a waterproof jacket work well all year.',
    },
    {
      title: 'Bins and recycling',
      text: 'Most homes separate general waste, recycling and food waste. Ask your landlord which bin is collected on which day.',
    },
    {
      title: 'Use your Eircode',
      text: 'Every address in Ireland has an Eircode. Use it for deliveries, maps and official forms.',
    },
    {
      title: 'Tenant rights',
      text: 'If you rent, you have rights and responsibilities. The Residential Tenancies Board and Citizens Information explain them.',
    },
  ],
  notIncluded: [
    'Accompanying you in person. All support is given remotely, by WhatsApp and phone.',
    'Medical, legal or financial advice.',
    'Phone plans, shopping, GP fees and other personal costs.',
    'Emergency support. In an emergency, always call 112 or 999 first.',
    'Support after the agreed support period, unless we arrange it.',
  ],
  resources: [
    {
      label: official.hseFindGp.label,
      url: official.hseFindGp.url,
      note: 'The official HSE service for finding a GP near you.',
    },
    {
      label: official.ciGp.label,
      url: official.ciGp.url,
      note: 'A plain English guide to GP and hospital services in Ireland.',
    },
    {
      label: official.rtb.label,
      url: official.rtb.url,
      note: 'Official information on renting rights and responsibilities.',
    },
    {
      label: official.ciMovingToIreland.label,
      url: official.ciMovingToIreland.url,
      note: 'Official information on settling into life in Ireland.',
    },
  ],
  faqs: [
    {
      q: 'How long does WhatsApp support last?',
      a: `<p>I am available on WhatsApp ${site.supportPeriod} for practical questions. I confirm the exact support period with the client at the start of the service.</p>`,
    },
    {
      q: 'Can you help me find a doctor?',
      a: '<p>Yes. I explain how GPs work in Ireland and help you find practices near you that are taking new patients. I do not give medical advice.</p>',
    },
    {
      q: 'What should I do in an emergency?',
      a: '<p>Call 112 or 999. These calls are free and connect you to the Gardaí (police), ambulance, fire service and coast guard. Once you are safe, you can message me.</p>',
    },
  ],
};

export default service;
