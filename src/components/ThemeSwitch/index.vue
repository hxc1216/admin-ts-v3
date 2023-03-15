<script lang="ts" setup>
import { Light, Dark } from '@/icons/coms/index.ts'
import { useTheme, type ThemeName } from '@/hooks/useTheme'

const { themeList, activeThemeName, setTheme } = useTheme()

const themeChange = (name: ThemeName) => {
  setTheme(name)
}
</script>

<template>
  <el-switch
    v-model="activeThemeName"
    @change="themeChange"
    active-value="dark"
    inactive-value="normal"
    inline-prompt
    :inactive-icon="Light"
    :active-icon="Dark"
  />
</template>
