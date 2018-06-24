'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Prevent using a redundant inject decorator with no arguments',
      category: 'Best Practices',
      recommended: true
    }
  },
  create(context) {
    return {
      ClassDeclaration: function (node) {
        if (node.decorators[0].expression.callee.name === 'inject') {
          if (node.decorators[0].expression.arguments.length === 0) {
            context.report({
              node: node.decorators[0],
              message: 'inject decorator is missing arguments',
            });
          }
        }
      },
    };
  }
};