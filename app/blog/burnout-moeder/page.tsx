import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Geen burnout, ik ben gewoon moe. Of toch niet? | Blog Momtrail',
  description:
    'Veel moeders lopen compleet leeg maar herkennen het niet als burnout. Werk voelt zwaar, sociale contacten kosten energie, je bent op. Herken jij de signalen van een moeder burnout?',
  keywords: [
    'burnout moeder',
    'burnout herkennen moeder',
    'overspannen moeder',
    'uitgeputte moeder',
    'moeder burnout symptomen',
    'spanning moeder',
    'geen energie moeder',
    'moeder altijd moe',
    'moeder loopt leeg',
    'maternale burnout',
    'burn-out moederschap',
    'moeder overvol',
  ],
};

const signalen = [
  {
    titel: 'Je bent moe, ook na een nacht slapen',
    tekst: 'Niet de moeheid van een drukke dag. De moeheid die er al is als je je ogen opendoet. Die niet weggaat met een weekend uitslapen of een vrije dag. Die in je botten zit.',
  },
  {
    titel: 'Je werk voelt zwaar en zinloos',
    tekst: 'Je deed het vroeger met plezier, of in ieder geval met energie. Nu sleep je je erdoorheen. Je telt de uren. Je hebt het gevoel dat je er niets meer van maakt, ook al doe je je best.',
  },
  {
    titel: 'Sociale contacten kosten meer dan ze opleveren',
    tekst: 'Een verjaardag, een afspraak met een vriendin, een borrel op het werk. Je ziet er tegenop. Liever blijf je thuis. Niet omdat je introvert bent, maar omdat je gewoon niets meer over hebt.',
  },
  {
    titel: 'Je bent snel geïrriteerd',
    tekst: 'Over dingen die vroeger langs je heen gleden. De manier waarop iemand kauwt. Een vraag van je kind die je al tien keer hebt beantwoord. Je weet zelf dat het overdreven is, maar je kunt het niet stoppen.',
  },
  {
    titel: 'Je voelt je nergens meer echt bij',
    tekst: 'Je bent er wel, maar niet echt aanwezig. Met je kind, met je partner, met vrienden. Je gaat door de bewegingen. Maar van binnen is het stil op een manier die niet prettig is.',
  },
  {
    titel: 'Je hoofd staat nooit écht uit',
    tekst: 'Altijd een lijstje. Altijd iets wat je nog moet doen, regelen, bedenken, onthouden. En hoe moe je ook bent: zodra je gaat liggen, begint het gemaal weer.',
  },
];

