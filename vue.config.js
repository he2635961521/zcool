 module.exports = {
  lintOnSave: true,

  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/cinemaapi': {
        target: 'https://movie.miguvideo.com/mta-service/data/migu/validCinemaes.jsp', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '/cinemaapi': ''
        }
      },
      '/cinemamovie': {
        target: 'https://movie.miguvideo.com/mta-service/data/migu/cinemaMovie.jsp', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '/cinemamovie': ''
        }
      },
      '/dayshows': {
        target: 'https://movie.miguvideo.com/mta-service/data/migu/userShows.jsp', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '/dayshows': ''
        }
      },
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
