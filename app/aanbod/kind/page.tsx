import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Kind' };

const aanbod = [
  {
    titel: 'The Little Shift',
    tekst: 'Eén sessie, één thema, één stap vooruit voor je kind. Een eenmalige kennismakingssessie van 60 tot 75 minuten. We duiken direct in wat nu het meest speelt. Besluit je daarna om het volledige traject in te stappen? Dan wordt de sessie verrekend.',
    slug: 'little-shift',
  },
  {
    titel: 'Little Trail traject',
    tekst: 'Maak je je zorgen om je kind? In dit traject werk ik meestal met jou als ouder, niet rechtstreeks met je kind. We werken o.a. op de energetische laag: met behulp van de biotensor breng ik in kaart wat er onder de oppervlakte speelt. In uitzonderingen werk ik ook direct met je kind. Binnen een maand is er meer rust en vertrouwen. Happy kid, happy mom!',
    slug: 'traject-kind',
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
