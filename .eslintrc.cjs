module.exports = {
  env: { browser: true, es2022: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'typescript-eslint-parser',
    source: 'module',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    project: 'tsconfig.json'
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json']
      }
    },
    react: {
      version: 'detect'
    }
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'import',
    'unused-imports',
    '@tanstack/query'
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ],
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignorePattern: '^import',
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@tanstack/query/prefer-query-object-syntax': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'warn',
    'no-continue': 'off',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'error',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    radix: 'off',
    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-empty-interface': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn'
  }
}
