import { Inter } from "next/font/google"
import {ClarkProvider} from '@clerk/nextjs'
import "../globals.css"
export const metadata = {
  title: 'Auth',
  description: 'Next 14 Social media auth',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ClarkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-1`}>
          {children}
        </body>
      </html>
    </ClarkProvider>
  )
}
