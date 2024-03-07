import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
  state: () => ({
    fold: false,
    full: false,
    tagShow: Array.from({ length: 15 }, () => true),
    tagClick: Array.from({ length: 15 }, () => false)
  }),
  actions: {
    resetTagClick (index) {
      for (let i = 0; i < this.tagClick.length; i++) {
        this.tagClick[i] = false
      }
      this.tagShow[index] = true
      this.tagClick[index] = true
    },
    showRightTag (index) {
      this.tagShow[index] = false
      if (!this.tagClick[index]) return
      for (let i = 0; i < this.tagClick.length; i++) {
        this.tagClick[i] = false
      }
      let i = index - 1
      while (i >= 0) {
        if (this.tagShow[i]) {
          this.tagClick[i] = true
          break
        }
        i--
      }
    }
  }
})
