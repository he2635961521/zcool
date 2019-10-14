<template>
    <div>
        <van-swipe class="banner" :autoplay="3000" indicator-color="white">
            <div class="lunbo">
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/734/308.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/410/809.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/753/912.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/755/53.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/751/651.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/756/202.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://movie.miguvideo.com/publish/i_www/image/70/747/433.jpg">
                </van-swipe-item>
            </div>
        </van-swipe>

        <div class="module">
            <div class="module-name grey font-16">正在售票</div>

        </div>

    </div>

</template>

<script>
export default {
    data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/styles/common/mixins.scss';

    .banner {
        height: 210px;

        img {
            width : 100%;
            height : 210px;
        }
    }

    .module {
        width:100%;
        height:276px;
        // background:red;

        .module-name {
            height: 45px;
            line-height: 45px;
            background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png) no-repeat 0 11px;
            padding-left: 8px;
            padding-right: 12px;
        }

        .grey {
            color: #666;
        }

        .font-16 {
            font-size: 16px !important;
        }

        .module-con {
            width: 179px;
            height: auto;
        }

        .content-pic {
            position: relative ;
            width: 117px ;

            img {
                width:100%
            }
        }




    }

</style>