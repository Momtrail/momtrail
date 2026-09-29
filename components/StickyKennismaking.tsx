import Link from 'next/link';

export default function StickyKennismaking() {
  return (
    <div className="fixed bottom-6 right-5 z-40">
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-primair text-achtergrond font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      >
        Plan een kennismaking →
      </Link>
    </div>
  );
}
