module.exports = function (babel) {
  const { types: t } = babel;
  
  const isFilterCall = node => {
  
  	return t.isCallExpression(node)
    	&& t.isIdentifier(node.callee.property)
    	&& node.callee.property.name === "filter"
  }
  
  return {
    name: "first-transform", // not required
    visitor: {
      MemberExpression(path) {
        if(!t.isNumericLiteral(path.node.property) 
           || !isFilterCall(path.node.object)){
          return
        }
        
        const arrowFuncArgs = path.node.object.arguments;
        const firstInvocation = t.callExpression(
          t.memberExpression(
          t.identifier(path.node.object.callee.object.name),
          t.identifier('first')),
          arrowFuncArgs
          
          )
        const firstProperty = t.identifier('first')
        path.replaceWith(firstInvocation)
        
      }
    }
  };
}
