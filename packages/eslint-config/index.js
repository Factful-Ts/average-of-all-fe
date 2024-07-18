/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rushstack/eslint-config/profile/web-app'],
  rules: {
    /** interface 사용 강제하는 규칙 비활성화 */
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
  settings: {},
};
