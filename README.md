# Apartamenty Gracja – Rogowo (Next.js + Tailwind)

Elegancka, high-endowa strona dla apartamentów nad morzem. Zawiera:
- Strony: Strona główna, Galeria, Cennik, Rezerwacja, Kontakt, Okolica (+ 5 podstron), Polityki
- Komponenty: Header, FloatingActions (pływające ikony), Hero, USPBar, GalleryGrid, PriceTable, BookingForm, MapSection, Footer, AreaDetail
- Kolorystyka: #081c4c (main), #967d48 (accent)
- App Router (Next.js 14), Tailwind CSS

## Szybki start
```bash
pnpm i # lub npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy na Vercel
1. Stwórz repo na GitHub i wypchnij kod.
2. Podłącz repo w Vercel, framework: Next.js.
3. Zmienna `NEXT_PUBLIC_SITE_URL` (opcjonalnie) -> pełny adres produkcyjny.

## Dostosuj
- Treści, adres, telefon: w plikach w `app/**` i `components/**`
- Zdjęcia: podmień na własne w komponentach (Unsplash jako placeholder).
- Cennik: `components/PriceTable.tsx`
- Formularz: `/api/contact` – podłącz dostawcę (Email, SendGrid, Formspree itp.).
