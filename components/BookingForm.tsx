"use client";
import { useState } from "react";

export default function BookingForm(){
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try{
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if(!res.ok) throw new Error("Network");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    }catch{
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border bg-white p-6 shadow-sm md:grid-cols-2" style={{ borderColor: "#e6e8ef" }}>
      <div className="grid gap-2">
        <label className="text-sm text-slate-700">Imię i nazwisko</label>
        <input name="name" required className="rounded-xl border px-3 py-2" placeholder="Jan Kowalski" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-slate-700">E‑mail</label>
        <input name="email" type="email" required className="rounded-xl border px-3 py-2" placeholder="jan@example.com" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-slate-700">Telefon</label>
        <input name="phone" className="rounded-xl border px-3 py-2" placeholder="+48 ..." />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-slate-700">Liczba osób</label>
        <input name="guests" type="number" min={1} className="rounded-xl border px-3 py-2" placeholder="2" />
      </div>
      <div className="grid gap-2 md:col-span-1">
        <label className="text-sm text-slate-700">Przyjazd</label>
        <input name="arrival" type="date" className="rounded-xl border px-3 py-2" />
      </div>
      <div className="grid gap-2 md:col-span-1">
        <label className="text-sm text-slate-700">Wyjazd</label>
        <input name="departure" type="date" className="rounded-xl border px-3 py-2" />
      </div>
      <div className="grid gap-2 md:col-span-2">
        <label className="text-sm text-slate-700">Wiadomość</label>
        <textarea name="message" rows={4} className="rounded-xl border px-3 py-2" placeholder="Preferencje, pytania..." />
      </div>
      <div className="flex items-center gap-3 md:col-span-2">
        <input id="rodo" required type="checkbox" className="h-4 w-4" />
        <label htmlFor="rodo" className="text-sm text-slate-600">Akceptuję politykę prywatności i przetwarzanie danych w celu obsługi zapytania.</label>
      </div>
      <div className="md:col-span-2">
        <button disabled={status==="sending"} type="submit" className="w-full rounded-2xl border border-accent bg-brand px-6 py-3 font-semibold text-white shadow-lg">
          {status==="sending" ? "Wysyłanie..." : "Wyślij zapytanie"}
        </button>
        {status==="ok" && <p className="mt-2 text-sm text-green-700">Dziękujemy! Skontaktujemy się wkrótce.</p>}
        {status==="error" && <p className="mt-2 text-sm text-red-700">Ups, spróbuj ponownie później.</p>}
      </div>
    </form>
  );
}
