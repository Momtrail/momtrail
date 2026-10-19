import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: 'New Mom, New Baby' };

const voorWie = [
  "Baby's die veel huilen, onrustig zijn of moeilijk tot rust komen",
  'Moeders die zich overweldigd voelen, gespannen zijn of twijfelen aan zichzelf',
  'Ouders die voelen: dit is niet hoe we het voor ons zagen',
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

        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-4">Dit is er voor:</h2>
          <ul className="space-y-3">
            {voorWie.map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <Kompas className="text-achtergrond/60 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/IMG_9909.JPG')", backgroundSize: 'cover', backgroundPosition: 'center 25%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;you are exactly the mother your baby needs.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat we samen aanpakken</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          We kijken naar jou als moeder en naar jullie als systeem. We gaan aan de slag met de invloed van zwangerschap en geboorte op jou en je baby, en bouwen samen aan meer rust, vertrouwen en verbinding.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          Via zenuwstelselregulatie, lichaamsgerichte technieken en ruimte voor jouw verhaal zoeken we uit wat jij of jullie kindje nodig heeft om spanning te verlichten en de draad weer op te pakken. Zodat er ruimte komt om samen ook te gaan genieten.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">De investering</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {[
            { naam: 'Explore', duur: '2 maanden', sessies: '4 sessies', prijs: '€697', termijnen: '3 x €249', populair: false },
            { naam: 'Pause', duur: '3 maanden', sessies: '6 sessies', prijs: '€997', termijnen: '3 x €349', populair: true },
            { naam: 'Reset', duur: '4 maanden', sessies: '8 sessies', prijs: '€1147', termijnen: '3 x €399', populair: false },
          ].map(r => (
            <div key={r.naam} className={`rounded-3xl p-8 flex flex-col reveal ${r.populair ? 'bg-primair shadow-xl' : 'bg-wit border border-primair/10 shadow-sm'}`}>
              {r.populair && (
                <span className="inline-block bg-achtergrond text-primair text-xs font-bold px-3 py-1.5 rounded-full mb-4 self-start tracking-widest uppercase">meest gekozen</span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${r.populair ? 'text-achtergrond' : 'text-primair'}`} style={{ fontFamily: 'var(--font-buydog)' }}>{r.naam}</h3>
              <p className={`mb-6 ${r.populair ? 'text-achtergrond/80' : 'text-tekst/60'}`}>
                <span className="text-lg font-semibold">{r.duur}</span>
                <span className="text-sm"> · {r.sessies}</span>
              </p>
              <div className={`border-t pt-5 mt-auto ${r.populair ? 'border-achtergrond/20' : 'border-primair/10'}`}>
                <p className={`text-4xl font-bold ${r.populair ? 'text-achtergrond' : 'text-primair'}`}>{r.prijs}</p>
                <p className={`text-sm mt-1.5 ${r.populair ? 'text-achtergrond/55' : 'text-tekst/40'}`}>of {r.termijnen}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-wit border border-primair/10 rounded-2xl p-6 mb-8 reveal">
          <ul className="space-y-3 mb-5">
            {[
              'Intake',
              'Individuele sessies van 75 minuten, in mijn praktijkruimte of online',
              'Begeleiding via WhatsApp en voiceberichten tussen de sessies door',
              'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
              'Toegang tot de Rust Reset: een programma van 7 dagen met een introductie in zenuwstelselregulatie',
            ].map(i => (
              <li key={i} className="flex items-start gap-3 text-tekst/80 text-sm">
                <Kompas />
                {i}
              </li>
            ))}
          </ul>
          <p className="text-tekst/60 text-sm border-t border-primair/10 pt-4">Kom je uit de gemeente West Maas en Waal of de Betuwe? Dan kan begeleiding mogelijk via PGB voor 100% vergoed worden. Wil je daarna doorgaan? Je kunt het traject verlengen met een <strong className="text-tekst">Trailpass</strong> van 3 sessies voor €397.</p>
        </div>

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
