<template>
  <div class="results">
    <div v-if="!isLoading && !error" class="slideshow">
      <div class="slideshow-content" :style="slideshowContentStyle">
        <MovieCard
          v-for="(movie, idx) in movies"
          :key="movie.imdbID"
          :title="movie.Title"
          :picture="movie.Poster"
          :director="movie.Director"
          :year="movie.Year"
          :rating="movie.imdbRating"
          :genre="movie.Genre"
          :is-active="index === idx"
        />
      </div>
      <div class="btn-top">
        <!-- eslint-disable-next-line prettier/prettier -->
        <a class="link" @click="goToSearch">
          Make another search
        </a>
      </div>
      <div class="btn-left">
        <button
          class="button"
          :disabled="!index"
          @click="() => goTo(index - 1)"
        >
          <img src="../assets/icons/icon-previous.svg" alt="search-icon" />
        </button>
      </div>
      <div class="btn-right">
        <button
          class="button"
          :disabled="index === movies.length - 1"
          @click="() => goTo(index + 1)"
        >
          <img src="../assets/icons/icon-next.svg" alt="search-icon" />
        </button>
      </div>
    </div>

    <Spinner v-else />
  </div>
</template>

<script>
import MovieAPI from '../services/api'
import MovieCard from '../components/movie-card'
import Spinner from '../components/spinner'

export default {
  name: 'results-page',
  components: { MovieCard, Spinner },
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    'movies-id': {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isLoading: true,
      error: null,
      index: 0,
      movies: [],
    }
  },
  computed: {
    slideshowContentStyle() {
      return {
        width: `${this.movies.length}00%`,
        transform: `translateX(-${this.index * (100 / this.movies.length)}%)`,
      }
    },
  },
  created() {
    if (this.moviesId && this.moviesId.length) {
      this.getMoviesByIDs(this.moviesId)
        .then((response) => {
          this.movies = response.map((singleResponse) => singleResponse.data)
          this.isLoading = false
          this.error = null
        })
        .catch((error) => {
          this.isLoading = false
          this.error = error.message
          console.warn('ERROR', error.message)
        })
    } else {
      this.$router.push('/')
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  unmounted() {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    getMoviesByIDs: async function (ids) {
      return await MovieAPI.getMoviesByIDs(ids)
    },
    goTo(newIndex) {
      if (newIndex < 0) {
        this.index = 0
      } else if (newIndex > this.movies.length - 1) {
        this.index = this.movies.length - 1
      } else {
        this.index = newIndex
      }
    },
    goToSearch() {
      this.$router.push('/')
    },
    onKeyDown(event) {
      event.key === 'ArrowLeft' && this.goTo(this.index - 1)
      event.key === 'ArrowRight' && this.goTo(this.index + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.results {
  background-color: #f6f7fa;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .slideshow {
    position: absolute;
    width: 80%;
    max-width: 800px;
    max-height: 700px;
    height: 80%;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .slideshow-content {
      position: absolute;
      box-sizing: border-box;
      display: flex;
      transition: transform 0.3s ease;
      height: 100%;
      z-index: 0;
    }

    .btn-left {
      position: absolute;
      top: 50%;
      right: calc(100% + 10px);
      transform: translateY(-50%);

      @include on-mobile {
        top: calc(100% + 40px);
        right: calc(100% - 50px);
      }
    }
    .btn-right {
      position: absolute;
      top: 50%;
      left: calc(100% + 10px);
      transform: translateY(-50%);

      @include on-mobile {
        top: calc(100% + 40px);
        left: calc(100% - 50px);
      }
    }

    .btn-top {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }

    .button {
      z-index: 10;
      img {
        color: white;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .link {
      border: none;
      text-decoration: none;
      color: black;
      font-size: 18px;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
