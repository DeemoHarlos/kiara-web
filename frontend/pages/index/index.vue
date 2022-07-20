<template lang="pug">
  #cover.full-screen.d-flex.flex-column
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
    padding-top: 50vh
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

    #subtitle
      font-size: 3rem
      font-weight: 300

  #scroll-down
    font-size: 9rem
    bottom: 0
    transition: opacity $transition-time
    &.scroll-intro, &.scroll-pages
      z-index: -10
</style>
