export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#0b1a3f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <img src="/logo_gracja.svg" alt="GRACJA" className="h-8 opacity-95" />
          <p className="mt-4 text-sm opacity-85">
            Domki i pokoje nad morzem w Rogowie. Idealne miejsce na wypoczynek z rodziną.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Szybkie linki</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><a href="/">Strona główna</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/cennik">Cennik</a></li>
            <li><a href="/rezerwacja">Rezerwacja</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Okolica</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><a href="/okolica/mrzezyno">Mrzeżyno</a></li>
            <li><a href="/okolica/dzwirzyno">Dźwirzyno</a></li>
            <li><a href="/okolica/kolobrzeg">Kołobrzeg</a></li>
            <li><a href="/okolica/z-psem">Z psem nad morze</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Kontakt</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>+48 799 042 755</li>
            <li>info@gracjarogowo.pl</li>
            <li>Rogowo 46, 72-330 Rogowo</li>
            <li><a href="https://facebook.com/GracjaRogowo" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs opacity-70">
          © {new Date().getFullYear()} GRACJA Rogowo. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
