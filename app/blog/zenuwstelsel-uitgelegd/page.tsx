import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Je zenuwstelsel uitgelegd (zonder moeilijke woorden) | Blog Momtrail',
  description:
    'Waarom reageer je zo fel op kleine dingen? Waarom voel je je constant aan staan? Je zenuwstelsel vertelt je iets. En als je begrijpt wat, verandert alles.',
  keywords: [
    'zenuwstelsel uitgelegd',
    'zenuwstelsel moeder',
    'chronische stress moeder',
    'altijd aan staan moeder',
    'overprikkeld moeder',
    'fight flight freeze',
    'zenuwstelselregulatie',
    'waarom reageer ik zo fel',
    'stress in je lijf',
    'parasympathisch zenuwstelsel',
    'moeder overprikkeld',
    'spanning in lichaam moeder',
  ],
};

const standen = [
  {
    naam: 'Rust & flow',
    chip: 'rem',
    chipKleur: 'bg-tekst/15 text-tekst',
    kleur: 'bg-accent',
    tekstkleur: 'text-tekst',
    omschrijving: 'Je kunt landen, uitrusten, herstellen. Dit is de stand waar je lichaam bijvult, verteert en slaapt. Veel moeders komen hier nauwelijks meer in.',
    signalen: ['Diepe ademhaling', 'Spieren ontspannen', 'Helder hoofd', 'Ruimte voor verbinding'],
  },
  {
    naam: 'Aan & stress',
    chip: 'gas',
    chipKleur: 'bg-wit/20 text-achtergrond',
    kleur: 'bg-primair',
    tekstkleur: 'text-achtergrond',
    omschrijving: 'Je bent alert, actief, klaar voor actie. Dit is de stand die je nodig hebt om dingen gedaan te krijgen. Niets mis mee, als je er ook weer uit kunt komen.',
    signalen: ['Hart klopt sneller', 'Spieren zijn gespannen', 'Hoofd werkt op volle toeren', 'Moeilijk ontspannen, ook als je wilt'],
  },
  {
    naam: 'Bevroren',
    chip: 'volledig op',
    chipKleur: 'bg-wit/20 text-achtergrond',
    kleur: 'bg-tekst',
    tekstkleur: 'text-achtergrond',
    omschrijving: 'Als de stress te lang aanhoudt en je lichaam geen uitweg meer ziet, schakelt het over op shutdown. Je bent er wel, maar voelt niets meer. Plat, leeg, afwezig.',
    signalen: ['Nergens zin in', 'Alles is te veel', 'Emotioneel doof', 'Lichaam voelt zwaar'],
  },
];

