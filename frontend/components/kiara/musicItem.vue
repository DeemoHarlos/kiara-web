<template lang="pug">
  .music-item.position-relative
    .image.h-100(:style="{ 'background-image' : `url('${musicInfo.imageUrl}')` }")
    a.position-absolute.w-100.h-100.flex-row.middle-center(
      :href="musicInfo.url"
      target="_blank"
    ): div {{ musicInfo.name }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

import { MusicInfo } from '@/util/types'

export default defineComponent({
  props: {
    musicInfo: { type: Object as PropType<MusicInfo>, required: true },
  },
  setup(props) {
    const { musicInfo } = toRefs(props)

    const time = computed(() => {
      const date = new Date(Date.parse(musicInfo.value.publishDate))
      return date.toLocaleString(undefined, {
        dateStyle: 'medium',
      })
    })
    return { time }
  },
})
</script>

<style lang="sass" scoped>
.music-item
  width: 300px
  height: 300px
  .image
    background-position: center
    background-size: cover
  a
    top: 0
    font-size: 1.5em
    text-decoration: none
    color: white
    background-color: #00000099
    opacity: 0
    transition: opacity 200ms
  &:hover a
    opacity: 1
</style>
