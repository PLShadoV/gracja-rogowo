import Header from "@/components/Header";
import FloatingActions from "@/components/FloatingActions";
import Hero from "@/components/Hero";
import USPBar from "@/components/USPBar";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import PriceTable from "@/components/PriceTable";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function HomePage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <USPBar />
        <section className="bg-white py-20">
          <Container>
            <SectionTitle eyebrow="Oferta" title="Nasze apartamenty" subtitle="Wnętrza łączące komfort i elegancję – wybierz idealny układ na swój pobyt." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Apartament Premium • 42 m²","Studio z balkonem • 30 m²","Rodzinny z aneksem • 48 m²"].map((t,i)=>(
                <div key={t} className="overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#e6e8ef" }}>
                  <img alt={t} className="h-56 w-full object-cover" src={`https://images.unsplash.com/photo-15056${900+i}92895-1758d7feb511?q=80&w=1600&auto=format&fit=crop`} />
                  <div className="space-y-1 p-5">
                    <h3 className="text-lg font-semibold text-brand">{t.split('•')[0]}</h3>
                    <p className="text-sm text-slate-600">{t.split('•')[1]}</p>
                    <a href="/rezerwacja" className="inline-block rounded-xl border border-accent bg-brand px-4 py-2 text-sm font-semibold text-white">Zarezerwuj</a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className="bg-white py-20" id="gallery-teaser">
          <Container>
            <SectionTitle eyebrow="Galeria" title="Zobacz wnętrza i okolicę" subtitle="Przedsmak klimatu – apartamenty, plaża i ujęcia z drona." />
            <GalleryGrid />
          </Container>
        </section>
        <section className="bg-light py-20" id="pricing">
          <Container>
            <SectionTitle eyebrow="Cennik" title="Przejrzyste sezony i dopłaty" subtitle="Ceny za dobę, minimalne długości oraz opcje dodatkowe." />
            <PriceTable />
          </Container>
        </section>
        <section className="bg-white py-20" id="booking">
          <Container>
            <SectionTitle eyebrow="Rezerwacja" title="Zarezerwuj pobyt" subtitle="Wypełnij formularz zapytania – odpowiemy niezwłocznie." />
            <BookingForm />
          </Container>
        </section>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
