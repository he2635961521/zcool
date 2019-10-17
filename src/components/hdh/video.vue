<template>
  <div>
    <div class="box"></div>
    <div class="image" v-for="(film,index) in film4" :key="index">
      <!-- <router-link> -->
      <a :href="`http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/detail/trailer.jsp?contentId=${film.picList[0].REDREICT_ID}&cid=${film.picList[0].REDREICT_ID}`" >
        <div class="content-pic">
          <img :src="`http://movie.miguvideo.com/publish/${film.picList[0].imgSrc}`" />
          <span class="update-to font-14 white">{{film.name}}</span>
        </div>
      </a>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "hhh",

  data() {
    return {
      film4: []
    };
  },

  created() {
    axios
      .post(
        "/migu/lovev/miguMovie/data/seeFilmData.jsp",
        {
          nodeId: 70027030,
          pagesize: 3,
          pageidx: 1
        },
        {
          transformRequest(data) {
            //console.log(data);
            // {key1: 'value1', key2: 'value2', key3: 'value3'}
            // 'key1=value1&key2=value2&key3=value3'
            let arr = [];
            for (let key in data) {
              arr.push(`${key}=${data[key]}`);
            }
            return arr.join("&");
          }
        }
      )
      .then(response => {
        this.filmList = response.data;
        this.film4 = this.filmList[1].list;
        console.log(this.film4);
      });
  }
  // methods : {
  //   fn1() {
  //     return  window.location.href='http://www.baidu.com'
  //   }
  // }
};
</script>

<style lang="scss">
.box {
  height: 10px;
  background: rgb(200, 200, 200);
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
}
.image {
  height: 233px;
}
.content-pic {
  position:relative;

  img {
    height: 100%;
    width: 100%;
  }
  .update-to {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .white {
    color: #fff;
  }
  .font-14 {
    font-size: 14px !important;
  }
}
</style>