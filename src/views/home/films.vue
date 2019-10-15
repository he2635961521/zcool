<template>
    <div class="page-home-films">
        <div class="tabs">
            <ul></ul>
            <ul>
                <li
                :class="{'active': curFilmType =='0'}"
                @click="chgFilmType('0')"
                >推荐</li>
                <li
                :class="{'active': curFilmType =='1'}"
                @click="chgFilmType('1')"
                >免费看片</li>
                <li
                :class="{'active': curFilmType =='2'}"
                @click="chgFilmType('2')"
                >影单</li>
                <li
                :class="{'active': curFilmType =='3'}"
                @click="chgFilmType('3')"
                >小视频</li>
            </ul>
            <div class="active-line" :style="{'left': curFilmType === '0' ? '0' : curFilmType === '1' ? '25%' :  curFilmType === '2' ? '50%' : '75%'}">
                <span></span>
            </div>
        </div>

        <FilmList v-if="curFilmType=='0'" />
        <FreeWatch v-if="curFilmType=='1'"/>
        <FilmMenu v-if="curFilmType=='2'"/>

    </div>
</template>

<script>
    import FilmList from '../../components/filmList'
    import FreeWatch from '../../components/freeWatch'
    import FilmMenu from '../../components/filmMenu'

    export default{
        name: 'Films',

        components: {
            FilmList,
            FreeWatch,
            FilmMenu
        },

        data () {
            return {
                curFilmType: '0' //当前的影片类型
            }
        },

        methods : {
            /**
             * 切换当前的影片类型
             */
            chgFilmType (type) {
                this.curFilmType = type
            }
        }
    }
</script>

<style lang="scss">
.page-home-films {
    .tabs {
        position: sticky;
        top: 0;
        z-index: 999;
        background: #fff;
        height:82px;

        ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 41px;
      background:white;

      li {
        // text-align: center;
        font-size: 14px;

        &.active {
          color: #ff5f16;
        }
      }
    }

        .active-line {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 25%;
        transition: left 0.3s;

        span {
            display: block;
            width:80%;
            height: 2px;
            margin: auto;
            background: #ff5f16;
        }
      }
    }
}
</style>