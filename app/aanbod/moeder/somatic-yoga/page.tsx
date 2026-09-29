import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: 'Somatic Yoga' };

const herken = [
  'Je zit veel in je hoofd en weinig in je lijf',
  'Je voelt chronische spanning, vermoeidheid of stress',
  'Je bent snel overprikkeld, overweldigd of angstig',
  'Je hebt moeite met grenzen voelen of aangeven',
  'Je staat voortdurend aan en wil meer contact maken met jezelf',
];

const lagen = [
  {
    titel: 'Ontladen',
    tekst: 'Spanning, stress en oude patronen mogen het lichaam verlaten. Via zachte beweging, trillen (TRE) en adem laat je lijf los wat het vasthoudt.',
  },
  {
    titel: 'Reguleren',
    tekst: 'Je zenuwstelsel leren kennen en begrijpen. Wat brengt je in activatie? Wat helpt je landen? We bouwen aan veiligheid in jezelf, zodat je het niet meer extern hoeft te zoeken.',
  },
  {
    titel: 'Voelen',
    tekst: 'Je kunt jezelf niet rustig denken. We gaan opnieuw leren luisteren naar wat jouw lichaam zegt. Niet redeneren vanuit je hoofd, maar écht voelen wat er nodig is.',
  },
];

export default function SomaticYogaPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/moeder" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Moeder</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Somatic Yoga</h1>
          <p className="text-achtergrond/80 text-xl italic">Terug naar je lijf, terug naar jezelf</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 leading-relaxed mb-6 text-lg reveal">
          Leer weer voelen wat je lichaam je probeert te vertellen, spanning ontladen en je zenuwstelsel sneller terug te laten schakelen naar rust en ontspanning. <strong>Deze les is perfect voor je als jij een wandelend hoofd bent...</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Somatic Yoga combineert de rust van (yin) yoga met lichaamsgerichte oefeningen om je zenuwstelsel te kalmeren en spanning op te lossen die vastzit in je lichaam. Niet vanuit de gedachte dat je iets moet fixen of beter moet worden, maar <strong>beginnen bij wat er te voelen is.</strong>
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond font-semibold italic text-xl text-center">Je lichaam houdt bij wat je hoofd allang is vergeten.</p>
        </div>

        <div className="bg-achtergrond rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-primair mb-4">Herken jij dit?</h2>
          <ul className="space-y-3">
            {herken.map(h => (
              <li key={h} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/IMG_5911 2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 35%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;your body is not a problem to be solved. it is a home to return to.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">De drie lagen van Somatic Yoga</h2>
        <div className="space-y-4 mb-16">
          {lagen.map((l, i) => (
            <div key={l.titel} className={`rounded-2xl p-6 reveal ${i === 1 ? 'bg-primair' : 'bg-wit border border-primair/10'}`}>
              <h3 className={`font-bold mb-2 ${i === 1 ? 'text-achtergrond' : 'text-primair'}`}>{l.titel}</h3>
              <p className={`leading-relaxed ${i === 1 ? 'text-achtergrond/80' : 'text-tekst/80'}`}>{l.tekst}</p>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Klaar om terug te landen in jezelf?</h2>
          <Link href="/agenda" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-2">
            Bekijk de agenda →
          </Link>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
