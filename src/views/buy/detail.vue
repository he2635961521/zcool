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
      <img v-if="detailData.imgShare" :src="`http://movie.miguvideo.com${detailData.imgShare}`" alt="">
      <div class="return" @click="fn">
       <span class="iconfont icon-fanhui"></span>
      </div>
      <div class="shadow-box-one"></div>
    </div>

    <div class="movie-info-wrap">
      <div class="movie-info">
        <div class="pull-left">
          <img v-if="detailData.imgSrc" :src="`http://movie.miguvideo.com${detailData.imgSrc}`" alt="">
        </div>
        <div class="mivie-info-list">
          <div class="top">
            <p id="mov-name">{{ detailData.name }}</p>
            <p id="icon">
              <i :class="Number(detailData.score) > 0 ? 'iconfont icon-pingfenshixing' : 'iconfont icon-kongxing' "></i>
              <i :class="Number(detailData.score) > 2 ? 'iconfont icon-pingfenshixing' : 'iconfont icon-kongxing' "></i>
              <i :class="Number(detailData.score) > 4 ? 'iconfont icon-pingfenshixing' : 'iconfont icon-kongxing' "></i>
              <i :class="Number(detailData.score) > 6 ? 'iconfont icon-pingfenshixing' : 'iconfont icon-kongxing' "></i>
              <i :class="Number(detailData.score) > 8 ? 'iconfont icon-pingfenshixing' : 'iconfont icon-kongxing' "></i>
              <span>{{ detailData.score }}</span>
            </p>
          </div>
          <div class="bottom">
            <p>{{ detailData.DetailType }}</p>
            <p>{{ detailData.region }}</p>
            <p>{{ detailData.time }}</p>
          </div>
        </div>
      </div>
      <div v-if="detailMSG">
        <p class="movie-desc">{{ detailData.describe2 }}</p>
        <div class="text-center">
          <span class="iconfont icon-down" @click="seeDetailAll"></span>
        </div>
      </div>
      <div v-else>
        <p class="movie-desc">{{ detailData.describe }}</p>
        <div class="text-center">
          <span class="iconfont icon-shang" @click="seeDetailOne"></span>
        </div>
      </div>
    </div>

    <div class="page-body">
      <div class="swiper-container">
        <p>演职人员</p>
        <ul class="swiper-container-actor">
          <li v-for="(actor , index) in detailData.personnel" :key="index">
            <img :src="`http://movie.miguvideo.com${actor.imgSrc}`" alt="">
            <h3 id="real-name">{{ actor.name }}</h3>
            <h3 id="type">{{ actor.player == 1 ? '导演' : '主演' }}</h3>
          </li>
        </ul>
      </div>
      <div class="swiper-container">
        <p>视频和剧照</p>
        <ul class="swiper-wrapper-photo">
          <li v-for="(photo ,index) in detailData.poster" :key="index">
            <img :src="`http://movie.miguvideo.com${photo.bigimg}`" alt="">
          </li>
        </ul>
      </div>
      <div class="swiper-container" style="margin-bottom:42px">
        <p>推荐影片</p>
        <ul class="swiper-container-actor">
          <li v-for="film in recommendFilm" :key="film.contid">
            <img :src="`http://movie.miguvideo.com${film.imgSrc}`" alt="">
            <h3 id="type">{{ film.name }}</h3>
          </li>
        </ul>
      </div>
    </div>

    <div class="page-bottom">
      <div class="collection">
        <i class="iconfont icon-kongxing"></i>
        <span>收藏</span>
      </div>
      <div class="write">
        <i class="iconfont icon-xie"></i>
        <span>写影评</span>
      </div>
      <div class="active">
        <span>敬请期待</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      cid: '',
      detailData: {},
      detailMSG: true,
      recommendFilm: []
    }
  },

  methods: {
    seeDetailAll () {
      this.detailMSG = false
    },
    seeDetailOne () {
      this.detailMSG = true
    },
    fn () {
      this.$router.go(-1)
      console.log(1111)
    }
  },

  created () {
    this.cid = this.$route.params.id
  },

  mounted () {
    axios.get('/api/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=' + this.cid).then(response => {
      this.detailData = response.data[0]
      this.detailData.describe2 = this.detailData.describe.substring(0, 60) + '...'
    })
    axios.post('/api/publish/i_www/resource/lovev/miguMovie/detail/relevant_data2.jsp').then(response => {
      this.recommendFilm = response.data
    })
  }

}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
  .detail{
    font-size: 16px;
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
      position: relative;
      img{
        height: 220px;
        width: 100%;
      }
      .return{
        width: 15px;
        height: 15px;
        padding: 5px;
        border: 1px solid rgba($color: #666, $alpha: 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba($color: #666, $alpha: 0.5);
        color: white;
      }
      .shadow-box-one{
        position: absolute;
        width: 100%;
        height: 75px;
        left: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 98%, #fff 100%);
      }
    }
    .movie-info-wrap{
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      margin-top: -75px;
      .movie-info{
        width: 100%;
        height: 148px;
        display: flex;
        .pull-left{
          position: relative;
          width: 95px;
          z-index: 999;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .mivie-info-list{
          padding-left: 10px;
          .top{
            box-sizing: border-box;
            height: 75px;
            padding-top: 20px;
            #mov-name{
              font-size: 18px;
              color: #fff;
            }
            #icon{
              margin-top: 15px;
              font-size: 14px;
              color: #F8B246;
              i{
                font-size: 13px;
              }
              span{
                margin-left: 5px;
              }
            }
          }
          .bottom{
            height: 68px;
            p{
              margin-top: 8px;
              font-size: 13px;
              width: 170px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .movie-desc{
        font-size: 14px;
        line-height: 19px;
        color: #666;
        margin-top: 19px;
      }
      .text-center{
        padding: 4px 0;
        display: flex;
        justify-content: center;
      }
    }
    .page-body{
      .swiper-container{
        border-top: 12px solid rgba($color: #999, $alpha: 0.2);
        p{
          padding: 10px 10px 10px 10px;
          padding-right: 10px;
          font-size: 15px;
          color: #1a1a1a;
          border-bottom: 1px solid #f0f0f0;
          @include border-left;
        }
        .swiper-container-actor{
          display: flex;
          height: 184px;
          width: 100%;
          overflow: auto;
          li{
            text-align: center;
            width: 103px;
            margin-right: 1px;
            img{
              width: 103px;
              height: 137px;
            }
            h3{
              font-size: 13px;
              padding-top: 5px;
              color: #4d4d4d;
              white-space: nowrap;
              width: 100%;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
        .swiper-wrapper-photo{
          width: 100%;
          display: flex;
          overflow: auto;
          li{
            margin-right: 1px;
            width: 103px;
            height: 69px;
            img{
              width: 103px;
              height: 69px;
            }
          }
        }

      }
    }
    .page-bottom{
      @include border-top;
      width: 100%;
      height: 42px;
      display: flex;
      font-size: 13px;
      position: fixed;
      background: white;
      bottom: 0;
      .collection,.active,.write{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        span{
          margin-left: 5px;
        }
      }
      .active{
        flex: 2;
        color: #fff;
        background: #d3d3d3;
      }
    }
  }
</style>
