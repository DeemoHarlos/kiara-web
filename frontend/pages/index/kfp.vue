<template lang="pug">
  #kfp.position-relative
    KfpNavbar#kfp-navbar.position-absolute
    #kfp-page-container
      NuxtChild
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

$navbar-height: 65px
$kfp-navbar-height: 40px

#kfp
  #kfp-page-container
    height: calc(100vh - #{$navbar-height} - #{$kfp-navbar-height})
    overflow-y: auto
    margin-top: $kfp-navbar-height
    background-color: $kiara-yellow
  #kfp-navbar
    top: -$kfp-navbar-height
    left: 0
    height: $kfp-navbar-height

</style>
