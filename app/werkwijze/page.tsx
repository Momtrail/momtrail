import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Werkwijze' };

const methodes = [
  {
    naam: 'NEI',
    voluit: 'Neuro Emotional Integration',
    tekst: 'Een lichaamsgerichte methode waarbij vastgelopen emoties en zenuwstelselpatronen worden opgelost via het lichaam zelf. Ik werk hierbij ook op de energetische laag — zonder dat je alles in woorden hoeft te vatten.',
    voor: 'Moeder & kind',
  },
  {
    naam: 'Hartcoherentie',
    voluit: null,
    tekst: 'Via het ritme van je hart breng je het zenuwstelsel in een staat van coherentie: meer rust, focus en veerkracht. Je leert technieken die je ook zelf thuis kunt toepassen.',
    voor: 'Moeder',
  },
  {
    naam: 'Ademhaling',
    voluit: null,
    tekst: 'De adem is een van de snelste wegen naar het zenuwstelsel. Met gerichte ademhalingsoefeningen reguleer je stress, activeer je je herstelcapaciteit en kom je uit je hoofd.',
    voor: 'Moeder & kind',
  },
  {
    naam: 'EFT',
    voluit: 'Emotional Freedom Techniques',
    tekst: 'Een combinatie van cognitieve therapie en acupressuur. Door te tappen op specifieke punten terwijl je een belastende gedachte of emotie vasthoudt, neemt de lading ervan af.',
    voor: 'Moeder & kind',
  },
  {
    naam: 'Zenuwstelselregulatie',
    voluit: null,
    tekst: 'Gebaseerd op de polyvagaaltheorie: je leert begrijpen hoe jouw zenuwstelsel reageert op stress, en hoe je het bewust kunt begeleiden naar rust en veiligheid.',
    voor: 'Moeder & kind',
  },
  {
    naam: 'Systemisch werk',
    voluit: null,
    tekst: 'Opstellingen en systemisch denken om patronen in je familie of gezin zichtbaar te maken. Vaak speelt er meer dan wat je zelf ziet — systemisch werk maakt die lagen toegankelijk.',
    voor: 'Moeder & kind',
  },
  {
    naam: 'Geboortepsychologie',
    voluit: null,
    tekst: 'De zwangerschap en geboorte hebben een diepere invloed dan we vaak beseffen — op het zenuwstelsel van je kind én op jou als moeder. In het Littletrail traject kijken we bewust naar die eerste ervaringen.',
    voor: 'Kind',
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Hoe ik werk</h1>
          <p className="text-achtergrond/80 text-xl italic">Lichaamsgericht, met hoofd én hart</p>
        </div>
      </div>

      {/* Achtergrond */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-5 reveal">Mijn achtergrond</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Ik werk al meer dan 16 jaar in de begeleiding. Mijn basis ligt in de <strong>GGZ, social work en reïntegratie</strong> — werkvelden waar ik leerde kijken achter het gedrag en de klacht, en waar ik merkte dat praten alleen zelden genoeg is.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Die ervaring neem ik mee in alles wat ik doe. Ik begrijp hoe systemen werken, wat mensen vastzet en wat er nodig is om echt iets te laten verschuiven. Tegelijkertijd weet ik hoe het is om zelf moeder te zijn en vast te lopen — dat maakt mijn begeleiding concreet en herkenbaar.
        </p>
        <p className="text-tekst/80 leading-relaxed reveal">
          In de loop der jaren heb ik me gespecialiseerd in <strong>lichaamsgerichte therapie</strong>: het lichaam als toegang tot wat er écht speelt. Niet alleen praten over wat er is, maar voelen, bewegen en integreren. Dat is de rode draad in alles wat ik doe.
        </p>
      </section>

      {/* Methodes */}
      <section className="bg-achtergrond py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primair mb-2 reveal">Methodes die ik inzet</h2>
          <p className="text-tekst/60 italic mb-10 reveal">Welke methode ik gebruik, hangt af van jouw hulpvraag. Ik kies wat past.</p>
          <div className="flex flex-col gap-4">
            {methodes.map(m => (
              <div key={m.naam} className="bg-wit rounded-2xl p-6 reveal">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className="font-bold text-primair text-lg">{m.naam}</span>
                    {m.voluit && <span className="text-tekst/40 text-sm ml-2">— {m.voluit}</span>}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primair/40 shrink-0 mt-1">{m.voor}</span>
                </div>
                <p className="text-tekst/70 leading-relaxed text-sm">{m.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Benieuwd of dit bij jou past?</h2>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">Een kennismaking is altijd kosteloos en vrijblijvend. Ik vertel je graag meer over hoe ik werk en wat ik voor jou of je kind kan betekenen.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
          <Link href="/aanbod/trailstart" className="inline-block border-2 border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair/5 transition-colors">
            Plan je Trailstart →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
