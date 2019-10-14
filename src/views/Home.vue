<template>
  <div class="home">
    <header>头</header>
    <div id="content">
      aa
    </div>
    <footer>底</footer>
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
      background: green;
    }
    #content{
      background: yellow;
      flex: 1;
    }
  }
</style>
