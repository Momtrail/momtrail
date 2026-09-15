import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Levenswiel from '@/components/Levenswiel';

export const metadata: Metadata = { title: 'Momtrail traject' };

const klachten = [
  'Vaak moe bent en de dag zwaar voelt om door te komen',
  'Hoofd vol zit met brainfog en je nergens echt focus hebt',
  'Weinig energie hebt om wat met je kinderen te doen',
  'Vaak op je telefoon zit te scrollen terwijl je eigenlijk wil opladen',
  'Sneller geïrriteerd of kort reageert dan je zou willen',
  'Je vaak schuldig voelt',
  'Lijf niet meewerkt, omdat je klachten hebt zoals vermoeidheid, stress of chronische pijnklachten',
];

const dieptepunten = [
  'Je hechtingsgeschiedenis en jouw start in het leven',
  'Hoe jouw zenuwstelsel reageert onder druk (en ja, die druk is enorm in het moederschap!)',
  'Patronen die je meeneemt en die je niet kunt doorbreken',
  'Relatie- en/of moederdynamieken die steeds terugkeren',
  'Regulatie, zodat je niet alleen begrijpt wat er gebeurt, maar het ook anders kunt voelen. We gaan aan de slag met ademhaling en andere technieken die stress helpen loslaten en je weer in contact brengen met al je emoties',
];

const opbrengsten = [
  'Je weet hoe je op kan laden in het dagelijks leven, ook al is het druk en chaotisch. Een dagje sauna is geen bittere noodzaak meer, maar gewoon een heerlijk dagje weg.',
  'Piekeren is verleden tijd en je begrijpt de signalen van je lijf én kan hier op tijd naar luisteren.',
  'Je maakt keuzes die goed voor jou voelen en leeft voor aan je kind wat je zo graag wil meegeven: emoties voelen en voor jezelf gaan staan.',
  'Je kijkt met compassie naar jezelf in plaats van met dat eeuwig knagende schuldgevoel.',
  'Fluitend loop je door je werkdag heen en zelfs daarna heb je nog energie over om je kind(eren) naar bed te brengen, mét geduld.',
  'In het contact met je kind ervaar je minder gemopper en kun je heldere grenzen stellen zonder te hoeven schreeuwen.',
  'Je voelt vertrouwen in het moederschap en jouw goede energie werkt aanstekelijk op je kind(eren) en partner.',
];

const inclusief = [
  'Kosteloze kennismaking/intake',
  '3 individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Whatsapp-begeleiding tussendoor voor een check-in na een sessie en bij vragen',
  '2 telefonische contactmomenten tussen de sessies door voor afstemming, vragen en ondersteuning',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Vanaf september: 6 maanden toegang tot de online leeromgeving met verdiepende opdrachten, visualisatieopstellingen en lichaamsgerichte oefeningen',
  'Toegang tot de Rust Reset: een programma van 7 dagen met een introductie in zenuwstelselregulatie',
  'Een persoonlijk cadeau bij de start (bijvoorbeeld een boek of kaartenset afgestemd op jouw hulpvraag)',
];

const reviews = [
  { naam: 'Maureen', tekst: 'Marleen heeft zowel mij als mijn zoontje goed geholpen met verschillende hulpvragen. Haar consulten zijn down to earth, wat ik persoonlijk heel prettig vind. Ze is geïnteresseerd, stelt goede vragen en is ook nog eens gezellig.' },
  { naam: 'Kimberley', tekst: 'Ik ben ontzettend blij dat ik met Marleen in contact ben gekomen! Ik kwam bij haar vanwege pijnklachten die ik al 15 jaar had en waar ik maar geen oplossing voor kon vinden. Door middel van NEI sessies zijn we gaan kijken waar de klachten vandaan kwamen en welke patronen ik had ontwikkeld. Tijdens een opstelling had ik een groot besefmoment. Sindsdien voel ik een soort rust over me heen gevallen.' },
  { naam: 'Fera', tekst: 'Ik was positief verrast over de dingen die er uitkwamen. Voor mij herkenbare zaken maar ook dingen vanuit eerdere generaties die uiteindelijk ook wel op z\'n plek vielen. Geen ingewikkelde vragen of veel praten en toch klopte er zo veel. Na de sessie was ik moe maar inmiddels ervaar ik een stukje meer rust en dus absoluut een positieve verandering.' },
];

