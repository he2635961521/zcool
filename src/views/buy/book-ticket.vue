<template>
  <div class="bookMovie">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <div slot="left">
        <router-link to="/buy/selectCity">
          <i>{{ curCity.cityName }}</i>
          <span class="iconfont icon-down"></span>
        </router-link>
      </div>
      <div slot="title" class="checkType">
        <button :class="curActive == 'film' ? 'left active':'left'" @click="filmClick">影片</button>
        <button :class="curActive == 'ciname' ? 'right active':'right'" @click="cinameClick">影院</button>
      </div>
      <div class="search" slot="right" v-if="curActive == 'ciname'">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </van-nav-bar>
    <component :is="curComponent"></component>
  </div>

</template>

<script>
import Vue from 'vue'
import { navBar } from 'vant'
import movieList from '../../components/buy/movie-list'
import cinameList from '../../components/buy/ciname-list.vue'
Vue.use(navBar)

export default {
  data () {
    return {
      curComponent: movieList,
      curActive: 'film'
    }
  },

  computed: {
    curCity () {
      return this.$store.state.curCity
    }
  },

  methods: {
    filmClick () {
      this.curComponent = movieList
      this.curActive = 'film'
    },
    cinameClick () {
      this.curComponent = cinameList
      this.curActive = 'ciname'
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
  .van-nav-bar__left{
    i{
      font-size: 16px;
      color: #666;
    }
  }
  .checkType{
    button{
      border: none;
      background: none;
      width: 63px;
      height: 28px;
      line-height: 26px;
      border-top: 1px solid #F74444;
      border-bottom: 1px solid #F74444;
      color: #F74444;
      font-size: 14px;
    }
    .left{
      border-left: 1px solid #F74444;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      &.active{
      background: #F74444;
      color : white;
      }
    }
    .right{
      border-right: 1px solid #F74444;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &.active{
      background: #F74444;
      color : white;
      }
    }

  }

</style>
