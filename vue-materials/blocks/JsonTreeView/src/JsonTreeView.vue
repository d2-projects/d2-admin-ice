<template>
  <el-card shadow="never">
    <tree-view :data="json" :options="options"/>
  </el-card>
</template>

<script>
import Vue from 'vue'
import vueJsonTreeView from 'vue-json-tree-view'
Vue.use(vueJsonTreeView)
const json = {
  name: 'FairyEver',
  mail: '1711467488@qq.com',
  github: 'https://github.com/FairyEver',
  homePage: [
    {
      name: 'juejin',
      url: 'https://juejin.im/user/57a48b632e958a006691b946'
    },
    {
      name: 'segmentfault',
      url: 'https://segmentfault.com/blog/liyang-note-book'
    },
    {
      name: 'jianshu',
      url: 'https://www.jianshu.com/u/0ed75b7d8bd9'
    }
  ]
}
export default {
  name: 'JsonTreeView',
  data () {
    return {
      options: {
        maxDepth: 10,
        rootObjectKey: 'FairyEver',
        modifiable: false
      },
      json
    }
  }
}
</script>
