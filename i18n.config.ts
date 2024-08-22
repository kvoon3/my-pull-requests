export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: {
        is: 'is',
        'Contributing': 'OpenSource Contributing...',
      },
      subtitle: '{\'@\'}{username}\'s recent pull requests on GitHub.',
    },
    'zh-CN': {
      title: {
        is: '正在',
        'Contributing': '开源贡献...'
      },
      subtitle: '{\'@\'}旷力介 在 GitHub 上最近的拉取请求(PR)。'
    }
  }
}))