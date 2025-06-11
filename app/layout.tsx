import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kike Vivaldy | Artista Colombiano',
  description:
    'Descubre el trabajo de Kike Vivaldy, artista colombiano que fusiona flamenco, jazz y sonidos contemporáneos. Escucha su música, conoce sus proyectos y sigue su trayectoria artística.',
  generator: 'tuliosalvatierra.com',
  keywords: [
    'Kike Vivaldy',
    'música colombiana',
    'flamenco jazz',
    'guitarra española',
    'artista latino',
    'música independiente',
    'nuevo álbum',
  ],
  authors: [{ name: 'Kike Vivaldy' }],
  creator: 'Kike Vivaldy',
  openGraph: {
    title: 'Kike Vivaldy | Artista Colombiano',
    description:
      'Música original y vibrante desde Colombia. Explora los sonidos de Kike Vivaldy.',
    url: 'https://kikevivaldy.com', // cambia si usas otro dominio
    siteName: 'Kike Vivaldy',
    images: [
      {
        url: '/og-kikevivaldy.jpg', // Asegúrate de tener esta imagen en /public
        width: 1200,
        height: 630,
        alt: 'Kike Vivaldy tocando guitarra',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kike Vivaldy | Artista Colombiano',
    description:
      'Escucha y descubre el trabajo de Kike Vivaldy, una mezcla de flamenco, jazz y sonidos modernos.',
    images: ['/og-kikevivaldy.jpg'],
    creator: '@kikevivaldy', // si tiene un Twitter
  },
  icons: {
    icon: '/favicon.ico', // asegúrate de tener favicon.ico en la carpeta /public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
