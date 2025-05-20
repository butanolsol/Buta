"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Crown, Zap, Sparkles } from "lucide-react"

export function ToxicFrogKing() {
  const [blink, setBlink] = useState(false)
  const [tongue, setTongue] = useState(false)
  const [hop, setHop] = useState(false)
  const [sparkle, setSparkle] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Random hopping
    const hopInterval = setInterval(
      () => {
        setHop(true)
        setTimeout(() => setHop(false), 1000)
      },
      Math.random() * 10000 + 8000,
    )

    // Random sparkle
    const sparkleInterval = setInterval(
      () => {
        setSparkle(true)
        setTimeout(() => setSparkle(false), 2000)
      },
      Math.random() * 5000 + 3000,
    )

    return () => {
      clearInterval(hopInterval)
      clearInterval(sparkleInterval)
    }
  }, [])

  // Update the glow effects for better blending
  const handleClick = () => {
    setTongue(true)
    setTimeout(() => setTongue(false), 500)
    setHop(true)
    setTimeout(() => setHop(false), 1000)
    setSparkle(true)
    setTimeout(() => setSparkle(false), 2000)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-[400px] h-[400px] cursor-pointer transition-transform duration-300 ${hop ? "animate-super-hop" : ""}`}
      onClick={handleClick}
    >
      {/* Main frog image */}
      <div className="relative w-full h-full">
        <Image
          src="/butanol.jpg"
          alt="Butanol Frog King"
          width={400}
          height={400}
          className="frog-shadow"
        />
      </div>

      {/* Crown glow effect - enhanced */}
      <div className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] left-[50%] transform -translate-x-1/2 w-[40%] h-[20%] bg-gold opacity-40 rounded-full blur-xl animate-gold-pulse"></div>
      </div>

      {/* Blinking effect */}
      {blink && (
        <div className="absolute top-[30%] left-0 right-0 w-full flex justify-center pointer-events-none">
          <div className="w-[60%] flex justify-between">
            <div className="w-[40%] h-[5px] bg-deep-green rounded-full"></div>
            <div className="w-[40%] h-[5px] bg-deep-green rounded-full"></div>
          </div>
        </div>
      )}

      {/* Tongue effect */}
      {tongue && (
        <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 pointer-events-none">
          <div className="w-[10px] h-[30px] bg-toxic-pink rounded-b-full animate-tongue-flick"></div>
        </div>
      )}

      {/* Crown effect - enhanced */}
      <div className="absolute top-[5%] left-[50%] transform -translate-x-1/2 pointer-events-none">
        <Crown className="w-16 h-16 text-gold animate-gold-pulse" />
      </div>

      {/* Energy effects - enhanced */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/30 rounded-full animate-ripple"></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/20 rounded-full animate-ripple"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/10 rounded-full animate-ripple"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Sparkle effects */}
      {sparkle && (
        <>
          <div className="absolute top-[10%] right-[10%] pointer-events-none">
            <Sparkles className="w-8 h-8 text-gold animate-bounce gold-shadow" />
          </div>
          <div className="absolute bottom-[20%] left-[10%] pointer-events-none">
            <Sparkles className="w-6 h-6 text-gold animate-bounce gold-shadow" style={{ animationDelay: "0.2s" }} />
          </div>
          <div className="absolute top-[30%] left-[15%] pointer-events-none">
            <Sparkles className="w-5 h-5 text-gold animate-bounce gold-shadow" style={{ animationDelay: "0.4s" }} />
          </div>
        </>
      )}

      {/* Lightning effects - enhanced */}
      <div className="absolute -top-8 -right-8 pointer-events-none">
        <Zap className="w-16 h-16 text-neon-green animate-pulse-glow" />
      </div>
      <div className="absolute -bottom-4 -left-4 pointer-events-none">
        <Zap className="w-12 h-12 text-neon-green animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
      </div>

      {/* Interactive tooltip */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 text-neon-green px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Click me to see some magic!
      </div>
    </div>
  )
}
