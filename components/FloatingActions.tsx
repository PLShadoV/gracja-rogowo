export default function FloatingActions(){
  const Item = ({label, href, children}:{label:string; href:string; children:React.ReactNode}) => (
    <a
      aria-label={label}
      href={href}
      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-accent bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
    >{children}</a>
  );
  return (
    <div className="fixed right-4 top-1/3 z-40 hidden flex-col gap-3 md:flex">
      <Item label="Zadzwoń" href="tel:+48600000000">📞</Item>
      <Item label="Kontakt" href="/kontakt">✉️</Item>
      <Item label="Mapa" href="/kontakt#map">🗺️</Item>
      <Item label="Facebook" href="https://facebook.com">👍</Item>
      <Item label="Rezerwacja" href="/rezerwacja">🛎️</Item>
    </div>
  );
}
