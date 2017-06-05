function isSnake(idNode) {
  //naive implementation
  return idNode.name.indexOf('_') > -1
}

function toTitleCase(str) {
  //naive implementation
  var [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join('')}`
}

//see this in action - https://astexplorer.net/#/gist/15d316d1dca726981481a8c95351e468/160c33c9d9a5fa21076c64fd2b8ef6f37ca30569
module.exports = function snakeToPascal(babel) {
  const { types: t } = babel;

  return {
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