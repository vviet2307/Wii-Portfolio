import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-gradient-to-br from-wii-white to-wii-gray pb-32">
        {children}
      </body>
    </html>
  )
}
