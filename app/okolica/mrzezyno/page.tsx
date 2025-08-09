export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--brand)]">Mrzeżyno – port rybacki i klimatyczne plaże</h1>
          <p className="mt-3 text-neutral-700">Mrzeżyno to nadmorska miejscowość z wyjątkowym klimatem i uroczym portem. Idealna na spacery i świeże ryby prosto z kutrów.</p>
        </div>
        <img src="/gallery/outside-1.jpg" alt="" className="w-full rounded-2xl object-cover shadow-sm border border-neutral-200" />
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">8 km</div><div className="text-sm text-neutral-600">od GRACJI</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">10 min</div><div className="text-sm text-neutral-600">czas dojazdu</div></div><div className="rounded-xl border p-4"><div className="text-2xl font-semibold text-[var(--brand)]">Wieś nadmorska</div><div className="text-sm text-neutral-600">typ miejscowości</div></div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Atrakcje</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Plaża w Mrzeżynie</h3><p className="mt-2 text-sm text-neutral-700">Szeroka plaża z czystym piaskiem i łagodnym zejściem.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Port rybacki</h3><p className="mt-2 text-sm text-neutral-700">Obserwuj kutry wypływające w morze i zjedz świeżą rybę.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Ścieżka przyrodnicza</h3><p className="mt-2 text-sm text-neutral-700">Oznakowana trasa przez wydmy i lasy.</p></div><div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-semibold">Latarnia morska</h3><p className="mt-2 text-sm text-neutral-700">Charakterystyczna latarnia – świetny punkt widokowy.</p></div>
        </div>
        <div className="mt-8">
          <a href="/rezerwacja" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Zarezerwuj pobyt</a>
          <a href="/okolica" className="ml-3 rounded-xl border px-5 py-3">Wróć do okolicy</a>
        </div>
      </section>
    </main>
  );
}
