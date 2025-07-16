// todo: Setup Store
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1); // todo: State
  const doubleCount = computed(() => count.value * 2); // todo: Getters
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
