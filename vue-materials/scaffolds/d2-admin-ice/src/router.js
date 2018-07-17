import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import util from '@/libs/util'
import { routerConfigAll, routerConfigLayoutIn } from './routerConfig'

const routes = util.recursiveRouterConfig(routerConfigAll)

Vue.use(VueRouter)

// 导出路由
export const router = new VueRouter({
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 验证当前路由所有的匹配中是否需要有登陆验证的
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登陆的条件
    // 请根据自身业务需要修改
    if (Cookies.get('token')) {
      next()
    } else {
      // 没有登陆的时候跳转到登陆界面
      next({
        name: 'login'
      })
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

// 多标签页控制
router.afterEach((to) => {
  // 需要的信息
  const { app } = router
  const { name, params, query } = to
  // 多页控制 打开新的页面
  util.openNewPage(app, name, params, query)
  // 更改标题
  util.title(to.meta.title)
})

// 导出路由设置
export const routerMenuIn = util.recursiveRouterConfig(routerConfigLayoutIn)
