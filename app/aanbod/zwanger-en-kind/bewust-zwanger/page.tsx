import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

const routes = [
  {
    naam: 'Momtrail Pause',
    duur: '3 maanden',
    sessies: '6 sessies',
    prijs: '€997',
    termijnen: '3 x €349',
    tekst: 'Voor als je eerst weer op adem wilt komen. We brengen rust in je lijf en je hoofd, werken aan angsten rondom de bevalling en geven je handvatten die je meteen kunt gebruiken.',
    populair: false,
  },
  {
    naam: 'Momtrail Reset',
    duur: '4 maanden',
    sessies: '8 sessies',
    prijs: '€1147',
    termijnen: '3 x €399',
    tekst: 'Voor als je dieper wilt gaan. Naast rust en inzicht werken we aan patronen uit je eigen verleden die nu naar boven komen. Er is tijd om het te oefenen en bij te sturen.',
    populair: true,
  },
  {
    naam: 'Momtrail Rise',
    duur: '6 maanden',
    sessies: '10 sessies',
    prijs: '€1297',
    termijnen: '3 x €449',
    tekst: 'Voor als je de verandering blijvend wilt maken. We gaan dieper op wat er meekomt uit jouw eigen start in het leven. Je hebt de tijd om nieuwe gewoontes te laten indalen, ook door de drukke periode na de bevalling.',
    populair: false,
  },
];

const inclusief = [
  'Intake',
  'Individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Persoonlijke begeleiding via WhatsApp en voiceberichten tussen de sessies door',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Toegang tot de online leeromgeving met verdiepende opdrachten en oefeningen',
  'De Rust Reset: een programma van 7 dagen met een introductie in zenuwstelselregulatie',
];

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
        style={{ backgroundImage: "url('/fotos/IMG_8861.JPG')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
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
          We werken aan zenuwstelselregulatie en je leert somatische oefeningen om met stress om te gaan tijdens de zwangerschap, bevalling én daarna. We gaan aan de slag met hechting, voorbereiding op de kraamtijd en indien nodig met emotionele blokkades via NEI. Zo kom je straks niet alleen uitgerust, maar ook vol vertrouwen aan de finish.
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
      </div>

      {/* Routes */}
      <section className="bg-achtergrond py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>Kies jouw trail</h2>
            <p className="text-tekst/70 leading-relaxed max-w-2xl mx-auto reveal">Het verschil zit in hoeveel tijd je jezelf geeft.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {routes.map(r => (
              <div key={r.naam} className={`rounded-3xl p-9 flex flex-col reveal ${r.populair ? 'bg-primair shadow-xl' : 'bg-wit shadow-sm border border-primair/10'}`}>
                {r.populair && (
                  <span className="inline-block bg-achtergrond text-primair text-xs font-bold px-3 py-1.5 rounded-full mb-5 self-start tracking-widest uppercase">meest gekozen</span>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${r.populair ? 'text-achtergrond' : 'text-primair'}`} style={{ fontFamily: 'var(--font-buydog)' }}>{r.naam}</h3>
                <p className={`mb-5 ${r.populair ? 'text-achtergrond/80' : 'text-tekst/60'}`}>
                  <span className="text-lg font-semibold">{r.duur}</span>
                  <span className="text-sm"> · {r.sessies}</span>
                </p>
                <p className={`leading-relaxed text-sm flex-1 mb-8 ${r.populair ? 'text-achtergrond/85' : 'text-tekst/70'}`}>{r.tekst}</p>
                <div className={`border-t pt-6 ${r.populair ? 'border-achtergrond/20' : 'border-primair/10'}`}>
                  <p className={`text-4xl font-bold ${r.populair ? 'text-achtergrond' : 'text-primair'}`}>{r.prijs}</p>
                  <p className={`text-sm mt-1.5 ${r.populair ? 'text-achtergrond/55' : 'text-tekst/40'}`}>of {r.termijnen}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-wit border border-primair/15 rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <p className="font-bold text-tekst mb-1">Vragen over (werkgevers)vergoeding, termijnen of hoe het in de praktijk werkt?</p>
              <p className="text-tekst/60 text-sm">Antwoorden op de meest gestelde vragen staan op één plek.</p>
            </div>
            <Link href="/faq" className="inline-block bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shrink-0 text-sm">
              Veelgestelde vragen →
            </Link>
          </div>

          <div className="bg-wit rounded-3xl p-10 shadow-sm">
            <h3 className="text-lg font-bold text-primair mb-5">Bij elke route inbegrepen</h3>
            <ul className="space-y-3.5">
              {inclusief.map(i => (
                <li key={i} className="flex items-start gap-3 text-tekst/80">
                  <Kompas />
                  {i}
                </li>
              ))}
            </ul>
            <p className="text-tekst/60 text-sm leading-relaxed mt-6 border-t border-primair/10 pt-5">
              Heb je al een Trailstart gedaan en stap je binnen 7 dagen in? Dan wordt de €97 verrekend én krijg je het volledige traject als extra sessie cadeau.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Klaar om met vertrouwen je zwangerschap in te gaan?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Plan een kennismaking →
            </Link>
            <Link href="/aanbod/trailstart" className="inline-block border-2 border-wit text-wit font-bold px-8 py-3 rounded-full hover:bg-wit/10 transition-colors">
              Plan je Trailstart →
            </Link>
          </div>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
