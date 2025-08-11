import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AreaDetail from "@/components/AreaDetail";

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <AreaDetail
          title="Ścieżki rowerowe"
          lead="Przebieg Velo Baltica i lokalne pętle na rodzinne wycieczki."
          bullets=["Łącznie kilkadziesiąt kilometrów tras", "Bezpieczne odcinki dla dzieci", "Miejsca na piknik i punkty widokowe"]
          img="https://images.unsplash.com/photo-1506849042430-99f4b0b25bcd?q=80&w=1600&auto=format&fit=crop"
        />
      </main>
      <Footer />
    </div>
  );
}
