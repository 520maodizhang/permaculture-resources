<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AnimatedCounter from './AnimatedCounter.vue'

const repoBase = 'https://raw.githubusercontent.com/520maodizhang/permaculture-resources/main/pdfs/'

const pdfs = [
  { title: "Designers' Manual", author: 'Mollison 1988', size: '3.9M', tag: '圣经', essential: true, file: 'Designers-Manual-Mollison-1988.pdf' },
  { title: 'PDC Complete 1981', author: 'Mollison', size: '6.1M', tag: '圣经', essential: true, file: 'PDC-ALL-1981-Mollison.pdf' },
  { title: 'Permaculture Two', author: 'Mollison 1979', size: '3.0M', tag: '圣经', essential: true, file: 'Permaculture-Two-Mollison-1979.pdf' },
  { title: 'Introduction to PC', author: 'Mollison & Slay', size: '2.6M', tag: '入门', essential: true, file: 'Introduction-to-Permaculture-Mollison.pdf' },
  { title: 'Essence of PC', author: 'Holmgren 2002', size: '4.7M', tag: '入门', essential: true, file: 'Essence-of-Permaculture-Holmgren-EN.pdf' },
  { title: 'One-Straw Revolution', author: 'Fukuoka 1978', size: '2.1M', tag: '源流', essential: true, file: 'One-Straw-Revolution-Fukuoka.pdf' },
  { title: 'Future Scenarios', author: 'Holmgren 2009', size: '1.3M', tag: '进阶', essential: false, file: 'Future-Scenarios-Holmgren.pdf' },
  { title: 'Mycelium Running', author: 'Stamets 2005', size: '3.5M', tag: '菌丝', essential: false, file: 'Mycelium-Running-Stamets.pdf' },
  { title: 'Silent Spring', author: 'Carson 1962', size: '968K', tag: '源流', essential: false, file: 'Silent-Spring-Rachel-Carson-1962.pdf' },
  { title: 'Tree Crops', author: 'Smith 1929', size: '11M', tag: '源流', essential: false, file: 'Tree-Crops-Permanent-Agriculture-1929-Smith.pdf' },
  { title: 'Natural Way of Farming', author: 'Fukuoka 1985', size: '2.0M', tag: '源流', essential: false, file: 'Natural-Way-of-Farming-Fukuoka.pdf' },
  { title: 'PC Design Guide', author: 'Aranya 2012', size: '7.2M', tag: '实践', essential: false, file: 'Permaculture-Design-StepByStep-Guide.pdf' },
  { title: 'Complete Self-Sufficiency', author: 'Seymour', size: '1.5M', tag: '实践', essential: false, file: 'Complete-Book-Self-Sufficiency-Seymour.pdf' },
  { title: 'Spaceship Earth', author: 'Fuller 1969', size: '667K', tag: '系统', essential: false, file: 'Operating-Manual-Spaceship-Earth-Fuller.pdf' },
  { title: 'Owner-Built Homestead', author: '—', size: '2.5M', tag: '实践', essential: false, file: 'Owner-Built-Homestead.pdf' },
  { title: "Omnivore's Dilemma", author: 'Pollan 2006', size: '1.5M', tag: '食系', essential: false, file: 'Omnivores-Dilemma-Pollan.pdf' },
  { title: 'Forest Farming', author: 'Hart 2007', size: '423K', tag: '森林', essential: false, file: 'Forest-Farming-Bostuin-Hart-2007.pdf' },
  { title: 'Forest Gardening', author: '—', size: '290K', tag: '森林', essential: false, file: 'Forest-Gardening.pdf' },
  { title: 'Fruiticulture', author: '— 2018', size: '11M', tag: '果树', essential: false, file: 'Fruiticulture-2018.pdf' },
  { title: 'Vegetarian Myth', author: 'Keith 2009', size: '1.1M', tag: '批判', essential: false, file: 'Vegetarian-Myth.pdf' },
  { title: 'Guerilla Gardening', author: '—', size: '864K', tag: '城市', essential: false, file: 'Guerilla-Gardening-Urban-Permaculture.pdf' },
  { title: 'Another Kind of Garden', author: 'Jean Pain', size: '1008K', tag: '堆肥', essential: false, file: 'Another-Kind-Garden-Jean-Pain.pdf' },
  { title: 'Powerdown & PC', author: '—', size: '1.2M', tag: '能源', essential: false, file: 'Powerdown-Permaculture.pdf' },
  { title: "PC Facilitator's Handbook", author: '—', size: '1.1M', tag: '教学', essential: false, file: 'Permaculture-Facilitators-Handbook.pdf' },
  { title: 'PC Reference Book', author: '—', size: '2.1M', tag: '参考', essential: false, file: 'Permaculture-Reference-Book.pdf' },
  { title: "PC Beginner's Guide", author: '—', size: '1.9M', tag: '入门', essential: false, file: 'Permaculture-Beginners-Guide.pdf' },
  { title: 'PC Sustainable Farming', author: '—', size: '578K', tag: '实践', essential: false, file: 'Permaculture-Sustainable-Farming.pdf' },
  { title: 'Road Back to Nature', author: 'Fukuoka 1987', size: '2.4M', tag: '源流', essential: false, file: 'The-Road-Back-To-Nature-Fukuoka.pdf' },
  { title: 'What is Permaculture', author: '—', size: '512K', tag: '入门', essential: false, file: 'whatispermaculture.pdf' },
  { title: 'From Agri to PC', author: '—', size: '448K', tag: '转型', essential: false, file: 'From-Agriculture-to-Permaculture.pdf' },
  { title: 'PC in Humid Landscapes', author: 'Mollison', size: '418K', tag: '实践', essential: false, file: 'Permaculture-in-Humid-Landscapes.pdf' },
  { title: 'Living Lovingly', author: '—', size: '355K', tag: '伦理', essential: false, file: 'livinglovingly.pdf' },
  { title: 'Horticultural Ideas', author: '—', size: '248K', tag: '园艺', essential: false, file: 'hortideas.pdf' },
]

