<template lang="pug">
  #navbar.flex-row-center.position-fixed.w-100.px-5.py-2
    template(v-for="(page, index) in pages")
      .navline-line(v-if="index")
      NuxtLink.navlink.flex-fill.h-100.mx-2.text-center.text-white(:to="page.route")
        div.flex-row-center.position-relative.h-100(:class="{ current: page.route === $route.path }")
          h3.w-100.m-0.pb-1 {{ page.text }}
</template>

<style lang="sass" scoped>
@import '@/assets/kiara'

$line-color: #CCC
$navbar-height: 60px
$navlink-height: 43px
$navlink-bgcolor: #00000099
$transition-time: 300ms

#navbar
  height: $navbar-height
  border-bottom: $line-color 1px solid
  bottom: 0
  transition: opacity $transition-time
  z-index: 20
  &.scroll-index
    opacity: 0
  &.scroll-intro
    opacity: 1
  &.scroll-pages
    opacity: 1

  .navline-line
    width: 1px
    height: 80%
    margin: 0 10px
    background-color: $line-color
    transform: rotate(30deg)

  .navlink
    div
      transition: background-color $transition-time
      background-color: transparent

      &::before, &::after
        position: absolute
        content: ""
        top: 0
        width: 0px
        height: 0px
        transition: border-color $transition-time

      &::before
        right: 100%
        border-bottom: $navlink-height solid transparent
        border-left: calc(#{$navlink-height} / 1.732) solid transparent

      &::after
        left: 100%
        border-top: $navlink-height solid transparent
        border-right: calc(#{$navlink-height} / 1.732) solid transparent

      &:hover, &.current
        background-color: $navlink-bgcolor
        &::before
          border-bottom-color: $navlink-bgcolor
        &::after
          border-top-color: $navlink-bgcolor
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const pages = [
  { route: '/kiara/intro', text: 'Intro' },
  { route: '/kiara/timeline', text: 'Timeline' },
  { route: '/kiara/videos', text: 'Videos' },
  { route: '/kiara/music', text: 'Music' },
  { route: '/kiara/twitter', text: 'Twitter' },
  { route: '/kiara/kfp', text: 'KFP' },
]

@Component
export default class extends Vue {
  readonly pages = pages
}
</script>
