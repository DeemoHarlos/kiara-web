<template lang="pug">
  div
</template>

<script lang="ts">
import { defineComponent, onMounted, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()

    onMounted(() => {
      router.push('/kiara/')
    })

    return {}
  },
})
</script>
