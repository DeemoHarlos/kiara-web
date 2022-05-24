<template lang="pug">
  div#intro.page-container: div.h-100.flex-row
    div.text-frame
      p
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        | sed do eiusmod tempor incididunt ut labore et dolore magna
        | aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        | ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        | aute irure dolor in reprehenderit in voluptate velit esse cillum
        | dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        | non proident, sunt in culpa qui officia deserunt mollit anim id
        | est laborum.
    div.image-frame.flex-fill
      img(src="@/assets/kiara/kiara_full.png" alt="Takanashi Kiara").h-100
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="sass" scoped>
@import '@/assets/kiara'

#intro
  height: 100%
  overflow-y: hidden

  .text-frame
    padding: 4rem
    color: white
    font-size: 1.5rem

  .image-frame
    padding-right: 2rem
</style>
