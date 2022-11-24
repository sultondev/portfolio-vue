<template>
  <section class="portfolio">
    <div class="container">
      <h6 class="general__titles portfolio__title">Portfolio</h6>
      <div v-if="portfolioStore.portfolio" class="">
        <ul class="portfolio-list">
          <li
            v-for="{
              id,
              attributes: {
                slug: string,
                name: string,
                description: string,
                tags: { data: any },
              },
            } in portfolioStore.portfolio"
            :key="attributes.slug"
            :data-aos-delay="100 * id"
            :data-aos-offset="30 * id"
            class="portfolio-list__item"
            data-aos="fade-up"
          >
            <router-link
              :to="'portfolio/' + attributes.slug"
              class="portfolio-list__link"
            >
              <div>
                <h6 class="portfolio-list__name">
                  {{ attributes.name }}
                </h6>
                <p class="portfolio-list__desc">
                  {{ attributes.description }}
                </p>
              </div>

              <div class="">
                <div class="portfolio-tags flex">
                  <span
                    v-for="tech in attributes.tags.data"
                    :key="tech"
                    class="portfolio-tags__item"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  :href="attributes.linkToProject"
                  class="portfolio-list__demo"
                >
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
const projects = ref([])

async function fetchProjects(url: string) {
  const fetchingData = await axios.get(url)
  if (fetchingData.status === 200) {
    portfolioStore.setProjects(fetchingData.data.data)
  }
}

onMounted(() => {
  fetchProjects("/portfolios")
})
</script>

<style lang="sass">
@import "@/assets/styles/views/PortfolioView.sass"
</style>
