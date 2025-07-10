import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Clé du Prêt - Nicolas SZEFEROWICZ | Coach en Financement Immobilier',
  description: 'Optimisez votre financement immobilier avec Nicolas SZEFEROWICZ, coach expert. Stratégie personnalisée, dossier optimisé, accompagnement bancaire. Partout en France.',
  keywords: 'financement immobilier, prêt immobilier, coach financement, courtier immobilier, négociation bancaire, optimisation crédit',
  verification: {
    google: 'KsfKWTWxj50E3plF2VJaARLKOLZPv8sJlHwtIzP5PgE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}