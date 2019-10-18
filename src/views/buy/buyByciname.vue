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
      <li>星期五星期五星期五星期五星期五星期五星期五星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
      <li>星期五</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  data () {
    return {
      filmName: '我和我的祖国'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.push('/cinemasearch')
    }
  },
  created () {
    this.filmName = this.$route.query.name
  }

}
</script>

<style lang="scss">
  .byCiname{
    width: 100%;
    .selectDate{
      height: 42px;
      display: flex;
      li{
        width: 92px;
        height: 42px;
        font-size: 16px;
        text-align: center;
      }
    }
  }
</style>
