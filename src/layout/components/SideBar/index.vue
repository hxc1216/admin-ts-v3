<script lang="ts" setup>
import { useAppStore } from '@/stores/modules/app'
import { computed } from 'vue'

const appStore = useAppStore()

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>
<template>
  <div>sidebar</div>
</template>
