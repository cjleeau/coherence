import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coherence',
  description: 'Token-driven, accessibility-first design system'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="hc-dark">
      <body>{children}</body>
    </html>
  )
}