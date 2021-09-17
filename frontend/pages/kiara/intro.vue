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
    div.image-frame
      img(src="@/assets/kiara/kiara_full.png" alt="Takanashi Kiara").w-100
</template>

<style lang="sass" scoped>
@import '@/assets/kiara/page.sass'

#intro
  background-color: #000000AA
  height: 100vh
  overflow-y: hidden
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  data: () => ({}),
  methods: {},
})
</script>
