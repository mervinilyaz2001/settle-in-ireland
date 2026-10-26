import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'accommodation-assistance',
  order: 2,
  name: 'Accommodation Assistance Before Arrival',
  navName: 'Accommodation Assistance',
  icon: 'house',
  summary:
    'We help the client understand the Irish rental market, check listings and avoid rental scams before they arrive.',
  overview:
    'Finding somewhere to live is one of the hardest parts of moving to Ireland. We explain the typical options and help the client check listings, landlords and agreements and spot scams, all remotely. The client pays rent and deposits directly.',
  feeLine: 'Guidance on the rental market, help checking listings and landlords, and scam warnings.',
  costs: `Included in our Moving on Your Own package. Rent, deposits, booking fees and bills are paid by you directly to the landlord or provider.`,
  metaTitle: 'Accommodation Help Before Arriving in Ireland',
  metaDescription:
    'Help understanding the Irish rental market, checking listings and avoiding rental scams before you arrive in Ireland. Practical support from a local contact.',
  intro:
    'Rental availability in Ireland, especially in Dublin, can be very limited, and rental scams are common. We help the client understand their options, search safely and make a careful decision before they arrive. The earlier the search starts, the better.',
  covers: [
    'Explaining the main types of accommodation and what they usually include.',
    'Helping the client set a realistic budget and choose areas with good transport to their college or workplace.',
    'Showing the client what to look for in a listing and which questions to ask.',
    'Helping the client check whether a listing and a landlord look genuine.',
    'Helping the client prepare questions for a live video viewing with the landlord.',
    'Explaining deposits, written agreements and basic tenant rights in plain English, with links to official information.',
    'Helping the client plan a short-term stay for the first weeks if long-term housing is not ready yet.',
  ],
  callout: {
    tone: 'warning',
    title: 'Protect yourself from rental scams',
    intro: 'Rental scams often target people who are searching from abroad. Please follow these rules every time.',
    items: [
      'Never pay a deposit or rent for a property that no one has viewed or verified.',
      'Be very careful with anyone who refuses a viewing or a live video call of the property.',
      'Do not pay by untraceable methods, such as cash sent through a money transfer shop, gift cards or cryptocurrency.',
      'Check that the landlord or letting agent is real before you send money or documents.',
      'Be careful if the rent is much lower than similar places nearby, or if someone pushes you to pay quickly.',
      'Do not send copies of your passport or other identity documents until you are confident the landlord is genuine.',
      'If something feels wrong, stop and message us before you pay anything.',
    ],
  },
  steps: [
    {
      title: 'Tell us what you need',
      text: 'The client shares their budget, preferred area, move-in date and the type of place they want.',
    },
    {
      title: 'Understand the options',
      text: 'We explain the typical options and what is realistic for that budget and area.',
    },
    {
      title: 'Search together',
      text: 'The client searches on rental websites and sends us the listings they like. We help them check each one.',
    },
    {
      title: 'Check before paying',
      text: 'We help the client check the listing, the landlord and the agreement, and prepare questions for a live video viewing.',
    },
    {
      title: 'Decide and book',
      text: 'The client makes the final decision and pays the landlord or provider directly.',
    },
    {
      title: 'Plan the first weeks',
      text: 'If long-term housing is not ready by arrival day, we help the client plan a short-term stay.',
    },
  ],
  prepare: [
    'A clear monthly budget, including bills.',
    'The address of the college or workplace, so we can look at travel times.',
    'The move-in date and how long the client plans to stay.',
    'Money for a deposit and the first month of rent, which landlords often ask for before or at move-in.',
    'Documents landlords often ask for, such as a passport and a letter from the college or employer. Only share copies once a landlord has been checked.',
    'A reference from a previous landlord, if the client has one.',
  ],
  goodToKnow: [
    {
      title: 'Start early',
      text: 'Demand for rooms in Dublin and other cities is high. Start searching as soon as your plans are confirmed.',
    },
    {
      title: 'Know the typical options',
      text: 'Common options are purpose-built accommodation with private rooms and shared kitchens, rooms in shared houses, digs or homestays with a host family, and short-term stays for the first weeks.',
    },
    {
      title: 'Check what the rent includes',
      text: 'Ask whether electricity, heating, internet and bin collection are included. In shared houses, bills are often split between tenants.',
    },
    {
      title: 'Location matters',
      text: 'A cheaper room far from a bus, Luas or train line can cost more in time and fares every day.',
    },
    {
      title: 'Get it in writing',
      text: 'Ask for a written agreement and a receipt for every payment you make.',
    },
    {
      title: 'Know your rights',
      text: 'Tenants in Ireland have rights and responsibilities. The Residential Tenancies Board and Citizens Information explain them.',
    },
  ],
  notIncluded: [
    'Rent, deposits, booking fees and bills. The client pays these directly to the landlord or provider.',
    'A guarantee that accommodation will be found. We help the client search safely, but we cannot promise a property.',
    "Signing agreements or paying money on the client's behalf.",
    'Legal advice on tenancy disputes. The Residential Tenancies Board and Citizens Information are the right places to start.',
  ],
  resources: [
    {
      label: official.rtb.label,
      url: official.rtb.url,
      note: 'Official information on renting rights, deposits and tenancies.',
    },
    {
      label: official.ciRenting.label,
      url: official.ciRenting.url,
      note: 'A plain English guide to renting a home in Ireland.',
    },
  ],
  faqs: [
    {
      q: 'Can you guarantee accommodation?',
      a: '<p>No. Rental availability in Ireland can be very limited, so nobody can honestly promise a property. We help the client start early, check listings and avoid scams, so they can make a safe decision.</p>',
    },
    {
      q: 'Can you view a property for me?',
      a: '<p>No. We do not view properties in person. We help you check listings and landlords remotely, and prepare questions for a live video viewing with the landlord, which is one of the best ways to spot a scam.</p>',
    },
    {
      q: 'Do I pay the deposit to you?',
      a: '<p>No. The client always pays rent, deposits and booking fees directly to the landlord or accommodation provider. We never handle these payments.</p>',
    },
    {
      q: 'Where should I stay for the first weeks?',
      a: '<p>If long-term housing is not ready when you arrive, a short-term stay such as a hostel, guesthouse or short let gives you time to view rooms in person. We help you plan this.</p>',
    },
  ],
};

export default service;
