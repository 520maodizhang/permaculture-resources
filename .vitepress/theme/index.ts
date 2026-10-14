import DefaultTheme from 'vitepress/theme'
import { h, defineComponent } from 'vue'
import { useRoute } from 'vitepress'
import './style/index.css'
import './style/var.css'
import CustomHome from './components/CustomHome.vue'
import LangToggle from './components/LangToggle.vue'

const LayoutWrapper = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      if (route.path === '/') {
        return h(CustomHome)
      }
      return h(DefaultTheme.Layout, null, {
        'nav-bar-title-after': () => h(LangToggle),
      })
    }
  }
})

export default {
  extends: DefaultTheme,
  Layout: LayoutWrapper,
}
