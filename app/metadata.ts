import type { Metadata } from 'next';

export const sharedOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  locale: 'en_US',
  siteName: 'ListHook',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'ListHook',
    },
  ],
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL('https://listhook.com'),
  openGraph: sharedOpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: '@listhook',
    creator: '@listhook',
  },
};
