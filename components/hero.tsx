"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      connections: number[]
    }> = []

    const particleCount = 60
    const connectionDistance = 150
    const mouseRadius = 200

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        connections: [],
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.fillStyle = "rgba(9, 9, 11, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse repulsion
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius
          particle.vx -= (dx / dist) * force * 0.02
          particle.vy -= (dy / dist) * force * 0.02
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(161, 161, 170, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const connDx = particle.x - other.x
          const connDy = particle.y - other.y
          const connDist = Math.sqrt(connDx * connDx + connDy * connDy)

          if (connDist < connectionDistance) {
            const opacity = (1 - connDist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(161, 161, 170, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    // Initial clear
    ctx.fillStyle = "rgb(9, 9, 11)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Large rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="600" height="600" className="animate-[spin_60s_linear_infinite] opacity-[0.03]">
            <circle cx="300" cy="300" r="280" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="10 5" />
            <circle cx="300" cy="300" r="120" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Floating architectural elements */}
        <div className="absolute top-[15%] left-[10%] animate-float opacity-20">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <rect x="10" y="10" width="60" height="60" fill="none" stroke="white" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="70" y2="70" stroke="white" strokeWidth="0.5" />
            <line x1="70" y1="10" x2="10" y2="70" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="absolute top-[25%] right-[15%] animate-float-delayed opacity-15">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <polygon points="30,5 55,50 5,50" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] left-[20%] animate-float-slow opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="absolute bottom-[30%] right-[10%] animate-float opacity-15">
          <svg width="70" height="70" viewBox="0 0 70 70">
            <rect
              x="15"
              y="15"
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              transform="rotate(45 35 35)"
            />
          </svg>
        </div>

        {/* Orbiting dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit">
            <div className="w-2 h-2 rounded-full bg-zinc-400/30" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit-reverse">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500/20" />
          </div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-slate-800/20 to-transparent blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-zinc-700/10 to-transparent blur-3xl animate-pulse-glow delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 mb-4 sm:mb-6 font-mono">
            Civil Engineering · Systems Design · Automation
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-zinc-100 mb-6 sm:mb-8 opacity-0 animate-fade-in-up delay-200">
          Sanford Dinkins, PE
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-4 sm:mb-6 font-light opacity-0 animate-fade-in-up delay-300">
          Engineering solutions across physical and digital systems.
        </p>

        <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed opacity-0 animate-fade-in-up delay-400 px-4">
          Licensed Professional Engineer specializing in site civil land development, with parallel experience designing
          scalable digital tools, automation systems, and engineering workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up delay-500 px-4">
          <Button
            onClick={() => scrollToSection("experience")}
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm font-medium tracking-wide bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
          >
            View Experience
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm font-medium tracking-wide text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
          >
            Explore Projects
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-700 hidden sm:block">
          <div className="w-6 h-10 rounded-full border border-zinc-700 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-zinc-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
