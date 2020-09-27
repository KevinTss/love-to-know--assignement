module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'vue/max-attributes-per-line': "off",
    'vue/html-self-closing': "off",
    // "vue/singleline-html-element-content-newline": ["warn", {
    //   "ignoreWhenNoAttributes": true,
    //   "ignoreWhenEmpty": true,
    //   "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    // }]
  },
}
