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
    "Colombian guitarist. Flamenco, jazz and Latin music fused into Nova Flamenco. Live shows, records and booking.",
  keywords: [
    "Kike Vivaldy",
    "Nova Flamenco",
    "Colombian guitarist",
    "flamenco jazz",
    "live guitar",
    "Midland Texas",
  ],
  openGraph: {
    title: "Kike Vivaldy — Nova Flamenco",
    description:
      "Colombian guitarist. Flamenco, jazz and Latin music fused into Nova Flamenco.",
    url: SITE,
    siteName: "Kike Vivaldy",
    images: [{ url: "/og-kikevivaldy.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kike Vivaldy — Nova Flamenco",
    description: "Colombian guitarist. Flamenco, jazz and Latin music.",
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
    <html lang="en">
      <body className="grain bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
