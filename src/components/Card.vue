<template>
  <div class="card">
    <div class="item1">
      <div class="top">
        <span class="total">会员总数</span>
        <span class="platform">全平台</span>
      </div>
      <div class="bottom">
        <div class="number">1234</div>
        <div class="data">
          <span>今日订单数</span>
          <span class="order">1单</span>
        </div>
      </div>
    </div>
    <div class="item2">
      <img src="../assets/img/expand.png" alt="">
      <span>商品管理</span>
    </div>
    <div class="item3">
      <img src="../assets/img/expand.png" alt="">
      <span>会员管理</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.card {
  width: 20vw;
  height: 45vh;
  margin-top: 2vh;
  display: grid;
  background-color: #fff;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
  .item1, .item2, .item3 {
    box-shadow: 0 0 4px 0 rgb(185, 182, 182);
  }
  .item1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
    grid-row-end: 2;
    box-shadow: 0 0 4px 0 rgb(185, 182, 182);
    .number {
      height: 13vh;
    }
    .top, .data {
      height: 8vh;
    }
    .top, .number {
      border-bottom: 0.5px solid rgb(194, 184, 184);
    }
    .top {
      font-size: 0.8vw;
      .total {
        margin-left: 1vw;
      }
      .platform {
        margin-right: 1vw;
        color: rgb(53, 183, 53);
        background-color: rgb(178, 237, 178);
        padding: 0.4vw;
      }
    }
    .bottom {
      width: 18vw;
      margin: 0 auto;
      .number {
        font-size: 3vw;
      }
      .order {
        font-size: 0.85vw;
      }
    }
    .top, .number, .data {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .item2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 2;
    grid-row-end: 3;
  }
  .item3 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 2;
    grid-row-end: 3;
  }
  .item2, .item3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      scale: 1.5;
    }
    span {
      margin-top: 1.8vh;
      font-size: 1.5vh;
    }
  }
}
</style>
