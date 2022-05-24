<template lang="pug">
  #navbar.flex-row.middle-center.w-100.px-5.py-2
    span#navbar-name.mr-5 Takanashi Kiara
    template(v-for="(page, index) in pages")
      .navline-line(v-if="index")
      NuxtLink.navlink.flex-fill.mx-3.text-center.text-white(:to="page.route")
        div.flex-row-center.position-relative.h-100.py-2(:class="{ current: page.route === $route.path }")
          span.h6.w-100.m-0.pb-1 {{ page.text }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const pages = [
      { route: '/kiara/intro', text: 'Intro' },
      { route: '/kiara/timeline', text: 'Timeline' },
      { route: '/kiara/videos', text: 'Videos' },
      { route: '/kiara/music', text: 'Music' },
      { route: '/kiara/twitter', text: 'Twitter' },
      { route: '/kiara/kfp', text: 'KFP' },
    ]
    return { pages }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'

$line-color: $kiara-black
$navlink-tilt: 25px
$navlink-bgcolor: $kiara-orange
$transition-time: 300ms

#navbar
  background-color: $kiara-green
  border-bottom: $line-color 1px solid
  transition: opacity $transition-time

  #navbar-name
    font-size: 2rem

  .navline-line
    width: 1px
    height: 2em
    margin: 0 10px
    background-color: $line-color
    transform: rotate(33deg) translate(2px, 2px)

  .navlink
    div
      transition: background-color $transition-time
      background-color: transparent
      color: $kiara-black

      &::before, &::after
        position: absolute
        content: ""
        top: 0
        width: 0px
        height: 0px
        transition: border-color $transition-time

      &::before
        right: 100%
        border-bottom: 2.5em solid transparent
        border-left: $navlink-tilt solid transparent

      &::after
        left: 100%
        border-top: 2.5em solid transparent
        border-right: $navlink-tilt solid transparent

      &:hover, &.current
        background-color: $navlink-bgcolor
        color: white
        &::before
          border-bottom-color: $navlink-bgcolor
        &::after
          border-top-color: $navlink-bgcolor
</style>
