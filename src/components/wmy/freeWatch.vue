<template>
  <div>
    <router-link to="/">
      <van-swipe :autoplay="3000" indicator-color="white" effect="cube">
        <div class="freeWatch">
          <van-swipe-item v-for="(bigpic,index) of loopPic" :key="index">
            <img :src="`http://movie.miguvideo.com/publish/${bigpic.imgSrc}`" alt />
          </van-swipe-item>
        </div>
      </van-swipe>

      <div class="Module">
        <div class="module-name">热门推荐（免费）</div>
        <div class="hotFilmList">
          <ul>
            <li v-for="(item,index) of freeWatchFilm" :key="index">
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
        <div class="module-name">票房过亿的电影</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(blmovies,index)  in Blmovies" :key="index" style="padding-right:3px">
              <a href>
                <div class="pic">
                  <img
                    style="width:118px,heiht:175px"
                    :src="`http://movie.miguvideo.com/${blmovies.imgSrcV}`"
                    alt
                  />
                  <p class="pionts">{{blmovies.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{blmovies.name}}</p>
                  <p class="secondClunm">{{blmovies.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">豆瓣评分8.0+的电影</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(douban,index)  in doubanFilm" :key="index" style="padding-right:3px">
              <a href>
                <div class="pic">
                  <img
                    style="width:118px,heiht:175px"
                    :src="`http://movie.miguvideo.com/${douban.imgSrcV}`"
                    alt
                  />
                  <p class="pionts">{{douban.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{douban.name}}</p>
                  <p class="secondClunm">{{douban.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">咪咕独播</div>
        <div class="hotFilmList">
          <ul style="flex-wrap:nowrap;overflow-y:hidden">
            <li v-for="(migudubo,index)  in migidubo" :key="index" style="padding-right:3px">
              <a href>
                <div class="pic">
                  <img
                    style="width:118px,heiht:175px"
                    :src="`http://movie.miguvideo.com/${migudubo.imgSrcV}`"
                    alt
                  />
                  <p class="pionts">{{migudubo.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{migudubo.name}}</p>
                  <p class="secondClunm">{{migudubo.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">好莱坞大片</div>
        <div class="hotFilmList">
          <div class="Bigpic">
            <img :src="`http://movie.miguvideo.com/publish/i_www/${holiwoodFilms0.imgSrc}`" alt />
            <p class="pionts">{{holiwoodFilms0.miguScore}}</p>
          </div>
          <p class="hoodliwood1">{{holiwoodFilms0.name}}</p>
          <p class="hoodliwood2">{{holiwoodFilms0.LONG_NAME}}</p>
          <ul>
            <li v-for="(holiwoodmovies,index)  in holiwoodFilms1" :key="index">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${holiwoodmovies.imgSrcV}`" alt />
                  <p class="pionts">{{holiwoodmovies.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{holiwoodmovies.name}}</p>
                  <p class="secondClunm">{{holiwoodmovies.LONG_NAME}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">成人风月</div>
        <div class="hotFilmList">
          <div class="Bigpic">
            <img src="http://movie.miguvideo.com/publish/i_www/image/70/697/564.jpg" alt />
            <p class="pionts">7.0</p>
          </div>
          <p class="hoodliwood1">万物生长</p>
          <p class="hoodliwood2">范冰冰、韩庚演绎生猛青春</p>
        </div>
      </div>

      <div class="Module">
        <div class="module-name">午夜惊悚</div>
        <div class="hotFilmList">
          <div class="Bigpic">
            <img :src="`http://movie.miguvideo.com/publish/i_www/${scarefilm0.imgSrc}`" alt />
            <p class="pionts">{{scarefilm0.miguScore}}</p>
          </div>
          <p class="hoodliwood1">{{scarefilm0.name}}</p>
          <p class="hoodliwood2">{{scarefilm0.LONG_NAME}}</p>
          <ul>
            <li v-for="(scarefilmmm,index)  in scarefilm1" :key="index">
              <a href>
                <div class="pic">
                  <img :src="`http://movie.miguvideo.com/${scarefilmmm.imgSrcV}`" alt />
                  <p class="pionts">{{scarefilmmm.miguScore}}</p>
                </div>
                <div class="filmDescribe">
                  <p class="firstClunm">{{scarefilmmm.name}}</p>
                  <p class="secondClunm">{{scarefilmmm.LONG_NAME}}</p>
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
import axios from 'axios'

export default {
  name: 'freeWatch',
  data () {
    return {
      loopPic: [],
      freeWatchFilm: [],
      Blmovies: [],

      doubanFilm: [],
      migidubo: [],

      holiwoodFilms0: [],
      holiwoodFilms1: [],

      scarefilm0: [],
      scarefilm1: []
    }
  },

  created () {
    // 豆瓣评分前面的电影
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70022795,
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
        this.loopPic = response.data[0].list
        this.freeWatchFilm = response.data[1].list
        this.Blmovies = response.data[2].list
      })
    // 豆瓣评分往后的电影
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70022795,
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
        this.doubanFilm = response.data[0].list
        this.migidubo = response.data[1].list
      })
    // 好莱坞大片
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70022795,
          pagesize: 3,
          pageidx: 4
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
        this.holiwoodFilms0 = response.data[1].list[0].picList[0]
        this.holiwoodFilms1 = response.data[1].list[1].picList.slice(2, 5)
      })
    // 午夜惊悚
    axios
      .post(
        '/api/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: 70022795,
          pagesize: 3,
          pageidx: 6
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
        this.scarefilm0 = response.data[1].list[0].picList[0]
        this.scarefilm1 = response.data[1].list[1].picList
        console.log(this.scarefilm1)
      })
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixins.scss";

body {
  background: #efefef;
}
.freeWatch {
  height: 210px;
  img {
    height: 210px;
    width: 100%;
  }
}

.Module {
  background: white;
  margin-top: 12px;
  list-style: none;
  font-size: 16px;
  color: #666666;
  .module-name {
    height: 45px;
    background: url(http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png)
      no-repeat 0 11px;
    background-size: 3px 23px;
    line-height: 45px;
    padding-left: 8px;
    padding-right: 12px;
  }
  .hotFilmList {
    width: 100%;
    .Bigpic {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .pionts {
        position: absolute;
        right: 0px;
        bottom: 5px;
        background: rgba(1, 1, 5, 0.5);
        text-align: right;
        padding: 0px 8px;
        color: #f7443c;
        font-size: 16px;
      }
    }
    .hoodliwood1 {
      font-size: 14px;
      line-height: 20px;
      color: black;
      padding-left: 8px;
    }
    .hoodliwood2 {
      font-size: 13px;
      line-height: 20px;
      color: #999;
      padding-bottom: 3px;
      padding-left: 8px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 32%;
      }
    }
    font-size: 14px;
    img {
      width: 120px;
      height: 175px;
    }
    .pic {
      position: relative;
      padding-bottom: 5px;
      .pionts {
        position: absolute;
        right: 0px;
        bottom: 8px;
        background: rgba(1, 1, 5, 0.5);
        text-align: right;
        padding: 0px 8px;
        color: #f7443c;
        font-size: 16px;
      }
    }
    .filmDescribe {
      .firstClunm {
        font-size: 14px;
        color: #666666;
        padding-left: 12px;
        padding-right: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-top: 5px;
        text-align: center;
      }
      .secondClunm {
        font-size: 13px;
        color: #999;
        padding-left: 12px;
        padding-right: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
      }
    }
  }
}
</style>
