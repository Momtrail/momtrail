import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-2">Algemene voorwaarden</h1>
      <p className="text-tekst/60 text-sm mb-12">Momtrail · Versie oktober 2026</p>

      <div className="space-y-10 text-tekst/80 leading-relaxed">

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">1. Algemeen</h2>
          <p className="mb-3">
            Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden door:
          </p>
          <p>
            Momtrail · Marleen Thomassen<br />
            Korenbloemstraat 75, 6657 BB Boven Leeuwen<br />
            KVK: 89134990
          </p>
          <p className="mt-3">
            Door het maken van een afspraak gaat de cliënt akkoord met deze voorwaarden.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">2. Aard van de dienstverlening</h2>
          <p className="mb-3">
            De begeleiding binnen de praktijk is gericht op psychosociale ondersteuning, regulatie en bewustwording.
          </p>
          <p className="mb-2">De begeleiding:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>is geen vervanging voor medische of psychiatrische behandeling</li>
            <li>stelt geen medische diagnoses</li>
            <li>schrijft geen medicatie voor</li>
          </ul>
          <p className="mt-3">
            Bij twijfel over lichamelijke of psychische klachten wordt cliënt geadviseerd contact op te nemen met een huisarts of specialist.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">3. Intake en begeleiding</h2>
          <p className="mb-3">Voorafgaand aan een traject vindt een intake plaats.</p>
          <p className="mb-3">
            De begeleiding wordt afgestemd op de hulpvraag van de cliënt. De cliënt blijft te allen tijde
            zelf verantwoordelijk voor zijn of haar proces en keuzes.
          </p>
          <p>
            Bij begeleiding van minderjarigen is toestemming van beide ouders of wettelijke vertegenwoordigers
            vereist, tenzij anders wettelijk bepaald.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">4. Afspraken en annulering</h2>
          <p className="mb-3">
            Afspraken kunnen kosteloos worden geannuleerd of verplaatst tot <strong>24 uur</strong> voorafgaand aan de afspraak.
          </p>
          <p className="mb-3">
            Bij annulering binnen 24 uur of bij niet verschijnen wordt het volledige tarief in rekening gebracht.
          </p>
          <p>Annuleren kan via e-mail of telefonisch.</p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">5. Tarieven en betaling</h2>
          <p className="mb-3">De actuele tarieven staan vermeld op de website.</p>
          <p className="mb-3">
            Facturen dienen binnen <strong>14 dagen</strong> na factuurdatum te worden voldaan, tenzij anders overeengekomen.
          </p>
          <p>Bij uitblijven van betaling kan wettelijke rente in rekening worden gebracht.</p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">6. Vertrouwelijkheid</h2>
          <p className="mb-3">
            Alle informatie die tijdens begeleiding wordt gedeeld, wordt vertrouwelijk behandeld.
          </p>
          <p className="mb-2">Informatie wordt uitsluitend gedeeld met derden:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>met schriftelijke toestemming van cliënt</li>
            <li>indien er sprake is van een wettelijke verplichting</li>
            <li>bij ernstig gevaar voor cliënt of anderen</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">7. Aansprakelijkheid</h2>
          <p className="mb-3">
            De praktijk is niet aansprakelijk voor schade die voortvloeit uit beslissingen of handelingen van cliënt.
          </p>
          <p>
            De aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door de
            aansprakelijkheidsverzekering wordt uitgekeerd.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">8. Beroepsvereniging en klachtenregeling</h2>
          <p className="mb-3">
            Momtrail is aangesloten bij het <strong>Collectief Alternatieve Therapeuten</strong>.
            De therapeut valt onder het tuchtrecht en de klachtenregeling van deze beroepsorganisatie.
          </p>
          <p className="mb-3">
            Indien cliënt een klacht heeft, wordt deze in eerste instantie besproken met de therapeut.
            Wanneer dit niet leidt tot een passende oplossing, kan cliënt gebruikmaken van de onafhankelijke
            klachtenprocedure via de beroepsorganisatie.
          </p>
          <p>
            De praktijk is tevens aangesloten bij een erkende geschillencommissie conform de
            Wet kwaliteit, klachten en geschillen zorg (<strong>Wkkgz</strong>), via BATC.
            De geschilleninstantie doet een bindende uitspraak.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">9. Toepasselijk recht</h2>
          <p className="mb-3">Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          <p>
            Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement
            waar de praktijk is gevestigd.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-bold text-primair mb-3">10. Wijzigingen</h2>
          <p>
            De praktijk behoudt zich het recht voor deze algemene voorwaarden te wijzigen.
            De meest actuele versie is beschikbaar op de website.
          </p>
        </article>

      </div>
    </section>
  );
}
