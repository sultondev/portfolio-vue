<template>
  <div class="info">
    <div class="container">
      <div class="info-border">
        <ul class="info-list" data-aos="fade-up">
          <li
            class="info-list__item info-list__one flex"
            data-aos="fade-up"
            data-aos-offset="150"
          >
            <div class="relative">
              <img
                alt=""
                class="info-list__icon"
                src="../assets/icons/website/code.svg"
              />
            </div>

            <h6 class="info-list__subtitle">3 years as</h6>
            <h6 class="info-list__title">Programmer</h6>
          </li>
          <li
            class="info-list__item info-list__two flex"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div class="relative">
              <img
                alt=""
                class="info-list__icon"
                src="../assets/icons/website/grid.svg"
              />
            </div>
            <h6 class="info-list__subtitle">2 years of</h6>
            <h6 class="info-list__title">Works</h6>
          </li>
          <li
            class="info-list__item info-list__three flex"
            data-aos="fade-up"
            data-aos-offset="250"
          >
            <div class="relative">
              <img
                alt=""
                class="info-list__icon"
                src="../assets/icons/website/branch.svg"
              />
            </div>
            <h6 class="info-list__subtitle">1 years like</h6>
            <h6 class="info-list__title">Designer</h6>
          </li>
          <li
            class="info-list__item info-list__four flex"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div class="info-data__item flex">
              <h6 class="info-data__subtitle">Developer</h6>
              <h6 class="info-data__title">Front-End</h6>
            </div>
            <div class="info-data__item flex">
              <h6 class="info-data__subtitle">Dozens of projects and</h6>
              <h6 class="info-data__title">Experience</h6>
            </div>
            <div class="info-data__item flex">
              <h6 class="info-data__subtitle">Designer Freelancer</h6>
              <h6 class="info-data__title">UI &centerdot; UX</h6>
            </div>
          </li>
        </ul>
      </div>
      <div class="info-life flex">
        <div class="" data-aos="fade-right" data-aos-offset="200">
          <img
            alt=""
            class="info-life__picture"
            src="../assets/images/my/own.jpg"
          />
        </div>
        <div class="info-right" data-aos="fade-left" data-aos-offset="200">
          <h6 class="info-right__title general__button">🧐 About me</h6>
          <h6 class="info-right__name">
            SultanKhan Said Ahmad <br />
            Ablakulav
          </h6>

          <p class="info-right__welcome">
            👋<span
              >My name is SultanKhan Said Ahmad Ablakulav, but you can just call
              me . Pleasure!</span
            >
          </p>
          <br />
          <p class="info-right__development">
            👨<span
              >For over 2 years developing and programming interfaces with
              JavaScript, React JS and Typescript.</span
            >
          </p>
          <p class="info-right__univer">
            🎓<span> student of E-commerce and Computer science at TUIT</span>
          </p>
          <p class="info-right__development">
            💡<span
              >Interests in Front-end development with React, React Native,
              VueJS and UX/UI Design.</span
            >
          </p>
          <br />
          <p class="">
            🚀<span>
              Trying to be a little bit better than yesterday every day.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.info
  &-border
    border-top: 1px solid rgba(123, 74, 226, 0.2)
    border-bottom: 1px solid rgba(123, 74, 226, 0.2)

  &-list
    min-height: 542px
    padding: 100px 0
    margin: 0 auto
    display: grid
    grid-template-columns: repeat(3, minmax(246px, 300px))
    gap: 80px
    justify-content: center

    &__item
      padding: 42px 20px
      border: 1px solid var(--clr-primary)
      border-radius: 16px
      flex-direction: column
      justify-content: center
      align-items: center
      gap: 6px

    &__title
      font-size: var(--heading-50)

    &__subtitle
      font-size: var(--heading-20)
      font-weight: 200

    &__two
      border: none
      background: rgba(123, 74, 226, 0.1)

    &__four
      grid-column: 1 / 4
      border: none
      background: rgba(123, 74, 226, 0.1)
      flex-direction: row
      justify-content: space-between
      padding: 28px 40px

  &-data
    &__title
      font-size: var(--heading-50)
      text-align: center
      color: var(--clr-primary)

    &__subtitle
      text-align: center
      font-weight: 200
      font-size: var(--heading-20)
      color: var(--clr-primary)

    &__item
      flex-direction: column

  &-right
    margin: 0 auto
    display: flex
    flex-direction: column
    gap: 10px

    & span
      font-size: var(--heading-10)
      color: rgba(255, 255, 255, 0.5)

    &__title
      font-size: var(--heading-10)
      border: none
      background-color: var(--primary-transparent)

    &__name
      font-size: 48px

  &-life
    padding: 140px 0
    overflow-x: hidden
    gap: 20px


    &__picture
      border-radius: 100%
      object-fit: cover


@media (min-width: 320px)
  .info
    &-life
      flex-direction: column
      justify-content: center
      align-items: center

      &__picture
        width: 162px
        height: 162px

      & > p
        font-size: var(--heading-10)

    &-list
      grid-template-columns: 1fr

      &__four
        grid-column: unset
        flex-direction: column

@media (min-width: 920px)
  .info
    &-life
      flex-direction: row
      align-items: center
      justify-content: space-between

      &__picture
        height: 400px
        width: 400px

    &-list
      grid-template-columns: repeat(3, minmax(246px, 300px))

      &__four
        grid-column: 1 / 4
        display: flex
        flex-direction: row

    &-right
      &__name
        font-size: var(--heading-50)
</style>
