<template>
  <span ref="el" class="animated-counter">{{ display }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{ value: number; suffix?: string; duration?: number }>()
const el = ref<HTMLElement | null>(null)
const display = ref('0')
let raf = 0

function animate() {
  if (!el.value) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const start = performance.now()
      const dur = props.duration ?? 1500
      const step = (now: number) => {
        const t = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        const current = Math.floor(eased * props.value)
        display.value = current + (props.suffix ?? '')
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
      observer.disconnect()
    }
  }, { threshold: 0.5 })
  observer.observe(el.value)
}

onMounted(animate)
onUnmounted(() => cancelAnimationFrame(raf))
</script>
