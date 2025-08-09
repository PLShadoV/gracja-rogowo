
export const metadata = {
  title: "Domki na wynajem Dźwirzyno – GRACJA Rogowo",
  description: "Dźwirzyno leży między Bałtykiem a jeziorem Resko Przymorskie. Znajdziesz tu szerokie plaże, marinę oraz świetne trasy pieszo‑rowerowe.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-brand">Domki na wynajem Dźwirzyno</h1>
          <p className="mt-3 text-neutral-700">Dźwirzyno leży między Bałtykiem a jeziorem Resko Przymorskie. Znajdziesz tu szerokie plaże, marinę oraz świetne trasy pieszo‑rowerowe.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• ok. 12 km od GRACJI</li><li>• ok. 15 min autem, trasa Velo Baltica</li><li>• plaża, jezioro Resko, marina, sporty wodne</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj pobyt</a>
            <a href="/okolica" className="rounded-xl border px-5 py-3">Wróć do okolicy</a>
          </div>
        </div>
        <img src="/gallery/1.jpg" alt="Dźwirzyno – plaża i jezioro Resko niedaleko Rogowa" className="w-full rounded-2xl border object-cover" />
      </header>
    </main>
  );
}
