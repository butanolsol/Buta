"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Atom, Crown, Zap, Coins } from "lucide-react"

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K4bpgIGIFi8Vsy4Va0NIObFG5RmIS3.png",
    alt: "Butanol Frog King",
    icon: <Crown className="w-8 h-8 text-secondary" />,
    title: "The Frog King",
    description: "Ruler of the Butanol ecosystem and leader of the Buta Gang",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ipgcKN6zan47okBXesw4Nfx02ZwKm5.png",
    alt: "Butanol Super Frog",
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Super Butan",
    description: "Powered by chemical energy and ready to take on the crypto world",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PsU8fXJGlQGuErvjDtnUgftfEIC5wJ.png",
    alt: "Butanol Wealthy Frog",
    icon: <Coins className="w-8 h-8 text-secondary" />,
    title: "Wealthy Butan",
    description: "Demonstrating the wealth-building potential of $BUTA",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Butanol Chemical Structure",
    icon: <Atom className="w-8 h-8 text-tertiary" />,
    title: "Chemical Inspiration",
    description: "The molecular structure behind our memecoin revolution",
  },
]

export function ButanolSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
            <div className="flex justify-center mb-2">{slide.icon}</div>
            <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
            <p className="text-sm opacity-90">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-secondary w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
