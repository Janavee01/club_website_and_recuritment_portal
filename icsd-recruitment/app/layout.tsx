import '../styles/globals.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICSD Club - Recruitment',
  description: 'Join ICSD Club and be part of our innovative team. Apply for various departments including Web Development, Technical, Design, Operations, and more.',
  keywords: 'ICSD Club, recruitment, student club, web development, technical, design, operations',
  authors: [{ name: 'ICSD Club' }],
  creator: 'ICSD Club',
  publisher: 'ICSD Club',
  robots: 'index, follow',
  openGraph: {
    title: 'ICSD Club - Recruitment',
    description: 'Join ICSD Club and be part of our innovative team.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICSD Club - Recruitment',
    description: 'Join ICSD Club and be part of our innovative team.',
  },
  icons: {
    icon: '/images/icsd-logo.png',
    apple: '/images/icsd-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
