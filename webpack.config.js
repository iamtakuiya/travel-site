const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
<<<<<<< HEAD
  require('postcss-hexrgba'),
  require('postcss-for'),
  require('postcss-color-rgba-fallback'),
=======
>>>>>>> parent of 5d4d639 (Finished Floating Styliing)
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    watchFiles: ["app/**/*.html"],
    static: {
      directory: path.join(__dirname, "app"),
      watch: false,
    },
    hot: true,
    port: 3000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader',
          { loader: 'css-loader', options: { url: false }},
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins }}}
        ]
      }
    ]
  }
}