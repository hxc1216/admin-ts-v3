<script lang="ts" setup></script>
<template>
  <div class="err-page">
    <div class="err-page-main">
      <slot></slot>
    </div>
    <router-link to="/">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.err-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  &-main {
    width: 400px;
    margin-bottom: 50px;
  }
}
</style>
