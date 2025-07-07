import { defineConfig, presetWebFonts, presetAttributify, presetWind4, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: ['DM Sans']
      }
    })
  ],
  transformers: [
    transformerDirectives()
  ]
})
