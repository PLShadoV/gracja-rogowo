import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaDetail from "@/components/AreaDetail";

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <AreaDetail
          title="Pokoje na wynajem – Rogowo"
          lead="Spokojna miejscowość między morzem a jeziorem Resko Przymorskie."
          bullets=["Plaża 200 m od obiektu", "Sklepy i restauracje w zasięgu spaceru", "Dogodny dojazd i parking"]
          img="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop"
        />
      </main>
      <Footer />
    </div>
  );
}
