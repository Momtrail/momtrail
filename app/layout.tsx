import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyKennismaking from '@/components/StickyKennismaking';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Momtrail · Begeleiding voor moeders en kinderen',
    template: '%s · Momtrail',
  },
  description: 'Momtrail biedt lichaamsgerichte begeleiding voor moeders en kinderen, in de regio Maas en Waal en online. Voor meer rust, verbinding en plezier in het moederschap.',
  metadataBase: new URL('https://www.momtrail.nl'),
  openGraph: {
    siteName: 'Momtrail',
    locale: 'nl_NL',
    type: 'website',
    images: [{ url: '/fotos/portret.jpg', width: 1200, height: 630, alt: 'Marleen van Momtrail' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/fotos/portret.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyKennismaking />
        <CookieBanner />
      </body>
    </html>
  );
}
