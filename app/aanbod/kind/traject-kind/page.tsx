import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';
import StickyPodcast from '@/components/StickyPodcast';

export const metadata: Metadata = { title: 'Littletrail traject' };

const klachten = [
  'Driftbuien, snel boos of verdrietig zijn',
  'Faalangst, veel piekeren of spanning in het lijf',
  'Moeilijk in slaap vallen of vaak wakker worden',
  'Onrust, snel overprikkeld zijn of moeite met concentratie',
  'Heftig reageren op kleine dingen, of zich juist terugtrekken',
  'Lichamelijke klachten zoals buikpijn, hoofdpijn of eczeem',
  'Heimwee',
  'Zindelijkheidsproblemen',
  'Een overweldigende geboorte of start in het leven',
];

const stappen = [
  { nr: '1', titel: 'Gratis kennismaking', tekst: 'Telefonisch of via Google Meet brengen we jullie hulpvraag in kaart en kijken we of het traject past.' },
  { nr: '2', titel: 'Voorbereiding', tekst: 'Je ontvangt de Zenuwstelsel Check en een vragenlijst over de zwangerschap en geboorte, die je minimaal drie dagen voor de eerste sessie terugstuurt.' },
  { nr: '3', titel: 'De sessies', tekst: 'We kijken onder andere naar de invloed van de zwangerschap en geboorte op je kind, en werken op de energetische laag, bijvoorbeeld met de biotensor of met systemisch werk. Afhankelijk van de klacht gebruik ik methodes zoals NEI, EFT en zenuwstelselregulatie. Er zijn ook sessies die over jou gaan: over wat jij als ouder meeneemt, en hoe we de balans in jullie gezin herstellen.' },
  { nr: '4', titel: 'Begeleiding tussendoor', tekst: 'Via WhatsApp en voiceberichten kun je bij me terecht, juist op de momenten dat het thuis knelt. Je krijgt oefeningen om thuis samen te doen.' },
  { nr: '5', titel: 'Afronding', tekst: 'We evalueren wat er veranderd is en wat jullie nog nodig hebben.' },
];

const routes = [
  {
    naam: 'Littletrail Explore',
    duur: '2 maanden',
    sessies: '4 sessies',
    prijs: '€697',
    termijnen: '3 x €249',
    tekst: 'Voor als je wilt ontdekken wat er echt speelt. We brengen de boodschap achter het gedrag in kaart en je krijgt concrete handvatten voor thuis.',
    populair: false,
  },
  {
    naam: 'Littletrail Pause',
    duur: '3 maanden',
    sessies: '6 sessies',
    prijs: '€997',
    termijnen: '3 x €349',
    tekst: 'Voor als jullie weer op adem willen komen. Er is meer tijd om het thuis te oefenen: we kijken wat werkt, sturen bij en kijken ook naar wat er van jou meespeelt.',
    populair: true,
  },
  {
    naam: 'Littletrail Reset',
    duur: '4 maanden',
    sessies: '8 sessies',
    prijs: '€1147',
    termijnen: '3 x €399',
    tekst: 'Voor als je het thuis echt anders wilt. Naast handvatten voor je kind werken we aan je eigen rust en patronen, zodat het in jullie gezin blijvend anders gaat.',
    populair: false,
  },
];

const inclusief = [
  'Een gratis kennismaking',
  'Sessies van 60 tot 75 minuten, in mijn praktijkruimte of online',
  'De Zenuwstelsel Check en een overzicht van de geboortepatronen van je kind',
  'Persoonlijke begeleiding via WhatsApp en voiceberichten tussen de sessies door',
  'Oefeningen om thuis samen te doen',
  'Een evaluatiemoment aan het eind',
];

