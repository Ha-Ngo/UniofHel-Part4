module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'no-unused-vars': 0,
  },
}
