<script lang="ts" setup>
import { RouterView } from "vue-router"
import TheNavbar from "./components/TheNavbar.vue"
import "./assets/fonts/style.css"
import AOS from "aos"

AOS.init()
</script>

<template>
  <RouterView></RouterView>
  <TheNavbar></TheNavbar>
</template>

<style lang="sass">
@import "./assets/styles/general.sass"
@import "./assets/styles/mobile.sass"

body
  background-color: var(--clr-secondary)
</style>
