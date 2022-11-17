<template>
  <section class="skills">
    <div class="container">
      <div class="skills-head">
        <h6 class="skills__title general__titles">
          ‍🧑‍💻Skills &centerdot; Experience
        </h6>
        <p class="skills__subtitle">Technologies and skills</p>
      </div>
      <ul class="skills-body">
        <li class="skills-body__item">
          <p class="skills-body__subtitle">Techs I use on a daily basis</p>
          <ul class="skills-loved">
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/React.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Javascript.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/TypeScript.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Nextjs.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Css.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/HTML5.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Figma.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Github.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Git.svg" />
            </li>
            <li class="skills-loved__item">
              <img alt="" src="../assets/icons/skills/Insomnia.svg" />
            </li>
          </ul>
        </li>
        <li class="skills-body__item">
          <p class="skills-body__subtitle">
            Other techs I've done projects with
          </p>
          <ul class="skills-used">
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/bitbucket.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Docker.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Group%2026.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Group%2027.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Nodejs.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Python.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Shape.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/TailwindCSS.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Union.svg" />
            </li>
            <li class="skills-used__item">
              <img alt="" src="../assets/icons/stack/Vue.svg" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.skills
  padding: 100px 0

  &-head
    display: flex
    flex-direction: column
    align-items: center
    gap: 20px

  &-body
    margin: 40px 0

    &__subtitle
      text-align: center
      color: var(--white-transparent)
      font-size: var(--heading-10)
      margin: 10px 0


  &-loved, &-used
    display: flex
    justify-content: center
    align-items: center
    gap: 16px
    margin: 40px 0


  &__subtitle
    font-weight: 600
    font-size: var(--heading-50)
</style>