export default function TrajectKindPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Kind</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Littletrail traject</h1>
          <p className="text-achtergrond/80 text-xl italic">verder dan de klacht kijken, naar wat je kind écht nodig heeft</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Herken je dit? Je maakt je zorgen en je hoofd blijft malen, omdat jullie al een tijdje vastlopen. Misschien heeft je kind driftbuien, faalangst of slaapproblemen, of is het onrustig. Je kind is niet happy. Is er iets mis met hem of haar? Of pakken jullie het verkeerd aan? Jullie ervaren <strong>strijd en gedoe</strong>, en het gaat in elk geval niet zo makkelijk als het bij anderen lijkt te gaan.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Je hebt ChatGPT geraadpleegd en vriendinnen om tips gevraagd, maar je komt geen steek verder. Ondertussen begin je te <strong>twijfelen aan jezelf.</strong>
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Misschien is er in het reguliere circuit al naar de klacht gekeken. Er zijn adviezen gegeven, maar het voelt alsof er iets meer onder zit. Je wilt niet alleen aan symptoombestrijding doen, maar <strong>begrijpen wat je kind probeert te vertellen.</strong>
          </p>
          <p className="font-bold text-tekst">
            Met alleen praten kom je er niet. Niet voor jou, en niet voor je kind.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Jij bent de sleutel</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          In Littletrail werk ik meestal met jou als ouder, niet rechtstreeks met je kind. Jij kent je kind het best, en jij bent er elke dag. Als jij begrijpt wat er onder het gedrag ligt en weet wat je kind van je nodig heeft, verandert er thuis het meest. Of je kind een keer meekomt, bepalen we in overleg; dat hangt vooral af van de leeftijd.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Kinderen spiegelen vaak wat er in hun omgeving speelt. Daarom kijken we in Littletrail ook echt naar jou: welke ervaringen, patronen en spanning neem jij mee in je ouderschap? Daar besteden we bewust een of meer sessies aan. Niet omdat jij het fout doet, maar omdat er thuis het meest verandert als de <strong>balans in jullie gezin</strong> hersteld wordt. Als jij meer rust voelt, krijgt je kind de ruimte om ook tot rust te komen.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <p className="text-achtergrond/90 leading-relaxed italic">
            Hoe zou het voor jullie zijn als er weer rust is, voor je kind én voor jou? Stel je voor: je ziet een vrolijker, vrijer kind en er is minder spanning in huis. Je kind gaat beter met zijn emoties om, en veel ouders merken dat ook lichamelijke klachten afnemen. En jij hebt weer vertrouwen in jezelf als ouder. Dat is waar we samen aan werken: aan de <strong className="text-achtergrond">échte boodschap achter het gedrag of de klacht.</strong>
          </p>
        </div>

      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/IMG_3370 2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;children are not problems to be fixed. they are people to be heard.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Voor wie is dit traject?</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Dit traject is voor jullie als je merkt dat je kind vastloopt, maar je niet precies weet waarom. Praten of strenger zijn werkt niet. Je voelt dat het geen lastig gedrag is, maar dat er een boodschap achter zit. Of je hebt het gevoel dat het lijf of de klacht van je kind je iets vertelt.
        </p>

        <div className="border-l-4 border-accent pl-8 mb-16 reveal">
          <p className="font-semibold text-tekst mb-4">Klachten die ik vaak terugzie:</p>
          <ul className="space-y-2">
            {klachten.map(k => (
              <li key={k} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {k}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Zo ziet het traject eruit */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-8 reveal">Zo ziet het traject eruit</h2>
          <div className="flex flex-col gap-4">
            {stappen.map(s => (
              <div key={s.nr} className="bg-wit/15 border border-achtergrond/20 rounded-2xl p-6 flex gap-5 reveal">
                <span className="text-3xl font-bold text-achtergrond/30 shrink-0 leading-none" style={{ fontFamily: 'var(--font-buydog)' }}>{s.nr}</span>
                <div>
                  <h3 className="font-bold text-achtergrond mb-1">{s.titel}</h3>
                  <p className="text-achtergrond/80 leading-relaxed text-sm">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kies jouw trail */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>Kies jouw trail</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {routes.map(r => (
              <div key={r.naam} className={`rounded-2xl p-7 flex flex-col reveal ${r.populair ? 'bg-primair text-achtergrond ring-4 ring-primair/30' : 'bg-wit border border-primair/15'}`}>
                {r.populair && (
                  <span className="inline-block bg-achtergrond text-primair text-xs font-bold px-3 py-1 rounded-full mb-4 self-start tracking-widest uppercase">
                    meest gekozen
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${r.populair ? 'text-achtergrond' : 'text-primair'}`}>{r.naam}</h3>
                <p className={`text-sm mb-4 ${r.populair ? 'text-achtergrond/70' : 'text-tekst/50'}`}>{r.duur} · {r.sessies}</p>
                <p className={`leading-relaxed text-sm flex-1 mb-6 ${r.populair ? 'text-achtergrond/85' : 'text-tekst/70'}`}>{r.tekst}</p>
                <div className={`border-t pt-5 ${r.populair ? 'border-achtergrond/20' : 'border-primair/10'}`}>
                  <p className={`text-2xl font-bold ${r.populair ? 'text-achtergrond' : 'text-primair'}`}>{r.prijs}</p>
                  <p className={`text-sm mt-1 ${r.populair ? 'text-achtergrond/60' : 'text-tekst/40'}`}>of {r.termijnen}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-wit border border-primair/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-primair mb-5">Bij elke route inbegrepen</h3>
            <ul className="space-y-3 mb-6">
              {inclusief.map(i => (
                <li key={i} className="flex items-start gap-3 text-tekst/80">
                  <Kompas />
                  {i}
                </li>
              ))}
            </ul>
            <div className="border-t border-primair/10 pt-5 mb-4">
              <p className="text-tekst/70 text-sm leading-relaxed">
                Heb je al een Trailstart gedaan en stap je binnen 7 dagen in? Dan wordt de €97 verrekend én krijg je het volledige traject. Je Trailstart is dan een extra sessie, cadeau. Een traject kan altijd verlengd worden met een Trailpass van 3 sessies voor €397.
              </p>
            </div>
            <p className="text-tekst/60 text-sm italic">
              Merk je dat je eigen spanning of patronen een grote rol spelen? Kijk dan ook eens naar het{' '}
              <Link href="/aanbod/moeder/traject-moeder" className="font-bold text-accent hover:underline">Momtrail traject</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primair py-16 px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken samen naar je hulpvraag en of Littletrail bij jullie past. Wil je liever meteen aan de slag met één thema? Plan dan een Trailstart.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Plan een kennismaking →
            </Link>
            <Link href="/aanbod/trailstart" className="inline-block border-2 border-achtergrond/50 text-achtergrond font-bold px-8 py-3 rounded-full hover:border-achtergrond transition-colors">
              Plan je Trailstart →
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
      <StickyPodcast />
    </>
  );
}
