<template>
    <div class="page-home-films">
        <div class="tabs">
            <ul>
                <li
                :class="{'active': curFilmType =='nowPlaying'}"
                @click="chgFilmType('nowPlaying')"
                >正在热映</li>
                <li
                :class="{'active': curFilmType =='nowPlaying'}"
                @click="chgFilmType('nowPlaying')"
                >即将上映</li>
            </ul>
        </div>




    </div>
</template>

<script>
    export default{
        name: 'Films',

        data () {
            return {
                curFilmType: 'nowPlaying' //当前的影片类型
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
        height:50px;

        ul {
      display: flex;
      align-items: center;
      height: 50px;

      li {
        flex: 1;
        text-align: center;

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
        width: 50%;
        transition: left 0.3s;

        span {
            display: block;
            width: 56px;
            height: 2px;
            margin: auto;
            background: #ff5f16;
        }
      }
    }
}
</style>