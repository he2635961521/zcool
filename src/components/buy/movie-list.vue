<template>
  <div class="movieListType">
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <router-view name="a"></router-view>
      </van-tab>
      <van-tab title="即将上映"  to="/buy/list">
        <router-view name="b"></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)

export default {
  name: 'movieList',
  data () {
    return {
      active: 0
    }
  }

}
</script>
