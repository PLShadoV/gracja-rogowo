export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string; }){
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</div>}
      <h2 className="text-3xl font-semibold text-brand sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}
