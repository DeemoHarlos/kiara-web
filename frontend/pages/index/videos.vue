<template lang="pug">
  .page-container.container-xl
    .text-white.page-title Videos
    .mb-4(v-for="(video, i) in videoList")
      VideoItem(:videoInfo="video" :key="i")
    InfiniteLoading(@infinite="loadMore" spinner="spiral")
      div(slot="no-more"): hr
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading'

import { VideoInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  components: { InfiniteLoading },
  setup() {
    const videoList = ref<Array<VideoInfo>>([])
    const curPage = ref(1)
    const per = 10

    const loadMore = async($state: StateChanger) => {
      const data = await getApiData<VideoInfo>('ARCHIEVE', { page: curPage.value, per }, { type: 'music' })
      data.forEach(video => {
        video.title = video.title.replace(/【[^【】]+】/g, '')
        video.title = video.title.replace(/#[^# ]+/g, '')
      })
      videoList.value = videoList.value.concat(data)
      curPage.value ++
      if (data.length) $state.loaded()
      else $state.complete()
    }

    return {
      videoList,
      loadMore,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'
</style>
