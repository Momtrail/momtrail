import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiebeleid',
};

export default function CookiebeleidPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-2">Cookiebeleid</h1>
      <p className="text-tekst/60 text-sm mb-12">Momtrail · Versie oktober 2026</p>

      <div className="space-y-10 text-tekst/80 leading-relaxed">

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die bij een bezoek aan een website worden opgeslagen op jouw
            apparaat. Ze worden gebruikt om de website goed te laten werken, gebruik bij te houden of
            advertenties te personaliseren.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Welke cookies gebruikt deze website?</h2>

          <div className="mt-4 space-y-6">

            <div className="border border-primair/10 rounded-xl p-5">
              <p className="font-semibold text-primair mb-1">Functionele cookies</p>
              <p className="text-sm mb-2 text-tekst/60">Altijd actief · geen toestemming vereist</p>
              <p>
                Functionele cookies zorgen ervoor dat de website naar behoren werkt. Denk aan het onthouden
                van voorkeuren of het goed laten werken van formulieren. Deze cookies zijn strikt noodzakelijk
                en kunnen niet worden uitgeschakeld.
              </p>
            </div>

            <div className="border border-primair/10 rounded-xl p-5">
              <p className="font-semibold text-primair mb-1">Analytische cookies</p>
              <p className="text-sm mb-2 text-tekst/60">Optioneel · alleen met toestemming</p>
              <p className="mb-3">
                Deze website kan gebruik maken van Google Analytics om inzicht te krijgen in het gebruik van
                de website — zoals welke pagina&apos;s worden bezocht en hoe lang bezoekers blijven. Dit helpt om
                de website te verbeteren.
              </p>
              <p className="mb-3">
                Google Analytics slaat gegevens op via cookies. IP-adressen worden geanonimiseerd en worden
                niet gecombineerd met andere gegevens. De analytische gegevens worden na maximaal 50 maanden
                automatisch verwijderd.
              </p>
              <p>
                Wil je voorkomen dat Google Analytics gegevens verzamelt? Installeer dan de{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primair hover:underline"
                >
                  opt-out browser-plugin van Google
                </a>.
              </p>
            </div>

            <div className="border border-primair/10 rounded-xl p-5">
              <p className="font-semibold text-primair mb-1">Marketing- en trackingcookies</p>
              <p className="text-sm mb-2 text-tekst/60">Niet van toepassing</p>
              <p>
                Deze website gebruikt geen cookies voor advertenties of commercieel profileren van bezoekers.
              </p>
            </div>

          </div>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Cookies van derden</h2>
          <p className="mb-3">
            Op sommige pagina&apos;s zijn externe diensten ingebed, zoals Calendly voor het inplannen van afspraken.
            Deze diensten kunnen eigen cookies plaatsen. Raadpleeg het privacybeleid van de betreffende
            dienst voor meer informatie:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primair hover:underline"
              >
                Privacybeleid Calendly
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primair hover:underline"
              >
                Privacybeleid Google
              </a>
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Cookies beheren of verwijderen</h2>
          <p className="mb-3">
            Je kunt cookies beheren via de instellingen van je browser. Je kunt cookies uitschakelen of
            verwijderen. Houd er rekening mee dat het uitschakelen van functionele cookies de werking van
            de website kan beïnvloeden.
          </p>
          <p>
            Meer informatie over cookies en hoe je ze kunt beheren vind je op{' '}
            <a
              href="https://www.consuwijzer.nl/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primair hover:underline"
            >
              consuwijzer.nl
            </a>.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Vragen</h2>
          <p>
            Heb je vragen over het cookiebeleid? Neem dan contact op via{' '}
            <a href="mailto:info@momtrail.nl" className="text-primair hover:underline">
              info@momtrail.nl
            </a>.
            Meer informatie over jouw privacyrechten vind je in de{' '}
            <a href="/privacyverklaring" className="text-primair hover:underline">privacyverklaring</a>.
          </p>
        </article>

      </div>
    </section>
  );
}
