import { official } from '../official';
import { packagePrice } from '../../lib/format';
import type { Service } from '../types';

const service: Service = {
  slug: 'ppsn-assistance',
  order: 4,
  name: 'Personal Public Service Number (PPSN) Assistance',
  navName: 'PPSN Assistance',
  icon: 'file-check',
  summary:
    'I help the client understand how to apply for a Personal Public Service Number, prepare their documents and know what to expect.',
  overview:
    'A PPS Number is a personal reference number used for social welfare, public services and information in Ireland, and is needed for things like working and tax. I explain the official application process, help the client prepare their documents and support them through each step.',
  feeLine: 'Explaining the official PPS Number process, preparing documents and support through each step.',
  costs: `Included in the ${packagePrice} package. Any official costs are set by the Department of Social Protection and paid by you directly.`,
  metaTitle: 'PPS Number Help for New Arrivals | Settle in Ireland',
  metaDescription:
    'Practical help applying for a Personal Public Service (PPS) Number in Ireland: understanding the process, preparing documents and knowing what to expect.',
  intro:
    'A Personal Public Service Number (PPS Number or PPSN) is a personal reference number used for access to social welfare benefits, public services and information in Ireland. Many new arrivals need one, for example to work and pay the right tax. It is applied for through the Department of Social Protection, usually through MyWelfare.ie. I help the client understand the process, prepare their documents and attend if asked.',
  governmentDisclaimer: true,
  covers: [
    'Explaining what a PPS Number is used for and when the client may need one.',
    'Explaining how the official application usually works, which is typically online through MyWelfare.ie.',
    'Helping the client gather evidence of identity, evidence of address and evidence of why they need the number.',
    'Helping with proof of address, which many new arrivals find difficult.',
    'Explaining what to expect if the client is asked to attend an appointment in person.',
    'Helping the client understand letters or messages about their application.',
  ],
  steps: [
    {
      title: 'Check the need',
      text: 'I explain what a PPS Number is used for and when the client should apply.',
    },
    {
      title: 'Prepare documents',
      text: 'Using the current official list, I help the client gather evidence of identity, address and the reason they need the number.',
    },
    {
      title: 'Apply through official channels',
      text: 'I explain how to apply, usually online through MyWelfare.ie. The client completes the application themselves.',
    },
    {
      title: 'Attend if asked',
      text: 'If the client is asked to attend in person, I explain what to bring and what to expect.',
    },
    {
      title: 'After applying',
      text: 'I help the client understand any letters they receive and what to do next.',
    },
  ],
  prepare: [
    'A valid passport, as evidence of identity.',
    "Evidence of address in Ireland, such as a tenancy agreement, a utility bill or an official letter showing the client's name and address.",
    'Evidence of why the client needs a PPS Number, such as a job offer or a letter from an employer.',
    'An IRP card, if the client already has one.',
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
    "Applying on the client's behalf or making decisions about the application. The Department of Social Protection decides.",
    'A guarantee that the client will get a PPS Number, or of how long it will take.',
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
      q: 'Do I need a PPS Number?',
      a: '<p>Many people need one, for example to work in Ireland and pay the right tax. Whether you need one depends on your situation. The official websites list the common reasons, and I can help you understand them.</p>',
    },
    {
      q: 'Can you apply for me?',
      a: '<p>No. You complete the application yourself through the official channels. I help you understand the steps and prepare your documents.</p>',
    },
    {
      q: 'How long does it take?',
      a: '<p>Processing times vary and are set by the Department of Social Protection, so I cannot guarantee a timeline. The official website has the latest information.</p>',
    },
    {
      q: 'What if I do not have proof of address yet?',
      a: '<p>This is common for new arrivals. I help you understand which documents may be accepted and how to plan around it. Always check the current official list.</p>',
    },
  ],
};

export default service;
