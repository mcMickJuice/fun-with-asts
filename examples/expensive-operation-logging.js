module.exports = function expensiveOperationLogging(babel) {
  const { types: t } = babel;

  const createConsole = (...consoleParams) => {
    var memberExpression = t.memberExpression(t.identifier('console'), t.identifier('log'), false)
    var consoleExpression = t.callExpression(memberExpression, [...consoleParams])
    var consoleStatement = t.expressionStatement(consoleExpression)

    return consoleStatement
  }

  const createInstant = variableName => {
    var dateTimeNow = t.callExpression(
      t.memberExpression(t.identifier('DateTime'), t.identifier('now'), false)
      , [])

    var declaration = t.variableDeclaration('const',
      [t.variableDeclarator(t.identifier(variableName), dateTimeNow)])

    return declaration
  }

  return {
    name: 'ast-transform', // not required
    visitor: {
      CallExpression(path) {
        if (path.node.callee.property.name !== 'expensiveOperation') {
          return
        }
        //if callee's parent is "request"
        //and function is "expensiveOperation"
        //insert stopwatch code in front of and behind code
        //to monitor it???

        var startDecl = createInstant('start')
        var endDecl = createInstant('end')
        path.insertBefore(startDecl)

        var durationExpression = t.binaryExpression('-', t.identifier('end'), t.identifier('start'))
        var consoleStatement = createConsole(t.stringLiteral('expensiveOperation finished in: '), durationExpression)
        path.insertAfter(consoleStatement)

        path.insertAfter(endDecl)
      }
    }
  };
}
