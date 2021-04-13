const { startDevServer } = require('@cypress/webpack-dev-server')
// your project's webpack configuration
const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    on('dev-server:start', (options) => {
      return startDevServer({ options, webpackConfig })
    })
  }

  return config
}
