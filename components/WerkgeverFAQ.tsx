export default function WerkgeverFAQ() {
  const faqs = [
    {
      vraag: 'Wordt dit vergoed door mijn werkgever?',
      antwoord: (
        <>
          <p>Veel werkgevers hebben een budget voor persoonlijke ontwikkeling, coaching of preventie van burn-out — ook als je daar zelf nooit naar gevraagd hebt. Dit heet een <strong>vitaliteitsbudget</strong>, <strong>PO-budget</strong> (persoonlijke ontwikkeling) of <strong>ARBO-budget</strong>.</p>
          <p className="mt-3">Wat je kunt doen: vraag het gewoon na bij HR of je leidinggevende. Zeg dat je werkt aan stressreductie, veerkracht en burn-outpreventie. Dat zijn precies de termen die werkgevers herkennen.</p>
          <p className="mt-3">Als jouw werkgever het vergoedt, stuur ik een factuur op naam van de werkgever.</p>
        </>
      ),
    },
    {
      vraag: 'Wat zeg ik tegen mijn werkgever?',
      antwoord: (
        <>
          <p>Je hoeft niet alles te vertellen. Je kunt het simpel houden:</p>
          <p className="mt-3 italic text-tekst/70">&ldquo;Ik wil investeren in mijn vitaliteit en veerkracht. Ik heb een coach gevonden die werkt met lichaamsgerichte begeleiding, gericht op stressreductie en burn-outpreventie. Heb ik hier budget voor?&rdquo;</p>
          <p className="mt-3">Dat is genoeg. Heb je twijfels over hoe je dit aanpakt, laat het me weten — ik denk graag met je mee.</p>
        </>
      ),
    },
    {
      vraag: 'Wat als mijn werkgever het niet vergoedt?',
      antwoord: (
        <p>Dan kun je betalen in termijnen — dat is bij elk traject mogelijk. Zie je dat als obstakel? Neem contact op en we kijken samen wat haalbaar is.</p>
      ),
    },
  ];

  return (
    <section className="py-16 px-6 bg-achtergrond">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block bg-primair/10 text-primair text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Voor werkende moeders
          </span>
          <h2 className="text-2xl font-bold text-primair mb-2">Kan je werkgever dit vergoeden?</h2>
          <p className="text-tekst/60 text-sm">Vaker dan je denkt: ja.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.vraag}
              className="group bg-wit border border-primair/15 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-tekst hover:text-primair transition-colors">
                {faq.vraag}
                <span className="text-primair text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-tekst/75 leading-relaxed text-sm border-t border-primair/10 pt-5">
                {faq.antwoord}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
