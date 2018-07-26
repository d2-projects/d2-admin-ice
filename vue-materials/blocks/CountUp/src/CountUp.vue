<template>
  <el-card shadow="never">
    <div class="ice-block-count-up">
      <d2-count-up class="ice-block-count-up_count" :end="999"/>
    </div>
  </el-card>
</template>

<script>
import D2CountUp from './components/D2CountUp'
export default {
  components: { D2CountUp },
  name: 'CountUp'
}
</script>

<style lang="scss" scoped>
.ice-block-count-up {
  .ice-block-count-up_count {
    font-size: 36px;
    color: #409EFF;
    font-weight: bold;
  }
}
</style>

