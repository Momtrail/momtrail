import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Levenswiel from '@/components/Levenswiel';
import StickyWeggever from '@/components/StickyWeggever';
import Kompas from '@/components/Kompas';
import MomtrailMethodeCircle from '@/components/MomtrailMethodeCircle';

const klachten = [
  'Al moe bent voordat de dag begonnen is, en je energie steeds weer opraakt',
  'Een hoofd vol hebt: onrust, brainfog, nergens echt focus',
  'Spanning voelt in je kaken, schouders, nek of buik, of licht slaapt en vaak wakker wordt',
  'Weinig energie hebt om wat met je kinderen te doen',
  'Vaak op je telefoon scrollt, terwijl je eigenlijk wilt opladen',
  'Sneller geïrriteerd bent dan je wilt, en dat het dan ineens knalt',
  'Toch toegeeft terwijl je eigenlijk niet wilt',
  'Hoge eisen aan jezelf stelt en je vaak schuldig voelt',
  'Soms ineens je eigen moeder hoort praten, terwijl je het juist anders wilde doen',
  'Klachten hebt zoals vermoeidheid, stress of chronische pijn',
];

const routes = [
  {
    naam: 'Momtrail Pause',
    duur: '3 maanden',
    sessies: '6 sessies',
    prijs: '€997',
    termijnen: '3 x €349',
    tekst: 'Voor als je eerst weer op adem wilt komen. We brengen rust in je lijf en je hoofd, ontdekken waar je energie weglekt en welke patronen meespelen. Je krijgt handvatten die je meteen thuis kunt gebruiken.',
    populair: false,
  },
  {
    naam: 'Momtrail Reset',
    duur: '4 maanden',
    sessies: '8 sessies',
    prijs: '€1147',
    termijnen: '3 x €399',
    tekst: 'Voor als je het echt anders wilt doen. Naast rust en inzicht werken we aan je grenzen en aan de patronen uit je eigen jeugd. Er is tijd om het in het dagelijks leven te oefenen, en om bij te sturen als het weer even knelt.',
    populair: true,
  },
  {
    naam: 'Momtrail Rise',
    duur: '6 maanden',
    sessies: '10 sessies',
    prijs: '€1297',
    termijnen: '3 x €449',
    tekst: 'Voor als je de verandering blijvend wilt maken en weer wilt opbloeien. We gaan dieper op wat er uit je eigen jeugd en eerdere generaties meekomt, en je hebt de tijd om nieuwe gewoontes te laten indalen. Ook door drukke periodes en terugvallen heen loop je niet alleen.',
    populair: false,
  },
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

const inclusief: React.ReactNode[] = [
  'Intake',
  'Individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Persoonlijke begeleiding via WhatsApp en voiceberichten tussen de sessies door, voor een check-in na een sessie en bij vragen',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Toegang tot de online leeromgeving met verdiepende opdrachten, visualisatieopstellingen en lichaamsgerichte oefeningen',
  'De Rust Reset: een programma van 7 dagen met een introductie in zenuwstelselregulatie',
  <>Toegang tot <a href="https://momtrail.kennis.shop/pay/mindful-moms" className="text-accent font-bold hover:underline">Mindful Moms</a> gedurende het traject</>,
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
      <div className="bg-primair py-16 px-6 relative overflow-hidden">
        <Kompas className="absolute -right-16 -top-16 w-96 h-96 text-achtergrond/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Momtrail traject</h1>
          <p className="text-achtergrond/80 text-xl italic">voor de moeder die voelt: ik wil weer de energie voelen die ik vroeger had en van de tijd met mijn kind(eren) kunnen genieten</p>
        </div>
      </div>

      {/* Herkenning */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-tekst/80 leading-relaxed mb-6 text-lg reveal">
          Als je eerlijk bent, voelt het moederschap op dit moment vooral... zwaar. Je denkt regelmatig: <strong>&apos;is dit het nou?&apos;</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je staat de hele dag aan. Zorgen, regelen, de mental load dragen en doorgaan. Het stopt nooit. Je hebt geleerd om sterk te zijn en het goed te doen voor iedereen. En ondertussen loop je helemaal leeg en voel je: <strong>ik raak mezelf kwijt zo.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je hebt misschien al van alles geprobeerd: zelfhulpboeken, podcasts, mediteren, misschien zelfs een psycholoog. Je hoofd begrijpt heel goed hoe het werkt. Maar toch lukt het je niet om het anders te doen. Dat komt omdat je <strong>vooral met je hoofd bent gaan begrijpen. Je lijf doet nog niet mee.</strong>
        </p>
        <p className="font-bold text-tekst mb-10 reveal">Met alleen praten kom je er niet.</p>

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
        style={{ backgroundImage: "url('/fotos/Foto Atelier Contrast-66.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 80%' }}
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
                    <p className="font-bold text-primair">{s.titel} <span className="text-primair/30 mx-1">·</span> <span className="font-normal text-tekst/50 text-sm">{s.sub}</span></p>
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

      {/* Methodes */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl font-bold text-primair reveal">Methodes die ik inzet</h2>
              <p className="text-tekst/50 text-sm italic reveal">Ik kies wat past bij jouw hulpvraag.</p>
            </div>
            <Link href="/werkwijze" className="text-accent font-bold text-sm hover:underline reveal shrink-0">
              Meer over mijn werkwijze →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5 reveal">
            {['NEI', 'Hartcoherentie', 'Ademhaling', 'EFT', 'Zenuwstelselregulatie', 'Systemisch werk'].map(m => (
              <span key={m} className="bg-achtergrond border border-primair/15 text-tekst/80 font-medium px-4 py-2 rounded-full text-sm">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Kies jouw trail */}
      <section className="bg-achtergrond py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>Kies jouw trail</h2>
            <p className="text-tekst/70 leading-relaxed max-w-2xl mx-auto reveal">Iedere moeder loopt haar eigen pad. Daarom zijn er drie routes. Ze werken allemaal volgens de Momtrail methode; het verschil zit in hoeveel tijd je jezelf geeft.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {routes.map(r => (
              <div key={r.naam} className={`rounded-3xl p-9 flex flex-col reveal ${r.populair ? 'bg-primair shadow-xl' : 'bg-wit shadow-sm border border-primair/10'}`}>
                {r.populair && (
                  <span className="inline-block bg-achtergrond text-primair text-xs font-bold px-3 py-1.5 rounded-full mb-5 self-start tracking-widest uppercase">
                    meest gekozen
                  </span>
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
        </div>

        {/* FAQ verwijzing */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-wit border border-primair/15 rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 reveal">
            <div>
              <p className="font-bold text-tekst mb-1">Vragen over (werkgevers)vergoeding, termijnen of hoe het in de praktijk werkt?</p>
              <p className="text-tekst/60 text-sm">Antwoorden op de meest gestelde vragen staan op één plek.</p>
            </div>
            <Link href="/faq" className="inline-block bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shrink-0 text-sm">
              Veelgestelde vragen →
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-wit rounded-3xl p-10 shadow-sm">
            <div className="md:flex md:gap-12">
              <div className="flex-1 mb-8 md:mb-0">
                <h3 className="text-lg font-bold text-primair mb-5">Bij elke route inbegrepen</h3>
                <ul className="space-y-3.5">
                  {inclusief.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-tekst/80">
                      <Kompas />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-tekst/60 text-sm leading-relaxed mt-6 border-t border-primair/10 pt-5">
                  Heb je al een Trailstart gedaan en stap je binnen 7 dagen in? Dan wordt de €97 verrekend én krijg je het volledige traject. Je Trailstart is dan een extra sessie, cadeau. Een traject kan altijd verlengd worden met een Trailpass van 3 sessies voor €397.
                </p>
              </div>
              <div className="md:w-72 shrink-0">
                <div className="bg-achtergrond border border-primair/10 rounded-2xl p-5 text-sm">
                  <p className="font-bold text-tekst mb-1">Woon je in de regio Maas en Waal of de Betuwe?</p>
                  <p className="text-tekst/60 leading-relaxed mb-3">Begeleiding kan mogelijk via PGB voor 100% vergoed worden, na goedkeuring van de gemeente.</p>
                  <Link href="/aanbod/ambulante-begeleiding" className="font-bold text-accent hover:underline text-sm">
                    Meer over PGB / ambulant →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong> Wil je liever meteen aan de slag? Plan dan een Trailstart.</p>
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
      <StickyWeggever />
    </>
  );
}
