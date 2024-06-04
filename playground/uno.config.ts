import { defineConfig, presetUno } from 'unocss'
import presetDaisy from '@vsilk/unocss-preset-daisyui'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({ logs: false }),
  ],
})
