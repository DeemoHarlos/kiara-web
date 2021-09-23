<template lang="pug">
  .page-container.container-fluid
    .text-white.page-title Videos
    .mb-4(v-for="(video, i) in videoList")
      kiara-video-item(:videoInfo="video" :key="i")
</template>

<style lang="sass" scoped>
@import '@/assets/kiara'
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { getApiData } from '~/util/api'

import { VideoInfo } from '~/components/kiara/videoItem.vue'

@Component
export default class extends Vue {
  videoList = [] as Array<VideoInfo>

  async mounted() {
    const data = await getApiData<VideoInfo>('ARCHIEVE')
    data.forEach(video => {
      video.title = video.title.replace(/【[^【】]+】/g, '')
      video.title = video.title.replace(/#[^# ]+/g, '')
    })
    this.videoList = data
  }
}
</script>
