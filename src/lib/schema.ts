import { site } from '../config/site';
import type { Service } from '../data/types';
import { isPlaceholder } from './format';
import { absoluteUrl } from './url';

export const businessId = `${absoluteUrl('/')}#business`;

/** ProfessionalService structured data for the business. Placeholder contact details are left out. */
export function businessSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo-light.png'),
    image: absoluteUrl('/og-default.png'),
    ...(isPlaceholder(site.phone) ? {} : { telephone: site.phone.replace(/[^\d+]/g, '') }),
    ...(site.emailActive ? { email: site.email } : {}),
    areaServed: { '@type': 'Country', name: 'Ireland' },
    address: { '@type': 'PostalAddress', addressLocality: site.location.split(',')[0].trim(), addressCountry: 'IE' },
    priceRange: `€${site.fee.amount}`,
    ...(isPlaceholder(site.languages) ? {} : { knowsLanguage: site.languages }),
    ...(sameAs.length ? { sameAs } : {}),
    makesOffer: {
      '@type': 'Offer',
      name: site.fee.title,
      price: site.fee.amount,
      priceCurrency: site.fee.currency,
      description: `${site.fee.title}, ${site.fee.perUnit}. ${site.fee.exclusions}`,
      url: absoluteUrl('/pricing/'),
    },
  };
}

/** Service structured data for a service page. */
export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.overview,
    url: absoluteUrl(`/services/${service.slug}/`),
    areaServed: { '@type': 'Country', name: 'Ireland' },
    provider: { '@type': 'ProfessionalService', '@id': businessId, name: site.name, url: absoluteUrl('/') },
    offers: {
      '@type': 'Offer',
      price: site.fee.amount,
      priceCurrency: site.fee.currency,
      description: `Included in the ${site.fee.title} package, ${site.fee.perUnit}.`,
      url: absoluteUrl('/pricing/'),
    },
  };
}
