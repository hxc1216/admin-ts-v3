<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>
<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" :key="key"></component>
        </keep-alive>
        <component :is="Component" :key="key" v-else></component>
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - var(--navigationbar-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--body-bg-color);
}


.tags-show {
  .app-main {
    min-height: calc(100vh - var(--header-height));
  }
}
</style>
