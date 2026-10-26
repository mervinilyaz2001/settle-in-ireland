import { official } from '../official';
import type { Service } from '../types';

const service: Service = {
  slug: 'bank-account-setup',
  order: 5,
  name: 'Bank Account Setup Support',
  navName: 'Bank Account Setup',
  icon: 'wallet',
  summary:
    'We help the client understand their banking options, the documents banks usually ask for and how to plan around proof of address.',
  overview:
    'Opening a bank account is often one of the first tasks after arrival. We explain the difference between traditional banks and app-based banking options, the documents banks usually ask for and how to plan around the common proof of address problem. We do not recommend specific providers or handle money.',
  feeLine: 'Neutral guidance on banking options, typical documents and planning around proof of address.',
  costs: `Included in our Moving on Your Own package. Any account or card fees are set by the bank or provider and paid by you.`,
  metaTitle: 'Bank Account Setup Help in Ireland | Settle in Ireland',
  metaDescription:
    'Neutral guidance on opening a bank account after moving to Ireland: typical documents, proof of address and how to compare your banking options.',
  intro:
    'A bank account makes daily life in Ireland much easier, from paying rent to receiving wages. We help the client understand their options and prepare the documents banks usually ask for. This is practical guidance only. We are not a financial advisor and we do not recommend any specific provider.',
  covers: [
    'Explaining the main types of banking options: traditional banks with branches, and app-based or digital banking options.',
    'Explaining what to compare, such as monthly fees, card fees, branch access and the cost of sending money abroad.',
    'Explaining the documents banks usually ask for.',
    'Helping the client plan around the proof of address challenge.',
    'Explaining how to bank safely online and avoid common scams.',
    'Pointing the client to neutral, official comparison information.',
  ],
  steps: [
    {
      title: 'Understand the options',
      text: 'We explain the general types of accounts and what to compare.',
    },
    {
      title: 'Check the requirements',
      text: "The client checks each provider's current requirements on its official website.",
    },
    {
      title: 'Prepare documents',
      text: 'We help the client gather identification, proof of address and any other documents the provider asks for.',
    },
    {
      title: 'Apply',
      text: 'The client applies directly with the provider of their choice, online or in a branch.',
    },
    {
      title: 'Bank safely',
      text: 'We explain safe banking habits, such as never sharing codes or passwords with anyone.',
    },
  ],
  prepare: [
    'A valid passport, as identification.',
    'Proof of address in Ireland, which many providers ask for.',
    'An IRP card, if the client has one and the provider asks for it.',
    'A letter from the college or employer, which some providers accept as supporting evidence.',
    'A PPS Number, if the client has one and the provider asks for it.',
    'An Irish phone number for security codes.',
  ],
  prepareNote:
    "Each provider sets its own requirements and these can change. Always check the provider's official website before applying.",
  goodToKnow: [
    {
      title: 'The proof of address challenge',
      text: 'Many new arrivals need proof of address to open an account, but need an account to get some kinds of proof of address. Plan early. A tenancy agreement or a letter from your college or employer may help, depending on the provider.',
    },
    {
      title: 'Compare the costs',
      text: 'Check monthly fees, card fees and the charges for sending money abroad before you choose.',
    },
    {
      title: 'Never share security codes',
      text: 'A real bank will never ask for your full PIN, your password or a one-time code by phone, text or email.',
    },
    {
      title: 'Keep a back-up',
      text: 'Until your account is open, keep a card from home that works abroad and some cash.',
    },
    {
      title: 'Use neutral comparisons',
      text: 'The Competition and Consumer Protection Commission (CCPC) publishes neutral information about current accounts.',
    },
  ],
  notIncluded: [
    'Recommending or endorsing a specific bank or provider.',
    'Financial advice of any kind. We are not a financial advisor.',
    "Handling the client's money, bank details, passwords or cards.",
    'A guarantee that an account will be approved. Each provider makes its own decisions.',
    'Bank fees and charges.',
  ],
  resources: [
    {
      label: official.ciBankAccount.label,
      url: official.ciBankAccount.url,
      note: 'A plain English guide to opening a bank account in Ireland.',
    },
    {
      label: official.ccpcAccounts.label,
      url: official.ccpcAccounts.url,
      note: 'Neutral official information on current accounts and bank cards.',
    },
  ],
  faqs: [
    {
      q: 'Which bank should I choose?',
      a: '<p>We cannot recommend a specific provider, and we are not a financial advisor. We explain what to compare, such as fees, branch access and app features, so you can choose what suits you. The CCPC website has neutral comparison information.</p>',
    },
    {
      q: 'Can I open an account before I arrive?',
      a: "<p>Some app-based providers let you start an application before you arrive, but many ask for an address in Ireland. Check each provider's official website for its current rules.</p>",
    },
    {
      q: 'Will you need my bank details?',
      a: '<p>No. We never ask for passwords, PINs, security codes or card details, and we never handle clients\' money.</p>',
    },
  ],
};

export default service;
