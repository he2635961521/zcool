<template>
  <div class="byCiname">
    <van-nav-bar
      :title="filmName"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <span class="iconfont icon-sousuo" slot="right" ></span>
    </van-nav-bar>

    <ul class="selectDate">
      <li v-for="(item,index) in useDateList" :key="index" :class="curIndex === index ? 'activee' : ''" @click="curIndex=index"><div>{{ item }}</div></li>
    </ul>

    <div class="addressList">
      <ul>
        <li v-for="ciname in cinameList" :key="ciname.cinemaId" @click="toByTiket(ciname)">
          <div class="cinameName">
            {{ ciname.cinemaName }}
          </div>
          <div class="cinameAddress">
            {{ ciname.cinemaAdd }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import axios from 'axios'

Vue.use(NavBar)
export default {
  data () {
    return {
      filmName: '我和我的祖国',
      dateList: [],
      cinameList: [],
      curIndex: 0
    }
  },
  computed: {
    useDateList () {
      var arr = []
      this.dateList.forEach(item => {
        var date = new Date(item.showdate)
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
        arr.push(`${yue}-${tian}  周${week}`)
      })
      return arr
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.push('/cinemasearch')
    },
    toByTiket (ciname) {
      this.$router.push({
        name: 'cinemadetail',
        params: { id: ciname.cinemaId, cinemaAdd: ciname.cinemaAdd, cinemaName: ciname.cinemaName }
      })
    }
  },
  watch: {
    dateList () {
      if (this.dateList[this.curIndex]) {
        axios.post('api/mta-service/data/migu/validCinemaes.jsp', { cityCode: this.$store.state.curCity.cityCode,
          filmId: this.$route.query.filmId,
          orderType: 1,
          showDate: this.dateList[this.curIndex].showdate,
          regionCode: '',
          longitude: '',
          latitude: '' }, {
          transformRequest: (data) => {
            let arr = []
            for (const key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }).then(response => {
          this.cinameList = response.data.cinemaes
        })
      }
    },
    curIndex () {
      axios.post('api/mta-service/data/migu/validCinemaes.jsp', { cityCode: this.$store.state.curCity.cityCode,
        filmId: this.$route.query.filmId,
        orderType: 1,
        showDate: this.dateList[this.curIndex].showdate,
        regionCode: '',
        longitude: '',
        latitude: '' }, {
        transformRequest: (data) => {
          let arr = []
          for (const key in data) {
            arr.push(`${key}=${data[key]}`)
          }
          return arr.join('&')
        }
      }).then(response => {
        this.cinameList = response.data.cinemaes
      })
    }
  },
  created () {
    this.filmName = this.$route.query.name
    axios.post('/api/mta-service/data/migu/filmShowdates.jsp', { cityCode: this.$store.state.curCity.cityCode,
      filmId: this.$route.query.filmId,
      regionCode: '' },
    {
      transformRequest: (data) => {
        let arr = []
        for (const key in data) {
          arr.push(`${key}=${data[key]}`)
        }
        return arr.join('&')
      }
    }).then(response => {
      this.dateList = response.data.showdates
    })
  }

}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
  .byCiname{
    width: 100%;
    .selectDate{
      @include border-top;
      height: 42px;
      display: flex;
      overflow: auto;
      li{
        height: 40px;
        div{
          text-align: center;
          width: 92px;
          height: 42px;
          font-size: 14px;
          padding-top: 15px;
          box-sizing: border-box;
        }
      }
      .activee{
        color:#F74444;
        border-bottom:2px solid #F74444;
      }
    }
    .addressList{
    background: white;
    li{
      height: 62px;
      @include border-bottom;
      padding: 12px;
      .cinameName{
        height: 21px;
        font-size: 16px;
        color: #666;
      }
      .cinameAddress{
        width: 273px;
        font-size: 14px;
        height: 19px;
        padding: 5px 0;
        color: #000;
        margin-top: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  }
</style>
