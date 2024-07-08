require('@factful/eslint-config/patch');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@factful/eslint-config', '@factful/eslint-config/mixins/next'],
  settings: {
    react: {
      version: '18.3',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
