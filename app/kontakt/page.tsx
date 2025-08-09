
export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Kontakt</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">Dane kontaktowe</h2>
          <ul className="mt-4 text-sm text-neutral-700 space-y-2">
            <li>Telefon: <a href="tel:+48799042755">+48 799 042 755</a></li>
            <li>Email: <a href="mailto:info@gracjarogowo.pl">info@gracjarogowo.pl</a></li>
            <li>Adres: Rogowo 46, 72-330 Rogowo</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.683801623893!2d15.329147676889193!3d54.15024977253344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47006dfe2b37c343%3A0x907e3320572f761a!2sGRACJA%20-%20Pokoje%20go%C5%9Bcinne%20i%20apartamenty%20przy%20pla%C5%BCy!5e0!3m2!1spl!2spl!4v1754753952433!5m2!1spl!2spl"
            width="100%" height="400" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen>
          </iframe>
        </div>
      </div>
    </main>
  );
}
