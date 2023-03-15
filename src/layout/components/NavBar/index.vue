<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import ScreenFull from '@/components/ScreenFull/index.vue'
import Hamburger from '../Hamburger/index.vue'
import { computed, reactive } from 'vue'
import { useAppStore } from '@/stores/modules/app'

const router = useRouter()
const appstore = useAppStore()
const src = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

const logout = () => {
  router.push('/login')
}

const sidebar = computed(() => {
  return appstore.sidebar
})

const sidebarToggle = () => {
  appstore.toggleSidebar(false)
}
</script>

<template>
  <div class="nav-bar">
    <Hamburger :is-active="sidebar.opened" class="hamburger" @toggle-click="sidebarToggle" />
    <div class="nav-bar-right-menu">
      <ScreenFull />
      <ThemeSwitch class="nav-bar-right-menu-item" />
      <el-dropdown class="nav-bar-right-menu-item">
        <div class="nav-bar-right-menu-item-avatar">
          <el-avatar :src="src" :size="30" />
          <span>{{ 'admin' }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a target="_blank" href="https://juejin.cn/post/7089377403717287972">
              <el-dropdown-item>中文文档</el-dropdown-item>
            </a>
            <a target="_blank" href="https://github.com/un-pany/v3-admin-vite">
              <el-dropdown-item>GitHub</el-dropdown-item>
            </a>
            <a target="_blank" href="https://gitee.com/un-pany/v3-admin-vite">
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-bar {
  height: var(--navbar-height);
  background: #fff;
  overflow: hidden;

  .hamburger {
    float: left;
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;
  }

  &-right-menu {
    float: right;
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;

    &-item {
      padding: 0 10px;
      cursor: pointer;

      &-avatar {
        display: flex;
        align-items: center;
        .el-avatar {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
