import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Apartamenty Gracja – Rogowo",
    template: "%s | Apartamenty Gracja – Rogowo",
  },
  description: "Eleganckie apartamenty nad Bałtykiem. Rogowo w najlepszym wydaniu.",
  openGraph: {
    title: "Apartamenty Gracja – Rogowo",
    description: "Eleganckie apartamenty nad Bałtykiem. Rogowo w najlepszym wydaniu.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
