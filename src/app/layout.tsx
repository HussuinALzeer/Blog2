import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

import AuthProvider from '../provider/AuthProvider'
import  ReduxProvider  from '@/redux/ReduxProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {

  
  

  return (
    <ReduxProvider >
      <html lang="en">
        <body className="">
        <AuthProvider>

          {/* <ThemeContextProvider> */}
            <div className="container">
              <div className="wrapper">
                <Navbar/>
                <ReduxProvider>
                  {children}
                  {/* </AnimatePresence> */}
                </ReduxProvider>
                <Footer/>
              </div>
            </div>
          {/* </ThemeContextProvider> */}
          </AuthProvider>

        </body>
      </html>
    </ReduxProvider>
  )
}
