<template>
  <section class="career">
    <div class="container">
      <h4 class="career__title general__titles">💼Career</h4>
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
            <li class="career-list__item">
              <h6 class="career-list__title">Front-End developer</h6>
              <p class="career-list__desc">Working as front-end developer</p>
              <div class="career-date">
                <span class="career-date__gap">6 months</span>
                <span class="career-date__due"
                  >March/2021 &centerdot; September/2021</span
                >
              </div>
            </li>
            <li class="career-list__item">
              <h6 class="career-list__title">Front-End developer</h6>
              <p class="career-list__desc">Working as front-end developer</p>
              <div class="career-date">
                <span class="career-date__gap">6 months</span>
                <span class="career-date__due"
                  >March/2021 &centerdot; September/2021</span
                >
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

const academic = ref([])
const professional = ref({})
</script>

<style lang="sass" scoped>
@import "../assets/styles/components/SectCareer"
</style>