export default function BlogBurnoutPage() {
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
            Geen burnout, ik ben gewoon moe.<br />Of toch niet?
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 text-lg leading-relaxed mb-8 reveal">
          Je zou het jezelf nooit zo noemen. Burnout, dat is voor mensen die zestig uur per week werken en dan op een ochtend niet meer overeind komen. Niet voor jou. Jij bent gewoon moe. Jij hebt het gewoon druk. Jij bent gewoon moeder.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Maar ergens weet je ook: dit is niet normaal. Dit is niet hoe het moet voelen. Je staat op, je doet wat gedaan moet worden, je gaat weer slapen. En morgen hetzelfde. En overmorgen ook. En ondertussen wordt de tank steeds iets leger, en vul je hem nooit echt meer bij.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dit blog is voor jou als je denkt dat je geen burnout hebt, maar diep van binnen weet dat er iets niet klopt.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Hoe burnout bij moeders er echt uitziet
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Burnout bij moeders ziet er anders uit dan het klassieke beeld. Er is zelden het moment waarop je instort. Vaker is het een langzaam leeglopen. Een sluipend proces waarbij je steeds een beetje minder wordt van wie je was, zonder dat er één duidelijk kantelpunt is.
        </p>

        <div className="flex flex-col gap-5 mb-12">
          {signalen.map((s, i) => (
            <div key={s.titel} className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
              <div className="flex items-start gap-4">
                <span className="text-primair/30 font-bold text-sm shrink-0 mt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-bold text-primair mb-2">{s.titel}</h3>
                  <p className="text-tekst/75 leading-relaxed text-sm">{s.tekst}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond text-xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;Ik dacht: ik ben gewoon moe, ik stel me aan. Totdat ik op een dinsdag middag in de auto zat en ik niet wist waarom ik huilde. En ook niet kon stoppen.&rdquo;
          </p>
          <p className="text-achtergrond/60 text-sm mt-4">Een moeder uit mijn praktijk</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Waarom moeders het zo lang niet zien
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Er zijn een paar redenen waarom moeders zichzelf lang niet herkennen in het woord burnout.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          De eerste: <strong>vergelijken</strong>. Je vergelijkt jezelf met moeders die het nóg drukker hebben, nóg meer doen, nóg minder slapen. En dan denk je: wie ben ik om te klagen?
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          De tweede: <strong>normaliseren</strong>. Iedereen om je heen is moe. Iedereen heeft het druk. Het lijkt gewoon de prijs van het moederschap. Dus ga je ervan uit dat dit erbij hoort.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          De derde: <strong>schuld</strong>. Als je toegeeft dat je leeg bent, voelt het alsof je zegt dat je het niet aankunt. Dat je faalt. Terwijl het tegendeel waar is: je hebt zo lang doorgegaan, zo lang voor iedereen gezorgd, dat je jezelf ergens onderweg volledig bent kwijtgeraakt.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Burnout is geen falen. Het is wat er gebeurt als je te lang te veel geeft zonder bij te vullen.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Het verschil tussen moe zijn en opgebrand zijn
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Moe zijn gaat over na een goede nacht slapen. Na een weekend vrij. Na een vakantie. Je wordt bijgevuld en je voelt het verschil.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          <strong>Opgebrand zijn</strong> gaat dieper. Je kunt slapen wat je wilt, maar je bent niet uitgerust. Je kunt op vakantie gaan, maar je kunt niet echt loslaten. Het zit in je lijf, in je zenuwstelsel, in de manier waarop je reageert op dingen die vroeger langs je heen gleden.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Een simpele vraag om het verschil te voelen: <em>als iemand je morgen een vrije dag geeft, volledig vrij, geen verplichtingen, voel je dan iets van blijdschap? Of vooral leegte, en misschien een beetje angst voor de stilte?</em> Als het tweede, dan is er meer aan de hand dan gewone vermoeidheid.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <h3 className="font-bold text-primair mb-4">Eerlijk checken: hoe gaat het écht?</h3>
          <ul className="space-y-3">
            {[
              'Ben ik al langer dan een paar maanden zo moe?',
              'Doe ik dingen die ik vroeger leuk vond nog steeds met plezier?',
              'Heb ik het gevoel dat ik niets meer over heb voor de mensen om me heen?',
              'Vermijd ik steeds vaker sociale situaties die me vroeger energie gaven?',
              'Voel ik me meer toeschouwer van mijn eigen leven dan deelnemer?',
            ].map((v) => (
              <li key={v} className="flex items-start gap-3 text-tekst/80 text-sm">
                <span className="text-primair mt-0.5 shrink-0">→</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <p className="text-tekst/60 text-sm mt-6 italic">Als je op meerdere vragen ja antwoordt: dit is een signaal dat je serieus mag nemen.</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wat helpt en wat niet
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Wat niet helpt: nog harder je best doen. Een nieuw planningssysteem. Meer sporten omdat je dan meer energie hebt. Een weekendje weg dat je eigenlijk niet kunt betalen, in de hoop dat het daarna beter gaat.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Wat wél helpt: begrijpen waarom je lichaam en zenuwstelsel zo reageren als ze doen. Niet vanuit je hoofd, want je hoofd snapt het allang. Maar vanuit je lijf. Leren voelen wat je nodig hebt. Ruimte maken voor de dingen die jou vullen, ook als dat spannend voelt of schuldig.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          En soms: hulp vragen. Niet omdat je het niet kunt. Maar omdat je het niet alleen hoeft.
        </p>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Herken jij jezelf hierin?</h2>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong><br />
            We kijken samen wat er speelt en wat jij nodig hebt.
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
