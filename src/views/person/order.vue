<template>
  <div>
    <div>
     <van-cell-group class="page-head">
       <a class="iconfont icon-zuojiantou" href="javascript:history.back(-1)"></a>
      <span> 我的订单</span>

    </van-cell-group>
    <div class="rout">
      <router-link to="/person/order/moviecard" id="movie">
      电影票
      </router-link>
      <router-link to="/person/order/showcard" id="show">
      演出票
      </router-link>
    </div>
    <router-view>   </router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button, Field, PasswordInput, NumberKeyboard, Cell, CellGroup, Loading, Overlay, Icon } from 'vant'
Vue.use(Field).use(Button).use(PasswordInput).use(NumberKeyboard).use(Cell).use(CellGroup).use(Loading).use(Overlay).use(Icon)
export default {
  name: 'order',
  beforeRouteEnter (to, from, next) {
    next(res => {
      if (!localStorage.getItem('token')) {
        res.$router.push('/login')
      }
    })
  },
  methods: {
    goback () {
      console.log('dad')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1456928_2zhn9vat3xx.css';
  .page-head{
    font-size: 26px;
    text-align: center;
    position: relative;
    height: 50px;
    a{
      position: absolute;
      left:0;
     line-height: 50px;
      font-size: 32px;
      color: #000;
    }
    span{
      font-size: 24px;
      font-style: "宋体";
      line-height: 50px;
    }
  }
  .rout{
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    #movie{
      width: 50%;
      color: #000;
      text-align: center;
    }
    #show{
        width: 50%;
      color: #000;
        text-align: center;
    }
    .router-link-active{
      color: red !important;
      border-bottom: red 1px solid;
    }
  }
</style>
