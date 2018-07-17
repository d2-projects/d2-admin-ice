// const baseUrl = '/d2-admin-start-kit-preview/';
const baseUrl = '/'

module.exports = {
  baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  devServer: {
    publicPath: baseUrl // 和 baseUrl 保持一致
  }
}
