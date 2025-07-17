// todo: Setup Store
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useName } from "../composables/name";

export const useStudentStore = defineStore("student", () => {
  const count = ref(1); // todo: State
  const composableName = useName(); // todo: Composable
  const doubleCount = computed(() => count.value * 2); // todo: Getters
  function increment() {
    count.value++;
  }

  return { count, composableName, doubleCount, increment };
});
