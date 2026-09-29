'use client';

import { useSearchParams } from 'next/navigation';

const gebiedUitleg: Record<string, string> = {
  energie:   'Energie & rust',
  zelf:      'Verbinding met jezelf',
  kind:      'Verbinding met je kind(eren)',
  partner:   'Partner & relatie',
  werk:      'Werk / identiteit',
  sociaal:   'Sociale steun',
  lichaam:   'Lichaam & gezondheid',
  grip:      'Gevoel van grip & overzicht',
};

export default function LevenswielIntro() {
  const params = useSearchParams();
  const from = params.get('from');
  const laagsteKey = params.get('laagste');
  const avg = params.get('avg');

  if (from !== 'levenswiel' || !laagsteKey) return null;

  const laagsteLabel = gebiedUitleg[laagsteKey] ?? params.get('label') ?? laagsteKey;

  return (
    <div className="bg-achtergrond border border-primair/20 rounded-2xl p-6 mb-10">
      <p className="text-xs font-bold text-primair uppercase tracking-widest mb-2">
        Vanuit jouw Levenswiel
      </p>
      <p className="text-tekst/90 leading-relaxed mb-1">
        Je hebt het Levenswiel ingevuld{avg ? ` met een gemiddelde van ${avg}/10` : ''}.
        Je aandachtsgebied is <strong>{laagsteLabel}</strong>.
      </p>
      <p className="text-tekst/70 text-sm leading-relaxed">
        Tijdens de kennismaking check ik samen met jou wat je onderbewuste als score geeft voor dit gebied:
        en waar de echte sleutel zit. Kies hieronder een moment dat jou uitkomt.
      </p>
    </div>
  );
}
