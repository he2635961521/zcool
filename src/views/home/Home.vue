<template>
  <div class="page-home">
      <!-- 一级路由页面,首页 -->

    <!-- 二级路由页面坑 -->
    <router-view></router-view>

    <ul class="navbar">
        <router-link tag="li" to="/films">
            <i class="iconfont icon-dianying"></i>
            <span>看片</span>
        </router-link>
        <router-link tag="li" to="/cinemas">
            <i class="iconfont icon-goupiao1"></i>
            <span>购票</span>
        </router-link>
        <router-link tag="li" to="/center">
            <i class="iconfont icon-yonghu-copy"></i>
            <span>我的</span>
        </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
// @import '../../assets/styles/common/mixins.scss';
.page-home{
    height:100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    > div:first-child {
        flex: 1;
        overflow-y: auto
    }

    .navbar {
        display:flex;
        height:50px;

        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height:50px;
            text-align: center;
            color: #797d82;

            i {
                margin-bottom: 2px;
                font-size: 24px;
            }

            span {
                font-size: 12px
            }

            &.router-link-active {
                color: rgb(255, 0, 0);
            }
        }
    }


}
</style>