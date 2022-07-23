<template lang="pug">
  #cover.d-flex.flex-column
    #title-text.text-center.text-white
      #title Takanashi Kiara
      #subtitle The Majestic Phoenix

    #scroll-down.w-100.text-center.text-white
      NuxtLink(to="/intro"): BIconChevronCompactDown
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { BIconChevronCompactDown } from 'bootstrap-vue'

export default defineComponent({
  components: { BIconChevronCompactDown },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'

$transition-time: 300ms

#cover
  transition: height $transition-time, padding $transition-time

  #title-text
    padding-top: 40vh
    &.scroll-index
      opacity: 1
    &.scroll-intro
      opacity: 0
    &.scroll-pages
      opacity: 0

  #title-text
    font-family: Noto Sans
    text-shadow: 0 0 10px black

    #title
      font-size: 6rem
      font-weight: 300
      @media screen and (max-width: 768px)
        font-size: 3rem

    #subtitle
      font-size: 3rem
      font-weight: 300
      @media screen and (max-width: 768px)
        font-size: 1.5rem

  #scroll-down
    font-size: 9rem
    filter: drop-shadow(0px 0px 10px black)
    bottom: 0

    &>a
      line-height: .5em

    &.scroll-intro, &.scroll-pages
      z-index: -10
</style>
