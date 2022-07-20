<template lang="pug">
  div#intro.page-container.container-xl: div.h-100.flex-row.stretch-center
    div.text-frame.py-5.pl-0.pl-md-5
      #attributes.pb-3
        .item.flex-row.middle-center.pb-1(v-for="item in attributeList")
          .attr.pr-3.text-right {{ item.attribute.toUpperCase() }}
          .value.pl-3.flex-fill {{ item.value }}
      p.first-paragraph.
        Kiara is enthusiastic and friendly, and is open with her feelings.
        She cares strongly for her friends and family,
        and misses them a great deal while she is abroad.
        Although energetic and sometimes chaotic in nature,
        and eager to collab with other members,
        she is secretly quite shy.
        She is sometimes bird-brained,
        being forgetful or having a short attention span.
        She prefers video games with fixed goals, such as RPGs,
        rather than open-world games like Minecraft.
      p: i.small.
        An idol whose dream is to become the owner of a fast food chain.
        Kiara is a phoenix, not a chicken or turkey. (Very important)<br>
        She burns brightly, working herself to the bone since
        she'll just be reborn from her ashes anyway.
    div.image-frame.d-none.d-lg-block
      img(src="@/assets/kiara/kiara_full.png" alt="Takanashi Kiara").h-100
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const attributes = {
      name: 'Takanashi Kiara',
      race: 'Phoenix',
      birthday: 'July 6th',
      age: 'Eternal',
      height: '165cm',
    }
    const attributeList = Object.entries(attributes).map(
      ([k, v]) => ({ attribute: k, value: v }),
    )

    return {
      attributeList,
    }
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'

#intro
  height: 100%
  overflow-y: auto

  .text-frame
    color: white
    max-width: 800px

    #attributes
      .attr
        font-size: 1rem
        line-height: 3rem
        border-right: solid white 1px
        width: 160px
        @media screen and (max-width: 768px)
          width: 80px
      .value
        font-size: 2rem
      .attr, .value
        display: inline-block

    p
      font-size: 1.25rem

    p.first-paragraph::first-letter
      font-size: 4rem
      margin-right: .1ch
      float: left
      line-height: .9
</style>
