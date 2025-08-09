
export const metadata = {
  title: "Ścieżki rowerowe – GRACJA Rogowo",
  description: "Rogowo leży przy trasie Velo Baltica. To doskonała baza na wycieczki do Mrzeżyna, Dźwirzyna i Kołobrzegu oraz wokół jeziora Resko.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-brand">Ścieżki rowerowe</h1>
          <p className="mt-3 text-neutral-700">Rogowo leży przy trasie Velo Baltica. To doskonała baza na wycieczki do Mrzeżyna, Dźwirzyna i Kołobrzegu oraz wokół jeziora Resko.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• trasa Velo Baltica wzdłuż wybrzeża</li><li>• łatwe odcinki dla rodzin</li><li>• wypożyczalnie rowerów w okolicy</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/rezerwacja" className="rounded-xl bg-brand px-5 py-3 text-white">Zarezerwuj pobyt</a>
            <a href="/okolica" className="rounded-xl border px-5 py-3">Wróć do okolicy</a>
          </div>
        </div>
        <img src="/gallery/1.jpg" alt="Ścieżki rowerowe nad morzem – Velo Baltica w okolicach Rogowa" className="w-full rounded-2xl border object-cover" />
      </header>
    </main>
  );
}
