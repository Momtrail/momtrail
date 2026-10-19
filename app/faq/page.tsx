import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Veelgestelde vragen' };

const vragen = [
  {
    categorie: 'Kosten & vergoeding',
    items: [
      {
        vraag: 'Kan ik dit traject vergoed krijgen via mijn werkgever?',
        antwoord: 'Dat is vaker mogelijk dan je denkt. Veel werkgevers hebben een coachingsbudget, vitaliteitsbudget of budget voor duurzame inzetbaarheid. Vraag ernaar bij HR — weinig mensen doen dat, maar het staat er vaak wel in de arbeidsvoorwaarden. Tip: benoem dat je een burnout wilt voorkomen. Verzuim kost een werkgever al snel meer dan dit traject.',
      },
      {
        vraag: 'Kan ik betalen in termijnen?',
        antwoord: 'Ja. Bij elk traject kun je kiezen voor betaling in drie termijnen. Je betaalt dan drie maandelijkse bedragen in plaats van het volledige bedrag vooraf. De exacte termijnbedragen vind je bij de beschrijving van elk traject.',
      },
      {
        vraag: 'Is begeleiding mogelijk via PGB?',
        antwoord: 'Woon je in de regio Maas en Waal of de Betuwe? Dan kan begeleiding via ambulante zorg mogelijk voor 100% vergoed worden via het PGB, na goedkeuring van de gemeente. Lees meer op de pagina over ambulante begeleiding.',
        link: { tekst: 'Meer over PGB / ambulant →', href: '/aanbod/ambulante-begeleiding' },
      },
    ],
  },
  {
    categorie: 'Trailstart',
    items: [
      {
        vraag: 'Wat is een Trailstart?',
        antwoord: 'De Trailstart is een losse sessie van 60 tot 75 minuten rond één thema — voor jou als moeder of voor je kind. Voor als je eerst wilt ervaren hoe ik werk, of gewoon nu iets wilt met wat er speelt. Je gaat naar huis met iets concreets.',
        link: { tekst: 'Meer over de Trailstart →', href: '/aanbod/trailstart' },
      },
      {
        vraag: 'Wordt de Trailstart verrekend als ik daarna een traject start?',
        antwoord: 'Ja. Doe je binnen 7 dagen na de Trailstart mee aan een traject, dan wordt de €97 verrekend met de trajectprijs. Bovendien telt de Trailstart dan als extra sessie — je krijgt dus het volledige traject én de Trailstart erbij, cadeau. Dit is een tijdelijke actie.',
      },
      {
        vraag: 'Wat kost een Trailstart?',
        antwoord: '€97. Stap je binnen 7 dagen in een traject? Dan wordt dit bedrag verrekend en krijg je de sessie cadeau bovenop je traject.',
      },
    ],
  },
  {
    categorie: 'Trajecten',
    items: [
      {
        vraag: 'Wat is het verschil tussen een Momtrail en een Littletrail traject?',
        antwoord: 'Het Momtrail traject is voor jou als moeder: je eigen energie, patronen en zenuwstelsel staan centraal. Het Littletrail traject is voor als je je zorgen maakt om je kind. Daarin werk ik meestal met jou als ouder — jij bent er elke dag en kent je kind het best. Soms overlappen de twee: dan is een combinatie of verwijzing mogelijk.',
        link: { tekst: 'Bekijk het Momtrail traject →', href: '/aanbod/moeder/traject-moeder' },
      },
      {
        vraag: 'Kan ik een traject verlengen?',
        antwoord: 'Ja, met een Trailpass. De Trailpass is een verlenging van 3 sessies, geldig voor 3 maanden, voor €397. Je kunt hem toevoegen aan elk traject als je na afloop meer tijd wilt.',
      },
      {
        vraag: 'Waar vinden de sessies plaats?',
        antwoord: 'De sessies zijn in mijn praktijkruimte of online via beeldscherm. We spreken bij de kennismaking af wat het beste bij jou past.',
      },
      {
        vraag: 'Hoe lang duurt een sessie?',
        antwoord: 'Individuele sessies duren 75 minuten. Een Trailstart duurt 60 tot 75 minuten.',
      },
    ],
  },
  {
    categorie: 'Kennismaking',
    items: [
      {
        vraag: 'Hoe werkt de gratis kennismaking?',
        antwoord: 'De kennismaking duurt 30 minuten en is altijd kosteloos en vrijblijvend. We kijken samen naar je hulpvraag en of een traject bij je past. Je kunt kennismaken via telefoon of Google Meet.',
        link: { tekst: 'Plan een kennismaking →', href: '/contact' },
      },
      {
        vraag: 'Zit ik ergens aan vast na de kennismaking?',
        antwoord: 'Nee. De kennismaking is volledig vrijblijvend. Je beslist daarna zelf of en wanneer je wilt starten.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Veelgestelde vragen</h1>
          <p className="text-achtergrond/80 text-xl italic">Praktische antwoorden op een rij</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-16">
        {vragen.map(cat => (
          <div key={cat.categorie} className="mb-12 reveal">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-4">{cat.categorie}</h2>
            <div className="flex flex-col gap-2">
              {cat.items.map(item => (
                <details key={item.vraag} className="group bg-wit border border-primair/10 rounded-2xl overflow-hidden">
                  <summary className="px-6 py-5 cursor-pointer list-none flex items-center gap-4 hover:bg-achtergrond/50 transition-colors">
                    <svg className="w-4 h-4 text-primair shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                    <span className="font-semibold text-tekst">{item.vraag}</span>
                  </summary>
                  <div className="px-6 pb-6 pt-1 border-t border-primair/8">
                    <p className="text-tekst/70 leading-relaxed text-sm mt-3">{item.antwoord}</p>
                    {item.link && (
                      <Link href={item.link.href} className="inline-block mt-3 font-bold text-accent text-sm hover:underline">
                        {item.link.tekst}
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <p className="font-semibold text-tekst mb-2">Staat je vraag er niet bij?</p>
          <p className="text-tekst/70 text-sm mb-5">Een kennismaking is kosteloos en vrijblijvend — ik beantwoord al je vragen graag persoonlijk.</p>
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
