module.exports = {
  lintOnSave: true,

  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder

      '/api': {
        target: 'http://movie.miguvideo.com',
        pathRewrite: {
          '/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
