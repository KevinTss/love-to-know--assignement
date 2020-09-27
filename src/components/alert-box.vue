<template>
  <div :class="classes">
    <div class="content">
      <h4 class="title">
        {{ title }}
      </h4>
      <p class="text">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-box',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['error', 'info'].includes(value),
    },
    message: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  computed: {
    classes() {
      return {
        'alert-box': true,
        [this.type]: true,
        active: !!this.message,
      }
    },
    title() {
      if (this.type === 'error') {
        return 'Something wrong occured'
      }
      return 'Info'
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
.alert-box {
  position: absolute;
  width: 100%;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  transition: all 0.3s ease;
  top: 50%;
  left: 0;
  z-index: -1;

  &.active {
    height: auto;
    opacity: 1;
    visibility: visible;
  }

  &:not(.active) {
    opacity: 0;
    visibility: hidden;
    height: 0;
  }

  &.info {
    background-color: $info-color;
    color: darken($info-color, 20%);
  }
  &.error {
    background-color: $danger-color;
    color: darken($danger-color, 20%);
  }

  .content {
    color: inherit;
    padding: 20px;
    margin-top: 30px;

    .title {
      margin-bottom: 5px;
      font-weight: 600;
    }
    .text {
      font-size: 0.8rem;
    }
  }
}
</style>
