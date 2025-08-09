'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/galeria", label: "Galeria" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/rezerwacja", label: "Rezerwacja" },
  { href: "/okolica", label: "Okolica" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold text-[var(--brand)]">
          <img src="/logo_gracja.svg" alt="GRACJA" className="h-7" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:text-[var(--brand)] ${pathname===item.href ? "text-[var(--brand)] font-medium" : "text-neutral-700"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#kontakt" className="ml-2 rounded-xl bg-[var(--brand)] px-4 py-2 text-white text-sm hover:opacity-90">
            Zarezerwuj
          </Link>
        </nav>
      </div>
    </header>
  );
}
