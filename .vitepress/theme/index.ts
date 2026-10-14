import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style/var.css'
import './style/index.css'
import DownloadSection from './components/DownloadSection.vue'
import HeroScene from './components/HeroScene.vue'
import LangToggle from './components/LangToggle.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HeroScene),
      'home-features-after': () => h(DownloadSection),
      'nav-bar-title-after': () => h(LangToggle),
    })
  }
}
