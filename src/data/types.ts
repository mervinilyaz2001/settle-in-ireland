export interface FAQ {
  q: string;
  /** The answer as simple HTML: paragraphs, lists and links. */
  a: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface Resource {
  label: string;
  url: string;
  note: string;
}

export interface Service {
  slug: string;
  order: number;
  name: string;
  /** Shorter name for the menu and footer. */
  navName: string;
  /** Lucide icon name, see src/components/Icon.astro. */
  icon: string;
  /** One or two sentences for cards. */
  summary: string;
  /** Two or three sentences for the Services page. */
  overview: string;
  /** One line for the list on the Fees page. */
  feeLine: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  covers: string[];
  steps: Step[];
  prepare: string[];
  prepareNote?: string;
  goodToKnow: Step[];
  notIncluded: string[];
  resources: Resource[];
  faqs: FAQ[];
  /** Shows the full government non-affiliation box near the top of the page. */
  governmentDisclaimer?: boolean;
  /** An extra highlighted box, for example the rental scam warnings. */
  callout?: { title: string; intro?: string; items: string[]; tone: 'warning' | 'info' };
}
