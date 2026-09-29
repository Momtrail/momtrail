import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: '1 op 1 Bewust Zwanger' };

const herkenJeDit = [
  'Je bent sneller overprikkeld dan normaal',
  'Oude thema\'s komen ineens boven',
  'Je twijfelt aan jezelf',
  'Je lijf geeft signalen dat je wat rustiger aan mag doen',
  'Je voelt angst voor de bevalling',
  'Je kunt moeilijk ontspannen',
];

const hoeZouHetZijn = [
  'Je hoofd en zenuwstelsel kunnen tot rust komen, ook bij spanning',
  'Je begrijpt waar jouw emoties vandaan komen',
  'Je voelt vertrouwen in je bevalling',
  'Oude stukken worden niet doorgegeven',
];

const reviews = [
  { naam: 'Lonneke', tekst: 'Ik voel me vaker ontspannen, neem sneller rust en krijg steeds meer vertrouwen in de zwangerschap. Het is fijn om vaker te verbinden met mijn kindje.' },
  { naam: 'Sara',    tekst: 'De oefeningen die je thuis kan doen zijn heel fijn. Ik merk meer rust in mezelf sinds ik ben gestart. Er wordt echt geluisterd naar je. Mijn angst voor de bevalling is zoveel minder.' },
];

export default function BewustZwangerPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/zwanger-en-kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Zwanger & Baby</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Bewust Zwanger</h1>
          <p className="text-achtergrond/80 text-xl italic">Ontspannen zwanger zijn, van binnen en van buiten</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 leading-relaxed mb-16 text-lg reveal">
          Een zwangerschap verandert iets. Niet alleen fysiek, maar ook emotioneel. Oude thema's komen boven, je lijf vraagt meer aandacht en de bevalling nadert. In het Momtrail traject begeleid ik je zodat je niet alleen fysiek, maar ook van binnenuit klaar bent voor wat er komen gaat.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-2">Herken je dit?</h2>
          <p className="text-tekst/70 mb-6">Je bent zwanger... en ergens voelt het ook spannend. Misschien merk je:</p>
          <ul className="space-y-3">
            {herkenJeDit.map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-tekst/80 mt-6 font-medium">Dat is heel normaal. En er is iets aan te doen.</p>
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">Hoe zou het zijn als...</h2>
          <ul className="space-y-3">
            {hoeZouHetZijn.map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <Kompas className="text-achtergrond/60 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/IMG_2748 2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 10%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;trust your body. it knows the way.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat we samen doen</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          We werken aan zenuwstelselregulatie en je leert somatische oefeningen om met stress om te gaan tijdens de zwangerschap, bevalling én daarna. We gaan aan de slag met hechting, voorbereiding op de kraamtijd en als het nodig is ook met emotionele blokkades via NEI of de biotensor. Zo kom je straks niet alleen uitgerust, maar ook vol vertrouwen aan de finish.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 mt-12 reveal">Wat anderen zeggen</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {reviews.map(r => (
            <div key={r.naam} className="bg-achtergrond rounded-2xl p-6 reveal flex flex-col">
              <p className="text-tekst/80 leading-relaxed italic flex-1 mb-4">&ldquo;{r.tekst}&rdquo;</p>
              <p className="font-bold text-primair">{r.naam}</p>
            </div>
          ))}
        </div>

        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-6">De investering</h2>
          <ul className="space-y-3 mb-8">
            {[
              'Kosteloze kennismaking/intake',
              '3 individuele sessies van 75 minuten, in mijn praktijkruimte of online',
              'Whatsapp-begeleiding tussendoor voor een check-in na een sessie en bij vragen',
              '2 telefonische contactmomenten tussen de sessies door voor afstemming, vragen en ondersteuning',
              'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
              'Vanaf september: 6 maanden toegang tot de online leeromgeving',
              'Toegang tot de Rust Reset: een programma van 7 dagen met een introductie in zenuwstelselregulatie',
              'Een persoonlijk cadeau bij de start',
            ].map(i => (
              <li key={i} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {i}
              </li>
            ))}
          </ul>
          <div className="border-t border-primair/10 pt-6">
            <p className="text-4xl font-bold text-primair mb-2">€417</p>
            <p className="text-tekst/60 text-sm">Betalen in termijnen is mogelijk. Wil je liever een korter of langer traject op maat? Bespreek het tijdens de kennismaking.</p>
          </div>
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Klaar om met vertrouwen je zwangerschap in te gaan?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong></p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
