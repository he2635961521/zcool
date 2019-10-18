<template>
  <div class="page-film">
    <!-- <div v-for="(item,index) in film2" :key="index"> -->
      <div v-for="(item,index) in film1" :key="index">
        <img :src="`http://movie.miguvideo.com/publish/i_www/${item.imgSrc}`" />
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios'
// console.log(window.location.href.split("/")[6]);

export default {
  name: 'Film',

  data () {
    return {
      film1: [],
      film2: [1, 2, 3],
      film3: []
    }
  },

  created () {
    axios
      .post(
        '/migu/lovev/miguMovie/data/seeFilmData.jsp',
        {
          nodeId: window.location.href.split('/')[6]
        },
        {
          transformRequest (data) {
            // console.log(data);
            // {key1: 'value1', key2: 'value2', key3: 'value3'}
            // 'key1=value1&key2=value2&key3=value3'
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(response => {
        this.film1 = response.data
        console.log(this.film1)
      })

    //  axios
    //     .get(
    //       "/migu/publish/i_www/resource/lovev/miguMovie/detail/relevant_data2.jsp"
    //       // {
    //       //   nodeId: window.location.href.split("/")[6]
    //       // },
    //       // {
    //       //   transformRequest(data) {
    //       //     //console.log(data);
    //       //     // {key1: 'value1', key2: 'value2', key3: 'value3'}
    //       //     // 'key1=value1&key2=value2&key3=value3'
    //       //     let arr = [];
    //       //     for (let key in data) {
    //       //       arr.push(`${key}=${data[key]}`);
    //       //     }
    //       //     return arr.join("&");
    //       //   }
    //       // }
    //     )
    //     .then(response => {
    //       this.film3 = response.data;
    //       console.log(this.film3);

    //     });
  }
}
</script>

<style lang="scss">
.page-film {
  img {
    width:100%;
    height:100%
  }
}
</style>
