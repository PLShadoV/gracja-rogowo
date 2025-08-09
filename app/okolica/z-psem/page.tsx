
export const metadata = {
  title: "Noclegi z psem – GRACJA Rogowo",
  description: "W GRACJI Rogowo gościmy również czworonogi (po uzgodnieniu). W okolicy są odcinki plaż przyjazne psom i rozległe lasy do spacerów.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-brand">Noclegi z psem</h1>
          <p className="mt-3 text-neutral-700">W GRACJI Rogowo gościmy również czworonogi (po uzgodnieniu). W okolicy są odcinki plaż przyjazne psom i rozległe lasy do spacerów.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• miejsce przyjazne zwierzętom</li><li>• plaże i ścieżki leśne w pobliżu</li><li>• wskazówki i zasady plażowania z psem</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj pobyt</a>
            <a href="/okolica" className="rounded-xl border px-5 py-3">Wróć do okolicy</a>
          </div>
        </div>
        <img src="/gallery/1.jpg" alt="Noclegi z psem nad morzem – GRACJA Rogowo" className="w-full rounded-2xl border object-cover" />
      </header>
    </main>
  );
}
