<template>
  <button :class="classes" @click="onClick">
    <img
      v-if="isLoading"
      src="../assets/icons/icon-circular-arrow.svg"
      alt="loading-icon"
    />
    <img v-else src="../assets/icons/icon-next.svg" alt="search-icon" />
  </button>
</template>

<script>
export default {
  name: 'search-button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    classes() {
      return {
        button: true,
        disabled: this.isDisabled,
        spin: this.isLoading,
      }
    },
  },
  methods: {
    onClick() {
      !this.isDisabled && this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.button {
  border: none;
  border-radius: 26px;
  background-color: $btn-color;
  min-width: 50px;
  min-height: 50px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  color: white;
  font-weight: 600;
  padding: 0 20px;

  &:focus {
    @include a11y-focus-state;
  }

  &.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(.disabled):hover,
  &:not(.disabled):focus {
    transform: scale(0.95);
    background-color: darken($btn-color, 10%);
  }

  &.spin {
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    object-fit: contain;
  }
}
</style>
