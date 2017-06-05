module.exports = function expensiveOperationLogging(babel) {
  const { types: t } = babel;

  const createConsole = (...consoleParams) => {
    const consoleStatement = t.expressionStatement(
      t.callExpression(t.memberExpression(
        t.identifier('console'),
        t.identifier('log'),
        false
      ),
        [...consoleParams]
      )
    )

    return consoleStatement
  }

  const createInstant = variableName => {
    const dateTimeNow = t.callExpression(
      t.memberExpression(t.identifier('DateTime'), t.identifier('now'), false)
      , [])

    const declaration = t.variableDeclaration('const',
      [
        t.variableDeclarator(
          t.identifier(variableName),
          t.callExpression(
            t.memberExpression(
              t.identifier('DateTime'),
              t.identifier('now'),
              false
            ),
            [])
        )
      ]
    )

    return declaration
  }

  //see this plugin action - https://astexplorer.net/#/gist/5dbe819990f45c7fc114132455ac0626/cee5e1404e83756350d9060128f8089999645100
  return {
    name: 'expensive-operation-logging',
    visitor: {
      CallExpression(path) {
        if (path.node.callee.property.name !== 'expensiveOperation') {
          return
        }
        //if callee's parent is "request"
        //and function is "expensiveOperation"
        //insert stopwatch code in front of and behind code
        const startDecl = createInstant('start')
        const endDecl = createInstant('end')
        path.insertBefore(startDecl)

        const durationExpression = t.binaryExpression(
          '-',
          t.identifier('end'),
          t.identifier('start')
        )
        const consoleStatement = createConsole(
          t.stringLiteral('expensiveOperation finished in: '),
          durationExpression
        )

        path.insertAfter(consoleStatement)

        path.insertAfter(endDecl)
      }
    }
  };
}
