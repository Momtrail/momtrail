import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import NieuwsbriefForm from '@/components/NieuwsbriefForm';

export const metadata: Metadata = { title: 'Agenda & events' };

export default function AgendaPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-primair mb-4 reveal">Agenda & events</h1>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Hier vind je alle komende lessen, workshops en evenementen van Momtrail. Of je nu voor het eerst komt of al vaker meedeed, je bent altijd welkom. Wil je op de hoogte blijven van nieuwe data? Meld je dan aan via het contactformulier.
        </p>

        {/* Mindful Moms – 20 december */}
        <div className="bg-wit border border-primair/15 rounded-2xl p-8 md:p-12 mb-10 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-accent/20 text-primair text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Aankomend</span>
          </div>
          <h2 className="text-2xl font-bold text-primair mb-2">Mindful Moms</h2>
          <p className="text-primair font-semibold text-lg mb-1">Zo 20 december 2026 · stilstaan bij jouw jaar</p>
          <p className="text-tekst/60 text-sm mb-6">10:00–12:00 · De Korenbloem, Boven-Leeuwen</p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Even geen mama-modus: je lijf komt tot rust en je voelt weer wat er in jou leeft. We beginnen met zachte somatische en yoga-oefeningen: rekken, ademen, spanning loslaten. Dan is er ruimte voor mindfulness. Elke ochtend heeft een eigen thema.
          </p>
          <a
            href="https://momtrail.kennis.shop/pay/mindful-moms"
            className="inline-block bg-primair text-wit font-bold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Schrijf je in →
          </a>
        </div>

        {/* Mindful Moms – 24 januari */}
        <div className="bg-wit border border-primair/15 rounded-2xl p-8 md:p-12 mb-10 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-accent/20 text-primair text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Aankomend</span>
          </div>
          <h2 className="text-2xl font-bold text-primair mb-2">Mindful Moms</h2>
          <p className="text-primair font-semibold text-lg mb-1">Zo 24 januari 2027 · visionboard voor 2027</p>
          <p className="text-tekst/60 text-sm mb-6">10:00–12:00 · De Korenbloem, Boven-Leeuwen</p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Even geen mama-modus: je lijf komt tot rust en je voelt weer wat er in jou leeft. We beginnen met zachte somatische en yoga-oefeningen: rekken, ademen, spanning loslaten. Dan is er ruimte voor mindfulness. Elke ochtend heeft een eigen thema.
          </p>
          <a
            href="https://momtrail.kennis.shop/pay/mindful-moms"
            className="inline-block bg-primair text-wit font-bold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Schrijf je in →
          </a>
        </div>

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
          <a
            href="https://momtrail.kennis.shop/pay/ouder-kind-klankreis"
            className="inline-block bg-primair text-wit font-bold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Schrijf je in →
          </a>
        </div>

        <div className="bg-achtergrond rounded-2xl p-8 text-center reveal">
          <h2 className="text-xl font-bold text-primair mb-3">Schrijf je in voor Momtrail Mail</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 max-w-lg mx-auto">
            Geen zorgen, ik ga je niet dagelijks spammen. Eens per maand stuur ik je de nieuwsbrief met nieuwe events of toffe updates over wat er te doen is bij Momtrail. Zo ben jij als echte &lsquo;Momtrailer&rsquo; als eerste op de hoogte!
          </p>
          <NieuwsbriefForm />
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
