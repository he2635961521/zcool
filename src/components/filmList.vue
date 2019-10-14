<template>
    <div>
        <van-swipe class="banner" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>


</template>



<style lang="scss">
    @import '../assets/styles/common/mixins.scss';

    .banner {
        height: 210px;
    }
</style>