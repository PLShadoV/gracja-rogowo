
import ReservationForm from "@/components/ReservationForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Rezerwacja</h1>
      <p className="mt-2 text-center text-neutral-600">Wypełnij formularz, a skontaktujemy się w celu potwierdzenia.</p>
      <div className="mt-8 rounded-2xl border p-6 bg-white">
        <ReservationForm />
      </div>
    </main>
  );
}
