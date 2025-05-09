import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundGrid } from "@/components/background-grid"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minhajul Islam Milon — Educator & Innovator",
  description:
    "Portfolio website of Minhajul Islam Milon, an educator and innovator dedicated to transforming education through technology and innovation.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-background to-background/80">
            <BackgroundGrid />
            <Navbar />
            <main className="relative z-10 flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
