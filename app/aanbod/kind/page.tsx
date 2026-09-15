import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Kind' };

const aanbod = [
  {
    titel: '1 op 1 traject kind (1 maand)',
    tekst: 'Maak je je zorgen om je kind? Ervaart hij of zij lichamelijke of emotionele klachten? Binnen een maand zorgen we er samen voor dat er weer vertrouwen en rust komt. Happy kid, happy mom!',
    slug: 'traject-kind',
  },
  {
    titel: 'Het Leerfundament',
    tekst: 'Drie sessies waarin we kijken wat je kind nodig heeft om weer tot leren te komen op school. We brengen zenuwstelsel, blokkades en de impact van de geboorteperiode in kaart, zodat er rust, veiligheid en ruimte voor ontwikkeling ontstaat.',
    slug: 'leerfundament',
  },
  {
    titel: 'Hartbewust Kids cursus',
    tekst: 'Een cursus van 10 weken voor kinderen van 6 tot 12 jaar. Spelenderwijs leren ze weer rust te voelen, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn.',
    slug: 'hartbewust-kids',
  },
];

export default function KindPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>
      <h1 className="text-3xl font-bold text-primair mb-12 reveal">Kind</h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {aanbod.map(item => (
          <div key={item.titel} className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10 flex flex-col reveal">
            <h2 className="text-xl font-bold text-primair mb-3">{item.titel}</h2>
            <p className="text-tekst/70 leading-relaxed flex-1 mb-4">{item.tekst}</p>
            <Link href={`/aanbod/kind/${item.slug}`} className="font-bold text-accent hover:underline">
              Meer info →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center reveal">
        <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Plan een kennismaking →
        </Link>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </section>
  );
}
