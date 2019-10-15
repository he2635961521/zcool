<template>
  <div class="GPSCity">
    <van-nav-bar  title="选择城市"  left-text="关闭"/>
    <!-- <div class="title">
      GPS定位你所在的城市
    </div> -->
    <van-index-bar>
      <van-index-anchor :index="cityType.toUpperCase()" v-for="cityType in indexList" :key="cityType">{{ cityType }}</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, NavBar } from 'vant'
import axios from 'axios'

Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(NavBar)
export default {
  name: 'city',
  data () {
    return {
      indexList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'],
      cityList: []
    }
  },
  computed: {
    useCityList () {
      let arr = []
      this.cityList.forEach(item => {
        if (!item.cityCode) {
          arr.push({ code: item.cityCode, list: [] })
        } else {
          arr[arr.length - 1].list.push(item.cityName)
        }
      })
      return arr
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
        transform: translateY(-55%);
        span{
          padding: 2px 10px;
          font-size: 16px;
        }
      }
    }
  }
</style>
