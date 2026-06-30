import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Somatic Yoga' };

const herken = [
  'Je zit veel in je hoofd en weinig in je lijf',
  'Je voelt chronische spanning, vermoeidheid of stress',
  'Je bent snel overprikkeld, overweldigd of angstig',
  'Je hebt moeite met grenzen voelen of aangeven',
  'Je staat voortdurend \'aan\' en wil meer contact maken met jezelf',
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
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/aanbod/moeder-en-kind" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar Moeder & Kind</Link>

        <h1 className="text-3xl font-bold text-primair mb-2 reveal">Somatic Yoga</h1>
        <p className="text-tekst/60 italic text-lg mb-10 reveal">Terug naar je lijf, terug naar jezelf</p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Leer weer voelen wat je lichaam je probeert te vertellen, spanning ontladen en je zenuwstelsel sneller terug te laten schakelen naar rust en ontspanning. <strong>Deze les is perfect voor je als jij een &apos;wandelend hoofd&apos; bent...</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Somatic Yoga combineert de rust van (yin) yoga met lichaamsgerichte oefeningen om je zenuwstelsel te kalmeren en spanning op te lossen die vastzit in je lichaam. Niet vanuit de gedachte dat je iets moet fixen of beter moet worden, maar <strong>beginnen bij wat er te voelen is.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Stap voor stap leer je weer contact te maken met de signalen van je lijf: wat heb ik nodig? Wat voel ik eigenlijk? Wat mag ik loslaten? Je zenuwstelsel heeft namelijk geen instructies nodig, maar ruimte... en die nemen we in het dagelijks leven vaak te weinig.
        </p>

        <div className="bg-achtergrond rounded-2xl p-6 mb-10 reveal">
          <p className="text-primair font-semibold italic text-lg">Je lichaam houdt bij wat je hoofd allang is vergeten.</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Herken jij dit?</h2>
        <ul id="herken-lijst" className="mb-12">
          {herken.map(h => (
            <li key={h} className="flex items-start gap-2 text-tekst/80 mb-2">
              <span className="text-accent mt-1">✦</span>
              {h}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">De drie lagen van Somatic Yoga</h2>
        <div className="space-y-6 mb-12">
          {lagen.map(l => (
            <div key={l.titel} className="bg-wit rounded-2xl p-6 border border-primair/10 reveal">
              <h3 className="font-bold text-primair mb-2">{l.titel}</h3>
              <p className="text-tekst/80 leading-relaxed">{l.tekst}</p>
            </div>
          ))}
        </div>

        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-wit mb-3">Klaar om terug te landen in jezelf?</h2>
          <p className="text-wit/80 mb-2">Tot 1 juli boek je een les voor de <strong className="text-wit">pilotprijs van €10 per les.</strong></p>
          <p className="text-wit/70 text-sm mb-6">Daarna gelden reguliere tarieven.</p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Boek een les →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#herken-lijst']} />
    </>
  );
}
