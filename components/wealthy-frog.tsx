"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Coins, DollarSign } from "lucide-react"

export function WealthyFrog() {
  const [coinCount, setCoinCount] = useState(0)
  const [showCoin, setShowCoin] = useState(false)
  const [coinPosition, setCoinPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Increment coin count periodically
    const coinInterval = setInterval(() => {
      setCoinCount((prev) => prev + 1)
    }, 2000)

    // Show random coin animations
    const showCoinInterval = setInterval(() => {
      setCoinPosition({
        x: Math.random() * 80 - 40, // -40 to 40
        y: Math.random() * 80 - 40, // -40 to 40
      })
      setShowCoin(true)
      setTimeout(() => setShowCoin(false), 1500)
    }, 3000)

    return () => {
      clearInterval(coinInterval)
      clearInterval(showCoinInterval)
    }
  }, [])

  return (
    <div className="relative w-[400px] h-[400px]">
      {/* Main wealthy frog image */}
      <div className="relative w-full h-full">
        <Image
          src="/buta-crown.jpg"
          alt="Butanol Wealthy Frog"
          width={400}
          height={400}
          className="gold-shadow"
        />
      </div>

      {/* Coin counter */}
      <div className="absolute top-4 right-4 bg-black/70 text-gold px-3 py-1 rounded-full flex items-center gap-2">
        <Coins className="w-4 h-4" />
        <span className="font-bold">{coinCount.toLocaleString()}</span>
      </div>

      {/* Animated coins */}
      {showCoin && (
        <div
          className="absolute w-10 h-10 bg-gold rounded-full flex items-center justify-center animate-float"
          style={{
            left: `calc(50% + ${coinPosition.x}px)`,
            top: `calc(50% + ${coinPosition.y}px)`,
          }}
        >
          <DollarSign className="w-6 h-6 text-black" />
        </div>
      )}

      {/* Gold effects */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gold/20 rounded-full animate-ripple"></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gold/15 rounded-full animate-ripple"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gold/10 rounded-full animate-ripple"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Coin shower effect */}
      <div className="absolute -top-8 -right-8 animate-gold-pulse">
        <Coins className="w-16 h-16 text-gold" />
      </div>
      <div className="absolute -bottom-4 -left-4 animate-gold-pulse" style={{ animationDelay: "0.7s" }}>
        <Coins className="w-12 h-12 text-gold" />
      </div>
    </div>
  )
}
