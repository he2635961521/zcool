<template>
  <div class="detail">
    <div class="page-head">
      <div class="logo">
        <img src="http://movie.miguvideo.com/lovev/miguMovie/images/logo_movie.png" alt="">
      </div>
      <div class="app-info">
        <h4>咪咕影院</h4>
        <p>在线看片、选座、为电影而生</p>
      </div>
      <div class="download">
        立即下载
      </div>
    </div>
    <div class="movie-pic-wrap">
      <img src="http://movie.miguvideo.com/publish/poms/image/5500/927/554/201910111348_p2571009753_HSJ1080H.jpg" alt="">
      <span iconfont icon-fanhui></span>
      <div class="shadow-box-one"> </div>
    </div>
  </div>
</template>

<style lang="scss">
  .detail{
    .page-head{
      height: 50px;
      padding: 10px 10px 0 10px;
      font-size: 14px;
      display: flex;
      .logo{
        img{
          height: 40px;
          width: 40px;
        }
      }
      .app-info{
        margin-left: 20px;
        flex: 1;
        h4{
          margin-top: 3px;
          font-size: 17px;
          font-weight: bolder;
        }
        p{
          margin-top: 5px;
          font-size: 14px;
          color: #999;
        }
      }
      .download{
        margin-top: 5px;
        width: 75px;
        height: 30px;
        background: #f74444;
        line-height: 30px;
        text-align: center;
        color: white;
        border-radius: 5px;
      }
    }
    .movie-pic-wrap{
      height: 224px;
      background: #f74444;
      img{
        height: 220px;
        width: 100%;
      }
    }
  }
</style>
