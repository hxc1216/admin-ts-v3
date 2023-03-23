import { ref } from 'vue'
import store from '@/stores'
import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/cache/session'

export const useUserStore = defineStore('suer', () => {
  const token = ref<string>(getToken() || '')
  const username = ref<string>('')

  /** 登录 */
  const login = (loginData: any) => {
    return new Promise((resolve, reject) => {
      setToken('ssss')
      token.value = 'ssss'
      resolve(true)
    })
  }

  /** 登出 */
  const logout = () => {
    removeToken()
    token.value = ''
  }

  const resetToken = () => {
    removeToken()
    token.value = ''
  }

  return { token, username, login, logout, resetToken }
})

/** 在setup外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
