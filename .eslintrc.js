module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', 
    'plugin:react/recommended',
    'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',

],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0,
  },
};
