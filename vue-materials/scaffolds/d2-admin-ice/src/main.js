// 安装的依赖
import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import screenfull from 'screenfull'

// @开头
import util from '@/libs/util'
import store from '@/store/index'
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/components'
import '@/plugin/axios'

// 相对路径
import App from './App.vue'
import { router, routerMenuIn } from './router'

// use
Vue.use(ElementUI)

// 注册 env 携带的信息
Vue.prototype.$baseUrl = process.env.BASE_URL

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.getAllTagFromRoutes()
  },
  mounted () {
    // DB -> store 加载用户名
    this.$store.commit('d2adminUsernameLoad')
    // DB -> store 加载主题
    this.$store.commit('d2adminThemeLoad')
    // DB -> store 数据库加载上次退出时的多页列表
    this.$store.commit('d2adminPageOpenedListLoad')
    // 打印欢迎信息
    util.showInfo()
    // 检测退出全屏
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        if (!screenfull.isFullscreen) {
          this.$store.commit('d2adminFullScreenSet', false)
        }
      })
    }
  },
  methods: {
    /**
     * 处理路由 得到每一级的路由设置
     */
    getAllTagFromRoutes () {
      // 所有加载在主框架内的页面
      const tagPool = []
      function push (routes) {
        routes.forEach((route) => {
          if (route.children) {
            push(route.children)
          } else {
            const { meta, name, path } = route
            tagPool.push({ meta, name, path })
          }
        })
      }
      push(routerMenuIn.map(e => ({
        path: e.path,
        name: e.children[0].name,
        meta: e.children[0].meta
      })))
      this.$store.commit('d2adminTagPoolSet', tagPool)
    }
  }
}).$mount('#app')
