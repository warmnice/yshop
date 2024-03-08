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
    <div class="tag">
      <span :class="{clickTag: tagClick[0]}" v-show="tagShow[0]"><router-link to="/home/user" class="start" @click="homeStore.resetTagClick(0)">首页</router-link></span>
      <span :class="{clickTag: tagClick[1]}" v-show="tagShow[1]"><router-link to="/home/decoration" @click="homeStore.resetTagClick(1)">终端装修</router-link><span @click="homeStore.showRightTag(1)">X</span></span>
      <span :class="{clickTag: tagClick[2]}" v-show="tagShow[2]"><router-link to="/home/productm" @click="homeStore.resetTagClick(2)">商品管理</router-link><span @click="homeStore.showRightTag(2)">X</span></span>
      <span :class="{clickTag: tagClick[3]}" v-show="tagShow[3]"><router-link to="/home/memberm" @click="homeStore.resetTagClick(3)">会员管理</router-link><span @click="homeStore.showRightTag(3)">X</span></span>
      <span :class="{clickTag: tagClick[4]}" v-show="tagShow[4]"><router-link to="/home/orderm" @click="homeStore.resetTagClick(4)">订单管理</router-link><span @click="homeStore.showRightTag(4)">X</span></span>
      <span :class="{clickTag: tagClick[5]}" v-show="tagShow[5]"><router-link to="/home/couponm" @click="homeStore.resetTagClick(5)">电子券管理</router-link><span @click="homeStore.showRightTag(5)">X</span></span>
      <span :class="{clickTag: tagClick[6]}" v-show="tagShow[6]"><router-link to="/home/marketm" @click="homeStore.resetTagClick(6)">营销管理</router-link><span @click="homeStore.showRightTag(6)">X</span></span>
      <span :class="{clickTag: tagClick[7]}" v-show="tagShow[7]"><router-link to="/home/distributionm" @click="homeStore.resetTagClick(7)">分销管理</router-link><span @click="homeStore.showRightTag(7)">X</span></span>
      <span :class="{clickTag: tagClick[8]}" v-show="tagShow[8]"><router-link to="/home/moneym" @click="homeStore.resetTagClick(8)">财务管理</router-link><span @click="homeStore.showRightTag(8)">X</span></span>
      <span :class="{clickTag: tagClick[9]}" v-show="tagShow[9]"><router-link to="/home/shopm" @click="homeStore.resetTagClick(9)">门店管理</router-link><span @click="homeStore.showRightTag(9)">X</span></span>
      <span :class="{clickTag: tagClick[10]}" v-show="tagShow[10]"><router-link to="/home/integralm" @click="homeStore.resetTagClick(10)">积分管理</router-link><span @click="homeStore.showRightTag(10)">X</span></span>
      <span :class="{clickTag: tagClick[11]}" v-show="tagShow[11]"><router-link to="/home/wxm" @click="homeStore.resetTagClick(11)">微信管理</router-link><span @click="homeStore.showRightTag(11)">X</span></span>
      <span :class="{clickTag: tagClick[12]}" v-show="tagShow[12]"><router-link to="/home/shpos" @click="homeStore.resetTagClick(12)">商城配置</router-link><span @click="homeStore.showRightTag(12)">X</span></span>
      <span :class="{clickTag: tagClick[13]}" v-show="tagShow[13]"><router-link to="/home/systemm" @click="homeStore.resetTagClick(13)">系统管理</router-link><span @click="homeStore.showRightTag(13)">X</span></span>
      <span :class="{clickTag: tagClick[14]}" v-show="tagShow[14]"><router-link to="/home/smonitor" @click="homeStore.resetTagClick(14)">系统监控</router-link><span @click="homeStore.showRightTag(14)">X</span></span>
      <span :class="{clickTag: tagClick[15]}" v-show="tagShow[15]"><router-link to="/home/stool" @click="homeStore.resetTagClick(15)">系统工具</router-link><span @click="homeStore.showRightTag(15)">X</span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useHomeStore } from '../store/home'
import { storeToRefs } from 'pinia'
import screenfull from 'screenfull'

const homeStore = useHomeStore()
const { fold, full, tagShow, tagClick } = storeToRefs(homeStore)
tagClick.value[0] = true
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
  z-index: 10000;
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
    overflow: hidden;
    display: flex;
    align-items: center;
    > span {
      display: flex;
      align-items: center;
      font-size: 10px;
      margin-left: 0.2vw;
      height: 2.5vh;
      border: 1px rgb(168, 166, 166) solid;
      a {
        margin: 0 0.4vw;
        color: rgb(42, 40, 40);
      }
      span {
        margin: 0 0.1vw;
        width: 0.8vw;
        height: 0.8vw;
        line-height: 0.9vw;
        font-size: 7px;
        text-align: center;
        color: grey;
        &:hover {
          background-color: grey;
          color: #fff;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
}
.fullImg {
  content: url(../assets/img/full.png);
}
.disFullImg {
  content: url(../assets/img/cancelF.png);
}
.clickTag {
  background-color: rgb(103, 103, 238);
  a {
    color: #fff !important;
    &::before {
      content: '';
      display: inline-block;
      border: 0.3vw #fff solid;
      margin-right: 0.3vw;
      border-radius: 50%;
    }
  }
  span {
    color: #fff !important;
  }
}
</style>
