import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
  state: () => ({
    fold: false,
    full: false
  })
  // 下边可继续定义 getters, actions
})
