<script lang="ts" setup>
import { useAppStore } from '@/stores/modules/app'
import { computed } from 'vue'
import SideBarLogo from './SideBarLogo.vue'
import SidebarItem from './SidebarItem.vue'
import { useRoute } from 'vue-router'
import { menuList } from './menu.ts'

const appStore = useAppStore()
const route = useRoute()

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})

const activeMenu = computed(() => {
  const { meta, path } = route
  return path
})

</script>
<template>
  <div>
    <SideBarLogo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- :background-color="v3SidebarMenuBgColor"
      :text-color="v3SidebarMenuTextColor"
      :active-text-color="v3SidebarMenuActiveTextColor" -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- <SidebarItem
          v-for="route in menuList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        /> -->
        <el-menu-item
          :index="route.path"
          v-for="route in menuList[0].children"
          :key="route.path"
        >
          <el-icon><icon-menu /></el-icon>
          <span>{{ route.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
