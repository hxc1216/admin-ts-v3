import { getActiveThemeName, setActiveThemeName } from '@/utils/cache/local'
import { ref } from 'vue'

interface IThemeList {
  title: String
  name: ThemeName
}

export type ThemeName = 'normal' | 'dark'

const themeList: IThemeList[] = [
  {
    title: '默认',
    name: 'normal'
  },
  {
    title: '黑暗',
    name: 'dark'
  }
]

const setHtmlClassName = (value: ThemeName) => {
  document.documentElement.className = value
}

// 正在应用的主题名称
const activeThemeName = ref<ThemeName>(getActiveThemeName() || 'normal')

const initTheme = () => {
  setHtmlClassName(activeThemeName.value)
}

const setTheme = (value: ThemeName) => {
  activeThemeName.value = value
  setHtmlClassName(activeThemeName.value)
  setActiveThemeName(activeThemeName.value)
}

/** 主题 hook */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme }
}
