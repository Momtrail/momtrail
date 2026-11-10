import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/speciaal-aanbod-zwanger' },
    sitemap: 'https://www.momtrail.nl/sitemap.xml',
  };
}
