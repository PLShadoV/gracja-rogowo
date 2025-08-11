import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Privacy(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <h1 className="mb-4 text-3xl font-semibold text-brand">Polityka prywatności</h1>
          <p className="text-slate-700">Tutaj umieść treść polityki prywatności (RODO, zakres danych, cele, podstawy prawne itd.).</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
