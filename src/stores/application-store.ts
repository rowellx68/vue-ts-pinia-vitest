import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: () => {
    return {
      counter: 0,
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
})