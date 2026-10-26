import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'leap-card-travel-guidance',
  order: 6,
  name: 'TFI Leap Card and Travel Guidance',
  navName: 'Leap Card and Travel Guidance',
  icon: 'bus',
  summary:
    'We help the client get a TFI Leap Card, understand public transport and plan safe journeys around their new area.',
  overview:
    'The TFI Leap Card is a reusable travel card that usually costs less than paying cash fares. We explain the card types, how to top up and how to plan journeys on buses, the Luas, the DART and trains, so the client can travel with confidence from the first week.',
  feeLine: 'Getting a TFI Leap Card, understanding card types, journey planning and travel safety.',
  costs: `Included in our Moving on Your Own package. The card, top-ups and fares are paid by you directly.`,
  metaTitle: 'TFI Leap Card and Travel Guidance | Settle in Ireland',
  metaDescription:
    'Help getting a TFI Leap Card and using public transport in Dublin and across Ireland: card types, journey planning, safety and everyday travel tips.',
  intro:
    'Public transport is how most new arrivals get around. The TFI Leap Card is a reusable travel card used on public transport in Dublin and other parts of Ireland, and it usually costs less than paying cash fares. We help the client choose the right card, top it up and plan their journeys.',
  covers: [
    'Explaining what the TFI Leap Card is and how it saves money compared to cash fares.',
    'Explaining the card types, including discounted cards for certain groups, such as the official Student Leap Card and the TFI Young Adult Card, and who may be eligible.',
    'Showing the client how to get, register and top up a card.',
    'Explaining the main options: Dublin Bus, the Luas tram, the DART, commuter rail, and intercity buses and trains.',
    'Showing the client how to plan journeys with the official TFI Live app and the Transport for Ireland website.',
    'Planning the client\'s regular routes, for example from their accommodation to their college or workplace.',
    'Basic safety and etiquette on public transport.',
  ],
  steps: [
    {
      title: 'Choose the right card',
      text: 'We explain the card types and help the client check which one they may be eligible for on the official website.',
    },
    {
      title: 'Get the card',
      text: 'The client buys or applies for the card through the official channels.',
    },
    {
      title: 'Register and top up',
      text: 'We explain how to register the card, which can protect the balance if it is lost, and the ways to top it up.',
    },
    {
      title: 'Plan regular journeys',
      text: 'We plan the client\'s main routes together using the TFI Live app.',
    },
    {
      title: 'Travel with confidence',
      text: 'We explain safety, etiquette and what to do if something goes wrong on a journey.',
    },
  ],
  prepare: [
    'A smartphone with the official TFI Live app installed.',
    'A payment card or cash to buy and top up a Leap Card.',
    'The address of the accommodation and of the college or workplace.',
    'For discounted cards, the documents the official website asks for, such as proof of age or enrolment.',
    'A passport-style photo, if the chosen card type needs one.',
  ],
  goodToKnow: [
    {
      title: 'Tap on, and sometimes tap off',
      text: 'On some services you tap your card when you get on and again when you get off. Check the signs at the stop or station.',
    },
    {
      title: 'Fares change',
      text: 'Fares are set by the transport authorities and change from time to time. Check the official Transport for Ireland website for current fares.',
    },
    {
      title: 'Bus etiquette',
      text: 'Raise your hand to stop the bus at a bus stop. Let people off first, and offer priority seats to people who need them.',
    },
    {
      title: 'Plan for late nights',
      text: 'Some services run less often late at night. Check times before you travel and keep your phone charged.',
    },
    {
      title: 'Stay safe',
      text: 'Keep your phone and bag close on busy services. If you feel unsafe, move near the driver or other passengers. In an emergency, call 112 or 999.',
    },
    {
      title: 'Walking and cycling',
      text: 'Many areas are easy to walk. If you cycle, use lights, wear a helmet and lock your bike securely.',
    },
  ],
  notIncluded: [
    'Fares, card costs and top-ups. The client pays these directly.',
    "Applying for discounted cards on the client's behalf.",
    'Driving, car hire or driving licence advice.',
  ],
  resources: [
    {
      label: official.leapCard.label,
      url: official.leapCard.url,
      note: 'The official Leap Card website, with card types, eligibility and top-up options.',
    },
    {
      label: official.tfiFares.label,
      url: official.tfiFares.url,
      note: 'Current official fares for public transport.',
    },
    {
      label: official.tfiLive.label,
      url: official.tfiLive.url,
      note: 'The official app for journey planning and real-time information.',
    },
    {
      label: official.tfi.label,
      url: official.tfi.url,
      note: 'Official information on all public transport in Ireland.',
    },
  ],
  faqs: [
    {
      q: 'What is a TFI Leap Card?',
      a: '<p>It is a reusable travel card for public transport in Dublin and other parts of Ireland. Fares paid with a Leap Card are usually lower than cash fares.</p>',
    },
    {
      q: 'Can I get a discounted card?',
      a: '<p>Discounted cards exist for certain groups, such as the Student Leap Card and the TFI Young Adult Card. The card providers set the eligibility rules, so check the <a href="https://about.leapcard.ie" target="_blank" rel="noopener">official Leap Card website</a>. We can help you understand them.</p>',
    },
    {
      q: 'How do I plan a journey?',
      a: '<p>The official TFI Live app and the Transport for Ireland website show routes and real-time information. We show you how to use them for your regular routes.</p>',
    },
  ],
};

export default service;
