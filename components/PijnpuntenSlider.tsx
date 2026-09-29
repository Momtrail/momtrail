'use client';

import { useState } from 'react';
import Link from 'next/link';

const punten = [
  {
    titel: "Je staat 's ochtends op en bent al moe voor de dag begonnen.",
    tekst: "Nog voor je koffie klaar is loopt je hoofd al op volle toeren. Vandaag moet je dit nog regelen, dat nog doen, en ook nog aanwezig zijn voor je kind. Je bent al gesloopt nog voor er iets is misgegaan.",
  },
  {
    titel: 'Je reageert feller dan je wilt, en dat schuldgevoel vreet aan je.',
    tekst: 'Je kind vraagt iets voor de derde keer en je hoort jezelf snauwen. Daarna denk je: dit ben ik niet. Maar het blijft gebeuren, hoe goed je het ook probeert. Je weet het beter. Je voélt het gewoon niet.',
  },
  {
    titel: 'Je bent er voor iedereen, maar voor jezelf kom je er niet aan toe.',
    tekst: 'Jij bent degene die alles bijhoudt. De afspraken, de boodschappen, de emoties van je kind. En als iemand vraagt hoe het met jóú gaat, weet je even niet wat je moet zeggen. Want wanneer heb je dat voor het laatste écht geweten?',
  },
  {
    titel: 'Je hebt van alles geprobeerd, maar er verandert niks.',
    tekst: 'Boeken gelezen, podcasts geluisterd, misschien een cursus gevolgd. Je hoofd begrijpt het allemaal. Maar als het erop aankomt, doe je het toch weer hetzelfde. En je begrijpt niet waarom het niet plakt.',
  },
  {
    titel: 'Je vraagt je af of dit het nou is.',
    tekst: 'Ergens had je je het moederschap anders voorgesteld. Niet per se makkelijker, maar... lichter. Meer van dat gevoel: ik doe het goed. In plaats daarvan hangt er een waas over je dagen, en je weet niet meer hoe je dat wegkrijgt.',
  },
];

export default function PijnpuntenSlider() {
  const [actief, setActief] = useState(0);

  const vorige = () => setActief(i => (i - 1 + punten.length) % punten.length);
  const volgende = () => setActief(i => (i + 1) % punten.length);

  return (
    <section className="bg-achtergrond py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-2 text-center" style={{ fontFamily: 'var(--font-buydog)' }}>
          Herken je dit?
        </h2>
        <p className="text-tekst/60 italic text-center mb-10">Je bent zeker niet de enige, geloof mij maar!</p>

        {/* Slider */}
        <div className="relative">
          {/* Card */}
          <div className="bg-wit rounded-2xl p-8 min-h-[200px] flex flex-col justify-center">
            <p className="text-xs font-bold text-primair/40 mb-4 tracking-widest uppercase">
              {actief + 1} / {punten.length}
            </p>
            <p className="font-bold text-primair text-lg leading-snug mb-3">
              {punten[actief].titel}
            </p>
            <p className="text-tekst/75 leading-relaxed text-sm">
              {punten[actief].tekst}
            </p>
          </div>

          {/* Pijlen */}
          <button
            onClick={vorige}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-wit border border-primair/20 text-primair flex items-center justify-center hover:bg-primair hover:text-achtergrond transition-colors shadow-sm"
            aria-label="Vorige"
          >
            ←
          </button>
          <button
            onClick={volgende}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-wit border border-primair/20 text-primair flex items-center justify-center hover:bg-primair hover:text-achtergrond transition-colors shadow-sm"
            aria-label="Volgende"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {punten.map((_, i) => (
            <button
              key={i}
              onClick={() => setActief(i)}
              className={`rounded-full transition-all ${i === actief ? 'bg-primair w-5 h-2' : 'bg-primair/25 w-2 h-2'}`}
              aria-label={`Ga naar punt ${i + 1}`}
            />
          ))}
        </div>

        {/* Gevolgen */}
        <div className="bg-tekst rounded-2xl p-8 mt-14 text-center">
          <h3 className="text-2xl font-bold text-achtergrond mb-6" style={{ fontFamily: 'var(--font-buydog)' }}>
            Wat als je er niks aan verandert?
          </h3>
          <p className="text-achtergrond/80 leading-relaxed mb-4 text-sm">
            Je lichaam onthoudt alles. Elke keer dat je over je grenzen gaat zonder bij jezelf in te checken, stapelt het zich op. De vermoeidheid wordt dieper. De irritatie sneller. Het gevoel van jezelf kwijt zijn: groter.
          </p>
          <p className="text-achtergrond/80 leading-relaxed mb-4 text-sm">
            Je kind groeit op en ziet hoe jij met jezelf omgaat. Niet wat je zegt, maar wat je doet. Hoe jij jezelf wegcijfert. Hoe jij doorgaat als het eigenlijk te veel is. Dat is wat blijft hangen.
          </p>
          <p className="text-achtergrond/60 italic mb-8">
            Dat is geen toekomst die jij verdient.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan een kennismaking →
          </Link>
        </div>

      </div>
    </section>
  );
}
