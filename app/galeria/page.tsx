import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <SectionTitle eyebrow="Galeria" title="Wnętrza, plaża i okolica" subtitle="Zobacz, jak wygląda pobyt w Apartamentach Gracja." />
          <GalleryGrid />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
