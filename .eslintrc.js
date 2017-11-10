// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'spaced-comment': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
    'one-var': 0,
    indent: [0, 2, 4], //缩进风格
    semi: [0, 'always'], //语句强制分号结尾
    'semi-spacing': [0, { before: false, after: true }], //分号前后空格
    'eol-last': 0,
    'no-trailing-spaces': 1,
    eqeqeq: 0,
    'no-useless-escape': 0
  }
}
