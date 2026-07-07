'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const gebieden = [
  { label: 'Energie & rust', kort: 'Energie', key: 'energie' },
  { label: 'Verbinding met jezelf', kort: 'Jezelf', key: 'zelf' },
  { label: 'Verbinding met je kind(eren)', kort: 'Kind(eren)', key: 'kind' },
  { label: 'Partner & relatie', kort: 'Partner', key: 'partner' },
  { label: 'Werk / identiteit', kort: 'Werk', key: 'werk' },
  { label: 'Sociale steun', kort: 'Sociaal', key: 'sociaal' },
  { label: 'Lichaam & gezondheid', kort: 'Lichaam', key: 'lichaam' },
  { label: 'Gevoel van grip & overzicht', kort: 'Grip', key: 'grip' },
] as const;

type Key = (typeof gebieden)[number]['key'];
type Values = Record<Key, number>;

const initialValues = gebieden.reduce((acc, g) => {
  acc[g.key] = 5;
  return acc;
}, {} as Values);

const CANVAS_SIZE = 420;
const CENTER = 210;
const MAX_RADIUS = 125;
const LABEL_RADIUS = MAX_RADIUS + 22;

type EmailStatus = 'idle' | 'submitting' | 'success' | 'error';

function CtaBlock({ lowestLabel, lowestKey, avg }: { lowestLabel: string; lowestKey: string; avg: string }) {
  const params = new URLSearchParams({ from: 'levenswiel', laagste: lowestKey, label: lowestLabel, avg });
  const href = `/contact?${params.toString()}`;
  return (
    <div className="bg-primair text-wit rounded-2xl p-8 md:p-10 text-center mt-8 reveal">
      <p className="text-wit/70 text-xs font-bold uppercase tracking-widest mb-3">Stap verder dan je hoofd</p>
      <h3 className="text-xl font-bold mb-4">
        Je hoofd-score ken je nu. Maar wat weet je lijf?
      </h3>
      <p className="text-wit/90 leading-relaxed max-w-lg mx-auto mb-3">
        De scores die je net ingevuld hebt, komen uit je hoofd. Je onderbewuste houdt iets anders
        vast &mdash; spanning, patronen en overtuigingen die je bewust niet meer opmerkt, maar die
        wél bepalen hoe jij je voelt.
      </p>
      <p className="text-wit/90 leading-relaxed max-w-lg mx-auto mb-7">
        In een gratis kennismaking check ik samen met jou wat jouw onderbewuste als score
        zou geven &mdash; en waar de echte sleutel ligt.
      </p>
      <Link
        href={href}
        className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        Plan je gratis onderbewuste-check →
      </Link>
      <p className="text-wit/60 text-sm mt-4">30 minuten · kosteloos · online of bij Momtrail</p>
    </div>
  );
}

