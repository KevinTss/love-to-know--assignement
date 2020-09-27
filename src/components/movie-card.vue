<template>
  <div :class="classes">
    <div class="content">
      <img class="poster" :src="picture" :alt="`Movie poster - ${title}`" />
      <div class="body">
        <!-- eslint-disable-next-line prettier/prettier -->
        <h2 class="title">
          {{ title }}{{ ` (${year})` }}
        </h2>
        <!-- eslint-disable-next-line prettier/prettier -->
        <p class="text">
          Director: {{ director }}
        </p>
        <!-- eslint-disable-next-line prettier/prettier -->
        <p class="text">
          Genre: {{ genre }}
        </p>
        <!-- eslint-disable-next-line prettier/prettier -->
        <p class="text">
          Rating: {{ rating }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-card',
  props: {
    director: { type: String, required: true },
    picture: { type: String, default: '' },
    title: { type: String, required: true },
    year: { type: String, required: true },
    rating: { type: String, required: true },
    genre: { type: String, required: true },
    isActive: { type: Boolean, default: false },
  },
  emits: ['click'],
  computed: {
    classes() {
      return {
        'movie-card': true,
        active: this.isActive,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-card {
  width: 100%;
  max-width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform: scale(0.9);
  opacity: 0.3;

  &.active {
    transform: scale(1);
    opacity: 1;
  }

  .content {
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);

    @include on-mobile {
      flex-direction: column;
    }

    .poster {
      height: calc(100% - 40px);
      width: 50%;
      object-fit: cover;
      margin: 20px;
      border-radius: 10px;

      @include on-mobile {
        width: calc(100% - 40px);
        height: 35%;
      }
    }

    .body {
      margin-top: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;

      @include on-mobile {
        margin: 0 20px;
      }
    }

    .title {
      padding-bottom: 20px;
      border-bottom: 1px solid #0002;
      margin-bottom: 10px;
    }

    .text {
      margin: 10px 0;
    }
  }
}
</style>
