import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'TAPit - Web Design, Apps & AI Systems',
  description: 'TAPit specializes in designing cutting-edge websites, mobile applications, and AI systems. Transform your digital presence with our innovative solutions.',
  keywords: 'web design, app development, AI systems, digital solutions, TAPit',
  authors: [{ name: 'TAPit Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#E58C25',
  openGraph: {
    title: 'TAPit - Web Design, Apps & AI Systems',
    description: 'Transform your digital presence with our innovative web design, app development, and AI solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAPit - Web Design, Apps & AI Systems',
    description: 'Transform your digital presence with our innovative solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary font-sans antialiased">
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <div id="cursor" className="hidden lg:block fixed w-6 h-6 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out" />
      </body>
    </html>
  )
}