require('@factful/eslint-config/patch');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@factful/eslint-config/mixins/storybook'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
