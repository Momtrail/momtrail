'use client';
import { useState } from 'react';
import Link from 'next/link';

// ← Vul hier jouw Kennis Shop URL in (bijv. 'https://jouwbedrijf.kennis.shop')
// Laat leeg ('') als je nog geen Kennis Shop hebt of geen link wilt tonen.
const KENNIS_SHOP_URL = '';

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/aanbod',   label: 'Aanbod'   },
  { href: '/contact',  label: 'Contact'  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primair border-b border-primair/10 relative">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / naam */}
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/Sublogo-Momtrail-diapositief-transparant.png" alt="Momtrail" className="h-12 w-auto" />
        </Link>

        {/* Navigatie — desktop */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="text-wit/80 hover:text-wit transition-colors">
              {link.label}
            </Link>
          ))}
          {KENNIS_SHOP_URL && (
            <a href={KENNIS_SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-wit text-primair px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Mijn cursussen
            </a>
          )}
        </nav>

        {/* Hamburger — mobiel */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}>
          <span className={`block w-6 h-0.5 bg-wit transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-wit transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-wit transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Navigatie — mobiel dropdown */}
      {open && (
        <nav className="md:hidden border-t border-wit/20 bg-primair px-6 py-5 flex flex-col gap-5 text-base font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="text-wit/80 hover:text-wit transition-colors"
              onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          {KENNIS_SHOP_URL && (
            <a href={KENNIS_SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-primair text-wit px-4 py-3 rounded-full hover:opacity-90 transition-opacity text-center"
              onClick={() => setOpen(false)}>
              Mijn cursussen
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
