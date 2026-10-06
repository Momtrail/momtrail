export default function Footer() {
  return (
    <footer id="site-footer" className="bg-primair text-wit/80 text-sm py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Momtrail · Alle rechten voorbehouden</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/contact" className="hover:text-wit transition-colors">Contact</a>
          <a href="/algemene-voorwaarden" className="hover:text-wit transition-colors">Algemene voorwaarden</a>
          <a href="/privacyverklaring" className="hover:text-wit transition-colors">Privacyverklaring</a>
          <a href="/cookiebeleid" className="hover:text-wit transition-colors">Cookiebeleid</a>
        </div>
      </div>
    </footer>
  );
}
