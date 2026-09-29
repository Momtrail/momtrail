import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Waarom jouw kind ontploft (en wat hij écht nodig heeft) | Blog Momtrail',
  description:
    'Je kind valt uit het niets uit, gooit, schreeuwt of klapt dicht. Wat er op dat moment in het brein en zenuwstelsel van je kind gebeurt, en wat écht helpt.',
  keywords: [
    'waarom ontploft mijn kind',
    'kind driftbui oorzaak',
    'kind boos uitbarstingen',
    'zenuwstelsel kind',
    'brein kind gedrag',
    'kind kan emoties niet reguleren',
    'emotieregulatie kind',
    'overprikkeld kind',
    'kind dichtklapt',
    'kind tantrum brein',
    'gedragsproblemen kind oorzaak',
    'kind reageert heftig',
  ],
};

const redenen = [
  {
    titel: 'Het brein van je kind is nog niet klaar',
    tekst: 'Het deel van het brein dat emoties reguleert, de prefrontale cortex, is pas volledig ontwikkeld rond het 25e levensjaar. Tot die tijd kan je kind letterlijk niet doen wat jij soms vraagt: even nadenken voor hij reageert, zich beheersen, stoppen met huilen. Niet omdat hij het niet wil. Maar omdat dat deel van zijn brein er gewoon nog niet is.',
  },
  {
    titel: 'Het zenuwstelsel staat in overlevingsstand',
    tekst: 'Als je kind ontploft of dichtklapt, is zijn zenuwstelsel in de stress-modus geschoten. Dat betekent: het denkende brein gaat offline en het overlevingsbrein neemt het over. Op dat moment is praten, uitleggen of straffen zinloos. Je kind kan je op dat moment gewoon niet horen, hoe hard je ook praat.',
  },
  {
    titel: 'De emmer was al vol',
    tekst: 'Een uitbarsting lijkt vaak te komen door iets kleins: het verkeerde glas, een kapotte koek, een nee op het verkeerde moment. Maar die ene druppel is zelden de echte oorzaak. De emmer was al vol. Vol van prikkels, van spanning, van dingen die eerder op de dag niet goed gingen. De uitbarsting is alleen het moment waarop de emmer overloopt.',
  },
  {
    titel: 'Je kind vraagt om verbinding',
    tekst: 'Gedrag is communicatie. Een kind dat ontploft, klapt dicht of zich vastklampt, vraagt op zijn manier om iets. Niet om aandacht in de verwende zin van het woord. Maar om verbinding. Om veiligheid. Om iemand die groter is dan de chaos in zijn lijf en zegt: ik ben hier, het komt goed.',
  },
];

