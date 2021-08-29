<template lang="pug">
  b-carousel(img-height="100vh")
    b-carousel-slide(v-for="(fanart, i) in fanarts" :key="i")
      Fanart(v-bind="fanart")
</template>

<style lang="sass" scoped>
.carousel-item
  width: 100%
  height: 100vh
  background-position: center
  background-size: cover
</style>

<script lang="ts">
import Vue from 'vue'
import { Props } from '~/util/types'

import { Fanart } from './Fanart.vue'

export type CoverArtCarouselProps = Props<{
  fanarts: Array<Fanart>,
}>

export default Vue.extend({
  components: {},
  props: <CoverArtCarouselProps> {
    fanarts: [],
  },
  data: () => ({}),
  methods: {},
})
</script>
