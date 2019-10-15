// vue脚手架创建的项目的配置文件

module.exports = {
    devServer: {
        //正向代理配置

        proxy: {
            "/migu": {
                target: "http://movie.miguvideo.com",
                pathRewrite: {
                  "/migu": ""
                },
                changeOrigin: true
              }
        }
    }
}