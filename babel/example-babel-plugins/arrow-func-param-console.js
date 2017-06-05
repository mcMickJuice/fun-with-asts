module.exports = function arrowFuncParamConsole (babel) {
  const { types: t } = babel;


//see this in action - https://astexplorer.net/#/gist/5829162a235fe90d6e20ee04e19c8822/c859bf24b31333343c3b0527d3b35fefa889c534
  return {
    name: 'ast-transform',
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
