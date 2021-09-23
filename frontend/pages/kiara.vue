<template lang="pug">
  div#kiara.d-flex.flex-column.position-relative.w-100.vh-100(
    :class="{ index: isIndex(), intro: isIntro() }"
  )
    #bg-image-container.fill-box
      CoverArtCarousel.fill-box(:fanarts="fanarts")
    div#page-container.px-5.pt-4: NuxtChild
    kiara-navbar#navbar
</template>

<style lang="sass" scoped>
@import '@/assets/kiara'

$transition-time: 300ms

#kiara
  #bg-image-container
    inset: 0
    z-index: -1
    opacity: 0
  #page-container
    height: 100vh
    overflow-y: auto
    padding-bottom: $navbar-height
    background-color: $kiara-orange
  #navbar
    opacity: 1

#kiara.index
  #bg-image-container
    opacity: 1
  #page-container
    background-color: transparent
  #navbar
    opacity: 0

#kiara.intro
  #bg-image-container
    opacity: 1
  #page-container
    background-color: #000000AA
  #navbar
    opacity: 1
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { FanartOption } from '~/components/Fanart.vue'

import { getApiData } from '@/util/api'

@Component
export default class extends Vue {
  fanarts = [] as Array<FanartOption>

  private isIndex = () => /^\/?kiara\/?$/.test(this.$route.path)
  private isIntro = () => /^\/?kiara\/intro\/?$/.test(this.$route.path)

  async mounted() {
    this.fanarts = await getApiData<FanartOption>('COVERFANARTS')
    console.log(this.$route.path)
  }
}
</script>
