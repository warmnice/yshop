<template>
  <nav>
    <div class="tool">
      <div class="title">
        <img src="../assets/img/fold.png" alt="折叠" class="foldicon" @click="fold = !fold">
        <div>{{ title }}</div>
      </div>
      <div class="tips">
        <img src="../assets/img/search2.png" alt="搜索" >
        <input type="text">
        <a href="#">
          <img src="../assets/img/source.png" alt="源码地址" title="源码地址">
        </a>
        <img src="../assets/img/full.png" alt="全屏缩放" title="全屏缩放" v-if="!full" @click="fullScreen">
        <img src="../assets/img/cancelF.png" alt="全屏缩放" title="全屏缩放" v-else @click="exitFullScreen, full = !full">
        <img src="../assets/img/full.png" alt="个人空间" ttile="个人空间">
      </div>
    </div>
    <div class="tag">2</div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useHomeStore } from '../store/home'
import { storeToRefs } from 'pinia'
import screenfull from 'screenfull'

const store = useHomeStore()
const { fold, full } = storeToRefs(store)
const title = ref('首页')
function fullScreen () {
  if (screenfull.isEnabled && !screenfull.isFullscreen) {
    screenfull.request()
    full.value = true
  }
}
function exitFullScreen () {
  if (screenfull.isEnabled && screenfull.isFullscreen) {
    screenfull.exit()
    full.value = false
  }
}
</script>

<style lang="scss">
img {
  width: 1vw;
  height: 2vh;
}
nav {
  position: fixed;
  width: 87.4vw;
  height: 10vh;
  right: 0.6vw;
  background-color: #fff;
  .tool {
    height: 6.5vh;
    box-shadow: 0 2px 4px -2px rgb(186, 181, 181);
    .title {
      width: 10vw;
      height: 100%;
      float: left;
      display: flex;
      align-items: center;
      img {
        margin: 0 1vw;
        cursor: pointer;
      }
    }
    .tips {
      width: 20vw;
      height: 100%;
      float: right;
      display: flex;
      justify-content: space-around;
      align-items: center;
      input {
        width: 8vw;
        border: 1px grey solid;
        border-top-left-radius: 10% 60%;
        border-top-right-radius: 10% 60%;
        border-bottom-left-radius: 10% 60%;
        border-bottom-right-radius: 10% 60%;
      }
      img {
        margin: 0 1vw;
      }
    }
  }
  .tag{
    height: 3.5vh;
    box-shadow: 0 4px 8px -4px rgb(187, 184, 184);
  }
}
.fullImg {
  content: url(../assets/img/full.png);
}
.disFullImg {
  content: url(../assets/img/cancelF.png);
}
</style>
