<template lang="pug">
  b-carousel(img-height="100%" :no-hover-pause="false")
    b-carousel-slide(v-for="(fanart, i) in fanarts" :key="i")
      template(#img): Fanart(v-bind="fanart")
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { FanartOption } from './Fanart.vue'

export default defineComponent({
  props: {
    fanarts: { type: Array as PropType<Array<FanartOption>>, required: true },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="sass">
.carousel-inner
  height: 100%

.carousel-item
  width: 100%
  height: 100%
  background-position: center
  background-size: cover
</style>
