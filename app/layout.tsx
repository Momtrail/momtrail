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
  description: 'Momtrail begeleidt moeders en kinderen met lichaamsgerichte therapie. Voor meer rust, verbinding en plezier in het moederschap.',
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
