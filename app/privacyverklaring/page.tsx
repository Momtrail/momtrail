import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacyverklaring',
};

export default function PrivacyverklaringPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-2">Privacyverklaring</h1>
      <p className="text-tekst/60 text-sm mb-12">Momtrail · Versie oktober 2026</p>

      <div className="space-y-10 text-tekst/80 leading-relaxed">

        <article>
          <p className="mb-4">
            Momtrail, gevestigd aan Korenbloemstraat 75, 6657 BB Boven Leeuwen, is verantwoordelijk voor
            de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
          </p>
          <p className="mb-4">
            Deze privacyverklaring is van toepassing op de dienstverlening van Momtrail. Dit betreft zowel
            de ambulante begeleiding (PGB/Wmo) als de coaching. Ik vind het belangrijk dat zorgvuldig wordt
            omgegaan met jouw gegevens en leg hieronder uit welke gegevens ik verzamel, waarom ik dat doe
            en hoe ik hiermee omga.
          </p>
          <p>
            <strong>Contactgegevens:</strong><br />
            Momtrail · Marleen Thomassen<br />
            Korenbloemstraat 75, 6657 BB Boven Leeuwen<br />
            <a href="mailto:info@momtrail.nl" className="text-primair hover:underline">info@momtrail.nl</a><br />
            <a href="tel:0649826360" className="text-primair hover:underline">06 49 82 63 60</a><br />
            KVK: 89134990
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Welke persoonsgegevens ik verwerk</h2>
          <p className="mb-3">
            Ik verwerk persoonsgegevens omdat je gebruikmaakt van mijn diensten of omdat je deze gegevens
            zelf aan mij verstrekt. Afhankelijk van de soort begeleiding of coaching kan het gaan om:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Voor- en achternaam</li>
            <li>Adresgegevens</li>
            <li>Telefoonnummer en e-mailadres</li>
            <li>Geboortedatum en BSN (indien nodig voor PGB/Wmo-administratie)</li>
            <li>Gegevens over gezondheid of situatie, relevant voor begeleiding of coaching</li>
            <li>Verslaglegging en rapportages over de geboden zorg/begeleiding</li>
          </ul>
          <p className="mt-4">
            Voor cliënten die ambulante begeleiding via een PGB ontvangen, werk ik met een beveiligd
            Elektronisch Cliënten Dossier (ECD) genaamd Zorgrapportage. Dit systeem is beveiligd
            conform de geldende privacy- en beveiligingsnormen. Alleen bevoegde personen hebben toegang.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Doelen en grondslagen</h2>
          <p className="mb-2">Ik verwerk persoonsgegevens voor de volgende doelen:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li>Om contact op te nemen als dat nodig is voor de dienstverlening</li>
            <li>Voor het uitvoeren van begeleiding of coaching</li>
            <li>Voor het bijhouden van rapportages en voortgang (bij PGB-cliënten via het beveiligde ECD)</li>
            <li>Voor het afhandelen van betalingen en facturatie</li>
            <li>Voor het voldoen aan wettelijke verplichtingen (Belastingdienst, PGB/Wmo-rapportages)</li>
          </ul>
          <p className="mb-2">De grondslagen hiervoor zijn:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Het uitvoeren van een overeenkomst (begeleiding en coaching)</li>
            <li>Het voldoen aan een wettelijke verplichting (belastingwetgeving, Wmo-verantwoording)</li>
            <li>Gerechtvaardigd belang (verbetering van de dienstverlening)</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Hoe lang ik persoonsgegevens bewaar</h2>
          <p className="mb-2">
            Ik bewaar persoonsgegevens niet langer dan nodig voor de doelen waarvoor ze zijn verzameld:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong>Administratieve gegevens (facturen):</strong> zolang nodig voor de uitvoering van
              de dienstverlening en wettelijke verplichtingen (Belastingdienst: 7 jaar).
            </li>
            <li>
              <strong>Cliëntdossiers (PGB/zorg):</strong> conform geldende wettelijke richtlijnen;
              verwijderd zodra de bewaarplicht is verstreken.
            </li>
            <li>
              <strong>Gegevens van coachingstrajecten:</strong> verwijderd zodra ze niet meer nodig zijn.
            </li>
            <li>
              <strong>Website-/contactgegevens:</strong> verwijderd na afronding van het contactmoment
              of traject.
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Delen van persoonsgegevens met derden</h2>
          <p className="mb-3">
            Ik deel persoonsgegevens alleen met derden wanneer dat nodig is voor de uitvoering van mijn
            dienstverlening of om te voldoen aan wettelijke verplichtingen. Dit kan zijn:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li>Gemeente: voor PGB-administratie of rapportages conform de Wmo</li>
            <li>Boekhouder of accountant: voor financiële administratie en belastingaangifte</li>
            <li>Beveiligde systemen (ECD/Zorgrapportage): voor veilige opslag van cliëntdossiers</li>
          </ul>
          <p className="mb-3">
            Jouw gegevens worden niet voor commerciële doeleinden gedeeld of verkocht. Alle derden waarmee
            gegevens worden gedeeld zijn verplicht tot vertrouwelijkheid en beveiliging.
          </p>
          <p>
            Met partijen die in opdracht van Momtrail persoonsgegevens verwerken (zoals de boekhouder en
            het ECD-systeem) is een <strong>verwerkersovereenkomst</strong> afgesloten, conform artikel 28
            van de AVG.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Rechten</h2>
          <p className="mb-2">Als cliënt heb je de volgende rechten:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Inzage</strong> — je kunt altijd vragen welke gegevens ik van je verwerk.</li>
            <li><strong>Correctie</strong> — als gegevens onjuist zijn, kun je vragen ze aan te passen.</li>
            <li><strong>Verwijdering</strong> — voor zover niet in strijd met wettelijke bewaarplichten.</li>
            <li><strong>Beperking van verwerking</strong> — tijdelijk beperken van de verwerking.</li>
            <li><strong>Overdracht</strong> — jouw gegevens digitaal ontvangen of overdragen aan een andere organisatie.</li>
            <li><strong>Bezwaar</strong> — bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
          </ul>
          <p className="mt-4">
            Voor het uitoefenen van je rechten of bij vragen kun je contact opnemen via{' '}
            <a href="mailto:info@momtrail.nl" className="text-primair hover:underline">info@momtrail.nl</a>{' '}
            of <a href="tel:0649826360" className="text-primair hover:underline">06 49 82 63 60</a>.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Klachten</h2>
          <p className="mb-3">
            Bij vragen of klachten over de verwerking van jouw persoonsgegevens kun je dit altijd eerst
            met mij bespreken. Mocht dit niet tot een oplossing leiden, dan kun je terecht bij:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li>De klachtenprocedure via het <strong>Collectief Alternatieve Therapeuten</strong></li>
            <li>De erkende geschillencommissie (Wkkgz) via <strong>BATC</strong></li>
            <li>
              De <strong>Autoriteit Persoonsgegevens</strong> via{' '}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primair hover:underline"
              >
                autoriteitpersoonsgegevens.nl
              </a>
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">Google Analytics</h2>
          <p className="mb-3">
            Deze website kan gebruik maken van Google Analytics, een webanalysedienst van Google Ireland
            Limited (&ldquo;Google&rdquo;). Google Analytics maakt gebruik van cookies om het gebruik van de
            website te analyseren. De gegenereerde informatie wordt overgedragen aan en opgeslagen op servers
            van Google.
          </p>
          <p className="mb-3">
            IP-adressen worden geanonimiseerd voordat ze worden opgeslagen. De door Analytics verzamelde
            gegevens worden niet gecombineerd met andere gegevens van Google.
          </p>
          <p className="mb-3">
            Je kunt de verzameling door Google Analytics voorkomen door de{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primair hover:underline"
            >
              browser-plugin van Google
            </a>{' '}
            te installeren.
          </p>
          <p>
            Meer informatie over cookies vind je in het{' '}
            <a href="/cookiebeleid" className="text-primair hover:underline">cookiebeleid</a>.
          </p>
        </article>

      </div>
    </section>
  );
}