export default function BlogOntploftPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">
            ← Terug naar blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-wit/20 text-achtergrond text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              Over je kind
            </span>
            <span className="text-achtergrond/50 text-sm">Oktober 2026 · Marleen, Momtrail</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-achtergrond leading-tight" style={{ fontFamily: 'var(--font-buydog)' }}>
            Waarom jouw kind ontploft<br />en wat hij écht nodig heeft
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 text-lg leading-relaxed mb-8 reveal">
          Je kind valt uit het niets uit. Schreeuwt, gooit, slaat de deur dicht of klapt volledig dicht en is nergens meer mee te bereiken. Jij probeert kalm te blijven, legt uit, vraagt te stoppen. Niets werkt. En ergens voel je ook zelf de frustratie opkomen.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Wat er dan op dat moment precies gebeurt in het hoofd en lijf van je kind, is iets wat de meeste ouders nooit uitgelegd krijgen. En dat is zonde. Want als je begrijpt wat er speelt, verandert niet alleen hoe je reageert. Het verandert ook hoe je naar je kind kijkt.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dit is geen blog over opvoedtips. Dit is uitleg. Over het brein, het zenuwstelsel en wat je kind op dat moment écht van jou nodig heeft.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Vier dingen die je moet weten over een uitbarsting
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {redenen.map((r, i) => (
            <div key={r.titel} className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
              <div className="flex items-start gap-4">
                <span className="text-primair/30 font-bold text-sm shrink-0 mt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-bold text-primair mb-2">{r.titel}</h3>
                  <p className="text-tekst/75 leading-relaxed text-sm">{r.tekst}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond text-xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;Kinderen doen het goed als ze het kunnen. Als ze het niet kunnen, hebben ze onze hulp nodig — geen straf.&rdquo;
          </p>
          <p className="text-achtergrond/60 text-sm mt-4">Ross Greene, klinisch psycholoog</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wat niet werkt tijdens een uitbarsting
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Als het zenuwstelsel van je kind in overlevingsstand staat, zijn er dingen die je misschien doet die logisch voelen maar op dat moment averechts werken:
        </p>

        <ul className="space-y-3 mb-12 reveal">
          {[
            'Uitleggen waarom het gedrag niet mag. Je kind kan je op dit moment niet verwerken.',
            'Straffen of dreigen. Dit voegt spanning toe aan een zenuwstelsel dat al overbelast is.',
            'Vragen om te kalmeren of te stoppen met huilen. Je kind wil dat zelf ook, maar kan het niet.',
            'Je eigen frustratie laten zien. Je zenuwstelsel en dat van je kind beïnvloeden elkaar direct.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-tekst/80 text-sm">
              <span className="text-primair mt-0.5 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wat je kind op dat moment wél nodig heeft
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Het klinkt misschien simpel, maar het is niet makkelijk: <strong>aanwezigheid zonder oordeel</strong>. Een rustige stem. Een kalm lichaam. Iemand die niet mee escaleert.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Dat betekent niet dat alles mag. Grenzen stellen kan ook vanuit rust. Maar eerst: de storm laten gaan. Er zijn. Niet oplossen, niet uitleggen. Gewoon er zijn.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Daarna, als het zenuwstelsel van je kind tot rust is gekomen, is er ruimte. Ruimte voor een gesprek, voor een knuffel, voor uitleg. Niet eerder.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <h3 className="font-bold text-primair mb-4">In het kort: wat kun je doen?</h3>
          <ul className="space-y-3">
            {[
              { stap: 'Blijf zo kalm mogelijk. Jouw zenuwstelsel reguleert dat van je kind.', sub: 'Dat lukt niet altijd. Dat is menselijk.' },
              { stap: 'Geef ruimte. Niet weglopen, maar ook niet forceren.', sub: 'Soms is nabijheid genoeg, zonder woorden.' },
              { stap: 'Wacht tot de storm voorbij is.', sub: 'Dan pas is er ruimte voor contact en eventueel uitleg.' },
              { stap: 'Neem het daarna samen door, op een rustig moment.', sub: 'Niet als straf, maar als verbinding.' },
            ].map((s) => (
              <li key={s.stap} className="flex items-start gap-3">
                <span className="text-primair mt-0.5 shrink-0">→</span>
                <div>
                  <p className="text-tekst/80 text-sm font-medium">{s.stap}</p>
                  <p className="text-tekst/50 text-xs mt-0.5">{s.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wanneer zijn de uitbarstingen een signaal van iets meer?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Uitbarstingen horen bij kinderen zijn. Zeker in de peuter- en kleutertijd. Maar als je merkt dat het vaker voorkomt, heftiger wordt, of als je kind ook buiten de uitbarstingen om gespannen, teruggetrokken of onrustig is, dan vertelt zijn gedrag je iets.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Niet dat er iets mis is met je kind. Maar dat er iets onder de oppervlakte speelt wat aandacht verdient. Dat kan van alles zijn: een periode van veel verandering, spanning die hij oppikt, iets wat hij niet kan verwoorden. Een buitenstaander die meekijkt, kan soms in één gesprek meer zien dan jij na maanden zoeken.
        </p>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Herken je dit bij jouw kind?</h2>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong><br />
            We kijken samen wat er speelt en wat jouw kind nodig heeft.
          </p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>

      </article>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
