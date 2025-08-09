
export const metadata = {
  title: "Cennik – GRACJA Rogowo | Noclegi nad morzem",
  description: "Aktualny cennik pokoi i apartamentów w GRACJI Rogowo. Sezon niski, średni i wysoki. Sprawdź ceny i zapytaj o dostępność."
};

type Row = { name: string; low: number; mid: number; high: number };

const rows: Row[] = [
  { name: "Pokój 2‑osobowy", low: 200, mid: 260, high: 320 },
  { name: "Pokój 3‑4‑osobowy", low: 240, mid: 300, high: 380 },
  { name: "Pokój 4‑os. dwupoziomowy", low: 260, mid: 340, high: 420 },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Cennik</h1>
      <p className="mt-2 text-center text-neutral-600">Ceny za dobę za cały pokój/apartament. Zapytaj o dostępność – odpowiemy tego samego dnia.</p>

      <div className="mt-8 overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-brand text-white">
            <tr>
              <th className="p-3 text-left">Typ pokoju</th>
              <th className="p-3 text-left">Sezon niski</th>
              <th className="p-3 text-left">Sezon średni</th>
              <th className="p-3 text-left">Sezon wysoki</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} className="odd:bg-white even:bg-neutral-50">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.low} zł</td>
                <td className="p-3">{r.mid} zł</td>
                <td className="p-3 font-semibold">{r.high} zł</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold text-brand">Sezon niski</h2>
          <p className="mt-2 text-neutral-700">Maj oraz październik. Spokojniejsza okolica i najlepsze ceny – idealne na wypad w tygodniu.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold text-brand">Sezon średni</h2>
          <p className="mt-2 text-neutral-700">Czerwiec i wrzesień. Ciepłe dni, mniej tłumów i szerokie plaże – świetny kompromis.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold text-brand">Sezon wysoki</h2>
          <p className="mt-2 text-neutral-700">Lipiec i sierpień. Pełnia lata i wszystkie atrakcje w regionie w pełnej krasie.</p>
        </div>
      </section>

      <ul className="mt-8 space-y-2 text-sm text-neutral-700">
        <li>• Doba hotelowa: 15:00 – 10:00</li>
        <li>• Opłata klimatyczna: zgodnie z uchwałą gminy (płatna na miejscu)</li>
        <li>• Media (prąd, woda, Wi‑Fi) w cenie</li>
        <li>• Dłuższe pobyty: możliwe rabaty – zapytaj w formularzu</li>
      </ul>

      <div className="mt-8 rounded-2xl border p-6">
        <h3 className="text-lg font-semibold text-brand">Zapytaj o termin</h3>
        <form action="mailto:info@gracjarogowo.pl" method="post" encType="text/plain" className="mt-4 grid gap-4 md:grid-cols-2">
          <input name="Imię i nazwisko" required placeholder="Imię i nazwisko" className="rounded-lg border px-3 py-2" />
          <input name="Email" type="email" required placeholder="Email" className="rounded-lg border px-3 py-2" />
          <input name="Od" type="date" required className="rounded-lg border px-3 py-2" />
          <input name="Do" type="date" required className="rounded-lg border px-3 py-2" />
          <input name="Liczba gości" placeholder="Liczba gości" className="rounded-lg border px-3 py-2" />
          <textarea name="Wiadomość" placeholder="Dodatkowe informacje" className="md:col-span-2 rounded-lg border px-3 py-2 h-28"></textarea>
          <button className="md:col-span-2 rounded-xl bg-brand px-5 py-3 text-white">Wyślij zapytanie</button>
        </form>
      </div>
    </main>
  );
}
