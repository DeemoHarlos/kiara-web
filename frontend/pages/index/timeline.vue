<template lang="pug">
  .page-container.container-xl.text-white
    .display-1.text-center Timeline
    .content
      #timeline-table.flex-row.middle-center.pb-1(v-for="timeline in timelineList")
        .attr.pr-3.text-right.h-100 {{ timeline.date }}
        .value.pl-3.flex-fill.white-pre {{ timeline.description }}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import { TimelineInfo } from '@/util/types'

import { getApiData } from '@/util/api'

export default defineComponent({
  setup() {
    const timelineList = ref<Array<TimelineInfo>>([])

    onMounted(async() => {
      timelineList.value = await getApiData<TimelineInfo>('TIMELINE')
    })

    return {
      timelineList,
    }
  },
})
</script>

<style lang="sass" scoped>
#timeline-table
  .attr
    font-size: 1rem
    line-height: 3rem
    width: 160px
  .value
    border-left: solid white 1px
    font-size: 1.5rem
    white-space: pre
  .attr, .value
    display: inline-block

</style>
