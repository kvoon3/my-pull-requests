import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  colorMode: {
    classPrefix: '',
    classSuffix: '',
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: 'latest',

  nitro: {
    preset: 'vercel',
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  icon: {
    size: '1.4rem',
  },
})
