import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore('store', () => {
  const page = ref('');
  const isObserverActive = ref(true);

  return { page, isObserverActive };
});