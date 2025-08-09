
export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-brand">Domki na wynajem Dźwirzyno</h1>
          <p className="mt-3 text-neutral-700">Do Dźwirzyna dotrzesz z GRACJI w ok. 12 km. Jezioro Resko, marina i szerokie plaże czekają.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• ok. 12 km od GRACJI</li><li>• ok. 15 min autem</li><li>• Jezioro Resko, marina, trasy rowerowe</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj pobyt</a>
            <a href="/okolica" className="rounded-xl border px-5 py-3">Wróć do okolicy</a>
          </div>
        </div>
        <img src="/gallery/1.jpg" alt="" className="w-full rounded-2xl border object-cover" />
      </header>
    </main>
  );
}
