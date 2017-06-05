function isSnake(idNode) {
  //naive implementation
  return idNode.name.indexOf('_') > -1
}

function toTitleCase(str) {
  //naive implementation
  var [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join('')}`
}

module.exports = function snakeToPascal(babel) {
  const { types: t } = babel;

  return {
    name: 'ast-transform', // not required
    visitor: {
      VariableDeclarator(path) {
        var node = path.node;
        if (!isSnake(node.id)) {
          //common pattern to bail early
          return
        }

        var [first, ...others] = node.id.name.toLowerCase().split('_');
        var mapped = others.map(name => toTitleCase(name))
        var pascalName = [first, ...mapped].join('')
        node.id.name = pascalName
      }
    }
  };
}