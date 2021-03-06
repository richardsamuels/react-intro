module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'eslint-config-mongodb-js',
    'eslint-config-mongodb-js/rules/ecmascript-6',
    'plugin:react/recommended'
  ],

  'root': true,
  'env': {
    'es6': true
  },
  'overrides': [
    {
      'files': ['src/**/*.js', 'src/**/*.jsx'],
      'excludedFiles': ['src/**/*.spec.js*', 'src/**/*.test.js*', 'src/setupTests.js'],
      'env': {
        'browser': true
      },
      'plugins': ['babel', 'react'],
      'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
          'jsx': true
        }
      },
      'globals': {
        'process': true
      }
    },
    {
      'files': ['.eslintrc.js'],
      'env': {
        'node': true,
        'parserOptions': {
          'sourceType': 'scripts'
        }
      },
      'rules': {
        'no-sync': 0
      },
      'globals': {
        '__dirname': true
      }
    }
  ],
  'rules': {
    'complexity': 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', { 'vars': 'all', 'argsIgnorePattern': '^_' }],
    'eqeqeq': [2, 'allow-null'],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'no-param-reassign': 2,
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],

    // Enable a more strict set of react lints
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-wrap-multilines': 2,
    'react/prefer-stateless-function': [2, { 'ignorePureComponents': true }],
    'react/self-closing-comp': [2, { 'html': false, 'component': true }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/no-this-in-sfc': 2,

    // work towards making these errors
    'react/no-access-state-in-setstate': 1,
    'react/require-optimization': 1,

    // work towards enabling
    // 'react/require-default-props': 1,
    // 'react/jsx-sort-props': 0,
    // 'react/sort-prop-types': 0,
    // 'react/sort-comp': 0,

    'react/no-set-state': 0,

    // might hurt development performance
    'react/forbid-prop-types': 0,
    // not sure about these yet
    'react/jsx-no-literals': 0,
    'react/destructuring-assignment': 0,

    // The No List
    // --fix does weird things with these two, and the regular eslint rules
    // work fine
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    // Not Always Valuable
    'react/no-multi-comp': 0,
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-one-expression-per-line': 0,
    // rule conflict
    'react/jsx-curly-brace-presence': 0,
    // non-obvious terseness
    'react/jsx-boolean-value': 0,
    // Facebook discourages the use of .jsx. While questionable, as long
    // as we're using create-react-app/react-scripts, sticking to this might be
    // a good call
    'react/jsx-filename-extension': [2, { 'extensions': ['.js'] }],
    // Prevents us from setting classes on buttons. TODO actually do CSS
    // properly
    'react/forbid-component-props': 0,
    'react/jsx-key': 0
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
};
