module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
    // temp solution
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-use-before-define': [0],
    'jest/expect-expect': [0],
  },
};
