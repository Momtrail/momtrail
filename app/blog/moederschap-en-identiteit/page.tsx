import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Wie ben je nog naast dat je mama bent? | Blog Momtrail',
  description:
    'Veel moeders ervaren identiteitsverlies na de geboorte van hun kind. Je bent mama, maar wie ben jij nog daarnaast? Lees hoe je jezelf terugvindt in het moederschap.',
  keywords: [
    'identiteit als moeder',
    'wie ben ik naast moeder',
    'identiteitsverlies moederschap',
    'jezelf verliezen als moeder',
    'moeder worden identiteit',
    'jezelf terugvinden als moeder',
    'zelfvertrouwen na baby',
    'moederschap en identiteit',
    'burnout moeder',
    'verlies van jezelf als mama',
  ],
};

export default function BlogIdentiteitPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">
            ← Terug naar blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-wit/20 text-achtergrond text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              Voor moeders
            </span>
            <span className="text-achtergrond/50 text-sm">Oktober 2026 · Marleen, Momtrail</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-achtergrond leading-tight" style={{ fontFamily: 'var(--font-buydog)' }}>
            Wie ben je nog naast dat je mama bent?
          </h1>
        </div>
      </div>

      {/* Artikel */}
      <article className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-tekst/80 text-lg leading-relaxed mb-8 reveal">
          Je wordt moeder en alles verandert. Je lichaam, je dag, je slaap, je gesprekken aan de keukentafel. Maar er is iets wat stiller verandert, iets wat je pas later opmerkt: jijzelf.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Op een dag sta je voor de spiegel en denk je: wie ben ik nog eigenlijk? Niet als mama, die rol ken je inmiddels van binnen en van buiten. Maar wie was jij daarvoor? En is zij er nog?
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dit gevoel heeft een naam: <strong>identiteitsverlies in het moederschap</strong>. En het komt vaker voor dan je denkt. Het is geen teken dat er iets mis met je is. Het is een teken dat je heel diep bent gegaan voor iemand anders. En dat je aan jezelf toe bent.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Waarom moeders zichzelf verliezen
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Moeder worden is niet alleen een praktische verandering. Het is een <strong>identiteitswissel</strong>. Onderzoekers noemen het ook wel <em>matrescence</em>: de transformatie die een vrouw doormaakt als ze moeder wordt. Net zo ingrijpend als de puberteit, maar zonder dat iemand je er op voorbereidt.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Ineens ben je mama. En dat woord trekt veel naar zich toe. De zorg, de aandacht, de energie. Wat overblijft voor jouzelf: jouw interesses, jouw dromen, jouw lichaam, jouw vriendschappen, schuift naar de achtergrond. Niet omdat je het niet wilt. Maar omdat het systeem zo is ingericht dat de moeder geeft en geeft en geeft.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          En op een gegeven moment weet je niet meer goed wat jij eigenlijk wilt. Wat jij lekker vindt. Wie jij bent als niemand iets van je nodig heeft.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="text-achtergrond text-xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;Ik was zo druk met een goede moeder zijn, dat ik vergat ook gewoon mezelf te zijn.&rdquo;
          </p>
          <p className="text-achtergrond/60 text-sm mt-4">Een moeder uit mijn praktijk</p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Herken jij dit?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Identiteitsverlies als moeder voelt niet altijd groot en dramatisch. Soms zijn het kleine dingen. Je vraagt jezelf af:
        </p>

        <ul className="space-y-3 mb-12 reveal">
          {[
            'Wat deed ik vroeger eigenlijk graag? Ik weet het niet meer.',
            'Ik voel me alleen maar mama. Nooit meer gewoon mezelf.',
            'Mijn vriendinnen kennen me amper nog, en ik zelf ook niet.',
            'Ik ben constant beschikbaar voor iedereen, maar voor mezelf kom ik er niet aan toe.',
            'Ik mis iets, maar ik weet niet eens wat.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-tekst/80">
              <span className="text-primair mt-1 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Als je hier iets van herkent: dit is geen zwakte. Dit is wat er gebeurt als je te lang alleen maar geeft. Als je jouw behoeften steeds even uitstelt, totdat uitstellen de standaard is geworden.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wie ben je naast dat je mama bent?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Jezelf terugvinden als moeder begint niet met een groot plan. Het begint met een eerlijke vraag: <strong>wie was ik, en wie wil ik zijn?</strong>
        </p>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Niet in plaats van mama. Maar naast mama. Want jij bent meer dan één rol. Je bent een vrouw met een geschiedenis, met verlangens, met een lijf dat iets nodig heeft. Met vriendschappen die aandacht verdienen. Met werk dat bij je past, of juist niet. Met dromen die nog steeds ergens liggen te wachten.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          En het mooie is: hoe meer jij jezelf mag zijn, hoe meer je ook voor je kind aanwezig kunt zijn. Niet ondanks jezelf, maar <em>dankzij</em> jezelf.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Hoe begin je met jezelf terugvinden?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Het hoeft niet groot. Maar het helpt om concreet te worden. Een paar vragen om mee te beginnen:
        </p>

        <div className="bg-achtergrond rounded-2xl p-8 mb-6 reveal">
          <ul className="space-y-4">
            {[
              { v: 'Wat deed jij vroeger graag, wat je nu nooit meer doet?', t: 'Niet omdat het niet meer past, maar omdat het er nooit meer van is gekomen.' },
              { v: 'Wat geeft jou energie, los van je gezin?', t: 'Een sport, een creatief project, een gesprek met een vriendin, stilte. Wat vult jou?' },
              { v: 'Wie was jij voordat je mama werd?', t: 'Welke eigenschappen van haar herken je nog steeds in jezelf?' },
              { v: 'Wat zou je doen als je één dag volledig voor jezelf had?', t: 'Niet voor de kinderen, niet voor het huishouden. Alleen voor jou.' },
            ].map((q) => (
              <li key={q.v}>
                <p className="font-bold text-primair mb-1">{q.v}</p>
                <p className="text-tekst/70 text-sm leading-relaxed">{q.t}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Je hoeft deze vragen niet allemaal nu te beantwoorden. Maar ze mogen er zijn. Jij mag er zijn, naast al die andere rollen die je vervult.
        </p>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal" style={{ fontFamily: 'var(--font-buydog)' }}>
          Wanneer gaat het verder dan alleen vermoeidheid?
        </h2>

        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          Soms is identiteitsverlies verweven met meer. Met een gevoel van leegte dat niet weggaat. Met constant voor iedereen klaarstaan totdat je op bent. Met een relatie die onder druk staat, of een lichaam dat signalen geeft. Met het gevoel dat je het allemaal doet maar nergens meer van geniet.
        </p>

        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          Dat is het moment waarop een gesprek met iemand die begrijpt wat er speelt, meer doet dan een zelfhulpboek. Niet omdat er iets mis is met jou. Maar omdat je het niet alleen hoeft uit te zoeken.
        </p>

        {/* CTA */}
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Wil je hier samen naar kijken?</h2>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Een kennismaking is altijd <strong>kosteloos en vrijblijvend.</strong> We kijken samen wat jij nodig hebt.
          </p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Plan een kennismaking →
          </Link>
        </div>

      </article>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
