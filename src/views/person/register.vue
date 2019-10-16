<template>
  <div>
      <van-overlay :show="show" @click="show = false" duration="0.5"/>
        <van-loading v-if="show" size="70px" color="black" text-size="26px" vertical class="loading">注册中...</van-loading>
    <div class="all">
      <div class="login-head">
        <a href="javascript:history.back(-1)" class="iconfont icon-xiangzuo"></a>
        <span>注册</span>
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
           @click-error-message="fn1"
            :error-message="passerr"
            />
            <van-button
            type="info"
             size="large"
             color="linear-gradient(to right, #4bb0ff, #6149f6)"
             @click="reg"
             style="margin-top:20px"
             :disabled="isbut"
             >
             注册
             </van-button>
          </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, PasswordInput, NumberKeyboard, Cell, CellGroup, Loading,Overlay } from 'vant'
Vue.use(Field).use(Button).use(PasswordInput).use(NumberKeyboard).use(Cell).use(CellGroup).use(Loading).use(Overlay)
export default {
  name: 'register',
  data () {
    return {
      iserror: true,
      password: '',
      username: '',
      passerr: '',
      usererr: '',
      show: false,
      isbut: true
    }
  },
  watch: {
    username (n, o) {
      //用户名正则，4到16位（字母，数字，下划线，减号）
        let uPattern = /^[a-zA-Z0-9_-]{4,16}$/
        if (!uPattern.test(n)){
          this.usererr='用户名应该为4到16位（字母，数字，下划线，减号'
        } else{
           this.usererr=''
        }
        this.isbut=!(!this.passerr && !this.usererr)
    },
    password (n, o) {
      //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
   if (!pPattern.test(n)){
          this.passerr='最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
        } else{
           this.passerr=''
        }
        this.isbut=!(!this.passerr && !this.usererr)
    }
  },
  methods: {
    fn1 () {

    },
  // 注册函数
    reg () {
     this.show=true
    this.$store.commit('useradd')

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
