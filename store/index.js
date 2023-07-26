import { defineStore } from 'pinia'
 
export const globalStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {},
    actions: {
        increment() {
            this.count++
        }
    }
})