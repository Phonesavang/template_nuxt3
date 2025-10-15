import { defineStore } from "pinia";

export const useStoreGlobal = defineStore("global", {
  state: () => ({
    count: 0 as number,
  }),

  actions: {
    increment() {
      this.count += 1;
    },
  },
  getters: {},
});

// HMR support
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useStoreGlobal, import.meta.hot));
// }
