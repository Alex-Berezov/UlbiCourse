import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loader/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  // Инициализация resolve
  config.resolve = config.resolve || {}
  config.resolve.modules = config.resolve.modules || []
  config.resolve.extensions = config.resolve.extensions || []

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  // Инициализация module и rules
  if (!config.module) {
    config.module = { rules: [] }
  } else if (!config.module.rules) {
    config.module.rules = []
  }

  // Применение изменений к rules
  if (config.module && Array.isArray(config.module.rules)) {
    config.module.rules = config.module.rules
      .filter((rule): rule is RuleSetRule => Boolean(rule))
      .map((rule: RuleSetRule) => {
        if (typeof rule.test === 'string' && rule.test.includes('svg')) {
          return { ...rule, exclude: /\.svg$/i }
        }
        return rule
      })
  }

  // Добавление правил для обработки SVG и CSS
  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config?.module?.rules?.push(buildCssLoader(true))

  // Инициализация plugins
  config.plugins = config.plugins || []
  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    })
  )

  return config
}
