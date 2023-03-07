module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'comma-dangle': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'no-explicit-any': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'prefer-arrow-callback': 0,
    semi: 0,
    quotes: 0
  },
};
