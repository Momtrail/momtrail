import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

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

const naDitTraject = [
  'Voel je bewuste verbinding met je baby',
  'Zijn angsten en stress verminderd',
  'Kijk je uit naar de bevalling en de komst van je baby',
  'Kun je makkelijker en sneller schakelen van stressvolle naar rustmomenten (skills die je in de tropenjaren zeker nog van pas komen!)',
  'Heb je vertrouwen in jezelf als moeder',
  'Weet jij hoe je vanaf de zwangerschap al een hechte band met je kindje opbouwt',
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
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>1 op 1 Bewust Zwanger</h1>
          <p className="text-achtergrond/80 text-xl italic">Bewust zwanger, van binnen en van buiten</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 leading-relaxed mb-16 text-lg reveal">
          Met de <strong>Bewust Zwanger methode</strong> werken we aan ontspannen zwanger zijn en bereid je je ook emotioneel en lichamelijk voor op de bevalling en het vierde trimester. Deze methode is heel geschikt om 1 op 1 te volgen, als je wat meer persoonlijke aandacht wil of dieper in wil gaan op angsten, zorgen, stress of het verbinden met je baby.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-2">Herken je dit?</h2>
          <p className="text-tekst/70 mb-6">Je bent zwanger... en ergens voelt het ook spannend. Misschien merk je:</p>
          <ul className="space-y-3">
            {herkenJeDit.map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-tekst/80 mt-6 font-medium">Een zwangerschap verandert iets. Niet alleen fysiek, maar ook emotioneel.</p>
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">Hoe zou het zijn als...</h2>
          <ul className="space-y-3">
            {hoeZouHetZijn.map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <span className="text-achtergrond/60 mt-1 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat we samen doen</h2>
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          In dit 1 op 1 traject werken we aan <strong>zenuwstelselregulatie</strong> en leer je verschillende somatische oefeningen om met stress om te gaan tijdens de zwangerschap, bevalling én daarna. Je leert alles over hechting en hoe je voor een fijne kraamtijd kan zorgen. We kunnen in de sessies ook via NEI en de biotensor aan emotionele blokkades werken.
        </p>

        <div className="border-l-4 border-accent pl-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-6">Na dit traject</h2>
          <ul className="space-y-3">
            {naDitTraject.map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">De investering</h2>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Dit traject is inclusief intake, 4 sessies (75 min), map met oefeningen, informatie en infographics en contactmomenten via Whatsapp tussendoor.
          </p>
          <p className="text-3xl font-bold text-primair mb-2">€499</p>
          <p className="text-tekst/60 text-sm mb-4">Betalen in termijnen is mogelijk.</p>
          <p className="text-tekst/80 text-sm">Wil je liever een korter of langer traject op maat? Plan dan een kennismaking om je wensen te bespreken.</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat anderen zeggen</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {reviews.map(r => (
            <div key={r.naam} className="bg-achtergrond rounded-2xl p-6 reveal flex flex-col">
              <p className="text-tekst/80 leading-relaxed italic flex-1 mb-4">&ldquo;{r.tekst}&rdquo;</p>
              <p className="font-bold text-primair">{r.naam}</p>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je meer weten of kennismaken?</h2>
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
