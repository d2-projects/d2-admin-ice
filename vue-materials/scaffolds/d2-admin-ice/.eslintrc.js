module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  "rules": {
    "import/extensions": 0,
    "no-mixed-operators": 0,
    "max-len": 0,
    "camelcase": 0,
    "import/no-unresolved": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}