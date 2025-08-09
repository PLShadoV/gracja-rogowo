
import { Waves, Car, Wifi, Coffee } from "lucide-react";

export default function Page() {
  const features = [
    { icon: <Waves className="w-8 h-8 text-accent" />, title: "Blisko plaży", desc: "Zaledwie 60 m od morza" },
    { icon: <Car className="w-8 h-8 text-accent" />, title: "Bezpłatny parking", desc: "Parking prywatny na miejscu" },
    { icon: <Wifi className="w-8 h-8 text-accent" />, title: "Bezpłatne Wi-Fi", desc: "Internet w całym obiekcie" },
    { icon: <Coffee className="w-8 h-8 text-accent" />, title: "Aneks kuchenny", desc: "Pełne wyposażenie" },
  ];

  return (
    <main>
      <section className="pt-14 relative min-h-[70vh] flex items-center">
        <img src="/hero-drone.jpg" alt="Widok z drona" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold"><span className="text-accent">GRACJA Rogowo</span><br/>Apartamenty przy plaży</h1>
          <p className="mt-4 text-lg text-neutral-100 max-w-2xl">Wypocznij w komfortowych apartamentach kilka kroków od piaszczystej plaży w Rogowie.</p>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj</a>
            <a href="/galeria" className="rounded-xl border border-accent px-5 py-3 text-white">Zobacz galerię</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-semibold text-brand text-center">Dlaczego warto wybrać GRACJĘ?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {features.map((f,i)=>(
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 text-center bg-white shadow-sm">
                <div className="mb-3 flex justify-center">{f.icon}</div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
