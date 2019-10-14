<template>
  <div class="movieListType">
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <hot-showing></hot-showing>
      </van-tab>
      <van-tab title="即将上映">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import hotShow from './hot-showing'

Vue.use(Tab).use(Tabs)

export default {
  name: 'movieListType',
  data () {
    return {
      active: 0
    }
  },
  components: {
    'hot-showing': hotShow
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }

}
</script>
