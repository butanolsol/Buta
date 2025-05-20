"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Crown, Zap, Coins, Atom } from "lucide-react"

const slides = [
  {
    src: "/buta5.jpg",
    alt: "Butanol Frog King",
    icon: <Crown className="w-8 h-8 text-gold" />,
    title: "The Frog King",
    description: "Ruler of the Butanol ecosystem and leader of the Buta Gang",
    bgClass: "bg-deep-green",
  },
  {
    src: "/buta1.jpg",
    alt: "Butanol Super Frog",
    icon: <Zap className="w-8 h-8 text-neon-green" />,
    title: "Super Butan",
    description: "Powered by chemical energy and ready to take on the crypto world",
    bgClass: "bg-swamp-green",
  },
  {
    src: "/buta3.jpg",
    alt: "Butanol Wealthy Frog",
    icon: <Coins className="w-8 h-8 text-gold" />,
    title: "Wealthy Butan",
    description: "Demonstrating the wealth-building potential of $BUTA",
    bgClass: "bg-deep-green",
  },
  {
    src: "/buta4.jpg",
    alt: "Butanol Chemical Structure",
    icon: <Atom className="w-8 h-8 text-bright-blue" />,
    title: "Chemical Inspiration",
    description: "The molecular structure behind our memecoin revolution",
    bgClass: "bg-swamp-green",
  },
]

export function ToxicSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl glass neon-box">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentSlide
              ? isTransitioning
                ? "opacity-0 scale-110"
                : "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className={`absolute inset-0 ${slide.bgClass} opacity-90`}></div>
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            className="mix-blend-luminosity opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
            <div className="flex justify-center mb-2 animate-bounce">{slide.icon}</div>
            <h3 className="text-2xl font-bold mb-1 neon-text">{slide.title}</h3>
            <p className="text-sm opacity-90">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-neon-green w-8 animate-pulse-glow" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
