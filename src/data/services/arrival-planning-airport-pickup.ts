import { site } from '../../config/site';
import { official } from '../official';
import { packagePrice } from '../../lib/format';
import type { Service } from '../types';

const service: Service = {
  slug: 'arrival-planning-airport-pickup',
  order: 1,
  name: 'Arrival Planning and Airport Pickup',
  navName: 'Arrival Planning and Airport Pickup',
  icon: 'plane-landing',
  summary:
    'I plan the arrival with the client before they travel, then meet them at the airport and help them reach their accommodation.',
  overview:
    'Before the client travels, I check their flight details and share a simple arrival checklist on WhatsApp. On the day, I meet them at the airport, help them get to their accommodation and make sure they can call and message from day one.',
  feeLine: 'Pre-arrival check-in, an arrival checklist, a meeting at the airport and help getting to the accommodation.',
  costs: `Included in the ${packagePrice} package. ${site.pickupTransportNote}`,
  metaTitle: 'Airport Pickup in Dublin for International Clients',
  metaDescription:
    'Arrival planning and airport pickup for international clients moving to Ireland. A named local contact meets you at the airport and helps you settle in.',
  intro:
    'Arriving in a new country after a long journey can feel overwhelming. I plan the arrival with the client before they leave home, meet them at the airport and help them reach their accommodation safely. Your family will know someone is there to meet you.',
  covers: [
    'A WhatsApp check-in before departure, so the client knows who I am and can ask questions.',
    "Reviewing the client's flight details, arrival time and terminal.",
    'A simple arrival checklist: what to carry in hand luggage and which documents to keep close for immigration control at the airport.',
    'Advice on a local SIM card or eSIM, so the client can call and use data from day one.',
    `Meeting the client at the airport. ${site.airportsCovered}`,
    'Helping the client get from the airport to their accommodation.',
    'Letting the partner agency or family know the client has arrived safely, if the client agrees.',
  ],
  steps: [
    {
      title: 'First contact',
      text: 'The client or their partner agency messages me on WhatsApp. I introduce myself and explain how arrival day works.',
    },
    {
      title: 'Flight details',
      text: 'Once the flight is booked, the client shares the flight number, date and arrival time. I check the terminal and plan where we will meet.',
    },
    {
      title: 'Arrival checklist',
      text: 'I send a short checklist to help the client prepare their hand luggage, documents, money and phone.',
    },
    {
      title: 'Final check',
      text: 'A day or two before departure, we confirm the plan, the meeting point and how to reach me if the flight changes.',
    },
    {
      title: 'Meeting at the airport',
      text: 'After the client passes immigration control and collects their bags, I meet them at the agreed point in the arrivals hall.',
    },
    {
      title: 'Getting to the accommodation',
      text: 'I help the client travel to their accommodation and check they can get in, get online and reach me on WhatsApp.',
    },
  ],
  prepare: [
    'Passport and the travel and immigration documents you need, kept in hand luggage. The official website, or your agency if you have one, lists them.',
    'The letter from your college or course provider, and any other letters you have been told to carry.',
    'The address of the accommodation for the first nights, with proof of the booking.',
    'Flight details, shared with me in advance.',
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
    {
      title: 'If your flight changes',
      text: 'Message me as soon as you know about a delay or a missed connection. I check arrival times on the day, but a quick message always helps.',
    },
  ],
  notIncluded: [
    'Flights, travel insurance and baggage costs.',
    site.pickupTransportNote,
    `Meeting the client at an airport other than those listed here, unless arranged in advance: ${site.airportsCovered}`,
    'Going through immigration control with the client. Only the client can do this, and I do not give immigration advice.',
  ],
  resources: [
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
    {
      label: official.tfi.label,
      url: official.tfi.url,
      note: 'Official journey planning for buses and trains, including from the airport.',
    },
  ],
  faqs: [
    {
      q: 'Which airports do you cover?',
      a: `<p>${site.airportsCovered} Most clients arrive at Dublin Airport. If the client is landing at Shannon, Cork, Knock or another airport, please contact me before booking so we can plan together.</p>`,
    },
    {
      q: 'What happens if my flight is delayed?',
      a: '<p>Message me on WhatsApp as soon as you know. I check arrival times on the day and change the plan if needed. If you cannot message during the journey, I will still check your flight.</p>',
    },
    {
      q: 'Where will you meet me?',
      a: '<p>Before you travel, I agree a clear meeting point in the arrivals hall and describe it to you. You can always message me on WhatsApp when you land.</p>',
    },
    {
      q: 'Can my family or partner agency know when I have arrived?',
      a: '<p>Yes. If you agree, I let your family or your partner agency know that you have arrived safely.</p>',
    },
  ],
};

export default service;
