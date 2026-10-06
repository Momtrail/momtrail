'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyKennismaking() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

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
