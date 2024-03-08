<template>
  <div>
    <div class="decoration">
      <VueDraggable
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto option"
        v-model="list1"
        animation="150"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div v-for="id in list1" :key="id" class="cursor-move h-30 bg-gray-500/5 rounded p-3">
            <SlideShow />
        </div>
      </VueDraggable>
      <VueDraggable
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto draft"
        v-model="list2"
        animation="150"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div v-for="id in list2" :key="id" class="cursor-move h-30 bg-gray-500/5 rounded p-3">
          <SlideShow />
        </div>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import SlideShow from '@/components/SlideShow.vue'

const list1 = ref([1, 2, 3, 4, 5])
const list2 = ref([1, 2, 3, 4, 5])
function onUpdate () {
  console.log('update')
}
function onAdd () {
  console.log('add')
}
function remove () {
  console.log('remove')
}
</script>

<style lang="scss">
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
