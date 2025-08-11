import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function AreaDetail({ title, lead, bullets, img }:{ title:string; lead:string; bullets:string[]; img:string; }){
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Okolica" title={title} subtitle={lead} />
            <ul className="mt-4 grid gap-2 text-slate-700">
              {bullets.map((b)=> <li key={b} className="flex items-start gap-2"><span>•</span><span>{b}</span></li>)}
            </ul>
            <a href="/rezerwacja" className="mt-6 inline-block rounded-2xl border border-accent bg-brand px-6 py-3 font-semibold text-white">Sprawdź dostępność</a>
          </div>
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "#e6e8ef" }}>
            <Image src={img} alt={title} width={1600} height={1000} className="h-auto w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
