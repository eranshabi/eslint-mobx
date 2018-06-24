module.exports = function () {

  return {
    files: ['src/**/*.js', 'test/**/*.js', 'test/**/*.json', '!test/**/*.spec.js'],

    tests: ['test/**/*.spec.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
