/* eslint-disable */

import UtilIce from '@/libs/util-ice.js'
// 页面和布局
import Index from './pages/Index'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import PageWelcome from './pages/PageWelcome'
import HeaderAside from '@/layouts/HeaderAside'

const meta = {
  requiresAuth: true
}

// 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称

// ice 自动添加的路由记录是以下格式，

// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: 4,
// }

const routerConfig = [
  {
    path: '/',
    name: 'index',
    layout: HeaderAside,
    component: Index
  },
  {
    path: '/page/demo',
    name: 'page-demo',
    layout: HeaderAside,
    component: PageWelcome,
    meta: { ...meta, title: '空页面' }
  }
]

// 不参与菜单显示的
// ice 不会处理这部分
const menuOut = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // path: '*' 一定要在最后面
  {
    path: '*',
    component: Error404
  }
]

// 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理
export default UtilIce.recursiveRouterConfig([
  ...routerConfig,
  ...menuOut
])

// 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用
export const frameInRoutes = UtilIce.recursiveRouterConfig(routerConfig).map(e => {
  const route = e.children ? e.children[0] : e
  return {
    path: e.path,
    name: route.name,
    meta: route.meta
  }
})
