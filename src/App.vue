<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss" scoped></style>
