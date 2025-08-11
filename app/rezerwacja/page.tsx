import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import BookingForm from "@/components/BookingForm";

export default function BookingPage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <SectionTitle eyebrow="Rezerwacja" title="Złóż zapytanie o termin" subtitle="Wypełnij formularz, a my potwierdzimy dostępność." />
          <BookingForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
