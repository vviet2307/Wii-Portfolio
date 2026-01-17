import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Wii Portfolio',
  description: 'A portfolio with Wii and Frutiger Aero aesthetics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-wii-white to-wii-gray pb-24 md:pb-28">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
