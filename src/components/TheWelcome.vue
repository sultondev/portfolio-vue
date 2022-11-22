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
              <a href="#">
                <span class="icomoon__font icon-linkedin"></span>
              </a>
            </li>
            <li class="welcome-networks__item">
              <a href="#">
                <span class="icomoon__font icon-github"></span>
              </a>
            </li>
            <li class="welcome-networks__item">
              <a href="#">
                <span class="icomoon__font icon-telegram"></span>
              </a>
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
            <span class="icomoon__font icon-download"></span>
          </a>
          <a class="welcome__contact general__button" href="#">
            <span class="icomoon__font icon-phone-inline"></span>
            Let's talk
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">
@import "../assets/styles/components/TheWelcome.sass"
</style>
