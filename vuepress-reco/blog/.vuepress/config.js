module.exports = {
  title: 'vuepress-reco',
  description: '这是我的新博客',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vuepress-reco',
      description: '这是我的新博客'
    }
  },
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '联系',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/tlyboy',
            icon: 'reco-github'
          }
        ]
      }
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    logo: '/assets/img/logo.webp',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    author: 'vuepress-reco',
    authorAvatar: '/assets/img/avatar.webp',
    startYear: '2023',
    noFoundPageByTencent: false
  },
  markdown: {
    lineNumbers: true
  }
}
