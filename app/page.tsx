import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PijnpuntenSlider from '@/components/PijnpuntenSlider';

const trailStops = [
  { nr: '01', label: 'De start', tekst: 'Je wordt moeder. Het mooiste en soms zwaarste avontuur begint.' },
  { nr: '02', label: 'Het hobbelige pad', tekst: 'Uitgeput, vol twijfels. Maar je blijft doorgaan.' },
  { nr: '03', label: 'Vastlopen', tekst: 'Jij of je kind. Het signaal dat er iets anders moet.' },
  { nr: '04', label: 'Rocking your momtrail!', tekst: 'Plezier in het moederschap en al jouw rollen daaromheen.' },
];

const aanbodPreview = [
  { titel: 'Moeder',                foto: '/fotos/IMG_6045 2.jpg', positie: '50% 20%', href: '/aanbod/moeder' },
  { titel: 'Kind',                  foto: '/fotos/IMG_5904 2.jpg', positie: '50% 20%', href: '/aanbod/kind' },
  { titel: 'PGB / Ambulant',        foto: '/fotos/IMG_5862 2.jpg', positie: '70% 15%', href: '/aanbod/ambulante-begeleiding' },
  { titel: 'Zwanger & Kinderwens',  foto: '/fotos/IMG_2748 2.jpg', positie: '50% 10%', href: '/aanbod/zwanger-en-kinderwens' },
];

