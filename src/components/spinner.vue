<template>
  <div class="container">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spinner',
}
</script>

<style lang="scss" scoped>
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid $btn-color;
      border-radius: 50%;
      animation: rotation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: $btn-color transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
}
</style>
