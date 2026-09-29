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

        {/* Ouder-kind retraite */}
        <div className="bg-primair rounded-2xl p-8 md:p-12 mb-20 reveal">
          <p className="text-achtergrond/70 font-semibold text-sm mb-2 uppercase tracking-wide">Voorjaar 2027</p>
          <h2 className="text-2xl font-bold text-achtergrond mb-4">Ouder-kind retraite</h2>
          <p className="text-achtergrond/80 leading-relaxed mb-4">
            In het voorjaar organiseer ik een retraite voor ouders en kinderen samen. Een dag om te landen, te vertragen en weer verbinding te voelen, met jezelf en met elkaar.
          </p>
          <p className="text-achtergrond/80 leading-relaxed mb-6">
            De details worden nog uitgewerkt. Wil je als eerste weten wanneer dit definitief gepland is en hoe je kunt meedoen? Schrijf je in voor de interesselijst.
          </p>

          {/* Mailblue formulier */}
          <div className="bg-achtergrond rounded-xl p-6">
            <p className="text-primair font-bold mb-1">Schrijf je in voor de interesselijst</p>
            <p className="text-tekst/60 text-sm mb-4">Je ontvangt als eerste de details zodra de datum bekend is, én als inschrijver op de interesselijst krijg je een speciale bonus.</p>

            <div className="_form_1" />
            <Script src="https://momtrail.activehosted.com/f/embed.php?id=1" strategy="lazyOnload" />

          </div>
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
