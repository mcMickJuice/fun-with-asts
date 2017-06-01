const plugin = require('./func-api-change')
const pluginTester = require('babel-plugin-tester')

pluginTester({
  plugin,
  tests: {
    'does not change non importantFunc invocations': 'someFunc(a, b, c);',
    'changes importantFunc invocations from ordinal to object - params as references': {
      code: 'importantFunc(a,b,c)',
      snapshot: true
    },
    'changes importantFunc invocations from ordinal to object - params as literals': {
      code: 'importantFunc("mike", 32, "mpls")',
      snapshot: true
    }
  }
})