import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Video Editor Pro - Professional Discord Video Editing',
  description: 'Professional Discord video editing services, premium project files, and editing packs for content creators.',
  keywords: 'discord video editing, video editor, content creation, after effects, premiere pro',
  authors: [{ name: 'Video Editor Pro' }],
  openGraph: {
    title: 'Video Editor Pro - Professional Discord Video Editing',
    description: 'Transform your Discord content with professional video edits',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} animated-bg min-h-screen`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}