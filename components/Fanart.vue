<template lang="pug">
  div.image.w-100.h-100.position-relative(:style="getImageStyle()")
    div.artist: slot(name="artist") {{ artist }}
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
import Vue from 'vue'
// import { Props } from '~/util/types';
import * as CSS from 'csstype';

export type Fanart = {
  imageUrl: string
  artist: string
  imageStyle?: CSS.Properties
  artistStyle?: CSS.Properties
}

// type FanartProps = Props<Fanart>

export default Vue.extend({
  components: {},
  // props: {
  //   imageUrl: 'string',
  //   artist: 'string',
  // } as FanartProps,
  data() { return {} },
  computed: {
    imageDefaultStyle(): CSS.Properties { return {
      // backgroundImage: `url(${this.imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }},
    artistDefaultStyle(): CSS.Properties { return {
      position: 'absolute',
      right: 0,
      bottom: 0,
      fontSize: '3rem',
      fontFamily: 'monospace',
    }},
  },
  methods: {
    getImageStyle(): CSS.Properties { return {
      ...this.imageDefaultStyle,
      // ...this.imageStyle,
    }},
    getArtistStyle(): CSS.Properties { return {
      ...this.artistDefaultStyle,
      // ...this.artistStyle,
    }},
  },
})
</script>
