// todo: Setup Store
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useName } from "../composables/name";
import { useStudentStore } from "../stores/student";

export const useCounterStore = defineStore("counter", () => {
  const student = useStudentStore();
  const count = ref(1); // todo: State
  const comName = useName(); // todo: Composable
  const doubleCount = computed(() => count.value * 2); // todo: Getters
  // todo: Action
  function increment() {
    count.value++;
  }

  return { student, count, comName, doubleCount, increment };
});
