// @ts-check

import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  typescript: true,
  unocss: false,
  formatters: true,
})
.append(nuxt())
