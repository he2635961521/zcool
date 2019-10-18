<template>
  <div>
    <div class="imgtop">
      <i class="iconfont icon-zuojiantou" id="icon" onclick="history.go(-1);"></i>
      <img v-if="`${film11.imgSrc1}`" :src="`http://movie.miguvideo.com/${film11.imgSrc1}`" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      film11: []
    }
  },
  mounted () {},
  created () {
    axios
      .get(
        '/migu/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=654900643',
        {
          cid: 654900643
        }
        // {
        //   transformRequest(data) {
        //     //console.log(data);
        //     // {key1: 'value1', key2: 'value2', key3: 'value3'}
        //     // 'key1=value1&key2=value2&key3=value3'
        //     let arr = [];
        //     for (let key in data) {
        //       arr.push(`${key}=${data[key]}`);
        //     }
        //     return arr.join("&");
        //   }
        // }
      )
      .then(response => {
        this.filmList = response.data
        this.film11 = this.filmList[0]
        console.log(this.film11)
      })
  }
}
</script>

<style lang="scss">
.imgtop {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  #icon {
    position: absolute;
    top:10px;
    z-index: 999;
    color: red
  }
}
</style>
