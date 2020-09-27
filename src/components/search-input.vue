<template>
  <div :class="classes">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @keyup.enter="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'search-input',
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['input', 'submit'],
  data() {
    return { isFocused: false }
  },
  computed: {
    classes() {
      return {
        'input-wrapper': true,
        active: this.isFocused,
      }
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onFocus() {
      this.isFocused = true
    },
    onBlur() {
      this.isFocused = false
    },
    onSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  width: 100%;

  .input {
    border: none;
    width: 100%;
    min-height: 100%;
    outline: none;
    border-radius: 26px;
    background-color: white;
    font-size: 22px;
    color: $font-color;
    padding: 10px 15px;

    @include on-mobile {
      min-width: 30px;
    }

    &:hover {
      background-color: darken(white, 10%);
    }
  }

  &.active {
    @include a11y-focus-state;
  }
}

::placeholder {
  color: #{$font-color}55;
}
</style>
