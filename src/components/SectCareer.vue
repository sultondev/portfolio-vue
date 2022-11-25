<template>
  <section class="career">
    <div class="container">
      <h4 class="career__title general__titles">
        <span class="icon">💼</span>Career
      </h4>
      <h6 class="career__header">Path to Here</h6>

      <div class="career-path">
        <div class="career-prof">
          <h5
            class="career-prof__title"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            Profissional area
          </h5>
          <p
            class="career-prof__subtitle"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            2019 &centerdot; currently
          </p>
          <ul
            class="career-list"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            <li v-for="info in academic" class="career-list__item">
              <h6 class="career-list__title">{{ info.title }}</h6>
              <p class="career-list__desc">{{ info.description }}</p>
              <div class="career-date">
                <span class="career-date__gap">{{ info.long }}</span>
                <span class="career-date__due">{{ info.due }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="career-academic">
          <h5 class="career-academic__title">Academic</h5>
          <p class="career-academic__subtitle">2022 &centerdot; currently</p>
          <div v-if="academic.length < 1">
            <div class="general-message__empty">
              Sorry nothing has been achieved yet
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const academic = ref([
  {
    title: "Junior React JS developer, IT Prosto, Moscow",
    description: `I started working as Junior React JS developer. My responsibility is creating new sites and optimizing existing ones. I fixed several bugs and add a feature to a website. It was nice experience. And now I’m given to create a marketplace front-end side.`,
    long: "6 months",
    due: "MARCH/2022 · MAY/2022",
  },
  {
    title: `Front-End developer, IT-park, Yangiyer city`,
    description: `It was the best experience, teaching students to code, the first
you will refresh your knowledge about programming, the second
is you will have to seek the simplest way to explain what is
programming actually is, so I'm really excited about that
experience thanks a lot to IT park for this opportunity.`,
    long: "15 months",
    due: "AUGUST/2020 · DECEMBER/2021",
  },
])
const professional = ref({})
</script>

<style lang="sass" scoped>
@import "../assets/styles/components/SectCareer"
</style>
