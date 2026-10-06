'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Vervang dit door jouw eigen Google Analytics Measurement ID (G-XXXXXXXXXX)
// zodra je een GA-property hebt aangemaakt op analytics.google.com.
// Laat het op null staan als je GA nog niet wilt activeren.
const GA_ID = 'G-GH8YRJ552L';

type Consent = 'accepted' | 'declined';

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent') as Consent | null;
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setConsent('declined');
    setVisible(false);
  }

  return (
    <>
      {/* Google Analytics — laadt alleen wanneer bezoeker toestemming heeft gegeven én GA_ID is ingevuld */}
      {consent === 'accepted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {/* Cookie banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
          <div className="max-w-3xl mx-auto bg-wit border border-primair/10 rounded-2xl shadow-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-tekst/80 text-sm leading-relaxed flex-1">
              Deze website gebruikt cookies om het gebruik bij te houden via Google Analytics.{' '}
              <a href="/cookiebeleid" className="text-primair underline hover:opacity-80">
                Meer informatie
              </a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-sm text-tekst/60 hover:text-tekst transition-colors px-4 py-2 rounded-full border border-tekst/20 hover:border-tekst/40"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={accept}
                className="text-sm bg-primair text-wit font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Accepteren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
