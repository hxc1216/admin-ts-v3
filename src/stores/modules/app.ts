import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { getSidebarStatus, setSidebarStatus } from '@/utils/cache/local'

interface ISidebar {
  opened: boolean
  withoutAnimation: boolean
}

export const useAppStore = defineStore('app', () => {
  const sidebar: ISidebar = reactive({
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  })

  const toggleSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = !sidebar.opened
    sidebar.withoutAnimation = withoutAnimation
    if (sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  const closeSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = false
    sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  return { sidebar, toggleSidebar, closeSidebar }
})
