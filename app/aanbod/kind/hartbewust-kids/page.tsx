import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Hartbewust Kids cursus' };

const methodes = [
  'Kinderyoga',
  'Ademhaling',
  'Creatieve opdrachten en spel',
  'Somatische oefeningen',
  'Mindfulness',
];

export default function HartbewustKidsPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Kind</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Hartbewust Kids</h1>
          <p className="text-achtergrond/80 text-xl italic">Voor kinderen die weer mogen voelen dat ze goed zijn zoals ze zijn</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Herken jij dit?</h2>
        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Er wordt steeds meer gevraagd van kinderen. Meer prikkels, meer tempo, meer druk om mee te komen. En dat zie je terug: driftbuien, druk of opstandig gedrag of juist een kind dat zich steeds meer terugtrekt of onzeker is. Dat kan thuis of op school voor problemen zorgen.
          </p>
          <p className="text-tekst/80 leading-relaxed">
            Als dit bekend voelt, ben je hier op de goede plek. Zoals veel ouders wil jij dat je kind leert omgaan met zijn of haar emoties en met die druk en prikkels, in plaats van er last van te blijven houden. Zodat het weer mag voelen dat er niets mis met hem of haar is. Het zijn stuk voor stuk prachtige, gevoelige kinderen met unieke talenten.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Maak kennis met Hartbewust Kids</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          HartBewust Kids is een laagdrempelige cursus van 10 weken, waarin kinderen van 6 tot 12 jaar in een kleine groep (maximaal 5 kinderen) <strong>spelenderwijs leren om weer rust te voelen</strong>, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn. Gewoon goed, precies zoals ze zijn.
        </p>

        <div className="border-l-4 border-accent pl-8 mb-8 reveal">
          <p className="font-semibold text-tekst mb-4">We werken met een mix van:</p>
          <ul className="space-y-2">
            {methodes.map(m => (
              <li key={m} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Doordat de groep klein blijft, is er volop ruimte voor persoonlijke aandacht: elk kind krijgt precies de begeleiding die het nodig heeft.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond/90 leading-relaxed italic">
            Na de cursus merk je dat je kind weerbaarder is geworden, beter voor zichzelf kan opkomen en beter om kan gaan met drukte of spanning. Niet omdat het thuis of op school rustiger wordt, maar omdat zij zelf de tools hebben gekregen om daarmee om te gaan.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Is deze cursus iets voor jouw kind?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          HartBewust Kids is bedoeld voor kinderen van 6 tot en met 12 jaar.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Alle kinderen zijn welkom. Sommige kinderen doen mee omdat ze worstelen met bijvoorbeeld hooggevoeligheid of concentratieproblemen/ADHD, en daardoor sneller overprikkeld raken. Andere kinderen ervaren geen klachten, maar krijgen juist van jongs af aan mooie tools mee om stevig in hun schoenen te staan en met spanning en emoties om te gaan.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          In beide gevallen geldt: hoe eerder een kind leert vertrouwen op zichzelf, hoe steviger die basis voor de rest van zijn of haar leven.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Jij als ouder doet ook mee: het OuderKracht programma</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Verandering bij je kind gebeurt niet alleen in de les zelf, maar vooral ook thuis. Daarom sta je er bij HartBewust Kids niet alleen voor.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Na elke les ontvang je als ouder informatie en oefeningen, zodat je precies weet waar je kind mee bezig is en hoe je daarop kunt aansluiten. Daarnaast krijg je automatisch toegang tot het <strong>OuderKrachtprogramma</strong>: een online programma vol kennis, praktische oefeningen en tools om het effect van de lessen ook thuis te verstevigen. Met als extra optie een live dag, waarop je samen met andere ouders ervaringen, inzichten en technieken uitwisselt.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Onderzoek bevestigt wat wij al langer zien in de praktijk: de betrokkenheid van ouders maakt het verschil tussen een leuke cursus en een blijvende verandering. Jij bent daarin geen toeschouwer, maar een belangrijke schakel.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische informatie</h2>
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-12 reveal">
          <dl className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Startdatum</dt>
              <dd className="text-tekst/80">Dinsdag 22 september 2026 (10 wekelijkse lessen, geen les in de herfstvakantie)</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Tijd</dt>
              <dd className="text-tekst/80">16:00 – 16:45 uur</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Locatie</dt>
              <dd className="text-tekst/80">Centrum de Korenbloem, Korenbloemstraat 75, Boven Leeuwen</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Groepsgrootte</dt>
              <dd className="text-tekst/80">Maximaal 5 kinderen</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Leeftijd</dt>
              <dd className="text-tekst/80">6 tot en met 12 jaar</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Inbegrepen</dt>
              <dd className="text-tekst/80">10 lessen HartBewust Kids + het volledige OuderKracht programma</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold text-primair sm:w-40 shrink-0">Investering</dt>
              <dd className="text-tekst/80 font-bold text-2xl text-primair">€ 444,–<span className="text-base font-normal text-tekst/70 ml-2">(betalen in termijnen is mogelijk)</span></dd>
            </div>
          </dl>
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Geef je kind weer de ruimte om te stralen</h2>
          <p className="text-achtergrond/80 mb-4 leading-relaxed">
            Twijfel je? Op 22 september kan je kind een <strong className="text-achtergrond">proefles</strong> doen (kosten: € 20,–, wordt verrekend als je besluit mee te doen).
          </p>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Plekken zijn beperkt tot 5 kinderen per groep, zodat ieder kind écht gezien wordt. Wacht niet tot het "vanzelf overgaat" — meld je kind vandaag nog aan.
          </p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Meld je kind aan →
          </Link>
        </div>

      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
