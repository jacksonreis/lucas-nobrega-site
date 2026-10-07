import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Lucas Nóbrega",
  description:
    "Dentista em Fortaleza e São Paulo. Lentes dentais feitas com olhar perfeccionista, do planejamento ao último detalhe.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Mrs+Saint+Delafield&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
