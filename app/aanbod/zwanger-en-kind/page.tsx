import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Zwanger & Kind' };

export default function ZwangerEnKindPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>
      <h1 className="text-3xl font-bold text-primair mb-6 reveal">Zwanger &amp; Kind</h1>
      <p className="text-tekst/80 leading-relaxed reveal">
        [Beschrijving volgt]
      </p>
      <ScrollReveal singles={['.reveal']} />
    </section>
  );
}
