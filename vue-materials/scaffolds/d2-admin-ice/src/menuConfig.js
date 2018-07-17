// 菜单配置

// 顶栏菜单配置
// ice 不会修改 headerMenuConfig
const headerMenuConfig = [
  {
    name: '用户',
    icon: 'user-circle-o',
    children: [
      {
        name: '用户管理',
        icon: 'user',
        children: [
          { name: '用户列表', icon: 'list' },
          { name: '用户统计', icon: 'pie-chart' }
        ]
      },
      {
        name: '角色管理',
        icon: 'address-book-o',
        children: [
          { name: '角色列表', icon: 'list' },
          { name: '角色权限', icon: 'key' },
          { name: '角色分配', icon: 'address-book-o' }
        ]
      }
    ]
  },
  {
    name: '数据分析',
    icon: 'pie-chart',
    children: [
      { name: '市场行情', icon: 'usd' },
      { name: '用户分布', icon: 'globe' },
      { name: '网站访问', icon: 'chrome' },
      { name: '采购统计', icon: 'shopping-cart' }
    ]
  },
  {
    name: '设置',
    icon: 'cog',
    children: [
      {
        name: '账号',
        icon: 'address-card-o',
        children: [
          { name: '用户信息', icon: 'user' },
          { name: '修改密码', icon: 'key' },
          { name: '账号安全', icon: 'lock' }
        ]
      }
    ]
  }
]

// 侧栏菜单配置
// ice 会在新建页面的时候 push 数据

// ice 自动添加的菜单记录是以下格式，

// {
//   name: 'Nav',
//   path: '/page',
//   icon: 'home',
// },

const asideMenuConfig = [
  {
    name: '设置',
    icon: 'home',
    children: [
      {
        path: '/setting/index',
        name: '设置首页'
      }
    ]
  }
]

export { headerMenuConfig, asideMenuConfig }
