<template>
  <el-card shadow="never">
    <el-row class="ice-block-count-up-group">
      <el-col :span="8">
        <p class="ice-block-count-up-group_title">指标 1</p>
        <div class="ice-block-count-up-group_count-group">
          <d2-count-up :end="4160" class="ice-block-count-up-group_count"/>
        </div>
      </el-col>
      <el-col :span="8">
        <p class="ice-block-count-up-group_title">指标 2</p>
        <div class="ice-block-count-up-group_count-group">
          <d2-count-up :end="7100" class="ice-block-count-up-group_count"/>
        </div>
      </el-col>
      <el-col :span="8">
        <p class="ice-block-count-up-group_title">指标 3</p>
        <div class="ice-block-count-up-group_count-group">
          <d2-count-up :end="3880" class="ice-block-count-up-group_count"/>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import D2CountUp from './components/D2CountUp'
export default {
  components: { D2CountUp },
  name: 'CountUpGroup'
}
</script>

<style lang="scss" scoped>
.ice-block-count-up-group {
  margin: 20px 0px;
  .ice-block-count-up-group_title {
    font-size: 14px;
    color: #35495E;
    text-align: center;
    margin-top: 0px;
  }
  .ice-block-count-up-group_count-group {
    text-align: center;
    .ice-block-count-up-group_count {
      font-size: 30px;
      color: #409EFF;
      font-weight: bold;
    }
  }
}
</style>
