'use client';
import { useState } from 'react';
import Link from 'next/link';

type Resultaat = {
  titel: string;
  tag: string;
  omschrijving: string;
  slug: string;
};

function getResultaten(stap1: string, stap2: string | null, stap3: string | null): Resultaat[] {
  if (stap1 === 'zwanger') return [{
    titel: 'Zwanger',
    tag: 'voor jou',
    omschrijving: 'Of je nu zwanger bent, net bevallen of al een tijdje probeert zwanger te worden: begeleiding voor lichaam én emoties in één van de meest ingrijpende periodes van je leven.',
    slug: '/aanbod/zwanger-en-kinderwens',
  }];

  if (stap1 === 'mezelf') {
    if (stap2 === 'uitgeput') {
      if (stap3 === 'maasenwaal') return [
        { titel: 'Traject Moeder', tag: 'voor jou', omschrijving: 'Voor de mama die aan het overleven is en weer wil voelen hoe het is om energie te hebben, grenzen te stellen en écht aanwezig te zijn.', slug: '/aanbod/moeder/traject-moeder' },
        { titel: 'Ambulante begeleiding via PGB', tag: 'voor jou · Maas en Waal & Betuwe', omschrijving: 'Woon je in Maas en Waal of de Betuwe? Dan kun je mogelijk in aanmerking komen voor begeleiding via een PGB. Neem contact op om te kijken wat er voor jou mogelijk is.', slug: '/aanbod/ambulante-begeleiding' },
      ];
      if (stap3 === 'buiten') return [{ titel: 'Traject Moeder', tag: 'voor jou', omschrijving: 'Voor de mama die aan het overleven is en weer wil voelen hoe het is om energie te hebben, grenzen te stellen en écht aanwezig te zijn.', slug: '/aanbod/moeder/traject-moeder' }];
    }
    if (stap2 === 'rust') return [{ titel: 'Mindful Moms', tag: 'maandelijkse ochtend · voor jou', omschrijving: 'Een zondagochtend even geen mama-modus. We beginnen in ons lijf met zachte somatische en yoga-oefeningen, daarna is er ruimte voor mindfulness. Elke ochtend heeft een eigen thema.', slug: '/aanbod/moeder/somatic-yoga' }];
    if (stap2 === 'inzichten') return [{ titel: 'Trailpass', tag: 'losse sessies · voor jou', omschrijving: 'Voor de mama die af en toe een sessie wil voor nieuwe inzichten, zonder vast traject. Op jouw tempo, wanneer jij er behoefte aan hebt.', slug: '/aanbod/moeder/trailpass' }];
    if (stap2 === 'proeven') return [{ titel: 'Trailstart', tag: 'kennismakingssessie · 60-75 min', omschrijving: 'Één sessie, één thema, één stap vooruit. Je gaat direct aan de slag en voelt hoe ik werk. Besluit je daarna om het volledige traject in te stappen? Dan wordt deze sessie verrekend.', slug: '/aanbod/trailstart' }];
  }

  if (stap1 === 'kind') {
    if (stap2 === '0-5') {
      if (stap3 === 'inzichten') return [{ titel: 'Trailpass', tag: 'losse sessies · voor je kind', omschrijving: 'Voor ouders die af en toe een sessie willen voor nieuwe inzichten over hun kind, zonder vast traject. Op jullie tempo, wanneer er behoefte aan is.', slug: '/aanbod/moeder/trailpass' }];
      if (stap3 === 'traject') return [{ titel: 'Littletrail traject', tag: 'voor je kind · 0 tot 5 jaar', omschrijving: 'We kijken verder dan het gedrag, naar wat er écht speelt, ook naar vroege ervaringen zoals de zwangerschap en geboorte. Meer rust en vertrouwen voor jullie allebei.', slug: '/aanbod/kind/traject-kind' }];
    }
    if (stap2 === '13-18') {
      if (stap3 === 'inzichten') return [{ titel: 'Trailpass', tag: 'losse sessies · voor je kind', omschrijving: 'Voor ouders die af en toe een sessie willen voor nieuwe inzichten over hun kind, zonder vast traject. Op jullie tempo, wanneer er behoefte aan is.', slug: '/aanbod/moeder/trailpass' }];
      if (stap3 === 'traject') return [{ titel: 'Littletrail traject', tag: 'voor je kind · 13 tot 18 jaar', omschrijving: 'Ook voor tieners kijken we verder dan het gedrag. Lichaamsgerichte begeleiding die aansluit bij wat er écht speelt, op een manier die past bij deze leeftijd.', slug: '/aanbod/kind/traject-kind' }];
    }
    if (stap2 === '6-12') {
      if (stap3 === 'klachten') return [{ titel: 'Littletrail traject', tag: 'voor je kind · 6 tot 12 jaar', omschrijving: 'We kijken verder dan het gedrag, naar wat er écht speelt. Na het traject is er meer rust en vertrouwen voor jullie allebei.', slug: '/aanbod/kind/traject-kind' }];
      if (stap3 === 'emoties') return [{ titel: 'Hartbewust Kids cursus', tag: '10 weken · 6 tot 12 jaar', omschrijving: 'Spelenderwijs leren kinderen van 6 tot 12 jaar rust te voelen, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn.', slug: '/aanbod/kind/hartbewust-kids' }];
      if (stap3 === 'inzichten') return [{ titel: 'Trailpass', tag: 'losse sessies · voor je kind', omschrijving: 'Voor ouders die af en toe een sessie willen voor nieuwe inzichten over hun kind, zonder vast traject. Op jullie tempo, wanneer er behoefte aan is.', slug: '/aanbod/moeder/trailpass' }];
      if (stap3 === 'proeven') return [{ titel: 'Trailstart', tag: 'kennismakingssessie · 60-75 min', omschrijving: 'Één sessie, één thema, één stap vooruit voor je kind. Je ervaart hoe ik werk en gaat met iets concreets naar huis. Stap je daarna in het traject? Dan wordt deze sessie verrekend.', slug: '/aanbod/trailstart' }];
    }
  }

  return [];
}

