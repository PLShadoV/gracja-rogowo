const items = [
  {
    text: '„Pokoje bardzo dobrze wyposażone, cicha spokojna okolica, parking przy obiekcie. Do plaży 50 m.”',
    author: 'Gość Booking',
    source: 'Booking.com',
    href: 'https://www.booking.com/hotel/pl/gracja-przy-plazy.pl.html'
  },
  {
    text: '„Apartament przytulny i ciepły, bardzo dobrze wyposażony, blisko do plaży.”',
    author: 'Gość Booking',
    source: 'Booking.com',
    href: 'https://www.booking.com/hotel/pl/gracja-przy-plazy.pl.html'
  },
  {
    text: '„Pokój świetnie wyposażony. Do plaży blisko. Gospodarze przemili.”',
    author: 'Gość Booking',
    source: 'Booking.com',
    href: 'https://www.booking.com/hotel/pl/gracja-przy-plazy.pl.html'
  }
];

export default function Reviews() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold text-[#081c4c]">Opinie Gości</h2>
        <p className="mt-2 text-neutral-600">Sprawdź więcej opinii na Booking.com i Google.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((r, i) => (
            <figure key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-neutral-800">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">
                — {r.author} • <a className="underline" href={r.href} target="_blank" rel="noreferrer">{r.source}</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
