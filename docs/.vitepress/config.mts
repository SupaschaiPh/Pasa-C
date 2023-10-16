import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PasaC 101",
  description: "pasa cccccc project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/SupaschaiPh/Pasa-C/edit/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'example/markdown-examples' }
    ],

    sidebar: {
      "/example/": [{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: 'example/markdown-examples' },
          { text: 'Runtime API Examples', link: 'example/api-examples' }
        ]
      }]
    }
    ,

    socialLinks: [
      { icon: 'github', link: '' }
    ]
  }
})
