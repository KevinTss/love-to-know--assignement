import axios from 'axios'

class MovieAPI {
  static init() {
    this.headers = { 'Content-type': 'application/json' }
    this.apiKey = process.env.VUE_APP_OPEN_MOVIE_API_KEY
    this.baseUrl = `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OPEN_MOVIE_API_KEY}`
    this.basePosterUrl = `http://img.omdbapi.com/?apikey=${process.env.VUE_APP_OPEN_MOVIE_API_KEY}`
  }

  static searchByTitle(searchQuery) {
    return axios({
      method: 'get',
      url: `${this.baseUrl}&s=${searchQuery}`,
      headers: this.headers,
    })
  }

  static getMoviesByIDs(ids) {
    return Promise.all(
      ids.map((id) =>
        axios({
          method: 'get',
          url: `${this.baseUrl}&i=${id}`,
          headers: this.headers,
        })
      )
    )
  }
}

MovieAPI.init()

export default MovieAPI
