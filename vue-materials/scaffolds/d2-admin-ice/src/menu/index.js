const setting = {
  path: '/setting',
  title: '设置',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '设置首页', icon: 'home' },
    { path: `${pre}releases`, title: '版本', icon: 'info-circle' }
  ])('/setting/')
}

// 菜单 侧边栏
export const side = [
  setting
]

// 菜单 顶栏
export default [
  {
    path: '/',
    title: '首页',
    icon: 'home'
  },
  setting
]
