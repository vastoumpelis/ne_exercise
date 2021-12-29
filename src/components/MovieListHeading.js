import React from 'react'

// component used to display a heading based on a string parameter
const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  )
}

export default MovieListHeading
