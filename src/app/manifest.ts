import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BinnaDev Lab',
    short_name: 'BinnaDev',
    description: 'An elite engineering laboratory where developers are trained to architect secure smart contracts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#6B3FA0',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
