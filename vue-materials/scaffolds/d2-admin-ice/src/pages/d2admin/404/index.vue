<template>
  <d2-container type="full">
    <div class="page">
      <h1>页面不存在</h1>
      <el-button class="d2-mt" @click="$router.replace({ path: '/' })">
        返回首页
      </el-button>
    </div>
  </d2-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  @extend %full;
  @extend %flex-center-col;
}
</style>
