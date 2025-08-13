module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
