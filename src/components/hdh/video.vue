<template>
  <div>
    <div class="box"></div>
    <div class="image" v-for="(film,index) in film4" :key="index">
      <a href="#">
        <div class="content-pic">
          <img :src="`http://movie.miguvideo.com/publish/${film.picList[0].imgSrc}`" />
          <span class="update-to font-14 white">{{film.name}}</span>
        </div>
      </a>
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

        //if (result.status === 0) {
        // commit('setFilmList', result.data.films)
        // 要先仓库中 filmList 的数据，与请求得来的数据做一个拼接的操作
        //commit("setFilmList", state.filmList.concat(result.data.films));
        // commit('setFilmList', state.filmList.push(result.data.films))
        // let filmList = state.filmList
        // filmList.push(...result.data.films)
        // commit('setFilmList', filmList)

        // 执行传递过来的 payload.callback 这个回调函数
        // payload.callback && payload.callback()

        // if (payload.callback) {
        //   payload.callback();
        // }
        //}
      });
  }
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