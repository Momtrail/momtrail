import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Trailstart' };

export default function TrailstartPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar aanbod</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Trailstart</h1>
          <p className="text-achtergrond/80 text-xl italic">één sessie, één thema, je eerste stap op je trail</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-achtergrond rounded-2xl p-8 mb-12 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Je loopt vast, of je maakt je zorgen om je kind. Je wilt eerst ervaren hoe ik werk, voordat je ergens in stapt. Of er speelt al een tijdje één thema, en je wilt daar nu gewoon iets mee.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Daar is de Trailstart voor.
          </p>
          <p className="font-bold text-tekst">
            Met alleen praten kom je er niet.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat is het?</h2>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          De Trailstart is een losse sessie van 60 tot 75 minuten. We kiezen samen één thema dat nu het meest speelt, en gaan daar direct mee aan de slag. Ik werk lichaamsgericht: we kijken niet alleen naar wat je denkt, maar ook naar wat je lijf vasthoudt. Je gaat naar huis met iets concreets.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Voor jou als moeder</p>
            <p className="text-tekst/80 leading-relaxed text-sm">De sessie gaat over jou. Je energie, je lijf, je patronen.</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Voor je kind</p>
            <p className="text-tekst/80 leading-relaxed text-sm">Ik werk meestal met jou als ouder. Of je kind meekomt, bepalen we in overleg; dat hangt vooral af van de leeftijd. We werken onder andere op de energetische laag, bijvoorbeeld met de biotensor of met systemisch werk, en ook heel praktisch.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Duur</p>
            <p className="font-bold text-tekst text-sm">60 tot 75 minuten</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Vorm</p>
            <p className="font-bold text-tekst text-sm">Eenmalig, één thema</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Waar</p>
            <p className="font-bold text-tekst text-sm">Praktijkruimte of online</p>
          </div>
          <div className="bg-wit border border-primair/10 rounded-2xl p-6 reveal">
            <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Investering</p>
            <p className="font-bold text-primair text-xl">€97</p>
          </div>
        </div>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <h3 className="text-xl font-bold text-achtergrond mb-3">Wil je daarna verder?</h3>
          <p className="text-achtergrond/80 leading-relaxed">
            Na de Trailstart heb je zeven dagen de tijd om te beslissen of je een traject wilt starten. Doe je dat, dan wordt de €97 verrekend met de trajectprijs én krijg je het volledige traject. Je Trailstart is dan een extra sessie, cadeau.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 reveal">
          <Link
            href="/contact"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-center"
          >
            Plan je Trailstart →
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair/5 transition-colors text-center"
          >
            Plan een gratis kennismaking →
          </Link>
        </div>
        <p className="text-tekst/40 text-xs text-center reveal">60–75 min · €97 · Praktijkruimte of online</p>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
