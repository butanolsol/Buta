import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ButanolCoin | $BUTA | The Toxic Frog King of Crypto",
  description: "Join the Buta Gang! The most electrifying deflationary memecoin on Solana with our toxic frog king.",
    generator: 'Sam dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} animated-bg`}>{children}</body>
    </html>
  )
}
