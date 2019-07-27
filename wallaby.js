const wallabyWebpack = require('wallaby-webpack');
const wallabyPostprocessor = wallabyWebpack();

module.exports = function(wallaby) {
  return {
    files: [{ pattern: 'src/*.js', load: false }],
    tests: [{ pattern: 'test/*.js', load: false }],
    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'browser',
      kind: 'chrome'
    },
    postprocessor: wallabyPostprocessor,

    bootstrap() {
      console.log(window.promise);
      window.__moduleBundler.loadTests();
    }
  };
};
