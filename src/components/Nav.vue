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
      <router-link v-show="tagShow[0]" to="/home/user" :class="{clickTag: tagClick[0]}" @click="resetTagClick(0)" class="start"><span>首页</span></router-link>
      <router-link v-show="tagShow[1]" to="/home/decoration" :class="{clickTag: tagClick[1]}" @click="resetTagClick(1)"><span>终端装修</span><span @click="tagShow[0] = false">X</span></router-link>
      <router-link v-show="tagShow[2]" to="/home/productm" :class="{clickTag: tagClick[2]}" @click="resetTagClick(2)"><span>商品管理</span><span @click="tagShow[1] = false">X</span></router-link>
      <router-link v-show="tagShow[3]" to="/home/memberm" :class="{clickTag: tagClick[3]}" @click="resetTagClick(3)"><span>会员管理</span><span @click="tagShow[2] = false">X</span></router-link>
      <router-link v-show="tagShow[4]" to="/home/orderm" :class="{clickTag: tagClick[4]}" @click="resetTagClick(4)"><span>订单管理</span><span @click="tagShow[3] = false">X</span></router-link>
      <router-link v-show="tagShow[5]" to="/home/couponm" :class="{clickTag: tagClick[5]}" @click="resetTagClick(5)"><span>电子券管理</span><span @click="tagShow[4] = false">X</span></router-link>
      <router-link v-show="tagShow[6]" to="/home/marketm" :class="{clickTag: tagClick[6]}" @click="resetTagClick(6)"><span>营销管理</span><span @click="tagShow[5] = false">X</span></router-link>
      <router-link v-show="tagShow[7]" to="/home/distributionm" :class="{clickTag: tagClick[7]}" @click="resetTagClick(7)"><span>分销管理</span><span @click="tagShow[6] = false">X</span></router-link>
      <router-link v-show="tagShow[8]" to="/home/moneym" :class="{clickTag: tagClick[8]}" @click="resetTagClick(8)"><span>财务管理</span><span @click="tagShow[7] = false">X</span></router-link>
      <router-link v-show="tagShow[9]" to="/home/shopm" :class="{clickTag: tagClick[9]}" @click="resetTagClick(9)"><span>门店管理</span><span @click="tagShow[8] = false">X</span></router-link>
      <router-link v-show="tagShow[10]" to="/home/integralm" :class="{clickTag: tagClick[10]}" @click="resetTagClick(10)"><span>积分管理</span><span @click="tagShow[9] = false">X</span></router-link>
      <router-link v-show="tagShow[11]" to="/home/wxm" :class="{clickTag: tagClick[11]}" @click="resetTagClick(11)"><span>微信管理</span><span @click="tagShow[10] = false">X</span></router-link>
      <router-link v-show="tagShow[12]" to="/home/shpos" :class="{clickTag: tagClick[12]}" @click="resetTagClick(12)"><span>商城配置</span><span @click="tagShow[11] = false">X</span></router-link>
      <router-link v-show="tagShow[13]" to="/home/systemm" :class="{clickTag: tagClick[13]}" @click="resetTagClick(13)"><span>系统管理</span><span @click="tagShow[12] = false">X</span></router-link>
      <router-link v-show="tagShow[14]" to="/home/smonitor" :class="{clickTag: tagClick[14]}" @click="resetTagClick(14)"><span>系统监控</span><span @click="tagShow[13] = false">X</span></router-link>
      <router-link v-show="tagShow[15]" to="/home/stool" :class="{clickTag: tagClick[15]}" @click="resetTagClick(15)"><span>系统工具</span><span @click="tagShow[14] = false">X</span></router-link>
    </div>
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
const tagShow = ref(Array.from({ length: 15 }, () => true))
const tagClick = ref(Array.from({ length: 15 }, () => false))
tagClick.value[0] = true
function resetTagClick (index) {
  for (let i = 0; i < tagClick.value.length; i++) {
    tagClick.value[i] = false
  }
  tagClick.value[index] = true
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
    overflow: hidden;
    display: flex;
    align-items: center;
    .start {
      margin-left: 1vw;
    }
    a {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: rgb(42, 40, 40);
      margin-left: 0.2vw;
      height: 2.5vh;
      border: 1px rgb(168, 166, 166) solid;
      span {
        margin: 0 0.4vw;
        &:nth-child(1) {
          margin: 0 0.4vw;
        }
        &:nth-child(2) {
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
          }
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
  color: #fff;
  span {
    color: #fff;
    &:nth-child(1) {
      &::before {
        content: '';
        display: inline-block;
        border: 0.35vw #fff solid;
        margin-right: 0.3vw;
        border-radius: 50%;
      }
    }
  }
}
</style>
