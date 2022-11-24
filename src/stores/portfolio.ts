import { ref } from "vue"
import { defineStore } from "pinia"

export const usePortfolioStore = defineStore("portfolio", () => {
  const portfolio = ref([])
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }
  function setProjects(arr: any) {
    portfolio.value = arr
  }

  return { portfolio, setProjects }
})
