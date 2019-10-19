<template>
  <div class="bscroll" style="height:720px">
    <div class="wmy">
      <div class="swiper-container swiper-container11" ref="swiper4">
        <div class="swiper-wrapper ">
          <div class="swiper-slide" v-for="(item,index) of updownloop" :key="index">
             <a :href="`${item.wapUrl}`">
            <div class="luuuu"></div>
            <img :src="`http://movie.miguvideo.com/publish/${item.imgSrc}`" />
             </a>
          </div>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{peopletitlle.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(people,index)  in filmPeople" :key="index" style="padding-right:6px">
              <a :href="`http://localhost:8080/#/buy/detail/${people.SRC_CONT_ID}`">
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
        <div class="module-name">{{peopletitlle2.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(oneman,index)  in peple" :key="index" style="padding-right:3px">
              <a :href="`${oneman.wapUrl}`">
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
        <div class="module-name">{{mofang.name}}</div>
        <div class="hotFilmList box">
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID1}`">
          <div class="hotFilmListBig">豆瓣TOP250</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID2}`">
          <div class="hotFilmListSmall">帝国TOP</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID3}`">
          <div class="hotFilmListSmall">金马奖佳片</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID4}`">
          <div class="hotFilmListSmall">IMDb TOP</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID5}`">
          <div class="hotFilmListBig">奥斯卡最佳影片</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID6}`">
          <div class="hotFilmListSmall">金像奖佳片</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID7}`">
          <div class="hotFilmListSmall">柏林金熊奖</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID8}`">
          <div class="hotFilmListSmall">戛纳金棕榈</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID9}`">
          <div class="hotFilmListSmall">威尼斯金狮</div>
          </a>
          <a :href="`https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/moreModule-Vertical.jsp?nodeId=${mofangID1}`">
          <div class="hotFilmListSmall">金鸡奖佳片</div>
          </a>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">{{name.name}}</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(item,index) of women" :key="index">
              <a :href="`http://localhost:8080/#/buy/detail/${item.SRC_CONT_ID}`">
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
              <a :href="`http://localhost:8080/#/buy/detail/${gongqi.SRC_CONT_ID}`">
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
              <a :href="`http://localhost:8080/#/buy/detail/${wolf.SRC_CONT_ID}`">
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
              <a :href="`http://localhost:8080/#/buy/detail/${marvel.SRC_CONT_ID}`">
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
      peopletitlle: [],
      peopletitlle2: [],
      filterWomen: [],
      womenname: {},

      mofang: [],
      mofangID: [],
      mofangID1: [],
      mofangID2: [],
      mofangID3: [],
      mofangID4: [],
      mofangID5: [],
      mofangID6: [],
      mofangID7: [],
      mofangID8: [],
      mofangID9: [],
      mofangID10: [],

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
        // this.people=response.data[2].list[1]
        console.log(this.peple)
        this.peopletitlle = response.data[1]
        this.peopletitlle2 = response.data[2]
      })
    // 电影魔方
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
        this.mofang = response.data[0]
        this.mofangID = response.data[0].list
        this.mofangID1 = response.data[0].list[0].REDREICT_ID
        this.mofangID2 = response.data[0].list[1].REDREICT_ID
        this.mofangID3 = response.data[0].list[2].REDREICT_ID
        this.mofangID4 = response.data[0].list[3].REDREICT_ID
        this.mofangID5 = response.data[0].list[4].REDREICT_ID
        this.mofangID6 = response.data[0].list[5].REDREICT_ID
        this.mofangID7 = response.data[0].list[6].REDREICT_ID
        this.mofangID8 = response.data[0].list[7].REDREICT_ID
        this.mofangID9 = response.data[0].list[8].REDREICT_ID
        this.mofangID10 = response.data[0].list[9].REDREICT_ID
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
      new Swiper(this.$refs.swiper4, {
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
.wmy {
.swiper-container11 {
  width: 100%;
  height: 230px;
}
.swiper-slide11 {
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
}

</style>

