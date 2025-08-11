import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaDetail from "@/components/AreaDetail";

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <AreaDetail
          title="Pokoje na wynajem – Dźwirzyno"
          lead="Szerokie plaże i bliskość Jeziora Resko."
          bullets=["Wypożyczalnie sprzętu wodnego", "Trasy spacerowe i rowerowe", "Rodzinny klimat"]
          img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
        />
      </main>
      <Footer />
    </div>
  );
}
