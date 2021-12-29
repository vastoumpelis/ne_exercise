import React from 'react'

// component used to display a list of movies
const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="movie-container d-inline justify-content-start m-3"
          key={movie.Id}
          id={movie.Id}
          onClick={(event) =>
            event.target.id
              ? props.setMovieId(event.target.id)
              : props.setMovieId(event.target.parentElement.id)
          }
        >
          <img
            src={movie.Poster}
            alt="movie"
            className="img-fluid img-thumbnail"
          ></img>
          <div className="overlay d-block align-items-center justify-content-center">
            <div className="movie-container-title">Title: {movie.Title}</div>
            <div className="movie-container-footer">
              Year: {movie.Year} - Avg. Score: {movie.VoteAverage}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList
