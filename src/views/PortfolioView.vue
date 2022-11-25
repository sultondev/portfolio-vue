<template>
  <section class="portfolio">
    <div class="container">
      <h6 class="general__titles portfolio__title">Portfolio</h6>
      <div v-if="projects" class="portfolio-wrapper">
        <ul class="portfolio-list">
          <li
            v-for="(project, idx) in projects"
            :key="project.slug"
            :data-aos-delay="20 * idx"
            :data-aos-offset="50 * idx"
            class="portfolio-list__item"
            data-aos="fade-up"
          >
            <a
              :href="project.linkToProject"
              class="portfolio-list__link"
              target="_blank"
            >
              <div>
                <h6 class="portfolio-list__name">
                  {{ project.name }}
                </h6>
                <p class="portfolio-list__desc">
                  {{ project.description }}
                </p>
              </div>

              <div class="">
                <div class="portfolio-tags flex">
                  <span
                    v-for="tech in project.tags.data"
                    :key="tech"
                    class="portfolio-tags__item"
                  >
                    {{ tech }}
                  </span>
                </div>
                <img
                  :src="project.linkToPicture"
                  alt=""
                  class="portfolio-list__thumb"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div v-else class="">Loading...</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from "vue"
import { usePortfolioStore } from "@/stores/portfolio"

const axios: any = inject("axios")

const portfolioStore = usePortfolioStore()
const projects: any = ref([])

async function fetchProjects(url: string) {
  const fetchingData = await axios.get(url)
  if (fetchingData.data.data.length > 0) {
    portfolioStore.setProjects(fetchingData.data.data)
    projects.value = fetchingData.data.data.map(
      (item: { id: number; attributes: any }) => item.attributes
    )
    localStorage.setItem(
      "portfolios",
      JSON.stringify(
        fetchingData.data.data.map(
          (item: { id: number; attributes: any }) => item.attributes
        )
      )
    )
  }
}

onMounted(() => {
  fetchProjects("/portfolios")
  if (projects.value.length < 1) {
    const localData: any = localStorage.getItem("portfolios")
    projects.value = JSON.parse(localData)
  }
})
</script>

<style lang="sass" scoped>
@import "@/assets/styles/views/PortfolioView.sass"
</style>
