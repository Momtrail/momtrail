'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NieuwsbriefForm() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/nieuwsbrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      {status === 'idle' && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
          <input
            type="text"
            required
            placeholder="Jouw voornaam"
            value={naam}
            onChange={e => setNaam(e.target.value)}
            className="px-4 py-3 rounded-full border border-primair/20 bg-wit text-tekst placeholder:text-tekst/40 focus:outline-none focus:border-primair text-sm"
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="jouw@email.nl"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border border-primair/20 bg-wit text-tekst placeholder:text-tekst/40 focus:outline-none focus:border-primair text-sm"
            />
            <button
              type="submit"
              className="bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap text-sm"
            >
              Aanmelden →
            </button>
          </div>
        </form>
      )}
      {status === 'submitting' && (
        <p className="text-tekst/60 italic text-sm text-center">Even geduld...</p>
      )}
      {status === 'success' && (
        <p className="font-bold text-primair text-center">Gelukt! Welkom bij de Momtrail Mail.</p>
      )}
      {status === 'error' && (
        <div className="text-center">
          <p className="text-tekst/70 text-sm mb-2">Er ging iets mis. Probeer het opnieuw.</p>
          <button onClick={() => setStatus('idle')} className="text-primair underline text-sm">
            Opnieuw proberen
          </button>
        </div>
      )}
      {status === 'idle' && (
        <p className="text-tekst/40 text-xs mt-3 text-center">Afmelden kan altijd.</p>
      )}
    </div>
  );
}
