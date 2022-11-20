<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <p class="footer__copyright footer__one">
          Copyright © Ablakulav Sultankhan · 2022
        </p>
        <ul class="footer-networks footer__two">
          <li class="footer-networks__item">
            <img
              alt="Linkedin"
              src="../assets/icons/social-networks/linkedin.svg"
            />
          </li>
          <li class="footer-networks__item">
            <img
              alt="Github"
              src="../assets/icons/social-networks/github.svg"
            />
          </li>
          <li class="footer-networks__item">
            <img
              alt="Telegram"
              src="../assets/icons/social-networks/telegram.svg"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">

.footer
  width: 100%
  background: #15152B
  padding: 26px 0
  position: relative
  z-index: 1000

  &-networks
    display: flex
    gap: 20px

  &__copyright
    font-size: var(--heading-20)
    color: var(--white-transparent)

  &-wrapper
    display: flex
    align-items: center
    justify-content: space-between
</style>
