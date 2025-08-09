
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "GRACJA Rogowo – Pokoje i apartamenty przy plaży | Rogowo noclegi",
  description: "GRACJA Rogowo – komfortowe pokoje i apartamenty przy samej plaży. Noclegi nad morzem blisko Mrzeżyna, Dźwirzyna i Kołobrzegu. Parking, Wi‑Fi, aneksy kuchenne.",
  openGraph: {
    title: "GRACJA Rogowo – Pokoje i apartamenty przy plaży",
    description: "Noclegi w Rogowie przy plaży. Doskonała baza na wczasy z psem i rowerowe trasy Velo Baltica.",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <meta name="theme-color" content="#081c4c" />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <FloatingButtons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
