const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, 'build'),
    // publicPath: '/todoapp-typescript/',
  },
}

module.exports = (env, argv) => {
  if (argv.mode === 'production')
    config.output.publicPath = '/todoapp-typescript/'

  if (argv.mode === 'development')
    config.output.path = path.resolve(__dirname, 'build')
  return config
}
