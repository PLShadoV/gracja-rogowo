"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

export default function Header(){
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const onScroll = ()=>{
      const hdr = document.getElementById("site-header");
      if(!hdr) return;
      if(window.scrollY>10) hdr.classList.add("shadow-lg","bg-white/90","backdrop-blur");
      else hdr.classList.remove("shadow-lg","bg-white/90","backdrop-blur");
    };
    window.addEventListener("scroll", onScroll);
    return ()=>window.removeEventListener("scroll", onScroll);
  },[]);

  const Link = ({href, children}:{href:string; children:React.ReactNode}) => (
    <a href={href} className="text-sm font-medium text-slate-700 hover:text-slate-900" onClick={()=>setOpen(false)}>{children}</a>
  );

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-50 transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8" aria-label="Główna">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand" />
          <span className="text-base font-semibold text-brand">Apartamenty Gracja</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/">Strona główna</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/cennik">Cennik</Link>
          <a href="/rezerwacja" className="rounded-xl border border-accent bg-brand px-4 py-2 text-sm font-semibold text-white">Rezerwacja</a>
          <div className="group relative">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900">Okolica ▾</button>
            <div className="invisible absolute right-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid gap-2 text-sm">
                <a className="text-slate-700 hover:text-slate-900" href="/okolica">Okolica – przegląd</a>
                <a className="text-slate-700 hover:text-slate-900" href="/okolica/pokoje-na-wynajem-rogowo">Rogowo</a>
                <a className="text-slate-700 hover:text-slate-900" href="/okolica/pokoje-na-wynajem-mrzezyno">Mrzeżyno</a>
                <a className="text-slate-700 hover:text-slate-900" href="/okolica/pokoje-na-wynajem-dzwirzyno">Dźwirzyno</a>
                <a className="text-slate-700 hover:text-slate-900" href="/okolica/pobyt-z-psem">Pobyt z psem</a>
                <a className="text-slate-700 hover:text-slate-900" href="/okolica/sciezki-rowerowe">Ścieżki rowerowe</a>
              </div>
            </div>
          </div>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <button className="rounded-xl border px-3 py-2 md:hidden" onClick={()=>setOpen(!open)} aria-label="Otwórz menu">Menu</button>
      </nav>
      {open && (
        <div className="border-t bg-white md:hidden">
          <Container className="grid gap-3 py-4">
            <a href="/" onClick={()=>setOpen(false)}>Strona główna</a>
            <a href="/galeria" onClick={()=>setOpen(false)}>Galeria</a>
            <a href="/cennik" onClick={()=>setOpen(false)}>Cennik</a>
            <a href="/rezerwacja" onClick={()=>setOpen(false)}>Rezerwacja</a>
            <details>
              <summary className="cursor-pointer select-none">Okolica</summary>
              <div className="ml-4 mt-2 grid gap-2">
                <a href="/okolica" onClick={()=>setOpen(false)}>Okolica – przegląd</a>
                <a href="/okolica/pokoje-na-wynajem-rogowo" onClick={()=>setOpen(false)}>Rogowo</a>
                <a href="/okolica/pokoje-na-wynajem-mrzezyno" onClick={()=>setOpen(false)}>Mrzeżyno</a>
                <a href="/okolica/pokoje-na-wynajem-dzwirzyno" onClick={()=>setOpen(false)}>Dźwirzyno</a>
                <a href="/okolica/pobyt-z-psem" onClick={()=>setOpen(false)}>Pobyt z psem</a>
                <a href="/okolica/sciezki-rowerowe" onClick={()=>setOpen(false)}>Ścieżki rowerowe</a>
              </div>
            </details>
            <a href="/kontakt" onClick={()=>setOpen(false)}>Kontakt</a>
          </Container>
        </div>
      )}
    </header>
  );
}
