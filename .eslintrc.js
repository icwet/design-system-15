module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: 2,
    'prettier/prettier': ['error']
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier']
};
