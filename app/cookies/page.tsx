import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Cookies(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <h1 className="mb-4 text-3xl font-semibold text-brand">Polityka cookies</h1>
          <p className="text-slate-700">Opis typów plików cookies, celu ich użycia i sposobu zarządzania.</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
