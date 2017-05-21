const { RuleTester } = require('eslint')
const noScopeRule = require('./no-scope')

const ruleTester = new RuleTester();

const validCtrlWithParam = `
  function myCtrl(myService, myScope, somethingElse){

  }
`

const directiveLink = `
  function myDirective() {
    return {
      link: function($scope) {

      }
    }
  }
`

const invalidCtrlWithParam = `
  function myCtrl(myService, $scope) {

  }
`

const invalidCtrlWithInject = `
  myCtrl.$inject = ['anotherService', '$scope']
  
  function myCtrl(anotherService, scope) {

  }
`

ruleTester.run('no-scope', noScopeRule, {
  valid: [
    validCtrlWithParam,
    directiveLink
  ],
  invalid: [
    invalid(invalidCtrlWithParam),
    invalid(invalidCtrlWithInject)
  ]


})

function invalid(code) {
  return {
    code,
    errors: [{
      message: 'Do not use $scope'
    }]
  }
}