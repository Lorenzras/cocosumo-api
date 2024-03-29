module.exports = {

  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
    "project": "./tsconfig.json"
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'new-cap': ['error', {'capIsNewExceptions': ['Router']}],
  },
};
