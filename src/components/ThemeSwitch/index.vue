<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!-- active-icon  inactive-icon -->
  <el-switch v-model="value" />
  <svg-icon name="dark-icon" />
  <svg-icon name="light-icon" />
</template>
