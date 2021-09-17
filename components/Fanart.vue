<template lang="pug">
  div.image.w-100.h-100.position-relative(:style="combinedImageStyle")
    div.artist(:style="combinedArtistStyle")
      slot(name="artist") {{ artist }}
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as CSS from 'csstype'

export type FanartOption = {
  imageUrl: String
  artist: String
  imageStyle?: CSS.Properties
  artistStyle?: CSS.Properties
}

@Component
export default class Fanart extends Vue {
  @Prop() imageUrl!: String
  @Prop() artist!: String
  @Prop() imageStyle?: CSS.Properties
  @Prop() artistStyle?: CSS.Properties

  readonly imageDefaultStyle: CSS.Properties = {
    backgroundImage: `url(${this.imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  readonly artistDefaultStyle: CSS.Properties = {
    position: 'absolute',
    right: '.3rem',
    top: 0,
    fontSize: '1rem',
    fontFamily: 'monospace',
    color: '#FFFFFF99',
    textShadow: '0 0 5px black',
  }

  get combinedImageStyle() {
    return {
      ...this.imageDefaultStyle,
      ...this.imageStyle || {},
    } as CSS.Properties
  }

  get combinedArtistStyle() {
    return {
      ...this.artistDefaultStyle,
      ...this.artistStyle || {},
    } as CSS.Properties
  }
}
</script>
