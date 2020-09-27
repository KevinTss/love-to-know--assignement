<template>
  <div id="app">
    <router-view :movies-id="resultsMovies" @movies="onMoviesFetched" />
  </div>
</template>

<script>
import MovieAPI from './services/api'

export default {
  name: 'app',
  data() {
    return {
      resultsMovies: [],
    }
  },
  methods: {
    onMoviesFetched(moviesID) {
      this.resultsMovies = [...moviesID]
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
