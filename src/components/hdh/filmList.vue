<template>
  <div>
    <!-- 第一个轮播图 -->
    <div class="swiper-container swiper-container1" ref="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(film,index) in film1" :key="index">
          <!-- `/hdh/filmlbdetail/${film.goodsUrl}` -->
          <router-link :to="`${film.wapUrl}`">
            <img :src="`http://movie.miguvideo.com/publish/i_www/${film.imgSrc}`" />
          </router-link>
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- 轮播图插件 -->
      <div class="swiper-pagination1"></div>
    </div>

    <!-- 第二个轮播图 -->
    <div class="module">
      <!-- 售票标栏,module-name引入了背景图片 -->
      <div class="module-name grey font-16">正在售票</div>
      <div class="swiper-container" ref="swiper2">
        <div class="swiper-wrapper">
          <!-- 单个轮播图 -->
          <div class="swiper-slide" v-for="(film,index) in film2" :key="index">
            <img :src="`http://movie.miguvideo.com/publish/i_www/${film.imgSrc}`" />
            <div class="content-intro">
              <p class="font-14 grey">{{film.name}}</p>
              <p class="font-13 light-grey">{{film.LONG_NAME}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三个轮播图 -->
    <div class="module">
      <div class="module-name grey font-16">精彩活动</div>
      <div class="swiper-container swiper-container2" ref="swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(film,index) in film3" :key="index">
            <div class="content-pic">
              <img :src="`http://movie.miguvideo.com/publish/i_www/${film.imgSrc}`" />
              <img
                class="status"
                src="http://movie.miguvideo.com/lovev/miguMovie/images/icon/status-keepOn.png"
              />
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import axios from "axios";
export default {
  name: "hdh",

  data() {
    return {
      film1: [],
      film2: [],
      film3: []
    };
  },
  created() {
    axios
      .post(
        "/migu/lovev/miguMovie/data/seeFilmData.jsp",
        {
          nodeId: 70022794,
          pagesize: 3,
          pageidx: 1
        },
        {
          transformRequest(data) {
            //console.log(data);
            // {key1: 'value1', key2: 'value2', key3: 'value3'}
            // 'key1=value1&key2=value2&key3=value3'
            let arr = [];
            for (let key in data) {
              arr.push(`${key}=${data[key]}`);
            }
            return arr.join("&");
          }
        }
      )
      .then(response => {
        this.filmList = response.data;
        this.film1 = this.filmList[0].list;
        this.film2 = this.filmList[1].list;
        this.film3 = this.filmList[2].list;
        console.log(this.film1.length);

        //if (result.status === 0) {
        // commit('setFilmList', result.data.films)
        // 要先仓库中 filmList 的数据，与请求得来的数据做一个拼接的操作
        //commit("setFilmList", state.filmList.concat(result.data.films));
        // commit('setFilmList', state.filmList.push(result.data.films))
        // let filmList = state.filmList
        // filmList.push(...result.data.films)
        // commit('setFilmList', filmList)

        // 执行传递过来的 payload.callback 这个回调函数
        // payload.callback && payload.callback()

        // if (payload.callback) {
        //   payload.callback();
        // }
        //}
      });
  },

  mounted() {
    // 第二个轮播的js设置
    setTimeout(() => {
      new Swiper(this.$refs.swiper2, {
        slidesPerView: 3.2,
        spaceBetween: 0
      });
    }, 1000);

    // 第一个轮播图的js设置
    setTimeout(() => {
      new Swiper(this.$refs.swiper1, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        loop: true,
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        pagination: {
          el: ".swiper-pagination1"
        }
      });
    }, 1000);

    // 第三个轮播图的js设置
    setTimeout(() => {
      new Swiper(this.$refs.swiper3, {
        pagination: {
          el: ".swiper-pagination2",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true
      });
    }, 1000);
  },
  methods : {
    // realUrl(str){
    //   return str.split('=')[1]
    // },
    // fn1(){
    //   if(this.film1.time){

    //   }
    // }
  }
};
</script>

<style lang="scss">
// @import "../assets/styles/common/mixins.scss";

.banner {
  height: 210px;

  img {
    width: 100%;
    height: 210px;
  }
}

.module {
  width: 100%;
  height: 276px;
  // background:red;
  position: relative;

  // 标栏背景图设置
  .module-name {
    height: 45px;
    line-height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png)
      no-repeat 0 11px;
    padding-left: 8px;
    padding-right: 12px;
  }

  .grey {
    color: #666;
  }

  .font-16 {
    font-size: 16px !important;
  }

  .module-con {
    width: 179px;
    height: auto;
  }

  .content-pic {
    position: relative;
    width: 117px;

    img {
      width: 100%;
    }
  }

  .font-14 {
    font-size: 14px !important;
  }

  .light-grey {
    color: #999;
  }

  .font-13 {
    font-size: 13px !important;
  }
}

// 第二个轮播样式
.swiper-container {
  .swiper-slide {
    height: 229px;
    font-size: 18px;
    background: #fff;

    .content-intro p {
      line-height: 1.7em;
      padding-left: 12px;
      padding-right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 179px;
      position: relative;
      top: 0;
    }
  }
}

// 第一个轮播样式
.swiper-container1 {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

// 第三个轮播样式
.swiper-container2 {
  height: 140px;
  position: relative;
  .swiper-pagination2 {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    z-index: 99;
  }
}
.swiper-slide {
  width: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;

  .content-pic {
    width: 100%;
    position: relative;

    img {
      width: 375px;
      height: 140px;
    }

    .status {
      width: 40px !important;
      position: absolute;
      right: 0;
      top: 10px;
      height: 18px;
    }
  }
}
</style>