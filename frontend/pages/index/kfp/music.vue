<template lang="pug">
  .page-container
    .row
      .col-12.col-sm-6.col-lg-4.col-xl-3.my-3.flex-row.middle-center(v-for="(music, i) in musicList")
        .music-item.position-relative
          .image.h-100(:style="{ 'background-image' : `url('${music.imageUrl}')` }")
          a.position-absolute.w-100.h-100.flex-row.middle-center(
            :href="music.url"
            target="_blank"
          )
            div.text-center
              | {{ music.name }}
              br
              small {{ music.artist }}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import { FanMusicInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  setup() {
    const musicList = ref<Array<FanMusicInfo>>([])

    onMounted(async() => {
      musicList.value = await getApiData<FanMusicInfo>('FANMUSIC')
    })

    return {
      musicList,
    }
  },
})
</script>

<style lang="sass" scoped>
.music-item
  width: 320px
  height: 180px
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
