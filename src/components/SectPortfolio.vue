<link href="../assets/styles/_mobile.sass" rel="stylesheet">
<template>
  <section class="portfolio">
    <div class="container">
      <h6 class="portfolio__title general__titles">
        <span class="icon">🔗</span>Portfolio
      </h6>
      <div class="portfolio-head flex">
        <h6 class="portfolio-head__title">Works and projects</h6>
        <ul class="portfolio-filters flex">
          <li class="portfolio-filters__item">
            <button class="portfolio-filters__btn general__button">
              <img
                alt=""
                src="../assets/icons/website/design.svg"
                width="35px"
              />Design
            </button>
          </li>
          <li class="portfolio-filters__item">
            <button class="portfolio-filters__btn general__button">
              <img
                alt=""
                src="../assets/icons/website/code.svg"
                width="35px"
              />Programming
            </button>
          </li>
        </ul>
      </div>
      <ul class="portfolio-list">
        <li
          v-for="project in projects"
          class="portfolio-list__item"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
        >
          <a :href="project.linkToProject" class="portfolio-list__link">
            <div class="portfolio-list__one">
              <h6 class="portfolio-list__name">{{ project.name }}</h6>
              <p class="portfolio-list__desc">
                {{ project.description }}
              </p>
            </div>

            <div class="portfolio-list__two">
              <div class="portfolio-tags flex">
                <p class="portfolio-list__status general__titles general-br__8">
                  Online
                </p>
                <p
                  v-for="tag in project.tags.data"
                  :key="tag"
                  class="general__titles general-br__8"
                  v-text="tag"
                ></p>
              </div>
              <img
                :src="project.linkToPicture"
                alt=""
                class="portfolio-list__picture"
                height="200"
                width="300"
              />
            </div>
          </a>
        </li>
      </ul>
      <router-link class="portfolio__more" to="portfolios"
      >View more projects &rightarrow;
      </router-link>
      <!--      <section class="video">-->
      <!--        <div class="video-head">-->
      <!--          <h6 class="video-head__title">Video projects</h6>-->
      <!--          <p class="video-head__subtitle">-->
      <!--            It's always good to know a little editing-->
      <!--          </p>-->
      <!--        </div>-->
      <!--        <div class="video-body">-->
      <!--          <div-->
      <!--            class="video-body__item"-->
      <!--            data-aos="fade-up"-->
      <!--            data-aos-delay="150"-->
      <!--            data-aos-offset="200"-->
      <!--          >-->
      <!--            <img-->
      <!--              alt=""-->
      <!--              class="video-body__thumbnail"-->
      <!--              src="../assets/images/projects/thumbnail/project01.svg"-->
      <!--            />-->
      <!--            <div class="video-info">-->
      <!--              <h6 class="video-info__name">Move it</h6>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="video-body__item"-->
      <!--            data-aos="fade-up"-->
      <!--            data-aos-delay="150"-->
      <!--            data-aos-offset="200"-->
      <!--          >-->
      <!--            <img-->
      <!--              alt=""-->
      <!--              class="video-body__thumbnail"-->
      <!--              src="../assets/images/projects/thumbnail/project01.svg"-->
      <!--            />-->
      <!--            <div class="video-info">-->
      <!--              <h6 class="video-info__name">Move it</h6>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="video-body__item"-->
      <!--            data-aos="fade-up"-->
      <!--            data-aos-delay="200"-->
      <!--            data-aos-offset="200"-->
      <!--          >-->
      <!--            <img-->
      <!--              alt=""-->
      <!--              class="video-body__thumbnail"-->
      <!--              src="../assets/images/projects/thumbnail/project01.svg"-->
      <!--            />-->
      <!--            <div class="video-info">-->
      <!--              <h6 class="video-info__name">Move it</h6>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="video-body__item"-->
      <!--            data-aos="fade-up"-->
      <!--            data-aos-delay="250"-->
      <!--            data-aos-offset="200"-->
      <!--          >-->
      <!--            <img-->
      <!--              alt=""-->
      <!--              class="video-body__thumbnail"-->
      <!--              src="../assets/images/projects/thumbnail/project01.svg"-->
      <!--            />-->
      <!--            <div class="video-info">-->
      <!--              <h6 class="video-info__name">Move it</h6>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </section>-->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from "vue"

const axios: any = inject("axios")
const projects: any = ref([])


async function fetchProjects(url: string) {
  const fetchingData = await axios.get(url)
  if (fetchingData.data.data.length > 0) {
    projects.value = fetchingData.data.data.map(
      (item: { id: number; attributes: any }) => item.attributes,
    )
    localStorage.setItem(
      "portfolioSect",
      JSON.stringify(
        fetchingData.data.data.map(
          (item: { id: number; attributes: any }) => item.attributes,
        ),
      ),
    )
  }
}

onMounted(() => {
  fetchProjects("/portfolios?pagination[page]=1&pagination[pageSize]=4")
  if (projects.value.length < 1) {
    const localData: any = localStorage.getItem("portfolioSect")
    projects.value = JSON.parse(localData)
  }
})


</script>

<style lang="sass" scoped>
@import "@/assets/styles/components/_SectPortfolio.sass"
</style>
