require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/html-indent': 'off',
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-default-prop': 0,
  },
}
