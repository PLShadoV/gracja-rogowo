
export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Galeria</h1>
      <p className="mt-2 text-center text-neutral-600">Podmień obrazy w /public/gallery/...</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:9}).map((_,i)=>(
          <img key={i} src={`/gallery/${i+1}.jpg`} alt="" className="w-full rounded-2xl border" />
        ))}
      </div>
    </main>
  );
}
