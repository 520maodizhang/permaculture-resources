<template>
  <button class="lang-toggle" @click="toggle">
    <span class="lang-current">{{ current }}</span>
    <span class="lang-sep">/</span>
    <span class="lang-other">{{ other }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const current = ref('中')
const other = ref('EN')

function toggle() {
  const tmp = current.value
  current.value = other.value
  other.value = tmp
  document.documentElement.lang = current.value === '中' ? 'zh-CN' : 'en'
  document.documentElement.classList.toggle('lang-en')
}

onMounted(() => {
  document.documentElement.lang = 'zh-CN'
})
</script>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  font-family: 'Inter', monospace;
}
.lang-toggle:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.15);
}
.lang-current { color: var(--vp-c-brand-1); }
.lang-sep { opacity: 0.3; }
.lang-other { opacity: 0.5; }
</style>
