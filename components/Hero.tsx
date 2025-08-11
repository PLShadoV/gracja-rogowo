import Container from "@/components/Container";

export default function Hero(){
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:'url(https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=2000&auto=format&fit=crop)'}} />
      <div className="absolute inset-0" style={{background:'linear-gradient(0deg, #081c4ccc, #081c4c55 40%, transparent)'}} />
      <Container className="relative z-10 flex min-h-[92svh] flex-col items-start justify-end py-24">
        <div className="max-w-3xl space-y-6 text-white">
          <span className="inline-block rounded-full border border-accent/80 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">Rogowo • Nad morzem</span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">Apartamenty Gracja – Rogowo</h1>
          <p className="text-lg sm:text-xl">Eleganckie apartamenty nad Bałtykiem. Morze w zasięgu spaceru – zaplanuj pobyt w wyjątkowym miejscu.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/rezerwacja" className="rounded-2xl border border-accent bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg">Zarezerwuj</a>
            <a href="/galeria" className="rounded-2xl border border-accent bg-white/10 px-6 py-3 text-sm font-semibold text-white">Zobacz galerię</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
