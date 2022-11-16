<template>
  <div class="welcome">
    <div class="container">
      <div class="welcome-list">
        <div class="welcome-list__item welcome-list__one">
          <div class="welcome__word general__button">👋Hi There</div>
          <h2 class="welcome__name">
            Ablakulav
            <br />
            Sultankhan
          </h2>
          <h2 class="welcome__occupation">
            Front-End developer &centerdot; UI designer
          </h2>
          <ul class="welcome-networks">
            <li class="welcome-networks__item">
              <img alt="" src="../assets/icons/social-networks/linkedin.svg" />
            </li>
            <li class="welcome-networks__item">
              <img alt="" src="../assets/icons/social-networks/github.svg" />
            </li>
            <li class="welcome-networks__item">
              <img alt="" src="../assets/icons/social-networks/telegram.svg" />
            </li>
          </ul>
        </div>
        <div class="welcome-list__item welcome-list__two">
          <img
            alt=""
            class="welcome-list__picture"
            src="../assets/icons/logo/Me.svg"
          />
        </div>
        <div class="welcome-list__item welcome-list__three">
          <a class="welcome__cv">
            download CV <img alt="" src="../assets/icons/" />
          </a>
          <a class="welcome__contact general__button" href="#">Let's talk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.welcome
  min-height: 820px
  padding: 100px 0
  width: 100%

  &__occupation
    font-size: 14px
    font-weight: 200
    color: var(--white-transparent)

  &__word
    font-size: 16px
    font-weight: 600
    background-color: var(--primary-transparent)
    border: none

  &__contact
    font-size: 18px
    font-weight: 600

  &__name
    font-size: var(--heading-70)

  &-list
    //display: flex
    //justify-content: space-between
    //align-items: center
    width: 100%
    display: grid
    //grid-template-columns: 1fr 1fr 1fr
    grid-template-columns: 1fr 1fr 1fr
    align-items: center
    justify-content: space-between

    &__item
      display: flex
      flex-direction: column
      gap: 20px
      align-items: center

    &__one
      align-items: flex-start


    &__three
      align-items: flex-end

  &-networks
    display: flex
    gap: 10px
    list-style: none


@media (min-width: 320px)
  .welcome
    &-list
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))

      &__two
        order: -1

      &__picture
        width: 285px

@media (min-width: 720px)
  .container
    &-list
      grid-template-columns: 1fr 1fr

@media (min-width: 900px)
  .welcome
    &-list
      grid-template-columns: 1fr 1fr 1fr

      &__two
        order: unset


@media (min-width: 1200px)

@media (min-width: 1700px)
  .welcome
    &-list
      grid-template-columns: repeat(3, 1fr)

      &__two
        order: unset

      &__picture
        width: auto
</style>
