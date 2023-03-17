<script lang="ts" setup>
const props = defineProps({
  collapse: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div class="side-bar-logo-container" :class="{ collapse: props.collapse }">
    <!-- <transition name=""> -->
    <router-link v-if="props.collapse" to="/">
      <strong>v3</strong>
    </router-link>
    <router-link v-else to="/">
      <strong>v3-admin-vite</strong>
    </router-link>
    <!-- </transition> -->
  </div>
</template>
<style lang="scss" scoped>
.side-bar-logo-container {
  position: relative;
  width: 100%;
  height: var(--header-height);
  line-height: var(--header-height);
  background-color: var(--sidebarlogo-bg-color);
  color: var(--sidebar-menu-text-color);
  text-align: center;
  overflow: hidden;
}
</style>
