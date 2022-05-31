<template lang="pug">
  div.fanart.w-100.h-100.position-relative.overflow-hidden
    div.blur.w-100.h-100(:style="{ backgroundImage: `url('${imageUrl}')` }")
    div.image.w-100.h-100(:style="combinedImageStyle")
      div.artist(:style="combinedArtistStyle")
        slot(name="artist") {{ artist }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

import * as CSS from 'csstype'

export type FanartOption = {
  imageUrl: string
  artist: string
  imageStyle?: CSS.Properties
  artistStyle?: CSS.Properties
}


export default defineComponent({
  props: {
    imageUrl: { type: String, required: true },
    artist: { type: String, required: true },
    imageStyle: { type: Object as PropType<CSS.Properties>, default: () => ({}) },
    artistStyle: { type: Object as PropType<CSS.Properties>, default: () => ({}) },
  },
  setup(props) {
    const { imageUrl, imageStyle, artistStyle } = toRefs(props)

    const imageDefaultStyle: CSS.Properties = {
      backgroundPosition: 'center',
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
    }

    const artistDefaultStyle: CSS.Properties = {
      position: 'absolute',
      right: '.3rem',
      top: 0,
      fontSize: '1rem',
      fontFamily: 'monospace',
      color: '#FFFFFF99',
      textShadow: '0 0 5px black',
    }

    const combinedImageStyle = computed(() => {
      return {
        backgroundImage: `url('${imageUrl.value}')`,
        ...imageDefaultStyle,
        ...imageStyle,
      } as CSS.Properties
    })

    const combinedArtistStyle = computed(() => {
      return {
        ...artistDefaultStyle,
        ...artistStyle,
      } as CSS.Properties
    })

    return {
      combinedImageStyle,
      combinedArtistStyle,
    }
  },
})
</script>

<style lang="sass" scoped>
.fanart
  .blur
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    filter: blur(16px)
    transform: scale(1.1)
    position: absolute
    top: 0
    left: 0
    z-index: -1
</style>
