<template>
  <div>
      <van-overlay :show="show" @click="show = false" duration=""/>
        <van-loading v-if="show" size="70px" color="black" text-size="26px" vertical class="loading">登录中...</van-loading>
    <div class="all">
      <div class="login-head">
        <a href="javascript:history.back(-1)" class="iconfont icon-xiangzuo"></a>
        <span>登录</span>
      </div>
      <div class="logo">
        <img src="../../assets/personal/logo.jpg" alt="">
      </div>
      <div class="login-form">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            :error-message="usererr"
            @click-right-icon="fn1"
            />
            <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            :error-message="passerr"
            />
            <van-button
            type="info"
             size="large"
             color="linear-gradient(to right, #4bb0ff, #6149f6)"
             @click="tologin"
             style="margin-top:20px"
             round
             >
             登录
             </van-button>
          </van-cell-group>
      </div>
      <router-link to="/register">
             <van-button
            type="info"
             color="linear-gradient(to right, pink, skyblue)"
             style="margin:40px auto;"
             round
             >
             还没有账号？去注册
             </van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, PasswordInput, NumberKeyboard, Cell, CellGroup, Loading, Overlay } from 'vant'
Vue.use(Field).use(Button).use(PasswordInput).use(NumberKeyboard).use(Cell).use(CellGroup).use(Loading).use(Overlay)
export default {
  name: 'login',
  data () {
    return {
      iserror: true,
      password: '',
      username: '',
      passerr: '',
      usererr: '',
      show: false
    }
  },
  watch: {
  },
  methods: {
    fn1 () {
      console.log('???')
    },
    tologin () {
      this.show = true
      if (!localStorage.getItem(this.username)) {
        this.usererr = '用户名不存在'
        this.show = false
        return
      }
      if (!(this.password === JSON.parse(localStorage.getItem(this.username)).password)) {
        this.passerr = '密码不正确'
        this.show = false
        return
      }

      localStorage.setItem('token', this.username)
      this.$router.push('person')
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1456928_uhu941rmdti.css';
  .login-head{
    font-style: "微软雅黑";
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: relative;
    a{
      color: #000;
      text-decoration: none;
      font-size: 32px;
      color: skyblue;
      position: absolute;
      top: 3px;
      left: 10px;
      width: 20%;
    }
  }
  .logo{
    text-align: center;
    img{
      width: 40%;
      padding: auto;
    }
  }
    .loading{
    position:fixed;
    top: 40%;
    left:40%;
    text-align: center;
    z-index: 2;
  }
</style>
