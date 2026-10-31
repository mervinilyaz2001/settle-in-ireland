/**
 * STUDENT GUIDES
 * Free plain English guides, each written around a question students actually type into Google.
 * Every step links to the official website. Amounts that change often (fees, required funds, wages)
 * are deliberately left out: the official pages have the current figures.
 *
 * Re-check the facts at least twice a year, then update guidesChecked and guidesModified.
 * Pages: /guides/ (the hub), /guides/{slug}/, and /moving-to-dublin-as-a-student/ (the first guide).
 */
import { site } from '../config/site';
import { official } from './official';
import type { FAQ } from './types';

export const guidesChecked = 'October 2026';
export const guidesModified = '2026-10-31';

export interface GuideItem {
  title: string;
  text: string;
  /** An official page that backs up this step. */
  official?: { label: string; url: string };
  /** One of our services that helps with this step. */
  help?: { label: string; href: string };
}

export interface GuideSection {
  id: string;
  title: string;
  intro?: string;
  /** Numbered steps (in order) or unnumbered tips. Numbering continues across numbered sections. */
  numbered: boolean;
  icon: string;
  items: GuideItem[];
}

export interface Guide {
  slug: string;
  path: string;
  icon: string;
  /** Short title for cards and breadcrumbs. */
  cardTitle: string;
  /** One or two sentences for the guides hub. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** A short paragraph near the top that answers the question directly. */
  shortAnswer: string;
  sections: GuideSection[];
  faqs: FAQ[];
  /** Service slugs this guide relates to. Their pages list it under "Free guides". */
  relatedServices: string[];
  cta: { title: string; text: string; waMessage: string; secondary: { label: string; href: string } };
}

