module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      2,
      2,
      {
        'SwitchCase': 0,
        'flatTernaryExpressions': false,
        'offsetTernaryExpressions': false,
        'ignoreComments': false,
      },
    ],
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'max-len': ['error', { ignoreComments: true }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
  },
}
