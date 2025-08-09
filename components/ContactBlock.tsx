export default function ContactBlock() {
  return (
    <section id="kontakt" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-[#081c4c]">Kontakt</h2>
          <div className="mt-4 space-y-2 text-neutral-700">
            <p><strong>GRACJA Rogowo</strong></p>
            <p>72‑330 Rogowo, ul. Rogowo 46</p>
            <p>tel. <a href="tel:+48799042755">+48 799 042 755</a></p>
            <p><a href="mailto:info@gracjarogowo.pl">info@gracjarogowo.pl</a></p>
            <p><a href="https://facebook.com/GracjaRogowo" target="_blank" rel="noreferrer">Facebook.com/GracjaRogowo</a></p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <div className="aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.683801623893!2d15.329147676889193!3d54.15024977253344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47006dfe2b37c343%3A0x907e3320572f761a!2sGRACJA%20-%20Pokoje%20go%C5%9Bcinne%20i%20apartamenty%20przy%20pla%C5%BCy!5e0!3m2!1spl!2spl!4v1754753952433!5m2!1spl!2spl"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
