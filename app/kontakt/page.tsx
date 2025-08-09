'use client';
import { useState } from "react";

export default function Page() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-[var(--brand)] text-center">Kontakt</h1>
      <p className="mt-2 text-center text-neutral-600">Masz pytania? Napisz do nas.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Informacje kontaktowe</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>Telefon: <a href="tel:+48799042755">+48 799 042 755</a></li>
            <li>Email: <a href="mailto:info@gracjarogowo.pl">info@gracjarogowo.pl</a></li>
            <li>Adres: Rogowo 46, 72-330 Rogowo</li>
          </ul>
          <div className="mt-6 overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.683801623893!2d15.329147676889193!3d54.15024977253344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47006dfe2b37c343%3A0x907e3320572f761a!2sGRACJA%20-%20Pokoje%20go%C5%9Bcinne%20i%20apartamenty%20przy%20pla%C5%BCy!5e0!3m2!1spl!2spl!4v1754753952433!5m2!1spl!2spl"
              width="100%" height="280" style={{ border: 0 }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required name="firstName" placeholder="Imię" className="rounded-lg border px-3 py-2" />
            <input required name="lastName" placeholder="Nazwisko" className="rounded-lg border px-3 py-2" />
          </div>
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg border px-3 py-2" />
          <input name="phone" placeholder="Telefon" className="w-full rounded-lg border px-3 py-2" />
          <textarea name="message" placeholder="Wiadomość" className="w-full h-32 rounded-lg border px-3 py-2" />
          <button className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Wyślij</button>
          {sent && <p className="text-sm text-green-700">Dziękujemy! Formularz testowy – w kolejnym kroku podepniemy wysyłkę.</p>}
        </form>
      </div>
    </main>
  );
}
