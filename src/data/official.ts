/**
 * Official external websites linked from the site. Checked on 25 October 2026.
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
