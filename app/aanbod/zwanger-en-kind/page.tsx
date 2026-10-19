import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Zwanger & Baby' };

export default function ZwangerEnKindPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/aanbod/zwanger-en-kinderwens" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Zwanger &amp; Kinderwens</Link>
          <h1 className="text-4xl font-bold text-achtergrond mb-3">Zwanger & Baby</h1>
          <p className="text-achtergrond/80 text-xl italic">Bewust en verbonden door de meest ingrijpende periode van je leven</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-tekst/80 leading-relaxed mb-12 text-lg reveal">
          Of je nu zwanger bent en je emotioneel en lichamelijk wilt voorbereiden, of je baby er al is en de start anders verloopt dan gehoopt — er is begeleiding die bij jou past. Kies hieronder wat het beste bij je situatie aansluit.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/aanbod/zwanger-en-kind/bewust-zwanger"
            className="group bg-wit rounded-2xl border border-primair/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col reveal"
          >
            <div className="bg-achtergrond px-8 pt-8 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2 block">Zwanger</span>
              <h2 className="text-2xl font-bold text-primair mb-2">Bewust Zwanger</h2>
              <p className="text-tekst/60 italic text-sm">Ontspannen zwanger zijn, van binnen en van buiten</p>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-tekst/70 leading-relaxed mb-6 flex-1">
                Oude thema's komen boven, je lijf vraagt meer aandacht en de bevalling nadert. Ik begeleid je zodat je niet alleen fysiek, maar ook van binnenuit klaar bent voor wat er komen gaat.
              </p>
              <span className="font-bold text-accent group-hover:underline">Meer info →</span>
            </div>
          </Link>

          <Link
            href="/aanbod/zwanger-en-kind/new-mom-new-baby"
            className="group bg-wit rounded-2xl border border-primair/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col reveal"
          >
            <div className="bg-achtergrond px-8 pt-8 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2 block">Net bevallen</span>
              <h2 className="text-2xl font-bold text-primair mb-2">New Mom, New Baby</h2>
              <p className="text-tekst/60 italic text-sm">Wanneer de roze wolk uitblijft</p>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-tekst/70 leading-relaxed mb-6 flex-1">
                De roze wolk blijft uit en jullie start was anders dan gehoopt. Meer rust, vertrouwen en verbinding — voor jou én je baby.
              </p>
              <span className="font-bold text-accent group-hover:underline">Meer info →</span>
            </div>
          </Link>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
