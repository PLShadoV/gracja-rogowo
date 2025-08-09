
import { Waves, Car, Wifi, Coffee } from "lucide-react";

export default function Page() {
  const features = [
    { icon: <Waves className="w-8 h-8 text-accent" />, title: "Blisko plaży", desc: "Zaledwie 60 m od morza" },
    { icon: <Car className="w-8 h-8 text-accent" />, title: "Bezpłatny parking", desc: "Parking prywatny na miejscu" },
    { icon: <Wifi className="w-8 h-8 text-accent" />, title: "Bezpłatne Wi‑Fi", desc: "Internet w całym obiekcie" },
    { icon: <Coffee className="w-8 h-8 text-accent" />, title: "Aneks kuchenny", desc: "Pełne wyposażenie" },
  ];

  return (
    <main>
      <section className="pt-14 relative min-h-[70vh] flex items-center">
        <img src="/hero-drone.jpg" alt="Rogowo z lotu ptaka – GRACJA Rogowo przy plaży" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold"><span className="text-accent">GRACJA Rogowo</span><br/>Pokoje i apartamenty przy plaży</h1>
          <p className="mt-4 text-lg text-neutral-100 max-w-2xl">Noclegi nad morzem w Rogowie – idealne dla par, rodzin i osób podróżujących z psem. Blisko Mrzeżyna, Dźwirzyna i Kołobrzegu.</p>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj</a>
            <a href="/galeria" className="rounded-xl border border-accent px-5 py-3 text-white">Zobacz galerię</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-semibold text-brand text-center">Dlaczego warto wybrać GRACJĘ?</h2>
          <p className="mt-2 text-center text-neutral-600">Komfortowe noclegi w Rogowie – blisko plaży, z parkingiem i Wi‑Fi.</p>
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

      {/* 2-column wrap: dog & bikes */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden border bg-white">
            <img src="/dog-on-beach.jpg" alt="Noclegi z psem nad morzem – pies na plaży w Rogowie" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand">Pobyt z psem</h3>
              <p className="mt-2 text-neutral-700">Jesteśmy miejscem przyjaznym zwierzętom. W okolicy znajdują się odcinki plaży przyjazne psom oraz leśne ścieżki spacerowe. Daj znać przy rezerwacji – przygotujemy komfortowe warunki dla Ciebie i Twojego pupila.</p>
              <a href="/okolica/z-psem" className="inline-block mt-4 rounded-xl border border-accent px-5 py-3 text-brand">Dowiedz się więcej</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-white">
            <img src="/cyclist-coast.jpg" alt="Ścieżki rowerowe nad morzem – Velo Baltica w okolicach Rogowa" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand">Rowerowe przygody</h3>
              <p className="mt-2 text-neutral-700">Rogowo leży na trasie Velo Baltica. To świetna baza wypadowa na wycieczki do Mrzeżyna, Dźwirzyna i Kołobrzegu. Zabierz rower lub skorzystaj z wypożyczalni w okolicy.</p>
              <a href="/okolica/sciezki-rowerowe" className="inline-block mt-4 rounded-xl border border-accent px-5 py-3 text-brand">Zobacz trasy</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
