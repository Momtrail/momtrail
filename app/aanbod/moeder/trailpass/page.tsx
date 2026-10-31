import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: 'Trailpass · Momtrail' };

const inbegrepen = [
  '3 individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Jij bepaalt wanneer je een sessie plant, zonder vaste planning',
  'Persoonlijke begeleiding via WhatsApp rondom je sessie',
  'Lichaamsgerichte oefeningen en handvatten voor thuis',
];

export default function TrailpassPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Trailpass</h1>
          <p className="text-achtergrond/80 text-xl italic">drie sessies, op jouw tempo, voor nieuwe inzichten</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Je bent niet per se op zoek naar een intensief traject. Maar je merkt dat het af en toe goed doet om even stil te staan: om iets uit te zoeken dat speelt, om nieuwe inzichten op te doen of om je lijf weer even te voelen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            De Trailpass geeft je die ruimte. Geen verplichtingen, geen vaste planning. Gewoon drie sessies die je kunt gebruiken wanneer jij er behoefte aan hebt.
          </p>
          <p className="font-bold text-tekst">
            Op jouw tempo, voor wat er nú speelt.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat is het?</h2>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Een Trailpass bestaat uit 3 losse sessies van 75 minuten. Je kiest zelf wanneer je een sessie plant en je hebt een jaar om ze te gebruiken. Elke sessie kiezen we samen een thema dat nu het meest speelt. Ik werk lichaamsgericht: we kijken niet alleen naar wat je denkt, maar ook naar wat je lijf vasthoudt.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Sessies</p>
            <p className="font-bold text-tekst text-sm">3 × 75 minuten</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Geldigheid</p>
            <p className="font-bold text-tekst text-sm">1 jaar</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Waar</p>
            <p className="font-bold text-tekst text-sm">Praktijkruimte of online</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Investering</p>
            <p className="font-bold text-primair text-xl">€397</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-5 reveal">Inbegrepen</h2>
        <ul className="space-y-3 mb-14">
          {inbegrepen.map(i => (
            <li key={i} className="flex items-start gap-3 text-tekst/80 reveal">
              <Kompas className="shrink-0 mt-0.5" />
              {i}
            </li>
          ))}
        </ul>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <h3 className="text-xl font-bold text-achtergrond mb-3">Al een traject gedaan?</h3>
          <p className="text-achtergrond/80 leading-relaxed">
            Na een Momtrail traject kun je altijd een Trailpass nemen om de draad weer op te pakken. Zo blijf je in beweging, zonder opnieuw te beginnen.
          </p>
        </div>

        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-3">Hoe het werkt</p>
          <p className="text-tekst/80 leading-relaxed">
            De Trailpass is bedoeld voor moeders die al een basis hebben, via een traject bij mij of elders, of die goed weten wat er speelt en gerichte ondersteuning zoeken. Weet je niet zeker of de Trailpass bij je past? Plan dan eerst een gratis kennismaking. Dan kijken we samen wat voor jou het meest zinvol is.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Veelgestelde vragen</h2>
        <div className="space-y-4 mb-14">
          {[
            {
              v: 'Wat is het verschil met een traject?',
              a: 'Bij een traject lopen we echt een aantal maanden samen op. Je krijgt dan toegang tot veel meer: de online leeromgeving met verdiepende opdrachten en oefeningen, persoonlijke begeleiding via WhatsApp tussen de sessies door, en toegang tot Mindful Moms. We werken gestructureerd toe naar een doel en er is ruimte om bij te sturen als het knelt. De Trailpass is losser: ideaal als je af en toe een sessie wilt zonder dat je ergens aan vastzit.',
            },
            {
              v: 'Voor wie is de Trailpass geschikt?',
              a: 'Voor moeders die niet een heel traject willen of nodig hebben, maar wel af en toe willen bijspijkeren. Dat kan zijn na een eerder traject, of als je al goed in contact staat met jezelf en gericht wilt werken aan een thema.',
            },
            {
              v: 'Waarom geen losse sessies?',
              a: 'Losse sessies zijn los van de Trailpass niet beschikbaar. De Trailpass geeft je drie sessies die je kunt spreiden, zodat er altijd ruimte is om iets te laten landen voor je de volgende sessie plant.',
            },
            {
              v: 'Wat als ik toch een traject nodig blijkt te hebben?',
              a: 'Dat kan blijken tijdens een kennismaking of na de eerste sessie. In dat geval bespreken we samen wat wijs is. Een Trailpass kan verrekend worden als je daarna instroomt in een traject.',
            },
            {
              v: 'Hoe lang zijn de sessies geldig?',
              a: 'Je hebt een jaar om de drie sessies te gebruiken vanaf de datum van aankoop.',
            },
            {
              v: 'Waar vinden de sessies plaats?',
              a: 'In mijn praktijkruimte in de regio Maas en Waal of online via video.',
            },
          ].map(faq => (
            <div key={faq.v} className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
              <p className="font-bold text-tekst mb-2">{faq.v}</p>
              <p className="text-tekst/70 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 reveal">
          <Link
            href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-center"
          >
            Plan je Trailpass →
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair/5 transition-colors text-center"
          >
            Plan een gratis kennismaking →
          </Link>
        </div>
        <p className="text-tekst/40 text-xs text-center reveal">3 sessies · €397 · 1 jaar geldig · Praktijkruimte of online</p>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
