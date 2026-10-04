import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';
import StickyPodcast from '@/components/StickyPodcast';

export const metadata: Metadata = { title: 'Littletrail traject' };

const klachten = [
  'Snel boos of verdrietig zijn',
  'Heftig reageren op kleine dingen',
  'Moeilijk in slaap vallen of vaak wakker worden',
  'Veel piekeren of spanning in hun lijf hebben',
  'Lichamelijke klachten zoals buikpijn, hoofdpijn of eczeem',
  'Snel overprikkeld zijn',
  'Moeite hebben met concentratie',
  'Zich terugtrekken of juist explosief reageren',
  'Heimwee',
  'Zindelijkheidsproblemen',
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
            Herken je dit? Je maakt je zorgen en je hoofd blijft malen, omdat jullie al een tijdje vastlopen. Je kind is niet happy. Is er wat mis met hem of haar? Of pakken jullie het verkeerd aan? Jullie ervaren <strong>strijd en gedoe.</strong> Het gaat in elk geval niet zo makkelijk als het bij anderen lijkt te gaan.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Je hebt Chat GPT geraadpleegd, vriendinnen om tips gevraagd, maar je komt geen steek verder. Ondertussen begin je te <strong>twijfelen aan jezelf...</strong>
          </p>
          <p className="text-tekst/80 leading-relaxed">
            Misschien is er in het reguliere circuit al gekeken naar de (fysieke) klacht en behandeld. Zonder resultaat. Er zijn adviezen gegeven, maar het voelt alsof er iets meer onder zit. Je wilt niet alleen aan symptoombestrijding doen, maar <strong>begrijpen wat je kind probeert te vertellen.</strong>
          </p>
        </div>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Het Littletrail traject is een traject waar we zes weken lang <strong>verder gaan kijken dan de klacht.</strong> Niet alleen naar wat zichtbaar is, maar juist naar wat eronder ligt.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <p className="text-achtergrond/90 leading-relaxed italic">
            Hoe zou het voor jullie zijn als er weer rust is voor je kind én jou? Stel je voor: je ziet een vrolijker, vrijer kind en er is minder spanning in huis. Je kind kan beter met emoties omgaan of die (fysieke) klacht is eindelijk over. En jij hebt als ouder weer het gevoel dat alles onder controle is. Dat is mogelijk als we samen aan de slag gaan met de <strong className="text-achtergrond">échte boodschap achter het gedrag of de klacht.</strong>
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
          Dit traject is voor jullie als je merkt dat je kind vastloopt, maar je weet niet precies waarom. Praten of strenger zijn werkt niet. Je voelt dat het geen lastig gedrag is, maar dat er een boodschap achter gedrag zit. Of je hebt het gevoel dat het lijf of de klacht van je kind je iets vertelt.
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

      {/* Zo ziet het traject eruit - rode sectie */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-8 reveal">Zo ziet het traject eruit</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-wit/15 border border-achtergrond/20 rounded-2xl p-6 reveal">
              <h3 className="font-bold text-achtergrond mb-2">Kennismaking & intake</h3>
              <p className="text-achtergrond/80 leading-relaxed">
                Telefonisch of via Google Meet. We brengen samen jullie hulpvraag in kaart en bekijken of het traject passend is. <strong className="text-achtergrond">Dit gesprek is kosteloos.</strong> Wil je starten? Dan ontvang je de Zenuwstelsel Check en een vragenlijst over de zwangerschap en geboorte die je (tenminste) drie dagen voor de eerste sessie terugstuurt.
              </p>
            </div>
            <div className="bg-wit/15 border border-achtergrond/20 rounded-2xl p-6 reveal">
              <h3 className="font-bold text-achtergrond mb-2">Tijdens de sessies</h3>
              <p className="text-achtergrond/80 leading-relaxed">
                In twee sessies gaan we dieper in op welke invloed de zwangerschap en geboorte heeft op je kind. Afhankelijk van de klacht gebruiken we verschillende methodes, zoals <strong className="text-achtergrond">NEI, EFT of zenuwstelselregulatie-technieken.</strong> In sommige gevallen doen we een sessie gericht op één van de ouders of het gezin als daar belangrijke aanknopingspunten liggen.
              </p>
            </div>
            <div className="bg-wit/15 border border-achtergrond/20 rounded-2xl p-6 reveal">
              <h3 className="font-bold text-achtergrond mb-2">Begeleiding tussendoor</h3>
              <p className="text-achtergrond/80 leading-relaxed">
                Er is Whatsapp-begeleiding tussen de sessies in. Het kan zijn dat jullie gerichte oefeningen krijgen om samen te doen. Na ongeveer één à twee weken na de tweede sessie hebben we contact om te evalueren en het traject af te ronden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">De investering</h2>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Het traject duurt gemiddeld anderhalve maand. Geen quick fix, maar we gaan voor <strong>echte verandering.</strong> Inclusief kennismaking/intake, overzicht van geboortepatronen, twee sessies van 60-75 min., Whatsappbegeleiding gedurende zes weken en een telefonisch evaluatiecontact.
          </p>
          <p className="text-3xl font-bold text-primair">€299</p>
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking en intake is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken dan samen naar jouw hulpvraag en of het Littletrail traject aansluit bij jullie.</p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
      <StickyPodcast />
    </>
  );
}
