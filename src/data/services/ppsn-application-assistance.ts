import { site } from '../../config/site';
import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'ppsn-application-assistance',
  path: '/ppsn-application-assistance/',
  order: 4,
  name: 'PPSN Application Assistance',
  navName: 'PPSN Assistance',
  icon: 'file-check',
  waMessage: site.whatsappMessages.ppsn,
  summary:
    'We help you apply for your Personal Public Service Number (PPS Number), from the documents to proof of address. Available on its own or as part of a package.',
  overview:
    'A PPS Number is a personal reference number used for social welfare, public services and information in Ireland, and is needed for things like working and tax. We explain the official application process, help you prepare your documents and support you through each step.',
  feeLine: 'Explaining the official PPS Number process, preparing documents and support through each step.',
  costs:
    'Available on its own: contact us for a price. Also included in our Moving on Your Own package. Any official costs are set by the Department of Social Protection and paid by you directly.',
  metaTitle: 'PPSN Application Assistance | Settle in Ireland',
  metaDescription:
    'Help applying for a PPS Number in Ireland: who needs one, the documents and proof of address, and the MyWelfare application. For students and new arrivals.',
  intro:
    'A Personal Public Service Number (PPS Number or PPSN) is a personal reference number used for access to social welfare benefits, public services and information in Ireland. Many international students need one, for example to work part-time and pay the right tax. It is applied for through the Department of Social Protection, usually through MyWelfare.ie. We help you understand the process, prepare your documents and know what to expect if you are asked to attend in person. You can get this help on its own, or as part of our Moving on Your Own package.',
  governmentDisclaimer: true,
  covers: [
    'Explaining what a PPS Number is used for and when you may need one.',
    'Explaining how the official application usually works, which is typically online through MyWelfare.ie.',
    'Helping you gather evidence of identity, evidence of address and evidence of why you need the number.',
    'Helping with proof of address, which many new arrivals find difficult.',
    'Explaining what to expect if you are asked to attend an appointment in person.',
    'Helping you understand letters or messages about your application.',
  ],
  steps: [
    {
      title: 'Check the need',
      text: 'We explain what a PPS Number is used for and when you should apply, for example when you start a part-time job.',
    },
    {
      title: 'Prepare documents',
      text: 'Using the current official list, we help you gather evidence of identity, address and the reason you need the number.',
    },
    {
      title: 'Apply through official channels',
      text: 'We explain how to apply, usually online through MyWelfare.ie. You complete the application yourself.',
    },
    {
      title: 'If you are asked to attend',
      text: 'If you are asked to attend in person, we explain what to bring and what to expect.',
    },
    {
      title: 'After applying',
      text: 'We help you understand any letters you receive and what to do next.',
    },
  ],
  prepare: [
    'A valid passport, as evidence of identity.',
    'Evidence of address in Ireland, such as a tenancy agreement, a utility bill or an official letter showing your name and address.',
    'Evidence of why you need a PPS Number, such as a job offer or a letter from an employer.',
    'Your IRP card, if you already have one.',
    'A MyGovID account, which the official website currently asks for to apply online.',
  ],
  prepareNote:
    'This is a general list only. Official requirements can change, so always check gov.ie and MyWelfare.ie before applying.',
  goodToKnow: [
    {
      title: 'Plan your proof of address early',
      text: 'Many new arrivals find proof of address the hardest part. A tenancy agreement or an official letter sent to your address may help. Check the official list.',
    },
    {
      title: 'Apply when you have a reason',
      text: 'You generally need a reason for a PPS Number, such as starting work. The official website lists examples.',
    },
    {
      title: 'Keep your number private',
      text: 'Your PPS Number is personal. Only share it with employers, Revenue, banks and official bodies that need it.',
    },
    {
      title: 'Use only official websites',
      text: 'MyWelfare.ie and gov.ie are the official sources. Be careful of anyone who asks you to pay them to get a PPS Number.',
    },
  ],
  notIncluded: [
    'Applying on your behalf or making decisions about the application. The Department of Social Protection decides.',
    'A guarantee that you will get a PPS Number, or of how long it will take.',
    'Tax, social welfare, legal or immigration advice.',
  ],
  resources: [
    {
      label: official.govPps.label,
      url: official.govPps.url,
      note: 'The official page from the Department of Social Protection, including the documents needed.',
    },
    {
      label: official.myWelfare.label,
      url: official.myWelfare.url,
      note: 'The official online service used to apply for a PPS Number.',
    },
    {
      label: official.ciPps.label,
      url: official.ciPps.url,
      note: 'A plain English explanation of the PPS Number and how to get one.',
    },
  ],
  faqs: [
    {
      q: 'Can you help with just my PPS Number?',
      a: '<p>Yes. PPSN application assistance is available on its own, without the full package. Contact us for a price.</p>',
    },
    {
      q: 'Do I need a PPS Number as a student?',
      a: '<p>Many students apply for one when they start a part-time job, so they pay the right tax. Whether you need one depends on your situation. The official websites list the common reasons, and we can help you understand them.</p>',
    },
    {
      q: 'Can you apply for me?',
      a: '<p>No. You complete the application yourself through the official channels. We help you understand the steps and prepare your documents.</p>',
    },
    {
      q: 'How long does it take?',
      a: '<p>Processing times vary and are set by the Department of Social Protection, so we cannot guarantee a timeline. The official website has the latest information.</p>',
    },
    {
      q: 'What if I do not have proof of address yet?',
      a: '<p>This is common for new arrivals. We help you understand which documents may be accepted and how to plan around it. Always check the current official list.</p>',
    },
  ],
};

export default service;
