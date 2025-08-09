# GRACJA Rogowo — pakiet zmian (do repo `gracja-rogowo`)

W paczce masz:
- `public/` — logo, favikony, OG image
- `src/config/site.config.ts` — branding, kontakt, mapa
- `data/pricing.ts` — cennik (na podstawie obecnego)
- `components/` — PricingTable, ContactBlock, Reviews
- `docs/head-snippet.html` — co wkleić do `<head>` w `app/layout.tsx`
- `.env.example` — zmienne środowiskowe

## Szybki import do Twojego repo
1. Pobierz ZIP i rozpakuj.
2. Skopiuj foldery **public/**, **src/**, **data/**, **components/** do swojego repo (nadpisz istniejące pliki jeśli pyta).
3. Otwórz `app/layout.tsx` i dodaj znaczniki z `docs/head-snippet.html` w `<head>`.
4. Na stronie głównej (np. `app/page.tsx`) zaimportuj komponenty:
   ```tsx
   import PricingTable from "@/components/PricingTable";
   import ContactBlock from "@/components/ContactBlock";
   import Reviews from "@/components/Reviews";

   export default function Page() {
     return (
       <>
         {/* ...Twój hero/sekcje... */}
         <PricingTable />
         <Reviews />
         <ContactBlock />
       </>
     );
   }
   ```
5. Upewnij się, że aliasy `@/` działają jak w Twoim repo (standard w Next.js + tsconfig). Jeśli nie — użyj ścieżek względnych.
6. Ustaw ENV w Vercel na podstawie `.env.example` (Project → Settings → Environment Variables).
7. Commit & push → Vercel zbuduje Preview/Production.

## Dodatkowe uwagi
- Branding (kolor) to #081c4c — wykorzystany w przyciskach i nagłówkach.
- Cennik zawiera uwagi: opłata klimatyczna, doba hotelowa, media w cenie.
- Opinie: krótkie cytaty z linkiem do Booking.com; sekcję można rozwinąć o embed Google Reviews.
- Jeśli chcesz wersje językowe lub system rezerwacji — dorobię w kolejnym kroku.

Powodzenia z wdrożeniem! W razie czego — daj znać, dopasuję strukturę pod dokładny layout Twojego repo.
