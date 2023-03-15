<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits<{ (e: 'toggle-click'): void }>()
const toggleClick = () => {
  emit('toggle-click')
}
</script>
<template>
  <div @click="toggleClick">
    <el-icon :size="20">
      <Fold v-if="props.isActive" />
      <Expand v-else />
    </el-icon>
  </div>
</template>
