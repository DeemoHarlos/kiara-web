<template lang="pug">
  div#intro.page-container: div.h-100.flex-row-avg
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
      NuxtLink(to="/kiara/") BACK
    div.image-frame
      img(src="@/assets/kiara/kiara_full.png" alt="Takanashi Kiara").w-100
</template>

<style lang="sass" scoped>
@import '@/assets/kiara'

#intro
  height: 100vh
  overflow-y: hidden

  .text-frame
    padding: 4rem
    color: white
    font-size: 2rem

  .image-frame
    padding-right: 2rem
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>
