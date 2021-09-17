<template lang="pug">
  div#kiara.d-flex.flex-column.position-relative.w-100.vh-100
    #cover.full-screen(:class="scrollStatus")
      #bg-image-container.fill-box
        CoverArtCarousel.fill-box(:fanarts="fanarts")

      #title-text.text-center.text-white(:class="scrollStatus")
        #title Takanashi Kiara
        #subtitle The Majestic Phoenix

      #scroll-down.position-absolute.w-100.text-center.text-white(
        :class="scrollStatus"
      ): NuxtLink(to="/kiara/intro"): BIconChevronCompactDown

    div#page-container: NuxtChild

    #navbar.flex-row-center.position-fixed.w-100.px-5.py-2(
      :class="scrollStatus"
    )
      template(v-for="(page, index) in pages")
        .navline-line(v-if="index")
        NuxtLink.navlink.flex-fill.h-100.mx-2.text-center.text-white(:to="page.route")
          div.flex-row-center.position-relative.h-100(:class="{ current: page.route === path }")
            h3.w-100.m-0.pb-1 {{ page.text }}
</template>

<style lang="sass" scoped>
@import '@/assets/kiara/index.sass'
@import '@/assets/kiara/navbar.sass'

$transition-time: 300ms

#cover
  transition: height $transition-time, padding $transition-time
  z-index: -5

  #title-text
    padding-top: 50vh
    &.scroll-index
      opacity: 1
    &.scroll-intro
      opacity: 0
    &.scroll-pages
      opacity: 0

  #bg-image-container
    inset: 0
    z-index: -1

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

#page-container
  min-height: 100vh
  padding-bottom: $navbar-height

#navbar
  &.scroll-index
    opacity: 0
  &.scroll-intro
    opacity: 1
  &.scroll-pages
    opacity: 1
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Route } from "vue-router";
import { BIconChevronCompactDown } from "bootstrap-vue";

import axios from "axios";

import { FanartOption } from "~/components/Fanart.vue";

const pages = [
  { route: "/kiara/intro", text: "Intro" },
  { route: "/kiara/timeline", text: "Timeline" },
  { route: "/kiara/videos", text: "Videos" },
  { route: "/kiara/music", text: "Music" },
  { route: "/kiara/twitter", text: "Twitter" },
  { route: "/kiara/kfp", text: "KFP" }
];

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "http://cloud.harlos.me:2434/"
    : "http://localhost:2434/";

enum ScrollStatus {
  INDEX = "scroll-index",
  INTRO = "scroll-intro",
  PAGES = "scroll-pages"
}

Component.registerHooks(["beforeRouteUpdate"]);

@Component({
  components: { BIconChevronCompactDown }
})
export default class Fanart extends Vue {
  readonly pages = pages;
  fanarts = [] as Array<FanartOption>;

  scrollStatus = ScrollStatus.INDEX;
  path = this.$route.path;
  setScrollStatus(route: Route) {
    this.path = route.path;
    switch (route.path) {
      case "/kiara":
        this.scrollStatus = ScrollStatus.INDEX;
        break;
      case "/kiara/intro":
        this.scrollStatus = ScrollStatus.INTRO;
        break;
      default:
        this.scrollStatus = ScrollStatus.PAGES;
    }
  }

  async beforeRouteUpdate(to: Route, _from: Route, next: () => void) {
    this.setScrollStatus(to);
    next();
  }

  async mounted() {
    const response = await axios.get(`${API_ROOT}COVERFANARTS`);
    this.fanarts = response.data as Array<FanartOption>;
    this.setScrollStatus(this.$route);
  }
}
</script>
