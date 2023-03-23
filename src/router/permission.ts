import router from '@/router'
import { getToken } from '@/utils/cache/session'
import {whiteRouters} from '@/config/white-router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 判断用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      // 如果已经登录 直接进入主页
      next('/')
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  } else {
    // 如果没有 Token
    if (whiteRouters.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next("/login")
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
