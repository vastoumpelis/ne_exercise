import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import configData from './config.json'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import MovieSearch from './components/MovieSearch'
import Header from './components/Header'

const App = () => {
  // using useState to store the values of the below
  const [movies, setMovies] = useState([])
  const [id, setId] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [listValue, setListValue] = useState('now-playing')
  const [headingTitle, setHeadingTitle] = useState('Now Playing')

  // get "Now Playing" movies function
  const getMovieList = async (listValue) => {
    const listTitle = listValue === 'now-playing' ? 'Now Playing' : 'Top 10'
    // build URL endpoint
    const listEndpoint =
      listValue === 'now-playing' ? '/movie/now_playing' : '/movie/top_rated'
    const url =
      configData.tmdb__base_url +
      listEndpoint +
      '?api_key=' +
      configData.tmdb_api_key

    // wait for response
    const response = await fetch(url).then()
    // convert response to JSON
    const responseJson = await response.json()

    // if there are any results and create custom create data model
    if (responseJson.results) {
      var resultMovies = responseJson.results.map((result) => {
        return {
          Id: result.id,
          Overview: result.overview,
          Poster: configData.poster_base_url + result.poster_path,
          ReleaseDate: new Date(result.release_date),
          Year: new Date(result.release_date).getFullYear(),
          Title: result.title,
          VoteAverage: result.vote_average
        }
      })

      console.log({ resultMovies })

      // only keep the first half if the top-10 is clicked
      // this is because the tmdb API does not allow to limit movies returned
      if (listValue === 'top-10') {
        resultMovies = resultMovies.slice(0, 10)
      }

      // set the movies to the results
      setMovies(resultMovies)
      setHeadingTitle(listTitle)
    }
  }

  // get search movie function
  const searchMovies = async (searchValue) => {
    // build URL endpoint
    const url =
      configData.tmdb__base_url +
      `/search/movie?api_key=` +
      configData.tmdb_api_key +
      '&query=' +
      searchValue +
      '&page=1'

    // wait for response
    const response = await fetch(url).then()
    // convert response to JSON
    const responseJson = await response.json()

    // if there are any results and create custom create data model
    if (responseJson.results) {
      const searchMoviesResults = responseJson.results.map((result) => {
        return {
          Id: result.id,
          Overview: result.overview,
          Poster: configData.poster_base_url + result.poster_path,
          ReleaseDate: new Date(result.release_date),
          Year: new Date(result.release_date).getFullYear(),
          Title: result.title,
          VoteAverage: result.vote_average
        }
      })

      // change heading title
      setHeadingTitle('Search Results')

      // set the movies to the results
      setMovies(searchMoviesResults)
    }
  }

  const getMovieDetails = async (id) => {
    // build URL endpoint
    const url =
      configData.tmdb__base_url +
      '/movie/' +
      id +
      '?api_key=' +
      configData.tmdb_api_key

    // wait for response
    const response = await fetch(url).then()
    // convert response to JSON
    const responseJson = await response.json()

    // if there are any results and create custom create data model
    if (responseJson.results) {
      const nowPlayingMovies = responseJson.results.map((result) => {
        return {
          Id: result.id,
          Overview: result.overview,
          Poster: configData.poster_base_url + result.poster_path,
          ReleaseDate: new Date(result.release_date),
          Year: new Date(result.release_date).getFullYear(),
          Title: result.title,
          VoteAverage: result.vote_average
        }
      })

      console.log({ nowPlayingMovies })

      // set the movies to the results
      //setMovies(nowPlayingMovies)
    }
  }

  // only runs when the app first loads
  useEffect(() => {
    getMovieList(listValue)
  }, [])

  // runs every time the search input changes
  useEffect(() => {
    searchMovies(searchValue)
  }, [searchValue])

  // runs every time the search input changes
  useEffect(() => {
    getMovieList(listValue)
  }, [listValue])

  // main app
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="row">
          <Header listValue={listValue} setListValue={setListValue} />
          <MovieSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading={headingTitle} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App
