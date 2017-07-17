const plugin = require('./func-api-change')
const pluginTester = require('babel-plugin-tester')
 
pluginTester({
  plugin,
  tests: {
    'does not change non importantFunc invocations': 'someFunc(a, b, c);',
    'changes importantFunc invocations from ordinal to object - params as references': {
      code: 'importantFunc(a,b,c)',
      output: `importantFunc({\n  name: a,\n  age: b,\n  location: c\n});
      `
    },
    'changes importantFunc invocations from ordinal to object - params as literals': {
      code: `importantFunc('mike', 32, 'mpls')`,
      output: `importantFunc({\n  name: 'mike',\n  age: 32,\n  location: 'mpls'\n});`
    }
  }
})