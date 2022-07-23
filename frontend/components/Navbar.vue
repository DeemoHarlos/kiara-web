<template lang="pug">
  #navbar.flex-row.middle-center.w-100.px-3.px-lg-5.py-2
    span#navbar-name.mr-3.mr-lg-5
      NuxtLink(to="/") Takanashi Kiara
    .d-none.d-md-flex.flex-row.middle-center.flex-fill
      template(v-for="(page, index) in pages")
        .navline-line(v-if="index")
        NuxtLink.navlink.flex-fill.mx-3.text-center.text-white(:to="page.route")
          div.flex-row-center.position-relative.h-100.py-2(:class="{ current: $route.path.startsWith(page.route) }")
            span.h6.w-100.m-0.pb-1 {{ page.text }}
    .d-flex.d-md-none.flex-fill
    .d-flex.d-md-none.mr-5.flex-row
      .navlink.mx-3.text-center.text-white(v-if="thisPage" @click="triggerNavbar")
        div.flex-row-center.position-relative.h-100.py-2(class="current")
          span.h6.w-100.m-0.pb-1 {{ thisPage.text }}
      #sidebar.position-fixed(:class="{ open: navbarOpen }" @click="triggerNavbar")
        template(v-for="(page, index) in pages")
          .navline-h(v-if="index")
          NuxtLink.navlink.flex-fill.mx-5.text-center.text-white(:to="page.route")
            div.flex-row-center.position-relative.h-100.py-2(:class="{ current: $route.path.startsWith(page.route) }")
              span.h6.w-100.m-0.pb-1 {{ page.text }}
</template>

<script lang="ts">
import { computed, defineComponent, ref, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const pages = [
      { route: '/intro', text: 'Intro' },
      { route: '/lore', text: 'Lore' },
      { route: '/history', text: 'History' },
      { route: '/timeline', text: 'Timeline' },
      { route: '/videos', text: 'Videos' },
      { route: '/music', text: 'Music' },
      { route: '/kfp', text: 'KFP' },
    ]
    const thisPage = computed(() => pages.find(p => route.value.path.startsWith(p.route)))
    const navbarOpen = ref(false)
    const triggerNavbar = () => { navbarOpen.value = !navbarOpen.value }
    return { pages, thisPage, navbarOpen, triggerNavbar }
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

  #sidebar
    background-color: $kiara-green
    top: 65px
    left: 100%
    width: 300px
    padding: 1rem 5rem
    z-index: 300

  .navline-line
    width: 1px
    height: 2em
    margin: 0 10px
    background-color: $line-color
    transform: rotate(33deg)

  .navline-h
    height: 1px
    background-color: $line-color

  .navlink
    & + #sidebar.open
      left: unset
      right: 0

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
