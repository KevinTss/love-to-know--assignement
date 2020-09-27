<template>
  <div class="home-page">
    <div class="search-bar">
      <div class="content">
        <SearchInput
          v-model="searchInput"
          placeholder="Search movies..."
          @submit="onSearch"
        />
        <SearchButton
          label="click"
          :is-disabled="searchInput.length < 3"
          :is-loading="isLoading"
          @click="onSearch"
        />
      </div>
      <AlertBox :type="error ? 'error' : 'info'" :message="error" />
    </div>
  </div>
</template>

<script>
import MovieAPI from '../services/api'
import AlertBox from '../components/alert-box'
import SearchButton from '../components/search-button'
import SearchInput from '../components/search-input'

export default {
  name: 'home-page',
  components: {
    SearchButton,
    SearchInput,
    AlertBox,
  },
  emits: ['movies'],
  data() {
    return {
      searchInput: '',
      isLoading: false,
      error: null,
    }
  },
  methods: {
    getMoviesByTitles: async function (value) {
      return await MovieAPI.searchByTitle(value)
    },
    onSearch(value) {
      this.isLoading = true
      this.error = null
      this.getMoviesByTitles(this.searchInput)
        .then(({ data }) => {
          if (data && !data.Error) {
            const moviesID = data.Search.map(({ imdbID }) => imdbID)
            data && this.$emit('movies', moviesID)
            this.$router.push('/results')
            this.error = null
          } else {
            this.error = data.Error
          }
          this.isLoading = false
        })
        .catch((error) => console.warn(error.message))
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/main-background.jpg');
  background-size: cover;
  background-position: center center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fffc;
  }

  .search-bar {
    max-width: 550px;
    width: 75%;
    margin: auto;
    position: relative;
    z-index: 1;

    @include on-mobile {
      width: calc(100% - 20px);
    }

    .content {
      z-index: 10;
      padding: 5px;
      width: 100%;
      display: flex;
      background-color: white;
      box-shadow: '0 15px 45px 0 rgba(0, 0, 0, 1)';
      border-radius: 32px;
    }
  }
}
</style>
