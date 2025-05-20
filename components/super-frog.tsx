"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Zap, Flame } from "lucide-react"

export function SuperFrog() {
  const [isFlying, setIsFlying] = useState(false)
  const [powerLevel, setPowerLevel] = useState(0)

  useEffect(() => {
    const flyInterval = setInterval(() => {
      setIsFlying(true)
      setTimeout(() => setIsFlying(false), 2000)
    }, Math.random() * 8000 + 5000)

    const powerInterval = setInterval(() => {
      setPowerLevel((prev) => (prev < 100 ? prev + 1 : 0))
    }, 100)

    return () => {
      clearInterval(flyInterval)
      clearInterval(powerInterval)
    }
  }, [])

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square group mx-auto">
      {/* Main superhero frog image */}
      <div
        className={`relative w-full h-full transition-transform duration-500 ${isFlying ? "translate-y-[-30px]" : ""}`}
      >
        <Image
          src="/buta10.jpg"
          alt="Butanol Super Frog"
          fill
          className="object-contain frog-shadow"
        />
      </div>

      {/* Energy aura */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute inset-0 bg-neon-green/20 rounded-full animate-ripple"></div>
        <div
          className="absolute inset-0 bg-neon-green/15 rounded-full animate-ripple"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute inset-0 bg-neon-green/10 rounded-full animate-ripple"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Lightning effects */}
      <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8">
        <Zap className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-neon-green animate-pulse-glow" />
      </div>
      <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -left-2 sm:-left-3 md:-left-4">
        <Zap
          className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-neon-green animate-pulse-glow"
          style={{ animationDelay: "0.7s" }}
        />
      </div>

      {/* Flame effects */}
      <div className="absolute top-1/4 -right-2 sm:-right-3 md:-right-4">
        <Flame className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-toxic-pink animate-float" />
      </div>
      <div className="absolute bottom-1/4 -left-2 sm:-left-3 md:-left-4">
        <Flame
          className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-toxic-pink animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Power level indicator */}
      <div className="absolute -bottom-16 left-0 right-0 mx-auto w-[80%] sm:w-3/4">
        <div className="h-3 bg-black/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-neon-green transition-all duration-100"
            style={{ width: `${powerLevel}%` }}
          ></div>
        </div>
        <div className="text-center text-neon-green text-xs mt-1">POWER LEVEL</div>
      </div>
    </div>
  )
}
