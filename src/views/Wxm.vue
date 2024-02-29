<template>
  <div>
    <h1>ECharts数据大屏</h1>
    <div id="phone"></div>
  </div>
</template>

<script setup>
import echarts from '../utils/echarts'
import options from '../utils/echarts/bar'
import { onMounted } from 'vue'
onMounted(() => {
  drawBar()
})
function drawBar () {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('phone'), null, {
    width: 600,
    height: 400
  })
  // 绘制图表
  myChart.setOption(options)
}
</script>

<style lang="scss"></style>
