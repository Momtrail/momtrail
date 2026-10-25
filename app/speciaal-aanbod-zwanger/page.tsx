import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = {
  title: 'Speciaal aanbod – Bewust Zwanger | Momtrail',
  robots: { index: false, follow: false },
};

const inbegrepen = [
  'Intake',
  '3 individuele sessies van 60 minuten, in mijn praktijkruimte of online',
  'Whatsapp-begeleiding tussendoor voor een check-in na een sessie en bij vragen',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Toegang tot de online leeromgeving ten tijde van het traject',
  'Toegang tot de Rust Reset: 7 dagen introductie in zenuwstelselregulatie',
];

export default function SpeciaalAanbodZwangerPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative py-24 px-6"
        style={{ backgroundImage: "url('/fotos/IMG_8861.JPG')", backgroundSize: 'cover', backgroundPosition: 'center 50%' }}
      >
        <div className="absolute inset-0 bg-primair/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent text-wit text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Exclusief aanbod
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-achtergrond mb-4" style={{ fontFamily: 'var(--font-buydog)' }}>
            Bewust Zwanger
          </h1>
          <p className="text-achtergrond/80 text-xl italic">
            Ontspannen zwanger zijn, van binnen en van buiten
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro */}
        <p className="text-tekst/80 leading-relaxed mb-4 text-lg reveal">
          Leuk dat je hier bent! Omdat je bij Shalamayura komt, ontvang je een speciaal aanbod.
        </p>
        <p className="text-tekst font-semibold text-xl leading-relaxed mb-4 reveal">
          Je krijgt namelijk een gratis sessie cadeau van Momtrail!
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 text-lg reveal">
          We focussen op 1 thema. Wil je daarna verder met meerdere thema's? Dan kun je altijd instappen in het traject.
        </p>

        {/* Herken je dit */}
        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-2">Herken je dit?</h2>
          <p className="text-tekst/70 mb-6">Je bent zwanger... en ergens voelt het ook spannend. Misschien merk je:</p>
          <ul className="space-y-3">
            {[
              'Je bent sneller overprikkeld dan normaal',
              'Oude thema\'s komen ineens boven, zoals hoe je zelf bent opgevoed, de relatie met je ouders, of patronen die je liever niet doorgeeft',
              'Je twijfelt aan jezelf',
              'Je lijf geeft signalen dat je wat rustiger aan mag doen',
              'Je voelt angst voor de bevalling',
              'Je kunt moeilijk ontspannen',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hoe zou het zijn */}
        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">Hoe zou het zijn als...</h2>
          <ul className="space-y-3">
            {[
              'Je hoofd en zenuwstelsel kunnen tot rust komen, ook bij spanning',
              'Je begrijpt waar jouw emoties vandaan komen',
              'Je voelt vertrouwen in je bevalling',
              'Oude stukken worden niet doorgegeven',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <Kompas className="text-achtergrond/60 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Wat we doen */}
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat we samen doen</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          We beginnen met wat er bij jou speelt. Misschien is dat ontspanning en rust in je lijf, misschien is het voorbereiding op de bevalling, of juist iets van vroeger dat nu de kop opsteekt. Dat bepalen we voor elke sessie samen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          Ik stem de sessies af op de thema's waar jij mee wil werken. Zo wordt het traject echt iets waar jij wat aan hebt.
        </p>

        {/* Prijsblok met korting */}
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-8 reveal">
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-primair">Jouw exclusieve aanbod</h2>
          </div>
          <ul className="space-y-3 mb-8">
            {inbegrepen.map(i => (
              <li key={i} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {i}
              </li>
            ))}
          </ul>
          <div className="border-t border-primair/10 pt-6">
            <div className="flex items-baseline gap-3 mb-1">
              <p className="text-4xl font-bold text-primair">€375</p>
            </div>
            <p className="text-tekst/60 text-sm">Betalen in termijnen is mogelijk. Wil je iets bespreken? Dat doen we tijdens de intake.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">
            Klaar om met vertrouwen je zwangerschap in te gaan?
          </h2>
          <a
            href="https://calendly.com/momtrail/consult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan hier je gratis sessie →
          </a>
        </div>

        <p className="text-center text-tekst/50 text-sm mt-8 reveal">
          Meer weten over Bewust Zwanger?{' '}
          <Link href="/aanbod/zwanger-en-kind/bewust-zwanger" className="underline hover:text-primair transition-colors">
            Bekijk het volledige traject →
          </Link>
        </p>

      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
