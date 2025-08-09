import PricingTable from "@/components/PricingTable";
import Reviews from "@/components/Reviews";
import ContactBlock from "@/components/ContactBlock";

export default function Page() {
  return (
    <main>
      <section className="bg-neutral-50 py-16 text-center">
        <img src="/logo_gracja.svg" alt="GRACJA" className="mx-auto mb-3 h-14" />
        <h1 className="m-0 text-3xl font-semibold text-[var(--brand)]">Pokoje i apartamenty przy plaży – Rogowo</h1>
        <p className="mt-2 text-neutral-600">Nowa strona – wersja testowa</p>
      </section>
      <PricingTable />
      <Reviews />
      <ContactBlock />
    </main>
  );
}
