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
          <span class="recommend-list__rate">{{ person.rate }}</span>
          <p class="recommend-list__message">
            {{ person.message }}
          </p>
          <div class="recommend-list-head">
            <h6 class="recommend-list__name">
              {{ person.name }}
            </h6>
            <span> &centerdot; </span>
            <p class="recommend-list__occupation">
              {{ person.occupation }}
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
    name: "Shokhboz",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium commodi explicabo fugit itaque maxime molestiae natus porro quaerat saepe.",
    occupation: "Software Engineer",
    rate: "100/80",
  },
  {
    name: "Shokhboz",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium commodi explicabo fugit itaque maxime molestiae natus porro quaerat saepe.",
    occupation: "Software Engineer",
    rate: "100/80",
  },
])
</script>

<style lang="sass" scoped>
@import "../assets/styles/components/SectRecommend"
</style>
