import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { MenuProvider } from "./context/MenuContext"
import "./globals.css"

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "John Tönnäng | Developer",
  description: "Portfolio for John",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MenuProvider>
      <html lang="en">
        <body className={`${montserrat.className} bg-background-light`}>
          {children}
        </body>
      </html>
    </MenuProvider>
  )
}
