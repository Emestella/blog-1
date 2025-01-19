import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from 'components/nav'
import Footer from 'components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Emestella.net, parce que tu aimes bien lire mes bêtises.',
    template: '%s | Emestella.net',
  },
  description: 'Le blog personnel d\'Emestella, dans lequel j\'exprime mes avis, mes opinions, mes coups de sang, mes coups de cœur, et où je fais des rô dossiers.',
  openGraph: {
    title: 'Emestella.net, parce que tu aimes bien lire mes bêtises.',
    description: 'Le blog personnel d\'Emestella, dans lequel j\'exprime mes avis, mes opinions, mes coups de sang, mes coups de cœur, et où je fais des rô dossiers.',
    url: baseUrl,
    siteName: 'Emestella.net',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/Butterfly.png',
        width: 800,
        height: 600,
        alt: 'Logo d\'Emestella, un papillon bleu avec une antenne étoile sur fond rose.',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/profile.png'],
  },
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto text-black bg-white dark:text-white dark:bg-black">
        <ThemeProvider attribute='class' defaultTheme='light' >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
