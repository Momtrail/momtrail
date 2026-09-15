import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Zwanger & Baby' };

const opties = [
  {
    titel: 'New Mom, New Baby',
    slug: 'new-mom-new-baby',
    beschrijving: 'De roze wolk blijft uit en jullie start was anders dan gehoopt. Dit traject van 2 maanden begeleidt baby\'s die veel huilen, moeders die zich overweldigd voelen en ouders die toe zijn aan meer rust en verbinding.',
  },
  {
    titel: '1 op 1 Bewust Zwanger',
    slug: 'bewust-zwanger',
    beschrijving: 'Ontspannen zwanger zijn en je emotioneel en lichamelijk voorbereiden op de bevalling en het vierde trimester. Persoonlijke aandacht voor jouw angsten, zorgen en de verbinding met je baby.',
  },
];

export default function ZwangerEnKindPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/aanbod/zwanger-en-kinderwens" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Zwanger &amp; Kinderwens</Link>
          <h1 className="text-4xl font-bold text-achtergrond mb-3">Zwanger & Baby</h1>
          <p className="text-achtergrond/80 text-xl italic">Bewust en verbonden de zwangerschap in</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Of je nu voor het eerst zwanger bent of al eerder mama werd: een zwangerschap raakt je van binnen. Kies het traject dat bij jou past.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {opties.map(item => (
            <div key={item.slug} className="bg-wit rounded-2xl border border-primair/10 shadow-sm flex flex-col overflow-hidden reveal">
              <div className="bg-achtergrond px-8 pt-8 pb-4">
                <h2 className="text-xl font-bold text-primair mb-2">{item.titel}</h2>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-tekst/70 leading-relaxed mb-6 flex-1">{item.beschrijving}</p>
                <Link href={`/aanbod/zwanger-en-kind/${item.slug}`} className="font-bold text-accent hover:underline">
                  Meer info →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
