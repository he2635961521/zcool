<template>
  <div class="bscroll" style="height:720px">
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) of updownloop" :key="index">
            <div class="luuuu"></div>
            <img :src="`http://movie.miguvideo.com/publish/${item.imgSrc}`" />
          </div>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">影史100个经典角色</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(people,index)  in filmPeople" :key="index" style="padding-right:6px">
              <a href>
                <div class="pic">
                  <img
                    style="width:118px,heiht:175px"
                    :src="`http://movie.miguvideo.com/publish/i_www/${people.imgSrc}`"
                    alt
                  />
                  <!-- <p class="pionts">{{blmovies.miguScore}}</p> -->
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{people.name}}</p>
                  <p class="secondClunm">{{people.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">影史100人</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(oneman,index)  in peple" :key="index" style="padding-right:3px">
              <a href>
                <div class="pic">
                  <img
                    style="width:118px,heiht:175px"
                    :src="`http://movie.miguvideo.com/publish/i_www/${oneman.imgSrc}`"
                    alt
                  />
                  <!-- <p class="pionts">{{blmovies.miguScore}}</p> -->
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{oneman.name}}</p>
                  <p class="secondClunm">{{oneman.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">电影魔方</div>
        <div class="hotFilmList box">
          <div class="hotFilmListBig">豆瓣TOP250</div>
          <div class="hotFilmListSmall">帝国TOP</div>
          <div class="hotFilmListSmall">金马奖佳片</div>
          <div class="hotFilmListSmall">IMDb TOP</div>
          <div class="hotFilmListBig">奥斯卡最佳影片</div>
          <div class="hotFilmListSmall">金像奖佳片</div>
          <div class="hotFilmListSmall">柏林金熊奖</div>
          <div class="hotFilmListSmall">戛纳金棕榈</div>
          <div class="hotFilmListSmall">威尼斯金狮</div>
          <div class="hotFilmListSmall">金鸡奖佳片</div>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{name.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(item,index) of women" :key="index">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${item.imgSrcV}`" alt />
                  <p class="pionts">{{item.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{item.name}}</p>
                  <p class="secondClunm">{{item.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{gongqijunname.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(gongqi,index) of gongqijun" :key="index" style="padding-right:6px">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${gongqi.imgSrcV}`" alt />
                  <p class="pionts">{{gongqi.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{gongqi.name}}</p>
                  <p class="secondClunm">{{gongqi.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{manandwolfname.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(wolf,index) of manandwolf" :key="index" style="padding-right:6px">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${wolf.imgSrcV}`" alt />
                  <p class="pionts">{{wolf.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{wolf.name}}</p>
                  <p class="secondClunm">{{wolf.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{marvelFilmName.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(marvel,index) of marvelFilm" :key="index" style="padding-right:6px">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${marvel.imgSrcV}`" alt />
                  <p class="pionts">{{marvel.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{marvel.name}}</p>
                  <p class="secondClunm">{{marvel.LONG_NAME}}</p>
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
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'filmMenu',

  data () {
    return {
      updownloop: [],
      filmPeople: [],
      peple: [],
      name: {},

      women: [],
      filterWomen: [],
      womenname: {},

      gongqijun: [],
      gongqijunname: {},

      manandwolf: [],
      manandwolfname: {},

      marvelFilmName: [],
      marvelFilm: [],
      marvelFilmFilter: []
    }
  },

  created () {
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 1
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.updownloop = response.data[0].list
        this.filmPeople = response.data[1].list
        this.peple = response.data[2].list
      })
    // 女性导演作品
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 2
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.name = response.data[1]
        this.filterWomen = response.data[1].list
        this.women = this.filterWomen.filter(item => item.imgSrcH)
      })

    // 宫崎骏
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 7
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.gongqijunname = response.data[1]
        this.gongqijun = response.data[1].list
      })
    // 少年与狼
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 15
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.manandwolfname = response.data[1]
        this.manandwolf = response.data[1].list
      })

    // 漫威电影
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70035127,
          pagesize: 3,
          pageidx: 2
        },
        {
          transformRequest: data => {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.marvelFilmName = response.data[2]
        this.marvelFilmFilter = response.data[2].list
        this.marvelFilm = this.marvelFilmFilter.filter(item => item.imgSrcV)
      })
  },

  mounted () {
    setTimeout(() => {
      /* eslint-disable */
      new Swiper(".swiper-container", {
        loop: true,
        slidesPperView: "auto",
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        direction: "vertical", // 纵向切换，默认：horizontal（横向切换）
        // spaceBetween: 0,
        // freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }, 1000);

    let bs = new BScroll(".bscroll", {
      probeType:3,
      click: true,
      eventPassthrough: 'horizontal',
      pullUpLoad:true // 开启上拉加载
    })
  }
};
</script>


<style lang="scss">
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.box {
  justify-content: space-between;
  align-content: space-around;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
}
.hotFilmListBig {
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 82px;
  width: 186px;
  height: 81px;
  background: #ca9494;
}
.hotFilmListSmall {
  font-size: 16px;
  color: #fff;
  line-height: 82px;
  text-align: center;
  width: 92px;
  height: 82px;
  background: #b97979;
}
.swiper-container {
  width: 100%;
  height: 230px;
}
.swiper-slide {
  img {
    height: 100%;
    width: 100%;
  }
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

