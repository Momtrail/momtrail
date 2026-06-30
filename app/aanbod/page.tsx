import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Aanbod' };

const aanbod = [
  {
    titel: 'Moeder & Kind',
    slug: 'moeder-en-kind',
    beschrijving: 'Voor moeders die merken dat ze aan het overleven zijn én voor kinderen die vastlopen. We kijken verder dan de klacht, naar wat er écht speelt in het lijf en in het zenuwstelsel.',
    foto: '/fotos/IMG_6045 2.jpg',
    fotoPositie: '50% 20%',
  },
  {
    titel: 'Ambulante begeleiding (100% vergoed)',
    slug: 'ambulante-begeleiding',
    beschrijving: 'Loop je vast in het dagelijks leven? Met ambulante begeleiding ondersteun ik je thuis of in je eigen omgeving. Volledig gefinancierd via PGB (Wmo), voor inwoners van de regio Maas en Waal en de Betuwe.',
    foto: '/fotos/IMG_5862 2.jpg',
    fotoPositie: '70% 15%',
  },
  {
    titel: 'Zwanger & Baby',
    slug: 'zwanger-en-kind',
    beschrijving: 'Of je nu zwanger bent, net bevallen of een pittige start hebt gehad: dit aanbod begeleidt je lichamelijk en emotioneel. Van bewust zwanger zijn tot de eerste weken met je baby.',
    foto: '/fotos/IMG_2748 2.jpg',
    fotoPositie: '50% 10%',
  },
  {
    titel: 'Kinderwens',
    slug: 'kinderwens',
    beschrijving: 'Jullie verlangen naar een kindje, maar het lukt maar niet. In samenwerking met Health & Happiness begeleiden we je op alle lagen: van hormonen en voeding tot zenuwstelsel en onverwerkte emoties.',
    foto: '/fotos/IMG_5836 2.jpg',
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
