import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['*.global.js', '**/*.global.js/**', 'build', '**/build/**', 'node_modules', '**/node_modules/**', 'interactive/guides/vendor/*.md', 'interactive/guides/vendor/*.md/**', 'interactive/data/guides.ts', 'interactive/data/guides.ts/**', 'defaultConfig.ts', '**/defaultConfig.ts/**', 'packages/preset-icons/src/collections.json', 'packages/preset-icons/src/collections.json/**', 'packages/eslint-plugin/fixtures', 'packages/eslint-plugin/fixtures/**', 'bench/source/gen*.js', 'bench/source/gen*.js/**', '!.vitepress', '!**/.vitepress/**', 'docs/.vitepress/cache/deps/*.*', 'docs/.vitepress/cache/deps/*.*/**', 'test/cases', 'test/cases/**'],
  unocss: true,
  javascript: true,
  vue: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
})
