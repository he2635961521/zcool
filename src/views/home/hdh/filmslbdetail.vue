<template>
  <div class="page-film">
    <div v-for="(item,index) in film1" :key="index">
      <img :src="`http://movie.miguvideo.com/publish/i_www/${item.imgSrc}`" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
console.log(window.location.href.split("/")[6]);

export default {
  name: "Film",

  data() {
    return {
      film1: []
    };
  },

  created() {
    axios
      .post(
        "/migu/lovev/miguMovie/data/seeFilmData.jsp",
        {
          nodeId: window.location.href.split("/")[6]
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
        this.film1 = response.data;
        console.log(this.filmList4);
      });

    //  axios
    //     .post(
    //       "/migu/lovev/miguMovie/data/seeFilmData.jsp",
    //       {
    //         nodeId: window.location.href.split("/")[6]
    //       },
    //       {
    //         transformRequest(data) {
    //           //console.log(data);
    //           // {key1: 'value1', key2: 'value2', key3: 'value3'}
    //           // 'key1=value1&key2=value2&key3=value3'
    //           let arr = [];
    //           for (let key in data) {
    //             arr.push(`${key}=${data[key]}`);
    //           }
    //           return arr.join("&");
    //         }
    //       }
    //     )
    //     .then(response => {
    //       this.filmList4 = response.data;
    //       console.log(this.filmList4);

    //     });
  }
};
</script>

<style lang="scss">
.page-film {
  img {
    width:100%;
    height:100%
  }
}
</style>