function badControllerInject(myService, scope) {
  scope.myAwesomeProperty = true

  myService.doSomething();
}

badControllerInject.$inject = ['myService', '$scope']

module.exports.badControllerInject = badControllerInject