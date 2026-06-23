import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { VitePWA } from 'vite-plugin-pwa';

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
vite:{
  plugins: [VitePWA({
    registerType: 'autoUpdate',

    manifest: {
      name: "Ran's Tutorial",
      short_name: "Ran's Tutorial",
      theme_color: 'black',
      display: 'standalone',
      icons: [
        {
          src: '/appicon-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/appicon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
      ]
    },

    workbox: {
      navigateFallback: 'index.html',

      runtimeCaching: [
        // 文档页面优先网络，失败用缓存
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages',
            networkTimeoutSeconds: 3,
            expiration: {
              maxEntries: 50
            }
          }
        },

        // 静态资源缓存
        {
          urlPattern: ({ request }) =>
            ['style', 'script', 'image', 'font'].includes(request.destination),
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30天
            }
          }
        }
      ]
    }
  })]}
}

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
