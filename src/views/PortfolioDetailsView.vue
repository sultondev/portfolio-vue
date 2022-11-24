<template>
  <section class="pdetails">
    <div class="container">
      {{ props.id }}
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue"

const props = defineProps(["id"])

const axios: any = inject("axios")

async function fetchProjects(url: string) {
  const fetchingData = await axios.get(url)
  if (fetchingData.status === 200) {
    console.log(fetchingData.data)
  }
}

onMounted(() => {
  fetchProjects(`/portfolios`)
})

console.log(props.id)
</script>
