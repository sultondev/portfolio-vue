<template>
  <section class="portfolio">
    <div class="container">
      <h6 class="portfolio__title general__titles">🔗Portfolio</h6>
      <div class="portfolio-head flex">
        <h6 class="portfolio-head__title">Works and projects</h6>
        <ul class="portfolio-filters flex">
          <li class="portfolio-filters__item">
            <button class="portfolio-filters__btn general__button">
              <img
                alt=""
                src="../assets/icons/website/design.svg"
                width="35px"
              />Design
            </button>
          </li>
          <li class="portfolio-filters__item">
            <button class="portfolio-filters__btn general__button">
              <img
                alt=""
                src="../assets/icons/website/code.svg"
                width="35px"
              />Programming
            </button>
          </li>
        </ul>
      </div>
      <ul class="portfolio-list">
        <li class="portfolio-list__item">
          <div>
            <h6 class="portfolio-list__name">Move it</h6>
            <p class="portfolio-list__desc">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>
          </div>
          <div class="">
            <p class="portfolio-list__status general__titles">Online</p>
            <div class="portfolio-tags flex">
              <p
                v-for="tag in ['React', 'TypeScript', 'Node JS', 'TypeScript']"
                :key="tag"
                class="general__titles"
                v-text="tag"
              ></p>
            </div>
            <img
              alt=""
              class="portfolio-list__picture"
              height="200"
              src="../assets/images/projects/project-01.png"
              width="300"
            />
          </div>
        </li>
        <li class="portfolio-list__item">
          <div>
            <h6 class="portfolio-list__name">Move it</h6>
            <p class="portfolio-list__desc">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>
          </div>
          <div class="">
            <p class="portfolio-list__status general__titles">Online</p>
            <div class="portfolio-tags flex">
              <p
                v-for="tag in ['React', 'TypeScript', 'Node JS', 'TypeScript']"
                :key="tag"
                class="general__titles"
                v-text="tag"
              ></p>
            </div>
            <img
              alt=""
              class="portfolio-list__picture"
              height="200"
              src="../assets/images/projects/project-01.png"
              width="300"
            />
          </div>
        </li>
        <li class="portfolio-list__item">
          <div>
            <h6 class="portfolio-list__name">Move it</h6>
            <p class="portfolio-list__desc">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>
          </div>
          <div class="">
            <p class="portfolio-list__status general__titles">Online</p>
            <div class="portfolio-tags flex">
              <p
                v-for="tag in ['React', 'TypeScript', 'Node JS', 'TypeScript']"
                :key="tag"
                class="general__titles"
                v-text="tag"
              ></p>
            </div>
            <img
              alt=""
              class="portfolio-list__picture"
              height="200"
              src="../assets/images/projects/project-01.png"
              width="300"
            />
          </div>
        </li>
        <li class="portfolio-list__item">
          <div>
            <h6 class="portfolio-list__name">Move it</h6>
            <p class="portfolio-list__desc">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>
          </div>
          <div class="">
            <p class="portfolio-list__status general__titles">Online</p>
            <div class="portfolio-tags flex">
              <p
                v-for="tag in ['React', 'TypeScript', 'Node JS', 'TypeScript']"
                :key="tag"
                class="general__titles"
                v-text="tag"
              ></p>
            </div>
            <img
              alt=""
              class="portfolio-list__picture"
              height="200"
              src="../assets/images/projects/project-01.png"
              width="300"
            />
          </div>
        </li>
      </ul>
      <a class="portfolio__more" href="#">View more projects &rightarrow;</a>
      <section class="video">
        <div class="video-head">
          <h6 class="video-head__title">Video projects</h6>
          <p class="video-head__subtitle">
            It's always good to know a little editing
          </p>
        </div>
        <div class="video-body">
          <div class="video-body__item">
            <img
              alt=""
              src="../assets/images/projects/thumbnail/project01.svg"
            />
            <div class="video-info">
              <h6 class="video-info__name">Move it</h6>
            </div>
          </div>
          <div class="video-body__item">
            <img
              alt=""
              src="../assets/images/projects/thumbnail/project01.svg"
            />
            <div class="video-info">
              <h6 class="video-info__name">Move it</h6>
            </div>
          </div>
          <div class="video-body__item">
            <img
              alt=""
              src="../assets/images/projects/thumbnail/project01.svg"
            />
            <div class="video-info">
              <h6 class="video-info__name">Move it</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.video
  padding: 80px 0

  &-head
    &__title
      font-size: var(--heading-60)

    &__subtitle
      font-size: var(--heading-10)
      color: var(--white-transparent)

  &-body
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 480px))
    justify-content: center
    padding: 20px 40px
    gap: 40px

    &__item
      border-radius: 16px
      border: 1px solid var(--clr-primary)
      padding: 28px 30px
      display: flex
      flex-direction: column
      gap: 4px

      &:nth-child(2n)
        border: none
        background-color: var(--primary-transparent)


  &-info
    &__name
      font-size: var(--heading-20)

.portfolio

  &-head
    justify-content: space-between

    &__title
      font-size: var(--heading-50)

  &__more
    font-size: var(--heading-30)
    margin: 0 auto

  &-list
    display: flex
    overflow-x: scroll
    //grid-template-columns: repeat(auto-fit, minmax(300px, 360px))
    width: 100%

    //display: grid
    //grid-template-columns: repeat(auto-fit, minmax(300px, 360px))
    overflow-scrolling: touch
    justify-content: space-between
    padding: 60px 40px
    gap: 40px


    &__item
      border-radius: 16px
      border: 1px solid var(--clr-primary)
      padding: 28px 30px
      display: flex
      flex-direction: column
      gap: 80px
      min-width: 360px

      &:nth-child(2n)
        border: none
        background-color: var(--primary-transparent)

    &__name
      font-size: var(--heading-30)

    &__picture
      width: 100%
      object-fit: cover

  &-tags
    gap: 6px
    flex-wrap: wrap

  &-filters
    gap: 20px

    &__btn
      display: flex
      align-items: center
      gap: 4px

      &:hover
        background-color: var(--primary-transparent)
        cursor: pointer

@media (min-width: 320px)
  .video
    &-body
      &__item
        justify-content: center

  .portfolio
    &-head
      flex-direction: column
      gap: 20px
      margin: 20px 0

@media (min-width: 900px)
  .portfolio
    &-head
      flex-direction: row
      justify-content: space-between
</style>
