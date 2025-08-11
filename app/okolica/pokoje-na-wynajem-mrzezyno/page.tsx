import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaDetail from "@/components/AreaDetail";

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <AreaDetail
          title="Pokoje na wynajem – Mrzeżyno"
          lead="Port rybacki, rejsy i nadmorski klimat tuż obok."
          bullets=["Promenada i molo", "Świeże ryby i knajpki", "Rejsy wycieczkowe"]
          img="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
        />
      </main>
      <Footer />
    </div>
  );
}
