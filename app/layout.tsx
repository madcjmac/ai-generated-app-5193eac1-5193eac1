import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/layout/navigation'
import { Player } from '@/components/player/player'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js MP3 Player',
  description: 'A modern MP3 player built with Next.js 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <main className="flex flex-col pb-24">
              {children}
            </main>
            <Player />
            <Navigation />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}