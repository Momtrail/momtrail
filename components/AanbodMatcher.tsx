'use client';
import { useState } from 'react';
import Link from 'next/link';

type Resultaat = {
  titel: string;
  tag: string;
  omschrijving: string;
  slug: string;
};

function getResultaten(stap1: string, stap2: string | null): Resultaat[] {
  if (stap1 === 'zwanger') return [{
    titel: 'Zwanger & Kinderwens',
    tag: 'voor jou',
    omschrijving: 'Of je nu zwanger bent, net bevallen of al een tijdje probeert zwanger te worden: begeleiding voor lichaam én emoties in één van de meest ingrijpende periodes van je leven.',
    slug: '/aanbod/zwanger-en-kinderwens',
  }];

  if (stap1 === 'mezelf') {
    if (stap2 === 'uitgeput') return [{ titel: 'Traject Moeder', tag: '2 maanden · voor jou', omschrijving: 'Voor de mama die aan het overleven is en weer wil voelen hoe het is om energie te hebben, grenzen te stellen en écht aanwezig te zijn.', slug: '/aanbod/moeder/traject-moeder' }];
    if (stap2 === 'rust') return [{ titel: 'Somatic Yoga', tag: 'losse lessen · voor jou', omschrijving: 'Combineert (yin) yoga en lichaamsgerichte oefeningen om je te helpen kalmeren en spanning op te lossen in je lichaam. Perfect als je veel in je hoofd zit.', slug: '/aanbod/moeder/somatic-yoga' }];
    if (stap2 === 'proeven') return [{ titel: 'Trailstart', tag: 'kennismakingssessie · 60-75 min', omschrijving: 'Één sessie, één thema, één stap vooruit. Je gaat direct aan de slag en voelt hoe ik werk. Besluit je daarna om het volledige traject in te stappen? Dan wordt deze sessie verrekend.', slug: '/aanbod/trailstart' }];
  }

  if (stap1 === 'kind') {
    if (stap2 === 'klachten') return [{ titel: 'Little Trail traject', tag: '1 maand · voor je kind', omschrijving: 'We kijken verder dan het gedrag, naar wat er écht speelt. Na één maand is er meer rust en vertrouwen voor jullie allebei.', slug: '/aanbod/kind/traject-kind' }];
    if (stap2 === 'emoties') return [{ titel: 'Hartbewust Kids cursus', tag: '10 weken · 6 tot 12 jaar', omschrijving: 'Spelenderwijs leren kinderen van 6 tot 12 jaar rust te voelen, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn.', slug: '/aanbod/kind/hartbewust-kids' }];
    if (stap2 === 'proeven') return [{ titel: 'Trailstart', tag: 'kennismakingssessie · 60-75 min', omschrijving: 'Één sessie, één thema, één stap vooruit voor je kind. Je ervaart hoe ik werk en gaat met iets concreets naar huis. Stap je daarna in het traject? Dan wordt deze sessie verrekend.', slug: '/aanbod/trailstart' }];
  }

  if (stap1 === 'samen') {
    if (stap2 === 'beiden') return [
      { titel: 'Traject Moeder', tag: 'de basis — begin bij mama', omschrijving: 'We starten altijd bij jou. Jouw rust en regulatie werken direct door op je kind. In de uitgebreidere trajecten (Reset of Rise) is er ook ruimte om samen met je kind stappen te zetten.', slug: '/aanbod/moeder/traject-moeder' },
    ];
  }

  return [];
}

