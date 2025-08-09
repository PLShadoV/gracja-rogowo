'use client';
import { useState } from "react";

export default function Page() {
  const [ok, setOk] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-[var(--brand)] text-center">Rezerwacja</h1>
      <p className="mt-2 text-center text-neutral-600">Wyślij zapytanie o dostępność</p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <form onSubmit={submit} className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input name="firstName" required placeholder="Imię" className="rounded-lg border px-3 py-2" />
            <input name="lastName" required placeholder="Nazwisko" className="rounded-lg border px-3 py-2" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input type="email" name="email" required placeholder="Email" className="rounded-lg border px-3 py-2" />
            <input name="phone" placeholder="Telefon" className="rounded-lg border px-3 py-2" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input type="date" name="from" required className="rounded-lg border px-3 py-2" />
            <input type="date" name="to" required className="rounded-lg border px-3 py-2" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input type="number" name="adults" min="1" defaultValue="2" className="rounded-lg border px-3 py-2" placeholder="Liczba dorosłych" />
            <input type="number" name="children" min="0" defaultValue="0" className="rounded-lg border px-3 py-2" placeholder="Liczba dzieci" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="dog" /> Przyjazd z psem (+15 zł/dobę)
          </label>
          <textarea name="message" placeholder="Dodatkowe informacje" className="w-full h-28 rounded-lg border px-3 py-2" />
          <button className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Wyślij zapytanie</button>
          {ok && <p className="text-sm text-green-700">Dziękujemy! Wersja testowa – w następnym kroku podłączymy wysyłkę e‑mail/Webhook.</p>}
        </form>

        <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">GRACJA Rogowo</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>Telefon: <a href="tel:+48799042755">+48 799 042 755</a></li>
            <li>Email: <a href="mailto:info@gracjarogowo.pl">info@gracjarogowo.pl</a></li>
            <li>Adres: Rogowo 46, 72-330 Rogowo</li>
          </ul>
          <p className="mt-6 text-sm text-neutral-600">Po wypełnieniu formularza skontaktujemy się z Tobą w ciągu 24h.</p>
        </aside>
      </div>
    </main>
  );
}
