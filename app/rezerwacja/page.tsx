
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "Rezerwacja – GRACJA Rogowo | Zapytaj o termin",
  description: "Złóż zapytanie o termin w GRACJI Rogowo. Wpisz daty i liczbę osób – odpowiemy szybko i potwierdzimy dostępność."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand text-center">Rezerwacja</h1>
      <p className="mt-2 text-center text-neutral-600">Wypełnij formularz zapytania o nocleg w Rogowie – skontaktujemy się z potwierdzeniem.</p>
      <div className="mt-8 rounded-2xl border p-6 bg-white">
        <ReservationForm />
      </div>
      <p className="mt-4 text-sm text-neutral-600 text-center">Rezerwacja jest potwierdzona po wpłacie zaliczki. Warunki rezerwacji i doby hotelowej znajdziesz w cenniku.</p>
    </main>
  );
}