const stap2Opties: Record<string, { vraag: string; opties: { key: string; label: string }[] }> = {
  mezelf: {
    vraag: 'Wat herken jij het meest?',
    opties: [
      { key: 'uitgeput', label: 'Ik ben aan het overleven: uitgeput, snel geïrriteerd of emotioneel leeg' },
      { key: 'rust', label: 'Ik wil meer ontspanning voelen in mijn lijf, ik kom maar moeilijk tot rust' },
      { key: 'proeven', label: 'Ik wil eerst één sessie voelen of dit bij mij past' },
    ],
  },
  kind: {
    vraag: 'Wat speelt er bij je kind?',
    opties: [
      { key: 'klachten', label: 'Emotionele of lichamelijke klachten, driftbuien of teruggetrokken gedrag' },
      { key: 'emoties', label: 'Moeite met emoties reguleren, faalangst of veel spanning' },
      { key: 'proeven', label: 'Ik wil eerst één sessie voelen of dit bij ons past' },
    ],
  },
  samen: {
    vraag: 'Waar gaat het het meest over?',
    opties: [
      { key: 'beiden', label: 'We willen allebei groeien, mama én kind' },
    ],
  },
};

export default function AanbodMatcher() {
  const [stap1, setStap1] = useState<string | null>(null);
  const [stap2, setStap2] = useState<string | null>(null);

  const heeftStap2 = stap1 && stap1 !== 'zwanger';
  const toonResultaat = stap1 === 'zwanger' || (stap1 && stap2);
  const resultaten = toonResultaat ? getResultaten(stap1!, stap2) : [];

  function kiesStap1(key: string) {
    setStap1(key);
    setStap2(null);
  }

  return (
    <div className="bg-wit border border-primair/10 rounded-2xl p-8 md:p-10">
      <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Stap 1</p>
      <p className="text-lg font-bold text-tekst mb-5">Voor wie zoek je begeleiding?</p>
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { key: 'mezelf', label: 'Voor mezelf (als mama)' },
          { key: 'kind', label: 'Voor mijn kind' },
          { key: 'samen', label: 'Voor ons samen' },
          { key: 'zwanger', label: 'Zwanger of kinderwens' },
        ].map(o => (
          <button
            key={o.key}
            onClick={() => kiesStap1(o.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all cursor-pointer ${
              stap1 === o.key
                ? 'bg-primair text-wit border-primair'
                : 'bg-achtergrond text-tekst border-primair/20 hover:border-primair/50'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {heeftStap2 && stap2Opties[stap1!] && (
        <div className="border-t border-primair/10 pt-8 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Stap 2</p>
          <p className="text-lg font-bold text-tekst mb-5">{stap2Opties[stap1!].vraag}</p>
          <div className="flex flex-col gap-3">
            {stap2Opties[stap1!].opties.map(o => (
              <button
                key={o.key}
                onClick={() => setStap2(o.key)}
                className={`px-5 py-3 rounded-xl text-sm font-bold border text-left transition-all cursor-pointer ${
                  stap2 === o.key
                    ? 'bg-primair text-wit border-primair'
                    : 'bg-achtergrond text-tekst border-primair/20 hover:border-primair/50'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {resultaten.length > 0 && (
        <div className="border-t border-primair/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-4">
            {resultaten.length === 1 ? 'Dit past bij jou' : 'Dit past bij jullie'}
          </p>
          <div className={`grid gap-4 ${resultaten.length > 1 ? 'sm:grid-cols-2' : 'max-w-md'}`}>
            {resultaten.map(r => (
              <div key={r.slug} className="bg-achtergrond rounded-2xl p-6 flex flex-col">
                <span className="text-xs font-bold text-primair/60 uppercase tracking-widest mb-2">{r.tag}</span>
                <h3 className="text-xl font-bold text-primair mb-2">{r.titel}</h3>
                <p className="text-tekst/70 text-sm leading-relaxed flex-1 mb-4">{r.omschrijving}</p>
                <Link href={r.slug} className="font-bold text-accent hover:underline text-sm">
                  Meer info →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Plan een gratis kennismaking →
            </Link>
            <p className="text-tekst/40 text-xs mt-3">30 minuten · kosteloos · online of bij Momtrail</p>
          </div>
        </div>
      )}
    </div>
  );
}
