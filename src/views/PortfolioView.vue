<template>
  <section class="portfolio">
    <div class="container">
      <h6 class="general__titles portfolio__title">Portfolio</h6>
      <div v-if="projects" class="">
        <ul class="portfolio-list">
          <li
            v-for="project in projects"
            :key="project.slug"
            class="portfolio-list__item"
            data-aos="fade-up"
          >
            <router-link
              :to="'portfolio/' + project.slug"
              class="portfolio-list__link"
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
                <a :href="project.linkToProject" class="portfolio-list__demo">
                  <img
                    alt=""
                    class="portfolio-list__thumb"
                    src="@/assets/images/projects/thumbnail/vue-thumb.jpg"
                  />
                </a>
              </div>
            </router-link>
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
  if (fetchingData.status === 200) {
    portfolioStore.setProjects(fetchingData.data.data)
    projects.value = fetchingData.data.data.map(
      (item: { id: number; attributes: any }) => item.attributes
    )
  }
}

onMounted(() => {
  fetchProjects("/portfolios")
})
</script>

<style lang="sass">
@import "@/assets/styles/views/PortfolioView.sass"
</style>
