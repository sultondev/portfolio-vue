<template>
  <section class="recommend">
    <div class="container">
      <div class="recommend-head">
        <h4 class="recommend__title general__titles">
          <span class="icon">💬</span>Recommendations
        </h4>
        <p class="recommend__subtitle">In deposition</p>
      </div>
      <ul class="recommend-list">
        <li
          v-for="person in recommends"
          :key="person.name + person.rate"
          class="recommend-list__item"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <p class="recommend-list__rate">{{ person.rate }}</p>
            <p class="recommend-list__message">
              {{ person.message }}
            </p>
          </div>
          <div class="recommend-list__wrapper">
            <div class="recommend-list-head">
              <h6 class="recommend-list__name">
                {{ person.name }}
              </h6>
              <span> &centerdot; </span>
              <p class="recommend-list__occupation">
                {{ person.occupation }}
              </p>
            </div>
            <p class="recommend-list__company">
              {{ person.company }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const recommends = ref([
  {
    name: "Umar Shuhratovich",
    message:
      "Sultonkhon is first developer who I met in so young age. He has great methods to share his expression about a new thing. He loves to teach students with funny examples. Sometimes, he is a meme by himself.",
    occupation: "Front-End development Teacher",
    rate: "100/100",
    company: "IT park",

  },
  {
    name: "Azim Turdiev",
    message:
      "When I interviewed Sultan for a junior front-end developer position. I gave him difficult tasks those were in some terms difficult for a junior developer. Sultan could solve the problem. I was really amazed",
    occupation: "Software Engineer",
    rate: "100/80",
    company: "IT PROSTO",
  },
  {
    name: "Aziz Bekmuradov",
    message:
      "About Sultan I can say one thing he is great solver for front-end problems. He really loves what he do I can ensure you that because I have been watching how he was fixing my platform. He do not escape from problems",
    occupation: "CTO",
    rate: "100/90",
    company: "IT park",
  }
])
</script>

<style lang="sass" scoped>
@import "../assets/styles/components/SectRecommend"
</style>
