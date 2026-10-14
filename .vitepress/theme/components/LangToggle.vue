<template>
  <a class="lang-toggle" :href="targetUrl" @click.prevent="go">
    <span class="lang-current">{{ current }}</span>
    <span class="lang-sep">/</span>
    <span class="lang-other">{{ other }}</span>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const current = ref('中')
const other = ref('EN')
const targetUrl = ref('/en/')

function detectLang() {
  const path = window.location.pathname
  if (path.startsWith('/en')) {
    current.value = 'EN'
    other.value = '中'
    // target: same page but without /en prefix
    targetUrl.value = path.replace(/^\/en/, '') || '/'
  } else {
    current.value = '中'
    other.value = 'EN'
    // target: same page but with /en prefix (only works for pages that have en versions)
    // For the homepage, go to /en/
    // For other pages, stay on the same page (content is shared)
    if (path === '/' || path === '') {
      targetUrl.value = '/en/'
    } else {
      // Content pages are shared — just toggle the locale root
      targetUrl.value = '/en/'
    }
  }
}

function go() {
  window.location.href = targetUrl.value
}

onMounted(() => {
  detectLang()
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
  text-decoration: none;
  margin-left: 8px;
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
