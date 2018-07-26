<template>
  <d2-container>
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
