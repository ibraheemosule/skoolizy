module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.css'],
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
        custom: 'enforce',
        explicitSpread: 'enforce',
      },
    ],
    'no-console': 0,
    'react/jsx-curly-newline': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/jsx-one-expression-per-line': 0,
    '@typescript-eslint/comma-dangle': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'object-curly-newline': ['error', { multiline: true }],
  },
};
