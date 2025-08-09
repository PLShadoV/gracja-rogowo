
export default function Footer() {
  return (
    <footer className="mt-16 bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div><div className="font-semibold">GRACJA Rogowo</div>
          <p className="mt-3 text-sm opacity-80">Pokoje i apartamenty przy plaży – Rogowo.</p></div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-3 text-sm opacity-90 space-y-1">
            <li>+48 799 042 755</li>
            <li>info@gracjarogowo.pl</li>
            <li>Rogowo 46, 72-330 Rogowo</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Okolica</div>
          <ul className="mt-3 text-sm opacity-90 space-y-1">
            <li><a href="/okolica/mrzezyno">Mrzeżyno</a></li>
            <li><a href="/okolica/dzwirzyno">Dźwirzyno</a></li>
            <li><a href="/okolica/kolobrzeg">Kołobrzeg</a></li>
            <li><a href="/okolica/z-psem">Z psem nad morze</a></li>
            <li><a href="/okolica/sciezki-rowerowe">Ścieżki rowerowe</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Social</div>
          <a href="https://facebook.com/GracjaRogowo" target="_blank" className="underline">Facebook</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs opacity-70">© {new Date().getFullYear()} GRACJA Rogowo</div>
      </div>
    </footer>
  );
}
