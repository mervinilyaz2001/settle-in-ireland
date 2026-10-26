import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'arrival-planning',
  order: 1,
  name: 'Arrival Planning',
  navName: 'Arrival Planning',
  icon: 'plane-landing',
  summary:
    'We help you plan your arrival before you leave home: what to carry, how to get from the airport to your accommodation, and what to sort out first.',
  overview:
    'Before you travel, we go through your plans with you on WhatsApp and share a simple arrival checklist. We explain how to get from the airport to your accommodation, how to get your phone working, and which steps to start in your first days.',
  feeLine: 'A pre-arrival check-in, an arrival checklist, travel directions from the airport and WhatsApp support as you arrive.',
  costs: `Included in our Moving on Your Own package. Flights, taxis and public transport fares are paid by you directly.`,
  metaTitle: 'Arrival Planning for Moving to Ireland | Settle in Ireland',
  metaDescription:
    'Plan your arrival in Ireland with a local contact: an arrival checklist, how to get from the airport to your accommodation, and WhatsApp support.',
  intro:
    'Arriving in a new country after a long journey can feel overwhelming. We help you plan each step before you leave home, so you know what to carry, how to reach your accommodation and what to sort out first. All support is by WhatsApp and phone, and your family will know someone in Ireland is helping you.',
  covers: [
    'A WhatsApp check-in before departure, so you know who we are and can ask questions.',
    'Going through your flight details and arrival time with you.',
    'A simple arrival checklist: what to carry in hand luggage and which documents to keep close for immigration control at the airport.',
    'Explaining how to get from the airport to your accommodation, by bus, train or taxi.',
    'Advice on a local SIM card or eSIM, so you can call and use data from day one.',
    'A plan for your first days: which practical steps to start first.',
    'Letting your agency or family know you have arrived safely, once you tell us, if you agree.',
  ],
  steps: [
    {
      title: 'First contact',
      text: 'You or your agency message us on WhatsApp. We introduce ourselves and explain how the support works.',
    },
    {
      title: 'Your travel plans',
      text: 'Once your flight is booked, you share the date, arrival time and airport, and your accommodation address.',
    },
    {
      title: 'Arrival checklist',
      text: 'We send a short checklist to help you prepare your hand luggage, documents, money and phone.',
    },
    {
      title: 'Getting to your accommodation',
      text: 'We explain your options for the journey from the airport, with links to the official journey planner, so you have a clear plan before you land.',
    },
    {
      title: 'Arrival day',
      text: 'Message us on WhatsApp when you land if you have questions on the way. We do not provide airport pickups.',
    },
    {
      title: 'Your first days',
      text: 'We start on the practical steps, such as your phone, accommodation questions and IRP registration.',
    },
  ],
  prepare: [
    'Passport and the travel and immigration documents you need, kept in hand luggage. The official website, or your agency if you have one, lists them.',
    'The letter from your college or course provider, and any other letters you have been told to carry.',
    'The address of the accommodation for the first nights, with proof of the booking.',
    'Your flight details, shared with us in advance.',
    'Some euro in cash and a bank card that works abroad.',
    'A phone that is unlocked for an Irish SIM card, or that supports eSIM.',
    'A warm, waterproof layer in the hand luggage, whatever the season.',
    'Any medicines needed in the first days, with a copy of the prescription.',
  ],
  prepareNote:
    'This is general guidance. The official Immigration Service Delivery website, and your agency if you have one, say exactly which documents to carry for immigration control at the airport.',
  goodToKnow: [
    {
      title: 'Keep documents in your hand luggage',
      text: 'Checked bags can be delayed. Keep your passport, letters and medicines with you on the plane.',
    },
    {
      title: 'Immigration control',
      text: 'When you land, an immigration officer checks your passport and documents. Have them ready, and answer questions calmly and honestly.',
    },
    {
      title: 'Plan the journey from the airport',
      text: 'Check the route to your accommodation before you fly, and keep the address saved on your phone. Late arrivals may have fewer buses.',
    },
    {
      title: 'Bring a plug adapter',
      text: 'Ireland uses the three-pin Type G plug. Pack an adapter in your hand luggage so you can charge your phone on day one.',
    },
    {
      title: 'The weather changes quickly',
      text: 'Ireland is mild but often wet and windy. A waterproof jacket is more useful than a heavy coat for most of the year.',
    },
    {
      title: 'Tell your family when you land',
      text: 'Getting through the airport can take a while. Send your family a short message once you are through immigration and have your bags.',
    },
  ],
  notIncluded: [
    'Airport pickup. Support is one-to-one, mainly by WhatsApp and phone, and we meet in person only if it is needed.',
    'Flights, travel insurance and baggage costs.',
    'Taxi or public transport fares from the airport.',
    'Going through immigration control with you, or immigration advice.',
  ],
  resources: [
    {
      label: official.tfi.label,
      url: official.tfi.url,
      note: 'Official journey planning for buses and trains, including from the airport.',
    },
    {
      label: official.isd.label,
      url: official.isd.url,
      note: 'Official information on coming to Ireland and registering your immigration permission.',
    },
    {
      label: official.ciMovingToIreland.label,
      url: official.ciMovingToIreland.url,
      note: 'A plain English official guide to moving to Ireland.',
    },
  ],
  faqs: [
    {
      q: 'Do you pick me up from the airport?',
      a: '<p>No. We do not provide airport pickups. We help you plan the journey from the airport to your accommodation before you fly, and you can message us on WhatsApp if you have questions on the way.</p>',
    },
    {
      q: 'How do I get from the airport to my accommodation?',
      a: '<p>It depends on the airport, the time you land and where you are staying. Usually there are buses, and taxis are available. We go through the options with you before you travel, using the official <a href="https://www.transportforireland.ie" target="_blank" rel="noopener">Transport for Ireland</a> journey planner.</p>',
    },
    {
      q: 'What happens if my flight is delayed?',
      a: '<p>Let us know on WhatsApp. If you will arrive much later, for example late at night, your plan for getting to your accommodation may need to change, and we can help you think it through.</p>',
    },
    {
      q: 'Can my family or agency know when I have arrived?',
      a: '<p>Yes. Once you tell us you have arrived, and if you agree, we let your family or agency know.</p>',
    },
  ],
};

export default service;
