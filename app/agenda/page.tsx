import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Agenda & events' };

export default function AgendaPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-primair mb-4 reveal">Agenda & events</h1>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Hier vind je alle komende lessen, workshops en evenementen van Momtrail. Of je nu voor het eerst komt of al vaker meedeed, je bent altijd welkom. Wil je op de hoogte blijven van nieuwe data? Meld je dan aan via het contactformulier.
        </p>

        {/* Ouder-kind klankreis */}
        <div className="bg-wit border border-primair/15 rounded-2xl p-8 md:p-12 mb-10 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-accent/20 text-primair text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Aankomend</span>
          </div>
          <h2 className="text-2xl font-bold text-primair mb-2">Ouder-kind klankreis</h2>
          <p className="text-primair font-semibold text-lg mb-1">31 januari 2027</p>
          <p className="text-tekst/60 text-sm mb-6">Ochtend · De Korenbloem, Boven-Leeuwen · 6 t/m 15 jaar</p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Met de ontspanning en de mooie klanken van Wendy van Flowing Sounds hoeven jullie even helemaal niets te doen. Een fijne ochtend voor meer verbinding met je kind.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8">
            Meer details volgen. Schrijf je in voor de interesselijst en je ontvangt als eerste alle informatie en een kennismakingskorting.
          </p>

          <details className="group">
            <summary className="inline-block bg-primair text-wit font-bold px-7 py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity list-none">
              Schrijf je in voor de interesselijst →
            </summary>
            <div className="bg-achtergrond rounded-xl p-6 mt-4">
              <p className="text-tekst/60 text-sm mb-4">Je krijgt als eerste de details en een kennismakingskorting.</p>
              <div className="_form_1" />
              <Script src="https://momtrail.activehosted.com/f/embed.php?id=1" strategy="lazyOnload" />
            </div>
          </details>
        </div>

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <h2 className="text-xl font-bold text-primair mb-3">Blijf op de hoogte</h2>
          <p className="text-tekst/80 mb-6">Wil je als eerste weten wanneer er nieuwe evenementen zijn? Neem contact op en ik zet je op de lijst.</p>
          <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Zet me op de lijst →
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
