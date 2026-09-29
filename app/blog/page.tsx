import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog | Momtrail',
  description: 'Eerlijke verhalen, praktische inzichten en tips over het moederschap, zenuwstelselregulatie en opgroeien.',
};

const artikelen = [
  {
    slug: 'burnout-moeder',
    categorie: 'Voor moeders',
    titel: 'Geen burnout, ik ben gewoon moe. Of toch niet?',
    intro: 'Je zou het jezelf nooit zo noemen. Maar ergens weet je ook: dit is niet normaal. Dit is niet hoe het moet voelen. Herken jij de signalen van een moeder die langzaam leegloopt?',
    datum: 'Oktober 2026',
  },
  {
    slug: 'zenuwstelsel-uitgelegd',
    categorie: 'Voor moeders',
    titel: 'Je zenuwstelsel uitgelegd (zonder moeilijke woorden)',
    intro: 'Waarom reageer je zo fel op kleine dingen? Waarom voel je je constant aan staan? Je zenuwstelsel vertelt je iets. En als je begrijpt wat, verandert alles.',
    datum: 'Oktober 2026',
  },
  {
    slug: 'waarom-je-kind-ontploft',
    categorie: 'Over je kind',
    titel: 'Waarom jouw kind ontploft (en wat hij écht van jou nodig heeft)',
    intro: 'Je kind valt uit het niets uit. Schreeuwt, gooit, slaat de deur dicht. Je probeert kalm te blijven, maar vanbinnen kook je ook. Wat er op dat moment gebeurt in het brein van je kind, en wat écht helpt.',
    datum: 'Oktober 2026',
  },
  {
    slug: 'moederschap-en-identiteit',
    categorie: 'Voor moeders',
    titel: 'Wie ben jij nog als je niet mama bent?',
    intro: 'Moeder worden is het mooiste. En tegelijkertijd: wie was jij ook alweer, voor al die rollen? Over identiteitsverlies in het moederschap en hoe je jezelf terugvindt.',
    datum: 'September 2026',
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>
            Blog
          </h1>
          <p className="text-achtergrond/80 text-xl italic">
            Eerlijke verhalen en praktische inzichten
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-8">
          {artikelen.map((a) => (
            <article key={a.slug} className="bg-wit border border-primair/10 rounded-2xl p-8 reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-accent/20 text-primair text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                  {a.categorie}
                </span>
                <span className="text-tekst/40 text-sm">{a.datum}</span>
              </div>
              <h2 className="text-xl font-bold text-primair mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>
                {a.titel}
              </h2>
              <p className="text-tekst/75 leading-relaxed mb-5">{a.intro}</p>
              <Link
                href={`/blog/${a.slug}`}
                className="inline-block text-primair font-bold text-sm hover:opacity-70 transition-opacity"
              >
                Lees verder →
              </Link>
            </article>
          ))}
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
