import { site } from '../config/site';
import { servicePath, services } from '../data/services';
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
    alternateName: 'Settle In Ireland',
    slogan: site.tagline,
    description: site.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo-light.png'),
    image: absoluteUrl('/og-default.png'),
    ...(isPlaceholder(site.phone) ? {} : { telephone: site.phone.replace(/[^\d+]/g, '') }),
    ...(site.emailActive ? { email: site.email } : {}),
    areaServed: { '@type': 'Country', name: 'Ireland' },
    address: { '@type': 'PostalAddress', addressLocality: site.location.split(',')[0].trim(), addressCountry: 'IE' },
    ...(sameAs.length ? { sameAs } : {}),
    // The four main services, without prices: the price is only shown on the package and agency pages
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        { name: 'Education Agency Partnerships', path: '/agency-partnerships/' },
        { name: 'Moving on Your Own: Complete Arrival and Settling-In Support', path: '/moving-to-ireland-on-your-own/' },
        ...services.filter((s) => s.path).map((s) => ({ name: s.title ?? s.name, path: servicePath(s) })),
      ].map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o.name, url: absoluteUrl(o.path) } })),
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
    url: absoluteUrl(servicePath(service)),
    areaServed: { '@type': 'Country', name: 'Ireland' },
    audience: { '@type': 'Audience', audienceType: 'International students and new arrivals in Ireland' },
    provider: { '@type': 'ProfessionalService', '@id': businessId, name: site.name, url: absoluteUrl('/') },
  };
}
