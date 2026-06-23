import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "Ran's Tutorials",

  description: "一个牛逼的笔记集合，包含了一些 Windows 11 的基本操作和使用技巧。Just for Ran.",

  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/start', activeMatch: '\/.+'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tseshongfeeshur' },
      {
        icon: {
          svg: '<img src="https://blog.ryanyuan.top/images/avatar-round.png" style="height: 1.2rem; width: 1.2rem;" />'
        },
        link: 'https://blog.ryanyuan.top/',
        ariaLabel: 'Blog'
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Theme by <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
      copyright: 'Copyright © 2026-present <a href="https://blog.ryanyuan.top/" target="_blank">Ryan'
    }
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '更多'
    }
  },
}

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
