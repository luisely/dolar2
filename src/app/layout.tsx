import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dolar',
  description: 'Site rapido e minimalista com valor atual do Dolar PTAX',
  themeColor: 'bg-zinc-900'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-zinc-900 text-slate-100`}>{children}</body>
    </html>
  )
}
