<template>
  <div class="ciname">
    <div class="choiseCity">
      <div class="pull-left">
        <ul><li>附近</li></ul>
      </div>
      <div class="pull-right">
        <span class="iconfont icon-down1"></span>
      </div>
    </div>
    <div class="addressList">
      <ul>
        <li v-for="ciname in cinameList" :key="ciname.cinemaId" @click="toCinameDetail(ciname)">
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
import axios from 'axios'
export default {
  data () {
    return {
      curCity: '深圳',
      cinameList: []
    }
  },
  methods: {
    toCinameDetail (ciname) {
      this.$router.push({
        name: 'cinemadetail',
        params: { id: ciname.cinemaId, cinemaAdd: ciname.cinemaAdd, cinemaName: ciname.cinemaName }
      })
    }
  },

  created () {
    axios({
      method: 'post',
      url: '/api/mta-service/data/migu/validCinemaes.jsp',
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
      console.log(response)
      this.cinameList = response.data.cinemaes
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
  .choiseCity{
    background: white;
    width: 100%;
    height: 41px;
    display: flex;
    .pull-left{
      width: 364px;
      height: 41px;
      li{
        width: 20%;
        height: 39px;
        line-height: 39px;
        text-align: center;
        color: #F74444;
        font-size: 14px;
        border-bottom: 2px solid #F74444;
      }
    }
    .pull-right{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
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
</style>
