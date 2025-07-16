import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IA Menu',
  description: 'Assistente de IA que funciona direto no WhatsApp do restaurante. Tire dúvidas sobre o cardápio e faça seu pedido. Sem complicação, só praticidade.',
  generator: 'v0.dev',
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
