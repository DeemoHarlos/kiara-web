<template lang="pug">
  div#kiara.d-flex.flex-column.position-relative.w-100.vh-100(
    :class="{ index: isIndex, intro: isIntro }"
  )
    #bg-image-container.fill-box
      CoverArtCarousel.fill-box(:fanarts="fanarts")
    kiara-navbar#navbar.position-fixed
    div#page-container
      NuxtChild
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, useRoute } from '@nuxtjs/composition-api'

import { FanartOption } from '@/components/Fanart.vue'

import { getApiData } from '@/util/api'

export default defineComponent({
  setup() {
    const route = useRoute()

    const fanarts = ref<Array<FanartOption>>([])

    const isIndex = computed(() => /^\/?kiara\/?$/.test(route.value.path))
    const isIntro = computed(() => /^\/?kiara\/intro\/?$/.test(route.value.path))

    onMounted(async() => {
      fanarts.value = await getApiData<FanartOption>('COVERFANARTS')
      console.log(route.value.path)
    })

    return {
      fanarts,
      isIndex,
      isIntro,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'

$navbar-height: 65px
$transition-time: 300ms

#kiara
  color: $kiara-black
  #bg-image-container
    inset: 0
  #page-container
    height: 100vh
    overflow-y: auto
    position: relative
    margin-top: $navbar-height
    background-color: rgba($kiara-black, 0.75)
    #back
      opacity: 1
      bottom: 1rem
      right: 1rem
      transition: opacity $transition-time
  #navbar
    opacity: 1
    top: 0
    z-index: 200
    height: $navbar-height
    transition: opacity $transition-time

#kiara.index
  #page-container
    background-color: transparent
  #navbar
    pointer-events: none
    opacity: 0

#kiara.intro
  #page-container
    background-color: rgba($kiara-black, 0.75)
  #navbar
    opacity: 1
</style>
