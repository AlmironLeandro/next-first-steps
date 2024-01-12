import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Leandro's Home Page",
  description: 'Generated for Vercell by @leandro',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2 className="text-black text-3xl text-center">Hola Mundo RootLayout!</h2>
        {children}</body>
    </html>
  )
}
