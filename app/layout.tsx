import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agrocampo.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "M.A.D.Y — Trazabilidad e inocuidad para el campo mexicano",
  description:
    "M.A.D.Y automatiza los registros de inocuidad agrícola que exige PrimusGFS: inspecciones preoperacionales, botiquín, vidrio y plástico, cosecha y liberación. Sector berry — GlobalGAP, SENASICA, BPA/SAIA. PDF oficial desde el celular en segundos.",
  keywords: [
    "inocuidad agrícola",
    "PrimusGFS",
    "GlobalGAP",
    "SENASICA",
    "registros de inocuidad",
    "sector berry",
    "trazabilidad agrícola",
    "BPA",
    "SAIA",
    "inspección preoperacional",
    "cosecha y liberación",
    "M.A.D.Y",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "M.A.D.Y — Trazabilidad e inocuidad para el campo mexicano",
    description:
      "Genera PDFs con el formato oficial BPA/SAIA directamente desde tu celular. Sin Excel, sin papel. Multi-rancho, multi-cultivo, certificaciones GlobalGAP y PrimusGFS.",
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "M.A.D.Y",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "M.A.D.Y — Software de inocuidad agrícola para el sector berry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.A.D.Y — Inocuidad agrícola desde el celular",
    description:
      "Formatos PrimusGFS digitales, trazabilidad multi-rancho y PDFs oficiales. Todo desde el celular.",
    images: ["/images/hero-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
