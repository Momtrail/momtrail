import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const aanbodPreview = [
  { titel: 'Moeder & Kind',                     slug: 'moeder-en-kind',          foto: '/fotos/IMG_6045 2.jpg', positie: '50% 20%' },
  { titel: 'Ambulante begeleiding (100% vergoed)', slug: 'ambulante-begeleiding', foto: '/fotos/IMG_5862 2.jpg', positie: '70% 15%' },
  { titel: 'Zwanger & Kind',                    slug: 'zwanger-en-kind',         foto: '/fotos/IMG_2748 2.jpg', positie: '50% 10%' },
  { titel: 'Kinderwens',                         slug: 'kinderwens',             foto: '/fotos/IMG_5836 2.jpg', positie: '50% 10%' },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight text-achtergrond" style={{ fontFamily: 'var(--font-hoofd)' }}>
            Welkom bij Momtrail
          </h1>
          <p className="hero-subtitle max-w-xl text-xl leading-relaxed mb-2 text-achtergrond/90" style={{ fontFamily: 'var(--font-buydog)' }}>
            Ben je klaar met overleven en het allemaal alleen doen?
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      {/* Introductie */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-2 reveal">Hi lieve mama...</h2>
        <p className="text-tekst/60 italic mb-10 reveal">Elke moeder bewandelt haar eigen &apos;momtrail&apos;. Waar sta jij?</p>
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
        <p className="text-tekst font-semibold leading-relaxed reveal">
          Want jouw momtrail... die hoef je niet alleen te bewandelen.
        </p>
      </section>

      {/* Over mij preview */}
      <section className="bg-primair py-20">
        <div className="two-col max-w-5xl mx-auto px-6">
          <div className="col-image reveal">
            <img src="/fotos/portret.jpg" alt="Marleen" />
          </div>
          <div className="col-text reveal">
            <h2 className="text-2xl font-bold text-achtergrond mb-4">Over mij</h2>
            <p className="text-achtergrond/80 leading-relaxed mb-4">
              [Korte introductie over jezelf — wie ben je, wat drijft je?]
            </p>
            <Link href="/over-mij" className="inline-block bg-wit text-primair font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity mt-2">
              Lees meer over mij →
            </Link>
          </div>
        </div>
      </section>

      {/* Aanbod preview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-primair mb-2 text-center reveal">Mijn aanbod</h2>
        <p className="text-tekst/60 italic text-center mb-10 reveal">Waar kan ik je mee helpen?</p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {aanbodPreview.map(item => (
            <Link key={item.slug} href={`/aanbod/${item.slug}`}
              className="bg-wit rounded-2xl shadow-sm border border-primair/10 overflow-hidden hover:shadow-md transition-shadow reveal flex flex-col">
              <img src={item.foto} alt={item.titel} className="w-full h-32 object-cover" style={{ objectPosition: item.positie }} />
              <p className="font-bold text-primair text-sm p-4 text-center">{item.titel}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 reveal">
          <Link href="/aanbod" className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Bekijk alle trajecten →
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-achtergrond py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primair mb-2 text-center reveal">Wat anderen zeggen</h2>
          <p className="text-tekst/60 italic text-center mb-10 reveal">Ervaringen van moeders die je voor gingen</p>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map(r => (
              <div key={r.naam} className="bg-wit rounded-2xl p-6 border border-primair/10 reveal flex flex-col">
                <p className="text-tekst/80 leading-relaxed italic flex-1 mb-4">&ldquo;{r.tekst}&rdquo;</p>
                <p className="font-bold text-primair">{r.naam}</p>
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

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
