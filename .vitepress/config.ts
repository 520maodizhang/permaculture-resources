import { defineConfig } from 'vitepress'

const navZh = [
  { text: '首页', link: '/' },
  { text: '基础', items: [
    { text: '起源与历史', link: '/00-foundations/01-history-origins' },
    { text: '三大伦理', link: '/00-foundations/02-ethics' },
    { text: '设计原则', link: '/00-foundations/03-principles' },
    { text: '设计方法论', link: '/00-foundations/04-design-methodology' },
  ]},
  { text: '学习路径', items: [
    { text: '入门 (0-3 月)', link: '/07-learning-paths/beginner' },
    { text: '进阶 (3-12 月)', link: '/07-learning-paths/intermediate' },
    { text: '高级 (12 月+)', link: '/07-learning-paths/advanced' },
  ]},
  { text: '资源', items: [
    { text: '核心文献', link: '/01-core-texts/' },
    { text: '术语词典', link: '/06-reference/glossary' },
    { text: '缺口追踪', link: '/06-reference/gap-tracker' },
    { text: '管理', link: '/admin/' },
  ]},
]

const navEn = [
  { text: 'Home', link: '/en/' },
  { text: 'Foundations', items: [
    { text: 'History & Origins', link: '/00-foundations/01-history-origins' },
    { text: 'Three Ethics', link: '/00-foundations/02-ethics' },
    { text: 'Design Principles', link: '/00-foundations/03-principles' },
    { text: 'Design Methodology', link: '/00-foundations/04-design-methodology' },
  ]},
  { text: 'Learning Paths', items: [
    { text: 'Beginner (0-3 mo)', link: '/07-learning-paths/beginner' },
    { text: 'Intermediate (3-12 mo)', link: '/07-learning-paths/intermediate' },
    { text: 'Advanced (12 mo+)', link: '/07-learning-paths/advanced' },
  ]},
  { text: 'Resources', items: [
    { text: 'Core Texts', link: '/01-core-texts/' },
    { text: 'Glossary', link: '/06-reference/glossary' },
    { text: 'Gap Tracker', link: '/06-reference/gap-tracker' },
    { text: 'Admin', link: '/admin/' },
  ]},
]

const sidebarZh = {
  '/00-foundations/': [{ text: '基础', collapsed: false, items: [
    { text: '起源与历史', link: '/00-foundations/01-history-origins' },
    { text: '三大伦理', link: '/00-foundations/02-ethics' },
    { text: '设计原则', link: '/00-foundations/03-principles' },
    { text: '设计方法论', link: '/00-foundations/04-design-methodology' },
  ]}],
  '/01-core-texts/': [{ text: '核心文献', collapsed: false, items: [
    { text: '文献清单', link: '/01-core-texts/' },
  ]}],
  '/06-reference/': [{ text: '参考资源', collapsed: false, items: [
    { text: '术语词典', link: '/06-reference/glossary' },
    { text: '缺口追踪', link: '/06-reference/gap-tracker' },
  ]}],
  '/07-learning-paths/': [{ text: '学习路径', collapsed: false, items: [
    { text: '入门 (0-3月)', link: '/07-learning-paths/beginner' },
    { text: '进阶 (3-12月)', link: '/07-learning-paths/intermediate' },
    { text: '高级 (12月+)', link: '/07-learning-paths/advanced' },
  ]}],
}

const sidebarEn = {
  '/00-foundations/': [{ text: 'Foundations', collapsed: false, items: [
    { text: 'History & Origins', link: '/00-foundations/01-history-origins' },
    { text: 'Three Ethics', link: '/00-foundations/02-ethics' },
    { text: 'Design Principles', link: '/00-foundations/03-principles' },
    { text: 'Design Methodology', link: '/00-foundations/04-design-methodology' },
  ]}],
  '/01-core-texts/': [{ text: 'Core Texts', collapsed: false, items: [
    { text: 'Book List', link: '/01-core-texts/' },
  ]}],
  '/06-reference/': [{ text: 'Reference', collapsed: false, items: [
    { text: 'Glossary', link: '/06-reference/glossary' },
    { text: 'Gap Tracker', link: '/06-reference/gap-tracker' },
  ]}],
  '/07-learning-paths/': [{ text: 'Learning Paths', collapsed: false, items: [
    { text: 'Beginner (0-3mo)', link: '/07-learning-paths/beginner' },
    { text: 'Intermediate (3-12mo)', link: '/07-learning-paths/intermediate' },
    { text: 'Advanced (12mo+)', link: '/07-learning-paths/advanced' },
  ]}],
}

export default defineConfig({
  title: '朴门永续设计',
  description: 'Permaculture Knowledge Base — 系统化朴门永续设计知识体系',

  ignoreDeadLinks: true,

  srcExclude: [
    '**/node_modules/**', '**/downloads/**', '**/pdfs/**',
    '**/permaculture-card-deck-printable/**', '**/beacon-food-forest/**',
    '**/awesome-permaculture/**', '**/CPlant/**', '**/Polyculture-Design-Tool/**',
    '**/AI-permaculture-design-tool/**', '**/open-source-permaculture/**',
    '**/skhaen-permaculture/**', '**/planetary-peace-park/**', '**/powerplant/**',
    '**/permaculture-pamphlets/**', '**/mollison-1981-pdc/**',
    'README.md', '**/朴门Permaculture资源汇总.md', '**/permaculture-downloads-index.md',
  ],

  head: [
    ['meta', { name: 'theme-color', content: '#2d7a3e' }],
    ['meta', { property: 'og:title', content: '朴门永续设计知识库' }],
    ['meta', { property: 'og:description', content: '系统化朴门永续设计知识体系 · 33 本经典文献 · 12 设计原则 · 三大伦理' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        logo: '/logo.svg',
        nav: navZh,
        sidebar: sidebarZh,
        socialLinks: [{ icon: 'github', link: 'https://github.com/520maodizhang/permaculture-resources' }],
        footer: { message: '基于 CC BY-NC-SA 4.0 发布', copyright: '© 2026 朴门永续设计知识库 · Permaculture Knowledge Base' },
        search: { provider: 'local' },
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于' },
        editLink: { pattern: 'https://github.com/520maodizhang/permaculture-resources/edit/main/:path', text: '在 GitHub 上编辑此页' },
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        logo: '/logo.svg',
        nav: navEn,
        sidebar: sidebarEn,
        socialLinks: [{ icon: 'github', link: 'https://github.com/520maodizhang/permaculture-resources' }],
        footer: { message: 'Licensed under CC BY-NC-SA 4.0', copyright: '© 2026 Permaculture Knowledge Base' },
        search: { provider: 'local' },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        editLink: { pattern: 'https://github.com/520maodizhang/permaculture-resources/edit/main/:path', text: 'Edit this page on GitHub' },
      }
    }
  },
})
