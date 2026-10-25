import { official } from '../official';
import { packagePrice } from '../../lib/format';
import type { Service } from '../types';

const service: Service = {
  slug: 'irp-guidance',
  order: 3,
  name: 'Irish Residence Permit (IRP) Guidance',
  navName: 'IRP Guidance',
  icon: 'id-card',
  summary:
    'I help the client understand the official process for registering their immigration permission and getting an Irish Residence Permit.',
  overview:
    'Most non-EEA nationals staying in Ireland for more than 90 days need to register their immigration permission and receive an Irish Residence Permit. I explain the official process, help the client organise their documents and explain what to expect on the day. I do not sell, reserve or guarantee appointments.',
  feeLine: 'Explaining the official registration process, organising documents and knowing what to expect at your appointment.',
  costs: `Included in the ${packagePrice} package. The official registration fee is paid by you directly to the official body. Check the current amount on irishimmigration.ie.`,
  metaTitle: 'IRP Registration Guidance | Settle in Ireland',
  metaDescription:
    'Practical guidance on registering your immigration permission and getting an Irish Residence Permit (IRP). Independent support, not a government service.',
  intro:
    'Non-EEA nationals who plan to stay in Ireland for more than 90 days generally need to register their immigration permission and receive an Irish Residence Permit (IRP). The process and requirements are set by Immigration Service Delivery and published on irishimmigration.ie. I help the client understand the steps and prepare well, so the process feels less stressful.',
  governmentDisclaimer: true,
  covers: [
    'Explaining in plain English what registration is and why it matters.',
    'Helping the client find the current official requirements on the Immigration Service Delivery website.',
    'Helping the client organise and check their documents against the official list.',
    'Explaining how registration appointments are requested through the official channels, so the client can request one themselves.',
    'Explaining what usually happens at the registration appointment, so the client knows what to expect.',
    'Reminding the client to keep their IRP card safe and to note when their permission needs to be renewed.',
  ],
  callout: {
    tone: 'info',
    title: 'Appointments only come through official channels',
    items: [
      'I do not sell, reserve or guarantee IRP appointments.',
      'The client requests their own appointment through the official Immigration Service Delivery channels.',
      'The official registration fee is paid by the client directly to the official body. It is not part of my fee.',
      'I provide practical guidance only. I do not give legal or immigration advice. For that, please speak to a solicitor or another qualified adviser.',
    ],
  },
  steps: [
    {
      title: 'Understand the requirement',
      text: 'I explain what registration is and make sure the client has read the current official guidance.',
    },
    {
      title: 'Check the documents',
      text: 'Using the official document list, I help the client gather and organise everything they need.',
    },
    {
      title: 'Request an appointment',
      text: 'I explain how appointments are requested through the official channels. The client makes the request themselves.',
    },
    {
      title: 'Prepare for the day',
      text: 'I explain what usually happens at the appointment, what to bring and how to get there.',
    },
    {
      title: 'After registration',
      text: 'I explain how the IRP card is sent out, why it matters and why the client should keep it safe.',
    },
  ],
  prepare: [
    'A valid passport.',
    "Evidence of the reason for being in Ireland, such as a letter from the client's college confirming enrolment.",
    'Evidence of finances, if the official list asks for it.',
    'Evidence of medical insurance, if the official list asks for it.',
    'A payment card for the official registration fee.',
    'Copies of all documents, kept together in one folder with the originals.',
  ],
  prepareNote:
    "This is a general list only. The exact documents depend on the client's situation and change from time to time. Always check the current list on the Immigration Service Delivery website before the appointment.",
  goodToKnow: [
    {
      title: 'Use only official websites',
      text: 'Request appointments and pay fees only through official government websites. Be careful of anyone offering to sell appointments.',
    },
    {
      title: 'Read the official guidance early',
      text: 'The official website explains the time limit for registering and what to do if you cannot get an appointment in that time. Read it soon after you arrive.',
    },
    {
      title: 'Check where to register',
      text: 'Where you register can depend on where you live in Ireland. The official website explains this.',
    },
    {
      title: 'Keep everything together',
      text: 'Bring originals and copies of your documents in one folder. It saves time and stress at your appointment.',
    },
    {
      title: 'Arrive early',
      text: 'Plan your journey, arrive early and bring everything on the official list.',
    },
    {
      title: 'Keep your IRP card safe',
      text: 'Your IRP card shows that you are in Ireland with permission. Note its expiry date, because permissions need to be renewed.',
    },
  ],
  notIncluded: [
    'The official registration fee, which the client pays directly.',
    'Booking, reserving or guaranteeing appointments.',
    'Legal or immigration advice, or visa applications. The partner agency, or the client if they are arranging their own move, handles any visa application.',
    "Any decision about the client's immigration permission. Only the official authorities make these decisions.",
  ],
  resources: [
    {
      label: official.isdFirstTime.label,
      url: official.isdFirstTime.url,
      note: 'The official guide to registering for the first time, including the documents needed.',
    },
    {
      label: official.isdRegistering.label,
      url: official.isdRegistering.url,
      note: 'Official information on registration, renewals and changes.',
    },
    {
      label: official.ciRegistration.label,
      url: official.ciRegistration.url,
      note: 'A plain English explanation of registration for non-EEA nationals.',
    },
  ],
  faqs: [
    {
      q: 'Can you get me an IRP appointment?',
      a: '<p>No. I do not sell, reserve or guarantee appointments. I explain how appointments are requested through the official channels and help you prepare. You request the appointment yourself.</p>',
    },
    {
      q: 'How much is the IRP registration fee?',
      a: '<p>The official fee is set by the government and can change, so please check the current amount on the <a href="https://www.irishimmigration.ie" target="_blank" rel="noopener">Immigration Service Delivery website</a>. You pay it directly to the official body. It is not part of my fee.</p>',
    },
    {
      q: 'How long will I wait for an appointment?',
      a: '<p>Waiting times vary and are outside my control. The Immigration Service Delivery website has the latest information.</p>',
    },
    {
      q: 'Do you give immigration advice?',
      a: '<p>No. I provide practical guidance and support only. For legal or immigration advice, please speak to a solicitor or another qualified adviser.</p>',
    },
  ],
};

export default service;
