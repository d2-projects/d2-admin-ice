<template>
  <div>
    <el-card shadow="never" style="margin-bottom: 10px;">
      <d2-highlight :code="codeCss"/>
    </el-card>
    <el-card shadow="never" style="margin-bottom: 10px;">
      <d2-highlight :code="codeHtml"/>
    </el-card>
    <el-card shadow="never" style="margin-bottom: 10px;">
      <d2-highlight :code="codeJavascript"/>
    </el-card>
    <el-card shadow="never">
      <d2-highlight :code="codeScss"/>
    </el-card>
  </div>
</template>

<script>
import D2Highlight from './components/D2Highlight'
// 代码
const codeCss = `body {
  background-color: aliceblue;
  height: 100%;
}
.my-card {
  height: 300px;
  width: 300px;
}`.trim()
const codeHtml = `<ul>
  <li class="li-1"><p>Hello</p></li>
  <li>
    <span style="color: red;">
      Hello
    </span>
  </li>
</ul>`.trim()
const codeJavascript = `[].forEach.call($$("*"), a => {
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})`.trim()
const codeScss = `body {
  background-color: aliceblue;
  height: 100%;
  .my-card {
    height: 300px;
    width: 300px;
  }
}`.trim()
export default {
  name: 'CodeHighlight',
  components: { D2Highlight },
  data () {
    return {
      codeCss,
      codeHtml,
      codeJavascript,
      codeScss
    }
  }
}
</script>
