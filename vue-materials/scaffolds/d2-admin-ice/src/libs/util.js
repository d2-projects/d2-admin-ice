// 插件
import Cookies from 'js-cookie'

// 获取项目信息
import packJson from '../../package.json'

const util = {}

/**
 * @description 得到现在的用户
 */
util.uuid = function uuid () {
  return Cookies.get('uuid')
}

/**
 * @description 更新标题
 * @param {string} title 标题
 */
util.title = function title (titleText) {
  window.document.title = `${process.env.VUE_APP_TITLE}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开全屏
 */
util.openFullScreen = function openFullScreen () {
  const { body } = document
  if (body.requestFullscreen) {
    body.requestFullscreen()
  } else if (body.mozRequestFullScreen) {
    body.mozRequestFullScreen()
  } else if (body.webkitRequestFullScreen) {
    body.webkitRequestFullScreen()
  } else if (body.msRequestFullscreen) {
    body.msRequestFullscreen()
  }
}

/**
 * @description 关闭全屏
 */
util.exitFullScreen = function exitFullScreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

/**
 * @description 路由配置扁平化
 * @param {Array} config 层级路由设置
 */
util.recursiveRouterConfig = function recursiveRouterConfig (config = []) {
  const routerMap = []
  const recursive = (con) => {
    con.forEach((item) => {
      const route = item.layout ? {
        // -> 在主布局内的页面
        // 页面地址
        path: item.path,
        // 使用的布局
        component: item.layout,
        // 子路由 一个里面只会有一个子路由 并且 path = ‘’
        children: [
          {
            // 这里留空 访问上面父级地址的时候会自动跳到这里
            path: '',
            // 如果路由没有设置 name 就用 path 当做name
            name: item.name || item.path,
            // 如果没有设置 meta 自动用空对象
            meta: item.meta || {},
            // 页面组件
            component: item.component
          }
        ]
      } : {
        // -> 不在主布局内的页面
        // 页面地址
        path: item.path,
        // 如果路由没有设置 name 就用 path 当做name
        name: item.name || item.path,
        // 如果没有设置 meta 自动用空对象
        meta: item.meta || {},
        // 页面组件
        component: item.component
      }
      if (Array.isArray(item.children)) {
        recursive(item.children)
      }
      routerMap.push(route)
    })
    return routerMap
  }
  return recursive(config)
}

/**
 * @description 在每次打开新页面的时候调用 打开一个新的 tab
 * @param {object} vm vue
 * @param {string} name route name
 * @param {object} argu arguments
 * @param {object} query query object
 */
util.openNewPage = function openNewPage (vm, name, argu, query) {
  // 已经打开的页面
  const { $store: { state: { d2admin: { pageOpenedList } } } } = vm
  // 判断此页面是否已经打开 并且记录位置
  let pageOpendIndex = 0
  const pageOpend = pageOpenedList.find((page, index) => {
    const same = page.name === name
    pageOpendIndex = same ? index : pageOpendIndex
    return same
  })
  if (pageOpend) {
    // 页面以前打开过 但是新的页面可能 name 一样，参数不一样
    vm.$store.commit('d2adminPageOpenedListUpdateItem', { index: pageOpendIndex, argu, query })
  } else {
    // 页面以前没有打开过
    const { $store: { state: { d2admin: { tagPool } } } } = vm
    const tag = tagPool.find(t => t.name === name)
    if (tag) {
      vm.$store.commit('d2adminTagIncreate', { tag, argu, query })
    }
  }
  vm.$store.commit('d2adminPageCurrentSet', name)
}

/**
 * @description 判断是否在其内
 * @param {*} ele element
 * @param {array} targetArr array
 */
util.isOneOf = function isOneOf (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true
  }
  return false
}

util.showInfo = function showInfo () {
  console.log(
    `%c D2Admin ice %c v${packJson.version} %c`,
    'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
    'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
  console.log('Github https://github.com/d2-projects/d2-admin')
  console.log('Doc    http://d2admin.fairyever.com/zh/')
}

export default util
