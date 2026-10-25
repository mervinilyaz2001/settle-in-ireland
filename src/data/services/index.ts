import type { Service } from '../types';
import { url } from '../../lib/url';

// Each service lives in its own file in this folder. The services grid, the menu, the footer,
// the service pages and the "Other services" lists are all built from this list.
const modules = import.meta.glob<{ default: Service }>('./*.ts', { eager: true });

export const services: Service[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.ts'))
  .map(([, mod]) => mod.default)
  .sort((a, b) => a.order - b.order);

export function serviceUrl(service: Pick<Service, 'slug'>): string {
  return url(`/services/${service.slug}/`);
}

export function getService(slug: string): Service {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service: ${slug}`);
  return found;
}
