import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Over mij' };

export default function OverMijPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold text-primair mb-12 reveal" style={{ fontFamily: 'var(--font-hoofd)' }}>Over mij</h1>

        {/* Twee kolommen */}
        <div className="flex flex-col md:flex-row gap-14 items-start mb-16">

          <div className="flex-1 space-y-4">
            <p className="text-tekst/80 leading-relaxed reveal">
              Ik ben Marleen en samen met Paul, hebben we <strong>twee prachtige dochters.</strong> Zij hebben me geïnspireerd om te doen wat ik nu doe. Het duurde even voor ik zwanger werd. Maar toen dat eenmaal lukte voelde ik me geweldig. Tot <strong>de bevalling anders verliep dan gehoopt.</strong> Ze huilde veel, ik huilde mee en de zoektocht begon. Bij de jongste was het precies andersom. Haar geboorte was fantastisch (ja echt!), maar ik heb de zwangerschap hard gewerkt aan <strong>mijn angst voor nog een huilbaby.</strong>
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Vanaf de start vroeg ik mij al af welke impact dit alles had op hen. Nu weet ik dat <strong>zwangerschap en geboorte voor blijvende imprints zorgen</strong> en dat juist hier al gedragspatronen ontstaan. Ook kwam ik erachter hoe vaak wij als moeders <strong>niet in balans zijn en een ontregeld zenuwstelsel hebben.</strong> Althans, ik wel..
            </p>
            <p className="text-primair text-2xl leading-relaxed reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
              Ik vond het zo&apos;n heftige verandering om zelf moeder te worden. Als je me toen zou kennen zou je mij hebben omschreven als de typische millenialmom die het perfect wilde doen.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Voor mij was het moederschap <strong>dé uitnodiging om mijzelf te ontwikkelen.</strong> Er zijn geen betere spiegels dan je kinderen ;-). Ik stond totaal niet meer in verbinding met mijn lijf en mijn gevoel. Mijn zenuwstelsel was al jaren ontregeld. Onder andere <strong>NEI therapie en zenuwstelselregulatie</strong> hebben voor mij mijn leven veranderd.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Ik help je graag in het prachtige, maar rauwe proces van moederschap. Want <strong>gedrag is altijd logisch</strong> en de antwoorden liggen soms diep verborgen in je lichaam.
            </p>
            <p className="text-primair text-2xl leading-relaxed reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
              Mijn missie: een mama vol vertrouwen en een kindje dat emotioneel de wereld aan kan, daar doe ik het voor.
            </p>
          </div>

          {/* Organische foto */}
          <div className="md:w-96 shrink-0 flex items-start justify-center reveal">
            <div className="relative">
              <div
                className="absolute inset-0 bg-accent/40 -z-10"
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

        </div>

        <p className="text-tekst/80 leading-relaxed reveal">
          Veel liefs,<br />
          <span className="text-3xl" style={{ fontFamily: 'var(--font-buydog)' }}>Marleen</span>
        </p>

      </section>
      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
