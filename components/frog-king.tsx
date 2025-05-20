"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function FrogKing({ className = "" }: { className?: string }) {
  const [blink, setBlink] = useState(false)
  const [tongue, setTongue] = useState(false)

  useEffect(() => {
    // Random blinking
    const blinkInterval = setInterval(
      () => {
        setBlink(true)
        setTimeout(() => setBlink(false), 200)
      },
      Math.random() * 3000 + 2000,
    )

    // Random tongue flick
    const tongueInterval = setInterval(
      () => {
        setTongue(true)
        setTimeout(() => setTongue(false), 500)
      },
      Math.random() * 8000 + 5000,
    )

    return () => {
      clearInterval(blinkInterval)
      clearInterval(tongueInterval)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Main frog image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K4bpgIGIFi8Vsy4Va0NIObFG5RmIS3.png"
        alt="Butanol Frog King"
        width={400}
        height={400}
        className="frog-shadow"
      />

      {/* Crown glow effect */}
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <div className="absolute top-[5%] left-[50%] transform -translate-x-1/2 w-[40%] h-[20%] bg-secondary opacity-20 rounded-full blur-xl animate-pulse-glow"></div>
      </div>

      {/* Blinking effect */}
      {blink && (
        <div className="absolute top-[30%] left-0 right-0 w-full flex justify-center">
          <div className="w-[60%] flex justify-between">
            <div className="w-[40%] h-[5px] bg-primary-dark rounded-full"></div>
            <div className="w-[40%] h-[5px] bg-primary-dark rounded-full"></div>
          </div>
        </div>
      )}

      {/* Tongue effect */}
      {tongue && (
        <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2">
          <div className="w-[10px] h-[30px] bg-red-500 rounded-b-full animate-tongue"></div>
        </div>
      )}

      {/* Chemical bubbles */}
      <div className="absolute -top-4 -right-4">
        <div className="w-12 h-12 bg-tertiary/20 rounded-full animate-float"></div>
      </div>
      <div className="absolute top-1/4 -left-6">
        <div className="w-8 h-8 bg-tertiary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      <div className="absolute bottom-1/4 -right-4">
        <div className="w-10 h-10 bg-tertiary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
    </div>
  )
}
