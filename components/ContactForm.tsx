
'use client';
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Kontakt ze strony - ${form.name}`;
    const body = `Imię i nazwisko: ${form.name}
Email: ${form.email}
Telefon: ${form.phone}
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
      <textarea required placeholder="Wiadomość" className="rounded-lg border px-3 py-2 w-full h-28"
                value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
      <button className="w-full rounded-xl px-5 py-3 text-white" style={{backgroundColor:'var(--brand)'}}>Wyślij wiadomość</button>
    </form>
  );
}
