export default {
  methods: {
    handleMenuSelect (index) {
      if (/^d2-menu-empty-\d+$/.test(index)) {
        this.$message({
          message: '这是一个空菜单',
          type: 'warning'
        })
      } else {
        this.$router.push({
          path: index
        })
      }
    }
  }
}
