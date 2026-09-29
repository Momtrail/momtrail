import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Levenswiel from '@/components/Levenswiel';
import StickyWeggever from '@/components/StickyWeggever';
import Kompas from '@/components/Kompas';
import MomtrailMethodeCircle from '@/components/MomtrailMethodeCircle';

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
  { nr: '01', titel: 'Hechtingsgeschiedenis', tekst: 'Je hechtingsgeschiedenis en jouw start in het leven, want die legt het fundament voor alles.' },
  { nr: '02', titel: 'Zenuwstelsel', tekst: 'Hoe jouw zenuwstelsel reageert onder druk. En ja, die druk is enorm in het moederschap.' },
  { nr: '03', titel: 'Patronen', tekst: 'Patronen die je meeneemt en die je steeds opnieuw tegenkomt, ook al wil je het anders.' },
  { nr: '04', titel: 'Dynamieken', tekst: 'Relatie- en/of moederdynamieken die steeds terugkeren en je meer kosten dan je doorhebt.' },
  { nr: '05', titel: 'Regulatie', tekst: 'Ademhaling en lichaamsgerichte technieken zodat je stress los kunt laten en je emoties weer kunt voelen.' },
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
      {/* Hero */}
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Momtrail traject</h1>
          <p className="text-achtergrond/80 text-xl italic">voor de moeder die voelt: ik wil weer de energie voelen die ik vroeger had en van de tijd met mijn kind(eren) kunnen genieten</p>
        </div>
      </div>

      {/* Herkenning */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-tekst/80 leading-relaxed mb-6 text-lg reveal">
          Als je eerlijk bent, voelt het moederschap op dit moment vooral... zwaar. Je denkt met regelmaat <strong>&apos;is dit het nou?&apos;</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je staat de hele dag aan. Zorgen, regelen, de mental load dragen en doorgaan. Je hebt geleerd om sterk te zijn en het goed te doen voor iedereen. En ondertussen voel je: <strong>ik raak mezelf kwijt zo.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Je hebt misschien al van alles geprobeerd: zelfhulpboeken, podcasts, mediteren, zelfs een psycholoog. Je hoofd begrijpt heel goed hoe het werkt, maar toch denk je: waarom lukt het me niet om het anders te doen? Dat komt, omdat je <strong>vooral met je hoofd bent gaan begrijpen. Je lijf doet nog niet mee.</strong>
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 reveal">
          <p className="font-semibold text-tekst mb-4">Misschien merk je wel dat je:</p>
          <ul className="space-y-3">
            {klachten.map(k => (
              <li key={k} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/IMG_5930 2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;sometimes you just need to pause, reset and rise again.&rdquo;
          </p>
        </div>
      </div>

      {/* Perspectief - full width */}
      <section className="bg-primair py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-achtergrond mb-8 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
            Hoe zou het voor je zijn...
          </h2>
          <p className="text-achtergrond/90 leading-relaxed text-xl mb-6 reveal">
            als je weer energie hebt om de dag door te komen? Je hoofd rustiger voelt, die irritante brainfog minder wordt en je weer écht aanwezig kan zijn bij je kinderen? Je kan je grenzen aangeven zonder boos te worden én je kan tijd voor jezelf nemen <strong className="text-achtergrond">zonder schuldgevoel.</strong>
          </p>
          <p className="text-achtergrond font-semibold text-xl reveal">
            Het hoeft niet nóg perfecter. Jij mag weer lichtheid en plezier gaan voelen in het moederschap.
          </p>
        </div>
      </section>

      {/* Aanpak - nummered cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>Het Momtrail traject</h2>
            <p className="text-tekst/60 italic reveal">Afhankelijk van jouw hulpvraag duiken we in:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {dieptepunten.map(d => (
              <div key={d.nr} className="bg-achtergrond rounded-2xl p-6 flex gap-4 reveal">
                <span
                  className="text-6xl font-bold text-primair/15 shrink-0 leading-none -mt-1"
                  style={{ fontFamily: 'var(--font-buydog)' }}
                >
                  {d.nr}
                </span>
                <div className="pt-1">
                  <h3 className="font-bold text-primair mb-1.5">{d.titel}</h3>
                  <p className="text-tekst/70 leading-relaxed text-sm">{d.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Momtrail methode */}
      <section className="py-20 px-6 bg-achtergrond">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-primair mb-3 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>De Momtrail methode</h2>
            <p className="text-tekst/60 italic reveal">Van automatische reactie naar bewuste keuze</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 shrink-0 reveal">
              <MomtrailMethodeCircle />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              {[
                { nr: '01', titel: 'Reguleren', sub: 'Je zenuwstelsel begeleiden', tekst: 'Je leert jezelf te begeleiden wanneer je uit balans raakt. Met lichaamsgerichte oefeningen creëer je veiligheid, ruimte en rust, zodat je weer kunt voelen en kiezen.', tag: 'Van overleefstand naar regulatie' },
                { nr: '02', titel: 'Voelen', sub: 'Je lichaam verstaan', tekst: 'Je leert luisteren naar de signalen van je lichaam en je zenuwstelsel. Je herkent spanning, onrust en overprikkeling steeds eerder.', tag: 'Van hoofd naar lichaamsbewustzijn' },
                { nr: '03', titel: 'Begrijpen', sub: 'Je patronen herkennen', tekst: 'Je onderzoekt wat er onder je gedrag ligt. Je krijgt inzicht in je patronen, overtuigingen en automatische reacties, ook de onbewuste.', tag: 'Van onbewust naar bewust' },
                { nr: '04', titel: 'Kiezen', sub: 'Nieuwe patronen creëren', tekst: 'Vanuit rust en bewustzijn maak je andere keuzes. Je stelt grenzen, spreekt uit en doet anders. Zo herschrijf je je patronen in de praktijk.', tag: 'Van automatische reactie naar bewuste keuze' },
              ].map(s => (
                <div key={s.nr} className="bg-wit rounded-2xl p-5 flex gap-4 reveal">
                  <span className="text-4xl font-bold text-primair/15 shrink-0 leading-none -mt-1" style={{ fontFamily: 'var(--font-buydog)' }}>{s.nr}</span>
                  <div>
                    <p className="font-bold text-primair">{s.titel} <span className="font-normal text-tekst/50 text-sm">{s.sub}</span></p>
                    <p className="text-tekst/70 text-sm leading-relaxed mt-1 mb-2">{s.tekst}</p>
                    <p className="text-primair/50 text-xs italic">{s.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opbrengsten - full width primair met golf */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-3 text-center reveal">Wat levert het je op?</h2>
          <p className="text-achtergrond/60 italic text-center mb-10 reveal">Zodat jij, als je jouw binnenwereld meer begrijpt, je je kinderen écht iets anders doorgeeft.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {opbrengsten.map(o => (
              <div key={o} className="bg-wit/15 border border-achtergrond/20 rounded-xl p-5 flex items-start gap-3 reveal">
                <Kompas className="text-achtergrond/60 mt-1 shrink-0" />
                <p className="text-achtergrond/90 leading-relaxed text-sm">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investering */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-wit border border-primair/20 rounded-2xl p-8 reveal">
            <h2 className="text-2xl font-bold text-primair mb-6">De investering</h2>
            <p className="font-semibold text-tekst mb-4">Wat je krijgt:</p>
            <ul className="space-y-3 mb-8">
              {inclusief.map(i => (
                <li key={i} className="flex items-start gap-3 text-tekst/80">
                  <Kompas />
                  {i}
                </li>
              ))}
            </ul>
            <div className="border-t border-primair/10 pt-6">
              <p className="text-4xl font-bold text-primair mb-4">€417</p>
              <p className="text-tekst/60 text-sm mb-2">Tip: soms is er vanuit je werkgever budget beschikbaar voor coaching of vitaliteit. Vraag naar de mogelijkheden bij HR.</p>
              <p className="text-tekst/60 text-sm">Behoefte aan een korter of langer traject op maat? Plan dan een gratis kennismaking. Kom je uit de gemeente West Maas en Waal of de Betuwe? Dan kan begeleiding mogelijk via PGB voor 100% vergoeding in aanmerking komen, na goedkeuring van de gemeente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foto */}
      <div className="py-16 flex justify-center px-6">
        <div className="relative w-72 md:w-96">
          <div
            className="absolute inset-0 bg-accent/40 -z-10"
            style={{
              borderRadius: '42% 58% 61% 39% / 48% 55% 45% 52%',
              transform: 'translate(10px, 10px) scale(1.04)',
            }}
          />
          <img
            src="/fotos/IMG_6078 2.jpg"
            alt="Marleen"
            className="w-full object-cover aspect-[3/4]"
            style={{
              borderRadius: '42% 58% 61% 39% / 48% 55% 45% 52%',
              objectPosition: 'center 40%',
            }}
          />
        </div>
      </div>

      {/* Reviews - full width */}
      <section className="bg-achtergrond py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primair mb-2 text-center reveal">Wat anderen zeggen</h2>
          <p className="text-tekst/60 italic text-center mb-10 reveal">Ervaringen van moeders die je voor gingen</p>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map(r => (
              <div key={r.naam} className="bg-wit rounded-2xl p-6 reveal flex flex-col">
                <p className="text-tekst/80 leading-relaxed italic flex-1 mb-4">&ldquo;{r.tekst}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primair text-wit flex items-center justify-center font-bold text-sm shrink-0">
                    {r.naam.charAt(0)}
                  </div>
                  <p className="font-bold text-primair">{r.naam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levenswiel */}
      <section className="max-w-3xl mx-auto px-6 py-20">
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
      </section>

      {/* CTA */}
      <section className="bg-primair py-16 px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong></p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
      <StickyWeggever />
    </>
  );
}
