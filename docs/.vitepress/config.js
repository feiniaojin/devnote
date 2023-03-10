export default {
  title: "kaifa",
  description: "开发笔记",
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/feiniaojin/kaifa" },
    ],
    footer: {
      copyright: "Copyright © 2020-present Qin Yujie",
    },
    nav: [
      {
        text: "悟道DDD",
        link: "",
      },
      {
        text: "开发笔记",
        link: "/0/0.0.md",
        activeMatch: "/",
      },
      {
        text: "企业信息架构",
        link: "https://github.com/feiniaojin/architecture-framework",
      },
      {
        text: "悟道项目管理",
        link: "https://github.com/feiniaojin/project-management",
      },
      {
        text: "悟道产品经理",
        link: "https://github.com/feiniaojin/product-manager",
      },
    ],
    sidebar: [
      {
        items: [
          {
            text: "README",
            link: "/0/0.0",
          },
        ],
      },
      {
        text: "VitePress个人技术网站搭建",
        collapsible: true,
        items: [
          {
            text: "前期准备",
            link: "/vitepress/vitepress-01",
          },
          {
            text: "vitepess配置",
            link: "/vitepress/vitepress-02",
          },
          {
            text: "站点部署",
            link: "/vitepress/vitepress-03",
          }
        ],
      }
    ],
  },
};
