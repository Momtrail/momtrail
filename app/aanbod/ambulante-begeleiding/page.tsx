import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Ambulante begeleiding (PGB)' };

const hulpBij = [
  'Structuur en overzicht in het dagelijks leven',
  'Omgaan met stress/burn-out, overprikkeling of chronische (pijn)klachten',
  'Emotieregulatie',
  'Plannen en organiseren',
  'Zelfvertrouwen en eigen regie versterken',
  'Sociale situaties en communicatie',
  'Balans vinden tussen inspanning en ontspanning',
];

export default function AmbulantePage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>

        <h1 className="text-3xl font-bold text-primair mb-2 reveal">Ambulante begeleiding (PGB)</h1>
        <p className="text-accent font-semibold mb-8 reveal">100% vergoed via gemeente</p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Soms loop je vast in het dagelijks leven. Dingen die voor anderen vanzelfsprekend lijken, <strong>kosten jou veel energie.</strong> Misschien ervaar je stress, overprikkeling, moeite met structuur of het vinden van balans in je leven. Je hoeft daar niet alleen doorheen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Met ambulante begeleiding ondersteun ik je in jouw eigen leefomgeving. Samen kijken we naar wat er speelt, waar je tegenaan loopt en wat jij nodig hebt om <strong>weer meer rust, overzicht en vertrouwen te ervaren.</strong>
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Begeleiding die écht aansluit bij jou</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Mijn begeleiding is persoonlijk en afgestemd op jouw situatie. We kijken niet alleen naar praktische zaken, maar ook naar <strong>wat er onder de oppervlakte speelt.</strong> Vaak hangen gedachten, gevoelens, lichaam en zenuwstelsel namelijk nauw met elkaar samen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Vanuit mijn achtergrond in social work en de GGZ combineer ik praktische begeleiding met inzicht in hoe stress, emoties en het zenuwstelsel werken. Zo draagt de begeleiding bij aan meer zelfinzicht en veerkracht.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Waarbij kan begeleiding helpen?</h2>
        <ul id="hulp-lijst" className="mb-4">
          {hulpBij.map(h => (
            <li key={h} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {h}
            </li>
          ))}
        </ul>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          We werken stap voor stap, <strong>in een tempo dat bij jou past.</strong>
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Begeleiding via PGB</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          De begeleiding kan worden gefinancierd vanuit een <strong>Persoonsgebonden Budget (PGB) via de Wmo</strong> na goedkeuring van de gemeente. Mijn werkgebied is de regio <strong>Maas en Waal en de Betuwe.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Met een PGB kun je zelf kiezen door wie je begeleid wilt worden. Samen kijken we of mijn begeleiding aansluit bij jouw indicatie en hulpvraag. Ik kan ook meedenken in het proces rondom de start van de begeleiding.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Wil je meer lezen over PGB begeleiding? Ik ben aangesloten bij <strong>Mentaal Sterk.</strong> Op hun website vind je meer informatie over PGB en ambulante begeleiding.
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-primair mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-tekst/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken samen of mijn begeleiding aansluit bij jouw hulpvraag.</p>
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#hulp-lijst']} />
    </>
  );
}
