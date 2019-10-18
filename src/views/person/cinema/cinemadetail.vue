周晨 15:02:29
<template>
  <div>
    <div>
      <van-cell-group>
        <van-cell class="page-head" center>
          <a href="javascript:history.back(-1)" class="iconfont icon-zuojiantou"></a>
          <span>{{cinemaName}}</span>
        </van-cell>
        <van-cell class="page-body" center>
          <a href="#" class="iconfont icon-weibiaoti-"></a>
          <i>{{cinemaName}}</i>
          <br />
          <span>{{cinemaAdd}}</span>
        </van-cell>
      </van-cell-group>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in cinemamovie" :key="item.filmId">
            <img :src="`${item.picAddr}`" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <p class="moviename">{{moviename}}</p>
      <van-tabs v-model="active" class="rout" type="card" animated swipeable :lazy-render="false">
        <van-tab v-for="item in dayshows" :key="item['shows'][0]['showId']"  :title="`${item['showdate']}`">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        </van-divider>
          <div class="day">放映时间</div>
          <van-cell-group>
             <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
              <p class="custom-title slot" v-for="index in item.shows" :key="index.showId" >
                <span> {{index.showTime.substr(0,2)}} : {{index.showTime.substr(2,2)}}</span>
                <i>{{index.language}}/{{index.edition}}</i>
                <em>{{index.miguPrice/100}}￥</em>
                <van-button color="red" plain>点击购票</van-button>
               </p>
            </template>
          </van-cell-group>
        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, List, Cell, CellGroup, Tab, Tabs, Divider, Button } from 'vant'
import axios from 'axios'
import Swiper from 'swiper'
Vue.use(Search)
  .use(List)
  .use(Cell)
  .use(CellGroup).use(Tab).use(Tabs).use(Divider).use(Button)
export default {
  name: 'cinemadetail',
  data () {
    return {
      cinemaid: '',
      cinemaAdd: '',
      cinemaName: '',
      cinemamovie: [],
      dayshows: [],
      filmId: '50491',
      moviename: '',
      active: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next(res => {
      res.cinemaid = res.$route.params.id
      res.cinemaAdd = res.$route.params.cinemaAdd
      res.cinemaName = res.$route.params.cinemaName

      res.getmovie(res)
    })
  },
  // created () {
  //   this.cinemaid = this.$route.params.id
  //   this.cinemaAdd = this.$route.params.cinemaAdd
  //   this.cinemaName = this.$route.params.cinemaName
  //   this.getmovie(this)
  //   console.log(this.cinemamovie)
  //   // this.getshows(this, this.cinemamovie[0].filmId)
  // },
  methods: {
    getmovie (mes) {
      axios
        .post(
          '/cinemamovie',
          {
            cinemaId: mes.cinemaid,
            type: 0
          },
          {
            transformRequest: [
              function (data) {
                let arr = []
                for (let i in data) {
                  arr.push(`${i}=${data[i]}`)
                }
                data = arr.join('&')
                return data
              }
            ]
          }
        )
        .then(res => {
          let arr = res.data.movies
          for (let i in arr) {
            mes.cinemamovie.push(arr[i])
          }
        })
    },
    getshows (mes, fs) {
      axios
        .post(
          '/dayshows',
          {
            cinemaId: mes.cinemaid,
            filmId: fs,
            count: 10
          },
          {
            transformRequest: [
              function (data) {
                let arr = []
                for (let i in data) {
                  arr.push(`${i}=${data[i]}`)
                }
                data = arr.join('&')
                return data
              }
            ]
          }
        )
        .then(res => {
          let arr = res.data.dayShows
          let arr1 = []
          for (let i in arr) {
            arr1.push(arr[i])
          }
          mes.dayshows = arr1
        })
    }

  },
  mounted () {
    let _this = this
    setTimeout(function () {
      // 实例初始化

      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function () {
            if (!_this.cinemamovie) {
              return
            }
            let arr = _this.cinemamovie[this.realIndex]
            if (!arr) {
              return
            }
            try {
              _this.filmId = arr.filmId
              _this.moviename = _this.cinemamovie[this.realIndex].filmName
            } catch (error) {

            }
          }
        }
      })
      mySwiper.autoplay = false
    }, 600)
  },
  watch: {
    filmId (n, o) {
      this.getshows(this, n)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "//at.alicdn.com/t/font_1456928_x91qick7isa.css";
.page-head {
  text-align: center;
  a {
    font-size: 26px;
    color: #000;
  }
  span {
    text-align: center;
    font-size: 18px;
    display: inline;
    margin: 20px;
  }
}
.page-body {
  a {
    float: right;
    font-size: 26px;
    color: skyblue;
  }
  i {
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
}
.swiper-slide {
  img {
    width: 150px;
  }
}
.swiper-container {
  width: 100%;
  height: 200px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.moviename{
  margin-top: 10px;
  font-size: 24px;
  color: red;
}
.rout{
  margin-top: 10px;
}
 .day{
   color: black;
   font-size: 16px;
   text-align: center;
   height: 20px;
   line-height: 20px;
 }
 .slot{
   color: #000;
   font-size: 18px;
   margin: 10px 0;
   height: 66px;
   line-height: 66px;
   border-bottom: skyblue 1px solid;
     display: flex ;
     justify-content: space-around;
     span{
       display: inline-block;
       font-size: 18px;
     }
     i{
       display: inline-block;
     }
     em{
       font-size: 22px;
       color: red;
     }
 }
</style>
