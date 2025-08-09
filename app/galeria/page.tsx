
export const metadata = {
  title: "Galeria – GRACJA Rogowo | Apartamenty przy plaży",
  description: "Zdjęcia apartamentów, plaży i okolic Rogowa. Zobacz, jak wygląda GRACJA Rogowo i zaplanuj urlop nad morzem."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Galeria</h1>
      <p className="mt-2 text-center text-neutral-600">Zdjęcia obiektu, plaży i atrakcji w okolicy Rogowa.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:9}).map((_,i)=>(
          <img key={i} src={`/gallery/${i+1}.jpg`} alt={`GRACJA Rogowo – zdjęcie ${i+1}`} className="w-full rounded-2xl border object-cover" />
        ))}
      </div>
    </main>
  );
}
