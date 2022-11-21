<template>
  <div id="welcome" class="welcome">
    <div class="container">
      <div class="welcome-list">
        <div
          class="welcome-list__item welcome-list__one"
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
              <img alt="" src="@/assets/icons/social-networks/linkedin.svg" />
            </li>
            <li class="welcome-networks__item">
              <img alt="" src="@/assets/icons/social-networks/github.svg" />
            </li>
            <li class="welcome-networks__item">
              <img alt="" src="@/assets/icons/social-networks/telegram.svg" />
            </li>
          </ul>
        </div>
        <div
          class="welcome-list__item welcome-list__two"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <img
            alt=""
            class="welcome-list__picture"
            src="@/assets/icons/logo/Me.svg"
          />
        </div>
        <div
          class="welcome-list__item welcome-list__three"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            class="welcome__cv"
            href="https://drive.google.com/u/2/uc?id=1IiQLgYVRs7X-daaRMJ0pfwL8nqhjcZNb&export=download"
            target="_blank"
          >
            Download CV
            <img
              alt=""
              height="18"
              src="../assets/icons/website/download.svg"
              width="18"
            />
          </a>
          <a class="welcome__contact general__button" href="#">
            <img alt="" src="@/assets/icons/website/telephone.svg" />
            Let's talk</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">
@import "../assets/styles/components/TheWelcome.sass"
</style>
