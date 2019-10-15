<template>
  <div>
    <router-link to="www.baidu.com">
        <van-swipe :autoplay="3000" indicator-color="white" effect = "cube">
          <div class="freeWatch" >
            <van-swipe-item><img src="http://movie.miguvideo.com/publish/image/70/764/984.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://movie.miguvideo.com/publish/image/70/764/970.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://movie.miguvideo.com/publish/image/70/727/552.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://movie.miguvideo.com/publish/image/70/761/564.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://movie.miguvideo.com/publish/image/70/759/636.jpg" alt=""></van-swipe-item>
          </div>
      </van-swipe>

        <div class="Module">
          <div class="module-name" >热门推荐（免费）</div>
          <div class="hotFilmList">
           <ul>
            <li v-for="item in 6"
        :key="item"><a href="">
              <div class="pic">
                <img src="http://movie.miguvideo.com/publish/poms/image/5500/088/773/201809071031_98948_HSJ720V.jpg" alt="">
                <p class="pionts">7.8</p>
              </div>            
              <div class="filmDescribe">
                <p class="firstClunm">三生三世十里桃花</p>
                <p class="secondClunm">杨洋刘亦菲三十虐恋</p>
              </div>
              </a>
              </li>              
              </ul>
          </div>
        </div>

     <div class="Module">
          <div class="module-name" >票房过亿的电影</div>
          <div class="hotFilmList">
           <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="item in 6" :key="item"><a href="">
              <div class="pic">
                <img src="http://movie.miguvideo.com/publish/poms/image/5500/088/773/201809071031_98948_HSJ720V.jpg" alt="">
                <p class="pionts">7.8</p>
              </div>            
              <div class="filmDescribe">
                <p class="firstClunm">三生三世十里桃花</p>
                <p class="secondClunm">杨洋刘亦菲三十虐恋</p>
              </div>
              </a>
              </li>              
              </ul>
          </div>
        </div>
        </router-link>
      </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
    @import '../assets/styles/common/mixins.scss';

    .freeWatch {
        height: 210px;
        img {
           height:210px;
           width: 100%
        }        
    }
    
   .Module {
     list-style: none;
       font-size: 16px;
       color: #666666;
       .module-name{
         height: 45px;
           background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png)
           no-repeat 0 11px;
           background-size: 3px 23px;
           line-height: 45px;
           padding-left: 8px;
           padding-right: 12px
       }
       .hotFilmList{
         width: 100%;
         ul{
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           li{
             width: 32%
           }           
         }
         font-size: 14px;
         img{
         width: 120px;
         height: 175px
         }
         .pic{
           position: relative;
           .pionts{
             position: absolute;
             right: 0px;
             bottom: 5px;
             background: rgba(1,1,5,0.5);
             text-align: right;
             padding: 0px 8px;
             color:#f7443c;
             font-size: 16px
           }
         }
         .filmDescribe{
           .firstClunm{
             font-size: 14px;
             color: #666666;
              padding-left: 12px;
              padding-right: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              padding-top:5px;
            }
           .secondClunm{
             font-size: 13px;
             color: #999;
              padding-left: 12px;
              padding-right: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              padding-top:5px;
              padding-bottom:5px;
           }
         }

       }
    }
</style>
