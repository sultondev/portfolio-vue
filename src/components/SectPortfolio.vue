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
        <li
          class="portfolio-list__item"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
        >
          <div class="portfolio-list__one">
            <h6 class="portfolio-list__name">Move it</h6>
            <p class="portfolio-list__desc">
              Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
              Plataforma de Pomodoro com exercícios.
            </p>
          </div>

          <div class="portfolio-list__two">
            <div class="portfolio-tags flex">
              <p class="portfolio-list__status general__titles general-br__8">
                Online
              </p>
              <p
                v-for="tag in ['React', 'TypeScript', 'Node JS', 'TypeScript']"
                :key="tag"
                class="general__titles general-br__8"
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
      <router-link class="portfolio__more" to="portfolio"
        >View more projects &rightarrow;
      </router-link>
      <section class="video">
        <div class="video-head">
          <h6 class="video-head__title">Video projects</h6>
          <p class="video-head__subtitle">
            It's always good to know a little editing
          </p>
        </div>
        <div class="video-body">
          <div
            class="video-body__item"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="200"
          >
            <img
              alt=""
              src="../assets/images/projects/thumbnail/project01.svg"
            />
            <div class="video-info">
              <h6 class="video-info__name">Move it</h6>
            </div>
          </div>
          <div
            class="video-body__item"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            <img
              alt=""
              src="../assets/images/projects/thumbnail/project01.svg"
            />
            <div class="video-info">
              <h6 class="video-info__name">Move it</h6>
            </div>
          </div>
          <div
            class="video-body__item"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="200"
          >
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
@import "@/assets/styles/components/_SectPortfolio.sass"
</style>
