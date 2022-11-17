<script lang="ts" setup>
import { RouterView } from "vue-router"
import TheNavbar from "./components/TheNavbar.vue"
</script>

<template>
  <RouterView></RouterView>
  <TheNavbar></TheNavbar>
</template>

<style lang="sass">
@import "./assets/styles/general.sass"

body
  background-color: var(--clr-secondary)
</style>
