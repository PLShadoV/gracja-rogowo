import { gallery } from "@/data/gallery";

function Grid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((src) => (
        <img key={src} src={src} alt="" className="w-full rounded-2xl object-cover shadow-sm border border-neutral-200" />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-[var(--brand)] text-center">Galeria</h1>
      <p className="mt-2 text-center text-neutral-600">Zdjęcia obiektu i okolicy</p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Widoki zewnętrzne</h2>
      <Grid items={gallery.outside} />

      <h2 className="mt-12 mb-4 text-2xl font-semibold">Wnętrza</h2>
      <Grid items={gallery.inside} />
    </main>
  );
}
