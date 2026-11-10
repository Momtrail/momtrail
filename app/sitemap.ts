import type { MetadataRoute } from 'next';

const base = 'https://www.momtrail.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                             changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/over-mij`,                              changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/werkwijze`,                             changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aanbod`,                                changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aanbod/moeder`,                         changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aanbod/moeder/traject-moeder`,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aanbod/moeder/trailpass`,               changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/aanbod/moeder/somatic-yoga`,            changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/aanbod/kind`,                           changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aanbod/kind/traject-kind`,              changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aanbod/kind/leerfundament`,             changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/aanbod/kind/hartbewust-kids`,           changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/aanbod/trailstart`,                     changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aanbod/zwanger-en-kind`,                changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aanbod/zwanger-en-kind/bewust-zwanger`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aanbod/zwanger-en-kind/new-mom-new-baby`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aanbod/zwanger-en-kinderwens`,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/aanbod/ambulante-begeleiding`,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                               changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,                                   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gratis`,                                changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/agenda`,                                changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${base}/blog`,                                  changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog/zenuwstelsel-uitgelegd`,           changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/burnout-moeder`,                   changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/moederschap-en-identiteit`,        changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/waarom-je-kind-ontploft`,          changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
