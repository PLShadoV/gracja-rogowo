
'use client';
import { Phone, Mail, Map, Calendar } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 space-y-3">
      <a href="tel:+48799042755" className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
         style={{backgroundColor: 'var(--brand)'}} title="Zadzwoń">
        <Phone className="text-white" />
      </a>
      <a href="/kontakt" className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
         style={{backgroundColor: 'var(--accent)'}} title="Kontakt">
        <Mail className="text-white" />
      </a>
      <a href="https://maps.google.com/?q=GRACJA%20Rogowo%2046%2C%2072-330%20Rogowo" target="_blank"
         className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
         style={{backgroundColor: 'var(--brand)'}} title="Mapa" rel="noopener noreferrer">
        <Map className="text-white" />
      </a>
      <a href="/rezerwacja" className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
         style={{backgroundColor: 'var(--accent)'}} title="Rezerwacja">
        <Calendar className="text-white" />
      </a>
    </div>
  );
}
