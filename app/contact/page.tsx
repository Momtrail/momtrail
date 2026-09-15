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
      <p className="text-tekst/80 leading-relaxed mb-8">
        Je kunt ook je gegevens invullen op het contactformulier. Dan neem ik binnen twee werkdagen contact met je op.
        Ik kijk ernaar uit je te ontmoeten!
      </p>

      {/* Knoppen */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="tel:0649826360"
          className="inline-flex items-center gap-2 bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          Bel me: 06 49 82 63 60
        </a>
        <a
          href="#agenda"
          className="inline-flex items-center gap-2 border-2 border-primair text-primair font-bold px-6 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors"
        >
          Plan een kennismaking →
        </a>
      </div>

      {/* Calendly inline widget */}
      <div
        id="agenda"
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
