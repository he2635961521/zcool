<template>
  <div class="hotShowing">
    <ul>
      <li v-for="movie in hotMovieList" :key="movie.filmId" @click="toDetail(movie.pomsContId)">
        <div class="movie-left">
          <img :src="`${movie.h5pics.highResolutionV}`" alt="">
        </div>
        <div class="movie-right">
          <div class="title">
            <h3>{{ movie.filmName }}</h3>
          </div>
          <div class="director">
            导演：{{ movie.director }}
          </div>
          <div class="actor">
            主演：{{ actorToS(movie.actor) }}
          </div>
        </div>
        <div class="buyTiket" >
            <img @click.stop="buyTicket(movie)" src="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/images/icon/oreder.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hotShowing',
  data () {
    return {
      hotMovieList: []
    }
  },

  computed: {
    cityCode () {
      return this.$store.state.curCity.cityCode
    }
  },

  methods: {
    actorToS (str) {
      return str.split(' ').join('/')
    },
    toDetail (id) {
      this.$router.push('/buy/detail/' + id)
    },
    buyTicket (id) {
      this.$router.push({ path: '/buy/byciname', query: id })
    }
  },

  created () {
    axios.get(`http://movie.miguvideo.com/mgw/bsdata4mv/v2/movieListShow/4708?cityCode=${this.cityCode}`).then(respose => {
      this.hotMovieList = respose.data.body.movieList
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
  .hotShowing{
    background: white;
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
            width: 205px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
