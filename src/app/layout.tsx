import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Makwana Solicitors | Fare Evasion & Criminal Defense Experts',
  description: 'Expert legal representation for fare evasion, blue badge fraud, and criminal defense cases across London and the UK.',
  keywords: ['fare evasion solicitors', 'blue badge fraud', 'criminal defense london', 'TfL prosecution', 'train fare solicitors'],
  authors: [{ name: 'Makwana Solicitors' }],
  openGraph: {
    title: 'Makwana Solicitors | Fare Evasion & Criminal Defense Experts',
    description: 'Expert legal representation for fare evasion, blue badge fraud, and criminal defense cases.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased overflow-x-hidden selection:bg-makwana-mid selection:text-white">
        {children}
      </body>
    </html>
  )
}
