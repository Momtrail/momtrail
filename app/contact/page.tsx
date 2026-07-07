import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';
import LevenswielIntro from '@/components/LevenswielIntro';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-6">Plan of boek een afspraak</h1>

      {/* Persoonlijke intro als bezoeker vanuit Levenswiel komt */}
      <Suspense>
        <LevenswielIntro />
      </Suspense>

      <p className="text-tekst/80 leading-relaxed mb-4">
        Wil je een kosteloze kennismaking plannen en je hulpvraag bespreken? Of wil je een consult of een somatic yoga les boeken?
        Hieronder vind je mijn digitale agenda.
      </p>
      <p className="text-tekst/80 leading-relaxed mb-10">
        Je kunt ook je gegevens invullen op het contactformulier. Dan neem ik binnen twee werkdagen contact met je op.
        Ik kijk ernaar uit je te ontmoeten!
      </p>

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget mb-16 rounded-2xl overflow-hidden"
        data-url="https://calendly.com/momtrail"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Contactformulier */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-primair mb-6">Of stuur een bericht</h2>
        <ContactForm />
      </div>

      {/* Praktijkgegevens */}
      <div className="border-t border-primair/10 pt-10 text-tekst/80 leading-relaxed space-y-2">
        <p className="font-semibold text-primair">Praktijkadres</p>
        <p>Centrum de Korenbloem<br />Korenbloemstraat 75<br />Boven Leeuwen</p>
        <p className="pt-4">
          KVK: 89134990<br />
          Btw-id: NL002928630B19
        </p>
      </div>
    </section>
  );
}
