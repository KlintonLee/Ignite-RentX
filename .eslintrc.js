module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  'plugins': [
    '@typescript-eslint',
    'prettier',
    'import'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '_'
    }],
    'class-methods-use-this': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],
    'no-console': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        'groups': [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      'node': {
        'paths': ['src', 'src/api'],
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  },
};
