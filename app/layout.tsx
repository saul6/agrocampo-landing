import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AgroCampo — Trazabilidad e inocuidad para el campo mexicano",
  description:
    "AgroCampo automatiza los formatos de inocuidad que exige PrimusGFS: inspecciones preoperacionales, botiquin, vidrio y plastico. Todo desde el celular, PDF listo en segundos.",
  openGraph: {
    title: "AgroCampo — Trazabilidad e inocuidad para el campo mexicano",
    description:
      "Genera PDFs con el formato oficial BPA/SAIA directamente desde tu celular. Sin Excel, sin papel.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
