module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://movie.miguvideo.com',
        pathRewrite: {
          "/api": ""
        },
        changeOrigin: true
      }
    }
  }
}
