'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StickyKind() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="max-w-3xl mx-auto bg-primair rounded-2xl shadow-xl flex items-center gap-4 px-6 py-4">
        <div className="flex-1 min-w-0">
          <p className="text-achtergrond font-bold text-base leading-snug" style={{ fontFamily: 'var(--font-buydog)' }}>
            Herken je dit bij je kind?
          </p>
          <p className="text-achtergrond/70 text-sm leading-snug mt-0.5">
            Lees waarom kinderen ontploffen en wat er echt achter zit.
          </p>
        </div>
        <Link
          href="/blog/waarom-je-kind-ontploft"
          className="shrink-0 bg-achtergrond text-primair font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Lees de blog →
        </Link>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Sluiten"
          className="shrink-0 text-achtergrond/50 hover:text-achtergrond transition-colors text-xl leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
