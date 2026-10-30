import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: 'Mindful Moms' };

const herken = [
  'Je staat de hele dag klaar voor je gezin, maar weinig voor jezelf',
  'Je voelt spanning, vermoeidheid of een leegte die je niet goed kunt plaatsen',
  'Je bent snel overprikkeld en verlangt naar een moment van echte stilte',
  'Je wil meer bij jezelf zijn, maar weet niet goed hoe',
  'Je wil weer voelen wie jij bent, los van het moederschap',
];

const opbouw = [
  {
    titel: 'In je lijf landen',
    tekst: 'We beginnen met zachte somatische en yoga-oefeningen: rekken, ademen en spanning loslaten. Niet vanuit je hoofd, maar door te voelen wat er te voelen is.',
  },
  {
    titel: 'Mindfulness in beweging',
    tekst: 'Daarna gaan we aan de slag met mindfulness, en dat kan elke ochtend anders zijn: ademwerk, hartcoherentie, journalen, een visualisatieopstelling of een creatieve oefening. Elke ochtend heeft een eigen thema.',
  },
  {
    titel: 'Verbinden met andere moeders',
    tekst: 'Je deelt de ochtend met vrouwen die begrijpen wat jij meemaakt. Niets moet, alles mag. Alleen luisteren is ook goed.',
  },
];

const voordelen = [
  'Je lijf komt tot rust',
  'Je voelt weer wat er in de drukte van het gezin onder blijft',
  'Je gaat naar huis met een nieuw inzicht voor jezelf',
  'Je verbindt met moeders die je snappen',
];

const faq = [
  { vraag: 'Heb ik ervaring nodig met yoga of mindfulness?', antwoord: 'Nee. Alle oefeningen zijn zacht en je doet alles op je eigen tempo.' },
  { vraag: 'Moet ik iets delen met de groep?', antwoord: 'Nee. Het is fijn om ervaringen met andere moeders te delen, maar alles mag en niets moet. Alleen luisteren is ook goed.' },
  { vraag: 'Kan ik een vriendin meenemen?', antwoord: 'Ja, graag! Kies "samen met een vriendin", dan betalen jullie €55 voor twee plekken.' },
  { vraag: 'Kan ik meerdere ochtenden boeken?', antwoord: 'Ja. Vink gewoon meerdere data aan. Kom je vaker, dan is de viermaal-kaart voordeliger: vier ochtenden naar keuze binnen zes maanden voor €110.' },
  { vraag: 'Hoe werkt de viermaal-kaart?', antwoord: 'Je betaalt €110 voor vier ochtenden naar keuze binnen zes maanden. Laat me na je aankoop per mail weten welke ochtenden je komt, dan reserveer ik je plek.' },
];

export default function MindfulMomsPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Mindful Moms</h1>
          <p className="text-achtergrond/80 text-xl italic">Een zondagochtend voor jou, even geen mama-modus</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 leading-relaxed mb-6 text-lg reveal">
          Je lijf komt tot rust en je voelt weer wat er in jou leeft. <strong>Geen agenda, geen to-do lijst. Gewoon een ochtend helemaal voor jou.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Mindful Moms is een maandelijkse ochtend waar we beginnen in ons lijf, met zachte somatische en yoga-oefeningen om spanning los te laten, en verder gaan met mindfulness. Je zenuwstelsel mag vertragen. Je hoofd mag leegstromen. Je mag er gewoon zijn.
        </p>


        <div className="bg-achtergrond rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">Herken jij dit?</h2>
          <ul className="space-y-3">
            {herken.map(h => (
              <li key={h} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/49e4cb37-ac96-4ecf-831a-5ee5e740b17f.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 55%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            Je lichaam houdt bij wat je hoofd allang is vergeten.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Hoe ziet de ochtend eruit?</h2>
        <div className="space-y-4 mb-16">
          {opbouw.map((o, i) => (
            <div key={o.titel} className={`rounded-2xl p-6 reveal ${i === 1 ? 'bg-primair' : 'bg-wit border border-primair/10'}`}>
              <h3 className={`font-bold mb-2 ${i === 1 ? 'text-achtergrond' : 'text-primair'}`}>{o.titel}</h3>
              <p className={`leading-relaxed ${i === 1 ? 'text-achtergrond/80' : 'text-tekst/80'}`}>{o.tekst}</p>
            </div>
          ))}
        </div>

        {/* Wat je meeneemt */}
        <div className="bg-achtergrond rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">Aan het eind van de ochtend heb je...</h2>
          <ul className="space-y-3">
            {voordelen.map(v => (
              <li key={v} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Praktisch */}
        <div className="flex justify-center mb-12 reveal">
          <img
            src="/fotos/IMG_5843 2.jpg"
            alt="Mindful Moms ochtend"
            className="w-72 h-80 object-cover"
            style={{ borderRadius: '58% 42% 62% 38% / 45% 55% 45% 55%' }}
          />
        </div>

        <div className="bg-wit border border-primair/10 rounded-2xl p-6 mb-16 reveal">
          <h3 className="font-bold text-primair mb-2">Wat neem je mee?</h3>
          <p className="text-tekst/80 leading-relaxed">Trek makkelijk zittende kleding aan en neem warme sokken mee. Matten, dekentjes, thee en iets lekkers staan klaar.</p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Veelgestelde vragen</h2>
        <div className="space-y-4 mb-16">
          {faq.map((f) => (
            <div key={f.vraag} className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
              <h3 className="font-bold text-primair mb-2">{f.vraag}</h3>
              <p className="text-tekst/80 leading-relaxed">{f.antwoord}</p>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-2">Klaar voor een ochtend voor jou?</h2>
          <p className="text-achtergrond/80 mb-4">Bekijk de eerstvolgende datum in de agenda.</p>
          <Link href="/agenda" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Bekijk de agenda →
          </Link>
        </div>

      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
