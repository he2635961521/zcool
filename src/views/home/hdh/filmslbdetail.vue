<template>
  <div class="page-film">11111</div>
</template>

<script>
import axios from "axios";

console.log(window.location.href.split("/")[6])

export default {
  name: "Film",

  data() {
    return {
      filmList4:[]
    }
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
        this.filmList4 = response.data;
        console.log(this.filmList4);

      });
  }
};
</script>