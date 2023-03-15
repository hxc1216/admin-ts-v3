<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import screenfull from 'screenfull'
import { ref, onUnmounted } from 'vue'

const props = defineProps({
  /** 全屏的元素 默认是html */
  element: {
    type: String,
    default: 'html'
  },
  /** 打开全屏提示文字 */
  openTips: {
    type: String,
    default: '全屏'
  },
  /** 关闭全屏提示文字 */
  exitTips: {
    type: String,
    default: '退出全屏'
  }
})

const tips = ref<string>(props.openTips)
const isFullScreen = ref<boolean>(false)

const clickHandle = () => {
  const dom = document.querySelector(props.element) || undefined
  if (!screenfull.isEnabled) {
    ElMessage.error('您的浏览器无法工作')
    return
  }
  screenfull.toggle(dom)
}

const change = () => {
  isFullScreen.value = screenfull.isFullscreen
  tips.value = screenfull.isFullscreen ? props.exitTips : props.openTips
}

screenfull.on('change', change)

onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', change)
  }
})
</script>
<template>
  <div @click="clickHandle">
    <svg-icon v-if="!isFullScreen" name="fullscreen"></svg-icon>
    <svg-icon v-else name="fullscreen-exit"></svg-icon>
  </div>
</template>
<style lang="scss" scoped>
.svg-icon {
  font-size: 20px;
}
</style>
