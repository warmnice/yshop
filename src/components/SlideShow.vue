<template>
  <div class="slide" @mouseenter="intervalRemove" @mouseleave="intervalSet">
    <img :src="imgUrl[index]" alt="产品">
    <span @click="leftClick" class="clickLeft" v-show="index !== 0">&lt;</span>
    <span @click="rightClick" class="clickRight" v-show="index !== imgUrl.length - 1">&gt;</span>
    <span class="dot">
      <span v-for="(_item, i) in imgUrl" :key="i" @click="index = i" :class="{ dotTurn : index === i }"></span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const imgUrl = ref(['img/cap.jpg', 'img/gift.jpg', 'img/decoration.jpg'])
const index = ref(0)
const interval = ref(null)
onMounted(() => {
  intervalSet()
})
// 设置定时器
function intervalSet () {
  interval.value = setInterval(() => {
    index.value = index.value === imgUrl.value.length - 1 ? 0 : ++index.value
  }, 3000)
}
// 移除定时器
function intervalRemove () {
  clearInterval(interval.value)
}
function leftClick () {
  if (index.value > 0) {
    index.value--
  }
}
function rightClick () {
  if (index.value < imgUrl.value.length - 1) {
    index.value++
  }
}
</script>

<style lang="scss">
.slide {
  position: relative;
  width: 30vw;
  height: 36vh;
  img {
    width: 100%;
    height: 100%;
  }
  .clickLeft, .clickRight {
    position: absolute;
    top: 16vh;
    display: inline-block;
    width: 4vw;
    height: 6vh;
    font-size: 2vw;
    color: rgba(244, 235, 235, 0.644);
    text-align: center;
    &:hover {
      color: rgba(151, 146, 146, 0.644);
      cursor: default;
    }
    &:active {
      background-color: rgba(0, 0 ,0 , 0.5);
    }
  }
  .clickLeft {
    left: 0;
  }
  .clickRight {
    right: 0;
  }
  .dot {
    position: absolute;
    left: 11vw;
    bottom: 2vh;
    span {
      display: inline-block;
      border: 5px #fff solid;
      border-radius: 50%;
      margin: 0 1vw;
    }
  }
}
.dotTurn {
  display: inline-block;
  border-color: rgba(29, 44, 89, 0.644) !important;
}
</style>
