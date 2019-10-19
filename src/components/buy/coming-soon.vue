<template>
  <div class="hotShowing">
    <ul v-for="obj in useComingList" :key="obj.date">
      <p class="date-tile"> {{ timeFormat(obj.date) }} </p>
      <li v-for="movie in obj.list" :key="movie.filmId" @click="toDetail(movie.pomsContId,movie.isPreSale)">
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
            <span :class="movie.isPreSale != '1' ? 'want' : ''" @click.stop="buyTicket(movie.pomsContId)">{{ movie.isPreSale != '1' ? '想看' : '预售' }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'comingSoon',
  data () {
    return {
      hotMovieList: []
    }
  },

  computed: {
    useComingList () {
      var arr = []
      var dateArr = []
      var index = -1
      this.hotMovieList.forEach(item => {
        index = dateArr.indexOf(item.openingDate)
        if (index > -1) {
          arr[index].list.push(item)
        } else {
          dateArr.push(item.openingDate)
          arr.push({ date: item.openingDate, list: [item] })
        }
      })
      return arr
    }
  },

  methods: {
    actorToS (str) {
      return str.split(' ').join('/')
    },

    timeFormat (str) {
      var date = new Date(str)
      var yue = date.getMonth() + 1
      var tian = date.getDate()
      var week = date.getDay()
      if (week === 0) {
        week = '日'
      } else if (week === 1) {
        week = '一'
      } else if (week === 2) {
        week = '二'
      } else if (week === 3) {
        week = '三'
      } else if (week === 4) {
        week = '四'
      } else if (week === 5) {
        week = '五'
      } else if (week === 6) {
        week = '六'
      }
      return `${yue}月${tian}日  周${week}`
    },

    toDetail (id, pre) {
      this.$router.push({ path: '/buy/detail/' + id, query: { plan: pre } })
    },

    buyTicket (id) {
      this.$router.push('/login')
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
@import "../../assets/styles/common/mixin.scss";
  .hotShowing{
    width: 100%;
    font-size: 16px;
    background: white;
    ul{
      .date-tile{
        padding: 5px 12px;
        height: 19px;
        background: rgb(239, 239, 239);
        color: #1a1a1a;
        line-height: 19px;
        font-size: 14px;
      }
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
            &.want{
              color:rgb(247, 68, 68);
              border: 1px solid rgb(247, 68, 68);
            }
          }
        }
      }
    }
  }
</style>
