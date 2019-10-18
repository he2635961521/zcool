<template>
  <div class="GPSCity">
    <van-nav-bar  title="选择城市"  left-text="关闭" @click-left="onClickLeft"/>

    <van-index-bar :sticky="false" highlight-color="#323233">
      <div class="van-index-anchor">GPS定位你所在的城市</div>
      <div class="van-cell"> {{ curCity.cityName }} </div>
      <div  v-for="type in useCityList" :key="type.code">
        <van-index-anchor :index="type.code.toUpperCase()" >{{ type.code }}</van-index-anchor>
        <van-cell v-for="city in type.list"  :key="city.cityId" :title="city.cityName" @click="selectCity(city)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, NavBar } from 'vant'
import axios from 'axios'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(NavBar)
export default {
  name: 'city',
  data () {
    return {
      cityList: []
    }
  },
  computed: {

    useCityList () {
      let arr = []
      this.cityList.forEach(item => {
        if (!item.cityCode) {
          arr.push({ code: item.cityName, list: [] })
        } else {
          arr[arr.length - 1].list.push(item)
        }
      })
      return arr
    },

    curCity () {
      return this.$store.state.curCity
    }
  },

  methods: {
    ...mapMutations(['setCurCity']),

    onClickLeft () {
      this.$router.push('/buy/list')
    },

    selectCity (city) {
      this.setCurCity(city)
      this.$router.push('/buy/list')
    }
  },

  created () {
    axios({
      method: 'post',
      url: '/api/mta-service/data/migu/cities.jsp',
      data: {
        cityCode: 4900,
        orderType: 1
      },
      transformRequest: (data) => {
        let arr = []
        for (const key in data) {
          arr.push(`${key}=${data[key]}`)
        }
        return arr.join('&')
      }
    }).then(response => {
      this.cityList = response.data.cities
    })
  }
}
</script>

<style lang="scss">
  .GPSCity{
    background: white;
    padding: 12px;
    .van-nav-bar{
      background: #eb3452;
      .van-nav-bar__text{
        color: white;
        background: #eb3452;
      }
      .van-nav-bar__title{
        color: white;
      }
    }
    .van-index-bar{
      .van-index-anchor{
        background: #dfe2e7;
        margin: 15px 0;
        height: 55px;
        font-size: 20px;
        font-weight: bold;
        line-height: 55px;
      }
      .van-cell{
        border-top: 1px solid #cdccd1;
        color: #323232;
        background: #f5f5f5;
        height: 50px;
      }
      .van-index-bar__sidebar{
        background: #7f7f7f;
        opacity: 0.5;
        color: white;
        display: flex;
        flex-direction: column;
        transform: translateY(-50%);
        margin-right:15px;
        border-radius:5px;
        span{
          padding: 3px 10px;
          font-size: 16px;
        }
        .van-index-anchor{
          background:red;
        }
      }
    }
  }
</style>
