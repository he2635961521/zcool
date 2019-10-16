<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of updownloop" :key="index">
          <img :src="`http://movie.miguvideo.com/publish/${item.imgSrc}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 230px;
}
.swiper-slide {
  img {
    height: 100%;
    width: 100%;
  }
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
}
</style>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'

export default {
  name: 'filmMenu',

  data () {
    return {
      updownloop: []
    }
  },

  created () {
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 1
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.updownloop = response.data[0].list
        console.log(this.updownloop[0].imgSrc)
      })
  },

  mounted () {
    setTimeout(() => {
      /* eslint-disable */
      new Swiper('.swiper-container', {
        loop: true,
        slidesPperView: 'auto',
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        direction: 'vertical', // 纵向切换，默认：horizontal（横向切换）
        // spaceBetween: 0,
        // freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }, 1000)
  }
}
</script>
