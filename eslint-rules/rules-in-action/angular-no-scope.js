function badController($scope) {
  $scope.message = 'hello'
}

module.exports.badController = badController



function badControllerInject(myService, scope) {
  scope.myAwesomeProperty = true
}

badControllerInject.$inject = ['myService', '$scope']

module.exports.badControllerInject = badControllerInject