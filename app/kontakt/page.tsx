import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import MapSection from "@/components/MapSection";

export default function ContactPage(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <SectionTitle eyebrow="Kontakt" title="Skontaktuj się z nami" subtitle="Masz pytania? Chętnie pomożemy zaplanować pobyt." />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#e6e8ef" }}>
              <dl className="grid gap-3 text-sm text-slate-700">
                <div className="grid grid-cols-3"><dt className="font-medium">Telefon</dt><dd className="col-span-2"><a href="tel:+48600000000" className="hover:underline">+48 600 000 000</a></dd></div>
                <div className="grid grid-cols-3"><dt className="font-medium">E‑mail</dt><dd className="col-span-2"><a href="mailto:kontakt@gracja-rogowo.pl" className="hover:underline">kontakt@gracja-rogowo.pl</a></dd></div>
                <div className="grid grid-cols-3"><dt className="font-medium">Adres</dt><dd className="col-span-2">ul. Nadmorska 1, 72‑330 Rogowo</dd></div>
                <div className="grid grid-cols-3"><dt className="font-medium">Godziny</dt><dd className="col-span-2">09:00–18:00 (Pn–Pt)</dd></div>
              </dl>
            </div>
            <form className="grid gap-4 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#e6e8ef" }} action="/api/contact" method="post">
              <div className="grid gap-2">
                <label className="text-sm text-slate-700">Imię</label>
                <input name="name" className="rounded-xl border px-3 py-2" placeholder="Imię" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-700">E‑mail</label>
                <input name="email" type="email" className="rounded-xl border px-3 py-2" placeholder="e‑mail" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-700">Wiadomość</label>
                <textarea name="message" rows={5} className="rounded-xl border px-3 py-2" placeholder="Napisz do nas..." />
              </div>
              <button className="rounded-2xl border border-accent bg-brand px-6 py-3 font-semibold text-white">Wyślij</button>
            </form>
          </div>
          <div className="mt-8">
            <MapSection />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
