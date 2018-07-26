<template>
  <el-card shadow="never">
    <ve-funnel :data="chartData"></ve-funnel>
  </el-card>
</template>

<script>
import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
export default {
  name: 'ChartFunnel',
  data () {
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
      }
    }
  }
}
</script>
