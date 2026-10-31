import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Levenswiel from '@/components/Levenswiel';

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

export const metadata: Metadata = {
  title: 'Gratis voor jou | Momtrail',
  description: 'Gratis tools en weggevers om direct mee aan de slag te gaan. Ontdek wat jij of jouw kind nu nodig heeft.',
};

const weggevers = [
  {
    tag: 'Voor moeders',
    titel: 'Het Levenswiel',
    omschrijving:
      'Acht gebieden. Eén eerlijk cijfer per gebied.',
    cta: 'Vul het Levenswiel in ↓',
    href: '#levenswiel',
    intern: true,
  },
  {
    tag: 'Voor moeders',
    titel: 'Momtrail podcast',
    omschrijving:
      'Luister gratis naar de Momtrail podcast op Spotify. Eerlijke gesprekken en inzichten over het moederschap, je lijf en alles wat daarbij komt kijken.',
    cta: 'Luister op Spotify →',
    href: 'https://open.spotify.com/show/1wQQkL716h4rfmLKvi9NE5',
    intern: false,
  },
  {
    tag: 'Over je kind',
    titel: 'De secret podcast',
    omschrijving:
      'Waarom ontploft je kind? Klapt dicht? Of luistert gewoon niet? In 3 korte afleveringen neem ik je mee in het brein en zenuwstelsel van je kind, en wat hij of zij op dat moment écht van jou nodig heeft.',
    cta: 'Ja, ik wil luisteren →',
    href: '/contact',
    intern: false,
    binnenkort: true,
  },
  {
    tag: 'Voor moeders',
    titel: 'Wie neemt het over?',
    omschrijving:
      'In ons leven spelen meerdere delen een rol: de perfectionist, de zorger, de pleaser, de rebel. Ontdek welk deel van jou vooropstaat en welke delen zijn weggesnoeid. Een eerlijke blik op wie jij bent achter al jouw rollen.',
    cta: 'Ja, ik wil dit →',
    href: '/contact',
    intern: false,
    binnenkort: true,
  },
];

export default function GratisPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-wit/20 text-achtergrond text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Geen verplichtingen
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-achtergrond mb-4" style={{ fontFamily: 'var(--font-buydog)' }}>
            Gratis voor jou
          </h1>
          <p className="text-achtergrond/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Drie weggevers om direct mee aan de slag te gaan.<br />
            Ontdek wat jij of jouw kind nu nodig heeft.
          </p>
        </div>
      </div>

      {/* Weggever cards */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-6">
          {weggevers.map((w) => (
            <div key={w.titel} className="bg-wit border border-primair/10 rounded-2xl p-8 reveal flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <span className="inline-block bg-accent/20 text-primair text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                  {w.tag}
                </span>
                <h2 className="text-xl font-bold text-primair mb-2" style={{ fontFamily: 'var(--font-buydog)' }}>
                  {w.titel}
                </h2>
                <p className="text-tekst/75 leading-relaxed text-sm">{w.omschrijving}</p>
              </div>
              {w.binnenkort ? (
                <span className="shrink-0 bg-accent/30 text-primair font-bold px-6 py-3 rounded-full text-sm whitespace-nowrap text-center italic">
                  Binnenkort online
                </span>
              ) : w.intern ? (
                <a
                  href={w.href}
                  className="shrink-0 bg-primair text-achtergrond font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm whitespace-nowrap text-center"
                >
                  {w.cta}
                </a>
              ) : (
                <Link
                  href={w.href}
                  className="shrink-0 bg-primair text-achtergrond font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm whitespace-nowrap text-center"
                >
                  {w.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Blog */}
      <section className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-achtergrond mb-2 reveal">Blog</h2>
          <p className="text-achtergrond/60 italic mb-8 reveal">Eerlijke verhalen en praktische inzichten</p>
          <div className="flex flex-col gap-6">
            {artikelen.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="block bg-wit/10 border border-achtergrond/20 rounded-2xl p-8 reveal hover:bg-wit/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-achtergrond/20 text-achtergrond text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {a.categorie}
                  </span>
                  <span className="text-achtergrond/40 text-sm">{a.datum}</span>
                </div>
                <h3 className="text-xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>
                  {a.titel}
                </h3>
                <p className="text-achtergrond/75 leading-relaxed mb-5">{a.intro}</p>
                <span className="inline-block text-achtergrond font-bold text-sm">Lees verder →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Levenswiel embedded */}
      <section id="levenswiel" className="bg-achtergrond pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#c16052" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 pt-10 text-center">
          <h2 className="text-2xl font-bold text-primair mb-3 reveal" style={{ fontFamily: 'var(--font-hoofd)' }}>
            Hoe balanceer jij als mama?
          </h2>
          <Levenswiel />
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
