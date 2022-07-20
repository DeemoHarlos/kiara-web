<template lang="pug">
  .video-item
    b-card(
      :img-src="`https://img.youtube.com/vi/${videoInfo.ID}/mqdefault.jpg`"
      img-left
    )
      b-card-title
        div
          b-badge.type.mr-2(pill variant="secondary")
            | {{ videoInfo.type }}
          b-badge.subtype.mr-2(pill variant="secondary")
            | {{ videoInfo.subtype }}
        div {{ videoInfo.title }}
      b-card-text
        p
          | {{ time }}
          br
          template(v-for="(tag, i) in videoInfo.customTags")
            b-badge.tag.mr-2(pill variant="secondary" :key="i")
              | {{ tag }}
      a.stretched-link(:href="videoInfo.url" target="_blank")
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'

import { VideoInfo } from '@/util/types'

export default defineComponent({
  props: {
    videoInfo: { type: Object as PropType<VideoInfo>, required: true },
  },
  setup(props) {
    const { videoInfo } = toRefs(props)

    const time = computed(() => {
      const date = new Date(Date.parse(videoInfo.value.time))
      return date.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    })
    return { time }
  },
})
</script>

<style lang="sass" scoped>
.video-item
  .card
    background-color: #FFFFFFCC
  .card-body
    padding: .5rem 1rem
  .type, .subtype
    font-size: 1rem
  .tag
    font-size: .8rem
</style>