// 3D tilt + spotlight on mouse move
function onCardMove(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rx = ((y - cy) / cy) * -6
  const ry = ((x - cx) / cx) * 6
  card.style.setProperty('--rx', rx + 'deg')
  card.style.setProperty('--ry', ry + 'deg')
  card.style.setProperty('--mx', x + 'px')
  card.style.setProperty('--my', y + 'px')
}
function onCardLeave(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}

// scroll reveal
const sectionRef = ref<HTMLElement | null>(null)
onMounted(() => {
  if (!sectionRef.value) return
  const cards = sectionRef.value.querySelectorAll('.book-card')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  cards.forEach((c) => obs.observe(c))
})
</script>

<template>
  <section ref="sectionRef" class="download-section">
    <div class="download-header">
      <h2 class="download-title">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-6px;margin-right:8px">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        文献下载
      </h2>
      <p class="download-subtitle">33 本朴门永续设计经典著作 PDF 全文 · 点击卡片直接下载</p>
    </div>

    <div class="download-stats">
      <div class="download-stat">
        <div class="stat-num"><AnimatedCounter :value="33" /></div>
        <div class="stat-label">本 PDF 文献</div>
      </div>
      <div class="download-stat">
        <div class="stat-num"><AnimatedCounter :value="80" suffix="MB" /></div>
        <div class="stat-label">知识库总量</div>
      </div>
      <div class="download-stat">
        <div class="stat-num"><AnimatedCounter :value="6" /></div>
        <div class="stat-label">本核心圣经</div>
      </div>
    </div>

    <div class="book-grid">
      <a
        v-for="book in pdfs"
        :key="book.title"
        :href="repoBase + book.file"
        :download="book.file"
        class="book-card"
        target="_blank"
        rel="noopener"
        @mousemove="onCardMove"
        @mouseleave="onCardLeave"
      >
        <div class="book-spine" :style="book.essential ? 'background: linear-gradient(180deg, #d32f2f, #ff6b6b)' : ''"></div>
        <div class="book-info">
          <div class="book-title">{{ book.title }}</div>
          <div class="book-author">{{ book.author }} · {{ book.size }}</div>
          <div class="book-meta">
            <span class="book-badge" :class="{ essential: book.essential }">{{ book.tag }}</span>
            <span v-if="book.essential" class="book-badge essential">核心</span>
          </div>
        </div>
        <div class="download-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>
      </a>
    </div>

    <div class="download-cta">
      <a href="/01-core-texts/" class="cta-button">
        查看完整文献清单
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-3px;margin-left:6px">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  </section>
</template>
