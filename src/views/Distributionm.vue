<template>
  <div class="productm">
    <div>
      <el-input class="input" v-model="input" style="width: 10vw" placeholder="查询" />
      <el-button type="success">
        <i-ep-search class="icon"/><span>搜索</span>
      </el-button>
      <el-button type="warning">
        <i-ep-refreshLeft class="icon"/><span>重置</span>
      </el-button>
    </div>
    <div class="function2">
      <el-button type="primary">
        <i-ep-plus class="icon"/><span>新增</span>
      </el-button>
      <el-button type="success">
        <i-ep-editPen class="icon"/><span>修改</span>
      </el-button>
      <el-button type="danger">
        <i-ep-deleteFilled class="icon"/><span>删除</span>
      </el-button>
      <el-button type="warning">
        <i-ep-download class="icon"/><span>导出</span>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="scss">
.productm {
  padding: 1vw;
  .input {
    margin-top: 0;
    margin-right: 0.5vw;
    &:hover {
      border-bottom-width: 0;
    }
  }
}
.function2 {
  margin-top: 1vh;
}
button {
  .icon {
    margin-right: 1vw
  }
}
</style>
