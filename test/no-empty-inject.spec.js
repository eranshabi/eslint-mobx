const RuleTester = require('eslint').RuleTester;
const rule = require('../src//rules/no-empty-inject');
require('babel-eslint');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    "jsx": true
  }
};

const ruleTester = new RuleTester({parserOptions});

ruleTester.run('no-empty-inject', rule, {
  valid: [{
    code: `
    import { inject } from "mobx-react";
      @inject('myStore')
      class A {
      
      }
    `,
    parser: "babel-eslint"
  }],
  invalid: [{
    code: `
     import { inject } from "mobx-react";
      @inject()
      class A {
      
      }
    `,
    errors: [{
      message: 'inject decorator is missing arguments'
    }],
    parser: "babel-eslint"
  }]
});
