/* eslint-disable */

import utilIce from './libs/util-ice'

// 菜单配置

// 顶栏菜单配置
// ice 不会修改 headerMenuConfig
const headerMenuConfig = [
  {
    name: '演示菜单',
    icon: 'flask',
    children: [
      {
        name: '正在开发 1',
        children: [
          { name: '正在开发 1-1' },
          { name: '正在开发 1-2' }
        ]
      },
      { name: '正在开发 2' },
      { name: '正在开发 3' }
    ]
  },
  {
    name: '演示页面',
    icon: 'folder-o',
    children: [
      {
        name: '空页面',
        path: '/page/demo1/'
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
    name: '空白页面',
    icon: 'folder-o',
    children: [
      {
        name: '空页面',
        path: '/page/demo1/'
      }
    ]
  }
]

export const menuHeader = utilIce.recursiveMenuConfig(headerMenuConfig)

export const menuAside = utilIce.recursiveMenuConfig(asideMenuConfig)
