import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '朴门永续设计',
  description: 'Permaculture Knowledge Base — 系统化朴门永续设计知识体系',
  lang: "zh-CN",

  ignoreDeadLinks: true,

  srcExclude: [
    '**/node_modules/**',
    '**/downloads/**',
    '**/pdfs/**',
    '**/permaculture-card-deck-printable/**',
    '**/beacon-food-forest/**',
    '**/awesome-permaculture/**',
    '**/CPlant/**',
    '**/Polyculture-Design-Tool/**',
    '**/AI-permaculture-design-tool/**',
    '**/open-source-permaculture/**',
    '**/skhaen-permaculture/**',
    '**/planetary-peace-park/**',
    '**/powerplant/**',
    '**/permaculture-pamphlets/**',
    '**/mollison-1981-pdc/**',
    'README.md',
    '**/朴门Permaculture资源汇总.md',
  ],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8c4c' }],
    ['meta', { property: 'og:title', content: '朴门永续设计知识库' }],
    ['meta', { property: 'og:description', content: '系统化朴门永续设计知识体系' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础',
        items: [
          { text: '起源与历史', link: '/00-foundations/01-history-origins' },
          { text: '三大伦理', link: '/00-foundations/02-ethics' },
          { text: '设计原则', link: '/00-foundations/03-principles' },
          { text: '设计方法论', link: '/00-foundations/04-design-methodology' },
        ]
      },
      {
        text: '学习路径',
        items: [
          { text: '入门', link: '/07-learning-paths/beginner' },
          { text: '进阶', link: '/07-learning-paths/intermediate' },
          { text: '高级', link: '/07-learning-paths/advanced' },
        ]
      },
      {
        text: '资源',
        items: [
          { text: '核心文献', link: '/01-core-texts/' },
          { text: '术语词典', link: '/06-reference/glossary' },
          { text: '缺口追踪', link: '/06-reference/gap-tracker' },
        ]
      },
    ],

    sidebar: {
      '/00-foundations/': [
        {
          text: '🏛 基础',
          collapsed: false,
          items: [
            { text: '起源与历史', link: '/00-foundations/01-history-origins' },
            { text: '三大伦理', link: '/00-foundations/02-ethics' },
            { text: '设计原则', link: '/00-foundations/03-principles' },
            { text: '设计方法论', link: '/00-foundations/04-design-methodology' },
          ]
        }
      ],

      '/01-core-texts/': [
        {
          text: '📚 核心文献',
          collapsed: false,
          items: [
            { text: '文献清单', link: '/01-core-texts/' },
          ]
        }
      ],

      '/02-design-elements/': [
        {
          text: '🌿 设计要素',
          collapsed: false,
          items: [
            { text: '分区设计', link: '/02-design-elements/01-zoning' },
            { text: '水系统', link: '/02-design-elements/02-water' },
            { text: '土壤', link: '/02-design-elements/03-soil' },
            { text: '植物与食物森林', link: '/02-design-elements/04-plants-food-forests' },
            { text: '动物系统', link: '/02-design-elements/05-animals' },
            { text: '建筑与结构', link: '/02-design-elements/06-structures' },
            { text: '能源', link: '/02-design-elements/07-energy' },
            { text: '气候与微气候', link: '/02-design-elements/08-climate-microclimate' },
          ]
        }
      ],

      '/03-design-process/': [
        {
          text: '📐 设计流程',
          collapsed: false,
          items: [
            { text: '选址分析', link: '/03-design-process/01-site-analysis' },
            { text: '逐步设计', link: '/03-design-process/02-step-by-step' },
            { text: '实施', link: '/03-design-process/03-implementation' },
            { text: '监测与调整', link: '/03-design-process/04-monitoring' },
          ]
        }
      ],

      '/04-regional-adaptations/': [
        {
          text: '🌍 区域适配',
          collapsed: false,
          items: [
            { text: '热带', link: '/04-regional-adaptations/tropical' },
            { text: '温带', link: '/04-regional-adaptations/temperate' },
            { text: '干旱', link: '/04-regional-adaptations/arid' },
            { text: '寒带', link: '/04-regional-adaptations/cold-climate' },
            { text: '城市', link: '/04-regional-adaptations/urban' },
          ]
        }
      ],

      '/05-community-social/': [
        {
          text: '👥 社区与社会',
          collapsed: false,
          items: [
            { text: '社区组织', link: '/05-community-social/community' },
            { text: '朴门经济', link: '/05-community-social/economics' },
            { text: '教育与PDC', link: '/05-community-social/education-pdc' },
          ]
        }
      ],

      '/06-reference/': [
        {
          text: '📖 参考资源',
          collapsed: false,
          items: [
            { text: '术语词典', link: '/06-reference/glossary' },
            { text: '缺口追踪', link: '/06-reference/gap-tracker' },
          ]
        }
      ],

      '/07-learning-paths/': [
        {
          text: '🌱 学习路径',
          collapsed: false,
          items: [
            { text: '入门 (0-3月)', link: '/07-learning-paths/beginner' },
            { text: '进阶 (3-12月)', link: '/07-learning-paths/intermediate' },
            { text: '高级 (12月+)', link: '/07-learning-paths/advanced' },
          ]
        }
      ],

      '/08-case-studies/': [
        {
          text: '🔍 案例研究',
          collapsed: false,
          items: [
            { text: '案例列表', link: '/08-case-studies/' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/520maodizhang/permaculture-resources' }
    ],

    footer: {
      message: '基于 CC BY-NC-SA 4.0 发布',
      copyright: '© 2026 朴门永续设计知识库 · Permaculture Knowledge Base',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: 2,
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },
})
