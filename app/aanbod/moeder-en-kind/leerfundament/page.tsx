import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Het Leerfundament traject' };

const waarVoorWie = [
  'Moeite hebben met concentratie of taakstart',
  'Snel boos of gefrustreerd raken',
  'Vastlopen in motivatie of leerresultaten',
  'Onzeker zijn over school',
  'Veel spanning ervaren rondom leren',
  '(Hoog)gevoelig of temperamentvol zijn',
];

const watWeDoen = [
  'Brengen we de binnenwereld van je kind in kaart',
  'Kijken we naar hoe zwangerschap & geboorte ervaringen nu nog van invloed zijn',
  'Werken we met lichaamsgerichte oefeningen',
  'Betrekken we jou als ouder actief in het proces',
  'Creëren we helderheid over wat je kind nodig heeft om tot leren te komen',
];

export default function LeerfundamentPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/aanbod/moeder-en-kind" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar Moeder & Kind</Link>

        <h1 className="text-3xl font-bold text-primair mb-2 reveal">Het Leerfundament traject</h1>
        <p className="text-tekst/60 italic text-lg mb-10 reveal">een stevige basis voor leerbegeleiding</p>

        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Soms zie je het meteen: je kind <strong>wíl wel, maar het lukt niet zoals gehoopt.</strong> Concentratieproblemen, snel gefrustreerd raken, moeite met taakstart, onzekerheid of spanning rondom school. Vaak ligt er onder die leerproblemen iets anders dat eerst aandacht vraagt.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat houdt het Leerfundament traject in?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Het Leerfundament traject is een kort, maar krachtig voortraject van <strong>3 sessies</strong> waarin we het zenuwstelsel en de basisregulatie versterken. Met regulatie bedoelen we: je kind leert wat er gebeurt van binnen en kan zichzelf weer tot rust brengen als de spanning oploopt. Want <strong>een kind dat zich veilig, gezien en gereguleerd voelt, kan veel beter tot leren komen.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Dit traject is bedoeld als voorbereiding op jullie traject bij Leerondersteuning Ellen Vos, zodat die begeleiding effectiever, rustiger en met meer vertrouwen kan starten.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Waarom eerst het Leerfundament?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Als het zenuwstelsel onder spanning staat, gaat alle energie naar overleven in plaats van ontwikkelen. In dit traject:
        </p>
        <ul id="watWeDoen-lijst" className="mb-4">
          {watWeDoen.map(w => (
            <li key={w} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {w}
            </li>
          ))}
        </ul>
        <p className="text-tekst/80 font-semibold mb-10 reveal">We bouwen aan rust, veiligheid en vertrouwen.</p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Voor wie is dit traject?</h2>
        <p className="text-tekst/80 leading-relaxed mb-3 reveal">
          Misschien voel je als ouder al een tijdje dat er meer zit onder het leerprobleem. Dit traject is bedoeld voor kinderen die:
        </p>
        <ul id="voorWie-lijst" className="mb-10">
          {waarVoorWie.map(w => (
            <li key={w} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {w}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat levert het jullie op?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          De resultaten zijn niet alleen merkbaar op school, maar ook thuis. Wanneer je kind meer rust en stevigheid vanbinnen ervaart, merk je dat in de kleine dagelijkse momenten: <strong>met meer plezier naar school, na school is er minder ontploffing</strong> bij de eerste vraag en meer ruimte om even te landen. Huiswerk start makkelijker, fouten zorgen niet meer direct voor een blokkade en je hoeft minder te trekken of te duwen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Doordat je kind meer rust in hoofd en lijf ervaart, kan het beter de leerstof opnemen. De leerondersteuning is daardoor vaak <strong>effectiever en in sommige gevallen zijn er minder sessies nodig.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Kortom: minder strijd, meer rust in huis, een kind dat weer durft, minder frustratie bij het huiswerk en een kind met meer zelfvertrouwen.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">De investering</h2>
        <p className="text-tekst/80 leading-relaxed mb-3 reveal">
          Het traject is inclusief intake, 3 sessies, oefeningen en tips om thuis toe te passen en overdracht naar de leerbegeleider.
        </p>
        <p className="text-primair text-xl font-bold mb-12 reveal">De investering bedraagt €240.</p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Hoe ziet het traject eruit?</h2>
        <div className="space-y-6 mb-12">
          <div className="bg-wit rounded-2xl p-6 border border-primair/10 reveal">
            <h3 className="font-bold text-primair mb-2">Kennismaking en intake</h3>
            <p className="text-tekst/80 leading-relaxed">
              In de praktijk of via (beeld)bellen verkennen we de hulpvraag rondom leren en kijken we waar jouw kind tegenaan loopt. We kijken naar het geheel: je kind, de school en thuissituatie. <strong>Je kind is nog niet bij deze intake.</strong> Per mail ontvang je een vragenlijst over zwangerschap en geboorte, die voor de eerste sessie wordt ingevuld.
            </p>
          </div>
          <div className="bg-wit rounded-2xl p-6 border border-primair/10 reveal">
            <h3 className="font-bold text-primair mb-2">De eerste sessie</h3>
            <p className="text-tekst/80 leading-relaxed">
              We verkennen de binnenwereld van jouw kind en bespreken hoe zwangerschap en geboorte van invloed is op het leren en functioneren nu. We onderzoeken waar er disbalansen, belemmerende overtuigingen of reflexen in de weg staan om tot leren te komen. Voor thuis krijgen jullie tips en lichaamsgerichte oefeningen mee.
            </p>
          </div>
          <div className="bg-wit rounded-2xl p-6 border border-primair/10 reveal">
            <h3 className="font-bold text-primair mb-2">De tweede sessie</h3>
            <p className="text-tekst/80 leading-relaxed">
              Afhankelijk van de hulpvraag en uitkomsten uit eerdere sessies werken we met verschillende methodes en/of spelmateriaal. Het doel is dat je kind leert voelen wat er gebeurt vanbinnen en tools krijgt om zichzelf te reguleren. Ook hier krijgen jullie praktische oefeningen mee voor thuis of school.
            </p>
          </div>
          <div className="bg-wit rounded-2xl p-6 border border-primair/10 reveal">
            <h3 className="font-bold text-primair mb-2">De derde sessie</h3>
            <p className="text-tekst/80 leading-relaxed mb-3">
              We maken een opstelling rondom de vraag: hoe ga ik naar de leerbegeleiding? Wat heb ik nodig? Wie helpt mij? Wat doen we als we vastlopen? Samen maken we een <strong>&apos;mini-handleiding&apos;</strong> : concreet, overzichtelijk en startklaar voor de leerbegeleiding!
            </p>
            <p className="text-tekst/80 leading-relaxed">
              Na afloop volgt een overdracht naar de leerondersteuner met inzicht in: regulatie-behoeftes, gevoeligheden, helpende interventies en wat juist níet werkt.
            </p>
          </div>
        </div>

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-primair mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-tekst/80 mb-6">
            Een kennismaking en intake is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken dan samen naar jullie hulpvraag en of het Leerfundament traject aansluit bij wat jouw kind nu nodig heeft.
          </p>
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#watWeDoen-lijst', '#voorWie-lijst']} />
    </>
  );
}