export default function Levenswiel() {
  const [values, setValues] = useState<Values>(initialValues);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('idle');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const n = gebieden.length;
    const angleStep = (Math.PI * 2) / n;

    ctx.strokeStyle = '#dda494';
    ctx.lineWidth = 1;
    for (let r = 1; r <= 5; r++) {
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = -Math.PI / 2 + i * angleStep;
        const rad = (MAX_RADIUS / 5) * r;
        const x = CENTER + Math.cos(a) * rad;
        const y = CENTER + Math.sin(a) * rad;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    gebieden.forEach((g, i) => {
      const a = -Math.PI / 2 + i * angleStep;
      const x = CENTER + Math.cos(a) * MAX_RADIUS;
      const y = CENTER + Math.sin(a) * MAX_RADIUS;
      ctx.beginPath();
      ctx.moveTo(CENTER, CENTER);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#dda494';
      ctx.stroke();
    });

    ctx.beginPath();
    gebieden.forEach((g, i) => {
      const a = -Math.PI / 2 + i * angleStep;
      const rad = (MAX_RADIUS / 10) * values[g.key];
      const x = CENTER + Math.cos(a) * rad;
      const y = CENTER + Math.sin(a) * rad;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(193,96,82,0.35)';
    ctx.fill();
    ctx.strokeStyle = '#c16052';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    gebieden.forEach((g, i) => {
      const a = -Math.PI / 2 + i * angleStep;
      const rad = (MAX_RADIUS / 10) * values[g.key];
      const x = CENTER + Math.cos(a) * rad;
      const y = CENTER + Math.sin(a) * rad;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#c16052';
      ctx.fill();
    });

    ctx.font = '700 12px sans-serif';
    ctx.fillStyle = '#76473a';
    gebieden.forEach((g, i) => {
      const a = -Math.PI / 2 + i * angleStep;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      const x = CENTER + cos * LABEL_RADIUS;
      const y = CENTER + sin * LABEL_RADIUS;

      ctx.textAlign = cos > 0.3 ? 'left' : cos < -0.3 ? 'right' : 'center';
      ctx.textBaseline = sin > 0.3 ? 'top' : sin < -0.3 ? 'bottom' : 'middle';
      ctx.fillText(g.kort, x, y);
    });
  }, [values]);

  const { avg, lowest } = useMemo(() => {
    const scores = Object.values(values);
    const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
    const lowest = gebieden.reduce((min, g) => (values[g.key] < values[min.key] ? g : min), gebieden[0]);
    return { avg, lowest };
  }, [values]);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailStatus('submitting');
    try {
      const res = await fetch('/api/levenswiel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, values, avg, lowestKey: lowest.key, lowestLabel: lowest.label }),
      });
      if (!res.ok) throw new Error('mislukt');
      setEmailStatus('success');
    } catch {
      setEmailStatus('error');
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-primair mb-2 text-center reveal">Het Levenswiel</h2>
      <p className="text-tekst/60 italic text-center mb-10 reveal">
        Acht gebieden. Eén eerlijk cijfer per gebied.
      </p>

      <div className="bg-wit rounded-2xl shadow-sm border border-primair/10 p-6 md:p-9 reveal">
        <div className="flex flex-col md:flex-row gap-9 items-center md:items-start">
          <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className="max-w-full h-auto md:flex-none md:w-[380px]" />
          <div className="w-full flex-1">
            {gebieden.map(g => (
              <div key={g.key} className="mb-5">
                <label className="flex justify-between text-sm font-bold text-tekst mb-1.5">
                  {g.label}
                  <span className="text-primair font-bold text-lg" style={{ fontFamily: 'var(--font-buydog)' }}>
                    {values[g.key]}
                  </span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={values[g.key]}
                  onChange={e => setValues(prev => ({ ...prev, [g.key]: Number(e.target.value) }))}
                  className="levenswiel-slider w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Samenvatting */}
        <div className="mt-6 p-6 rounded-2xl bg-achtergrond text-tekst italic text-center" style={{ fontFamily: 'var(--font-buydog)' }}>
          {Number(avg) < 5 && (
            <>Gemiddeld: <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{avg}</strong> &mdash; daar is ruimte voor groei. Je laagste gebied is <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{lowest.label}</strong>.</>
          )}
          {Number(avg) >= 5 && Number(avg) < 7 && (
            <>Gemiddeld: <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{avg}</strong>. Je houdt het staande, maar <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{lowest.label}</strong> vraagt aandacht.</>
          )}
          {Number(avg) >= 7 && (
            <>Gemiddeld: <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{avg}</strong>. Je staat er relatief stevig voor &mdash; hou <strong className="not-italic font-bold" style={{ fontFamily: 'var(--font-hoofd)' }}>{lowest.label}</strong> toch in de gaten.</>
          )}
        </div>

        {/* E-mail leadcapture */}
        <div className="mt-8 border-t border-primair/10 pt-8">
          {emailStatus === 'idle' && (
            <>
              <p className="text-center font-bold text-tekst text-base mb-1">
                Ontvang jouw persoonlijk mini-verslag
              </p>
              <p className="text-center text-tekst/60 text-sm mb-6">
                Ik stuur je een samenvatting van jouw scores + één tip van mij voor jouw aandachtsgebied.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="jouw@email.nl"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full border border-primair/20 bg-achtergrond text-tekst placeholder:text-tekst/40 focus:outline-none focus:border-primair text-sm"
                />
                <button
                  type="submit"
                  className="bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap text-sm"
                >
                  Stuur mijn verslag →
                </button>
              </form>
              <p className="text-center text-tekst/40 text-xs mt-3">Geen spam. Alleen dit ene mailtje.</p>
            </>
          )}
          {emailStatus === 'submitting' && (
            <p className="text-center text-tekst/60 italic text-sm">Even geduld...</p>
          )}
          {emailStatus === 'success' && (
            <div className="text-center py-2">
              <p className="font-bold text-primair text-lg mb-1">Verstuurd!</p>
              <p className="text-tekst/70 text-sm">Check je inbox (en spammap). Je verslag is onderweg.</p>
            </div>
          )}
          {emailStatus === 'error' && (
            <div className="text-center py-2">
              <p className="font-bold text-primair mb-2">Er ging iets mis...</p>
              <p className="text-tekst/70 text-sm mb-3">
                Probeer het opnieuw of mail me op{' '}
                <a href="mailto:info@momtrail.nl" className="underline">info@momtrail.nl</a>.
              </p>
              <button onClick={() => setEmailStatus('idle')} className="text-primair underline text-sm">
                Opnieuw proberen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <CtaBlock lowestLabel={lowest.label} lowestKey={lowest.key} avg={avg} />
    </section>
  );
}
