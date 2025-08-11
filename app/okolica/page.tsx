import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const cards = [
  { href:"/okolica/pokoje-na-wynajem-rogowo", t:"Pokoje na wynajem – Rogowo", d:"Spokojna miejscowość między morzem a jeziorem Resko.", i:"https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop" },
  { href:"/okolica/pokoje-na-wynajem-mrzezyno", t:"Pokoje na wynajem – Mrzeżyno", d:"Port rybacki, rejsy i świetna gastronomia.", i:"https://images.unsplash.com/photo-1505761689074-6934327f518e?q=80&w=1600&auto=format&fit=crop" },
  { href:"/okolica/pokoje-na-wynajem-dzwirzyno", t:"Pokoje na wynajem – Dźwirzyno", d:"Trasy spacerowe i bliskość jeziora.", i:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
  { href:"/okolica/pobyt-z-psem", t:"Pobyt z psem", d:"Udogodnienia i plaże przyjazne psom.", i:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop" },
  { href:"/okolica/sciezki-rowerowe", t:"Ścieżki rowerowe", d:"Velo Baltica i pętle rodzinne.", i:"https://images.unsplash.com/photo-1519751138087-5a3fef5c9b0b?q=80&w=1600&auto=format&fit=crop" },
];

export default function AreaHubPage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <SectionTitle eyebrow="Okolica" title="Rogowo i okolice" subtitle="Sprawdź atrakcje i wskazówki." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map(c => (
              <a key={c.href} href={c.href} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "#e6e8ef" }}>
                <div className="h-44 w-full overflow-hidden">
                  <img src={c.i} alt={c.t} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand">{c.t}</h3>
                  <p className="text-sm text-slate-600">{c.d}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
