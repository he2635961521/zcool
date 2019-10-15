<template>
  <div class="bookMovie">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <div slot="left">
        <router-link to="/selectCity">
          <i>选择城市</i>
          <span class="iconfont icon-down"></span>
        </router-link>
      </div>
      <div slot="title" class="checkType">
        <button :class="curActive == 'film' ? 'left active':'left'" @click="filmClick">影片</button>
        <button :class="curActive == 'ciname' ? 'right active':'right'" @click="cinameClick">影院</button>
      </div>
    </van-nav-bar>
    <component :is="curComponent"></component>
  </div>

</template>

<script>
import Vue from 'vue'
import { navBar } from 'vant'
import movieList from '../components/movie-list'
import cinameList from '../components/ciname-list'
Vue.use(navBar)

export default {
  data () {
    return {
      curComponent: movieList,
      curActive: 'film'
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
@import "../assets/styles/common/mixin.scss";
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
