
export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-brand">Domki na wynajem Kołobrzeg</h1>
          <p className="mt-3 text-neutral-700">Kołobrzeg jest oddalony o ok. 18 km. Latarnia, molo, starówka i liczne atrakcje całoroczne.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• ok. 18 km od GRACJI</li><li>• ok. 20 min autem</li><li>• molo, starówka, uzdrowisko, SPA</li>
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
