<template>
  <div>
    <VueDraggable
      ref="el"
      v-model="list"
      :disabled="disabled"
      :animation="150"
      ghostClass="ghost"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move"
      >
        <SlideShow :key="6" />
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import SlideShow from '@/components/SlideShow.vue'
const list = ref([
  {
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }
])

const el = ref()
const disabled = ref(false)
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
