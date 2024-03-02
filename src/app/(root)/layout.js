import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"
import RightBar from "@components/layout/RightBar"
import MainContent from "@components/layout/MainContent"
import SideBar from "@components/layout/SideBar"
import Footer from "@components/layout/Footer"

export const metadata = {
  title: 'UnityFirst',
  description: 'Next 14 social media app',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-red-300 `}>
          <main className='md:grid grid-cols-12 gap-2'>
            <div className='md:col-span-3'>
              <SideBar />
            </div>
            <div className='md:col-span-6'>
              <MainContent > 
                {children}
                </MainContent>
            </div>
            <div className='md:col-span-3'>
              <RightBar></RightBar>
            </div>
          </main>
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  )
}
