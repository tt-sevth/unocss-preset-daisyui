# @vsilk/unocss-preset-daisyui

> fork from [unocss-preset-daisyui](https://github.com/LeekJay/unocss-preset-daisyui)

## Installation

```bash
npm i -D unocss daisyui @vsilk/unocss-preset-daisyui
```

## Usages

uno.config.ts

```typescript
import { defineConfig, presetUno } from 'unocss'
import presetDaisy from '@vsilk/unocss-preset-daisyui'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy(),
  ],
})
```

## Options

Same as daisyui option

## NOTE

Some special prefixes('link-xx', 'file-xx') may conflict with variants in presetMini().

please use '_link-xx', '_file-xx' OR set prefiex in option to avoid conflict
