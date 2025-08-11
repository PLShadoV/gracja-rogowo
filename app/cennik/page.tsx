import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import PriceTable from "@/components/PriceTable";

export default function PricingPage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <SectionTitle eyebrow="Cennik" title="Sezony i warunki" subtitle="Aktualne stawki i zasady rezerwacji." />
          <PriceTable />
          <div className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: "#e6e8ef" }}>
              <h4 className="mb-2 font-semibold text-brand">Dopłaty</h4>
              <ul className="list-disc pl-6">
                <li>Zwierzę: 40 zł / doba</li>
                <li>Sprzątanie końcowe: 150 zł</li>
                <li>Kaucja zwrotna: 300 zł</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "#e6e8ef" }}>
              <h4 className="mb-2 font-semibold text-brand">Informacje</h4>
              <ul className="list-disc pl-6">
                <li>Doba: 15:00 – 11:00</li>
                <li>Zakaz palenia w apartamentach</li>
                <li>Bezpieczny parking na miejscu</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
