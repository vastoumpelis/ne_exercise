import React from 'react'

const Header = (props) => {
  return (
    <div className="col col-md-6 col-xs-12">
      <header>
        <div className="header d-flex">
          <button
            onClick={(event) => props.setListValue(event.target.id)}
            className="btn btn-default btn-lg nav-item"
            id="now-playing"
          >
            Now Playing
          </button>
          <button
            onClick={(event) => props.setListValue(event.target.id)}
            className="btn btn-default btn-lg nav-item"
            id="top-10"
          >
            Top 10
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
