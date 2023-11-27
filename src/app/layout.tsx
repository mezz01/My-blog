import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mezzat blog',
  description: 'Created by Mohamed Amine Mezzat',
}

const header = (
  <header>
    <div>
      <h1>My programming journey blog</h1>
      <p>Welecome</p>
      <br />
    </div>
  </header>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
