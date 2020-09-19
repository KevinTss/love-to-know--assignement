module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'vue/max-attributes-per-line': "off",
    'vue/html-self-closing': "off"
  },
}
