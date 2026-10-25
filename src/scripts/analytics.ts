/**
 * Privacy-friendly event tracking. Sends events only to analytics tools that are switched on in
 * src/config/site.ts (and, for GA4, only after the visitor has accepted cookies). Events never
 * contain names, emails, phone numbers or message text.
 *
 * Events:
 *   whatsapp_click    location (e.g. hero), lead_type (individual | agency)
 *   enquiry_submit    form (individual | agency), method (form | whatsapp | email)
 *   enquiry_error     form (individual | agency)
 */

type Params = Record<string, string>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Params }) => void;
    umami?: { track: (event: string, data?: Params) => void };
  }
}

export function track(event: string, params: Params = {}): void {
  try {
    window.gtag?.('event', event, params);
    window.plausible?.(event, { props: params });
    window.umami?.track(event, params);
  } catch {
    // Analytics must never break the page
  }
  document.dispatchEvent(new CustomEvent('sii:track', { detail: { event, params } }));
}

/** Counts WhatsApp clicks anywhere on the page, using the data attributes on each link. */
export function trackWhatsAppClicks(): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href^="https://wa.me/"]');
    if (!link) return;
    track('whatsapp_click', {
      location: link.dataset.trackLocation ?? 'page',
      lead_type: link.dataset.lead ?? 'individual',
    });
  });
}
