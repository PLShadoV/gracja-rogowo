import Container from "@/components/Container";

export default function USPBar(){
  const items = [
    { t: "Plaża 200 m", i: "🏖️" },
    { t: "Parking", i: "🅿️" },
    { t: "Wi‑Fi", i: "📶" },
    { t: "Klimatyzacja", i: "❄️" },
    { t: "Zwierzęta mile widziane", i: "🐾" },
  ];
  return (
    <div className="border-b bg-white" style={{ borderColor: "#e6e8ef" }}>
      <Container className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 md:grid-cols-5">
        {items.map(x => (
          <div key={x.t} className="flex items-center gap-3 rounded-2xl border p-3" style={{ borderColor: "#e6e8ef", background: "var(--light)" }}>
            <span className="text-xl">{x.i}</span>
            <span className="text-sm font-medium text-slate-700">{x.t}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
