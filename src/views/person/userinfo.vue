<template>
  <div>
    <div class="head">
      <a href="javascript:history.back(-1)" class="iconfont icon-xiangzuo"></a>
          <span>个人资料</span>
        </div>
        <div class="page-head">
          <router-link :to="tolink">
          <a href="#">
               <div class="user">
              <div class="photo"></div>
            </div>
            <p>{{message}}</p>
          </a>
          </router-link>
        </div>
        <van-button size="large" round color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="logout">退出登录</van-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  name: 'userinfo',
  data () {
    return {
      message: '',
      tolink: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(res => {
      if (localStorage.getItem('token')) {
        res.message = localStorage.getItem('token')
      } else {
        res.message = '点击登录'
        res.tolink = '/login'
      }
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
 @import '//at.alicdn.com/t/font_1456928_6lhqkcmylxf.css';
 .head{
    text-align: center;
    color: #333;
    font-size: 17px;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    box-sizing: border-box;
    span{
    position: relative;
    top: 3px;
    }
    a{
    color: #000;
    float: left;
    text-decoration: none;
    width:50px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    }
  }
   .page-head{
    padding: 20px 10px;
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 55px;
    a{
      display: inline !important;
      color: #000;
    text-decoration: none;
         .user{
    width: 12.66%;
    text-align: right;
    float: left;

      .photo{
    width: 56px;
    height: 56px;
    background-image: url(../../assets/personal/timg.jpg);
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    text-align: right;
    display: inline-block;
      }
      }
          p{
   width: 70%;
    height: 56px;
    line-height: 56px;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    font-size: 16px;
}
    }}
</style>
