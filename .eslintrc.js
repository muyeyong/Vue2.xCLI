module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],

  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        moduleDirectory: ['node_modules', 'src/'],
        paths: ["src"]
      },
      alias: {
        map: [['components', './src/components'], ['@', './src'], ['plugins', './src/plugins'], ['mock', './mock'], ['common', './src/components/common'], ['utils', './src/utils']],
        extensions: ['.js', '.vue', '.ts'],
      },
    },

  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
