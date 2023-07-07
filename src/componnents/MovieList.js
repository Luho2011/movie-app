import React from 'react'
import "./MovieList.css"
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieList = (props) => {
  const WatchlistComponent = props.watchlistComponent;
  const {addMovieToWatchlist} = useContext(GlobalContext);

  return (
    <>
    {props.movies.map((movie, index) =>
      <div className='image__container'>
        <img src={movie.Poster} alt='movie'></img>
        <div onClick={() => addMovieToWatchlist(movie)} className='add__watchlist'>
          <WatchlistComponent/>
        </div>
      </div>
     )}
    </>
  )
}

export default MovieList;