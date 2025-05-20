"use client"

import { useEffect, useRef } from "react"

export function ButanolMolecule({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define the butanol molecule structure (simplified)
    const atoms = [
      { x: canvas.width / 2, y: canvas.height / 2, radius: 15, color: "#FF9800", label: "C" }, // Carbon
      { x: canvas.width / 2 - 40, y: canvas.height / 2, radius: 15, color: "#FF9800", label: "C" }, // Carbon
      { x: canvas.width / 2 - 80, y: canvas.height / 2, radius: 15, color: "#FF9800", label: "C" }, // Carbon
      { x: canvas.width / 2 - 120, y: canvas.height / 2, radius: 15, color: "#FF9800", label: "C" }, // Carbon
      { x: canvas.width / 2, y: canvas.height / 2 - 40, radius: 12, color: "#E53935", label: "O" }, // Oxygen
      { x: canvas.width / 2 + 30, y: canvas.height / 2 - 10, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 + 30, y: canvas.height / 2 + 10, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 40, y: canvas.height / 2 - 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 40, y: canvas.height / 2 + 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 80, y: canvas.height / 2 - 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 80, y: canvas.height / 2 + 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 120, y: canvas.height / 2 - 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 120, y: canvas.height / 2 + 30, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2 - 120, y: canvas.height / 2 - 10, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
      { x: canvas.width / 2, y: canvas.height / 2 - 70, radius: 8, color: "#FFFFFF", label: "H" }, // Hydrogen
    ]

    // Define bonds between atoms
    const bonds = [
      { from: 0, to: 1 }, // C-C
      { from: 1, to: 2 }, // C-C
      { from: 2, to: 3 }, // C-C
      { from: 0, to: 4 }, // C-O
      { from: 0, to: 5 }, // C-H
      { from: 0, to: 6 }, // C-H
      { from: 1, to: 7 }, // C-H
      { from: 1, to: 8 }, // C-H
      { from: 2, to: 9 }, // C-H
      { from: 2, to: 10 }, // C-H
      { from: 3, to: 11 }, // C-H
      { from: 3, to: 12 }, // C-H
      { from: 3, to: 13 }, // C-H
      { from: 4, to: 14 }, // O-H
    ]

    // Animation variables
    let angle = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Rotate the molecule
      const centerX = canvas.width / 2 - 60
      const centerY = canvas.height / 2
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(angle)
      ctx.translate(-centerX, -centerY)

      // Draw bonds
      ctx.lineWidth = 3
      bonds.forEach((bond) => {
        const from = atoms[bond.from]
        const to = atoms[bond.to]
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = "#888888"
        ctx.stroke()
      })

      // Draw atoms
      atoms.forEach((atom) => {
        ctx.beginPath()
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2)
        ctx.fillStyle = atom.color
        ctx.fill()
        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw atom label
        ctx.fillStyle = atom.color === "#FFFFFF" ? "#000000" : "#FFFFFF"
        ctx.font = "bold 12px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(atom.label, atom.x, atom.y)
      })

      ctx.restore()

      // Update rotation angle
      angle += 0.002
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
