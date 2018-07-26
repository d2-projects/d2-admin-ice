<template>
  <el-card shadow="never">
    <ve-tree :data="chartData" :settings="chartSettings"></ve-tree>
  </el-card>
</template>

<script>
import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
export default {
  name: 'ChartTree',
  data () {
    return {
      chartSettings: {
        seriesMap: {
          tree1: {
            expandAndCollapse: false,
            itemStyle: {
              borderColor: '#2C8CF0',
              borderWidth: 4
            },
            lineStyle: {
              width: 3,
              color: '#2C8CF0'
            },
            label: {
              fontSize: 20,
              position: 'top'
            },
            symbolSize: 20
          }
        }
      },
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [
              {
                name: 'f',
                value: 1,
                link: 'https://ele.me',
                children: [
                  {
                    name: 'a',
                    value: 1,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'a-a',
                        link: 'https://ele.me',
                        value: 2,
                        label: {
                          position: 'right'
                        }
                      },
                      {
                        name: 'a-b',
                        link: 'https://ele.me',
                        value: 2,
                        label: {
                          position: 'right'
                        }
                      }
                    ]
                  },
                  {
                    name: 'b',
                    value: 1,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'b-a',
                        link: 'https://ele.me',
                        value: 2,
                        label: {
                          position: 'right'
                        }
                      },
                      {
                        name: 'b-b',
                        link: 'https://ele.me',
                        value: 2,
                        label: {
                          position: 'right'
                        }
                      }
                    ]
                  },
                  {
                    name: 'c',
                    value: 3,
                    link: 'https://ele.me',
                    children: [
                      {
                        name: 'c-a',
                        link: 'https://ele.me',
                        value: 4,
                        label: {
                          position: 'right'
                        }
                      },
                      {
                        name: 'c-b',
                        link: 'https://ele.me',
                        value: 2,
                        label: {
                          position: 'right'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
