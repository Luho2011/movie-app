import React from 'react'
import "./MovieList.css"

const MovieList = (props) => {

  return (
    <>
    {props.movies.map((movie, index) =>
    <div className='row__posters'>
      <img src={movie.Poster}></img>
    </div>
     )}
    
    </>
  )
}

export default MovieList;