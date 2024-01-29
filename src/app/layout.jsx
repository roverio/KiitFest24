import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from "sonner";

export const metadata = {
  title: 'KIIT FEST 24',
  description: 'KIIT FEST 24 7.0',
}

export default async function RootLayout({ children }) {
  const session = getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" expand={true}
        richColors />
      </body>
    </html>
  )
}
