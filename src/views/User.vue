<template>
  <div class="view">
    <div class="condition">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div class="echarts">
      <div class="top">
        <img src="../assets/img/disable.png" alt="">
        <span>统计值</span>
      </div>
      <div class="bottom">
        <div class="product">1</div>
        <div class="money">2</div>
        <div class="product">3</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from 'components/Card.vue'
import echarts from 'utils/echarts'
import options from 'utils/echarts/product'
import { onMounted } from 'vue'
onMounted(() => {
  drawBar()
})
function drawBar () {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementsByClassName('product'), null, {
    width: 100,
    height: 200
  })
  // 绘制图表
  myChart.setOption(options)
}
</script>

<style lang="scss">
.view {
  width: 87.4vw;
  margin-top: 10vh;
  right: 0.6vw;
  background-color: rgb(205, 212, 216);
}
.condition {
  display: flex;
  justify-content: space-evenly;
}
.echarts {
  height: 70vh;
  margin: 0 auto;
  margin-top: 2vh;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgb(185, 182, 182);
  width: 84.3vw;
  .top {
    height: 8vh;
    line-height: 8vh;
    box-shadow: 0 2px 4px -2px rgb(186, 181, 181);
    img {
      margin-left: 1vw;
      margin-right: 0.5vw;
    }
  }
  .bottom {
    height: 62vh;
    display: flex;
    justify-content: space-around;
    div {
      width: 25vw;
    }
  }
}
</style>
