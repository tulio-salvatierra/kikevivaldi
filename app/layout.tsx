import type { Metadata } from "next";
import "@fontsource/big-shoulders-display/600";
import "@fontsource/big-shoulders-display/800";
import "@fontsource/newsreader/300";
import "@fontsource/newsreader/400";
import "@fontsource/newsreader/400-italic";
import "@fontsource/ibm-plex-mono/400";
import "@fontsource/ibm-plex-mono/500";
import "./globals.css";

const SITE = "https://www.kikevivaldy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kike Vivaldy — Nova Flamenco",
  description:
    "Guitarrista colombiano. Flamenco, jazz y musica latina fundidos en Nova Flamenco. Conciertos, discos y booking.",
  keywords: [
    "Kike Vivaldy",
    "Nova Flamenco",
    "guitarrista colombiano",
    "flamenco jazz",
    "live guitar",
    "Midland Texas",
  ],
  openGraph: {
    title: "Kike Vivaldy — Nova Flamenco",
    description:
      "Guitarrista colombiano. Flamenco, jazz y musica latina fundidos en Nova Flamenco.",
    url: SITE,
    siteName: "Kike Vivaldy",
    images: [{ url: "/og-kikevivaldy.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kike Vivaldy — Nova Flamenco",
    description: "Guitarrista colombiano. Flamenco, jazz y musica latina.",
    images: ["/og-kikevivaldy.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="grain bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
