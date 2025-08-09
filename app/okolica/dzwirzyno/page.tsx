export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--brand)]">Dźwirzyno – między morzem a jeziorem</h1>
          <p className="mt-3 text-neutral-700">Dźwirzyno leży malowniczo pomiędzy Bałtykiem a jeziorem Resko. To idealne miejsce dla aktywnych i szukających spokoju.</p>
        </div>
        <img src="/gallery/outside-1.jpg" alt="" className="w-full rounded-2xl object-cover shadow-sm border border-neutral-200" />
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">12 km</div><div className="text-sm text-neutral-600">od GRACJI</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">15 min</div><div className="text-sm text-neutral-600">czas dojazdu</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">Kurort nadmorski</div><div className="text-sm text-neutral-600">typ miejscowości</div></div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Atrakcje</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Jezioro Resko Przymorskie</h3><p className="mt-2 text-sm text-neutral-700">Idealne do sportów wodnych i wędkowania.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Plaża morska</h3><p className="mt-2 text-sm text-neutral-700">Szeroka, czysta plaża otoczona wydmami.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Wypożyczalnie</h3><p className="mt-2 text-sm text-neutral-700">Kajaki, rowery wodne, SUP.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Ścieżki spacerowe</h3><p className="mt-2 text-sm text-neutral-700">Trasy wokół jeziora i lasów.</p></div>
        </div>
        <div className="mt-8">
          <a href="/rezerwacja" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Zarezerwuj pobyt</a>
          <a href="/okolica" className="ml-3 rounded-xl border px-5 py-3">Wróć do okolicy</a>
        </div>
      </section>
    </main>
  );
}
