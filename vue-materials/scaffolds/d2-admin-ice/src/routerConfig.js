/* eslint-disable */

import UtilIce from '@/libs/util-ice.js'
// 页面和布局
import Index from './pages/Index'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import PageDemo1 from './pages/PageDemo1'
import HeaderAside from '@/layouts/HeaderAside'

// 默认公用 meta 设置
const meta = {
  requiresAuth: true
}

// 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称
// 备注 ice 自动添加的路由记录是以下格式
// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: 4
// }

const routerConfig = [
  {
    path: '/',
    name: 'index',
    layout: HeaderAside,
    component: Index
  },
  {
    // 如果不指定 neme 字段，会根据 path 生成 name = page-demo1
    // 转换规则见 UtilIce.recursiveRouterConfig 中 path2name 方法
    // 如果不指定 neme 字段，会使用 UtilIce.recursiveRouterConfig 中默认的 meta 设置
    // 如果不指定 neme 字段，meta.title 会取和上述 name 字段一样的值
    path: '/page/demo1', 
    layout: HeaderAside,
    component: PageDemo1
  }
]

// 不参与菜单显示的
// ice 不会处理这部分
const routerConfigMenuOut = [
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
  ...routerConfigMenuOut
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
