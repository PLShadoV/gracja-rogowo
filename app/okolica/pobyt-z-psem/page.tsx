import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaDetail from "@/components/AreaDetail";

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <AreaDetail
          title="Pobyt z psem"
          lead="Zwierzęta mile widziane – sprawdź zasady i udogodnienia."
          bullets={["Dopłata 40 zł/doba", "Miski i ręczniki na życzenie", "Najbliższe plaże przyjazne psom"]}
          img="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
        />
      </main>
      <Footer />
    </div>
  );
}
