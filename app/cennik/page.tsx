import PricingTable from "@/components/PricingTable";
import PricingDetails from "@/components/PricingDetails";

export default function Page() {
  return (
    <main>
      <section className="bg-neutral-50 py-16 text-center">
        <h1 className="text-4xl font-semibold text-[var(--brand)]">Cennik</h1>
        <p className="mt-2 text-neutral-600">Sprawdź ceny w poszczególnych sezonach</p>
      </section>
      <PricingTable />
      <PricingDetails />
    </main>
  );
}
