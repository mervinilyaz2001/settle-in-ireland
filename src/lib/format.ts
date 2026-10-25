import { site } from '../config/site';

const euro = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: site.fee.currency,
  maximumFractionDigits: 0,
});

/** Formats an amount with the euro sign before the number, for example 350 becomes "€350". */
export function formatPrice(amount: number): string {
  return euro.format(amount);
}

/** The full package price, for example "€350". */
export const packagePrice = formatPrice(site.fee.amount);

/** True for text still in [SQUARE BRACKETS] and for the placeholder phone and WhatsApp numbers. */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  if (/\[[^\]]+\]/.test(value)) return true;
  const digits = value.replace(/\D/g, '');
  return /^3530+$/.test(digits);
}

/** The phone number in the format tel: links need, for example "+353871234567". */
export function telHref(phone: string = site.phone): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function mailHref(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${site.email}${query ? `?${query}` : ''}`;
}

/** Wraps any [PLACEHOLDER] text inside an HTML string in a highlight, so it is easy to spot. */
export function highlightPlaceholders(html: string): string {
  return html.replace(/\[([^\]<>]+)\]/g, '<mark class="todo">[$1]</mark>');
}

/** Removes HTML tags, for search engine data built from HTML answers. */
export function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
