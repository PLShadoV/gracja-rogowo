import Link from "next/link";

const items = [
  { href: "/okolica/mrzezyno", title: "Mrzeżyno", desc: "Port rybacki i klimatyczne plaże" },
  { href: "/okolica/dzwirzyno", title: "Dźwirzyno", desc: "Między morzem a jeziorem" },
  { href: "/okolica/kolobrzeg", title: "Kołobrzeg", desc: "Uzdrowisko i atrakcje" },
  { href: "/okolica/z-psem", title: "Z psem nad morze", desc: "Plaże i zasady pobytu" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-[var(--brand)] text-center">Odkryj Okolicę</h1>
      <p className="mt-2 text-center text-neutral-600">Poznaj atrakcje w pobliżu GRACJI</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-semibold text-[var(--brand)]">{i.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{i.desc}</p>
            <span className="mt-3 inline-block text-sm underline">Zobacz więcej</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
