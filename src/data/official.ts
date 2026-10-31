/**
 * Official external websites linked from the site. Checked on 26 October 2026.
 * If a deep link stops working, point it at the home page of the same official site.
 */
export const official = {
  isd: { label: 'Immigration Service Delivery', url: 'https://www.irishimmigration.ie' },
  isdRegistering: {
    label: 'Registering your immigration permission (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/',
  },
  isdFirstTime: {
    label: 'How to register your immigration permission for the first time (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/',
  },
  isdRenewal: {
    label: 'Renewing your registration permission if you live in Ireland (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/renewing-your-registration-permission-if-you-live-in-the-republic-of-ireland/',
  },
  isdStudy: {
    label: 'Coming to study in Ireland (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/',
  },
  isdRegistrationFaq: {
    label: 'Registration FAQs (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/frequently-asked-questions-for-registration/',
  },
  isdRequiredDocs: {
    label: 'Documents for first-time registration (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/required-documents/',
  },
  isdStamps: {
    label: 'Immigration permission stamps (Immigration Service Delivery)',
    url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/',
  },
  gardaRentalFraud: {
    label: 'Student accommodation fraud warning (An Garda Síochána)',
    url: 'https://www.garda.ie/en/about-us/our-departments/office-of-corporate-communications/news-media/news-archive/student-accommodation-fraud-scam-warning-for-3rd-level-students-31-8-22-.html',
  },
  revenueFirstJob: {
    label: 'Starting your first job (Revenue)',
    url: 'https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx',
  },
  ciMinimumWage: {
    label: 'Minimum wage (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/employment/employment-rights-and-conditions/pay-and-employment/minimum-wage/',
  },
  wrc: { label: 'Workplace Relations Commission', url: 'https://www.workplacerelations.ie/en/' },
  ciHome: { label: 'Citizens Information', url: 'https://www.citizensinformation.ie' },
  ciMovingToIreland: {
    label: 'Moving to Ireland (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/',
  },
  ciRegistration: {
    label: 'Registration of non-EEA nationals in Ireland (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/registration-of-non-eea-nationals-in-ireland/',
  },
  ciPps: {
    label: 'Personal Public Service Number (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/social-welfare/irish-social-welfare-system/personal-public-service-number/',
  },
  ciRenting: {
    label: 'Renting a home (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/housing/renting-a-home/',
  },
  ciBankAccount: {
    label: 'Opening a bank account (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/money-and-tax/personal-finance/banking/opening-a-bank-account/',
  },
  ciGp: {
    label: 'GP and hospital services (Citizens Information)',
    url: 'https://www.citizensinformation.ie/en/health/health-services/gp-and-hospital-services/',
  },
  myWelfare: { label: 'MyWelfare', url: 'https://www.mywelfare.ie' },
  govPps: {
    label: 'Get a Personal Public Service (PPS) Number (gov.ie)',
    url: 'https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/',
  },
  govDsp: { label: 'Department of Social Protection (gov.ie)', url: 'https://www.gov.ie/en/department-of-social-protection/' },
  leapCard: { label: 'TFI Leap Card', url: 'https://about.leapcard.ie' },
  studentLeapCard: { label: 'Student Leap Card', url: 'https://www.studentleapcard.ie' },
  tfi: { label: 'Transport for Ireland', url: 'https://www.transportforireland.ie' },
  tfiFares: { label: 'Fares (Transport for Ireland)', url: 'https://www.transportforireland.ie/fares/' },
  tfiLive: { label: 'TFI Live app (Transport for Ireland)', url: 'https://www.transportforireland.ie/available-apps/tfi-live/' },
  rtb: { label: 'Residential Tenancies Board', url: 'https://www.rtb.ie' },
  ccpcAccounts: {
    label: 'Current accounts and bank cards (Competition and Consumer Protection Commission)',
    url: 'https://www.ccpc.ie/manage-your-money/day-to-day-finances/current-accounts-and-bank-cards',
  },
  hseFindGp: { label: 'Find a GP (HSE)', url: 'https://www2.hse.ie/services/find-a-gp/' },
  dpc: { label: 'Data Protection Commission', url: 'https://www.dataprotection.ie' },
} as const;
