<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list flex">
        <li class="nav-list__item">
          <RouterLink class="nav-list__link" to="/">Home</RouterLink>
        </li>
        <li class="nav-list__item">
          <RouterLink class="nav-list__link" to="/blog">Blog</RouterLink>
        </li>
        <li class="nav-list__item">
          <RouterLink class="nav-list__link" to="/tools">Tools</RouterLink>
        </li>
        <li class="nav-list__item">
          <RouterLink class="nav-list__link" to="/interests"
            >Interests
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router"
</script>

<style lang="sass">
.nav
  width: min-content
  padding: 10px 16px
  background-color: var(--nav-bg)
  position: fixed
  bottom: 40px
  left: 50%
  transform: translateX(-50%)
  border-radius: 6px

  &-list
    justify-content: space-between
    gap: 40px

    &__link
      font-weight: 200
      font-size: var(--heading-10)
      color: var(--white-transparent)
      transition: all 0.4s ease

      &:hover
        color: var(--white)

.router-link-exact-active
  color: var(--clr-primary)
  font-weight: 600
</style>
