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
    InfiniteLoading(@infinite="loadMore" spinner="spiral")
      div(slot="no-more"): hr
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading'

import { FanMusicInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  components: { InfiniteLoading },
  setup() {
    const musicList = ref<Array<FanMusicInfo>>([])
    const curPage = ref(1)
    const per = 16

    const loadMore = async($state: StateChanger) => {
      const data = await getApiData<FanMusicInfo>('FANMUSIC', { page: curPage.value, per })
      musicList.value = musicList.value.concat(data)
      curPage.value ++
      if (data.length) $state.loaded()
      else $state.complete()
    }

    return {
      musicList,
      loadMore,
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
