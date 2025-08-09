export default function PricingDetails() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--brand)]">Co zawiera cena</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>✔ Nocleg w pokoju lub apartamencie</li>
            <li>✔ Pościel i ręczniki</li>
            <li>✔ Wi‑Fi i TV</li>
            <li>✔ Parking przy obiekcie</li>
            <li>✔ Dostęp do kuchni/aneksu (w apartamentach)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--brand)]">Warunki rezerwacji</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• Doba: 15:00 – 10:00</li>
            <li>• Zaliczka: 20% wartości pobytu</li>
            <li>• Zwierzęta: możliwe po uzgodnieniu</li>
            <li>• Opłata klimatyczna: 2,80 zł/os./doba</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
