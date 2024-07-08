require('@factful/eslint-config/patch');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@factful/eslint-config', '@factful/eslint-config/mixins/react'],
  settings: {
    react: {
      version: '18.3',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};
