import { site } from '../../config/site';
import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'irp-application-assistance',
  path: '/irp-application-assistance/',
  order: 3,
  name: 'IRP Application Assistance',
  title: 'IRP Registration and Renewal Application Assistance for Students',
  navName: 'IRP Assistance',
  icon: 'id-card',
  waMessage: site.whatsappMessages.irp,
  summary:
    'We help students prepare for their first IRP registration or renew their Irish Residence Permit, step by step. Available on its own or as part of a package.',
  overview:
    'Most non-EEA students staying in Ireland for more than 90 days need to register their immigration permission and get an Irish Residence Permit (IRP), then renew it while they continue to study. We explain the official process, help you check your documents and prepare your application. We do not sell, reserve or guarantee appointments.',
  feeLine: 'First-time IRP registration and IRP renewal: the official process, your documents and what to expect.',
  costs:
    'Available on its own: contact us for a price. Also included in our Moving on Your Own package. The official registration fee is paid by you directly to the official body. Check the current amount on irishimmigration.ie.',
  metaTitle: 'IRP Application Assistance for Students | Settle in Ireland',
  metaDescription:
    'Help with first-time IRP registration and IRP renewal for students in Ireland: your documents, the official online process and what to expect.',
  intro:
    'Non-EEA students who stay in Ireland for more than 90 days generally need to register their immigration permission and receive an Irish Residence Permit (IRP), then renew it while they continue to study. The rules are set by Immigration Service Delivery and published on irishimmigration.ie. We help you understand each step and prepare well, whether it is your first registration or a renewal. You can get this help on its own, or as part of our Moving on Your Own package.',
  governmentDisclaimer: true,
  covers: [
    'First-time registration: what it is, when you need to do it, and how appointments are requested through the official channels.',
    'IRP renewal: when you can apply, how the official online renewal works and what students usually need to show.',
    'Checking your documents against the current official list before you apply.',
    'Helping you prepare documents such as your enrolment letter, proof of fees paid, evidence of finances and medical insurance.',
    'Explaining what usually happens at a registration appointment, so you know what to expect.',
    'Explaining the messages and letters you receive, and how to check processing times on the official website.',
  ],
  callout: {
    tone: 'info',
    title: 'Appointments and applications only go through official channels',
    items: [
      'We do not sell, reserve or guarantee IRP appointments.',
      'You request your own appointment, or submit your own renewal, through the official Immigration Service Delivery channels.',
      'The official registration fee is paid by you directly to the official body. It is not part of our fee.',
      'We provide practical guidance only. We do not give legal or immigration advice. For that, please speak to a solicitor or another qualified adviser.',
    ],
  },
  steps: [
    {
      title: 'Tell us where you are',
      text: 'First registration or renewal? Send us your arrival date or your IRP expiry date, and your course details.',
    },
    {
      title: 'Understand the requirements',
      text: 'We go through the current official guidance with you, including the timing rules that apply to students.',
    },
    {
      title: 'Check your documents',
      text: 'Using the official list, we help you gather and organise everything before you apply.',
    },
    {
      title: 'Apply through the official channels',
      text: 'You request your registration appointment, or submit your renewal online, yourself. We explain each step and what to expect.',
    },
    {
      title: 'After you apply',
      text: 'We help you understand any messages or letters, keep your receipt safe and know what happens next.',
    },
  ],
  prepare: [
    'A valid passport.',
    'Your current IRP card, if you are renewing.',
    'A letter from your college confirming your enrolment and the dates of your course.',
    'Evidence that your course fees have been paid, if the official list asks for it.',
    'Evidence of finances and private medical insurance, if the official list asks for them.',
    'Your exam results and attendance record, if you are renewing and the official list asks for them.',
    'A payment card for the official registration fee.',
  ],
  prepareNote:
    'This is a general list only. The exact documents depend on your situation and change from time to time. Always check the current list on the Immigration Service Delivery website before you apply.',
  goodToKnow: [
    {
      title: 'Register within the official time limit',
      text: 'If you are new to Ireland, the official website explains how soon after arriving you need to register. Read it in your first days here.',
    },
    {
      title: 'Renew before your card expires',
      text: 'The official website explains how early you can apply to renew. Students may need to wait until their new course has started. Always apply before your current IRP expires.',
    },
    {
      title: 'Renewals are made online',
      text: 'If you live in Ireland, renewals are submitted through the official online renewals portal. Check the current processing times on the official website.',
    },
    {
      title: 'Keep your application receipt',
      text: 'When you apply to renew, you receive a receipt with an application number. Keep it safe, as it shows when you applied.',
    },
    {
      title: 'Use only official websites',
      text: 'Request appointments, apply and pay fees only through official government websites. Be careful of anyone offering to sell appointments.',
    },
    {
      title: 'Keep your IRP card safe',
      text: 'Your IRP card shows that you are in Ireland with permission. Put its expiry date in your calendar.',
    },
  ],
  notIncluded: [
    'The official registration fee, which you pay directly.',
    'Booking, reserving or guaranteeing appointments.',
    'Submitting your application for you. You complete and submit your own application.',
    'Legal or immigration advice, or visa applications.',
    'Any decision about your immigration permission. Only the official authorities make these decisions.',
  ],
  resources: [
    {
      label: official.isdFirstTime.label,
      url: official.isdFirstTime.url,
      note: 'The official guide to registering for the first time, including the documents needed.',
    },
    {
      label: official.isdRenewal.label,
      url: official.isdRenewal.url,
      note: 'The official guide to renewing online, with current processing times.',
    },
    {
      label: official.ciRegistration.label,
      url: official.ciRegistration.url,
      note: 'A plain English explanation of registration for non-EEA nationals.',
    },
  ],
  faqs: [
    {
      q: 'Can you help with just my IRP renewal?',
      a: '<p>Yes. IRP registration and renewal assistance is available on its own, without the full package. Contact us for a price.</p>',
    },
    {
      q: 'When can I renew my IRP as a student?',
      a: '<p>The official website explains how early you can apply, and students may need to wait until their new course has started. Always apply before your current IRP expires. Check the current rules on the <a href="https://www.irishimmigration.ie" target="_blank" rel="noopener">Immigration Service Delivery website</a>. We can help you plan the timing.</p>',
    },
    {
      q: 'Can you get me an IRP appointment?',
      a: '<p>No. We do not sell, reserve or guarantee appointments. We explain how appointments are requested through the official channels and help you prepare. You request the appointment yourself.</p>',
    },
    {
      q: 'Do you submit the application for me?',
      a: '<p>No. You submit your own application through the official channels. We help you prepare your documents and explain each step.</p>',
    },
    {
      q: 'How much is the IRP registration fee?',
      a: '<p>The official fee is set by the government and can change, so please check the current amount on the <a href="https://www.irishimmigration.ie" target="_blank" rel="noopener">Immigration Service Delivery website</a>. You pay it directly to the official body. It is not part of our fee.</p>',
    },
    {
      q: 'Do you give immigration advice?',
      a: '<p>No. We provide practical guidance and support only. For legal or immigration advice, please speak to a solicitor or another qualified adviser.</p>',
    },
  ],
};

export default service;
