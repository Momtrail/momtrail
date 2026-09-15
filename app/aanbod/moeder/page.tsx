import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Levenswiel from '@/components/Levenswiel';

export const metadata: Metadata = { title: 'Moeder' };

const aanbod = [
  {
    titel: 'Momtrail traject',
    tekst: 'Voor de moeder die voelt: ik wil weer de energie hebben die ik vroeger had en van de tijd met mijn kind(eren) kunnen genieten. Een verdiepend traject van twee maanden gericht op jouw fundament.',
    slug: 'traject-moeder',
  },
  {
    titel: 'Somatic Yoga lessen',
    tekst: 'Perfect voor als je veel in je hoofd zit of thuis moeilijk tot ontspanning komt. Somatic Yoga combineert (yin) yoga en lichaamsgerichte oefeningen om je te helpen kalmeren en spanning op te lossen in je lichaam.',
    slug: 'somatic-yoga',
  },
];

export default function MoederPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/aanbod" className="text-accent hover:underline text-sm mb-8 inline-block">← Terug naar aanbod</Link>
      <h1 className="text-3xl font-bold text-primair mb-12 reveal">Moeder</h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {aanbod.map(item => (
          <div key={item.titel} className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10 flex flex-col reveal">
            <h2 className="text-xl font-bold text-primair mb-3">{item.titel}</h2>
            <p className="text-tekst/70 leading-relaxed flex-1 mb-4">{item.tekst}</p>
            <Link href={`/aanbod/moeder/${item.slug}`} className="font-bold text-accent hover:underline">
              Meer info →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center reveal">
        <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Plan een kennismaking →
        </Link>
      </div>

      {/* Levenswiel */}
      <div className="mt-20 -mx-6">
        <div className="bg-wit py-12 px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-block bg-accent/20 text-primair text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase reveal">
              Gratis tool
            </span>
            <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-hoofd)' }}>
              Hoe balanceer jij als mama?
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-3 reveal">
              Het Levenswiel laat in één oogopslag zien hoe je ervoor staat op 8 levensgebieden. Eerlijk, visueel en in twee minuten ingevuld.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Wil je daarna een <strong>persoonlijk mini-verslag</strong> met één tip van mij voor jouw aandachtsgebied? Laat dan je e-mailadres achter.
            </p>
          </div>
        </div>
        <Levenswiel />
      </div>

      <ScrollReveal singles={['.reveal']} />
    </section>
  );
}
