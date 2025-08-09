import { seasons, notes } from '@/data/pricing';

export default function PricingTable() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#081c4c]">Cennik</h2>
          <p className="mt-2 text-neutral-600">GRACJA – Pokoje gościnne i apartamenty przy plaży</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {seasons.map((s) => (
            <div key={s.key} className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#081c4c] px-5 py-4 text-white">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="opacity-80">{s.range}</p>
              </div>
              <ul className="divide-y divide-neutral-100 px-5">
                <li className="py-4 flex items-baseline justify-between">
                  <span>Pokój 2‑osobowy</span>
                  <strong className="text-lg">{s.prices.double} PLN</strong>
                </li>
                <li className="py-4 flex items-baseline justify-between">
                  <span>Pokój 3–4‑osobowy</span>
                  <strong className="text-lg">{s.prices.tripleQuad} PLN</strong>
                </li>
                <li className="py-6 text-center">
                  <div className="text-sm text-neutral-500 mb-1">Pokój 4‑osobowy — dwupoziomowy</div>
                  <div className="text-2xl font-semibold">{s.prices.duplexQuad} PLN</div>
                </li>
              </ul>
              <div className="px-5 pb-5">
                <a
                  href="#kontakt"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#081c4c] px-4 py-3 text-white transition hover:opacity-90"
                >
                  Zapytaj o termin
                </a>
              </div>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-8 max-w-3xl space-y-2 text-sm text-neutral-600">
          {notes.map((n, i) => (
            <li key={i}>• {n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
