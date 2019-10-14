<template>
  <div class="hotShowing">
    <ul>
      <li>
        <div class="movie-left">
          <img src="https://wapx.cmvideo.cn/publish/poms/image/5500/756/568/201909171502_1_HSJ720V.jpg" alt="">
        </div>
        <div class="movie-right">
          <div class="title">
            <h3>中国机长</h3>
          </div>
          <div class="director">
            刘伟强
          </div>
          <div class="actor">
            张涵予 袁泉 欧豪 杜江 张天爱 张涵予 袁泉 欧豪 杜江 张天爱
          </div>
        </div>
        <div class="buyTiket">
            <img src="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/images/icon/oreder.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hotShowing'
}
</script>

<style lang="scss">
@import "../assets/styles/common/mixin.scss";
  .hotShowing{
    width: 100%;
    font-size: 16px;
    ul{
      li{
        width: 100%;
        height: 128px;
        padding: 12px 12px 0 12px;
        display: flex;
        box-sizing: border-box;
        @include border-bottom;
        .movie-left{
          width: 86px;
          height: 115px;
          img{
            width: 75px;
            height: 111px;
          }
        }
        .movie-right{
          flex: 1;
          .title{
            margin-top: 15px;
            color: #666;
          }
          .director{
            margin-top:20px;
            font-size: 14px;
          }
          .actor{
            margin-top: 5px;
            font-size: 14px;
            width: 205px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .buyTiket{
          width: 50px;
          height:100%;
          display: flex;
          align-items: center;
          img{
            width: 46px;
            height: 26px;
          }
        }
      }
    }
  }
</style>
