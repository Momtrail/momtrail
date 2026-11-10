import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = {
  title: 'Speciaal aanbod – Bewust Zwanger | Momtrail',
  robots: { index: false, follow: false },
};

const inbegrepen = [
  'Intake',
  '3 individuele sessies van 75 minuten, in mijn praktijkruimte of online',
  'Whatsapp-begeleiding tussendoor voor een check-in na een sessie en bij vragen',
  'Lichaamsgerichte oefeningen en kleine opdrachten voor thuis',
  'Toegang tot de online leeromgeving ten tijde van het traject',
  'Toegang tot de Rust Reset: 7 dagen introductie in zenuwstelselregulatie',
];

export default function SpeciaalAanbodZwangerPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative py-24 px-6"
        style={{ backgroundImage: "url('/fotos/IMG_8861.JPG')", backgroundSize: 'cover', backgroundPosition: 'center 50%' }}
      >
        <div className="absolute inset-0 bg-primair/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent text-wit text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Exclusief aanbod
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-achtergrond mb-4" style={{ fontFamily: 'var(--font-buydog)' }}>
            Bewust Zwanger
          </h1>
          <p className="text-achtergrond/80 text-xl italic">
            Ontspannen zwanger zijn, van binnen en van buiten
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro */}
        <p className="text-tekst/80 leading-relaxed mb-4 text-lg reveal">
          Leuk dat je hier bent! Omdat je bij Shalamayura komt, ontvang je een speciaal aanbod.
        </p>
        <p className="text-tekst font-semibold text-xl leading-relaxed mb-4 reveal">
          Je krijgt namelijk een gratis sessie cadeau van Momtrail!
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 text-lg reveal">
          In die sessie werken we aan één thema dat bij jou speelt. Je gaat naar huis met meer ontspanning in je lijf, een eerste verbinding met je kindje en een concreet handvat om mee verder te gaan. Wil je daarna dieper gaan? Dan kun je altijd instappen in het traject.
        </p>

        {/* Herken je dit */}
        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <h2 className="text-2xl font-bold text-primair mb-2">Herken je dit?</h2>
          <p className="text-tekst/70 mb-6">Je bent zwanger... en ergens voelt het ook spannend. Misschien merk je:</p>
          <ul className="space-y-3">
            {[
              'Je bent sneller overprikkeld dan normaal',
              'Oude thema\'s komen ineens boven, zoals hoe je zelf bent opgevoed, de relatie met je ouders of patronen die je liever niet doorgeeft',
              'Je twijfelt aan jezelf',
              'Je lijf geeft signalen dat je wat rustiger aan mag doen',
              'Je voelt angst voor de bevalling',
              'Je kunt moeilijk ontspannen',
              'Je bent benieuwd hoe het met je kindje gaat: wat er leeft, wat het nodig heeft',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hoe zou het zijn */}
        <div className="bg-primair rounded-2xl p-8 mb-16 reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">Hoe zou het zijn als...</h2>
          <ul className="space-y-3">
            {[
              'Je hoofd en zenuwstelsel kunnen tot rust komen, ook bij spanning',
              'Je begrijpt waar jouw emoties vandaan komen',
              'Je voelt vertrouwen in je bevalling',
              'Oude stukken worden niet doorgegeven',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-achtergrond/90">
                <Kompas className="text-achtergrond/60 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Wat we doen */}
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Wat we samen doen</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          We beginnen met wat er bij jou speelt. Misschien is dat ontspanning en rust in je lijf, misschien is het voorbereiding op de bevalling, of juist iets van vroeger dat nu de kop opsteekt. Dat bepalen we voor elke sessie samen.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Ik werk onder andere met <strong className="text-tekst">NEI (Neuro Emotionele Integratie)</strong> en de <strong className="text-tekst">biotensor</strong>, een instrument dat rechtstreeks communiceert met het onderbewuste. Zo kunnen we op een diep niveau checken wat er speelt: bij jou, maar ook bij je kindje. Wil jij bijvoorbeeld weten hoe het met je kindje gaat of wat het nodig heeft? Dat kan. Ik combineer dit altijd met inzichten uit geboortepsychologie en praktische, lichaamsgerichte methodes.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Ik stem de sessies af op de thema's waar jij mee wil werken. Zo wordt het traject echt iets waar jij wat aan hebt.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-16 reveal">
          De sessies zijn ook inzetbaar <strong className="text-tekst">ná de bevalling</strong>, bijvoorbeeld als je de geboorte wilt verwerken, of als de start niet verliep zoals je had gehoopt. Je bent van harte welkom, ook in het kraambed of de eerste maanden daarna.
        </p>

        {/* Prijsblok */}
        <div className="bg-wit border border-primair/20 rounded-2xl p-8 mb-16 reveal">
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-primair">Jouw exclusieve aanbod</h2>
          </div>
          <ul className="space-y-3 mb-8">
            {inbegrepen.map(i => (
              <li key={i} className="flex items-start gap-3 text-tekst/80">
                <Kompas />
                {i}
              </li>
            ))}
          </ul>
          <div className="border-t border-primair/10 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-tekst/80 font-medium">Eerste sessie</span>
              <span className="text-2xl font-bold text-primair">Gratis</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-tekst/80 font-medium">Daarna instappen: traject (3 sessies)</span>
              <span className="text-2xl font-bold text-primair">€417</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-primair/10">
              <span className="text-tekst/50 text-sm">Totaalwaarde</span>
              <span className="text-tekst/40 text-lg line-through">€695</span>
            </div>
            <p className="text-tekst/60 text-sm">Betalen in termijnen is mogelijk.</p>
          </div>
        </div>

      </div>

      {/* Reviews */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-2 text-center reveal">Wat anderen zeggen</h2>
          <p className="text-achtergrond/60 italic text-center mb-10 reveal">Ervaringen van zwangere moeders</p>
          <div id="reviews-zwanger" className="grid md:grid-cols-2 gap-6">
            {[
              { naam: 'Lonneke', tekst: 'Ik voel me vaker ontspannen, neem sneller rust en krijg steeds meer vertrouwen in de zwangerschap. Het is fijn om vaker te verbinden met mijn kindje.' },
              { naam: 'Sara',    tekst: 'De oefeningen die je thuis kan doen zijn heel fijn. Ik merk meer rust in mezelf sinds ik ben gestart. Er wordt echt geluisterd naar je. Mijn angst voor de bevalling is zoveel minder.' },
            ].map(r => (
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

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Over Marleen */}
        <div className="bg-tekst rounded-2xl p-8 mb-16 reveal">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-52 shrink-0 flex justify-center">
              <div className="relative w-44">
                <div
                  className="absolute inset-0 bg-accent/40 -z-10"
                  style={{
                    borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                    transform: 'translate(8px, 8px) scale(1.04)',
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
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-bold text-achtergrond">Over mij</h2>
              <p className="text-achtergrond/80 leading-relaxed">
                Ik ben Marleen. Zelf moeder van twee dochters, en dat moederschap was voor mij een grote uitnodiging om dichter bij mezelf te komen. Ik stond totaal niet meer in verbinding met mijn lijf en mijn gevoel, mijn zenuwstelsel was al jaren ontregeld.
              </p>
              <p className="text-achtergrond/80 leading-relaxed">
                Wat mij heeft geholpen, is wat ik nu ook inzet voor jou: <strong className="text-achtergrond">NEI (Neuro Emotionele Integratie)</strong> en somatische oefeningen voor <strong className="text-achtergrond">zenuwstelselregulatie</strong>. NEI werkt met het lichaam om emotionele blokkades op te lossen die je bewust vaak niet eens kent. Zo werken we niet alleen aan hoe je je voelt, maar ook aan wat er dieper ligt.
              </p>
              <p className="text-achtergrond/80 leading-relaxed">
                Ik werk ook vanuit <strong className="text-achtergrond">geboortepsychologie</strong>: de wetenschap dat geboorte voor zowel jou als je kindje een diepe indruk achterlaat.              </p>
              <p className="text-achtergrond/80 leading-relaxed">
                En deze methodes samen? Die zijn magisch wat mij betreft!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-6">
            Klaar om met vertrouwen je zwangerschap in te gaan?
          </h2>
          <a
            href="https://calendly.com/momtrail/consult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan hier je gratis sessie →
          </a>
        </div>

        <p className="text-center text-tekst/50 text-sm mt-8 reveal">
          Meer weten over Bewust Zwanger?{' '}
          <Link href="/aanbod/zwanger-en-kind/bewust-zwanger" className="underline hover:text-primair transition-colors">
            Bekijk het volledige traject →
          </Link>
        </p>

      </div>

      <ScrollReveal singles={['.reveal']} grids={['#reviews-zwanger']} />
    </>
  );
}
