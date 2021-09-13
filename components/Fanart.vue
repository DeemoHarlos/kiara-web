<template lang="pug">
  div.image.w-100.h-100.position-relative(:style="getImageStyle()")
    div.artist(:style="getArtistStyle()")
      slot(name="artist") {{ artist }}
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
import Vue, { PropType } from 'vue'
import * as CSS from 'csstype';

export type FanartOption = {
  imageUrl: String
  artist: String
  imageStyle?: CSS.Properties
  artistStyle?: CSS.Properties
}

export default Vue.extend({
  components: {},
  props: {
    imageUrl: String,
    artist: String,
    imageStyle: {
      type: Object as PropType<CSS.Properties>,
      required: false,
      default: () => {},
    },
    artistStyle: {
      type: Object as PropType<CSS.Properties>,
      required: false,
      default: () => {},
    },
  },
  data() { return {} },
  computed: {
    imageDefaultStyle(): CSS.Properties { return {
      backgroundImage: `url(${this.imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }},
    artistDefaultStyle(): CSS.Properties { return {
      position: 'absolute',
      right: '.3rem',
      top: 0,
      fontSize: '1rem',
      fontFamily: 'monospace',
      color: '#FFFFFF99',
      textShadow: '0 0 5px black',
    }},
  },
  methods: {
    getImageStyle(): CSS.Properties { return {
      ...this.imageDefaultStyle,
      ...this.imageStyle,
    }},
    getArtistStyle(): CSS.Properties { return {
      ...this.artistDefaultStyle,
      ...this.artistStyle,
    }},
  },
})
</script>
