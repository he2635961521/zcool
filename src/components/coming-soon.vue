<template>
  <div class="hotShowing">
    <ul>
      <li v-for="movie in hotMovieList" :key="movie.filmId">
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
        <div class="buyTiket">
            <span>预售</span>
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

  methods: {
    actorToS (str) {
      return str.split(' ').join('/')
    }
  },

  created () {
    axios.get('http://movie.miguvideo.com/mgw/bsdata4mv/v2/movieListPreview?pageNo=0&pageSize=20').then(respose => {
      this.hotMovieList = respose.data.body.movieList
    })
  }
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
          span{
            width: 46px;
            height: 26px;
            color: rgb(107,188,203);
            border: 1px solid rgb(107,188,233);
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
            line-height: 26px;
          }
        }
      }
    }
  }
</style>
