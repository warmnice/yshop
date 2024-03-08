<template>
  <div>
    <div class="decoration">
      <div class="option">
        <VueDraggable group="slide" class="list-group">
          <div v-for="id in list" :key="id" class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move">
            <SlideShow />
          </div>
        </VueDraggable>
      </div>
      <div class="draft">
        <VueDraggable group="slide" class="list-group">
          <div v-for="id in list" :key="id" class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move">
            <SlideShow />
          </div>
        </VueDraggable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import SlideShow from '@/components/SlideShow.vue'

const list = ref([1, 2, 3, 4])
</script>

<style lang="scss" scoped>
.decoration {
  position: relative;
  top: 5vh;
  width: 85%;
  height: 70vh;
  margin: 0 auto;
  padding: 1vw;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  .option {
    width: 20%;
    height: 100%;
  }
  .draft {
    width: 50%;
    height: 100%;
  }
  &::-webkit-scrollbar {
    width: 0.6vw;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.3vw;
    -webkit-box-shadow: inset 0 0 5px rgba(154, 204, 213, 0.2);
    background: #535353;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0.3vw;
    background: #ededed;
  }
}
</style>
