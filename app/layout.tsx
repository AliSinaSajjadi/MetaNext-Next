import { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'
import "../public/Font/Font.css"
import Navbar from './UI/Navbar'
import QueryProvider from './Components/QueryProvider'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'MetaNext',
  description : "MetaNext-Test"
}


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
      <QueryProvider>
        {children}
        </QueryProvider>
        </body>
    </html>
  )
}
