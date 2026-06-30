import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'New Mom, New Baby' };

const voorWie = [
  "Baby's die veel huilen, onrustig zijn of moeilijk tot rust komen",
  'Moeders die zich overweldigd voelen, gespannen zijn of twijfelen aan zichzelf',
  'Ouders die voelen: dit is niet hoe we het voor ons zagen',
];

const werkwijze = [
  'Zenuwstelselregulatie',
  'Geboorteverwerking en de invloed van zwangerschap en geboorte',
  'Lichaamsgerichte interventies en/of NEI therapie',
  'Ruimte voor jouw verhaal',
];

export default function NewMomNewBabyPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/zwanger-en-kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Zwanger & Baby</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>New Mom, New Baby</h1>
          <p className="text-achtergrond/80 text-xl italic">Wanneer de roze wolk uitblijft</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro */}
        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Jullie zijn (opnieuw) ouders geworden van een lief, klein babytje. Maar de roze wolk blijft helaas uit. Bijvoorbeeld omdat je babytje veel huilt of omdat jij zelf niet lekker in je vel zit...
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Jullie hadden een pittige start. Je had zo gehoopt op iets anders...
          </p>
          <p className="text-tekst/80 leading-relaxed">
            Als jullie start anders is gelopen dan je hoopte, kan dat veel verdriet en spanning oproepen. Een moeilijke zwangerschap, een overweldigende of zelfs traumatische geboorte of lastige start... het kunnen allemaal redenen zijn waardoor je niet op een roze wolk zit.
          </p>
        </div>

        {/* Voor wie */}
        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-4">Dit traject van 2 maanden is er voor:</h2>
          <ul className="space-y-3">
            {voorWie.map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <span className="text-achtergrond/60 mt-1 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Werkwijze */}
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Hoe we werken</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          We kijken naar jullie als systeem en werken binnen dit traject met:
        </p>
        <div className="border-l-4 border-accent pl-8 mb-6 reveal">
          <ul className="space-y-3">
            {werkwijze.map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <span className="text-accent mt-1 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          Zodat er weer meer rust en vertrouwen komt in jullie gezin. En wie weet komt er steeds wat meer ruimte om samen ook te gaan genieten...
        </p>

        {/* Sessies */}
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Zo ziet het traject eruit</h2>
        <div className="space-y-4 mb-16">
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <h3 className="font-bold text-primair mb-2">Kennismaking</h3>
            <p className="text-tekst/80 leading-relaxed mb-2">
              Tijdens een kosteloze kennismaking bespreken we hoe jullie start was en wat jullie hulpvraag is.
            </p>
            <p className="text-tekst/80 leading-relaxed">
              Daarna stuur ik je een vragenlijst over de zwangerschap en geboorte.
            </p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <h3 className="font-bold text-primair mb-2">De sessies</h3>
            <p className="text-tekst/80 leading-relaxed">
              In drie sessies besteden we aandacht aan jullie ervaringen uit de zwangerschap, geboorte en daarna. We kijken waar onrust en spanning vandaan komen en ik blijf twee maanden als vast gezicht betrokken in jullie zoektocht. Samen zoeken we uit wat jij of jullie kindje nodig heeft om ongemak te verlichten en emoties te verwerken.
            </p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <h3 className="font-bold text-primair mb-2">Whatsappbegeleiding</h3>
            <p className="text-tekst/80 leading-relaxed">
              Je hebt de mogelijkheid tot onbeperkt Whatsappcontact. Zo heb je altijd een hulplijn dichtbij als jouw hoofd overloopt.
            </p>
          </div>
        </div>

        {/* Investering */}
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">De investering</h2>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Dit traject is inclusief kennismaking/intake, overzicht van geboortepatronen, posters met informatie, drie sessies van 60-75 min (online, in de praktijk of bij je thuis in een straal van max. 20 km vanaf Boven Leeuwen) en Whatsappbegeleiding gedurende twee maanden.
          </p>
          <p className="text-3xl font-bold text-primair mb-2">€419</p>
        </div>

        {/* CTA */}
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je meer weten of kennismaken?</h2>
          <p className="text-achtergrond/80 mb-6">Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong></p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
