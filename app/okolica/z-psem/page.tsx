export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--brand)]">Noclegi z psem</h1>
          <p className="mt-3 text-neutral-700">GRACJA to dobre miejsce dla podróżujących z czworonogami – ogrodzony teren zielony i bliskość plaży.</p>
        </div>
        <img src="/gallery/outside-1.jpg" alt="" className="w-full rounded-2xl object-cover shadow-sm border border-neutral-200" />
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">Ogrodzony teren</div><div className="text-sm text-neutral-600">bezpieczne spacery</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">Plaże przyjazne psom</div><div className="text-sm text-neutral-600">w okolicy</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">Brak dopłat</div><div className="text-sm text-neutral-600">za psa (jeśli tak ustalisz)</div></div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Atrakcje</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Plaża dla psów Mrzeżyno</h3><p className="mt-2 text-sm text-neutral-700">Wyznaczony odcinek plaży, gdzie psy mogą biegać.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Plaża Dźwirzyno – sektor północny</h3><p className="mt-2 text-sm text-neutral-700">Spokojny odcinek przyjazny dla psów.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Plaża Kołobrzeg – wschodnia</h3><p className="mt-2 text-sm text-neutral-700">Długa przestrzeń do kąpieli dla psów.</p></div>
        </div>
        <div className="mt-8">
          <a href="/rezerwacja" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Zarezerwuj pobyt</a>
          <a href="/okolica" className="ml-3 rounded-xl border px-5 py-3">Wróć do okolicy</a>
        </div>
      </section>
    </main>
  );
}
