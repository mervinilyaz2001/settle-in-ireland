import { site } from '../config/site';
import { packagePrice } from './format';

/** Builds a wa.me link with a pre-filled message. */
export function waLink(message: string = site.whatsappMessages.general): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: site.whatsappMessages.general,
  partnerAgency: site.whatsappMessages.partnerAgency,
  client: site.whatsappMessages.client,
  direct: site.whatsappMessages.direct,
  irp: site.whatsappMessages.irp,
  ppsn: site.whatsappMessages.ppsn,
  fees: site.whatsappMessages.fees.replace('{price}', packagePrice).replace('{package}', site.fee.title),
  service: (serviceName: string) => site.whatsappMessages.service.replace('{service}', serviceName),
};
