<template>
    <div>
      <div class="all">
        <div class="head">
          <span>我的</span>
          <a href="#" class="h-right">
            <i class="iconfont icon-shezhi"></i>
          </a>
        </div>
        <!-- head结束 -->
        <div class="page-head">
          <a href="#">
            <router-link to="/login">
               <div class="user">
              <div class="photo"></div>
            </div>
            <p>点击登录</p>
               </router-link>
          </a>
          <div class="past">
            <i class="iconfont icon-xiangyou"></i>
          </div>
        </div>
        <!-- page-head结束 -->
        <div class="page-body">
            <div class="list">
              <ul>
                <li>
                    <div class="my-list clearfix">
                        <span class="pull-left"><img src="../../assets/personal/order.png" width="16px">
                        <span class="margin-left-5">我的订单</span></span>
                        <span class="pull-right">
                           <i class="iconfont icon-xiangyou"></i>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="my-list clearfix">
                        <span class="pull-left"><img src="../../assets/personal/wallet.png" width="16px">
                        <span class="margin-left-5">我的钱包</span></span>
                        <span class="pull-right">
                            <span class="type-all">电影卡 票券 权益 积分</span>
                            <i class="iconfont icon-xiangyou"></i>
                        </span>
                    </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                    <div class="my-list clearfix">
                        <span class="pull-left"><img src="../../assets/personal/question.png" width="16px"><span class="margin-left-5">常见问题</span></span>
                        <span class="pull-right">
                          <i class="iconfont icon-xiangyou"></i>
                          </span>
                    </div>
                </li>
                <li>
                    <div class="my-list no-border clearfix">
                        <span class="pull-left"><img src="../../assets/personal/serv-online.png" width="16px"><span class="margin-left-5">在线客服</span></span>
                        <span class="pull-right">
                           <i class="iconfont icon-xiangyou"></i>
                        </span>
                    </div>
                </li>
              </ul>
            </div>
            <div class="list">
            <ul>
                <li>
                    <a href="/lovev/miguMovie/find/mall.jsp?nodeId=70023246">
                        <div class="my-list clearfix">
                            <span class="pull-left"><img src="../../assets/personal/shopping.png" width="16px"><span class="margin-left-5">商城</span></span>
                            <span class="pull-right">
                              <i class="iconfont icon-xiangyou"></i>
                              </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/lovev/miguMovie/aboutTicket/aboutTicket_index.jsp">
                        <div class="my-list clearfix">
                            <span class="pull-left"><img src="../../assets/personal/949.png" width="16px"><span class="margin-left-5">约票</span></span>
                            <span class="pull-right">
                              <i class="iconfont icon-xiangyou"></i>
                            </span>
                        </div>
                    </a>
                </li>
               </ul>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'person',
  beforeRouteEnter: (to, from, next) => {
    console.log(this)
    console.log('进入之前')
    // console.log(this.$store.state)
    next(vm => {
      console.log(vm)
    })
  },
  data () {
    return {
      name: '233'
    }
  },
  methods: {
    fn1 () {
      console.log('被惦记了')
      console.log(this.$store)
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1456928_ac8p7ufj4n.css';
  .clearfix{overflow:hidden;_zoom:1;}
  .all{
    position: relative;
    background-color: #f0f0f0;
    margin-bottom: 90px;
}

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
    text-decoration: none;
    float: right;
    }
  }
  .page-head{
    padding: 20px 10px;
    background-color: #fff;
    position: relative;
    width: 533px;
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
    width: 42.98%;
    height: 56px;
    line-height: 56px;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    font-size: 16px;
}
    }
    .past{
          width: 10.32%;
    padding:15px 0;
    text-align: right;
    float: left;
    color: #000;
    }
    }
    .list{
      margin-top: 10px;
    background-color: #fff;
    color: #1a1a1a;
    font-size: 15px;
    a{
      color: #000;
    }
    }
  .my-list{
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;

  }
  .pull-left {
    float: left;
     margin-left: 10px;
}
  .pull-right {
    float: right;
}
  .margin-left-5 {
    margin-left: 5px;
}
.type-all {
    font-size: 13px;
    color: #999;
}
</style>
