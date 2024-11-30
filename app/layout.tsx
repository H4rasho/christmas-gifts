import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formulario Navideño',
  description: 'Envía tus regalos navideños favoritos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

