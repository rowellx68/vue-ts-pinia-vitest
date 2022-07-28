/* eslint-disable no-undef */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint',],
  root: true,
  rules: {
    'vue/multi-word-component-names': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
        arrays: 'always',
        objects: 'always-multiline',
      },
    ],
    'quotes': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],
    'semi': ['error', 'never',],
  },
}