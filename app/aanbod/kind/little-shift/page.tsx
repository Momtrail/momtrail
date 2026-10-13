import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'The Little Shift' };

export default function LittleShiftPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Kind</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>The Little Shift</h1>
          <p className="text-achtergrond/80 text-xl italic">één sessie, één thema, één stap vooruit voor je kind</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Je maakt je zorgen om je kind, maar je wilt eerst ervaren hoe ik werk voor je ergens in stapt. Of er is één specifiek thema dat al een tijdje speelt en je wil daar nu gewoon iets mee.
          </p>
          <p className="text-tekst/80 leading-relaxed">
            Dat is precies waar The Little Shift voor is.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat is het?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          The Little Shift is een eenmalige kennismakingssessie van 60 tot 75 minuten. We kiezen samen één thema dat nu het meest speelt bij je kind en gaan daar direct in aan de slag. Ik werk in dit traject meestal met jou als ouder, soms ook direct met je kind. We werken o.a. op de energetische laag met behulp van de biotensor, maar het is ook praktisch: je gaat met iets concreets naar huis.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Is je kind tussen de 6 en 12 jaar? Dan komen jullie allebei naar de fysieke sessie.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Duur</p>
            <p className="font-bold text-tekst">60 tot 75 minuten</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Vorm</p>
            <p className="font-bold text-tekst">Eenmalig, één thema</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Investering</p>
            <p className="font-bold text-tekst">
              <span className="text-primair text-xl">€89</span>{' '}
              <span className="text-tekst/40 line-through text-sm font-normal">€99</span>
            </p>
            <p className="text-tekst/40 text-xs mt-1">t/m 31 december 2026</p>
          </div>
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <h3 className="text-xl font-bold text-achtergrond mb-3">Wil je daarna verder?</h3>
          <p className="text-achtergrond/80 leading-relaxed">
            Na de sessie heb je zeven dagen de tijd om te beslissen of je het volledige Little Trail traject wilt instappen. Doe je dat? Dan worden de kosten van The Little Shift verrekend met de trajectprijs.
          </p>
        </div>

        <div className="text-center reveal">
          <Link
            href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan The Little Shift →
          </Link>
          <p className="text-tekst/40 text-xs mt-3">60-75 min · €89 t/m 31 december 2026</p>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
