import Container from "@/components/Container";

export default function Footer(){
  return (
    <footer className="border-t bg-white" style={{ borderColor: "#e6e8ef" }}>
      <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Apartamenty Gracja – Rogowo</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="/polityka-prywatnosci" className="hover:underline">Polityka prywatności</a>
          <a href="/cookies" className="hover:underline">Cookies</a>
          <a href="/rezerwacja" className="rounded-xl border border-accent bg-brand px-4 py-2 text-white">Rezerwuj</a>
        </div>
      </Container>
    </footer>
  );
}
