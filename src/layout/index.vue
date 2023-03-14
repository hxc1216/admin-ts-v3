<script lang="ts" setup>
import { AppMain, SideBar, NavBar, TagsView } from './components'
</script>
<template>
  <!-- hide-side -->
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <SideBar></SideBar>
    </div>
    <div class="main-wrapper tags-show">
      <div class="header-wrapper">
        <NavBar />
        <TagsView />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}

.sidebar-wrapper {
  transition: width 0.28s;
  width: var(--sidebar-width) !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.main-wrapper {
  min-height: 100%;
  margin-left: var(--sidebar-width);
  position: relative;
}

.header-wrapper {
  height: var(--header-height);
}

.hide-side {
  .sidebar-wrapper {
    width: var(--sidebar-hide-width);
  }

  .main-wrapper {
    margin-left: var(--sidebar-hide-width);
  }
}
</style>