export default function BlogZenuwstelselPage() {
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
              Voor moeders
            </span>
            <span className="text-achtergrond/50 text-sm">Oktober 2026 · Marleen, Momtrail</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-achtergrond leading-tight" style={{ fontFamily: 'var(--font-buydog)' }}>
            Je zenuwstelsel uitgelegd<br />zonder moeilijke woorden
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 text-lg leading-relaxed mb-8 reveal">
          Je snapt waarschijnlijk allang dat stress niet goed voor je is. Je hebt erover gelezen, podcasts geluisterd, misschien zelfs een cursus gevolgd. Maar toch lukt het niet om echt te ontspannen. Toch voel je je constant aan staan. Toch reageer je feller dan je wilt.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Dat komt niet omdat jij het verkeerd doet. Het komt omdat je zenuwstelsel iets anders doet dan je hoofd wil. En zolang je dat niet begrijpt, blijf je vechten tegen iets wat je niet kunt zien.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dit blog legt uit wat je zenuwstelsel is, hoe het werkt en waarom het bij zoveel moeders vastloopt. Zonder jargon. Gewoon begrijpelijk.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wat is je zenuwstelsel eigenlijk?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je zenuwstelsel is het communicatienetwerk van je lichaam. Het verwerkt alles wat er om je heen en in je gebeurt, en beslist razendsnel hoe je reageert. Niet jij beslist dat. Je zenuwstelsel doet dat, veel sneller dan je bewust kunt nadenken.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Het heeft daarvoor twee hoofdstanden: een gasstand en een remstand. En in extreme situaties een derde: de noodrem. Die drie standen kennen veel mensen niet bij naam, maar ze voelen ze elke dag.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          De drie standen van je zenuwstelsel
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {standen.map((s) => (
            <div key={s.naam} className={`${s.kleur} rounded-2xl p-6 reveal`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-bold text-lg ${s.tekstkleur}`} style={{ fontFamily: 'var(--font-buydog)' }}>{s.naam}</span>
                <span className={`inline-block ${s.chipKleur} text-xs font-bold px-3 py-1 rounded-full tracking-wide`}>{s.chip}</span>
              </div>
              <p className={`${s.tekstkleur} opacity-80 leading-relaxed text-sm mb-4`}>{s.omschrijving}</p>
              <ul className="grid grid-cols-2 gap-2">
                {s.signalen.map((sig) => (
                  <li key={sig} className={`text-xs ${s.tekstkleur} opacity-70 flex items-center gap-1.5`}>
                    <span className="shrink-0">·</span>{sig}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Waarom moeders zo vaak vastzitten in de gasstand
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je zenuwstelsel is gebouwd voor kortdurende stress. Een gevaar, een uitdaging, een deadline. Daarna herstelt het. Dat is hoe het bedoeld is.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Maar het moederschap is geen kortdurende stress. Het is constant. De zorg stopt niet. De verantwoordelijkheid stopt niet. De prikkels stoppen niet. En dus staat het zenuwstelsel van veel moeders continu aan, zonder dat het de kans krijgt om echt te herstellen.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Na een tijdje vergeet je hoe ontspanning voelt. Stilzitten voelt ongemakkelijk. Even niets doen roept schuldgevoel op. Dat zijn geen karaktertrekken. Dat zijn signalen van een zenuwstelsel dat al te lang in de gasstand staat.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond text-xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;Ik dacht dat ik gewoon een druk persoon was. Totdat ik merkte dat ik niet meer wist hoe ik moest ontspannen. Zelfs op vakantie stond ik aan.&rdquo;
          </p>
          <p className="text-achtergrond/60 text-sm mt-4">Een moeder uit mijn praktijk</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Waarom begrijpen niet genoeg is
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Dit is het stuk dat de meeste mensen missen. Je kunt heel goed begrijpen hoe stress werkt en toch niet in staat zijn om te ontspannen. Dat is niet omdat je het verkeerd doet. Dat is omdat je zenuwstelsel niet reageert op begrip.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je zenuwstelsel reageert op <strong>lichaamssignalen</strong>. Op adem. Op beweging. Op aanraking. Op veiligheid die je lijf voelt, niet die je hoofd bedenkt. Dat is waarom praten over stress maar beperkt helpt, en waarom lichaamsgerichte technieken zoveel dieper gaan.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Zenuwstelselregulatie is leren hoe je zelf kunt schakelen. Van gasstand naar remstand. Niet door harder je best te doen, maar door je lichaam de signalen te geven die het nodig heeft om te weten: het is veilig, ik mag landen.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <h3 className="font-bold text-primair mb-4">Drie simpele dingen die je zenuwstelsel helpen landen</h3>
          <ul className="space-y-4">
            {[
              { titel: 'Langzaam uitademen', tekst: 'Een lange uitademing activeert direct de remstand. Langer uitademen dan inademen, dat is alles.' },
              { titel: 'Voeten op de grond voelen', tekst: 'Bewust voelen hoe je voeten de vloer raken brengt je terug in je lichaam. Weg uit je hoofd.' },
              { titel: 'Koude of warme sensatie', tekst: 'Koud water op je gezicht, een warme kop thee in je handen. Fysieke sensaties helpen je zenuwstelsel resetten.' },
            ].map((t) => (
              <li key={t.titel} className="flex items-start gap-3">
                <span className="text-primair mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-bold text-primair text-sm">{t.titel}</p>
                  <p className="text-tekst/70 text-sm leading-relaxed">{t.tekst}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wanneer zijn kleine oefeningen niet genoeg?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Kleine oefeningen helpen. Maar als je zenuwstelsel al jarenlang in de gasstand staat, als er oude spanning in je lijf zit die nooit de kans heeft gehad om te ontladen, dan kom je daar niet alleen met een ademhalingsoefening.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dan helpt het om samen te kijken wat er speelt. Waar de spanning zit. Wat je zenuwstelsel heeft geleerd en wat het nu nog doet, ook als de situatie allang veranderd is. Dat is het werk dat ik doe met moeders. Niet vanuit het hoofd, maar vanuit het lijf.
        </p>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je leren hoe je zelf kunt schakelen?</h2>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong><br />
            We kijken samen wat jouw zenuwstelsel nodig heeft.
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
