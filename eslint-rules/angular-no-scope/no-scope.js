const getScopeParamFromFunction = functionDeclNode => {
  const scopeParam = functionDeclNode.params
    .filter(param => param.name === '$scope')[0];

  if (scopeParam == null) return;

  return scopeParam;
};

const getScopeParamFromInject = assignmentExprNode => {
  const { left, right } = assignmentExprNode;
  if (!left.property.name === '$inject') return;

  if (right.type === 'ArrayExpression') {
    const scopeParam = right.elements
      .filter(elem => elem.type === 'Literal')
      .filter(literal => literal.value === '$scope')[0];

    return scopeParam
  }
};

const message = 'Do not use $scope'

module.exports = {
  meta: {
    docs: {
      description: 'disallow $scope from being used in angular ctrls. prefer bindToController',
      category: 'Angular best practices',
      recommended: true
    }
  },
  create: function noScopeRuleImpl(context) {
    return {
      FunctionDeclaration(node) {
        const scopeParam = getScopeParamFromFunction(node);
        if (scopeParam) {
          context.report({
            node: scopeParam,
            message
          });
        }
      },
      AssignmentExpression(node) {
        const scopeParam = getScopeParamFromInject(node);
        if (scopeParam) {
          context.report({
            node: scopeParam,
            message
          });
        }
      }
    };
  }
}
