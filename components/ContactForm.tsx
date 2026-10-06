'use client';

import { useRef, useState, useTransition } from 'react';
import { verstuurContact } from '@/app/contact/actions';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'fout'>('idle');
  const [fout, setFout]     = useState('');
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await verstuurContact(data);
      if (result.ok) {
        setStatus('ok');
        formRef.current?.reset();
      } else {
        setFout(result.fout ?? 'Onbekende fout');
        setStatus('fout');
      }
    });
  }

  if (status === 'ok') {
    return (
      <div className="bg-accent/20 text-tekst rounded-2xl p-8 text-center">
        <p className="font-semibold text-lg mb-1">Bedankt voor je bericht!</p>
        <p className="text-tekst/70">Ik neem binnen twee werkdagen contact met je op.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="naam" className="block text-sm font-medium text-tekst mb-1">Naam</label>
        <input
          id="naam" name="naam" type="text" required
          className="w-full rounded-xl border border-primair/20 bg-wit px-4 py-3 text-tekst focus:outline-none focus:ring-2 focus:ring-primair/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-tekst mb-1">E-mailadres</label>
        <input
          id="email" name="email" type="email" required
          className="w-full rounded-xl border border-primair/20 bg-wit px-4 py-3 text-tekst focus:outline-none focus:ring-2 focus:ring-primair/40"
        />
      </div>
      <div>
        <label htmlFor="bericht" className="block text-sm font-medium text-tekst mb-1">Bericht</label>
        <textarea
          id="bericht" name="bericht" rows={5} required
          className="w-full rounded-xl border border-primair/20 bg-wit px-4 py-3 text-tekst focus:outline-none focus:ring-2 focus:ring-primair/40 resize-none"
        />
      </div>

      {status === 'fout' && (
        <p className="text-sm text-red-600">{fout}</p>
      )}

      <button
        type="submit" disabled={pending}
        className="bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? 'Versturen...' : 'Verstuur bericht →'}
      </button>

      <p className="text-xs text-tekst/50 pt-1">
        Door dit formulier te verzenden ga je akkoord met de{' '}
        <a href="/privacyverklaring" className="underline hover:text-tekst/80 transition-colors">
          privacyverklaring
        </a>.
      </p>
    </form>
  );
}
