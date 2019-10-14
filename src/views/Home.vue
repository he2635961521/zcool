<template>
  <div class="home">
    <header>头</header>
    <div id="content">
      aa
    </div>
    <footer>
      <ul>
        <li>
          <i class="iconfont icon-huaban"></i>
          <span>看片</span>
        </li>
        <li>
          <i class="iconfont icon-goupiao"></i>
          <span>购票</span>
        </li>
        <li>
          <i class="iconfont icon-home"></i>
          <span>我的</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  html,body{
    height: 100%;
  }
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
      width: 100%;
      height: 82px;
      background: red;
    }
    footer{
      width: 100%;
      height: 50px;
      ul{
        display: flex;
        height: 50px;
        li{
          display: flex;
          flex-direction: column;
          flex:1;
          text-align: center;
          font-size: 16px;
          justify-content: center;
        }
      }
    }
    #content{
      background: yellow;
      flex: 1;
    }
  }
</style>
