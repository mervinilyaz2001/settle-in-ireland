/**
 * Photographs used on the site. All are from Unsplash under the free Unsplash License
 * (https://unsplash.com/license): free for commercial use, no attribution required. Credits are
 * kept here anyway. They are scenes of Dublin and of travel in general, not photos of this
 * service being delivered, so they are never captioned or described as clients or as the owner.
 * Checked and downloaded 25 Oct 2026.
 */
import airport from '../assets/photos/airport-walkway.jpg';
import hapenny from '../assets/photos/dublin-hapenny-bridge.jpg';
import liffey from '../assets/photos/dublin-river-liffey.jpg';

export const photos = {
  liffey: {
    src: liffey,
    alt: 'The River Liffey in Dublin city centre, with the dome of the Four Courts in the distance',
    caption: 'Dublin city centre',
    credit: 'NIR HIMI on Unsplash',
    source: 'https://unsplash.com/photos/PqV0ZkxTO4Q',
  },
  hapenny: {
    src: hapenny,
    alt: "The Ha'penny Bridge over the River Liffey in Dublin on a bright day",
    caption: "Ha'penny Bridge, Dublin",
    credit: 'Sophie Popplewell on Unsplash',
    source: 'https://unsplash.com/photos/blDB0HbjB1k',
  },
  airport: {
    src: airport,
    alt: 'Travellers with suitcases walking through a bright airport walkway',
    caption: null,
    credit: 'Briana Tozour on Unsplash',
    source: 'https://unsplash.com/photos/rUXh5USKfUQ',
  },
} as const;

export type PhotoKey = keyof typeof photos;
