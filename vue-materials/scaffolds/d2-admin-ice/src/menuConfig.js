/* eslint-disable */

import utilIce from './libs/util-ice'

// 菜单配置

// 顶栏菜单配置
// ice 不会修改 headerMenuConfig
const headerMenuConfig = [
  {
    name: '空菜单',
    icon: 'flask',
    children: [
      {
        name: 'menu 1',
        children: [
          {
            name: 'menu 1-1',
            children: [
              { name: 'menu 1-1-1' },
              { name: 'menu 1-1-2' }
            ]
          },
          { name: 'menu 1-2' }
        ]
      },
      { name: 'menu 2' },
      { name: 'menu 3' }
    ]
  },
  {
    name: '演示页面',
    icon: 'folder-o',
    children: [
      {
        name: '演示 1',
        path: '/demo1/'
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
    name: '演示页面',
    icon: 'folder-o',
    children: [
      {
        name: '演示 1',
        path: '/demo1/'
      }
    ]
  }
]

export const menuHeader = utilIce.recursiveMenuConfig(headerMenuConfig)

export const menuAside = utilIce.recursiveMenuConfig(asideMenuConfig)
