<template lang="pug">
  b-carousel(img-height="100%" :no-hover-pause="false")
    b-carousel-slide(v-for="(fanart, i) in fanarts" :key="i")
      template(#img): Fanart(v-bind="fanart")
</template>

<style lang="sass">
.carousel-inner
  height: 100%

.carousel-item
  width: 100%
  height: 100%
  background-position: center
  background-size: cover
</style>

<script lang="ts">
import Vue from 'vue'

import { FanartOption } from './Fanart.vue'

export default Vue.extend({
  components: {},
  props: {
    fanarts: Array as () => Array<FanartOption>,
  },
  data: () => ({}),
  methods: {},
})
</script>
