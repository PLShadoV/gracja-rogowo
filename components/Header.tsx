
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/galeria", label: "Galeria" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/rezerwacja", label: "Rezerwacja" },
  { href: "/okolica", label: "Okolica" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-brand">
          GRACJA Rogowo
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}
              className={pathname===n.href ? "text-brand font-semibold" : "text-neutral-700 hover:text-brand"}>
              {n.label}
            </Link>
          ))}
          <Link href="/rezerwacja" className="rounded-xl bg-brand px-4 py-2 text-white">Zarezerwuj</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            {nav.map((n)=>(
              <Link key={n.href} href={n.href} className="py-2">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
