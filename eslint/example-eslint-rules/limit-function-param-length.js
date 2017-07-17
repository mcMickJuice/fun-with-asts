const defaultParamMax = 6

module.exports = {
  create: function (context) {
    
    function restrictParams(node) {
        if(node.params.length > defaultParamMax) {
          context.report({
            node,
            message: `Function parameter length should not exceed ${defaultParamMax}`
          })
        }
      }

    return {

      //shortcut to visit all function declarations
      FunctionDeclaration: restrictParams, 
      FunctionExpression: restrictParams, 
      ArrowFunctionExpression: restrictParams
    };
  }

}
