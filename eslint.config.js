
// For Node.js v16, we need to use a CommonJS format instead of ESM
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Disable rules that might cause issues with Node.js v16
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-undef': 'off'
  },
};
