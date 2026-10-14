<template>
  <div class="custom-home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <div class="hero-inner">
        <div class="hero-tag"><span class="tag-dot"></span> ECO-SYSTEM ONLINE · 生态系统已就绪</div>
        <h1 class="hero-title">
          <span class="title-zh">朴门永续设计</span>
          <span class="title-en">PERMACULTURE</span>
        </h1>
        <p class="hero-sub">地球照顾 · 人类照顾 · 公平分享<br><span class="sub-en">Earth Care · People Care · Fair Share</span></p>
        <div class="hero-stats">
          <div class="stat"><span class="stat-num" ref="stat1">0</span><span class="stat-label">经典文献</span></div>
          <div class="stat-line"></div>
          <div class="stat"><span class="stat-num" ref="stat2">0</span><span class="stat-label">设计原则</span></div>
          <div class="stat-line"></div>
          <div class="stat"><span class="stat-num" ref="stat3">0</span><span class="stat-label">PDC课时</span></div>
        </div>
        <div class="hero-actions">
          <a href="#explore" class="btn-primary">进入知识库 →</a>
          <a href="#downloads" class="btn-ghost">下载文献</a>
        </div>
      </div>
      <div class="scroll-hint"><span>SCROLL</span><div class="scroll-line"></div></div>
    </section>
    <section class="principles" id="explore">
      <div class="section-head"><span class="section-num">01</span><h2>三大伦理 · CORE ETHICS</h2></div>
      <div class="ethic-cards">
        <div class="ethic-card" v-for="(e, i) in ethics" :key="i">
          <div class="ethic-icon">{{ e.icon }}</div>
          <h3>{{ e.title }}</h3>
          <p>{{ e.desc }}</p>
          <span class="ethic-code">{{ e.code }}</span>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="section-head"><span class="section-num">02</span><h2>知识矩阵 · KNOWLEDGE MATRIX</h2></div>
      <div class="feature-grid">
        <a v-for="(f, i) in features" :key="i" :href="f.link" class="feature-card">
          <div class="card-glow"></div>
          <span class="card-num">0{{ i + 1 }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <span class="card-arrow">→</span>
        </a>
      </div>
    </section>
    <section class="downloads" id="downloads">
      <div class="section-head"><span class="section-num">03</span><h2>文献库 · LIBRARY</h2></div>
      <div class="dl-grid">
        <a v-for="(d, i) in downloads" :key="i" :href="d.url" class="dl-card" :class="{ essential: d.essential }" download>
          <div class="dl-top"><span class="dl-name">{{ d.name }}</span><span class="dl-tag" v-if="d.essential">★</span></div>
          <span class="dl-meta">{{ d.author }} · {{ d.size }}</span>
        </a>
      </div>
    </section>
    <footer class="home-footer">
      <p>© 2026 朴门永续设计知识库 · CC BY-NC-SA 4.0</p>
      <p class="footer-sub">Based on the work of Bill Mollison & David Holmgren</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const stat1 = ref(null), stat2 = ref(null), stat3 = ref(null)
const ethics = [
  { title: '地球照顾', desc: 'Earth Care — 让所有生命系统继续繁衍', code: 'ETHIC-01', icon: '🌍' },
  { title: '人类照顾', desc: 'People Care — 让人们获得所需资源', code: 'ETHIC-02', icon: '🤝' },
  { title: '公平分享', desc: 'Fair Share — 设置消耗上限，返还盈余', code: 'ETHIC-03', icon: '⚖️' },
]
const features = [
  { title: '起源与历史', desc: '从 1970s 塔斯马尼亚到全球运动', link: '/00-foundations/01-history-origins' },
  { title: '12 设计原则', desc: 'Holmgren 系统阐述，从观察到边缘效应', link: '/00-foundations/03-principles' },
  { title: '设计方法论', desc: 'SADIMET · 扇区分析 · 分区规划', link: '/00-foundations/04-design-methodology' },
  { title: '学习路径', desc: '入门 → 进阶 → 高级', link: '/07-learning-paths/beginner' },
  { title: '术语词典', desc: '60+ 朴门术语中英对照', link: '/06-reference/glossary' },
  { title: '缺口追踪', desc: '知识体系持续更新', link: '/06-reference/gap-tracker' },
]
const B = 'https://raw.githubusercontent.com/520maodizhang/permaculture-resources/main/pdfs/'
const downloads = [
  { name: "Designers' Manual", author: 'Mollison 1988', size: '3.9M', essential: true, url: B+'Designers-Manual-Mollison-1988.pdf' },
  { name: 'PDC Complete 1981', author: 'Mollison', size: '6.1M', essential: true, url: B+'PDC-ALL-1981-Mollison.pdf' },
  { name: 'Permaculture Two', author: 'Mollison 1979', size: '3.0M', essential: true, url: B+'Permaculture-Two-Mollison-1979.pdf' },
  { name: 'Introduction to PC', author: 'Mollison & Slay', size: '2.6M', essential: true, url: B+'Introduction-to-Permaculture-Mollison.pdf' },
  { name: 'Essence of PC', author: 'Holmgren 2002', size: '4.7M', essential: true, url: B+'Essence-of-Permaculture-Holmgren-EN.pdf' },
  { name: 'One-Straw Revolution', author: 'Fukuoka 1978', size: '2.1M', essential: true, url: B+'One-Straw-Revolution-Fukuoka.pdf' },
  { name: 'Future Scenarios', author: 'Holmgren 2009', size: '1.3M', essential: false, url: B+'Future-Scenarios-Holmgren.pdf' },
  { name: 'Mycelium Running', author: 'Stamets 2005', size: '3.5M', essential: false, url: B+'Mycelium-Running-Stamets.pdf' },
  { name: 'Silent Spring', author: 'Carson 1962', size: '968K', essential: false, url: B+'Silent-Spring-Rachel-Carson-1962.pdf' },
  { name: 'Tree Crops', author: 'Smith 1929', size: '11M', essential: false, url: B+'Tree-Crops-Permanent-Agriculture-1929-Smith.pdf' },
  { name: 'Natural Way of Farming', author: 'Fukuoka 1985', size: '2.0M', essential: false, url: B+'Natural-Way-of-Farming-Fukuoka.pdf' },
  { name: 'PC Design Guide', author: 'Aranya 2012', size: '7.2M', essential: false, url: B+'Permaculture-Design-StepByStep-Guide.pdf' },
]
onMounted(() => { setTimeout(animateStats, 600) })
function animateStats() {
  const targets = [33, 12, 72], refs = [stat1.value, stat2.value, stat3.value]
  refs.forEach((el, i) => { if (!el) return; let c = 0; const s = targets[i]/40; const t = setInterval(() => { c += s; if (c >= targets[i]) { c = targets[i]; clearInterval(t) } el.textContent = Math.floor(c) }, 30) })
}
</script>
<style scoped>
.custom-home { font-family: -apple-system, 'Segoe UI', 'Noto Sans SC', sans-serif; min-height: 100vh; background: #0a0f0a; color: #e8f5e9; overflow-x: hidden; }

/* Hero */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 30%, #1a3a2a 0%, #0a0f0a 60%), radial-gradient(ellipse at 30% 80%, #0d1f15 0%, transparent 50%); }
.hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px); background-size: 40px 40px; }
.hero-inner { position: relative; z-index: 2; text-align: center; padding: 0 24px; }
.hero-tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border: 1px solid rgba(0,255,136,0.3); border-radius: 100px; font-size: 12px; color: #00ff88; margin-bottom: 32px; font-family: 'SF Mono', monospace; letter-spacing: 1px; }
.tag-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
.hero-title { margin: 0 0 24px; }
.title-zh { display: block; font-size: clamp(48px, 10vw, 96px); font-weight: 900; background: linear-gradient(135deg, #00ff88, #c9d836, #f59e0b); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 0.05em; line-height: 1.1; }
.title-en { display: block; font-size: clamp(16px, 3vw, 28px); font-weight: 300; color: rgba(0,255,136,0.4); letter-spacing: 0.8em; margin-top: 8px; font-family: 'SF Mono', monospace; }
.hero-sub { font-size: 18px; color: rgba(232,245,233,0.7); line-height: 1.8; margin-bottom: 40px; }
.sub-en { font-size: 14px; color: rgba(0,255,136,0.5); font-family: monospace; letter-spacing: 1px; }
.hero-stats { display: flex; align-items: center; justify-content: center; gap: 32px; margin-bottom: 40px; }
.stat { text-align: center; }
.stat-num { display: block; font-size: 48px; font-weight: 900; color: #00ff88; font-family: 'SF Mono', monospace; }
.stat-label { font-size: 13px; color: rgba(232,245,233,0.5); letter-spacing: 2px; }
.stat-line { width: 1px; height: 40px; background: rgba(0,255,136,0.2); }
.hero-actions { display: flex; gap: 16px; justify-content: center; }
.btn-primary { padding: 14px 32px; border-radius: 100px; text-decoration: none; background: linear-gradient(135deg, #00ff88, #4caf50); color: #0a0f0a; font-weight: 700; font-size: 15px; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 0 30px rgba(0,255,136,0.3); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 0 50px rgba(0,255,136,0.5); }
.btn-ghost { padding: 14px 32px; border-radius: 100px; text-decoration: none; border: 1px solid rgba(0,255,136,0.3); color: #00ff88; font-weight: 600; font-size: 15px; transition: all 0.3s; }
.btn-ghost:hover { background: rgba(0,255,136,0.1); border-color: #00ff88; }
.scroll-hint { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: rgba(0,255,136,0.4); font-size: 11px; letter-spacing: 2px; font-family: monospace; }
.scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(0,255,136,0.4), transparent); animation: scrollLine 2s infinite; }
@keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }

/* Sections */
.section-head { display: flex; align-items: center; gap: 16px; margin-bottom: 48px; }
.section-num { font-family: 'SF Mono', monospace; font-size: 14px; color: #00ff88; opacity: 0.6; }
.section-head h2 { font-size: clamp(24px, 4vw, 36px); font-weight: 800; color: #e8f5e9; }

/* Principles */
.principles { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.ethic-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.ethic-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(0,255,136,0.1); border-radius: 16px; padding: 32px; transition: all 0.3s; position: relative; overflow: hidden; }
.ethic-card:hover { border-color: rgba(0,255,136,0.4); transform: translateY(-4px); background: rgba(0,255,136,0.05); }
.ethic-icon { font-size: 40px; margin-bottom: 16px; }
.ethic-card h3 { font-size: 22px; margin-bottom: 8px; color: #e8f5e9; }
.ethic-card p { font-size: 14px; color: rgba(232,245,233,0.6); line-height: 1.6; }
.ethic-code { position: absolute; top: 16px; right: 16px; font-family: monospace; font-size: 11px; color: rgba(0,255,136,0.4); }

/* Features */
.features { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.feature-card { position: relative; display: block; padding: 28px; border: 1px solid rgba(0,255,136,0.1); border-radius: 16px; text-decoration: none; color: inherit; transition: all 0.3s; overflow: hidden; background: rgba(255,255,255,0.02); }
.feature-card:hover { border-color: rgba(0,255,136,0.4); transform: translateY(-4px); }
.card-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(0,255,136,0.08), transparent 60%); opacity: 0; transition: opacity 0.3s; }
.feature-card:hover .card-glow { opacity: 1; }
.card-num { font-family: monospace; font-size: 12px; color: rgba(0,255,136,0.5); }
.feature-card h3 { font-size: 18px; margin: 8px 0 6px; color: #e8f5e9; }
.feature-card p { font-size: 13px; color: rgba(232,245,233,0.5); line-height: 1.5; }
.card-arrow { position: absolute; bottom: 20px; right: 20px; color: #00ff88; opacity: 0; transition: opacity 0.3s; }
.feature-card:hover .card-arrow { opacity: 1; }

/* Downloads */
.downloads { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.dl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
.dl-card { display: block; padding: 16px 20px; border: 1px solid rgba(0,255,136,0.1); border-radius: 12px; text-decoration: none; color: inherit; transition: all 0.2s; background: rgba(255,255,255,0.02); }
.dl-card:hover { border-color: rgba(0,255,136,0.3); background: rgba(0,255,136,0.04); }
.dl-card.essential { border-color: rgba(0,255,136,0.25); }
.dl-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.dl-name { font-size: 14px; font-weight: 600; color: #e8f5e9; }
.dl-tag { color: #f59e0b; font-size: 14px; }
.dl-meta { font-size: 12px; color: rgba(232,245,233,0.4); font-family: monospace; }

/* Footer */
.home-footer { text-align: center; padding: 48px 24px; border-top: 1px solid rgba(0,255,136,0.1); }
.home-footer p { font-size: 13px; color: rgba(232,245,233,0.4); margin: 4px 0; }
.footer-sub { font-size: 11px !important; color: rgba(0,255,136,0.3) !important; }
</style>
