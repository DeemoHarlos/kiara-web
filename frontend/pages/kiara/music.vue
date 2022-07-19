<template lang="pug">
  .page-container.container-xl
    .display-1.text-center.text-white Music
    .row
      .col-4(v-for="(music, i) in musicList")
        kiara-music-item.mx-auto.my-5(:musicInfo="music" :key="i")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import { MusicInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  setup() {
    const musicList = ref<Array<MusicInfo>>([])

    onMounted(async() => {
      musicList.value = await getApiData<MusicInfo>('MUSIC')
    })

    return {
      musicList,
    }
  },
})
</script>

<style lang="sass" scoped>
</style>
