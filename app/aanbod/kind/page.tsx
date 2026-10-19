import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Kind' };

const aanbod = [
  {
    titel: 'Trailstart',
    tekst: 'Een losse sessie rond één thema, één stap vooruit voor je kind. We duiken direct in wat nu het meest speelt. Stap je binnen 7 dagen in een traject? Dan wordt de sessie verrekend.',
    href: '/aanbod/trailstart',
  },
  {
    titel: 'Littletrail traject',
    tekst: 'Maak je je zorgen om je kind? In dit traject werk ik meestal met jou als ouder, niet rechtstreeks met je kind. We kijken verder dan het gedrag: naar de echte boodschap achter driftbuien, faalangst, slaapproblemen of onrust. Een traject van 2, 3 of 4 maanden. Happy kid, happy mom!',
    href: '/aanbod/kind/traject-kind',
  },
  {
    titel: 'Hartbewust Kids cursus',
    tekst: 'Een cursus van 10 weken voor kinderen van 6 tot 12 jaar. Spelenderwijs leren ze weer rust te voelen, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn.',
    href: '/aanbod/kind/hartbewust-kids',
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
            <Link href={item.href} className="font-bold text-accent hover:underline">
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
