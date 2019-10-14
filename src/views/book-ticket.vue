<template>
  <div class="bookMovie">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <div slot="left">
        <a href="">
          <i>选择城市</i>
          <span class="iconfont icon-down"></span>
        </a>
      </div>
      <div slot="title" class="checkType">
        <button class="left">影片</button>
        <button class="right">影院</button>
      </div>
    </van-nav-bar>
    <component :is="curComponent"></component>
  </div>

</template>

<script>
import Vue from 'vue'
import { navBar } from 'vant'
import movieList from '../components/movie-list'
Vue.use(navBar)

export default {
  data () {
    return {
      curComponent: movieList
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/common/mixin.scss";
  .head{
    height: 44px;
    @include border-bottom;
  }
  .checkType{
    margin-top: 3px;
    button{
      border: none;
      background: none;
      width: 63px;
      height: 28px;
      line-height: 28px;
      border-top: 1px solid #F74444;
      border-bottom: 1px solid #F74444;
      color: #F74444;
    }
    .left{
      border-left: 1px solid #F74444;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .right{
      border-right: 1px solid #F74444;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

</style>
