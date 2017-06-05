module.exports = function arrowFuncParamConsole (babel) {
  const { types: t } = babel;

  return {
    name: 'ast-transform', // not required
    visitor: {
      ArrowFunctionExpression(path) {
        //grab actual node
        var node = path.node;
        //get number of params that function accepts
        var paramCount = node.params.length;
        //and log
        console.log(paramCount)
      }
    }
  };
}
