<template lang="pug">
  .page-container
    .row
      .fanart-item.col-12.col-sm-6.col-lg-4.col-xl-3.position-relative.my-3(v-for="(fanart, i) in fanartList" :key="i")
        .image.h-100.position-relative(:style="{ 'background-image' : `url('${fanart.imageUrl}')` }")
          a.position-absolute.w-100.h-100.flex-row.middle-center.text-center(
            :href="fanart.source"
            target="_blank"
          )
            a(:href="fanart.artistLink" target="_blank") {{ fanart.artist }}
    InfiniteLoading(@infinite="loadMore" spinner="spiral")
      div(slot="no-more"): hr
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading'

import { FanArtInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  components: { InfiniteLoading },
  setup() {
    const fanartList = ref<Array<FanArtInfo>>([])
    const curPage = ref(1)
    const per = 16

    const loadMore = async($state: StateChanger) => {
      const data = await getApiData<FanArtInfo>('FANART', { page: curPage.value, per })
      fanartList.value = fanartList.value.concat(data)
      curPage.value ++
      if (data.length) $state.loaded()
      else $state.complete()
    }

    return {
      fanartList,
      loadMore,
    }
  },
})
</script>

<style lang="sass" scoped>
.fanart-item
  height: 200px
  a
    color: white
  .image
    background-position: center
    background-size: cover
    &>a
      top: 0
      font-size: 1.5em
      text-decoration: none
      background-color: #00000099
      opacity: 0
      transition: opacity 200ms
    &:hover>a
      opacity: 1
</style>