const stap2Opties: Record<string, { vraag: string; opties: { key: string; label: string }[] }> = {
  mezelf: {
    vraag: 'Wat herken jij het meest?',
    opties: [
      { key: 'uitgeput', label: 'Ik ben aan het overleven: uitgeput, snel geïrriteerd of emotioneel leeg' },
      { key: 'rust', label: 'Ik wil me meer ontspannen voelen' },
      { key: 'inzichten', label: 'Ik vind het fijn om af en toe een sessie te hebben voor nieuwe inzichten' },
      { key: 'proeven', label: 'Ik wil eerst één sessie voelen of dit bij mij past' },
    ],
  },
  kind: {
    vraag: 'Hoe oud is je kind?',
    opties: [
      { key: '0-5', label: '0 tot 5 jaar' },
      { key: '6-12', label: '6 tot 12 jaar' },
      { key: '13-18', label: '13 tot 18 jaar' },
    ],
  },
};

const stap3Opties: Record<string, { vraag: string; opties: { key: string; label: string }[] }> = {
  'mezelf-uitgeput': {
    vraag: 'Waar woon je?',
    opties: [
      { key: 'maasenwaal', label: 'In Maas en Waal of de Betuwe' },
      { key: 'buiten', label: 'Buiten Maas en Waal en de Betuwe' },
    ],
  },
  'kind-0-5': {
    vraag: 'Wat zoek je voor je kind?',
    opties: [
      { key: 'traject', label: 'We lopen vast en ik wil gerichte begeleiding' },
      { key: 'inzichten', label: 'Af en toe een sessie voor nieuwe inzichten' },
    ],
  },
  'kind-13-18': {
    vraag: 'Wat zoek je voor je kind?',
    opties: [
      { key: 'traject', label: 'We lopen vast en ik wil gerichte begeleiding' },
      { key: 'inzichten', label: 'Af en toe een sessie voor nieuwe inzichten' },
    ],
  },
  'kind-6-12': {
    vraag: 'Wat speelt er bij je kind?',
    opties: [
      { key: 'klachten', label: 'Emotionele of lichamelijke klachten, driftbuien of teruggetrokken gedrag' },
      { key: 'emoties', label: 'Ik wil mijn kind beter leren omgaan met emoties, stress, (hoog)gevoeligheid of onrust en boosheid' },
      { key: 'inzichten', label: 'Ik wil af en toe een sessie voor nieuwe inzichten over mijn kind' },
      { key: 'proeven', label: 'Ik wil eerst één sessie voelen of dit bij ons past' },
    ],
  },
};

export default function AanbodMatcher() {
  const [stap1, setStap1] = useState<string | null>(null);
  const [stap2, setStap2] = useState<string | null>(null);
  const [stap3, setStap3] = useState<string | null>(null);

  const heeftStap2 = stap1 && stap1 !== 'zwanger';
  const stap3Key = stap1 && stap2 ? `${stap1}-${stap2}` : null;
  const heeftStap3 = stap3Key && stap3Opties[stap3Key];
  const toonResultaat = stap1 === 'zwanger'
    || (stap1 && stap2 && !heeftStap3)
    || (stap1 && stap2 && stap3);
  const resultaten = toonResultaat ? getResultaten(stap1!, stap2, stap3) : [];

  function kiesStap1(key: string) {
    setStap1(key);
    setStap2(null);
    setStap3(null);
  }

  function kiesStap2(key: string) {
    setStap2(key);
    setStap3(null);
  }

  return (
    <div className="bg-wit border border-primair/10 rounded-2xl p-8 md:p-10">
      <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Stap 1</p>
      <p className="text-lg font-bold text-tekst mb-5">Voor wie zoek je begeleiding?</p>
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { key: 'mezelf', label: 'Voor mezelf (als mama)' },
          { key: 'kind', label: 'Voor mijn kind' },
          { key: 'zwanger', label: 'Zwanger' },
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
                onClick={() => kiesStap2(o.key)}
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

      {heeftStap3 && stap3Opties[stap3Key!] && (
        <div className="border-t border-primair/10 pt-8 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primair/50 mb-2">Stap 3</p>
          <p className="text-lg font-bold text-tekst mb-5">{stap3Opties[stap3Key!].vraag}</p>
          <div className="flex flex-col gap-3">
            {stap3Opties[stap3Key!].opties.map(o => (
              <button
                key={o.key}
                onClick={() => setStap3(o.key)}
                className={`px-5 py-3 rounded-xl text-sm font-bold border text-left transition-all cursor-pointer ${
                  stap3 === o.key
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
