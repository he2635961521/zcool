<template>
  <div>
    <van-swipe class="banner" :autoplay="3000" indicator-color="white">
      <div class="lunbo">
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/734/308.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/410/809.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/753/912.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/755/53.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/751/651.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/756/202.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://movie.miguvideo.com/publish/i_www/image/70/747/433.jpg" />
        </van-swipe-item>
      </div>
    </van-swipe>

    <div class="module">
      <div class="module-name grey font-16">正在售票</div>
      <div class="swiper-container" style="height: 100px">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 2,
      spaceBetween: 30
    });
  }
};
</script>

<style lang="scss">
@import "../assets/styles/common/mixins.scss";

.banner {
  height: 210px;

  img {
    width: 100%;
    height: 210px;
  }
}

.module {
  width: 100%;
  height: 276px;
  // background:red;

  .module-name {
    height: 45px;
    line-height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png)
      no-repeat 0 11px;
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
    position: relative;
    width: 117px;

    img {
      width: 100%;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>