export default function TrajectMoederPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Momtrail traject</h1>
          <p className="text-achtergrond/80 text-xl italic">voor de moeder die voelt: ik wil weer de energie voelen die ik vroeger had en van de tijd met mijn kind(eren) kunnen genieten</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 leading-relaxed mb-6 text-lg reveal">
          Als je eerlijk bent, voelt het moederschap op dit moment vooral... zwaar. Je denkt met regelmaat <strong>&apos;is dit het nou?&apos;</strong>
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="font-semibold text-tekst mb-4">Misschien merk je wel dat je:</p>
          <ul className="space-y-2">
            {klachten.map(k => (
              <li key={k} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {k}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je staat de hele dag aan. Zorgen, regelen, de mental load dragen en doorgaan. Je hebt geleerd om sterk te zijn en het goed te doen voor iedereen. En ondertussen voel je: <strong>ik raak mezelf kwijt zo.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je hebt misschien al van alles geprobeerd: zelfhulpboeken, podcasts, mediteren, zelfs een psycholoog. Je hoofd begrijpt heel goed hoe het werkt, maar toch denk je: waarom lukt het me niet om het anders te doen? Dat komt, omdat je <strong>vooral met je hoofd bent gaan begrijpen. Je lijf doet nog niet mee.</strong>
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <p className="text-achtergrond/90 leading-relaxed italic mb-4">
            Hoe zou het voor je zijn... als je weer energie hebt om de dag door te komen? Je hoofd rustiger voelt, die irritante brainfog minder wordt en je weer écht aanwezig kan zijn bij je kinderen? Je kan je grenzen aangeven zonder boos te worden én je kan tijd voor jezelf nemen <strong className="text-achtergrond">zonder schuldgevoel.</strong>
          </p>
          <p className="text-achtergrond/90 font-semibold">
            Het hoeft niet nóg perfecter. Jij mag weer lichtheid en plezier gaan voelen in het moederschap.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Het Momtrail traject</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Een verdiepend traject waarin we werken aan jouw fundament. Afhankelijk van jouw hulpvraag duiken we in:
        </p>
        <div className="border-l-4 border-accent pl-8 mb-16 reveal">
          <ul className="space-y-3">
            {dieptepunten.map(d => (
              <li key={d} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat levert het je op?</h2>
        <div className="space-y-3 mb-6">
          {opbrengsten.map(o => (
            <div key={o} className="bg-wit border border-primair/10 rounded-xl p-4 flex items-start gap-3 reveal">
              <span className="text-accent mt-1 shrink-0">✦</span>
              <p className="text-tekst/80 leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
        <p className="text-tekst/80 font-semibold leading-relaxed mb-16 reveal">
          Omdat jij, als je jouw binnenwereld meer begrijpt, je je kinderen écht iets anders doorgeeft.
        </p>

        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">De investering</h2>
          <p className="font-semibold text-tekst mb-4">Wat je krijgt:</p>
          <ul className="space-y-2 mb-6">
            {inclusief.map(i => (
              <li key={i} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {i}
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold text-primair mb-3">€417</p>
          <p className="text-tekst/60 text-sm mb-2">Tip: soms is er vanuit je werkgever budget beschikbaar voor coaching of vitaliteit. Vraag naar de mogelijkheden bij HR.</p>
          <p className="text-tekst/60 text-sm">Behoefte aan een korter of langer traject op maat? Plan dan een gratis kennismaking. Kom je uit de gemeente West Maas en Waal of de Betuwe? Dan kan begeleiding mogelijk via PGB voor 100% vergoeding in aanmerking komen, na goedkeuring van de gemeente.</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat anderen zeggen</h2>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {reviews.map(r => (
            <div key={r.naam} className="bg-achtergrond rounded-2xl p-6 reveal flex flex-col">
              <p className="text-tekst/80 leading-relaxed italic flex-1 mb-4">&ldquo;{r.tekst}&rdquo;</p>
              <p className="font-bold text-primair">{r.naam}</p>
            </div>
          ))}
        </div>

        {/* Levenswiel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block bg-accent/20 text-primair text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase reveal">
              Gratis tool
            </span>
            <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-hoofd)' }}>
              Hoe balanceer jij als mama?
            </h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Benieuwd waar jij nu staat? Vul het Levenswiel in en ontvang een <strong>persoonlijk mini-verslag</strong> met één tip van mij.
            </p>
          </div>
          <Levenswiel />
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
