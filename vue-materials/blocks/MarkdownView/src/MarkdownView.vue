<template>
  <el-card shadow="never">
    <div class="markdown-body" v-html="markedHTML"></div>
  </el-card>
</template>

<script>
const md = `
# 一级标题

| ID | Name | Github |
| --- | --- | --- |
| 0001 | FairyEver | [FairyEver](https://github.com/FairyEver) |

\`\`\`
alert('Hello World')
\`\`\`

> 引用文字

无序列表

* list 1
* list 2
* list 3
`.trim()
import marked from 'marked'
import 'github-markdown-css'
export default {
  name: 'MarkdownView',
  data () {
    return {
      markedHTML: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.markedHTML = marked(md)
    }
  }
}
</script>
