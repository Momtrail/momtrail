import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Zwanger & Kinderwens' };

const opties = [
  {
    titel: 'Zwanger & Baby',
    href: '/aanbod/zwanger-en-kind',
    beschrijving: 'Of je nu voor het eerst zwanger bent of een pittige start hebt gehad: dit aanbod begeleidt je lichamelijk en emotioneel. Van bewust zwanger zijn tot de eerste weken met je baby.',
    foto: '/fotos/IMG_2748 2.jpg',
    fotoPositie: '50% 10%',
  },
  {
    titel: 'Kinderwenstraject',
    href: '/aanbod/kinderwens',
    beschrijving: 'Jullie verlangen naar een kindje, maar het lukt maar niet. In samenwerking met Health & Happiness begeleiden we je op alle lagen: van hormonen en voeding tot zenuwstelsel en onverwerkte emoties.',
    foto: '/fotos/IMG_5836 2.jpg',
    fotoPositie: '50% 10%',
  },
];

export default function ZwangerEnKinderwensPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>
      <h1 className="text-3xl font-bold text-primair mb-12 reveal">Zwanger &amp; Kinderwens</h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {opties.map(item => (
          <div key={item.href} className="bg-wit rounded-2xl shadow-sm border border-primair/10 flex flex-col overflow-hidden reveal">
            <img src={item.foto} alt={item.titel} className="w-full h-36 object-cover" style={{ objectPosition: item.fotoPositie }} />
            <div className="p-8 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-primair mb-2">{item.titel}</h2>
              <p className="text-tekst/70 leading-relaxed mb-4 flex-1">{item.beschrijving}</p>
              <Link href={item.href} className="font-bold text-accent hover:underline">
                Meer info →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center reveal">
        <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Plan een kennismaking →
        </Link>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </section>
  );
}