const reviews = [
  { naam: 'Maureen',   tekst: 'Marleen heeft zowel mij als mijn zoontje goed geholpen met verschillende hulpvragen. Haar consulten zijn down to earth, wat ik persoonlijk heel prettig vind. Ze is geïnteresseerd, stelt goede vragen en is ook nog eens gezellig.' },
  { naam: 'Kimberley', tekst: 'Ik ben ontzettend blij dat ik met Marleen in contact ben gekomen! Ik kwam bij haar vanwege pijnklachten die ik al 15 jaar had en waar ik maar geen oplossing voor kon vinden. Tijdens een opstelling had ik een groot besefmoment. Sindsdien voel ik een soort rust over me heen gevallen.' },
  { naam: 'Fera',      tekst: 'Ik was positief verrast over de dingen die er uitkwamen. Geen ingewikkelde vragen of veel praten en toch klopte er zo veel. Na de sessie was ik moe maar inmiddels ervaar ik een stukje meer rust en dus absoluut een positieve verandering.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight text-achtergrond" style={{ fontFamily: 'var(--font-hoofd)' }}>
            Welkom bij Momtrail
          </h1>
          <p className="hero-subtitle max-w-xl text-2xl leading-relaxed mb-2 text-achtergrond/90" style={{ fontFamily: 'var(--font-buydog)' }}>
            Ben je klaar met overleven en het allemaal alleen doen?
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      {/* Introductie */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-10 reveal">Hi lieve mama...</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je doet je best. Elke dag weer. Maar ergens tussen het zorgen, regelen en doorgaan ben je jezelf kwijtgeraakt. Je glimlacht naar buiten, maar vanbinnen voel je: <strong>dit is niet hoe ik het wilde.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Misschien loopt je kind vast en weet je niet waarom. Misschien ben jij degene die vastloopt. Of allebei tegelijk.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Je hebt al van alles geprobeerd. Je snápt het wel, maar je voélt het niet. Dat komt omdat de antwoorden niet in je hoofd zitten, <strong>ze zitten in je lijf.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          In mijn praktijk begeleid ik moeders én kinderen. Niet met nog meer adviezen, maar door te kijken naar <strong>wat er écht speelt</strong>: onder de klacht, onder het gedrag, onder de stress.
        </p>
        <p className="text-tekst font-semibold leading-relaxed mb-8 reveal">
          Want jouw momtrail... die hoef je niet alleen te bewandelen.
        </p>
        <div className="flex flex-wrap justify-center gap-4 reveal">
          <Link href="/gratis#levenswiel" className="inline-block bg-primair text-achtergrond font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Ontdek waar je staat →
          </Link>
        </div>
      </section>

      <PijnpuntenSlider />

      {/* Momtrail — visueel pad */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <h2 className="text-3xl md:text-4xl text-achtergrond text-center mb-2 reveal-left" style={{ fontFamily: 'var(--font-hoofd)' }}>
            Jouw momtrail
          </h2>
          <p className="text-achtergrond/70 text-lg italic text-center mb-16 reveal">
            Elke moeder bewandelt haar eigen &lsquo;momtrail&rsquo;. Waar sta jij?
          </p>

          {/* Desktop trail */}
          <div className="hidden md:block relative" style={{ height: '280px' }}>
            <svg
              viewBox="0 0 1000 100"
              className="absolute inset-x-0 w-full"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              preserveAspectRatio="none"
            >
              <path
                d="M 0,70 C 80,70 120,25 250,25 C 380,25 420,75 500,75 C 580,75 620,25 750,25 C 880,25 920,70 1000,70"
                fill="none"
                stroke="rgba(250,232,225,0.5)"
                strokeWidth="3"
                strokeDasharray="10 6"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-around">
              {trailStops.map((stop, i) => (
                <div key={stop.nr} className="relative flex flex-col items-center">
                  {i % 2 === 0 && (
                    <div className="absolute bottom-full mb-5 text-center" style={{ width: '160px' }}>
                      <p className="font-bold text-achtergrond text-lg leading-snug mb-1" style={{ fontFamily: 'var(--font-buydog)' }}>
                        {stop.label}
                      </p>
                      <p className="text-achtergrond/70 text-sm leading-snug">{stop.tekst}</p>
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-md shrink-0 z-10 ${i === trailStops.length - 1 ? 'bg-wit text-primair ring-4 ring-achtergrond/30' : 'bg-achtergrond text-primair'}`}
                    style={{ fontFamily: 'var(--font-buydog)' }}
                  >
                    {stop.nr}
                  </div>
                  {i % 2 !== 0 && (
                    <div className="absolute top-full mt-5 text-center" style={{ width: '160px' }}>
                      <p className="font-bold text-achtergrond text-lg leading-snug mb-1" style={{ fontFamily: 'var(--font-buydog)' }}>
                        {stop.label}
                      </p>
                      <p className="text-achtergrond/70 text-sm leading-snug">{stop.tekst}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobiel — verticale timeline */}
          <div className="md:hidden space-y-0">
            {trailStops.map((stop, i) => (
              <div key={stop.nr} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-md ${i === trailStops.length - 1 ? 'bg-wit text-primair' : 'bg-achtergrond text-primair'}`}
                    style={{ fontFamily: 'var(--font-buydog)' }}
                  >
                    {stop.nr}
                  </div>
                  {i < trailStops.length - 1 && (
                    <div className="w-px flex-1 border-l-2 border-dashed border-achtergrond/40 my-1" />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <p className="font-bold text-achtergrond leading-snug mb-1" style={{ fontFamily: 'var(--font-buydog)' }}>
                    {stop.label}
                  </p>
                  <p className="text-achtergrond/70 text-sm leading-snug">{stop.tekst}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Aanbod preview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-primair mb-2 text-center reveal" style={{ fontFamily: 'var(--font-buydog)' }}>Wil je samen op pad met mij?</h2>
          <p className="text-tekst/70 text-lg italic text-center mb-10 reveal">Waar kan ik je mee helpen?</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {aanbodPreview.map(item => (
              <Link key={item.href} href={item.href}
                className="bg-wit rounded-2xl overflow-hidden hover:shadow-lg transition-shadow reveal flex flex-col border border-primair/10">
                <img src={item.foto} alt={item.titel} className="w-full h-32 object-cover" style={{ objectPosition: item.positie }} />
                <p className="font-bold text-primair text-sm p-4 text-center">{item.titel}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/aanbod" className="inline-block bg-primair text-achtergrond font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Bekijk aanbod →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-2 text-center reveal">Moeders die je voorgingen</h2>
          <p className="text-achtergrond/60 italic text-center mb-10 reveal">Ervaringen op hun pad</p>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map(r => (
              <div key={r.naam} className="bg-wit rounded-2xl p-6 reveal flex flex-col">
                <p className="text-tekst/80 leading-relaxed italic flex-1 mb-6">&ldquo;{r.tekst}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primair text-wit flex items-center justify-center font-bold text-sm shrink-0">
                    {r.naam.charAt(0)}
                  </div>
                  <p className="font-bold text-primair">{r.naam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Klaar om jouw momtrail te starten?</h2>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">Een kennismaking is altijd kosteloos en vrijblijvend. Ik kijk ernaar uit je te ontmoeten.</p>
        <Link href="/contact" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
          Plan een kennismaking →
        </Link>
      </section>

      {/* Over mij preview */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="two-col max-w-5xl mx-auto px-6 pt-10">
          <div className="col-image reveal flex items-center justify-center">
            <div className="relative w-full">
              <div
                className="absolute inset-0 bg-achtergrond/20 -z-10"
                style={{
                  borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                  transform: 'translate(10px, 10px) scale(1.04)',
                }}
              />
              <img
                src="/fotos/portret.jpg"
                alt="Marleen"
                className="w-full object-cover aspect-[3/4]"
                style={{
                  borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                  objectPosition: '65% 20%',
                }}
              />
            </div>
          </div>
          <div className="col-text reveal">
            <h2 className="text-2xl font-bold text-achtergrond mb-4">Over mij</h2>
            <p className="text-achtergrond/80 leading-relaxed mb-4">
              Ik ben Marleen, moeder van twee dochters en zij zijn de reden waarom ik doe wat ik doe. Het moederschap bracht mij bij mijzelf: een ontregeld zenuwstelsel, een zoektocht naar antwoorden en uiteindelijk een missie. Ik begeleid moeders én kinderen die vastlopen, met methodes die verder gaan dan praten alleen.
            </p>
            <Link href="/over-mij" className="inline-block bg-wit text-primair font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity mt-2">
              Lees meer over mij →
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
