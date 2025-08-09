
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "GRACJA Rogowo – Pokoje i apartamenty przy plaży",
  description: "Komfortowe pokoje i apartamenty tuż przy plaży w Rogowie.",
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
