
const items = [
  { href: "/okolica/mrzezyno", title: "Domki na wynajem Mrzeżyno", desc: "GRACJA Rogowo niedaleko Mrzeżyna – atrakcje" },
  { href: "/okolica/dzwirzyno", title: "Domki na wynajem Dźwirzyno", desc: "GRACJA Rogowo niedaleko Dźwirzyna" },
  { href: "/okolica/kolobrzeg", title: "Domki na wynajem Kołobrzeg", desc: "GRACJA Rogowo niedaleko Kołobrzegu" },
  { href: "/okolica/z-psem", title: "Noclegi z psem", desc: "Zasady pobytu i plaże przyjazne psom" },
  { href: "/okolica/sciezki-rowerowe", title: "Ścieżki rowerowe", desc: "Velo Baltica i trasy wokół Reska" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Okolica</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((i)=>(
          <a key={i.href} href={i.href} className="rounded-2xl border p-6 hover:shadow-md transition block">
            <div className="font-semibold text-brand">{i.title}</div>
            <div className="text-sm text-neutral-600 mt-1">{i.desc}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
