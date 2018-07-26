<template>
  <el-card shadow="never">
    <ve-gauge :data="chartData"></ve-gauge>
  </el-card>
</template>

<script>
import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
export default {
  name: 'ChartGauge',
  data () {
    return {
      chartData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [
          { type: '速度', value: 80, a: 1, b: 2 }
        ]
      }
    }
  }
}
</script>
