// 页面 首页
import dashboard from '@/pages/d2admin/index/index.vue'
// 页面 系统设置
import pageSettingIndex from '@/pages/d2admin/setting/index/index.vue'
// 界面 系统界面
import pageLogin from '@/pages/d2admin/login/index.vue'
import pageError404 from '@/pages/d2admin/404/index.vue'
// 主布局
import d2LayoutMain from './layouts/d2-layout-main'

const requiresAuth = true

// 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称

// ice 自动添加的路由记录是以下格式，

// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: Page4,
// }

const routerConfig = [
  {
    path: '/',
    layout: d2LayoutMain,
    component: dashboard,
    children: [
      {
        path: '/setting/index',
        name: 'setting-index',
        layout: d2LayoutMain,
        component: pageSettingIndex,
        meta: {
          title: '设置首页',
          requiresAuth
        }
      }
    ]
  }
]

// 不参与菜单显示的
// ice 不会处理这部分
const menuOut = [
  {
    path: '/login',
    name: 'login',
    component: pageLogin
  },
  // path: '*' 一定要在最后面
  {
    path: '*',
    layout: d2LayoutMain,
    component: pageError404
  }
]

// 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理
export const routerConfigAll = [
  ...routerConfig,
  ...menuOut
]

// 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用
export const routerConfigLayoutIn = routerConfig
