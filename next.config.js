const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})

module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
  }
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}