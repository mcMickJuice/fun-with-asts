module.exports = function funcApiChange(babel) {
  const { types: t } = babel;

  //ordinal to name mapping
  const ordinalMapping = {
    0: 'name',
    1: 'age',
    2: 'location'
  }

  const convertOrdinalToObject = (params) => {
    const objectProperties = params.map((p, idx) => {
      const key = ordinalMapping[idx];
      return t.objectProperty(t.identifier(key), p)
    })

    return t.objectExpression(objectProperties)
  }

  return {
    name: 'func-api-change', // not required
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name !== 'importantFunc') {
          return
        }

        const objectExpression = convertOrdinalToObject(path.node.arguments)

        path.node.arguments = [objectExpression]
      }
    }
  };
}
