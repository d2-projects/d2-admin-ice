<template>
  <d2-container class="page-demo1">
    <template slot="header">Page 1 header</template>
    <route-info/>
    <template slot="footer">
      如有疑问，欢迎移至
      <a
        class="page-demo1_link"
        href="http://d2admin.fairyever.com/zh/"
        target="blank">
        http://d2admin.fairyever.com/zh/
      </a>
      查阅相关使用文档
    </template>
  </d2-container>
</template>

<script>
import RouteInfo from './componnets/RouteInfo'
export default {
  components: { RouteInfo }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-demo1 {
  .page-demo1_link {
    color: $color-primary;
  }
}
</style>
