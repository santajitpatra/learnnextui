import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Link from 'next/link'
import { ThemeSwitcher } from './components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <header className='py-6'>
            <nav className='container flex items-center justify-between'>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
