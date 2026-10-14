import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = {
  title: 'Speciaal aanbod – Bewust Zwanger | Momtrail',
  robots: { index: false, follow: false },
};

const inbegrepen = [
  'Kosteloze kennismaking/intake',
  '3 individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Whatsapp-begeleiding tussendoor voor een check-in na een sessie en bij vragen',
  '2 telefonische contactmomenten tussen de sessies voor afstemming en ondersteuning',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Vanaf september: 6 maanden toegang tot de online leeromgeving',
  'Toegang tot de Rust Reset: 7 dagen introductie in zenuwstelselregulatie',
  'Een persoonlijk cadeau bij de start',
];

export default function SpeciaalAanbodZwangerPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
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
        <p className="text-tekst/80 leading-relaxed mb-12 text-lg reveal">
          Ik ben blij dat je hier bent! Via deze pagina ontvang jij een speciaal aanbod voor het Bewust Zwanger traject. Een zwangerschap verandert iets — niet alleen fysiek, maar ook emotioneel. Ik begeleid je zodat je niet alleen fysiek, maar ook van binnenuit klaar bent voor wat er komen gaat.
        </p>

        {/* Herken je dit */}
        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-2">Herken je dit?</h2>
          <p className="text-tekst/70 mb-6">Je bent zwanger... en ergens voelt het ook spannend. Misschien merk je:</p>
          <ul className="space-y-3">
            {[
              'Je bent sneller overprikkeld dan normaal',
              'Oude thema\'s komen ineens boven',
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
          <p className="text-tekst/80 mt-6 font-medium">Dat is heel normaal. En er is iets aan te doen.</p>
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
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          We werken aan zenuwstelselregulatie en je leert somatische oefeningen om met stress om te gaan tijdens de zwangerschap, bevalling én daarna. We gaan aan de slag met hechting, voorbereiding op de kraamtijd en als het nodig is ook met emotionele blokkades via NEI of de biotensor. Zo kom je straks niet alleen uitgerust, maar ook vol vertrouwen aan de finish.
        </p>

        {/* Prijsblok met korting */}
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-8 reveal">
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-primair">Jouw exclusieve aanbod</h2>
            <span className="bg-accent text-wit text-sm font-bold px-3 py-1 rounded-full">10% korting</span>
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
              <p className="text-tekst/40 line-through text-xl">€417</p>
            </div>
            <p className="text-tekst/60 text-sm">Betalen in termijnen is mogelijk. Wil je een traject op maat? Bespreek het tijdens de kennismaking.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">
            Klaar om met vertrouwen je zwangerschap in te gaan?
          </h2>
          <p className="text-achtergrond/80 mb-6">
            Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan een kennismaking →
          </Link>
        </div>

      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
