import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://inicio.mady.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M.A.D.Y · Inocuidad Inteligente",
    template: "%s | M.A.D.Y",
  },
  description:
    "M.A.D.Y es la plataforma de inocuidad alimentaria digital para campo, empaque y cárnicos. Digitaliza formatos PrimusGFS, BPM y HACCP, gestiona trazabilidad multi-rancho y genera PDFs oficiales desde el celular en segundos.",
  keywords: [
    "inocuidad alimentaria",
    "inocuidad agrícola",
    "PrimusGFS",
    "HACCP",
    "BPM",
    "GlobalGAP",
    "SENASICA",
    "registros de inocuidad",
    "trazabilidad agrícola",
    "empaque",
    "cárnicos",
    "auditorías de inocuidad",
    "BPA",
    "SAIA",
    "M.A.D.Y",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "M.A.D.Y · Inocuidad Inteligente",
    description:
      "Plataforma de inocuidad alimentaria digital para campo, empaque y cárnicos. Formatos PrimusGFS, BPM y HACCP digitales. Trazabilidad multi-rancho y PDFs oficiales desde el celular.",
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "M.A.D.Y",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M.A.D.Y — Plataforma de inocuidad alimentaria digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.A.D.Y · Inocuidad Inteligente",
    description:
      "Formatos PrimusGFS, BPM y HACCP digitales. Trazabilidad para campo, empaque y cárnicos. PDFs oficiales desde el celular.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}