export const guides: Guide[] = [
  /* ---------- 1. Moving to Dublin as a student (the overview) ---------- */
  {
    slug: 'moving-to-dublin-as-a-student',
    path: '/moving-to-dublin-as-a-student/',
    icon: 'graduation-cap',
    cardTitle: 'Moving to Dublin as a student',
    summary: 'Every step to live in Ireland, in order: before you travel, at the airport, your first weeks and your yearly renewal.',
    metaTitle: 'Moving to Dublin as a Student: Steps to Live in Ireland',
    metaDescription:
      'A step-by-step guide for international students moving to Dublin: visa, arrival, IRP registration, PPS Number, bank account, Leap Card and renewals.',
    h1: 'Moving to Dublin as a student: the steps to live in Ireland',
    intro:
      'A plain English guide to what international students need to do, in order: before you travel, when you land in Dublin, in your first weeks and when you renew. Each step links to the official website.',
    shortAnswer:
      'Before you travel, get your college place, a study visa if your nationality needs one, evidence of funds, private medical insurance and somewhere safe to stay. At Dublin Airport, show your documents at border control. In your first weeks, register your immigration permission to get your IRP, apply for a PPS Number if you will work, open a bank account and get a Student Leap Card. Then renew your IRP online every year before it expires.',
    relatedServices: ['arrival-planning'],
    sections: [
      {
        id: 'before-you-travel',
        icon: 'plane',
        title: 'Before you travel',
        intro: 'Most of the work happens before you leave home. Get these in place first.',
        numbered: true,
        items: [
          {
            title: 'Accept your college place and pay your fees',
            text: 'Choose a full-time course at an Irish university, college or English language school, and pay your fees. Keep the official letter that confirms your enrolment, your course dates and the fees you have paid. You will show it at the airport and at your immigration registration.',
            official: official.isdStudy,
          },
          {
            title: 'Check whether you need a study visa',
            text: 'This depends on your nationality. Students from visa-required countries, including most of South Asia, apply online for a study visa before they travel. Students who do not need a visa still need the same documents when they arrive.',
            official: official.isdStudy,
          },
          {
            title: 'Show you can support yourself',
            text: 'You need evidence that you can access enough money for your living costs in Ireland. The required amount is set by the immigration service and has changed recently, so check the current figure on the official website before you apply.',
            official: official.isd,
          },
          {
            title: 'Get private medical insurance',
            text: 'Students from outside the EEA need private medical insurance that covers them from the day they arrive. You will be asked for proof when you register for your IRP.',
            official: official.isdStudy,
          },
          {
            title: 'Find somewhere to live, safely',
            text: 'Rooms in Dublin are in high demand and rental scams are common. Never pay a deposit for a place nobody has seen or checked. Many students book a short stay for their first weeks while they look for something longer.',
            official: official.rtb,
            help: { label: 'Finding a room without getting scammed', href: '/guides/student-accommodation-dublin-scams/' },
          },
          {
            title: 'Pack a documents folder in your hand luggage',
            text: 'Keep your passport, enrolment letter, proof of fees paid, evidence of funds, medical insurance and accommodation details together, with copies. Immigration control at Dublin Airport comes before you collect your bags.',
            help: { label: 'Arrival planning', href: '/services/arrival-planning/' },
          },
        ],
      },
      {
        id: 'when-you-arrive',
        icon: 'plane-landing',
        title: 'When you arrive in Dublin',
        intro: 'Your first day is about getting through the airport and settling in safely.',
        numbered: true,
        items: [
          {
            title: 'Go through border control at Dublin Airport',
            text: 'Show your passport and documents to the immigration officer, who decides whether you can enter. Your passport is stamped with the date by which you must register your immigration permission. Note that date.',
            official: official.isdStudy,
          },
          {
            title: 'Get from the airport to your accommodation',
            text: 'Buses and taxis run from Dublin Airport into the city and beyond. Plan your route on the Transport for Ireland journey planner before you fly, especially if you land late at night.',
            official: official.tfi,
          },
          {
            title: 'Get an Irish phone number',
            text: 'An Irish SIM card or eSIM makes everything easier: banks, landlords, employers and your college will all ask for a local number.',
            help: { label: 'Local orientation', href: '/services/local-orientation-support/' },
          },
        ],
      },
      {
        id: 'first-weeks',
        icon: 'calendar-check',
        title: 'Your first weeks in Ireland',
        intro: 'These are the official steps most students in Dublin need to complete.',
        numbered: true,
        items: [
          {
            title: 'Register your immigration permission and get your IRP',
            text: 'Register by the date stamped in your passport, generally within 90 days of arriving. You book a first-time registration appointment through the official Immigration Service Delivery online portal and attend in person. You pay the official fee and receive an Irish Residence Permit (IRP) card by post, usually a Stamp 2 for full-time students.',
            official: official.isdFirstTime,
            help: { label: 'How to get your first IRP appointment', href: '/guides/irp-appointment-dublin/' },
          },
          {
            title: 'Apply for a PPS Number if you will work',
            text: 'You need a Personal Public Service Number (PPS Number) to work and pay the right tax. You apply through MyWelfare.ie with a MyGovID account, proof of identity, proof of your address in Ireland and a reason, such as a job offer.',
            official: official.govPps,
            help: { label: 'How to get a PPS Number as a student', href: '/guides/pps-number-student-ireland/' },
          },
          {
            title: 'Open a bank account',
            text: 'Employers pay wages into a bank account, and landlords often want rent paid by transfer. Banks usually ask for your passport and proof of address. App-based accounts can be quicker to open while you wait for paperwork.',
            official: official.ciBankAccount,
            help: { label: 'Bank account setup', href: '/services/bank-account-setup/' },
          },
          {
            title: 'Get a Leap Card for buses, Luas and DART',
            text: 'A TFI Leap Card is cheaper than paying cash on public transport. Full-time students can apply for a Student Leap Card, which gives lower student fares.',
            official: official.studentLeapCard,
            help: { label: 'Leap Card and travel', href: '/services/leap-card-travel-guidance/' },
          },
          {
            title: 'Register with a GP',
            text: 'Find a family doctor (GP) near where you live before you need one. Some practices are not taking new patients, so it helps to start early.',
            official: official.hseFindGp,
          },
          {
            title: 'Know the rules for working while you study',
            text: 'With a Stamp 2 permission, students can generally work up to 20 hours a week during term, and up to 40 hours a week from 1 June to 30 September and from 15 December to 15 January. Check the current rules on the official website before you start a job.',
            official: official.isdStamps,
            help: { label: 'Working while studying: the Stamp 2 rules', href: '/guides/working-while-studying-ireland/' },
          },
        ],
      },
      {
        id: 'staying-on',
        icon: 'refresh-cw',
        title: 'Staying on: your yearly renewal',
        intro: 'Your permission lasts for a set period, so put the expiry date in your calendar.',
        numbered: true,
        items: [
          {
            title: 'Renew your IRP online before it expires',
            text: 'If you live in Ireland, renewals are made online. You can apply up to 12 weeks before your IRP expires, and students may need to wait until their new course has started. Apply before your current card runs out and keep your application receipt.',
            official: official.isdRenewal,
            help: { label: 'How to renew your IRP online', href: '/guides/renew-irp-online-student/' },
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What do I need to do when I arrive in Ireland as a student?',
        a: '<p>Get through border control with your documents, then in your first weeks: register your immigration permission and get your IRP, apply for a PPS Number if you will work, open a bank account, get a Student Leap Card and register with a GP. The steps above explain each one.</p>',
      },
      {
        q: 'How soon do I need to register for my IRP in Dublin?',
        a: '<p>By the date stamped in your passport when you arrive, which is generally within 90 days. Appointments can be busy, so book as soon as you can through the official Immigration Service Delivery portal. Never pay anyone who offers to sell you an appointment.</p>',
      },
      {
        q: 'Do I need a PPS Number as an international student?',
        a: '<p>You need one to work in Ireland and pay the right tax, so most students apply when they start looking for a part-time job. The application is free and is made through the official MyWelfare website.</p>',
      },
      {
        q: 'Can I work while studying in Ireland?',
        a: '<p>Students with a Stamp 2 permission can generally work up to 20 hours a week during term and up to 40 hours a week in the official holiday periods. Rules can change, so check the Immigration Service Delivery website before you start a job.</p>',
      },
      {
        q: 'Can Settle in Ireland help me with these steps?',
        a: '<p>Yes. Our <a href="/moving-to-ireland-on-your-own/">Moving on Your Own</a> package covers the whole move, from before you fly to your first weeks. If you only need help with one step, we offer <a href="/irp-application-assistance/">IRP application assistance</a> and <a href="/ppsn-application-assistance/">PPSN application assistance</a> on their own. <a href="/contact/">Contact us</a> to ask.</p>',
      },
    ],
    cta: {
      title: 'Want someone to walk you through it?',
      text: 'Our team helps students with every step in this guide, one to one, by WhatsApp and phone. Tell us when you are arriving.',
      waMessage: site.whatsappMessages.direct,
      secondary: { label: 'See the Moving on Your Own package', href: '/moving-to-ireland-on-your-own/' },
    },
  },

  /* ---------- 2. Renewing your IRP online ---------- */
  {
    slug: 'renew-irp-online-student',
    path: '/guides/renew-irp-online-student/',
    icon: 'refresh-cw',
    cardTitle: 'How to renew your IRP online',
    summary: 'When students can apply, the documents you need, the online portal, your receipt and what happens while you wait.',
    metaTitle: 'How to Renew Your IRP Online as a Student in Ireland',
    metaDescription:
      'Step-by-step help renewing your Irish Residence Permit online as a student: when to apply, documents, the online portal, your receipt and processing times.',
    h1: 'How to renew your IRP online as a student',
    intro:
      'If you study in Ireland on a Stamp 2, you need to renew your immigration permission and IRP card before it expires, usually every year. Here is how the online renewal works, in plain English.',
    shortAnswer:
      'If you live in Ireland, IRP renewals are made online through the Immigration Service Delivery renewals portal. Apply before your card expires: you can apply up to 12 weeks before, but students may need to wait until their new course has started. Upload your documents, pay the fee online and keep your application receipt, which shows you applied in time. Your new IRP card is sent by post.',
    relatedServices: ['irp-application-assistance'],
    sections: [
      {
        id: 'before-you-apply',
        icon: 'clipboard-list',
        title: 'Before you apply',
        intro: 'Most problems with renewals come from applying late or with missing documents.',
        numbered: true,
        items: [
          {
            title: 'Find your expiry date',
            text: 'Your IRP card shows the date your current permission ends. Put a reminder in your phone for 12 weeks before that date.',
          },
          {
            title: 'Check when you can apply',
            text: 'You can apply up to 12 weeks before your IRP expires. Students on a Stamp 2 may need to wait until their new course has started. You must be living in Ireland to apply online, and you should always apply before your current card expires.',
            official: official.isdRenewal,
          },
          {
            title: 'Gather your documents',
            text: 'Students usually need their passport, current IRP card, a letter from their college confirming enrolment on the new course and its dates, evidence that fees are paid, evidence of finances and private medical insurance. Some students are also asked for exam results or attendance records. Follow the official list for your situation.',
            official: official.isdRenewal,
          },
          {
            title: 'Check that everything matches',
            text: 'Your name, date of birth and course dates should match across your passport, college letter and other documents. Make clear scans or photos of every page before you start.',
          },
        ],
      },
      {
        id: 'applying-online',
        icon: 'id-card',
        title: 'Applying online',
        numbered: true,
        items: [
          {
            title: 'Apply on the official renewals portal',
            text: 'Use only the Immigration Service Delivery website. Fill in the application carefully and upload your documents. Nobody can buy you a faster renewal, so be wary of anyone who offers one.',
            official: official.isdRenewal,
            help: { label: 'IRP application assistance', href: '/irp-application-assistance/' },
          },
          {
            title: 'Pay the renewal fee online',
            text: 'The fee is set by Immigration Service Delivery and paid as part of the online application. Check the current amount on the official website.',
            official: official.isd,
          },
          {
            title: 'Keep your application receipt',
            text: 'After you apply you receive a receipt with your application number. Keep it safe, with your IRP card. It shows when you applied, which matters if your card expires while you wait.',
          },
        ],
      },
      {
        id: 'after-you-apply',
        icon: 'clock',
        title: 'While you wait',
        numbered: true,
        items: [
          {
            title: 'Check the processing times',
            text: 'Immigration Service Delivery publishes the dates of the applications it is currently processing, by stamp category, and updates them weekly. This gives you an idea of how long yours may take.',
            official: official.isdRenewal,
          },
          {
            title: 'Answer quickly if more documents are requested',
            text: 'If your application is incomplete, you are asked for more information and it can take longer. Reply as soon as you can with exactly what was asked for.',
          },
          {
            title: 'Receive your new IRP card by post',
            text: 'When your renewal is approved, your new card is posted to you. Check that all the details on it are correct.',
          },
        ],
      },
      {
        id: 'good-to-know',
        icon: 'info',
        title: 'Good to know',
        numbered: false,
        items: [
          {
            title: 'Working while you wait',
            text: 'Immigration Service Delivery guidance for employers says that if you applied before your card expired, you keep the conditions of your previous permission for a period while you wait for a decision. Check the current notice and keep your receipt to show your employer.',
            official: official.isdRenewal,
          },
          {
            title: 'Travelling while you wait',
            text: 'Leaving Ireland while a renewal is in progress can cause problems coming back in. Check the official guidance before you book any travel.',
            official: official.isdRegistrationFaq,
          },
          {
            title: 'Limits on time as a student',
            text: 'There are limits on how long you can stay in Ireland as a student. If you are planning another course, check the official rules first.',
            official: official.isdStamps,
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'When can I renew my IRP as a student?',
        a: '<p>You can apply up to 12 weeks before your IRP expires, but students on a Stamp 2 may need to wait until their new course has started. Always apply before your current card expires. Check the current rules on the Immigration Service Delivery website.</p>',
      },
      {
        q: 'What happens if my IRP expires before my new card arrives?',
        a: '<p>If you applied before it expired, keep your application receipt. Official guidance says you keep the conditions of your previous permission for a period while you wait for a decision. If your card has already expired and you have not applied, contact Immigration Service Delivery straight away.</p>',
      },
      {
        q: 'Can I renew my IRP from outside Ireland?',
        a: '<p>No. You must be living in Ireland to apply online, and applications made from outside Ireland are not accepted.</p>',
      },
      {
        q: 'How long does IRP renewal take?',
        a: '<p>It varies. Immigration Service Delivery publishes current processing dates by stamp category every week, so check the official website for the latest picture.</p>',
      },
      {
        q: 'Can Settle in Ireland help me renew my IRP?',
        a: '<p>Yes. Our <a href="/irp-application-assistance/">IRP application assistance</a> is available on its own: we help you check your documents and timing and walk you through the online application, which you submit yourself. We never sell or speed up applications.</p>',
      },
    ],
    cta: {
      title: 'Renewing soon? Get it right first time',
      text: 'We check your documents and timing with you, one to one, before you submit your renewal.',
      waMessage: site.whatsappMessages.irp,
      secondary: { label: 'IRP application assistance', href: '/irp-application-assistance/' },
    },
  },

  /* ---------- 3. First IRP appointment in Dublin ---------- */
  {
    slug: 'irp-appointment-dublin',
    path: '/guides/irp-appointment-dublin/',
    icon: 'calendar-check',
    cardTitle: 'How to get your first IRP appointment in Dublin',
    summary: 'Booking your first-time registration on the official portal, the 90-day rule, what to bring and what happens on the day.',
    metaTitle: 'How to Get an IRP Appointment in Dublin (First Time)',
    metaDescription:
      'How to book your first IRP registration appointment in Dublin: the official portal, when to book, the 90-day rule, what to bring and what happens on the day.',
    h1: 'How to get your first IRP appointment in Dublin',
    intro:
      'After you arrive in Ireland, you need to register your immigration permission and get an Irish Residence Permit (IRP). First-time registrations in Dublin are by appointment at the Burgh Quay Registration Office. Here is how to get one.',
    shortAnswer:
      'Once you have arrived in Ireland, create an account on the Immigration Service Delivery Customer Service Portal and book your first-time registration appointment there. Booking is free, and appointments can only be booked through the official portal, in your own name. Aim to register within 90 days of arriving. If you cannot get an appointment in time, Immigration Service Delivery says it will not cancel your permission while you wait. Bring printed copies and originals of your documents and a card to pay the fee.',
    relatedServices: ['irp-application-assistance'],
    sections: [
      {
        id: 'booking',
        icon: 'calendar-check',
        title: 'Booking your appointment',
        numbered: true,
        items: [
          {
            title: 'Wait until you have arrived',
            text: 'Appointments can only be booked after you arrive in Ireland. Note the date stamped in your passport at the airport, which tells you when to register by.',
            official: official.isdRegistrationFaq,
          },
          {
            title: 'Create your Customer Service Portal account',
            text: 'Go to the official Immigration Service Delivery website and create an account in your own name, as soon as you arrive. Appointments are only valid in the name of the person attending.',
            official: official.isdRegistrationFaq,
          },
          {
            title: 'Book a first-time registration appointment',
            text: 'In the portal, choose first-time registration and pick an available time. Save or print the confirmation. Booking an appointment is free.',
            official: official.isdFirstTime,
          },
          {
            title: 'Keep checking if there are no times available',
            text: 'New appointments are released regularly, so check at different times of day. If you cannot get an appointment within 90 days, Immigration Service Delivery says it will not cancel your permission or expect you to leave while you wait to register.',
            official: official.isdFirstTime,
          },
        ],
      },
      {
        id: 'getting-ready',
        icon: 'clipboard-list',
        title: 'Getting ready for the day',
        numbered: true,
        items: [
          {
            title: 'Print your documents',
            text: 'Bring printed copies of your supporting documents, as electronic copies are not accepted, and bring the originals too.',
            official: official.isdRequiredDocs,
          },
          {
            title: 'Check the official documents list',
            text: 'Students usually need their passport, appointment confirmation, a letter from their college confirming enrolment and course details, evidence of fees paid, evidence of finances and private medical insurance. Follow the official list for your permission.',
            official: official.isdRequiredDocs,
            help: { label: 'IRP application assistance', href: '/irp-application-assistance/' },
          },
          {
            title: 'Bring a card to pay the registration fee',
            text: 'The fee depends on your permission. Official guidance says cash and contactless payments are not accepted at the registration office, so bring a debit or credit card. Check the current fee on the official website.',
            official: official.isdRegistrationFaq,
          },
        ],
      },
      {
        id: 'on-the-day',
        icon: 'map-pin',
        title: 'On the day and after',
        numbered: true,
        items: [
          {
            title: 'Go to the Burgh Quay Registration Office',
            text: 'The office is at 13-14 Burgh Quay, Dublin 2. You need a confirmed appointment in your own name to be let in, so arrive a little early with your confirmation.',
            official: official.isdRegistrationFaq,
          },
          {
            title: 'Hand over your documents',
            text: 'An officer checks your documents, takes your photo and fingerprints, and takes the registration fee.',
          },
          {
            title: 'Receive your IRP card by post',
            text: 'Your IRP card is posted to you after registration. It is your proof that you are in Ireland legally, so keep it safe and keep your address up to date.',
            official: official.isdFirstTime,
          },
        ],
      },
      {
        id: 'good-to-know',
        icon: 'shield-check',
        title: 'Good to know',
        numbered: false,
        items: [
          {
            title: 'Never pay for an appointment',
            text: 'Appointments are free and can only be booked through the official portal. Anyone offering to sell or reserve one for you is not legitimate.',
            official: official.isdRegistrationFaq,
          },
          {
            title: 'Ask your college',
            text: 'Many colleges give international students guidance on registration and the letters they need. Ask your international or student office early.',
          },
          {
            title: 'Living outside Dublin?',
            text: 'Where you register can depend on where you live. Check the official website for the right registration office.',
            official: official.isdFirstTime,
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I book an IRP appointment in Dublin?',
        a: '<p>After you arrive, create an account on the Immigration Service Delivery Customer Service Portal and book a first-time registration appointment there. It is the only valid way to book.</p>',
      },
      {
        q: "What if I can't get an IRP appointment within 90 days?",
        a: '<p>Keep checking the portal, as new appointments are released regularly. Immigration Service Delivery says it will not cancel your permission or expect you to leave Ireland while you are waiting to register.</p>',
      },
      {
        q: 'Is it free to book an IRP appointment?',
        a: '<p>Yes, booking is free. You pay the registration fee at your appointment, by card.</p>',
      },
      {
        q: 'Can someone book my IRP appointment for me?',
        a: '<p>No. Appointments can only be booked through the official portal, in your own name. Anyone selling appointments is not legitimate. We never sell, reserve or book appointments; we help you prepare.</p>',
      },
      {
        q: 'Can Settle in Ireland help with my first IRP registration?',
        a: '<p>Yes. Our <a href="/irp-application-assistance/">IRP application assistance</a> helps you understand the booking process, check your documents against the official list and know what to expect on the day.</p>',
      },
    ],
    cta: {
      title: 'Nervous about your registration?',
      text: 'We help you get your documents in order and know exactly what to expect, one to one, by WhatsApp and phone.',
      waMessage: site.whatsappMessages.irp,
      secondary: { label: 'IRP application assistance', href: '/irp-application-assistance/' },
    },
  },

  /* ---------- 4. Finding a room without getting scammed ---------- */
  {
    slug: 'student-accommodation-dublin-scams',
    path: '/guides/student-accommodation-dublin-scams/',
    icon: 'house',
    cardTitle: 'Finding a room in Dublin without getting scammed',
    summary: 'Where students look for rooms, the warning signs of rental scams, how to check a room safely and what to do if you are scammed.',
    metaTitle: 'Finding a Room in Dublin Without Getting Scammed',
    metaDescription:
      'How international students can find a room in Dublin safely: where to look, rental scam warning signs, checking a landlord and what to do if scammed.',
    h1: 'Finding a room in Dublin without getting scammed',
    intro:
      'Rooms in Dublin are in high demand, and scammers target new students every year, especially from August to October. Here is how to search safely, spot the warning signs and protect your money.',
    shortAnswer:
      "Start early and use recognised letting websites, agencies or your college's accommodation office. Never pay a deposit for a room that nobody you trust has seen. Be wary of landlords who say they are abroad, rents that seem too cheap, pressure to pay quickly, and requests for cash, cryptocurrency or money transfer services. Only pay by traceable bank transfer after a viewing and a written agreement, and keep every receipt.",
    relatedServices: ['accommodation-assistance'],
    sections: [
      {
        id: 'where-to-look',
        icon: 'compass',
        title: 'Where students usually look',
        numbered: false,
        items: [
          {
            title: "Your college's accommodation office",
            text: 'Many colleges list accommodation and give advice to new international students. It is a good first stop.',
          },
          {
            title: 'Student residences',
            text: 'Purpose-built student accommodation is managed by companies and colleges. Book only on the operator’s own official website.',
          },
          {
            title: 'Rooms in shared houses',
            text: 'Rooms are advertised on Irish property websites such as Daft.ie and Rent.ie. This is the most competitive option, and where most scams happen.',
          },
          {
            title: 'A room in a family home',
            text: 'Some students live with a host family or homeowner, often called digs. Agree the house rules and what is included in writing.',
          },
          {
            title: 'A short stay to start with',
            text: 'Booking a hostel, guesthouse or short let for your first weeks gives you time to view rooms in person before you commit.',
            help: { label: 'Arrival planning', href: '/services/arrival-planning/' },
          },
        ],
      },
      {
        id: 'warning-signs',
        icon: 'triangle-alert',
        title: 'Warning signs of a rental scam',
        intro: 'Gardaí warn students about these signs every year.',
        numbered: false,
        items: [
          {
            title: 'The landlord is "abroad" and cannot show you the room',
            text: 'A common story is that the owner is overseas and will post you the keys once you pay.',
            official: official.gardaRentalFraud,
          },
          {
            title: 'You are asked for a deposit before any viewing',
            text: 'Never pay to secure a room that nobody you trust has seen in person or on a live video call.',
          },
          {
            title: 'The rent is much lower than similar rooms',
            text: 'If it looks too good to be true for Dublin, it probably is.',
          },
          {
            title: 'You are rushed',
            text: 'Pressure such as "many other students want this room, pay today" is designed to stop you checking.',
          },
          {
            title: 'Unusual ways to pay',
            text: 'Requests for cash, cryptocurrency, money transfer services or a bank account in another country are red flags.',
          },
          {
            title: 'Documents sent to reassure you',
            text: 'A copy of a passport or "proof of ownership" sent by message proves nothing. Scammers use stolen or fake documents.',
          },
        ],
      },
      {
        id: 'checking-a-room',
        icon: 'shield-check',
        title: 'How to check a room safely',
        numbered: true,
        items: [
          {
            title: 'View it, or have someone you trust view it',
            text: 'If you are still abroad, ask for a live video viewing, not a recorded one, and ask the landlord to show specific things, like the view from a window or the street outside. Check the address exists on a map.',
            help: { label: 'Accommodation help', href: '/services/accommodation-assistance/' },
          },
          {
            title: 'Check who you are dealing with',
            text: 'Search the landlord’s or agent’s name, phone number and the listing photos online. Be cautious if the same photos appear in other adverts.',
          },
          {
            title: 'Get it in writing',
            text: 'Before you pay, get a written agreement that shows the address, rent, deposit, what is included and the notice period. Read it carefully.',
            official: official.ciRenting,
          },
          {
            title: 'Pay safely, and keep receipts',
            text: 'Pay by bank transfer to an account in the landlord’s or agency’s name, only after the viewing and the agreement. Never hand over cash, and insist on a receipt for every payment.',
            official: official.gardaRentalFraud,
          },
          {
            title: 'Check everything when you move in',
            text: 'Make sure the keys work, you have real contact details for the landlord or agent, and take dated photos of the room’s condition.',
          },
        ],
      },
      {
        id: 'if-scammed',
        icon: 'info',
        title: 'If you think you have been scammed',
        numbered: false,
        items: [
          {
            title: 'Contact your bank straight away',
            text: 'Ask your bank to try to recall the payment. The sooner you call, the better the chance.',
          },
          {
            title: 'Report it to the Gardaí',
            text: 'Report the fraud to your local Garda station, and keep all messages, adverts and payment records as evidence.',
            official: official.gardaRentalFraud,
          },
          {
            title: 'Report the advert',
            text: 'Tell the website where you found the listing, so it can be taken down before someone else is caught.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I find student accommodation in Dublin from abroad?',
        a: '<p>Start with your college’s accommodation office and official student residences. If you rent a room privately, insist on a live video viewing, a written agreement and payment by bank transfer only after both. Many students book a short stay first and view rooms in person after they arrive.</p>',
      },
      {
        q: 'How can I tell if a rental listing is a scam?',
        a: '<p>Common signs are a landlord who is abroad and cannot show the room, a deposit requested before any viewing, rent that is much cheaper than similar rooms, pressure to pay quickly, and requests for cash, cryptocurrency or money transfer services.</p>',
      },
      {
        q: 'Should I pay a deposit before viewing a room?',
        a: '<p>No. Never pay a deposit for a room that nobody you trust has seen, in person or on a live video call, and never before you have a written agreement.</p>',
      },
      {
        q: "What should I do if I've been scammed?",
        a: '<p>Contact your bank immediately and ask them to recall the payment, report it to the Gardaí, keep every message and receipt, and report the advert to the website.</p>',
      },
      {
        q: 'Can Settle in Ireland help me find accommodation?',
        a: '<p>Yes. Our <a href="/services/accommodation-assistance/">accommodation assistance</a> helps you search safely: we check listings and landlords with you and help you prepare for live video viewings. Nobody can honestly guarantee a room, and you always pay the landlord directly.</p>',
      },
    ],
    cta: {
      title: 'Found a room but not sure it is real?',
      text: 'Send us the listing on WhatsApp before you pay anything, and we will help you check it.',
      waMessage: site.whatsappMessages.direct,
      secondary: { label: 'Accommodation help', href: '/services/accommodation-assistance/' },
    },
  },

  /* ---------- 5. Getting a PPS Number ---------- */
  {
    slug: 'pps-number-student-ireland',
    path: '/guides/pps-number-student-ireland/',
    icon: 'file-check',
    cardTitle: 'How to get a PPS Number as a student',
    summary: 'When you need one, proof of address, applying on MyWelfare, the in-person appointment and registering your job with Revenue.',
    metaTitle: 'How to Get a PPS Number as a Student in Ireland',
    metaDescription:
      'How international students get a PPS Number in Ireland: when you need one, applying on MyWelfare, proof of address, the appointment and what comes next.',
    h1: 'How to get a PPS Number as a student in Ireland',
    intro:
      'A Personal Public Service Number (PPS Number or PPSN) is your number for tax and public services in Ireland. Most international students need one when they start a part-time job. Here is how to get it.',
    shortAnswer:
      'Apply through MyWelfare.ie once you have a reason to need one, such as a job offer. You need a basic or verified MyGovID account, proof of identity, such as your passport, and proof of your address in Ireland. The process includes an in-person appointment to confirm your identity, and your PPS Number is then sent to you. Applying is free.',
    relatedServices: ['ppsn-application-assistance'],
    sections: [
      {
        id: 'before-you-apply',
        icon: 'clipboard-list',
        title: 'Before you apply',
        numbered: true,
        items: [
          {
            title: 'Check that you need one',
            text: 'You need a PPS Number to work in Ireland, so your employer can pay you and deduct the right tax. Students usually apply when they get a job offer.',
            official: official.govPps,
          },
          {
            title: 'Get proof of your address in Ireland',
            text: 'You need a document showing your name and Irish address. The official website lists what is accepted. Some colleges provide a letter for PPS Number applications, so ask your student office.',
            official: official.govPps,
            help: { label: 'PPSN application assistance', href: '/ppsn-application-assistance/' },
          },
          {
            title: 'Keep your reason for applying ready',
            text: 'A job offer or a letter from your employer is the most common reason for students. Keep a copy with your other documents.',
          },
          {
            title: 'Set up a MyGovID account',
            text: 'You need a basic or verified MyGovID account to apply online. It takes a few minutes with your email address and mobile number.',
            official: official.govPps,
          },
        ],
      },
      {
        id: 'applying',
        icon: 'file-check',
        title: 'Applying',
        numbered: true,
        items: [
          {
            title: 'Apply on MyWelfare.ie',
            text: 'Sign in with your MyGovID and fill in the PPS Number application. Use only the official website: applying is free.',
            official: official.myWelfare,
          },
          {
            title: 'Attend your in-person appointment',
            text: 'The process includes an in-person appointment to confirm your identity. Bring the original documents you used in your application: your passport, proof of address, your reason for applying and your IRP card if you have one.',
            official: official.govPps,
          },
          {
            title: 'Receive your PPS Number',
            text: 'Your PPS Number is sent to you once your application is approved. Keep the letter safe.',
          },
        ],
      },
      {
        id: 'after',
        icon: 'wallet',
        title: 'Once you have it',
        numbered: true,
        items: [
          {
            title: 'Give it to your employer',
            text: 'Your employer needs your PPS Number to pay you correctly.',
          },
          {
            title: 'Register your job with Revenue',
            text: 'Register for Revenue myAccount and add your job using your employer’s tax registration number. If you skip this, you may be taxed at the higher emergency rate.',
            official: official.revenueFirstJob,
          },
          {
            title: 'Keep your number private',
            text: 'Only share your PPS Number with employers, Revenue, banks and official bodies that need it.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do international students need a PPS Number?',
        a: '<p>You need one to work in Ireland and pay the right tax. If you are not working, you may not need one yet. The official website lists the common reasons for applying.</p>',
      },
      {
        q: 'Can I apply for a PPS Number before I arrive in Ireland?',
        a: '<p>No. You apply once you are living in Ireland, because you need proof of your Irish address and the process includes an in-person appointment.</p>',
      },
      {
        q: 'What can I use as proof of address?',
        a: '<p>A document that shows your name and Irish address. The official website lists what is accepted. Some colleges provide a letter for PPS Number applications, so ask your student office.</p>',
      },
      {
        q: 'How much does a PPS Number cost?',
        a: '<p>Nothing. Applying for a PPS Number is free. Be careful of anyone who asks you to pay them to get one.</p>',
      },
      {
        q: 'Can Settle in Ireland help me get a PPS Number?',
        a: '<p>Yes. Our <a href="/ppsn-application-assistance/">PPSN application assistance</a> is available on its own: we help you understand the steps, sort out proof of address and prepare for your appointment. You submit the application yourself.</p>',
      },
    ],
    cta: {
      title: 'Got a job offer and need a PPS Number?',
      text: 'We help you get your documents together and know what to expect, one to one.',
      waMessage: site.whatsappMessages.ppsn,
      secondary: { label: 'PPSN application assistance', href: '/ppsn-application-assistance/' },
    },
  },

  /* ---------- 6. Working while studying ---------- */
  {
    slug: 'working-while-studying-ireland',
    path: '/guides/working-while-studying-ireland/',
    icon: 'briefcase',
    cardTitle: 'Working while studying: the Stamp 2 rules',
    summary: 'How many hours students can work in term and in the holidays, getting set up to work, tax and your rights at work.',
    metaTitle: 'Working While Studying in Ireland: Stamp 2 Rules',
    metaDescription:
      'Can international students work in Ireland? The Stamp 2 rules on hours and holidays, getting a PPS Number, tax and your rights at work, in plain English.',
    h1: 'Working while studying in Ireland: the Stamp 2 rules',
    intro:
      'Most international students on an eligible full-time course can take a part-time job in Ireland. Here is what the Stamp 2 rules allow, and the steps to start working legally and get paid correctly.',
    shortAnswer:
      'Students with a Stamp 2 permission can generally work up to 20 hours a week during term, and up to 40 hours a week from 1 June to 30 September and from 15 December to 15 January. Stamp 2A does not allow work. Before you start, get a PPS Number and register your job with Revenue so you are not taxed at the emergency rate. You have the same employment rights as other workers, including the national minimum wage.',
    relatedServices: ['ppsn-application-assistance', 'bank-account-setup'],
    sections: [
      {
        id: 'the-rules',
        icon: 'clipboard-list',
        title: 'What the rules allow',
        numbered: false,
        items: [
          {
            title: 'Stamp 2 can work, Stamp 2A cannot',
            text: 'Your IRP card shows your stamp. Stamp 2 is for students on eligible full-time courses and allows part-time work. Stamp 2A does not allow work.',
            official: official.isdStamps,
          },
          {
            title: 'Up to 20 hours a week in term',
            text: 'During term time, students on a Stamp 2 can generally work up to 20 hours a week.',
            official: official.isdStamps,
          },
          {
            title: 'Up to 40 hours a week in the holidays',
            text: 'From 1 June to 30 September and from 15 December to 15 January, students can generally work up to 40 hours a week.',
            official: official.isdStamps,
          },
          {
            title: 'Your course comes first',
            text: 'Your permission is to study. Keep up your attendance and results, as they can be checked when you renew.',
          },
          {
            title: 'Check the current rules',
            text: 'Immigration rules can change. Check the official website before you start a job or change your hours.',
            official: official.isd,
          },
        ],
      },
      {
        id: 'starting-a-job',
        icon: 'briefcase',
        title: 'Starting a job, step by step',
        numbered: true,
        items: [
          {
            title: 'Check your stamp',
            text: 'Make sure your IRP card shows a Stamp 2 before you accept work.',
            official: official.isdStamps,
          },
          {
            title: 'Get a PPS Number',
            text: 'Your employer needs it to pay you and deduct the right tax.',
            help: { label: 'How to get a PPS Number', href: '/guides/pps-number-student-ireland/' },
          },
          {
            title: 'Open a bank account',
            text: 'Most employers pay wages straight into a bank account.',
            official: official.ciBankAccount,
            help: { label: 'Bank account setup', href: '/services/bank-account-setup/' },
          },
          {
            title: 'Register your job with Revenue',
            text: 'Register for Revenue myAccount and add your job using your employer’s tax registration number. Otherwise you may pay emergency tax.',
            official: official.revenueFirstJob,
          },
          {
            title: 'Check your first payslips',
            text: 'Look at the tax and other deductions on your payslips. If they look too high, check that your job is registered with Revenue.',
            official: official.revenueFirstJob,
          },
        ],
      },
      {
        id: 'your-rights',
        icon: 'shield-check',
        title: 'Your rights at work',
        numbered: false,
        items: [
          {
            title: 'At least the minimum wage',
            text: 'International students are entitled to at least the national minimum wage, like any other worker. The rate changes, so check the current figure.',
            official: official.ciMinimumWage,
          },
          {
            title: 'Payslips and written terms',
            text: 'Your employer should give you a payslip showing your pay and deductions, and a written statement of the main terms of your job.',
            official: official.wrc,
          },
          {
            title: 'Holidays and breaks',
            text: 'You build up paid annual leave as you work, and you are entitled to rest breaks.',
            official: official.wrc,
          },
          {
            title: 'Where to get help',
            text: 'If you are not being paid properly or treated fairly, the Workplace Relations Commission gives free information and handles complaints.',
            official: official.wrc,
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can international students work in Ireland?',
        a: '<p>Yes, if you have a Stamp 2 permission. Students on a Stamp 2A cannot work. Check the stamp on your IRP card.</p>',
      },
      {
        q: 'How many hours can I work on a Stamp 2?',
        a: '<p>Generally up to 20 hours a week during term, and up to 40 hours a week from 1 June to 30 September and from 15 December to 15 January. Check the current rules on the Immigration Service Delivery website.</p>',
      },
      {
        q: 'Do I pay tax as a student in Ireland?',
        a: '<p>Yes, students pay tax on their wages like other workers. Register your job with Revenue through myAccount so you are taxed correctly and not at the emergency rate.</p>',
      },
      {
        q: 'Do I need a PPS Number to work?',
        a: '<p>Yes. Your employer needs your PPS Number to pay you and deduct the right tax. See our guide to <a href="/guides/pps-number-student-ireland/">getting a PPS Number as a student</a>.</p>',
      },
      {
        q: 'Can Settle in Ireland help me get ready to work?',
        a: '<p>Yes. We help with the practical steps, such as your <a href="/ppsn-application-assistance/">PPS Number</a> and a <a href="/services/bank-account-setup/">bank account</a>. We do not find jobs or give legal or employment advice.</p>',
      },
    ],
    cta: {
      title: 'Starting a part-time job?',
      text: 'We help you get your PPS Number and bank account sorted, one to one, so you can start work without delays.',
      waMessage: site.whatsappMessages.ppsn,
      secondary: { label: 'PPSN application assistance', href: '/ppsn-application-assistance/' },
    },
  },
];

export function getGuide(slug: string): Guide {
  const found = guides.find((g) => g.slug === slug);
  if (!found) throw new Error(`Unknown guide: ${slug}`);
  return found;
}

/** Guides listed on a service page under "Free guides". */
export function guidesForService(serviceSlug: string): Guide[] {
  return guides.filter((g) => g.relatedServices.includes(serviceSlug));
}
