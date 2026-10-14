<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let raf = 0
let particles: Particle[] = []

interface Particle {
  x: number; y: number; size: number
  rotation: number; rotSpeed: number
  swayAmp: number; swayFreq: number; swayOffset: number
  fallSpeed: number; color: string; opacity: number
}

const colors = ['#4caf50', '#8bc34a', '#c9d836', '#66bb6a', '#9ccc65', '#aed581']

function createParticle(w: number, h: number, fromTop = false): Particle {
  return {
    x: Math.random() * w,
    y: fromTop ? -30 : Math.random() * h,
    size: 8 + Math.random() * 22,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    swayAmp: 20 + Math.random() * 40,
    swayFreq: 0.005 + Math.random() * 0.01,
    swayOffset: Math.random() * Math.PI * 2,
    fallSpeed: 0.3 + Math.random() * 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.08 + Math.random() * 0.2,
  }
}

function drawLeaf(ctx: CanvasRenderingContext2D, p: Particle, time: number) {
  ctx.save()
  const sway = Math.sin(time * p.swayFreq + p.swayOffset) * p.swayAmp
  ctx.translate(p.x + sway, p.y)
  ctx.rotate(p.rotation + Math.sin(time * 0.001 + p.swayOffset) * 0.3)
  ctx.globalAlpha = p.opacity
  ctx.strokeStyle = p.color
  ctx.lineWidth = 1.2
  ctx.beginPath()
  // leaf shape
  const s = p.size
  ctx.moveTo(0, -s)
  ctx.quadraticCurveTo(s * 0.6, -s * 0.3, s * 0.3, s * 0.5)
  ctx.quadraticCurveTo(0, s, -s * 0.3, s * 0.5)
  ctx.quadraticCurveTo(-s * 0.6, -s * 0.3, 0, -s)
  ctx.stroke()
  // vein
  ctx.beginPath()
  ctx.moveTo(0, -s * 0.8)
  ctx.lineTo(0, s * 0.8)
  ctx.stroke()
  ctx.restore()
}

function animate(time: number) {
  if (!ctx || !canvas.value) return
  const w = canvas.value.width
  const h = canvas.value.height
  ctx.clearRect(0, 0, w, h)
  for (const p of particles) {
    drawLeaf(ctx, p, time)
    p.y += p.fallSpeed
    p.rotation += p.rotSpeed
    if (p.y > h + 40) {
      Object.assign(p, createParticle(w, h, true))
    }
  }
  raf = requestAnimationFrame(animate)
}

function resize() {
  if (!canvas.value) return
  const parent = canvas.value.parentElement
  if (!parent) return
  const rect = parent.getBoundingClientRect()
  canvas.value.width = rect.width
  canvas.value.height = rect.height
  const count = Math.floor(rect.width * rect.height / 18000)
  particles = Array.from({ length: count }, () => createParticle(rect.width, rect.height))
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  raf = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
