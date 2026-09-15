import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Aanbod' };

const aanbod = [
  {
    titel: 'Moeder',
    slug: 'moeder',
    beschrijving: 'Voor de moeder die merkt dat ze aan het overleven is en weer wil voelen hoe het is om energie te hebben, grenzen te stellen en echt aanwezig te zijn.',
    foto: '/fotos/IMG_6045 2.jpg',
    fotoPositie: '50% 20%',
  },
  {
    titel: 'Kind',
    slug: 'kind',
    beschrijving: 'Voor kinderen die vastlopen, overprikkeld zijn of gewoon steviger in hun schoenen mogen staan. We kijken verder dan het gedrag, naar wat er écht speelt.',
    foto: '/fotos/IMG_5904 2.jpg',
    fotoPositie: '50% 20%',
  },
  {
    titel: 'PGB / Ambulant',
    slug: 'ambulante-begeleiding',
    beschrijving: 'Loop je vast in het dagelijks leven? Met ambulante begeleiding ondersteun ik je thuis of in je eigen omgeving. Volledig gefinancierd via PGB (Wmo), voor inwoners van de regio Maas en Waal en de Betuwe.',
    foto: '/fotos/IMG_5862 2.jpg',
    fotoPositie: '70% 15%',
  },
  {
    titel: 'Zwanger & Kinderwens',
    slug: 'zwanger-en-kinderwens',
    beschrijving: 'Of je nu zwanger bent, net bevallen bent of al een tijdje probeert zwanger te worden: dit aanbod begeleidt je lichamelijk en emotioneel in één van de meest ingrijpende periodes van je leven.',
    foto: '/fotos/IMG_2748 2.jpg',
    fotoPositie: '50% 10%',
  },
];

export default function AanbodPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-4">Mijn aanbod</h1>
      <p className="text-tekst/80 mb-12 leading-relaxed max-w-2xl">
        Elke mama en elk kind verdient begeleiding die écht aansluit. In mijn praktijk werk ik niet met één aanpak, maar kijk ik naar wat jij of jouw kind op dit moment nodig heeft. Of je nu worstelt met het moederschap, een kinderwens hebt, zwanger bent of begeleiding zoekt voor je kind. Hieronder vind je wat ik kan bieden.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {aanbod.map(item => (
          <div key={item.slug} className="bg-wit rounded-2xl shadow-sm border border-primair/10 flex flex-col overflow-hidden">
            <img src={item.foto} alt={item.titel} className="w-full h-36 object-cover" style={{ objectPosition: item.fotoPositie }} />
            <div className="p-8 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-primair mb-2">{item.titel}</h2>
              <p className="text-tekst/70 leading-relaxed mb-4 flex-1">{item.beschrijving}</p>
              <Link href={`/aanbod/${item.slug}`} className="font-bold text-accent hover:underline">
                Meer info →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
