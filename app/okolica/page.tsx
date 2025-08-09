
export const metadata = {
  title: "Okolica – GRACJA Rogowo | Mrzeżyno, Dźwirzyno, Kołobrzeg",
  description: "Poznaj okolice GRACJI Rogowo: Mrzeżyno, Dźwirzyno, Kołobrzeg, plaże przyjazne psom i trasy rowerowe Velo Baltica."
};

const items = [
  { href: "/okolica/mrzezyno", title: "Domki na wynajem Mrzeżyno", desc: "GRACJA Rogowo niedaleko Mrzeżyna – atrakcje i plaże" },
  { href: "/okolica/dzwirzyno", title: "Domki na wynajem Dźwirzyno", desc: "Między morzem a jeziorem Resko" },
  { href: "/okolica/kolobrzeg", title: "Domki na wynajem Kołobrzeg", desc: "Uzdrowisko i całoroczne atrakcje" },
  { href: "/okolica/z-psem", title: "Noclegi z psem", desc: "Zasady pobytu i plaże przyjazne psom" },
  { href: "/okolica/sciezki-rowerowe", title: "Ścieżki rowerowe", desc: "Trasy Velo Baltica i okolice Jeziora Resko" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Okolica</h1>
      <p className="mt-2 text-center text-neutral-600">Rogowo to spokojna miejscowość między Mrzeżynem i Dźwirzynem. Świetna baza na zwiedzanie Kołobrzegu, leśne spacery i rowerowe wycieczki.</p>
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
