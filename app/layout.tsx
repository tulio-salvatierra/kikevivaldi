import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kike Vivaldy | Artista Colombiano',
  description: 'Descubre el trabajo de Kike Vivaldy, artista colombiano que fusiona flamenco, jazz y sonidos contemporáneos. Escucha su música, conoce sus proyectos y sigue su trayectoria artística.',
  generator: 'Next.js',
  keywords: ['Kike Vivaldy', 'música colombiana', 'flamenco jazz', 'guitarra española', 'artista latino', 'música independiente', 'nuevo álbum'],
  authors: [{ name: 'Kike Vivaldy' }],
  creator: 'Kike Vivaldy',
  openGraph: {
    title: 'Kike Vivaldy | Artista Colombiano',
    description: 'Música original y vibrante desde Colombia. Explora los sonidos de Kike Vivaldy.',
    url: 'https://kikevivaldy.com', // cambia si tienes un dominio distinto
    siteName: 'Kike Vivaldy',
    type: 'website',
    locale: 'en_US',
  }
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
