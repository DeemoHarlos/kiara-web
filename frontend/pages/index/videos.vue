<template lang="pug">
  .page-container.container-xl
    .text-white.page-title Videos
    .mb-4(v-for="(video, i) in videoList")
      VideoItem(:videoInfo="video" :key="i")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import { VideoInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  setup() {
    const videoList = ref<Array<VideoInfo>>([])

    onMounted(async() => {
      const data = await getApiData<VideoInfo>('ARCHIEVE')
      data.forEach(video => {
        video.title = video.title.replace(/【[^【】]+】/g, '')
        video.title = video.title.replace(/#[^# ]+/g, '')
      })
      videoList.value = data.slice(0, 20)
    })

    return {
      videoList,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'
</style>
