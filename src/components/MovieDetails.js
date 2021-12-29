import React from 'react'

const MovieDetails = (props) => {
  return (
    <div className="image-container d-inline justify-content-start m-3">
      <img
        src={props.movie.Poster}
        alt="movie"
        className="img-fluid img-thumbnail"
      ></img>
      <div className="overlay d-block align-items-center justify-content-center">
        <div className="image-container-title">Title: {props.movie.Title}</div>
        <div className="image-container-footer">
          Year: {props.movie.Year} - Avg. Score: {props.movie.VoteAverage}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
