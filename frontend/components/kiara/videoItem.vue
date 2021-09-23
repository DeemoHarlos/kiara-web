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

<style lang="sass" scoped>
.video-item
  .card-body
    padding: .5rem 1rem
  .type, .subtype
    font-size: 1rem
  .tag
    font-size: .8rem
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export type VideoInfo = {
  ID: string,
  url: string,
  title: string,
  time: string,
  type: string,
  subtype: string,
  isSponsored: boolean,
  streamHost: string,
  members: string[],
  customTags: string[],
  language: string
}

@Component
export default class extends Vue {
  @Prop() videoInfo!: VideoInfo

  get time() {
    const date = new Date(Date.parse(this.videoInfo.time))
    return date.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }
}
</script>
