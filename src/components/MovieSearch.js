import React from 'react'

// component used to display and handle a search input field
const MovieSearch = (props) => {
  return (
    <div className="movie-search col col-md-6 col-xs-12">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search movies..."
      ></input>
    </div>
  )
}

export default MovieSearch
