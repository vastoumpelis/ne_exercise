import React from 'react'
import { Modal } from 'react-bootstrap'

const MovieDetails = (props) => {
  return (
    <>
      <Modal show={props.showModal}>
        <Modal.Header>{props.movie.Title}</Modal.Header>
        <Modal.Body>{props.movie.Title}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default MovieDetails
