import PricingTable from "@/components/PricingTable";
import Reviews from "@/components/Reviews";
import ContactBlock from "@/components/ContactBlock";

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--brand)]">GRACJA Rogowo</h1>
          <p className="mt-3 text-neutral-700">Pokoje gościnne i apartamenty przy plaży – idealne dla par i rodzin.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-white">Zarezerwuj pobyt</a>
            <a href="/galeria" className="rounded-xl border px-5 py-3 border-neutral-300">Zobacz galerię</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 -mt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Komfortowe pokoje", "Z łazienką, TV i Wi‑Fi"],
            ["Blisko plaży", "Wejście na plażę kilka kroków od obiektu"],
            ["Parking na miejscu", "Darmowy parking dla Gości"]
          ].map(([title,desc], i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <h3 className="font-semibold text-[var(--brand)]">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PricingTable />
      <Reviews />
      <ContactBlock />
    </main>
  );
}
