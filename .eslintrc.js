module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended',],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/', 'build/', 'tailwind.config.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0,
    "indent": ["error", 2],
  },
}
