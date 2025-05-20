"use client"

import { useEffect, useRef } from "react"

export function RotatingToken() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    let rotation = 0
    const rotationSpeed = 0.01

    const image = new Image()
    image.src = "/buta-coin.png" // Make sure the image is in the `public/` folder

    image.onload = () => {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        rotation += rotationSpeed

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation)
        ctx.drawImage(image, -100, -100, 200, 200) // Adjust as needed
        ctx.restore()

        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-[300px] h-[300px]" />
}
