
'use client';
import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', checkin:'', checkout:'', guests:'2', message:'' });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Rezerwacja - ${form.name}`;
    const body = `Imię i nazwisko: ${form.name}
Email: ${form.email}
Telefon: ${form.phone}
Data zameldowania: ${form.checkin}
Data wymeldowania: ${form.checkout}
Liczba gości: ${form.guests}
Wiadomość: ${form.message}`;
    window.location.href = `mailto:info@gracjarogowo.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input required placeholder="Imię i nazwisko" className="rounded-lg border px-3 py-2" 
               value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input required type="email" placeholder="Email" className="rounded-lg border px-3 py-2" 
               value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
      </div>
      <input placeholder="Telefon" className="rounded-lg border px-3 py-2 w-full" 
             value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
      <div className="grid gap-4 md:grid-cols-2">
        <input required type="date" className="rounded-lg border px-3 py-2" 
               value={form.checkin} onChange={e=>setForm({...form, checkin:e.target.value})} />
        <input required type="date" className="rounded-lg border px-3 py-2" 
               value={form.checkout} onChange={e=>setForm({...form, checkout:e.target.value})} />
      </div>
      <select required className="rounded-lg border px-3 py-2 w-full" 
              value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})}>
        <option value="">Liczba gości</option>
        <option value="1">1 osoba</option>
        <option value="2">2 osoby</option>
        <option value="3">3 osoby</option>
        <option value="4">4 osoby</option>
      </select>
      <textarea placeholder="Dodatkowe informacje" className="rounded-lg border px-3 py-2 w-full h-28"
                value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
      <button className="w-full rounded-xl px-5 py-3 text-white" style={{backgroundColor:'var(--brand)'}}>Wyślij zapytanie</button>
    </form>
  );
}
