<template>
  <d2-container>
    <template slot="header">Page 1 header</template>
    PageDemo1
    <pre>{{JSON.stringify($route, null, 2)}}</pre>
    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
export default {
  name: 'page-demo1'
}
</script>
