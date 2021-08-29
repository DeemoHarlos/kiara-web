<template lang="pug">
  div#kiara.position-relative
    #cover.position-absolute.w-100(:class="{ scrolled }")
      #bg-image-container.position-absolute.w-100.h-100
        CoverArtCarousel.w-100.h-100(:fanarts="fanarts")

      #title-text.text-center.text-white(@click="scrollUp")
        #title Takanashi Kiara
        #subtitle The Majestic Phoenix

      #scroll-down.position-absolute.w-100.text-center.text-white(
        :class="{ scrolled }"
        @click="scrollDown"
      ): NuxtLink(to="/kiara/intro"): BIconChevronCompactDown

      #navbar.d-flex.flex-row.align-items-center.position-absolute.w-100.px-5.py-2(
        :class="{ scrolled }"
        @click="scrollDown"
      )
        template(v-for="(page, index) in pages")
          .navline-line(v-if="index")
          NuxtLink.navlink.flex-fill.h-100.mx-2.text-center.text-white(:to="page.route")
            div.d-flex.flex-row.align-items-center.position-relative.h-100
              h3.w-100.m-0.pb-1 {{ page.text }}

    div#page-container: NuxtChild
</template>

<style lang="sass" scoped>
$scroll-transition-time: 300ms
$line-color: #CCC
$banner-height: 180px
$navbar-height: 60px
$navlink-height: 43px
$navlink-bgcolor: #FFFFFF99
$kiara-orange: #FF511C

#kiara
  a
    text-decoration: none
    color: inherit

  #cover
    transition: height $scroll-transition-time, padding $scroll-transition-time
    z-index: 10
    padding-top: 50vh
    height: 100vh
    &.scrolled
      padding-top: 0
      height: $banner-height
      #title-text div
        opacity: 0

    #bg-image-container
      // background-image: url(https://picsum.photos/1920/1080)
      // background-size: cover
      // background-position: center
      inset: 0
      z-index: -1

    #title-text
      font-family: Noto Sans

      #title
        font-size: 6rem
        font-weight: 100

      #subtitle
        font-size: 3rem
        font-weight: 100

    #scroll-down
      font-size: 9rem
      bottom: 0
      transition: opacity $scroll-transition-time
      opacity: 1
      &.scrolled
        opacity: 0
        z-index: -10

    #navbar
      height: $navbar-height
      border-bottom: $line-color 1px solid
      bottom: 0
      transition: opacity $scroll-transition-time, inset $scroll-transition-time
      opacity: 0
      &.scrolled
        opacity: 1

      .navline-line
        width: 1px
        height: 60%
        margin: 0 10px
        background-color: $line-color
        transform: rotate(30deg)

      .navlink
        div
          transition: background-color $scroll-transition-time
          background-color: transparent
          &:hover
            background-color: $navlink-bgcolor
            &::before
              border-bottom-color: $navlink-bgcolor
            &::after
              border-top-color: $navlink-bgcolor

          &::before, &::after
            position: absolute
            content: ""
            top: 0
            width: 0px
            height: 0px
            transition: border-color $scroll-transition-time

          &::before
            right: 100%
            border-bottom: $navlink-height solid transparent
            border-left: calc(#{$navlink-height} / 1.732) solid transparent

          &::after
            left: 100%
            border-top: $navlink-height solid transparent
            border-right: calc(#{$navlink-height} / 1.732) solid transparent

  #page-container
    min-height: 100vh
    padding-top: $banner-height
    background-color: $kiara-orange
</style>

<script lang="ts">
import Vue from 'vue'
import { BIconChevronCompactDown } from 'bootstrap-vue'

import { Fanart } from '~/components/Fanart.vue'

export default Vue.extend({
  components: { BIconChevronCompactDown },
  data: () => ({
    scrolled: false,
    pages: [
      { route:"/kiara/intro", text:"Intro" },
      { route:"/kiara/timeline", text:"Timeline" },
      { route:"/kiara/videos", text:"Videos" },
      { route:"/kiara/music", text:"Music" },
      { route:"/kiara/twitter", text:"Twitter" },
      { route:"/kiara/kfp", text:"KFP" },
    ],
    fanarts: <Array<Fanart>> [
      { imageUrl: 'https://picsum.photos/1920/1080', artist: 'random' },
      { imageUrl: 'https://picsum.photos/1920/1080', artist: 'random' },
      { imageUrl: 'https://picsum.photos/1920/1080', artist: 'random' },
      { imageUrl: 'https://picsum.photos/1920/1080', artist: 'random' },
      { imageUrl: 'https://picsum.photos/1920/1080', artist: 'random' },
    ]
  }),
  methods: {
    scrollDown(): void {
      this.scrolled = true
    },
    scrollUp(): void {
      this.scrolled = false
    },
  },
})
</script>
