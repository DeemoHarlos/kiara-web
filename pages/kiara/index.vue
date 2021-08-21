<template lang="pug">
  div#kiara
    Navbar
    #cover.w-100.vh-100.text-center.text-white
      #title Takanashi Kiara
      #subtitle The Majestic Phoenix
      #scroll-down.w-100: BIconChevronCompactDown
    //- NuxtLink(to="/kiara/temp") temp
    NuxtChild
</template>

<style lang="sass" scoped>
#kiara
  #cover
    position: relative
    padding-top: 50vh
    background-image: url(https://picsum.photos/1920/1080)
    background-size: cover
    font-family: Noto Sans
    #title
      font-size: 6rem
      font-weight: 100
    #subtitle
      font-size: 3rem
      font-weight: 100
    #scroll-down
      position: absolute
      font-size: 9rem
      bottom: 0
</style>

<script lang="ts">
import Vue from 'vue'
import { BIconChevronCompactDown } from 'bootstrap-vue'

import Navbar from './-Navbar.vue'

export default Vue.extend({
  components: { Navbar, BIconChevronCompactDown }
})
</script>
