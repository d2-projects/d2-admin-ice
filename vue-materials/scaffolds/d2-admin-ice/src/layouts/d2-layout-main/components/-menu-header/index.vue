<template>
  <el-menu mode="horizontal" @select="handleMenuSelect">
    <template v-for="(menu, menuIndex) in headerMenuConfig">
      <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
      <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex"/>
    </template>
  </el-menu>
</template>

<script>
import { headerMenuConfig } from '@/menuConfig'
import menuMixin from '../../mixin/menu'
import d2LayoutMainMenuItem from '../-menu-item/index.vue'
import d2LayoutMainMenuSub from '../-menu-sub/index.vue'

export default {
  name: 'd2-layout-main-menu-header',
  mixins: [
    menuMixin
  ],
  components: {
    'd2-layout-main-menu-item': d2LayoutMainMenuItem,
    'd2-layout-main-menu-sub': d2LayoutMainMenuSub
  },
  data () {
    return {
      // TODO: 名称优化
      headerMenuConfig
    }
  }
}
</script>
