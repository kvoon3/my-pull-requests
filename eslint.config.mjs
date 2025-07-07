// @ts-check

import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  typescript: true,
  unocss: true,
}, {
  rules: {
    'nuxt/nuxt-config-keys-order': 'error',
  },
})
  .append(nuxt())
