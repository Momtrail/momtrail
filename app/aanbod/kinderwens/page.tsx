import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Kinderwenstraject' };

const veranderingen = [
  {
    titel: 'Je hormonen krijgen de kans om te herstellen',
    tekst: 'Door de juiste voeding en ondersteuning ontstaat er meer balans in je cyclus en ovulatie.',
  },
  {
    titel: 'Je lichaam krijgt de bouwstoffen die het nodig heeft',
    tekst: 'Voor eicelkwaliteit, een gezonde baarmoeder en een goede basis voor bevruchting. Ook je partner wordt meegenomen in de juiste voeding en leefstijl.',
  },
  {
    titel: 'Je darmen gaan beter opnemen en verwerken',
    tekst: 'Waardoor voedingsstoffen echt aankomen én je hormonen beter gereguleerd worden.',
  },
  {
    titel: 'Je systeem komt uit de \'aan-stand\'',
    tekst: 'Als je veel spanning of stress draagt, blijft je lichaam in een soort overlevingsmodus. In die staat is voortplanting geen prioriteit.',
  },
  {
    titel: 'Je zenuwstelsel leert weer ontspannen en vertrouwen',
    tekst: 'Waardoor je lichaam signalen krijgt: het is veilig. En dat heeft direct invloed op je hormonale balans en je cyclus.',
  },
  {
    titel: 'Er komt meer rust, ruimte en doorstroming',
    tekst: 'In je lichaam, in je emoties en in je hoofd.',
  },
];

const voorWie = [
  'Al een tijd probeert zwanger te worden',
  'In een fertiliteitstraject zit en extra ondersteuning zoekt',
  'Voelt dat stress of spanning een rol speelt',
  'Je lichaam optimaal wilt voorbereiden op een zwangerschap en gezond de zwangerschap wil starten',
  'Verlangt naar meer rust en vertrouwen in dit proces',
];

const watJeKrijgt = [
  'Intake bij Susan (2 uur, met partner) én bij Marleen (1,5 uur, met partner)',
  'Welkomstpakket van Health and Happiness en Momtrail',
  'Vervolgconsulten: drie bij Susan én twee telefonische consulten van 30 min., twee bij Marleen van 75 min.',
  'Tussentijdse evaluatie via Zoom met ons beiden',
  'Whatsapp-, telefonisch en mailcontact tijdens het traject',
  'Rust Reset (online programma om spanning te verminderen)',
  '6 maanden Health and Happiness weekmenu\'s',
  '20–25% korting op supplementen',
];

export default function KinderwensPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>

        <h1 className="text-3xl font-bold text-primair mb-2 reveal">Kinderwenstraject</h1>
        <p className="text-tekst/60 italic text-lg mb-10 reveal">Health and Happiness × Momtrail</p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Jullie verlangen al een tijd naar een kindje, maar als je menstruatie weer begint sta je met tranen in je ogen. <strong>Weer niet gelukt deze maand.</strong> Of het zwanger worden lukt wel, maar je blijft niet zwanger. Misschien zit je midden in een fertiliteitstraject of je voelt: ik wil mijn lichaam en mezelf zo goed mogelijk voorbereiden. Wat jouw situatie ook is, <strong>je hoeft dit niet alleen te doen.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Een kinderwens raakt je vaak diep. Het is vaak een proces wat je niet deelt met mensen om je heen, maar wat je samen met je partner doormaakt. Er komen veel emoties bij kijken: hoop, teleurstelling, spanning… en soms ook onzekerheid, verdriet of onmacht. En juist daarom kijken wij, <strong>Susan en Marleen,</strong> graag met je mee en gaan we verder dan de standaard adviezen.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Een holistische benadering</h2>
        <p className="text-tekst/80 leading-relaxed mb-3 reveal">In deze samenwerking bundelen we onze expertise:</p>
        <div className="space-y-4 mb-4">
          <div className="bg-wit rounded-2xl p-5 border border-primair/10 reveal">
            <p className="font-bold text-primair mb-1">Orthomoleculaire begeleiding</p>
            <p className="text-tekst/80">Gericht op hormonen, leefstijl, voeding en darmgezondheid.</p>
          </div>
          <div className="bg-wit rounded-2xl p-5 border border-primair/10 reveal">
            <p className="font-bold text-primair mb-1">Lichaamsgerichte en systemische begeleiding</p>
            <p className="text-tekst/80">Gericht op zenuwstelsel, (onverwerkte) emoties en onderliggende patronen.</p>
          </div>
        </div>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Je lichaam is geen los systeem. Stress, oude ervaringen, leefstijl en voeding hebben invloed op je cyclus, je hormonen en je algehele balans. Als jouw zenuwstelsel zich niet veilig en ontspannen voelt, <strong>kunnen je geslachtsorganen minder goed hun werk doen.</strong>
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat er verandert na dit traject</h2>
        <div className="space-y-4 mb-12">
          {veranderingen.map(v => (
            <div key={v.titel} className="flex gap-3 reveal">
              <span className="text-accent text-xl mt-0.5">✦</span>
              <div>
                <p className="font-semibold text-tekst mb-1">{v.titel}</p>
                <p className="text-tekst/70 leading-relaxed">{v.tekst}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Voor wie is dit?</h2>
        <p className="text-tekst/80 mb-3 reveal">Dit traject is voor jou als je:</p>
        <ul id="voorWie-lijst" className="mb-12">
          {voorWie.map(v => (
            <li key={v} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {v}
            </li>
          ))}
        </ul>

        <div className="bg-achtergrond rounded-2xl p-6 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed italic">
            Een zwangerschap kun je niet afdwingen, maar je kunt wel <strong>de omstandigheden creëren waarin jouw lichaam tot rust komt, in balans raakt en open kan staan voor nieuw leven.</strong> En precies daar begeleiden we je graag in.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Investering</h2>
        <p className="text-primair text-xl font-bold mb-3 reveal">De investering bedraagt €1.347.</p>
        <p className="text-tekst/70 text-sm leading-relaxed mb-4 reveal">
          Supplementen en eventuele onderzoeken zijn maatwerk en niet meegerekend in dit bedrag. Voor een deel van het traject is gedeeltelijke vergoeding via de zorgverzekering vaak mogelijk. Betalen in termijnen is mogelijk.
        </p>
        <p className="text-tekst/80 font-semibold mb-3 reveal">Wat je krijgt:</p>
        <ul id="krijgt-lijst" className="mb-12">
          {watJeKrijgt.map(k => (
            <li key={k} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {k}
            </li>
          ))}
        </ul>

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-primair mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-tekst/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken dan samen of het kinderwenstraject aansluit bij jou.</p>
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#voorWie-lijst', '#krijgt-lijst']} />
    </>
  );
}
