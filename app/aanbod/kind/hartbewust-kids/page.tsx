import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Kompas from '@/components/Kompas';

export const metadata: Metadata = { title: 'Hartbewust Kids cursus' };

const methodes = [
  'Kinderyoga',
  'Ademhaling',
  'Creatieve opdrachten en spel',
  'Somatische oefeningen',
  'Mindfulness',
];

export default function HartbewustKidsPage() {
  return (
    <>
      <div className="bg-primair py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/aanbod/kind" className="text-achtergrond/70 hover:text-achtergrond text-sm mb-6 inline-block">← Terug naar Kind</Link>
          <h1 className="text-5xl font-bold text-achtergrond mb-3" style={{ fontFamily: 'var(--font-buydog)' }}>Hartbewust Kids</h1>
          <p className="text-achtergrond/80 text-xl italic">Voor kinderen die weer mogen voelen dat ze goed zijn zoals ze zijn</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Herken jij dit?</h2>
        <div className="bg-achtergrond rounded-2xl p-8 mb-8 reveal">
          <p className="text-tekst/80 leading-relaxed mb-4">
            Er wordt steeds meer gevraagd van kinderen. Meer prikkels, meer tempo, meer druk om mee te komen. En dat zie je terug: driftbuien, druk of opstandig gedrag of juist een kind dat zich steeds meer terugtrekt of onzeker is. Dat kan thuis of op school voor problemen zorgen.
          </p>
          <p className="text-tekst/80 leading-relaxed">
            Als dit bekend voelt, ben je hier op de goede plek. Zoals veel ouders wil jij dat je kind leert omgaan met zijn of haar emoties en met die druk en prikkels, in plaats van er last van te blijven houden. Zodat het weer mag voelen dat er niets mis met hem of haar is. Het zijn stuk voor stuk prachtige, gevoelige kinderen met unieke talenten.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Maak kennis met Hartbewust Kids</h2>
        <p className="text-tekst/80 leading-relaxed mb-6 reveal">
          HartBewust Kids is een laagdrempelige cursus van 10 weken, waarin kinderen van 6 tot 12 jaar in een kleine groep (maximaal 5 kinderen) <strong>spelenderwijs leren om weer rust te voelen</strong>, grip te krijgen op hun emoties en te ontdekken hoe waardevol en uniek ze zijn. Gewoon goed, precies zoals ze zijn.
        </p>

        <div className="border-l-4 border-accent pl-8 mb-8 reveal">
          <p className="font-semibold text-tekst mb-4">Na de cursus merk je dat je kind:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-tekst/80"><Kompas />Weerbaarder is geworden</li>
            <li className="flex items-start gap-3 text-tekst/80"><Kompas />Beter voor zichzelf kan opkomen</li>
            <li className="flex items-start gap-3 text-tekst/80"><Kompas />Beter om kan gaan met drukte of spanning, niet omdat het rustiger wordt, maar omdat zij zelf de tools hebben</li>
          </ul>
        </div>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Doordat de groep klein blijft, is er volop ruimte voor persoonlijke aandacht: elk kind krijgt precies de begeleiding die het nodig heeft.
        </p>

        <div className="bg-primair rounded-2xl p-8 mb-12 reveal">
          <p className="font-semibold text-achtergrond mb-6">We werken met een mix van:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

            {/* Kinderyoga */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-wit flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primair">
                  <circle cx="20" cy="8" r="3.5"/>
                  <path d="M20 12v7"/>
                  <path d="M20 19 Q14 22 10 26"/>
                  <path d="M20 19 Q26 22 30 26"/>
                  <path d="M10 26 Q8 31 13 31 Q17 31 20 27"/>
                  <path d="M30 26 Q32 31 27 31 Q23 31 20 27"/>
                </svg>
              </div>
              <span className="text-achtergrond/90 text-sm font-medium leading-snug">Kinderyoga</span>
            </div>

            {/* Ademhaling */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-wit flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-8 h-8 text-primair">
                  <path d="M4 15 Q10 9 16 15 Q22 21 28 15 Q34 9 40 15"/>
                  <path d="M4 23 Q10 17 16 23 Q22 29 28 23 Q34 17 40 23"/>
                  <path d="M10 31 Q16 27 20 31 Q24 35 30 31"/>
                </svg>
              </div>
              <span className="text-achtergrond/90 text-sm font-medium leading-snug">Ademhaling</span>
            </div>

            {/* Creatief */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-wit flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primair">
                  <path d="M20 5 L22.5 13H31L24.5 18L27 26L20 21L13 26L15.5 18L9 13H17.5Z"/>
                  <path d="M20 21v9"/>
                  <path d="M16 34h8"/>
                </svg>
              </div>
              <span className="text-achtergrond/90 text-sm font-medium leading-snug">Creatieve opdrachten & spel</span>
            </div>

            {/* Somatisch */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-wit flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primair">
                  <path d="M20 35 Q20 22 20 18"/>
                  <path d="M20 26 Q13 20 12 12 Q20 11 20 22"/>
                  <path d="M20 22 Q27 16 28 8 Q20 7 20 18"/>
                  <path d="M16 35 Q18 33 20 35 Q22 33 24 35"/>
                </svg>
              </div>
              <span className="text-achtergrond/90 text-sm font-medium leading-snug">Somatische oefeningen</span>
            </div>

            {/* Mindfulness */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-wit flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primair">
                  <circle cx="20" cy="20" r="4"/>
                  <path d="M20 6 Q23 13 20 16"/>
                  <path d="M20 24 Q17 27 20 34"/>
                  <path d="M6 20 Q13 17 16 20"/>
                  <path d="M24 20 Q27 23 34 20"/>
                  <path d="M10 10 Q15 15 16 18"/>
                  <path d="M24 22 Q25 25 30 30"/>
                  <path d="M30 10 Q25 15 24 18"/>
                  <path d="M16 22 Q15 25 10 30"/>
                </svg>
              </div>
              <span className="text-achtergrond/90 text-sm font-medium leading-snug">Mindfulness</span>
            </div>

          </div>
        </div>
      </div>

      {/* Quote foto */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center"
        style={{ backgroundImage: "url('/fotos/Foto Atelier Contrast-49.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 20%' }}
      >
        <div className="absolute inset-0 bg-primair/65" />
        <div className="relative text-center px-6 max-w-2xl mx-auto reveal">
          <p className="text-achtergrond text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-buydog)' }}>
            &ldquo;every child has something beautiful to give the world. sometimes they just need the right space to bloom.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">Is deze cursus iets voor jouw kind?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          HartBewust Kids is bedoeld voor kinderen van 6 tot en met 12 jaar.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Alle kinderen zijn welkom. Sommige kinderen doen mee omdat ze worstelen met bijvoorbeeld hooggevoeligheid of concentratieproblemen/ADHD, en daardoor sneller overprikkeld raken. Andere kinderen ervaren geen klachten, maar krijgen juist van jongs af aan mooie tools mee om stevig in hun schoenen te staan en met spanning en emoties om te gaan.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          In beide gevallen geldt: hoe eerder een kind leert vertrouwen op zichzelf, hoe steviger die basis voor de rest van zijn of haar leven.
        </p>

      </div>

      {/* OuderKracht - rode sectie */}
      <section className="bg-primair pb-20">
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path fill="#fae8e1" d="M0,0 L1440,0 L1440,50 C1080,10 360,10 0,50 Z" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 pt-10">
          <h2 className="text-2xl font-bold text-achtergrond mb-6 reveal">Jij als ouder doet ook mee: het OuderKracht programma</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-achtergrond/80 leading-relaxed reveal">
                Verandering bij je kind gebeurt niet alleen in de les zelf, maar vooral ook thuis. Daarom sta je er bij HartBewust Kids niet alleen voor.
              </p>
              <p className="text-achtergrond/80 leading-relaxed reveal">
                Na elke les ontvang je als ouder informatie en oefeningen, zodat je precies weet waar je kind mee bezig is en hoe je daarop kunt aansluiten. Daarnaast krijg je automatisch toegang tot het <strong className="text-achtergrond">OuderKrachtprogramma</strong>: een online programma vol kennis, praktische oefeningen en tools om het effect van de lessen ook thuis te verstevigen. Met als extra optie een live dag, waarop je samen met andere ouders ervaringen, inzichten en technieken uitwisselt.
              </p>
              <p className="text-achtergrond/80 leading-relaxed reveal">
                Onderzoek bevestigt wat wij al langer zien in de praktijk: de betrokkenheid van ouders maakt het verschil tussen een leuke cursus en een blijvende verandering. Jij bent daarin geen toeschouwer, maar een belangrijke schakel.
              </p>
            </div>
            <div className="md:w-52 shrink-0 reveal">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-wit/20 -z-10"
                  style={{
                    borderRadius: '58% 42% 62% 38% / 45% 55% 45% 55%',
                    transform: 'translate(6px, 6px) scale(1.04)',
                  }}
                />
                <img
                  src="/fotos/jordan-whitt-KQCXf_zvdaU-unsplash.jpg"
                  alt="Ouder en kind"
                  className="w-full object-cover aspect-[3/4]"
                  style={{
                    borderRadius: '58% 42% 62% 38% / 45% 55% 45% 55%',
                    objectPosition: 'center 20%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-primair rounded-2xl p-8 text-center reveal">
          <h2 className="text-2xl font-bold text-achtergrond mb-3">Zet je op de wachtlijst</h2>
          <p className="text-achtergrond/80 mb-6 leading-relaxed">
            Bij voldoende aanmeldingen start er een nieuwe groep. Laat je gegevens achter en ik neem contact op zodra er een nieuwe groep van start gaat.
          </p>
          <Link href="/contact" className="inline-block bg-wit text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Zet me op de wachtlijst →
          </Link>
        </div>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
