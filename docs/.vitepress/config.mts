import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BoxyBox",
  description: "BoxyBox Pasa C Project",
  base: "/Pasa-C/",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap', rel: 'stylesheet' }
    ]
  ],
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
      { text: 'Examples', link: 'example/markdown-examples' },
      { text: 'Project Details', link: 'details/project_details'},
      { text: 'Source Code', link: 'source_code/project_source_code'}
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
      { icon: 'github', link: 'https://github.com/SupaschaiPh/Pasa-C/' }
    ]
  }
})
