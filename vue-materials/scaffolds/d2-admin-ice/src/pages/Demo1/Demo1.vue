<template>
  <d2-container class="page-demo1">
    <template slot="header">
      WELCOME
    </template>
    <route-info/>
    <template slot="footer">
      <footer-link/>
    </template>
  </d2-container>
</template>

<script>
import RouteInfo from './componnets/RouteInfo'
import FooterLink from './componnets/FooterLink'
export default {
  name: 'demo1',
  components: {
    RouteInfo,
    FooterLink
  }
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
