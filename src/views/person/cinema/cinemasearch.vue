<template>
  <div>
    <div>
      <form action="/" class="page-head">
              <van-search
              v-model="value"
              placeholder="请输入搜索关键词"
              show-action
              shape="round"
            >
        <div slot="action"  v-if="isshow" class="right">搜索</div>
        <div slot="action" @click="cancel" v-if="!isshow" class="right">取消</div>
          </van-search>
      </form>
      <van-list
          v-model="loading"
          :finished="finished"
          loading-text="没有符合条件的影院"
          finished-text="没有更多了"
          class="list"
        >
          <van-cell
            v-for="item in list"
            :key="item.cinemaId"
            clickable
            :to="{
              name: 'cinemadetail',
              params: { id: `${item.cinemaId}`,
                        cinemaName:`${item.cinemaName}`,
                        cinemaAdd:`${item.cinemaAdd}`,
              }
              }"
          >
          <div class="rout">
              <span>
              {{item['cinemaName']}}
            </span>
              <p>
                 {{item['cinemaAdd']}}
              </p>
           </div>
            </van-cell>
        </van-list>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, Cell, CellGroup } from 'vant'
import axios from 'axios'
Vue.use(Search).use(List).use(Cell).use(CellGroup)
export default {
  name: 'cinemasearch',
  data () {
    return {
      isshow: false,
      value: '',
      cinemaes: [],
      list: [],
      loading: false,
      finished: false,
      cinemaeslist: []
    }
  },
  watch: {
    value (n, o) {
      this.isshow = n
      if (!sessionStorage.getItem('cinemaes')) {
        this.getdata()
        console.log(1)
      } else {
        let arr = JSON.parse(sessionStorage.getItem('cinemaes'))
        let arr1 = []
        for (let i in arr) {
          arr1.push(arr[i])
        }
        this.cinemaes = arr1
      }
      if (n === '') {
        this.list = []
        return
      }
      this.cinemaeslist = this.cinemaes.filter((item) => {
        return item['cinemaName'].indexOf(n) > -1
      })
      this.onLoad()
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    getdata () {
      axios.post('/api/mta-service/data/migu/validCinemaes.jsp', {
        cityCode: 4900,
        orderType: 1,
        // filmId: 51167,
        // showDate: 2019-10-18,
        longitude: '',
        latitude: ''
      }, {
        transformRequest: [ function (data) {
          let arr = []
          for (let i in data) {
            arr.push(`${i}=${data[i]}`)
          }
          data = arr.join('&')
          return data
        }]
      }).then((res) => {
        let arr = res.data.cinemaes
        for (let i in arr) {
          this.cinemaes.push(arr[i])
        }
        sessionStorage.setItem('cinemaes', JSON.stringify(this.cinemaes))
      })
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        this.list = this.cinemaeslist
        // 加载状态结束
        this.loading = false
        // 数据全部加载完
        this.finished = true
      }, 500)
    }
  }

}
</script>
<style lang="scss" scoped>
  .right{
    font-size: 16px;
  }
  .page-head{
    width: 100%;
    position: fixed;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    top: 0;
    left: 0;
    background: white;
    z-index: 10;
  }
  .list{
    margin-top: 50px;
  }
  .rout{
    span{
        color: royalblue;
        font-size: 16px;

    }
    p{
      color: #000;
      font-size: 14px;
    }
  }
</style>
